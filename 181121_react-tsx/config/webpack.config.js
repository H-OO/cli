'use strict';
/**
 * @const path 路径模块
 * @const fs 文件模块
 * @const CleanWebpackPlugin 删除文件
 * @const HtmlWebpackPlugin 处理html文件
 * @const Autoprefixer 样式自动加前缀
 * @const MiniCssExtractPlugin css分离打包
 * @const UglifyJsPlugin js压缩
 * @const OptimizeCSSAssetsPlugin css压缩
 * @const postcssLoaderPlugins postcss-loader引用相关插件
 * @const projectsDir 获取终端启动的真实根路径
 * @const getEntry entry > 入口配置
 * @const htmlConfig plugin > 模块`html-webpack-plugin`配置
 */
const path = require('path');
const fs = require('fs');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const postcssLoaderPlugins = () => [
  require('postcss-flexbugs-fixes'), // postcss flexbugs 修复
  Autoprefixer({
    browsers: [
      '>1%',
      'last 4 versions',
      'Firefox ESR',
      'not ie < 9' // React doesn't support IE8 anyway
    ],
    flexbox: 'no-2009'
  })
];

const projectsDir = fs.realpathSync(process.cwd());

// 获取动态配置
const getEntry = require('./utils/getEntry');
const htmlConfig = require('./utils/htmlConfig');

const config = (env, argv) => {
  const { mode } = argv; // 当前模式 development | production
  return {
    // 开发服务
    devServer: {
      // host: '192.168.1.2', // 域名/IP，默认localhost
      port: 8080, // 端口，默认8080
      open: true // 自动打开页面
      // contentBase: path.resolve(projectsDir, 'dist'), // 访问目录
      // openPage: 'm1.html'
    },
    // 简洁化
    resolve: {
      // alias: {},
      extensions: ['.js', '.ts', '.tsx']
    },
    // 优化
    optimization: {
      minimizer: [
        // 压缩js
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: false
        }),
        // 压缩css
        new OptimizeCSSAssetsPlugin()
      ]
      //压缩css
      // splitChunks: {
      //   cacheGroups: {
      //     styles: {
      //       name: 'styles',
      //       test: /\.css$/,
      //       chunks: 'all',
      //       enforce: true
      //     }
      //   }
      // }
    },
    // 入口
    entry: getEntry('src'),
    // 输出
    output: {
      filename: '[name].js',
      path: path.resolve(projectsDir, 'dist'),
      chunkFilename: '[name].[chunkhash:5].js',
      publicPath: mode === 'development' ? '/' : './'
    },
    // 模块
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
              // 优化ts编译速度
              options: {
                transpileOnly: true,
                experimentalWatchApi: true
              }
            }
          ]
        },
        {
          test: /\.(scss|css)$/,
          exclude: /node_modules/,
          use: [
            // 生产环境压缩css
            mode === 'development'
              ? { loader: 'style-loader' }
              : MiniCssExtractPlugin.loader,
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
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: '3072', // 图片大小小于limit时转换成base64进行存储，减少http请求
                name: 'images/[name].[ext]' // 在输出文件夹中的路径（自动创建images文件夹存放所有图片）
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images/' // 输出到dist目录下images文件夹中
              }
            }
          ]
        }
      ]
    },
    // 插件
    plugins: [
      ...htmlConfig('src'),
      new CleanWebpackPlugin(['dist'], {
        root: path.resolve(projectsDir, '.'), // 通过改变root范围越过保护机制 (修改需验证路径，以免造成损失)
        verbose: true // (true 测试/模拟删除，不删除文件) (false 删除文件)
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
      })
    ]
  };
};

module.exports = config;
