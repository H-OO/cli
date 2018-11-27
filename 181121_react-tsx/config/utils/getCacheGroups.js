'use strict';
/**
 * getCacheGroups 动态获取`cacheGroups`对象成员
 * ---
 * @const path 内置路径模块
 * @const fs 内置文件模块
 * @function getModuleName 动态获取模块列表
 * @const projectsDir 获取终端启动的真实根路径
 * @const chalk 终端字体添加颜色
 * @const LogServer 日志服务
 * @const logServer 日志服务实例
 */

const path = require('path');
const fs = require('fs');
const getModuleName = require('./getModuleName');
const projectsDir = fs.realpathSync(process.cwd());
const chalk = require('chalk');
const LogServer = require('./logServer');
const logServer = new LogServer({
  fileName: ['error']
});

module.exports = function getCacheGroups(dirName) {
  let allChunks = []; // { Array<string> } 收集所有模块依赖包名称

  getModuleName(dirName).forEach((item) => {
    const pageInfoPath = path.resolve(projectsDir, `src/${item}/_CONFIG/pageInfo`); // 用户页面配置文件路径
    try {
      const { chunks } = require(pageInfoPath); // { Array<string> }
      allChunks.push(...chunks);
    } catch (err) {
      const errMsg = `error: ${item}模块的'pageInfo.js'无法正常导入，请检查！ ${path.resolve(projectsDir, 'config/utils/getCacheGroups.js:28')}\n`;
      console.log(chalk.red(errMsg)); // 输出错误信息
      console.log(err); // 内部错误信息
      logServer.write('error', errMsg); // 错误日志 写入
    }
  });
  allChunks = Array.from(new Set(allChunks)); // 去重

  // 动态添加`cacheGroups`成员
  const cacheGroups = {};
  allChunks.forEach((item) => {
    // 成员配置格式参考
    // 'lodash': {
    //   name: 'lodash',
    //   test: new RegExp('lodash'),
    //   chunks: 'all'
    // }
    cacheGroups[item] = {
      name: item, // 文件名
      test: new RegExp(item), // 匹配包路径
      chunks: 'all' // 同步异步全抽离
    };
  });
  return cacheGroups; // { Object }
};
