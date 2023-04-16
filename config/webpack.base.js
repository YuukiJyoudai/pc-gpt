const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    mode: "development",
    entry: './index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(t|j)s$/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                }
            },
            {
                test: /\.(le|c)ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack变好了',
            template: './index.html'
        }),
        new VueLoaderPlugin()
    ]
}
