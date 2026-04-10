
function jsonToM3U(data) {
  let m3u = "#EXTM3U\n";

  for (const category in data) {
    const channels = data[category];

    channels.forEach(ch => {
      const name = (ch.name || "").trim();
      const logo = ch.logo || "";
      const url = ch.url || "";

      if (!url) return;

      m3u += `#EXTINF:-1 tvg-logo="${logo}" group-title="${category.trim()}",${name}\n`;
      m3u += `${url}\n`;
    });
  }

  return m3u;
}

module.exports = jsonToM3U;
