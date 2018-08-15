const util = require('./util')
const merge = require('webpack-merge')
const resolve = util.resolve
const base = require('./webpack.base.config')
module.exports = merge(base, {
  mode: 'none',
  entry: {
    main: './src/fetchs.js'
  },
  output: {
    path: resolve('../dist'),
    publicPath: "/dist/",
    filename: 'zy-fetch.js',
    libraryTarget: "umd",
  }
})
