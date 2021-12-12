
  const isloggedinUserDet = ( state = '', action) => {
    switch(action.type) {
      case 'userDetails':
        return state = action.payload;
      default:
        return state =''
    }
  }
  export default isloggedinUserDet;