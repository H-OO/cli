Q：个人工具类依赖其他第三方包情况  
A：个人工具类依赖的第三方包会被独立抽离。多模块引用同个第三方包，只会抽离生成一次，给其他模块共用。

Q：引入第三方包需要ts全局声明情况  
A：