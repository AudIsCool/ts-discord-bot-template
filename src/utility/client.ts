import { Client } from "discord.js";

export function reduceClientToUserId(client: Client): string {
    if (client.user) return client.user.id;
    if ((client as any).bot) return (client as any).bot.id

    throw new Error(`No id was found in client D:`);
}