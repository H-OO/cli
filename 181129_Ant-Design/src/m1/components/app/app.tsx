import * as React from 'react';
import './app.scss';
import * as _ from 'lodash';
import * as axios from 'axios';
import Button from 'antd/lib/button';

class App extends React.Component {
  public constructor(arg: any) {
    super(arg);
  }
  public componentWillMount(): void {
    console.log(
      _.join(['Another', 'module', 'loaded!'], ' ')
    );
    console.log(axios);
  }
  public render(): JSX.Element {
    return (
      <div className="app">
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;
