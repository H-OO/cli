/**
 * getEntry 动态获取入口配置对象
 * ---
 * @const path 内置路径模块
 * @const fs 内置文件模块
 * @function getModuleName 动态获取模块列表
 */

const path = require('path');
const fs = require('fs');
const getModuleName = require('./getModuleName');

module.exports = function getEntry(dirName) {
  const projectDir = fs.realpathSync(process.cwd()); // { String } 终端所在目录
  const dirPath = path.resolve(projectDir, dirName); // { String } 目录绝对路径
  const dirList = getModuleName(dirPath); // { Array } 目录下的文件夹列表
  const entry = {};
  dirList.forEach((item) => {
    // 将js打包到对应的文件夹下
    entry[`${item}/${item}`] = `${dirPath}\\${item}\\index`;
  })
  return entry; // { Object }
};
