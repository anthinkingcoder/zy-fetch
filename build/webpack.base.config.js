const util = require('./util')
const resolve = util.resolve
module.exports = {
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
        include: [resolve('../src')]
      }
    ],
  },
  plugins: [
  ]
};
