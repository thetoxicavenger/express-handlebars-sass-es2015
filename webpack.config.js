var webpack = require('webpack');

module.exports = {
   entry: './public/javascripts/src/scripts.js',
   output: {
       path: './public/javascripts/dist',
       filename: 'bundle.js',
   },
   module: {
       loaders: [{
           test: /\.js$/,
           exclude: /node_modules/,
           loader: 'babel-loader',
       }]
   },
   plugins: [
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       }),
      // ENABLE FOR PRODUCTION:
      //  new webpack.optimize.UglifyJsPlugin({
      //       compress: {
      //           warnings: false,
      //       },
      //       output: {
      //           comments: false,
      //       },
      //   })
    ]
}
