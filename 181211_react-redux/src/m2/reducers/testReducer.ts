export default (state = { count: 0 }, action: any) => {
  const count = state.count;
  console.log(action);
  switch (action.type) {
    case 'increase':
      return { count: count + 1 };
    default:
      return state;
  }
}










/**
 * mapStateToProps
 * connect 函数的第一个参数, 建立一个从(外部的)`state`对象到(UI组件的)`props`对象的映射关系
 * ---
 * reducer 格式参考
 */
// export default (state: object = {}, action: {type?: string, loginState?: boolean} = {}) => {
//   const {type, loginState}: {type?: string, loginState?: boolean} = action;
//   switch (type) {
//     case 'test':
//       return {
//         type,
//         loginState
//       }
//     default:
//       return state;
//   }
// }

// export default (
//   state = { count: 0 },
//   action: { type?: string; count?: number } = {}
// ) => {
//   const count: number = state.count;
//   switch (action.type) {
//     case 'increase':
//       console.log('increase');
//       return { count: count + 1 };
//     default:
//       return state;
//   }
// };

// export default function (state = { count: 0 }, action: any) {
//   const count = state.count;
//   switch (action.type) {
//     case 'increase':
//       return { count: count + 1 };
//     default:
//       return state;
//   }
// }
