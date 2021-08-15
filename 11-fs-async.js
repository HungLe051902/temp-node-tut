const { readFile, writeFile } = require("fs");
console.log(1);
readFile("test.txt", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./folder/first.txt", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./folder/result.txt",
      `The result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(2);
      }
    );
  });
});
console.log("next");
