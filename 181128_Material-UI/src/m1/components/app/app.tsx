import * as React from 'react';

import * as _ from 'lodash';
import * as axios from 'axios';

import Button from '@material-ui/core/Button';

class App extends React.Component {
  public constructor(arg: any) {
    super(arg);
  }
  public componentWillMount(): void {
    console.log(_.join(['Another', 'module', 'loaded!'], ' '));
    console.log(axios);
  }
  public render(): JSX.Element {
    return (
      <div className="app">
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}

export default App;
