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

    // const r = /(?<name>abc)-\k<name>/;
    // const str = 'abc-abc';
    // console.log(r.test(str));

    // console.log(Math.trunc('123.456'));
    // console.log(2 ** 3);

    
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
