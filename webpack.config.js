// module.exports = {
//   mode: isDev ? 'development' : 'production',
//   entry: ['@babel/polyfill', './client/app.js'],
//   mode: 'development',
//   output: {
//     path: __dirname,
//     filename: './public/bundle.js'
//   },
//   resolve: {
//     extensions: ['.js', '.jsx']
//   },
//   devtool: 'source-maps',
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader'
//         }
//       }
//     ]
//   }
// };

module.exports = {
  entry: [
    '@babel/polyfill', // enables async-await
    './client/app.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}