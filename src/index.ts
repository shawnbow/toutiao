#!/usr/bin/env node
import * as yargs from 'yargs';
import {EosClient, ITokenDesc} from './EosClient';
import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig';
import { isValidPrivate } from 'eosjs-ecc';
import * as chalk from 'chalk';
import * as figlet from 'figlet';
import getApiEndpoints from 'eos-endpoint';

console.log(isValidPrivate);