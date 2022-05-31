import { Client } from "discord.js";

export default (client: Client): void => {
  client.on("presenceUpdate", async (oldPresence, newPresence) => {
    console.log(oldPresence);
    console.log(newPresence);
  });
};
