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
    console.log(
      _.join(['Another', 'module', 'loaded!'], ' ')
    );
    console.log(axios);
    this.foo().then((res) => {
      console.log(res);
    });
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
