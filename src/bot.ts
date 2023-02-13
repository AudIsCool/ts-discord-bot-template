import { Client } from "discordx";
import { importx } from "@discordx/importer";
import { IntentsBitField } from "discord.js";


export class Bot {
    // The Discord Client itself
    private static _client: Client;

    static get Client(): Client {
        return this._client;
    }

    static async start() {
        this._client = new Client({
            botGuilds: [(client) => client.guilds.cache.map((guild) => guild.id)],

            // If you're missing the intents on your Discord APP this WILL Fail
            intents: [
                IntentsBitField.Flags.Guilds,
                IntentsBitField.Flags.MessageContent,
                IntentsBitField.Flags.GuildMembers,
                IntentsBitField.Flags.GuildMessageReactions,
                // "GuildMembers", 
                // "GuildMessages", 
                // "MessageContent", 
                // "GuildMessageReactions"
            ],
            silent: false,
        });

        this.Client.on("ready", async () => {
            // Setup application commands ||  Super Important
            await this.Client.initApplicationCommands(); 
            
            // Fire final call
            console.log('bot >> ready');
            console.log(`bot >> logged in as: ${Bot._client.user?.username}`);
            console.log(`bot >> intents >> ${Bot._client.options.intents}`);
            console.log(`bot >> intents >> ready wrapped up, doing runtime now :)`);
        });

        this.Client.on("interactionCreate", (interaction) => {
            // console.log(interaction);
            // console.log(JSON.stringify(interaction, null, 4));
            this.Client.executeInteraction(interaction);
        });

        
    }

    static async bootupBot(token: string) {
        await this._client.login(token);
    }

    /**
     * This function imports all of your slash command files and allows them to be used as handlers
     * for incoming interactions. 
     * 
     * If you run into `TypeError [ERR_INVALID_FILE_URL_HOST]: File URL host must be "localhost" or empty on linux`
     * Downgrade importx/importer to 1.1.2
     */
    static async importFiles() {
        const interactionPath = "./build/interactions";
        const eventsPath = "./build/events";

        const buildables = [interactionPath, eventsPath];
        for (const buildable of buildables) {
            console.log(`bot >> Importing ${buildable}`);

            await importx(`${buildable}/**/*.js`).then(() => {
                console.log(`bot >> All ${buildable} have been loaded in`);
            });
        }

    }

}