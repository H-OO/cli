import * as React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="Home">
        <h3>【Home】</h3>
        <Link to="/list">to list</Link>
      </div>
    )
  }
}

export default Home;