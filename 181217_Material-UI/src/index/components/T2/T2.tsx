import * as React from 'react';
import { connect } from 'react-redux';
// import { mapStateToProps, mapDispatchToProps } from '../../actions/T1ActionCreater';
import Button from '@material-ui/core/Button';

class T2 extends React.Component {
  public constructor(arg: any) {
    super(arg);
    this.handler = this.handler.bind(this);
    this.state = {
      c1: 0
    }
  }
  public handler() {
    console.log(this);
    
    const { c1 }: any = this.state;
    // setTimeout(() => {
      this.setState({
        c1: c1 + 1
      })
      console.log('---');
      console.log(c1 + 1);
      console.log(this.state); // 获取不到最新的
    // }, 0)
  }
  public render(): JSX.Element {
    const { c1 }: any = this.state;
    return (
      <div className="T2">
        <h3>【T2】</h3>
        <Button variant="contained" color="primary" onClick={this.handler}>
          累加器
        </Button>
        <div>{c1}</div>
      </div>
    )
  }
}

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(T1);

export default T2;
