const { description } = require('../../package')

module.exports = {
  title: '4923.py', // * Ref：https://v1.vuepress.vuejs.org/config/#title
  description: '"📦 🎨 Api friendly theme for vuepress!" they said', // * Ref：https://v1.vuepress.vuejs.org/config/#description
  theme: 'api',  // https://github.com/sqrthree/vuepress-theme-api
  base: '/vuepress/',
  locales: {
    '/': {
      lang: 'en-US',
      title: '4923.py',
      text: 'English',
      description: '"📦 🎨 Api friendly theme for vuepress!" they said'
    },
    '/kr/': {
      lang: 'zh-hans',
      title: '4923.py',
      text: '한국어',
      description: '"📦 🎨 RESTful API 친화적인 vuepress 테마"라고 합니다.'
    },
  },
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "192x192",
        href: "images/maskable_icon_x192.png",
      },
    ],

    // Status Bar
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],

    // GA
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-35584GW730",
      },
    ],
    [
      "script",
      {},
      ["window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-35584GW730');"
      ]
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '4923/vuepress',
    docsDir: '4923/vuepress',
    // editLinks: false,
    // editLinkText: '',
    lastUpdated: false,

    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
      },
      '/kr/': {
        selectText: '언어 선택',
        label: '한국어',
      },
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: "새 컨텐츠가 등록되었습니다. 새로고침 버튼을 눌러주세요😀",
          buttonText: "새로고침",
        },
      }
    ],
    "@vuepress/last-updated",
  ]
}
