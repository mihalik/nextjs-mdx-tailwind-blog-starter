import fs from "fs";
import path from "path";
import RSS from "rss";

/* Originally from zeit/next-site, made a bit more generic */

const SITE_URL = "https://example.com";

function importAll(r) {
  return r.keys().map(r);
}

const previewItems = importAll(
  require.context("../pages/blog", false, /\.mdx$/)
);

function dateSortDesc(a, b) {
  const date1 = new Date(a.meta.date);
  const date2 = new Date(b.meta.date);
  if (date1 > date2) return -1;
  if (date1 < date2) return 1;
  return 0;
}

function generate(outputPath) {
  const feed = new RSS({
    title: "Example blog",
    site_url: SITE_URL,
    feed_url: SITE_URL + "/feed.xml",
  });

  previewItems.sort(dateSortDesc).map(({ meta }) => {
    feed.item({
      title: meta.title,
      guid: meta.link,
      url: SITE_URL + meta.link,
      date: meta.date,
      description: meta.description,
    });
  });

  const rss = feed.xml({ indent: true });
  fs.writeFileSync(path.join(outputPath, "feed.xml"), rss);
}

export default generate;
