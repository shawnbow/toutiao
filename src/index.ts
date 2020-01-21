#!/usr/bin/env node
import yargs from 'yargs';
import chalk from 'chalk';
import figlet from 'figlet';
import Telegraf from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey newbi'))
bot.launch()
console.log("telegraf started");
