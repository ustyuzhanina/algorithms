function getVerdict(data) {
  const [taskResult, interactorVerdict, checkerVerdict] = data
    .toString()
    .split(/\n/gm)
    .map((str) => Number(str));

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
}

process.stdin.on("data", (data) => {
  const result = getVerdict(data);
  process.stdout.write(result + "");
  process.exit();
});
