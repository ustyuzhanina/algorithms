const fs = require("fs");
let fileContent = fs.readFileSync("input.txt", "utf8");

const [totalSt, a, b] = fileContent
  .toString()
  .split(/\s/g)
  .map((str) => Number(str));

const array = [];

for (let i = 1; i <= totalSt; i++) {
  array.push(i);
}

let stations;

if (totalSt > 2) {
  const stGeton = Math.min(a, b);
  const stGetoff = Math.max(a, b);

  const stClockwise = array.slice(array[stGeton], array[stGetoff - 1]).length;
  const before = array.slice(0, array[stGeton - 1]).length - 1;
  const after = array.slice(stGetoff, array[array.length - 1]).length;
  const stClockunwise = before + after;

  stations = Math.min(stClockwise, stClockunwise);
} else {
  stations = 0;
}

fs.writeFileSync("output.txt", stations);
