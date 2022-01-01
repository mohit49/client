import React,{useEffect, useState} from "react";
import Axios from "axios";
import { useHistory } from "react-router";
import MainWrapper from "../ui-elements/section/Section";
import {Heading} from "../ui-elements/page-heading/page-heading";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { islogin, userdet, userImg } from "../actions";
import { ButtonOutline,ButtonFill } from "../ui-elements/button/site-button";
import { io } from "socket.io-client";
//import SelectionBox from "../component/SelectionBox/SelectionBox";
// <SelectionBox></SelectionBox>
const LoginForm = styled.form`
width:350px;
margin:20px auto;
padding:30px 0px;
border:3px #8854d0 solid;
border-radius:20px;
p {
  font-family: 'Open Sans', sans-serif;
  text-align:center;
  display:inline-block;
  width:100%;
  color:#8854d0;

}
`
const LoginInputCon = styled.div`
width:85%;
position:relative;
margin:30px auto;
label {
  width:100%;
  display: inline-block;
  position:relative;
  font-family: 'Open Sans', sans-serif;
  font-size:20px;
}
input {
  font-family: 'Open Sans', sans-serif;
  font-size:16px;
  width:96%;
  outline:none;
  border:2px #8854d0 solid;
  padding: 10px 5px;
  margin-top: 10px;
  border-radius: 10px;
  font-weight:bold;
}

`
const ButtonCon = styled.div`
width:90%;
margin:0 auto;
display:flex;
button {
  font-family: 'Open Sans', sans-serif;
  margin-left:10px;
}
`
export default function Login() {
  const history = useHistory();
  const [lodingState, setLodingStaet] = useState(false);
  const dispatch = useDispatch();
  const [socket, setSocket] = useState(null)
  const [formDetails, setFormDetails] = useState({
    userNameEmail: '',
    password:''
  }),
  [responseMsg, setResponseMsg] = useState(''),
  [errors, setError] = useState({
    userNameEmail: '',
    password:''
  }),
  handleLoginChange = (e) =>{
    e.preventDefault();
  const name = e.target.name;
  const value = e.target.value;
  if (e.target.name == 'userName') {
    value.length < 3
      ? setError({ ...errors, [name]: true })
      : setError({ ...errors, [name]: false });
  }
  if (e.target.password == 'password') {
    let  regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    regularExpression.test(value)
    ? setError({ ...errors, [name]: false })
    : setError({ ...errors, [name]: true });
  }
  setFormDetails({ ...formDetails, [name]: value });
  console.log(formDetails);
  },
  submitLogin = (e) => {
    e.preventDefault();
    setLodingStaet(!lodingState);
    Axios.post('//localhost:3001/authentication', {
      userName : formDetails.userNameEmail,
      password : formDetails.password,
    }).then((response)=>{
      setLodingStaet(lodingState);
           if(response.statusText === 'OK') {
            setResponseMsg(response.data.message);
            if(response.data.loginMark === 'login') {
              dispatch(islogin());
              dispatch(userdet(JSON.stringify(response.data.json)));
              localStorage.setItem("loginStatus" , true);
              localStorage.setItem("loginUser" ,JSON.stringify(response.data.json));
              localStorage.setItem("userImg" ,response.data.userImg);
              dispatch(userImg(response.data.userImg));
              history.push('/')
        
            }
          }
        });

  },
  joinNowForm = () =>{
    history.push('/register')
  }

    return (
      <>  
    <MainWrapper className='containerWrapper'>
      <Heading>Login now and start talking with strangers for free </Heading>
    </MainWrapper>
    <MainWrapper>
      <LoginForm>
        <LoginInputCon>
          <label>User Name / Email id</label>
          <input value={formDetails.userNameEmail} name='userNameEmail' onChange={handleLoginChange} type='text'/>
        </LoginInputCon>
        <LoginInputCon>
          <label>Password</label>
          <input value={formDetails.password} name='password' onChange={handleLoginChange} type='password'/>
        </LoginInputCon>
        <ButtonCon>
          <ButtonOutline onClick={submitLogin}>Login</ButtonOutline>
          <ButtonFill onClick={joinNowForm}>Join Now</ButtonFill>
        </ButtonCon>
        {responseMsg.length > 0 && <p>{responseMsg}</p>}
        {lodingState && <p> Please Wait</p>}
        
      </LoginForm>
    </MainWrapper>
    
    
    
    </>
       
    
    );
  }

  