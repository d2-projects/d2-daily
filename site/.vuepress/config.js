const fileList = require('../../scripts/file-list.js')

module.exports = {
  title: 'D2 日报',
  description: '收集开发和设计领域相关资源，服务每位创造行业工作者',
  head: [
    ['meta', { name: 'keywords', content: 'awesome,前端插件,前端开发,vue插件,vue组件,设计资源,程序员网址导航,设计师网址导航' }],
    ['meta', { name: 'description', content: '收集开发和设计领域相关资源，服务每位创造行业工作者' }],
    ['link', { rel: 'icon', href: '/resource/logo/normal.png' }],
    // 依赖样式
    ['link', { rel: 'stylesheet', href: '/library/hint.min.css' }],
    ['link', { rel: 'stylesheet', href: '/library/github-language-colors.css' }],
    // 依赖的脚本
    ['script', { src: '/library/fontawesome-5.3.1.js' }],
    // 统计代码
    ['script', {}, 'var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?fec739493bdcbae03ff2154ede1ed6c7";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();']
  ],
  plugins: {
    '@vuepress/search': {
      searchMaxSuggestions: 10
    }
  },
  themeConfig: {
    sidebarDepth: 0,
    docsDir: 'site',
    nav: [
      { text: '日报', link: '/post/' },
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
      ...[
        [ '2019', '08' ],
        [ '2019', '07' ],
        [ '2019', '06' ],
        [ '2019', '05' ],
        [ '2019', '04' ],
        [ '2019', '03' ],
        [ '2019', '02' ],
        [ '2019', '01' ],
        [ '2018', '12' ],
        [ '2018', '11' ],
        [ '2018', '10' ]
      ].map(mounth => ({
        title: `${mounth[0]} 年 ${mounth[1]} 月`,
        collapsable: false,
        children: fileList(mounth[0], mounth[1])
      }))
    ]
  }
}