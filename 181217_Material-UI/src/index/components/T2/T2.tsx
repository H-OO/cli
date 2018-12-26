import * as React from 'react';
import { connect } from 'react-redux';
// import { mapStateToProps, mapDispatchToProps } from '../../actions/T1ActionCreater';
import Button from '@material-ui/core/Button';

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
    const arr: Array<any> = ['在', '我', 9, 1, 'z', 'a', '0'];
    arr.sort((a, b) => a.toString().localeCompare(b)); // ["0", 1, 9, "我", "在", "a", "z"]
    console.log(arr);

    const num1: number = 1;
    const num9: number = 9;
    console.log(num1.toString().localeCompare(num9 as any)); // -1
    console.log(num9.toString().localeCompare(num1 as any)); // 1
    console.log('啊'.localeCompare('在'));
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
