#!/usr/bin/env node

import reverse from '../index.js';

console.log(reverse(Number(process.argv[process.argv.length - 1])));
