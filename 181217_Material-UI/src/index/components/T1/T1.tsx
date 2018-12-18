import * as React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../actions/T1ActionCreater';
import Button from '@material-ui/core/Button';

class T1 extends React.Component {
  public shouldComponentUpdate(nextProps: any, nextState: any): any {
    const { count }: any = this.props;
    console.log(count);
    console.log(nextProps.count);
    return true;
  }
  public render(): JSX.Element {
    const { count, handler }: any = this.props;
    return (
      <div className="T1">
        <h3>【T1】</h3>
        <Button variant="contained" color="primary" onClick={handler}>
          累加器
        </Button>
        <div>{count}</div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(T1);