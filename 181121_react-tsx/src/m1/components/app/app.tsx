import * as React from 'react';

import * as _ from 'lodash';
import * as axios from 'axios';

class App extends React.Component {
  public constructor(arg: any) {
    super(arg);
  }
  public componentDidMount(): void {
    console.log(_);
    console.log(axios);
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
