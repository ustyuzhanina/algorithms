const fs = require("fs");
let fileContent = fs.readFileSync("input.txt", "utf8");

const [taskResult, interactorVerdict, checkerVerdict] = fileContent
  .toString()
  .split(/\n/gm)
  .map((str) => Number(str));

//just in case
// -128 >= taskResult >= 127;
// 0 >= interactorVerdict >= 7;
// 0 >= checkerVerdict >= 7;

let verdict;

switch (interactorVerdict) {
  case 0:
    taskResult !== 0 ? (verdict = 3) : (verdict = checkerVerdict);
    break;
  case 1:
    verdict = checkerVerdict;
    break;
  case 4:
    taskResult !== 0 ? (verdict = 3) : (verdict = 4);
    break;
  case 6:
    verdict = 0;
    break;
  case 7:
    verdict = 1;
    break;
  default:
    verdict = interactorVerdict;
}

fs.writeFileSync("output.txt", verdict);
