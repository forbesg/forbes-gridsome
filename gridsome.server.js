// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(action => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const tags = action.addCollection("Tag");
    tags.addNode({
      id: "1",
      title: "JAMStack",
      slug: "jam-stack"
    });
    tags.addNode({
      id: "2",
      title: "Static Sites",
      slug: "static-sites"
    });
  });

  api.createPages(({ createPage }) => {
    // createPage({
    //   path: "/blog/tags/:tag",
    //   component: "./src/templates/Tags.vue"
    // });
  });
};
