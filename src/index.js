const { config } = require("dotenv");
const { Client, Intents } = require("discord.js");
const { REPLIES } = require("./lib");

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

client.on("messageCreate", (message) => {
  if (message.content === "!ping") {
    message.reply("pong");
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
