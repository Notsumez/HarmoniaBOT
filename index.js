require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const token = process.env.TOKEN;

const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildVoiceStates,
    ],
  });
  
  client.once('ready', () => {
    console.log('Bot está online!');
  });

client.login(token);