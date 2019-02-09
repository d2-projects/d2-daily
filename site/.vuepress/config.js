module.exports = {
  title: 'D2 日报',
  head: [
    ['meta', { name: 'keywords', content: 'awesome,前端插件,前端开发,vue插件,vue组件,设计资源,程序员网址导航,设计师网址导航' }],
    ['meta', { name: 'description', content: '收集开发和设计领域相关资源，服务每位创造行业工作者' }],
    ['link', { rel: 'icon', href: '/resource/logo/normal.png' }],
    // 依赖样式
    ['link', { rel: 'stylesheet', href: '/library/hint.min.css' }],
    ['link', { rel: 'stylesheet', href: '/library/github-language-colors.css' }],
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
        title: '2019 年 01 月',
        collapsable: false,
        children: [ '02', '03', '04', '07', '08', '10', '15', '17', '22', '25', '28' ].map(e => `/daily/2019/01/${e}`)
      },
      {
        title: '2018 年 12 月',
        collapsable: false,
        children: [ '03', '04', '05', '06', '07', '10', '11', '12', '13', '17', '18', '19', '20', '21', '24', '25', '26', '27', '28' ].map(e => `/daily/2018/12/${e}`)
      },
      {
        title: '2018 年 11 月',
        collapsable: false,
        children: [ '01', '02', '05', '06', '07', '08', '09', '12', '13', '14', '15', '16', '19', '20', '21', '22', '23', '26', '27', '28', '29' ].map(e => `/daily/2018/11/${e}`)
      },
      {
        title: '2018 年 10 月',
        collapsable: false,
        children: [ '17', '18', '19', '22', '23', '24', '25', '26', '29', '30', '31' ].map(e => `/daily/2018/10/${e}`)
      }
    ]
  }
}