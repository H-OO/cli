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

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <Router basename="/">
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/lists" component={Lists} />
            <Route exact path="/t1" component={T1} />
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
