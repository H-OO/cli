import * as React from 'react';

import * as axios from 'axios';
import * as _ from 'lodash';

class App extends React.Component {
  public constructor(arg: any) {
    super(arg);
  }
  public componentWillMount(): void {
    console.log(axios);
    console.log(
      _.join(['Another', 'module', 'loaded!'], ' ')
    );
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
