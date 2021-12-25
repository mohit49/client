const chatinPerson = ( state ='', action) => {
    switch(action.type) {
      case 'chattin-person':
        return state = action.payload;
      default:
        return state 
    }
  }
  export default chatinPerson;