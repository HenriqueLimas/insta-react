module.exports = {
  entry: './public/index.js',
  output: {
    path: __dirname + '/public/dist',
    filename: 'bundler.js'
  },
  module: {
    loaders: [{ 
        test: /.jsx$/,
        loader: 'jsx-loader?harmony'
      }, {
        test: /.css$/,
        loader: 'style!css'
      }, {
        test: /.html$/,
        loader: 'raw'
      }
    ]
  }
}