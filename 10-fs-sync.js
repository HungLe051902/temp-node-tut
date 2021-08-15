const { readFileAsync, writeFileAsync } = require("fs");
console.log('start');
const first = readFileAsync("./folder/first.txt");
const second = readFileAsync("./folder/second.txt");

writeFileAsync('./folder/result-async.txt',
  `Result: ${first}, ${second}`,
  { flag: 'a'}
)
