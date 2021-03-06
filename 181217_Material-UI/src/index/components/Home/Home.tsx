import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Home extends React.Component {
  public componentWillReceiveProps(nextProps: any) {
    console.log(nextProps);
  }
  public render(): JSX.Element {
    console.log(this.props);
    return (
      <div className="Home">
        <h3>【Home】</h3>
        <Button variant="contained" color="primary">
          <Link to="/lists">to Lists</Link>
        </Button>
        <Button variant="contained" color="primary">
          <Link to="/t1">to T1</Link>
        </Button>
        <Button variant="contained" color="primary">
          <Link to="/t2">to T2</Link>
        </Button>
      </div>
    );
  }
}

export default Home;
