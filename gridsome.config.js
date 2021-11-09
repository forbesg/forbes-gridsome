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
      patterns: [path.resolve(__dirname, "./src/assets/scss/vars/*.scss")]
    });
}

module.exports = {
  siteName: "Freelance Web Developer, Edinburgh",
  siteUrl: "https://forbesg.github.io",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "src/projects/**/*.md",
        typeName: "Project"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "src/articles/*.md",
        typeName: "Article"
      }
    },
    {
      use: "@gridsome/plugin-sitemap"
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-106869268-1"
      }
    }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  },
  templates: {
    Project: [
      {
        path: "/portfolio/:category/:title"
      }
    ],
    Article: [
      {
        path: "/blog/:title"
      }
    ]
  },
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ["vue-modules", "vue", "normal-modules", "normal"];

    types.forEach(type => {
      addStyleResource(config.module.rule("sass").oneOf(type));
    });

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule("scss").oneOf(type));
    });
  }
};
