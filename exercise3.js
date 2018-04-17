const fs = require('fs')

let file = fs.readFileSync(process.argv[2], 'utf8');

console.log(file.split('\n').length - 1);
