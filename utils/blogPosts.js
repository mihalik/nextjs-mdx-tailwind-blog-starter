const postFileNames = preval`
  module.exports = require("fs").readdirSync("./pages/blog")
  `;

const posts = postFileNames.map(name => {
  const { default: Component, meta } = require("../pages/blog/" + name);

  return {
    Component,
    title: meta.title,
    description: meta.description,
    fileName: name,
    path: "/blog/" + name,
    meta,
  };
});

export default posts;
