const fs = require("fs");
let fileContent = fs.readFileSync("input.txt", "utf8");

const [a, b, year] = fileContent
  .toString()
  .split(/\s/g)
  .map((str) => Number(str));

const CLEAR = 1;
const UNCLEAR = 0;

let result = CLEAR;

// оказывается требуется определить не в каком формате записана дата, определяется ли точно сама дата в календаре. К примеру, "3 марта" в любом случае точно определяетсяю Для этого условия необходимо добавила в if "&& a !== b"
if (a <= 12 && b <= 12 && a !== b) {
  result = UNCLEAR;
}

fs.writeFileSync("output.txt", result);
