import * as React from 'react';
import { Link } from 'react-router-dom';

class List extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="List">
        <h3>【List】</h3>
        <Link to="/">to Home</Link>
      </div>
    );
  }
}

export default List;
