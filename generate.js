const fs = require("fs");
const fetch = require("node-fetch");
const jsonToM3U = require("./convert");

async function main() {
  const res = await fetch(process.env.JSON_URL, {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Accept": "application/json"
    }
  });

  const text = await res.text();

  // Debug if needed
  if (text.startsWith("<")) {
    throw new Error("Got HTML instead of JSON. Likely blocked.");
  }

  const data = JSON.parse(text);

  const m3u = jsonToM3U(data);

  fs.writeFileSync("output.m3u", m3u);
  console.log("M3U generated");
}

main();
