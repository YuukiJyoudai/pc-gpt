const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    mode: "development",
    entry: './index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
                exclude: /node_modules/
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
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
