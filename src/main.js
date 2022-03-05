// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "~/assets/scss/styles.scss";

const hostname = process.env.GRIDSOME_HOSTNAME;

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  /* Add Head Meta Tags */
  head.meta.push({
    key: "description",
    name: "description",
    content:
      "Forbes Gray is a Freelance Website Developer in Edinburgh, specialising in fast, responsive, SEO friendly websites and web applications using modern web technologies."
  });

  head.meta.push({
    key: "og:description",
    property: "og:description",
    content:
      "Forbes Gray is a Freelance Website Developer in Edinburgh, specialising in fast, responsive, SEO friendly websites and web applications using modern web technologies."
  });

  head.meta.push({
    key: "og:image",
    property: "og:image",
    content: `${hostname}/forbes-gray-web-developer.jpg`
  });

  head.meta.push({
    key: "og:image:width",
    property: "og:image:width",
    content: "1200"
  });

  head.meta.push({
    key: "og:image:height",
    property: "og:image:height",
    content: "630"
  });

  head.meta.push({
    key: "og:image:alt",
    property: "og:image:alt",
    content: "Forbes Gray, Website Developer Edinburgh"
  });

  head.meta.push({
    key: "og:title",
    property: "og:title",
    content: "Freelance Web Developer Edinburgh | Forbes Gray"
  });

  head.meta.push({
    key: "og:url",
    property: "og:url",
    content: `${hostname}/`
  });

  head.meta.push({
    key: "og:site_name",
    property: "og:site_name",
    content: "Forbes Gray | Website Developer Edinburgh"
  });

  head.meta.push({
    key: "og:type",
    property: "og:type",
    content: "website"
  });

  head.meta.push({
    key: "og:locale",
    property: "og:locale",
    content: "en_GB"
  });

  head.meta.push({
    key: "twitter:card",
    name: "twitter:card",
    content: "summary_large_image"
  });

  head.meta.push({
    key: "twitter:title",
    name: "twitter:title",
    content: "Freelance Web Developer Edinburgh | Websites and Web Applications"
  });

  head.meta.push({
    key: "twitter:description",
    name: "twitter:description",
    content:
      "Forbes Gray is a Freelance Web Developer in Edinburgh, specialising in fast, responsive, SEO friendly websites and web applications using modern web technologies."
  });

  head.meta.push({
    key: "twitter:image",
    name: "twitter:image",
    content: `${hostname}/forbes-gray-web-developer.jpg`
  });

  head.meta.push({
    key: "twitter:site",
    name: "twitter:site",
    content: "@4beez"
  });

  head.meta.push({
    key: "twitter:creator",
    name: "twitter:creator",
    content: "@4beez"
  });

  head.meta.push({
    key: "author",
    name: "author",
    content: "Forbes Gray <fnbg75@gmail.com>"
  });

  head.link.push({
    key: "canonical",
    rel: "canonical",
    href: `${hostname}/`
  });

  head.link.push({
    rel: "preconnect",
    href: "https://fonts.gstatic.com"
  });

  head.link.push({
    rel: "preload",
    as: "style",
    href:
      "https://fonts.googleapis.com/css2?family=Catamaran:wght@400;700&family=Montserrat:wght@700&display=swap"
  });

  head.link.push({
    rel: "apple-touch-icon",
    sizes: "108x180",
    href: "/apple-touch-icon.png"
  });

  head.link.push({
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png"
  });

  head.link.push({
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png"
  });

  head.link.push({
    rel: "manifest",
    href: "/site.webmanifest"
  });

  head.link.push({
    rel: "mask-icon",
    href: "/safari-pinned-tab.svg",
    color: "#5bbad5"
  });

  head.meta.push({
    name: "msapplication-TileColor",
    content: "#00aba9"
  });

  head.meta.push({
    name: "theme-color",
    content: "#083749"
  });

  head.meta.push({
    name: "robots",
    content: "all"
  });
}
