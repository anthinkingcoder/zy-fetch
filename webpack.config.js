const webpack = require('webpack')
const util = require('./util')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const resolve = util.resolve
module.exports = {
  mode: 'none',
  entry: {
    main: './src/index.js'
  },
  output: {
    path: resolve('/dist'),
    publicPath: "/dist/",
    filename: 'zy-fetch.js',
    library: "fetch",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              sourceMap: false
            },
          }
        ],
        exclude: /node_modules/
      }
    ],
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: '"production"'
    //   }
    // }),
    // new UglifyJsPlugin({
    //   parallel: true,
    //   sourceMap: true,
    // })
  ]
};
