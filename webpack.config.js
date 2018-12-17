const path = require('path');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');

/* from webpack 4, use MiniCssExtractPlugin instead of MiniCssExtractPlugin */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        //new ExtractTextPlugin("style.css")
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
 }