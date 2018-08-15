const util = require('./util')
const merge = require('webpack-merge')
const webpack =require('webpack')
const resolve = util.resolve
const base = require('./webpack.base.config')
module.exports = merge(base, {
  mode: 'development',
  entry: {
    main: './src/fetchs.js'
  },
  output: {
    path: resolve('../dist'),
    publicPath: "/dist/",
    filename: 'zy-fetch.common.js',
    library: "ZYFETCH",
    libraryTarget: "commonjs",
  }
})
