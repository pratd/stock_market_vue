var path = require('path');
const webpack = require('webpack')
const {VueLoaderPlugin} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    entry: [
        './src/app.js'
	],
    devServer: {
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
			},
			{
				test: /\.(png|jp(e*)g|svg)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 8000, // Convert images < 8kb to base64 strings
						name: 'images/[hash]-[name].[ext]',
						esModule: false,
					}
				}]
			},
		]
	},
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
		}),
		new Dotenv({}),
		new webpack.DefinePlugin({
			'process.env': {
				'APIURL': JSON.stringify(process.env.APIURL)
			}
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'FAKEAPIURL': JSON.stringify(process.env.FAKEAPIURL)
			}
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'TOPQTY': JSON.stringify(process.env.TOPQTY)
			}
		})
    ]
}