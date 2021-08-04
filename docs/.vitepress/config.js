module.exports = {
    title: 'Hello VitePress',
    description: 'Just playing around.',
    markdown: {
        lineNumbers: true
    },
    base: '/VitePress/',
    // 主题配置
    themeConfig: {
        //   头部导航
        nav: [
            { text: '首页', link: '/' },
            { text: 'Redux', link: '/redux-start' },
        ],
        //   侧边导航
        sidebar: [
            { text: '我的', link: '/mine/' }
        ]
    }
}