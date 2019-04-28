const emoji = require("remark-emoji");
const withPlugins = require("next-compose-plugins");
const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
  options: {
    mdPlugins: [emoji],
  },
});
const withCSS = require("@zeit/next-css");

let config = {
  webpack: (config, { dev, isServer }) => {
    // When running an export, also include the script to build RSS feed.
    if (isServer && !dev) {
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = { ...(await originalEntry()) };
        entries["./utils/buildRSS.js"] = "./utils/buildRSS.js";
        return entries;
      };
    }
    return config;
  },
  exportPathMap: (defaultPathMap, { dev, dir, outDir }) => {
    // When running an export, run the script that builds the RSS feed.
    if (!dev) {
      const generateRSS = require("./.next/server/utils/buildRSS.js").default;
      generateRSS(outDir);
    }
    return defaultPathMap;
  },
};

module.exports = withPlugins(
  [
    [
      withMDX,
      {
        pageExtensions: ["js", "jsx", "md", "mdx"],
      },
    ],
    [withCSS],
  ],
  config
);
