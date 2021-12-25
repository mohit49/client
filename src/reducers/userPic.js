
  const userPic = ( state ='', action) => {
    switch(action.type) {
      case 'user-pic':
        return state = action.payload;
      default:
        return state 
    }
  }
  export default userPic;