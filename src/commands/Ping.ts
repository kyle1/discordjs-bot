import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../Command";

export const Ping: Command = {
  name: "ping",
  description: "Returns pong",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    const content = "pong";

    await interaction.followUp({
      ephemeral: true,
      content,
    });
  },
};
