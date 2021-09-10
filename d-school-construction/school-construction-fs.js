const fs = require("fs");
let fileContent = fs.readFileSync("input.txt", "utf8");

const [a, b] = fileContent.toString().split(/\n/gm);
const pupils = Number(a);
const coordinates = b.split(/\s/g);

let site;

if (pupils % 2 === 0) {
  const start = pupils / 2 - 1;
  const end = pupils / 2;
  const middleArray = coordinates.slice(start, end + 1);
  const random = middleArray[Math.round(Math.random())];
  site = random;

  console.log(middleArray);
} else {
  site = coordinates[Math.floor(pupils / 2)];
}

fs.writeFileSync("output.txt", site);
