process.env.NODE_ENV = 'production'

const webpack = require('webpack')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const webpackConfigProd = require('../config/webpack.config')('production')

webpackConfigProd.plugins.push(new BundleAnalyzerPlugin())

webpack(webpackConfigProd, (err, stats) => {
    if (err || stats.hasErrors()) {
        // eslint-disable-next-line no-console
        console.error(err)
    }
})