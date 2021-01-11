let path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let conf = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "main.js",
    publicPath: "dist/"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              "@babel/plugin-transform-react-jsx",
              ["@babel/plugin-proposal-decorators", { "legacy": true }],
              ["@babel/plugin-proposal-class-properties", { "loose": true }]
            ]
          }
        }
      },
      {
        test: /^((?!\.module).)*(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.module\.(scss|css)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[local]__[sha1:hash:hex:7]'
              }
            }
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ]
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      '~c': path.resolve(__dirname, 'src/components'),
      '~cp': path.resolve(__dirname, 'src/components/presentational'),
      '~p': path.resolve(__dirname, 'src/pages'),
      '~s': path.resolve(__dirname, 'src/store'),
    }
  },
  devServer: {
    historyApiFallback: true,
    contentBasePublicPath: '/react_catalog/',
    openPage: 'react_catalog/',
    contentBase: path.join(__dirname, 'dist'),
  }
};

module.exports = conf;