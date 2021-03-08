const searchFilter = require("./searchFilter");

module.exports = function (config) {
  config.addPassthroughCopy("./js");

  config.addFilter("search", searchFilter);

  config.addCollection("recipe", (collection) => {
    return [...collection.getFilteredByGlob("./recipe/**/*.md")];
  });

  return {
    passthroughFileCopy: true,
  };
};
