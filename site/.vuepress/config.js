module.exports = {
  title: 'D2 日报',
  head: [
    ['meta', { name: 'keywords', content: 'awesome,前端插件,前端开发,vue插件,vue组件,设计资源,程序员网址导航,设计师网址导航' }],
    ['meta', { name: 'description', content: '收集开发和设计领域相关资源，服务每位创造行业工作者' }],
    ['link', { rel: 'icon', href: '/resource/logo/normal.png' }],
    // 依赖样式
    ['link', { rel: 'stylesheet', href: '/library/hint.min.css' }],
    // 依赖的脚本
    ['script', { src: '/library/fontawesome-5.3.1.js' }]
  ],
  plugins: [
    [ '@vuepress/search', { searchMaxSuggestions: 10 } ]
  ],
  themeConfig: {
    docsDir: 'site',
    nav: [
      { text: '日报', link: '/daily/' },
      { text: '参与分享', link: '/article/chrome-extension' }
    ],
    sidebar: [
      {
        title: '文章',
        collapsable: false,
        children: [
          [ '/article/chrome-extension', '参与分享' ]
        ]
      },
      {
        title: '日报',
        collapsable: false,
        path: '/daily/',
        children: [
          '/daily/2019/01/28',
          '/daily/2019/01/25'
        ]
      }
    ]
  }
}