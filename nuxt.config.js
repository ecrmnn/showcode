export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Showcode',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Generate beautiful images of code.' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:description', content: 'Generate beautiful images of code.' },
      { name: 'twitter:title', content: 'Showcode' },
      { name: 'twitter:image', content: 'https://showcode.app/twitter_summary_card.png' },
      { name: 'twitter:site', content: 'https://showcode.app' },
      { name: 'twitter:creator', content: '@stevethebauman' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      {
        rel: "stylesheet",
        crossOrigin: "anonymous",
        dataName:"vs/editor/editor.main",
        href: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.29.1/min/vs/editor/editor.main.css"
      }
    ],
    script: [
      { src: 'https://unpkg.com/shiki', crossOrigin: "anonymous" },
      { innerHTML: `var require = { paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.29.1/min/vs' } };` },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.29.1/min/vs/loader.js',
        crossOrigin: "anonymous",
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.29.1/min/vs/editor/editor.main.nls.js',
        crossOrigin: "anonymous",
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.29.1/min/vs/editor/editor.main.js',
        crossOrigin: "anonymous",
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.29.1/min/vs/basic-languages/php/php.min.js',
        crossOrigin: "anonymous",
      }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/v-dragged.js',
    '~/plugins/vue-tailwind.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        chunks: 'all',
        maxSize : 256000
      }
    }
  }
}
