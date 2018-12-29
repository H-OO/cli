import * as React from 'react';
import { connect } from 'react-redux';
// import { mapStateToProps, mapDispatchToProps } from '../../actions/T1ActionCreater';
import Button from '@material-ui/core/Button';
import { func } from 'prop-types';

function FancyBorder(props: any) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

class T2 extends React.Component {
  public constructor(arg: any) {
    super(arg);
    this.handler = this.handler.bind(this);
    this.state = {
      c1: 0
    };
  }
  public handler() {
    const { c1 }: any = this.state;
    this.setState({
      c1: c1 + 1
    });
    console.log('---');
    console.log(c1 + 1);
    console.log(this.state); // 获取不到最新的
  }
  public componentWillMount() {
    // const str = 'matrix(1, 0, 0, 1, -100, 0)';
    // const str = 'matrix(123abc)';
    // console.log(  str.match( / matrix\( [\.\w]* \) /g )  );
    // const str = '$t(Aa._01)';
    // const res = str.match(/\$t\([\.\w]*\)/g);
    // console.log(res); // ['$t(Aa._01)', '$t(Aa._02)']

    // const str = 'matrix(1, 0, 0, 1, -100, 0)';
    // const res = str.match(/[^a-z\(\)\s\,]+/g).slice(4);
    // console.log(res); // ['-100', '0']

    const str = '1234';
    const res = str.replace(/(\d{2})(\d{2})/, '$1-$2');
    console.log(res);
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
        <FancyBorder color="blue">
          <h1 className="Dialog-title">Welcome1</h1>
          <p className="Dialog-message">
            Thank you for visiting our spacecraft!
          </p>
        </FancyBorder>
      </div>
    );
  }
}

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(T1);

export default T2;
