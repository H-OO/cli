# react-redux

react-redux 是基于 redux 的封装库

需要掌握额外的API，并遵循它的组件拆分规范

react-redux 规定: 所有的UI组件由开发者提供, 容器组件则是由react-redux自动生成

开发者负责视觉层, 状态管理则是全部交给 react-redux

---

**组件拆分**

- UI组件 不带任何业务逻辑, 数据由`this.props`提供, 不使用 redux API
- 容器组件 负责管理数据和业务逻辑, 使用 redux API

---

**API-connect()**

connect 方法用于从UI组件生成容器组件, 将两种组件连起来

```js
import { connect } from 'react-redux';
const VisibleTodoList = connect()(TodoList);
```

上面代码中, `TodoList`为UI组件, `VisibleTodoList`就是通过`connect`方法自动生成的容器组件

为容器组件定义业务逻辑: 需提供两方面信息, 分别是输入逻辑与输出逻辑

- 输入逻辑 外部的数据(state对象)如何转换成UI组件的参数
- 输出逻辑 用户交互如何变为`Action`对象, 从UI组件传出去

```js
// connect 方法完整API 如下
import { connect } from 'react-redux';
const VisibleTodoList = connect(
  mapStateToProps, // 负责输入逻辑, 将`state`映射到UI组件的参数`props`
  mapDispatchToProps // 负责输出逻辑, 将用户对UI组件的操作映射成`Action`
)(TodoList);
```

---

**参数-mapStateToProps**

`mapStateToProps`是一个函数, 它接收`state`作为参数, 返回一个对象

```js
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
};
```

返回对象中有一个`todos`属性, 代表UI组件的同名参数

`getVisibleTodos`也是一个函数, 可以从`state`算出`todos`的值

`mapStateToProps`的第二个参数代表容器组件的`props`对象

`mapStateToProps`会订阅`Store`, 每当`state`更新的时候, 会自动执行, 重新计算UI组件参数, 从而触发UI组件的重新渲染

---

**参数-mapDispatchToProps**

`mapDispatchToProps`用来建立UI组件的参数到`store.dispatch`方法的映射
