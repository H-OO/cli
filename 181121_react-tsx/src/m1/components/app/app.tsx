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
