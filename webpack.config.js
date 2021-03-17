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
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
        ],
      },
      
};