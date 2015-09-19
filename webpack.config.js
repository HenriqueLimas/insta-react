module.exports = {
  entry: './public/index.jsx',
  output: {
    path: __dirname + '/public/dist',
    filename: 'bundler.js'
  },
  module: {
    loaders: [{
      test: /.jsx$/,
      loader: 'jsx-loader'
    }, {
      test: /.css$/,
      loader: 'style!css'
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }, {
      test: /.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
      loader: 'file-loader?name=res/[name].[ext]?[hash]'
    }, {
      test: /.html$/,
      loader: 'raw'
    }]
  }
}
