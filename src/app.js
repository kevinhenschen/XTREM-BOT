const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
require('./modules/init')(client, process.env.TOKEN);

