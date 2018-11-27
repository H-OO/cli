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
 * @const LogServer 日志服务
 * @const logServer 日志服务实例
 */

const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getModuleName = require('./getModuleName');
const projectsDir = fs.realpathSync(process.cwd());
const chalk = require('chalk');
const LogServer = require('./logServer');
const logServer = new LogServer({
  fileName: ['build']
});

module.exports = function htmlConfig(dirName) {
  // 所有模块`html-webpack-plugin`配置
  const htmlArr = [];
  // 构建日志 信息对象
  const buildMsg = {
    modules: {}
  };
  // 动态配置
  getModuleName(dirName).forEach((item) => {
    const pageInfoPath = path.resolve(projectsDir, `src/${item}/_CONFIG/pageInfo`); // 用户页面配置文件路径
    // 默认`html-webpack-plugin`配置
    let tmpConfig = {
      title: '',
      chunks: ['react', item], // 依赖第三方包
      filename: `${item}.html`, // 输出文件名
      template: path.resolve(projectsDir, 'src/template.html') // 模板HTML
    };
    try {
      const { title, keywords, description, chunks } = require(pageInfoPath);
      const iconPath = path.resolve(projectsDir, 'src/favicon.ico'); // 默认ico路径
      const icoExists = fs.existsSync(iconPath); // 检查ico是否存在
      // 输出用户自定义`html-webpack-plugin`配置
      tmpConfig = {
        title: title ? title : 'react-tsx',
        favicon: icoExists ? iconPath : '',
        meta: {
          keywords: keywords ? keywords : 'webpack4 react tsx',
          description: description ? description : '这是一个webpack4,react,tsx架构'
        },
        chunks: [...chunks, 'react', item], // 依赖第三方包
        filename: `${item}.html`, // 输出文件名
        template: path.resolve(projectsDir, 'src/template.html') // 模板HTML
      };
      buildMsg.modules[item] = tmpConfig; // 构建日志 收集模块页面配置信息
    } catch (err) {
      const errMsg = `error: ${item}模块的'pageInfo.js'无法正常导入，请检查！ ${path.resolve(projectsDir, 'config/utils/htmlConfig.js:39')}`;
      console.log(chalk.red(errMsg));
      console.log(err);
    }
    htmlArr.push(new HtmlWebpackPlugin(tmpConfig));
  });

  const _buildMsg = JSON.stringify(buildMsg, null, 2); // 构建日志 信息格式化
  logServer.write('build', _buildMsg); // 构建日志 写入

  return htmlArr; // { Array<Object> }
};
