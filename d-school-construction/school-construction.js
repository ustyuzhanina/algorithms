function findSite(data) {
  const [a, b] = data.toString().split(/\n/gm);
  const pupils = Number(a);
  const coordinates = b.split(/\s/g);

  let site;

  if (pupils % 2 === 0) {
    const start = pupils / 2 - 1;
    const end = pupils / 2;
    const middleArray = coordinates.slice(start, end + 1);
    const random = middleArray[Math.round(Math.random())];
    site = random;
  } else {
    site = coordinates[Math.floor(pupils / 2)];
  }

  return site;
}

process.stdin.on("data", (data) => {
  const result = findSite(data);
  process.stdout.write(result + "");
  process.exit();
});
