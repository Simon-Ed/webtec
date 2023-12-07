// Package seems useful
const path = require('path');
let myPath = 'Downloads/message(8).txt';

console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.extname(myPath));
console.log(path.isAbsolute(myPath));
console.log(path.parse(myPath));