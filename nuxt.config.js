import 'dotenv/config'

export default {
  ssr: false,
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Translate Thread',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
      
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.1/css/all.css', defer: true },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  generate: {
    fallback: true
  },
  plugins: [
    '~/plugins/vue-netlify',
    '~/plugins/vue-moment',
    '~/plugins/vue-clipboard',
    '~/plugins/vue-userinfo',
  ],
  /*
  ** Nuxt.js modules
  */

  modules: [
    '@nuxtjs/axios',
  ],
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
