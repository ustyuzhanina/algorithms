function defineDateClarity(data) {
  const [a, b, year] = data
    .toString()
    .split(/\s/g)
    .map((str) => Number(str));

  const CLEAR = 1;
  const UNCLEAR = 0;

  let result = CLEAR;

  if (a <= 12 && b <= 12 && a !== b) {
    result = UNCLEAR;
  }

  return result;
}

process.stdin.on("data", (data) => {
  const result = defineDateClarity(data);
  process.stdout.write(result + "");
  process.exit();
});
