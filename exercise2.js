let result = 0;

for (let i = 2; i < Number(process.argv.length); i++) {
  result = result + Number(process.argv[i]);
}

console.log(result);
