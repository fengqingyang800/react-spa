/**
 * @file dev.server.js
 * @author deo
 *
 * 本地服务
 */
var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var nporxy = require('./tool/proxy/nproxy');
var proxyConfig = {
    use: true,
    port: 9999,
};

// 启动 代理服务
nporxy(proxyConfig, {
    rules: [
        {
            pattern: /https?:\/\/[\w\.]*(?::\d+)?\/.+\/(.+)/,
            responder: path.join(__dirname, '/mock/') + '$1.json'
        }
    ]
});

/**
 * 引入构建配置
 */
var webpackConfig = require('./webpack.config');

var devServer = {
    publicPath: '/',
    host: '0.0.0.0',
    port: 8899,
    hot: true,
    inline: true,
    historyApiFallback: true,
    stats: {
        colors: true
    },
};

if (proxyConfig.use) {
    devServer.proxy = {
        '/api': `http://${devServer.host}:${proxyConfig.port}`,
    }
}

var compiler = webpack(webpackConfig);

/**
 * webpack dev server 配置
 */
var server = new WebpackDevServer(compiler, devServer);

/**
 * 启动本地服务环境
 */
server.listen(devServer.port, devServer.host, function (error) {
    if (error) {
        console.error(error);
    } else {
        console.info('Listening on port %s. ' +
            'Open up http://' + devServer.host + ':%s/ in your browser.',
            devServer.port, devServer.port);
    }
});
