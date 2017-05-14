/**
 * @file webpack.config.js
 * @author deo
 *
 */

var path = require('path');
var webpack = require('webpack');
var HtmlWebPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
    devtool: 'source-map',
    entry: {
        vendor: [
            'react-hot-loader',
            'webpack-dev-server/client?http://0.0.0.0:8899',
            'webpack/hot/only-dev-server',
            'react',
            'react-dom',
        ],
        'index': './src/index',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(ROOT_PATH, './dist/'),
        chunkFilename: '[name].chunk.js'
    },
    // BASE_URL是全局的api接口访问地址
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        // 本地 hot
        new webpack.HotModuleReplacementPlugin(),

        new HtmlWebPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['common', 'vendor', 'index'],
            inject: 'body',
        }),

        new ExtractTextPlugin({
            filename: '[name].css',
            // filename: (getPath) => getPath('[name].css').replace(/\//g, '-'),
            allChunks: true,
        }),
    ],
    // alias是配置全局的路径入口名称，只要涉及到下面配置的文件路径，可以直接用定义的单个字母表示整个路径
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.resolve(ROOT_PATH, 'node_modules'),
            path.join(ROOT_PATH, './src')
        ]
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        'css-loader',
                        'autoprefixer-loader',
                        'sass-loader',
                    ],
                })
            },
        ]
    }
};