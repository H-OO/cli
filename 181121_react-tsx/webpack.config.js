'use strict';
/**
 * @const path 路径模块
 * @const fs 文件模块
 * @const CleanWebpackPlugin 删除文件
 * @const HtmlWebpackPlugin 处理html文件
 * @const projectsDir 获取项目根目录地址
 * @const autoprefixer 样式自动加前缀
 * @const postcssLoaderPlugins postcss-loader引用相关插件
 */
const path = require('path');
const fs = require('fs');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const projectsDir = fs.realpathSync(process.cwd());
const autoprefixer = require('autoprefixer');
const postcssLoaderPlugins = () => [
  require('postcss-flexbugs-fixes'), // postcss flexbugs 修复
  autoprefixer({
    browsers: [
      '>1%',
      'last 4 versions',
      'Firefox ESR',
      'not ie < 9' // React doesn't support IE8 anyway
    ],
    flexbox: 'no-2009'
  })
];

const config = (env, argv) => ({
  devServer: {
    port: 8080,
    open: true
    // contentBase: path.resolve(projectsDir, 'dist'), // 访问目录
    // openPage: 'm1.html'
  },
  entry: {
    index: path.resolve(projectsDir, 'src/index/index.tsx')
  },
  output: {
    filename: '[name]/[name].js',
    path: path.resolve(projectsDir, 'dist'),
    chunkFilename: '[name].[chunkhash:5].js'
  },
  resolve: {
    // alias: {},
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              experimentalWatchApi: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: postcssLoaderPlugins
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html', // 输出文件名
      template: path.resolve(projectsDir, 'src/template.html') // 模板HTML
    })
  ]
});
console.log(config);

module.exports = config;
