const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './src/main.js',
    output:{
        path:__dirname +'/dist',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({template:'./src/main.html'})
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
};