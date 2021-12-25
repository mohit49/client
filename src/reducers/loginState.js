const isloggedinUser = (state = false, action) => {
    switch(action.type) {
      case 'isLoggedIn':
        return !state;
    case 'isLoggedOut':
        return !state;
      default:
        return state
    }
  }
  export default isloggedinUser;

  // store login user details
