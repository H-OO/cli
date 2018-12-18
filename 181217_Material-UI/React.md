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

static defaultProps = {} // 设置默认`props`对象
static propsTypes = {} // 检查`props`对象成员类型
↓
constructor() { super(); this.state = {} } // 设置默认`state`对象
↓
componentWillMount() // 挂载之前, 异步请求、开启定时器
↓
render() // 构建`Virtual DOM`树, 通过`diff`算法比较差异, 更新`DOM`树; 此时不可以修改`state`
↓
componentDidMount() // 挂载之后, 动画启动、输入框自动聚焦

```

共有 10 个周期函数(render 重复一次)

组件初始化触发 5 个钩子函数

- getDefaultProps 设置默认的`props`
- getInitialState 在`constructor`中定义`this.state`, 此时可以访问`this.props`
- componentWillMount 异步请求拉取数据 | 定时器启动, 此时可以修改`state`
- render 创建虚拟 DOM, 进行 diff 算法(比较差异), 更新 DOM 树, 此时不可以修改`state`
- componentDidMount 动画启动 | 输入框自动聚焦

组件更新时触发 5 个钩子函数

- componentWillReceiveProps 接收新的`props`时调用
- shouldComponentReceive
-

---
