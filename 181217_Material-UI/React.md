# React

**定义组件的方式**

- 函数定义
- 类定义

```js
// 函数定义
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
// ES6 class
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

---

**组件渲染**

通过`ReactDOM.render(<App/>, document.getElementById('root'))`方法渲染组件

```js
function App() {
  return (
    <div>
      <Welcome name="H_OO" />
      <Welcome name="Hugh" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

注意组件的返回值只能有一个根元素

---

**生命周期**

```
组件初始化过程
static defaultProps = {} // 设置默认`props`对象
static propsTypes = {} // 检查`props`对象成员类型
↓
constructor() { super(); this.state = {} } // 设置默认`state`对象
↓
componentWillMount() // 挂载之前, 异步请求、开启定时器
↓
render() // 构建`Virtual DOM`树, 通过`react-diff`算法比较差异, 更新`DOM`树; 此时不可以修改`state`
↓
componentDidMount() // 挂载之后, 动画启动、输入框自动聚焦
↓
组件运行时
---
路线1: state改变
↓
<性能优化点>
---
路线2: 父组件更新 render()
↓
componentWillReceiveProps(nextProps) // 子组件获取到新的props, 判断是否更新组件状态
↓
<性能优化点>
---
<性能优化点>
shouldComponentUpdate(nextProps) // return true 允许更新到DOM | return false 不允许更新到DOM
|- return false
    ↓
    componentDidUpdate() // 更新完成, 无论DOM是否更新都会执行; 此时可以获取`DOM`
|- return true
    ↓
    componentWillUpdate(nextProps) // 更新之前执行
    ↓
    render() // 更新`Virtual DOM`树, 通过`react-diff`算法比较差异, 更新`DOM`树; 此时不可以修改`state`
    ↓
    componentDidUpdate() // 更新完成, 无论DOM是否更新都会执行; 此时可以获取`DOM`
↓
组件运行时
---
组件销毁
↓
componentWillUnmount() // 销毁之前, 清除事件监听和定时器
```

---

**state**

使用须知

- 构造函数是唯一能够初始化`state`的地方
- 修改`state`需通过`setState`方法
- `state`更新可能是异步的

---

**setState 方法**

使用: `this.setState({} | () => {return {}})`

疑问: 为什么`setState()`是异步的?

原因:  
react 更新组件采用的是`batchingStrategy`批量更新策略, 通过事务的方式实现`state`批量更新;  
`isBatchingUpdates`是该事务的一个标志, 如果为`true`, 表示 react 正在一个更新组件的事务流中;  
如果没有在事务流中, 调用`batchedUpdates`批量更新方法进入更新流程;  
进入更新流程后, `isBatchingUpdates`设置为`true`;  
否则将需更新的组件放入`dirtyComponents`数组中, 也就是将需更新的组件缓存起来, 稍后更新;  
这就解释了调用`setState`并不会立即更新`state`的疑问.

↓↓↓  
情景 A: 在`componentDidMount`中调用`setState`  
因为正处于一个更新流程中, `isBatchingUpdates`为`true`, 所以只能放入`dirtyComponents`数组中等待稍后更新  
↑↑↑

↓↓↓  
情景 B: 在`事件`中调用`setState`  
react 通过事件合成实现了对于事件的绑定;  
在组件创建和更新的入口方法`mountComponent`和`updateComponent`中会将绑定的事件注册到`DOM`上;  
相应的回调函数通过`EventPluginHub`存储;  
事件触发时, `document`上`addEventListener`注册的`callback`会被回调, 回调函数为`ReactEventListener.dispatchEvent`;  
`dispatchEvent`是事件分发的入口方法  
↑↑↑

↓↓↓  
情景 C: `原生事件绑定`中调用`setState`  
原生事件绑定不会通过合成事件的方式处理, 不会进入更新事务的处理流程, 不放入`dirtyComponent`进行异步更新  
↑↑↑

↓↓↓  
情景 D: `setTimeout`中调用`setState`  
回调执行时已经完成了原更新组件流程, 不放入`dirtyComponent`进行异步更新  
↑↑↑

在更新组件时, 将更新的`state`合并到原`state`是在`componentWillUpdate`之后, `render`之前  
即在`componentWillUpdate`之前设置的`setState`可以在`render`中拿到最新值

小节:  
1、在组件生命周期中或 react 事件绑定中调用, `setState`是通过异步更新的;  
2、在延时器或原生事件的回调中调用, `setState`不一定是异步更新的。

---

**react 事件合成的实现机制**

react 底层实现了两件事, 分别是`事件委托`和`自动绑定`, 并且事件在组件销毁时自动解绑

1、react 将所有的事件绑定到结构的最外层, 使用统一的事件监听器  
2、react 自身的每个方法会自动绑定`this`为当前的组件

注意: 使用`es6 class或纯函数`写法, 这种绑定不复存在, 需要手动实现`this`绑定

使用原生事件绑定在组件卸载时要手动移除, 否则很可能出现内存泄露问题

react 合成事件中没有实现事件捕获, 仅仅支持事件冒泡机制

react 合成事件阻止默认行为`e.preventDefault()`, 阻止冒泡`e.stopPropagation()`

---

**合成事件与原生事件混用**

reactEvent.nativeEvent.stopPropagation() 只能用于 react 合成事件, 不能阻止原生事件冒泡  
原生事件阻止冒泡行为可以阻止 react 合成事件的传播

---

