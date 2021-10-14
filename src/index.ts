import { config } from "dotenv";
import { Client, Intents } from "discord.js";
import { REPLIES } from "./lib";

config();

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log("Ready!");
});

client.on("messageCreate", (message) => {
  message.reply(REPLIES.HI);
});

client.login(process.env.DISCORD_BOT_TOKEN);
