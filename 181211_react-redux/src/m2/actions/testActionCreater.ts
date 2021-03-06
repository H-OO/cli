/**
 * mapStateToProps | mapDispatchToProps
 * mapStateToProps 为 connect 函数的第一个参数, 将 redux 的`state`对象映射到UI组件的`props`中
 * mapDispatchToProps 为 connect 函数的第二个参数，将 store 的`dispatch`方法映射到UI组件的`props`中
 * ---
 * actionCreater 格式参考
 */
export function mapStateToProps(state: any) {
  return {
    value: state.test1.count
  };
}

export function mapDispatchToProps(dispatch: any) {
  return {
    onIncreaseClick: () => {
      // 同步
      // dispatch( { type: 'increase', t: '123' } )
      // 模拟异步
      setTimeout(() => {
        dispatch({ type: 'increase', t: '456' });
      }, 1000);
    }
  };
}
