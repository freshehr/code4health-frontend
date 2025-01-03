export const config = {
  entry: ['babel-polyfill', './app/src/index.js'],
  module: {
    rules: {
      js: {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    }, 
    exports: {
      //...
      dev_server: {
        allowedHosts: 'all',
        disableHostCheck: true,
        public: 'c4h.freshehr.com' 
      }
  }
},
  output: {
    filename: 'bundle.js' 
 
  }
}
