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
shouldComponentUpdate(nextProps) // <性能优化点> return true 允许更新到DOM | return false 不允许更新到DOM
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
---
组件销毁
↓
componentWillUnmount() // 销毁之前, 清除事件监听和定时器
```
