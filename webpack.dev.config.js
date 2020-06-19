const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {

    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve('./build')
    },
    devServer:{
        overlay: true,
        stats: 'errors-only',
        port: 3001,
        hot: true,
        historyApiFallback: true,
    },

    module: {
        rules: [
            {   
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                loader: 'file-loader',
                exclude: /node_modules/,
                options: {
                    publicPath: './imgs/',
                    outputPath: './imgs/',
                    name: '[name].[ext]'
                }
            }
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ]
}