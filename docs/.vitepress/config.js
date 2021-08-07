module.exports = {
    title: 'Hello VitePress',
    description: 'Just playing around.',
    base: '/VitePress/',
    // 主题配置
    themeConfig: {
        //   头部导航
        nav: [
            { text: '首页', link: '/' },
        ],
        //   侧边导航
        sidebar: [
            { text: '测试 Markdown', link: '/test' },
            { text: 'Redux', link: '/redux-start' },
            { text: 'Other Links', link: '/links' }
        ]
    }
}