export default (
  state = { count: 0 },
  action: { type?: string }
) => {
  const { count }: { count: number } = state;
  switch (action.type) {
    case 'add':
      return {
        count: count + 1
      };
    default:
      return state;
  }
};
