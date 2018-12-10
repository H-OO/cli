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
    // // 类部署 Iterator 接口写法
    // class RangeIterator {
    //   value: any;
    //   stop: any;
    //   constructor(start: any, stop: any) {
    //     this.value = start;
    //     this.stop = stop;
    //   }
    //   [Symbol.iterator]() { return this };
    //   next() {
    //     const { value, stop } = this;
    //     if (value < stop) {
    //       this.value++;
    //       return { value, done: false }
    //     } else {
    //       return { value: undefined, done: true }
    //     }
    //   }
    // }
    // const range = new RangeIterator(0, 3);
    // for (let k of range) {
    //   console.log(k);
    // }

    // let obj = {
    //   data: [ 'hello', 'world' ],
    //   [Symbol.iterator]() {
    //     const self = this;
    //     let index = 0;
    //     return {
    //       next() {
    //         if (index < self.data.length) {
    //           return {
    //             value: self.data[index++],
    //             done: false
    //           };
    //         } else {
    //           return { value: undefined, done: true };
    //         }
    //       }
    //     };
    //   }
    // };
    // for (let k of obj) {
    //   console.log(k);
    // }

    // const obj = {
    //   data: ['hello', 'world'],
    //   [Symbol.iterator]() {
    //     let index = 0;
    //     const length = this.data.length;
    //     const _self = this;
    //     return {
    //       next() {
    //         // 调用`next`返回 { value: any, done: boolean }
    //         if (index < length) {
    //           return { value: _self.data[index++], done: false }
    //         } else {
    //           return { value: undefined, done: true }
    //         }
    //       }
    //     }
    //   }
    // };
    // for (let k of obj) {
    //   console.log(k);
    // }

    async function test() {
      const a = await 1; // 异步
      const b = await 2; // 异步
      return {
        a,
        b
      }
    }
    const res = test();
    res.then((data) => {
      console.log(data); // {a: 1, b: 2}
    })
  }
  public render(): JSX.Element {
    // const { ulNode }: I_state = this.state;
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
