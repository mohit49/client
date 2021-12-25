export const islogin = () =>{
    return {
        type:'isLoggedIn'
    };
};
export const islogOut = () =>{
    return {
        type:'isLoggedOut'
    };
};

export const onlineUsers2 = (dataon) => {
    return {
        type: 'onlineUsers',
        payload2: dataon
    }
}

export const userdet = (data) =>{
    return {
        type:'userDetails',
        payload:data
    };
};

export const userImg = (data) =>{
    return {
        type:'user-pic',
        payload:data
    };
};
export const chatPerson = (data) =>{
    return {
        type:'chattin-person',
        payload: data
    };
};

