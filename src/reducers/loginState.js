const isloggedinUser = (state = false, action) => {
    switch(action.type) {
      case 'isLoggedIn':
        return !state;
      default:
        return state
    }
  }
  export default isloggedinUser;