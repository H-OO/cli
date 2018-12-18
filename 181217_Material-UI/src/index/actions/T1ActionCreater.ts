export function mapStateToProps(state: any) {
  return {
    count: state.T1.count
  };
}

export function mapDispatchToProps(dispatch: any) {
  return {
    handler() {
      dispatch({
        type: 'add'
      });
    }
  };
}