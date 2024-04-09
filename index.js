const {Telegraf} = require("telegraf");
const dotenv = require('dotenv');

dotenv.config();
const token = process.env.TELEGRAM_BOT_API_TOKEN;

const bot = new Telegraf(token);

bot.start((ctx) => ctx.reply("Welcome to Manglesh's coding bot"));
bot.on('sticker', (ctx) => ctx.reply('😆'));
bot.command('')
bot.launch();