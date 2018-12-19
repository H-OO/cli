import * as React from 'react';
import { connect } from 'react-redux';
import {
  mapStateToProps,
  mapDispatchToProps
} from '../../actions/testActionCreater';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// 引入组件
import Home from '../Home/Home';
import Lists from '../Lists/Lists';
import T1 from '../T1/T1';
import T2 from '../T2/T2';

class App extends React.Component {
  public constructor(arg: any) {
    super(arg);
    this.state = {
      msg: '.'
    };
    this.handler = this.handler.bind(this);
  }
  public handler() {
    this.setState({
      msg: 'okey'
    });
  }
  public render(): JSX.Element {
    const { msg }: any = this.state;
    return (
      <Router basename="/">
        <div className="App">
          <button onClick={this.handler}>changeApp</button>
          <div>{msg}</div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/lists" component={Lists} />
            <Route exact path="/t1" component={T1} />
            <Route exact path="/t2" component={T2} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
