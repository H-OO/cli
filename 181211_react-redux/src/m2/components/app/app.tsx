import * as React from 'react';
import { connect } from 'react-redux';
// import * as PropTypes from 'prop-types';

class Counter extends React.Component {
  // static propTypes = {
  //   value: PropTypes.number.isRequired, // 类似声明
  //   onIncreaseClick: PropTypes.func.isRequired // 类似声明
  // };
  public render(): JSX.Element {
    const { value, onIncreaseClick }: any = this.props;
    console.log(this);
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  console.log(state);
  return {
    value: state.test1.count
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    onIncreaseClick: () => dispatch( { type: 'increase', t: '123' } )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
