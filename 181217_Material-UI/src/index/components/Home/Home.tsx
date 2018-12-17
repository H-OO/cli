import * as React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

class Home extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="Home">
        <h3>【Home】</h3>
        <Button variant="contained" color="primary">
          <Link to="/lists">to list</Link>
        </Button>
      </div>
    );
  }
}

export default Home;