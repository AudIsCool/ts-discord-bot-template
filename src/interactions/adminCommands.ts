import { CommandInteraction } from "discord.js";
import { Discord, Slash } from "discordx";

@Discord()
export abstract class AdminCommandHandler {
    @Slash({ name: "auds_test", description: 'test' })
    async auds_test(interaction: CommandInteraction) {
        await interaction.reply("Auds test :)");
    }
}
