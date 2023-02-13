import { Client } from "discord.js";
import { ArgsOf, Discord, On } from "discordx";

import { reduceClientToUserId } from "../utility/client.js";

@Discord()
export abstract class MessageDetection {
    @On({ event: "messageCreate" })
    async onMessage([message]: ArgsOf<"messageCreate">, client: Client): Promise<void> {
        // Ignore all messages from ourself || You shuold prolly move this into a guard
        if (message.author.id === reduceClientToUserId(client)) return;
        if (!message.member) return;

        // Do something with it 
        console.log(`message created: ${message.author.tag} - ${message.content}`)
    }

    @On({ event: "messageDelete" })
    async onMessageDel([message]: ArgsOf<"messageCreate">, client: Client): Promise<void> {
        // Ignore all messages from ourself 
        if (message.author.id === reduceClientToUserId(client)) return;
        if (!message.member) return;

        // Do something with it 
        console.log(`message deleted: ${message.author.tag} - ${message.content}`);
    }

}