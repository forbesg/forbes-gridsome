// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/scss/styles.scss'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  /* Add Head Meta Tags */
  head.meta.push({
    key: 'description',
    name: 'description',
    content: 'Forbes Gray is a Freelance Web Developer in Edinburgh, specialising in fast, responsive, SEO friendly websites and web applications'
  }),
  head.meta.push({
    key: 'author',
    name: 'author',
    content: 'Forbes Gray <fnbg75@gmail.com>' 
  }),
  head.link.push({
    rel: 'apple-touch-icon',
    sizes: '108x180',
    href: '/apple-touch-icon.png'
  })
  head.link.push({
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon-32x32.png'
  })
  head.link.push({
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon-16x16.png'
  })
  head.link.push({
    rel: 'manifest',
    href: '/site.webmanifest'
  })
  head.link.push({
    rel: 'mask-icon',
    href: '/safari-pinned-tab.svg',
    color: '#5bbad5'
  })
  head.meta.push({
    name: 'msapplication-TileColor',
    content: '#00aba9'
  })
  head.meta.push({
    name: 'theme-color',
    content: '#083749'
  })
}
