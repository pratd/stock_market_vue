var path = require('path');
const webpack = require('webpack')
const {VueLoaderPlugin} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: [
        './src/app.js'
    ],
    devServer: {
        // hot: true,
        // watchOptions: {
        //   poll: true
        // }
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
        {
            test: /\.vue$/,
            use: 'vue-loader'
        },
        {
            exclude: /(node_modules)/,//excluded node_modules
            test: /\.js$/,
            use: 'babel-loader'
        },
        {
            test:/\.css$/,
            use:['style-loader','css-loader']
        }
    ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
}