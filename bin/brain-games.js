#!/usr/bin/env node
import requestName from '../src/cli.js';
import { greetUser } from '../src/utils.js';

console.log('Welcome to the Brain Games!');
const name = requestName();
greetUser(name);
