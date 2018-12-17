import * as React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../actions/testActionCreater';
import * as PropTypes from 'prop-types';

class Counter extends React.Component {
  // props 接收的参数声明
  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
  };
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
