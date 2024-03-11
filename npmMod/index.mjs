// const chalk = require("chalk") :- This is use for older version and it work whose file name is file_name.js


// In new version we use file_name.mjs .

// use .mjs Extension: If you're using ES6 modules, make sure your file has a .mjs extension instead of .js. Node.js treats .mjs files as ES6 modules by default.

import chalk from 'chalk';
import validator from 'validator';

console.log(chalk.red.inverse('Hello world!'));


const res = validator.isEmail('nira@jbar.com');
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));

console.log("niraj")