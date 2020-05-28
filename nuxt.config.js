import axios from "axios"
let dynamicRoutes = async () => {
  const routes = await axios
    .get("http://host-wordpress.test/wp-json/wp/v2/posts")
    .then(res => {
      return res.data.map(post => `${post.slug}`)
    })
    const p1 = await axios
    .get("http://host-wordpress.test/wp-json/wp/v2/posts?page=1&per_page=20")
    .then(res => {
      return res.data.map(post => `${post.slug}`)
    })
    const p2 = await axios
    .get("http://host-wordpress.test/wp-json/wp/v2/pages")
    .then(res => {
      return res.data.map(page => `/pages/${page.slug}`)
    })
    const data = await p1.concat(p2)
    //const result = await data.map(list => `${list.slug}`)
    //console.log()
  return data
}

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: { lang: 'en' },
    title: "News Box",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "/style.css" }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/sass/main.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vue-lazyload', ssr: false },
    { src: '~/plugins/lazy-image', ssr: false},
    "~/plugins/posts.server.js",
    //"~/plugins/tags.server.js",
    "~/plugins/dateformat.js"
  ],
  generate: {
    routes: dynamicRoutes
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  router: {
      linkActiveClass: 'active-link',
      linkExactActiveClass: 'active'
    },
  transition: 'slide-fade'
}
