
const fs = require("fs");
const fetch = require("node-fetch");
const jsonToM3U = require("./convert");

async function main() {
  const res = await fetch(process.env.JSON_URL);
  const data = await res.json();

  const m3u = jsonToM3U(data);

  fs.writeFileSync("output.m3u", m3u);
  console.log("M3U generated");
}

main();
