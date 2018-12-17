'use strict';
/**
 * devServer
 */
module.exports = {
  // host: '192.168.1.2', // 域名/IP，默认localhost
  port: 8080, // 端口，默认8080
  open: true, // 自动打开页面
  // contentBase: path.resolve(projectsDir, 'dist'), // 访问目录
  // openPage: 'm1.html',
  compress: true, // gzip压缩
  historyApiFallback: true // 错误路由历史回退至初始页
};
