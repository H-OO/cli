'use strict';
/**
 * htmlConfig 动态生成模块`html-webpack-plugin`配置
 * ---
 * @const path 内置路径模块
 * @const fs 内置文件模块
 * @const HtmlWebpackPlugin 处理HTML文件插件
 * @function getModuleName 动态获取模块列表
 * @const projectsDir 获取终端启动的真实根路径
 * @const chalk 终端字体添加颜色
 */

const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getModuleName = require('./getModuleName');
const projectsDir = fs.realpathSync(process.cwd());
const chalk = require('chalk');

module.exports = function htmlConfig(dirName) {
  const htmlArr = [];
  // 动态配置
  getModuleName(dirName).forEach((item) => {
    const pageInfoPath = path.resolve(projectsDir, `src/${item}/_CONFIG/pageInfo`); // 用户页面配置文件路径
    // 默认配置
    let tmpConfig = {
      title: '',
      chunks: ['react', item], // 依赖第三方包
      filename: `${item}.html`, // 输出文件名
      template: path.resolve(projectsDir, 'src/template.html') // 模板HTML
    };
    try {
      const { title, keywords, description, chunks } = require(pageInfoPath);
      // 输出用户配置
      tmpConfig = {
        title: title ? title : 'react-tsx',
        meta: {
          keywords: keywords ? keywords : 'webpack4 react tsx',
          description: description ? description : '这是一个webpack4,react,tsx架构'
        },
        chunks: [...chunks, 'react', item], // 依赖第三方包
        filename: `${item}.html`, // 输出文件名
        template: path.resolve(projectsDir, 'src/template.html') // 模板HTML
      };
    } catch (err) {
      const errMsg = chalk.red(
        `error: ${item}模块的'pageInfo.js'无法正常导入，请检查！ ${path.resolve(projectsDir, 'config/utils/htmlConfig.js:33')}`
      );
      console.log(errMsg);
      console.log(err);
    }
    // 模板
    htmlArr.push(new HtmlWebpackPlugin(tmpConfig));
  });
  return htmlArr; // { Array<Object> }
};