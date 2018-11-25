import * as React from 'react';
import './app.scss';
const person = require('../../images/person.gif');

import * as _ from 'lodash';
import * as axios from 'axios';

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
        <img src={person} alt=""/>
      </div>
    );
  }
}

export default App;
