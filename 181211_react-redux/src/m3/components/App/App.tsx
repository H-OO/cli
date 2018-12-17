import * as React from 'react';
import { connect } from 'react-redux';
import {
  mapStateToProps,
  mapDispatchToProps
} from '../../actions/testActionCreater';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// 引入组件
import Home from '../Home/Home';
import List from '../List/List';

class App extends React.Component {
  public render(): JSX.Element {
    const { pathname }: { pathname: string } = window.location;
    return (
      <Router basename={pathname}>
        <div className="App">
          <h2>m3</h2>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/list' component={List} />
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
