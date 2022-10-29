import path from 'path'
import ESLintPlugin from 'eslint-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type { WebpackConfiguration } from 'webpack-cli'
import * as fs from 'fs'

const isDev = !process.argv.includes('production')
const mode = isDev ? 'development' : 'production'

const clientConfig: WebpackConfiguration = {
  context: path.resolve(__dirname, './src'),
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.ts', '.tsx', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, './src')],
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              importLoaders: 1,
              modules: {
                localIdentName: isDev ? '[name]-[local]-[hash:base64:5]' : '[hash:base64:5]',
                exportOnlyLocals: false,
              },
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, './src')],
        use: ['cache-loader', 'babel-loader'],
      },
    ],
  },
  mode,
  stats: {
    colors: true,
    timings: true,
  },
  name: 'client',
  devtool: isDev ? 'source-map' : false,
  entry: {
    client: ['@babel/polyfill', path.resolve(__dirname, './src/client.ts')],
  },
  output: {
    path: path.resolve(__dirname, './build/public'),
    publicPath: '/',
    filename: '[name].[fullhash:8].bundle.js',
    clean: true,
  },
  devServer: {
    historyApiFallback: true,
    allowedHosts: 'all',
    port: 44310,
    https: {
      key: fs.readFileSync('./.cert/localhost-key.pem'),
      cert: fs.readFileSync('./.cert/localhost-cert.pem'),
    },
  },
  plugins: [
    isDev
      ? new ESLintPlugin({
          extensions: ['.ts', 'tsx'],
        })
      : null,
    new HtmlWebpackPlugin({
      templateContent: `
        <html lang='en'>
          <head>
            <title></title>
          </head>
          <body>
            <div id='app'></div>
          </body>
        </html>`,
    }),
    isDev
      ? null
      : new MiniCssExtractPlugin({
          filename: isDev ? '[name].css' : '[name].[contenthash:8].css',
          chunkFilename: isDev ? '[name].chunk.css' : '[name].[contenthash:8].css',
          ignoreOrder: true,
        }),
  ].filter(Boolean) as WebpackConfiguration['plugins'],
  optimization: {
    runtimeChunk: 'single',
    moduleIds: 'deterministic',
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 400000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        styles: {
          test: /\.(css)$/,
          enforce: true,
          chunks: 'all',
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'all',
          enforce: true,
        },
        common: {
          minChunks: 2,
          priority: -20,
          maxInitialRequests: 70,
          maxAsyncRequests: 70,
          reuseExistingChunk: true,
          chunks: 'all',
        },
      },
    },
  },
}

export default clientConfig
