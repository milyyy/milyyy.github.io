const jsFile = require("./config/jsFile")
const vueFile = require("./config/vueFile")

module.exports = {
  title: 'ON THY WAY',
  description: '不积跬步无以至千里，不积小流无以成江海。',

  markdown: {
    // lineNumbers: true // 代码块显示行号
  },

  themeConfig: {
    sidebar: 'auto',
    // sidebarDepth: 1, // 解析2级标题到目录
    lastUpdated: 'Last Updated',
    editLinks: true,
    smoothScroll: true,
    editLinkText: '帮助我改善此页面',

    docsDir: 'docs',

    // 顶部导航栏配置
    nav: [
      { text: 'JavaScript', link: '/javascript/' },
      { text: 'GitHub', link: 'https://github.com/milyyy' },
      {
        text: '分类',
        items: [
          {
            text: 'JavaScript',
            link: '/javascript/'
          },
          {
            text: 'vuejs',
            link: '/vuejs/'
          }
        ]
      },
      { text: '关于', link: '/about'}
    ],

    // 左侧菜单栏
    sidebar: {
      // '/javaScript/': jsFile,
      // '/vuejs/': vueFile,
      '/javaScript/': [
        {
          title: '基础',
          collapsable: false,
          children: jsFile.basic
        },
        {
          title: '算法',
          collapsable: false,
          children: jsFile.algorithm
        },
        {
          title: '方法',
          collapsable: false,
          children: jsFile.methods  
        }
      ],
      '/vuejs/': [
        {
          title: '基础',
          collapsable: false,
          children: vueFile.basic
        },
        {
          title: '组件',
          collapsable: false,
          children: vueFile.components
        },
        {
          title: '其他',
          collapsable: false,
          children: vueFile.others 
        },
      ]
    }
  }

}