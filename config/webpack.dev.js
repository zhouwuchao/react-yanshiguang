const { join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  entry: join(__dirname, '../src/index.js'),
  output: {
    filename: 'js/[contenthash].[name].js',
    path: join(__dirname, '../dist'),
    clean: true
  },
  resolve: {
    alias: {
      '@pub': join(__dirname, '../public'),
      '@icon': join(__dirname, '../src/images/icons')
    },
    extensions: ['.js', '.jsx', '.json'],
    modules: [join(__dirname, '../node_modules')]
  },
  optimization: {
    minimize: true,
    usedExports: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  devtool: 'eval-source-map',
  devServer: {
    compress: true,
    port: 8088,
    open: true,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, '../public/index.html'),
      filename: 'index.html',
      favicon: join(__dirname, '../public/favicon.ico'),
    }),
    new ReactRefreshWebpackPlugin()
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/i,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpe?g|png|gif)/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[contenthash].[name][ext]'
        }
      },
      {
        test: /\.(jpe?g|png|gif)/,
        type: 'asset/inline',
      },
      {
        test: /\.(jpe?g|png|gif)/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 60 * 1024
          }
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['react-refresh/babel']
            }
          }
        ]
      }
    ]
  }
}