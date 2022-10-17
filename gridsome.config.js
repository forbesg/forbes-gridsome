// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/assets/scss/vars/*.scss")],
    });
}

module.exports = {
  siteName: "Freelance Web Developer, Edinburgh",
  siteUrl: "https://forbesg.github.io",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "src/content/projects/**/*.md",
        typeName: "Project",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "src/content/articles/*.md",
        typeName: "Article",
        refs: {
          team: "Team",
          tags: "Tag",
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "src/content/services/*.md",
        typeName: "Service",
        route: "/services/:slug",
        // refs: {
        //   team: "Team",
        //   tags: "Tag"
        // }
      },
    },
    {
      // Add Authors collection
      use: "@gridsome/source-filesystem",
      options: {
        path: "src/content/team/*.md",
        typeName: "Team",
        route: "/team/:id",
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-106869268-1",
      },
    },
  ],
  transformers: {
    remark: {
      plugins: [
        // require plugin manually
        require("remark-attr"),
      ],
    },
  },
  templates: {
    Project: [
      {
        path: "/portfolio/:category/:title",
      },
    ],
    Article: [
      {
        path: "/blog/:title",
      },
    ],
    Team: [
      {
        path: "/meet-the-team/:name",
      },
    ],
    Tag: [
      {
        path: "/blog/tags/:slug",
      },
    ],
    Service: [
      {
        path: "/services/:slug",
      },
    ],
  },
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ["vue-modules", "vue", "normal-modules", "normal"];

    types.forEach((type) => {
      addStyleResource(config.module.rule("sass").oneOf(type));
    });

    // or if you use scss
    types.forEach((type) => {
      addStyleResource(config.module.rule("scss").oneOf(type));
    });
  },
};
