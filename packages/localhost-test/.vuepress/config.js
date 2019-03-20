module.exports = {
    title: 'VuTeX',
    description: '',
    dest: './static/',
    serviceWorker: true,
    evergreen: true,
    themeConfig: {
        github: 'Moe-Net',
        logo: 'https://vuejs.org/images/logo.png',
        accentColor: '#ac0b39',
        per_page: 10,
        lastUpdated: 'Last Updated', // string | boolean
        date_format: 'yyyy-MM-dd HH:mm:ss',
        nav: [
            { text: 'Home', link: '/', root: true },
            { text: 'Tags', link: '/tag/', tags: true },
            { text: 'Github', link: 'https://github.com/Moe-Net/VuTeX' },
        ],
    },
    configureWebpack: {
        module: {
            rules: [{
                test: /\.ts$/,
                use: 'ts-loader',
            }],
        },
        resolve: {
            extensions: ['.ts'],
        },
    },
};
