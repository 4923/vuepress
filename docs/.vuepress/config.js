const { description } = require('../../package')

module.exports = {
  title: '4923.py', // * Ref：https://v1.vuepress.vuejs.org/config/#title
  description: '"Api friendly theme for vuepress!" they said', // * Ref：https://v1.vuepress.vuejs.org/config/#description
  theme: 'api',  // https://github.com/sqrthree/vuepress-theme-api

  base: '/vuepress/',

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
    nav: [
      {
        text: 'Resume',
        link: 'https://programmers.co.kr/pr/202003774y_5084'
      }
    ],
    locales: {
      '/': {
        sidebarGroupOrder: [
          'intro',
          'computer-science',
          'web-basic',
          'Django'
        ]
      },
      '/kr/': {
        sidebarGroupOrder: [
          'intro',
          'computer-science',
          'web-basic',
          'Django'
        ]
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
