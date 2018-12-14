import { createStore } from 'redux';
import reducers from '../reducers';

const _reducers = (state = { count: 0 }, action: any) => {
  const count = state.count;
  switch (action.type) {
    case 'increase':
      return { count: count + 1 };
    default:
      return state;
  }
}

const store = createStore(reducers);

export default store;
