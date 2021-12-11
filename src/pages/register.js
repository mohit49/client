import React, { useState,useEffect } from "react";
import { useHistory } from "react-router";
import Axios from "axios";
import MainWrapper from "../ui-elements/section/Section";
import {Heading} from "../ui-elements/page-heading/page-heading";
import styled from "styled-components";
import { ButtonOutline,ButtonFill } from "../ui-elements/button/site-button";
import {useDispatch, useSelector} from "react-redux";
import { islogin } from "../actions";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
//import SelectionBox from "../component/SelectionBox/SelectionBox";
// <SelectionBox></SelectionBox>

const RegisterForm = styled.form`
display:flex;
width:75%;
flex-wrap:wrap;

margin:20px auto;
justify-content:space-between;
padding:30px;
border:3px #8854d0 solid;
border-radius:20px;
`
const RegInputCon = styled.div`
width:45%;
position:relative;
margin:10px auto;
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
select {
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


text-align:center;
font-family: 'Open Sans', sans-serif;
button {
  margin-left:10px;
}
`
const SinginLink = styled.p`
width:100%;
span {
  courser:pointer;
  color:#8854d0;
}
`

export default function Register() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [responceState, responceChange] = useState({
    sucessClass:'',
    message: ''
    });
  const [forminput, changeform] = useState({
    userName : '',
    fullName :  '',
    gender :  '',
    email :  '',
    password : '',
    birthDate : '',
  });
  const [errors, setErrors] = useState({
    userName : '',
    fullName :  '',
    gender :  '',
    email :  '',
    password : '',
    birthDate : '',
  });
  useEffect(()=>{
    if(responceState.sucessClass === 'sucess') {
      changeform({
        userName : '',
        fullName :  '',
        gender :  '',
        email :  '',
        password : '',
        birthDate : '',
        })

    }
}, [responceState])
function handleChange(e) {
  e.preventDefault();
  const name = e.target.name;
  const value = e.target.value;
  if (e.target.name == 'userName') {
    value.length < 3
      ? setErrors({ ...errors, [name]: true })
      : setErrors({ ...errors, [name]: false });
  }
  if (e.target.name == 'fullName') {
      value.length < 3
        ? setErrors({ ...errors, [name]: true })
        : setErrors({ ...errors, [name]: false });
    }
    if (e.target.name == 'password') {
        let  regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        regularExpression.test(value)
        ? setErrors({ ...errors, [name]: false })
        : setErrors({ ...errors, [name]: true });
    }
  if (e.target.name == 'gender') {
    value.length < 3
      ? setErrors({ ...errors, [name]: true })
      : setErrors({ ...errors, [name]: false });
  }
  if (e.target.name == 'email') {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(value));
    !re.test(value)
      ? setErrors({ ...errors, [name]: true })
      : setErrors({ ...errors, [name]: false });
  }



  changeform({ ...forminput, [name]: value });
}
const submitHandler = (e) => {
  e.preventDefault();
  if((!errors.userName && !errors.fullName && !errors.gender && !errors.email && !errors.password && !errors.birthDate) &&  (forminput.userName.length > 0 && forminput.fullName.length > 0 && forminput.gender.length > 0 && forminput.email.length > 0 && forminput.password.length > 0 && startDate.toString().length > 0) ) {
  
  Axios.post('http://talkntype.com/server/register',{
		method: 'HEAD',
		mode: 'no-cors',
		headers: {
			'Access-Control-Allow-Origin': '*',
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		withCredentials: true,
		credentials: 'same-origin',
		crossdomain: true,
	},{
      userName : forminput.userName,
      fullName : forminput.fullName,
      gender : forminput.gender,
      email : forminput.email,
      password : forminput.password,
      birthDate : startDate,
  }).then((response)=>{
     if(response.data.message === 'userAlreadyExist') {
      return responceChange({ sucessClass:'warning',
      message: 'Sorry this Phone number is already in Use' });
      
      }
     else if(response.data.message === 'emailExist') {
      return responceChange({ sucessClass:'warning',
         message: 'Sorry this email is already in Use' })
      }
      else if(response.statusText === 'OK') {
        history.push("/my-account");
        dispatch(islogin());
          return responceChange({ sucessClass:'sucess',
         message: 'Sucessfully Registered' });
        

      }
  });
}
else {
    return responceChange({ sucessClass:'warning',
         message: 'Please fill the Registreation form' })
      
}
 
};



    
    return (
      <>  
    <MainWrapper className='containerWrapper'>
      <Heading>Create your account now </Heading>
    </MainWrapper>
    <MainWrapper>
      <RegisterForm onSubmit={submitHandler}>
        <RegInputCon>
          <label>User Name</label>
          <input onChange={handleChange} value={forminput.userName} name='userName' type='text'/>
          {errors.userName && (
                <span className="error-hide">Max length more then 3</span>
              )}
        </RegInputCon>
        <RegInputCon>
          <label>Full Name</label>
          <input onChange={handleChange} value={forminput.fullName} name='fullName' type='text'/>
          {errors.fullName && (
                <span className="error-hide">Max length more then 3</span>
              )}
        </RegInputCon>
        <RegInputCon>
          <label>Email </label>
          <input onChange={handleChange} value={forminput.email} name='email' type='email'/>
          {errors.email && (
                <span className="error-hide">Max length more then 3</span>
              )}
        </RegInputCon>
        <RegInputCon>
          <label>Gender </label>
          <select name='gender'   onChange={handleChange}>
            <option value='male'>Male</option>
            <option value='female'>female</option>
            </select>
            {errors.gender && (
                <span className="error-hide">Max length more then 3</span>
              )}
        </RegInputCon>
        <RegInputCon>
        <label>Birth Date </label>
        <DatePicker  value={startDate} name='birthDate' selected={startDate} onChange={(date) => setStartDate(date)} />
        </RegInputCon>
        <RegInputCon>
          <label>Password</label>
          <input onChange={handleChange} value={forminput.password} name='password' type='password'/>
          {errors.password && (
                <span className="error-hide">Max length more then 3</span>
              )}
        </RegInputCon>
        <RegInputCon>
          <label>Confirm Password</label>
          <input name='password' type='password'/>
        </RegInputCon>
        <ButtonCon>
        <ButtonFill>Join Now</ButtonFill>
        <SinginLink>Or <span >Login Now </span> if already had an account</SinginLink>
          
        </ButtonCon>
        {responceState.sucessClass.length > 0 && (<p className={responceState.sucessClass}>{responceState.message}</p>)}
      </RegisterForm>
    </MainWrapper>
    
    
    
    </>
       
    
    );
  }

  