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

export const userdet = (data) =>{
    return {
        type:'userDetails',
        payload:data
    };
};