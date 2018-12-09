import * as React from 'react';

import * as _ from 'lodash';
import * as axios from 'axios';

interface I_state {
  ulNode?: React.RefObject<HTMLUListElement>;
}

class App extends React.Component {
  public constructor(arg: any) {
    super(arg);
    this.foo = this.foo.bind(this);
    this.state = {
      ulNode: React.createRef()
    };
  }
  public async foo() {
    // 异步
    const res = await 'res!!';
    return res;
  }
  public componentDidMount(): void {
    // const target: Array<number> = [1, 2, 3, 4];
    // const a = { name: 'a' };
    // const target: any = {
    //   a: 1
    // };
    // for (let k of target) {
    //   console.log(k);
    // }
    // const c = new NodeIterator()
    // let iterable = {
    //   0: 'a',
    //   1: 'b',
    //   2: 'c',
    //   length: 3,
    //   [Symbol.iterator]: Array.prototype[Symbol.iterator]
    // };
    // for (let item of iterable) {
    //   console.log(item); // 'a', 'b', 'c'
    // }

    function _Iterator(arr: Array<any>) {
      // 当前遍历的下标
      let nextIndex = 0;
      // 返回一个对象，用来获取 next 方法
      return {
        next() {
          return nextIndex < arr.length
            ? { value: arr[nextIndex++], done: false }
            : { value: undefined, done: true };
        }
      };
    }

    const test = _Iterator([1, 2, 3]);
    console.log(test.next()); // 
    console.log(test.next()); // 
    console.log(test.next()); // 
    console.log(test.next()); // 
    
  }
  public render(): JSX.Element {
    const { ulNode }: I_state = this.state;
    return (
      <div className="app">
        {/* <ul ref={ulNode}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul> */}
      </div>
    );
  }
}

export default App;
