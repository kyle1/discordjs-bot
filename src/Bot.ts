import { Client, Intents } from "discord.js";
import "dotenv/config";
import interactionCreate from "./listeners/interactionCreate";
import presenceUpdate from "./listeners/presenceUpdate";
import ready from "./listeners/ready";

console.log("Bot is starting...");

const client = new Client({
  intents: [Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES],
});

ready(client);
interactionCreate(client);
presenceUpdate(client);

client.login(process.env.TOKEN);
