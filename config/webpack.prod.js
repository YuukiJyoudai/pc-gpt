const {merge} = require('webpack-merge')

const baseConfig = require('./webpack.base.js')

module.exports = merge(baseConfig, {
    // todo，先不编译成压缩过的
    // mode: 'production'
})

