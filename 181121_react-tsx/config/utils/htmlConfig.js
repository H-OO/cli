/**
 * htmlConfig 动态生成模块`html-webpack-plugin`配置
 * ---
 * @const path 内置路径模块
 * @const fs 内置文件模块
 * @const HtmlWebpackPlugin 处理HTML文件插件
 * @function getModuleName 动态获取模块列表
 * @const projectsDir 获取终端启动的真实根路径
 */

const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getModuleName = require('./getModuleName');
const projectsDir = fs.realpathSync(process.cwd());

module.exports = function htmlConfig(dirName) {
  const htmlArr = [];
  // 动态配置
  getModuleName(dirName).forEach((item) => {
    // 模板
    const config = new HtmlWebpackPlugin({
      title: item,
      // chunks: [`${item}/${item}`],
      chunks: [item],
      filename: `${item}.html`, // 输出文件名
      template: path.resolve(projectsDir, 'src/template.html') // 模板HTML
    });
    htmlArr.push(config);
  });
  return htmlArr;
};