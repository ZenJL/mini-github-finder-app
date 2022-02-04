const alertReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ALERT':
      return {
        ...state,
        msg: action.payload.msg,
        type: action.payload.type,
      }
      // return action.payload
    case 'REMOVE_ALERT':
      return null;
      
    default:
      return state;
  }
}

export default alertReducer