/**
 * mapStateToProps
 * connect 函数的第一个参数, 建立一个从(外部的)`state`对象到(UI组件的)`props`对象的映射关系
 * ---
 * reducer 格式参考
 */
export default (
  state = { count: 0 },
  action: { type?: string; count?: number }
) => {
  const count = state.count;
  console.log(action);
  switch (action.type) {
    case 'increase':
      return { count: count + 1 };
    default:
      return state;
  }
};
