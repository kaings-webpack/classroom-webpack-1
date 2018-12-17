const path = require('path');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');

/* from webpack 4, use MiniCssExtractPlugin instead of MiniCssExtractPlugin */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: {
        fileindexjs: './src/js/index.js',
        filemodulejs: './src/js/module.js',
        fileinlinesourcemapjs: './src/js/inlinesourcemap.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
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
        new CleanWebpackPlugin(['dist']),
        //new ExtractTextPlugin("style.css")
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new HTMLWebpackPlugin({
            filename: 'home.html',
            template: './src/html/home.html',
            chunks: ['fileindexjs']
        }),
        new HTMLWebpackPlugin({
            filename: 'about.html',
            template: './src/html/about.html',
            chunks: ['filemodulejs']
        }),
        new BrowserSyncPlugin(
            // BrowserSync options
            {
                // browse to http://localhost:3000/ during development
                host: 'localhost',
                port: 3000,
                // proxy the Webpack Dev Server endpoint
                // (which should be serving on http://localhost:3100/) -- correction: port 8080
                // through BrowserSync
                proxy: 'http://localhost:8080/'
            },
            // plugin options
            {
                // prevent BrowserSync from reloading the page
                // and let Webpack Dev Server take care of this
                reload: false
            }
    )
    ]
}