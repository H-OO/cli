import * as React from 'react';

import * as _ from 'lodash';
import * as axios from 'axios';

class App extends React.Component {
  public constructor(arg: any) {
    super(arg);
    this.foo = this.foo.bind(this);
  }
  public async foo() {
    // 异步
    const res = await 'res!!';
    return res;
  }
  public componentWillMount(): void {
    // console.log(
    //   _.join(['Another', 'module', 'loaded!'], ' ')
    // );
    // console.log(axios);
    // this.foo().then((res) => {
    //   console.log(res);
    // });
    // // es6 proxy 对象赋值拦截
    // const obj: any = new Proxy({}, {
    //   get: function (target, key: any, receiver) {
    //     console.log(`getting ${key}!`);
    //     return Reflect.get(target, key, receiver);
    //   },
    //   set: function (target, key: any, value, receiver) {
    //     console.log(`setting ${key}!`);
    //     return Reflect.set(target, key, value, receiver);
    //   }
    // });
    // console.log(obj.count = 2);
    // console.log(obj.count);

    // 字符串
    // const str = 'abc';
    // const res = str.match(/a/);
    // console.log(res);
    // console.log(Array.isArray(res));
    // const arr = []
    // const res = str.search(/c/);
    // console.log(res);
    // const r: string = 'c';
    // const str: (string|RegExp) = 'abc';
    // const res = str.match(r);
    // console.log(res);
    // const foo = (r: string|number) => {};

    // const res = /a/.exec('ab');
    // console.log(res);
    // res.forEach((item) => {
    //   console.log(item);
    // });
    // for (let k in res) {
    //   console.log(res[k]);
    // }

    const res = 'abc';
    console.log(/d{1}/.test(res));
  }
  public render(): JSX.Element {
    return (
      <div className="app">
        m1
      </div>
    );
  }
}

export default App;
