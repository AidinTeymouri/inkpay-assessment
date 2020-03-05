const navigation = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'SWITCH_PAGE':
      return {
        ...state,
        counter: state.counter + 1,
      }
    default:
      return state
  }
}
export default navigation
