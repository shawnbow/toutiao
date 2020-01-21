#!/usr/bin/env node
// import * as yargs from 'yargs';
// import {EosClient, ITokenDesc} from './eos/EosClient';
// import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig';
// import { isValidPrivate } from 'eosjs-ecc';
// import * as chalk from 'chalk';
// import * as figlet from 'figlet';
// import getApiEndpoints from 'eos-endpoint';
import Telegraf from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()
console.log("telegraf started");
