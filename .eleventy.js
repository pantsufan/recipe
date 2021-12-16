const pluginRss = require("@11ty/eleventy-plugin-rss");
module.exports = function (config) {
  config.addPlugin(pluginRss);
  config.addPassthroughCopy("./js");
  config.addPassthroughCopy("css");

  return {
    passthroughFileCopy: true,
  };
};
