
  const onlineUsers2 = ( state = '', action2) => {
    switch(action2.type) {
      case 'onlineUsers':
        return state = action2.payload2;
        default:
          return state
    }
  }
  export default onlineUsers2;