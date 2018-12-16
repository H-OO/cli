import * as React from 'react';
import { connect } from 'react-redux';
import {
  mapStateToProps,
  mapDispatchToProps
} from '../../actions/testActionCreater';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// 引入组件
import Home from '../Home/Home';

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
