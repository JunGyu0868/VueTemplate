const path = require('path');
const ansiRegx = require('ansi-regex');

function resolveSrc(_path) {
	return path.join(__dirname, _path);
}

module.exports = {
	outputDir: './public',
	// publicPath: '/wantpic',
	indexPath: 'index.html',
	devServer: {
		port: 3000,
		proxy: {
			'/test/*': {
				target: 'http://localhost:9000',
				pathRewrite: { '^/api': '' },
				changeOrigin: true,
			},
		},
	},
	lintOnSave: true,

	transpileDependencies: [ansiRegx],

	configureWebpack: {
		resolve: {
			alias: {
				assets: resolveSrc('src/assets'),
			},
		},
	},
	css: {
		sourceMap: process.env.NODE_ENV !== 'production',
	},

	pluginOptions: {
		i18n: {
			locale: 'en',
			fallbackLocale: 'en',
			localeDir: 'locales',
			enableInSFC: false,
		},
	},
};
