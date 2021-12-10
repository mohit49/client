import React from "react";

import MainWrapper from "../ui-elements/section/Section";
import {Heading} from "../ui-elements/page-heading/page-heading";
import styled from "styled-components";
import { ButtonOutline,ButtonFill } from "../ui-elements/button/site-button";
//import SelectionBox from "../component/SelectionBox/SelectionBox";
// <SelectionBox></SelectionBox>
export default function Login() {
  const LoginForm = styled.form`
  width:350px;
  margin:20px auto;
  padding:30px 0px;
  border:3px #8854d0 solid;
  border-radius:20px;
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
    margin-left:10px;
  }
  `
    
    return (
      <>  
    <MainWrapper className='containerWrapper'>
      <Heading>Login now and start talking with strangers for free </Heading>
    </MainWrapper>
    <MainWrapper>
      <LoginForm>
        <LoginInputCon>
          <label>User Name / Email id</label>
          <input type='text'/>
        </LoginInputCon>
        <LoginInputCon>
          <label>Password</label>
          <input type='password'/>
        </LoginInputCon>
        <ButtonCon>
          <ButtonOutline>Login</ButtonOutline>
          <ButtonFill>Join Now</ButtonFill>
        </ButtonCon>
      </LoginForm>
    </MainWrapper>
    
    
    
    </>
       
    
    );
  }

  