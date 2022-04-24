export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'loree-lansot',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/simple-parallax-js@5.5.1/dist/simpleParallax.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'http://fonts.cdnfonts.com/css/ballet-harmony' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontawesome'
  ],
  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Ultra: true,
      Bevan: true,
      Lobster: true,
      Shrikhand: true,
      Pattaya: true,
      'Bree Serif': true,
      'Fugaz One': true,
      Lalezar: true,
      'Lilita One': true,
      'Noto Serif JP': true,
      'Oleo Script': true,
      'Paytone One': true,
      'Secular One': true,
    }
  },
  fontawesome: {
    icons:{
      solid:true,
      brands:true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      "gsap"
    ]
  }
}
