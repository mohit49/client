import React from "react";

import MainWrapper from "../ui-elements/section/Section";
import {Heading2} from "../ui-elements/page-heading/page-heading";
import styled from "styled-components";
import { ButtonOutline,ButtonFill } from "../ui-elements/button/site-button";
//import SelectionBox from "../component/SelectionBox/SelectionBox";
// <SelectionBox></SelectionBox>
export default function MyAccount() {
  const SectionCon = styled.div`
  display:flex;
  width:100%;
  flex-diraction:coloumn;
  flex-wrap:wrap;
  margin:50px auto 0px auto;
  min-height:500px;
  justify-content:space-between;
  font-family: 'Open Sans', sans-serif;
  `
  const AsideSection = styled.div`
  display:flex;
  width:30%;
  margin:20px auto;
  `
  const AsideWrapper = styled.div`
  display:flex;
  flex-direction: column;
  width:40%;
  margin:20px auto;
  .profile-navigation {
    width:80%;
    display:inline-block;
    height:40px;
    padding:0;
    font-family: 'Open Sans', sans-serif;
    li {
      display:inline-block;
      text-align:center;
      list-style:none;
      cursor:pointer;
      span{
        disply:inline-block;
        width:100%;
        font-weight:bold;
        font-size:30px
      }
      strong {
        width:100%;
        display:inline-block;
        font-size:18px
      }
      &:hover {
        span{
          color:#8854d0;

        }
        strong {
          color:#8854d0;
        }
      }

    }
    
  }
  .profile-information {
    width:100%;
    display:inline-block;
    ul {
      padding:0;
      margin:30px 0xp;
      list-style:none;
      li {
        list-style:none;
        margin-top:20px;
        p {
          display:inline-block;
          margin:0;
          margin-right:10px;
          font-size:18px;
          strong {
            font-weight:bold;
          }
        }
        label {
          width:100%;
          display:inline-block;
          font-size:20px;
          font-weight:bold;
        }
        input {
          border:2px #8854d0 solid;
          margin-top:5px;
          width:300px;
          padding:10px 15px;
          border-radius:25px;
          font-size:18px;
          &:disabled {
            border:2px #cccccc solid;
          }
        }
        &.edit-profile-link {
          float:left;
  
          span {
            text-decoration:underline;
            font-size:18px;
            cursor:pointer;
            font-weight:bold;
          }
        }
      }

    }
  }
  `
  const ChatCardUl = styled.ul`
padding:0;
margin:0;
display:flex;
flex-wrap:unwrap;
list-style:none;
flex-direction:row;
`
const ChatCardLi = styled.li`
display:block;
box-sizing:border-box;
width:250px;
text-align:center;

padding:10px;
.card-container {
    border:2px #8854d0 solid;
    border-radius:20px;
    padding:30px 15px;
    position:relative;
    display:block;
    .pro-pic {
        width:200px;
        height:200px;
        display:inline-block;
        border-radius:50%;
        background:#333333;
    }
    .user-name, .user-age,.user-location{
        width:100%;
        display:inline-block;
        text-align:center;
        color:#000000;
        font-weight:bold;
        margin-top:20px;
        font-family: 'Open Sans', sans-serif;
    }
    .user-age, .user-location {
        margin-top:5px;
        font-weight:lighter;
        font-size:13px;
        font-weight:bold;
    }
    .login-status {
        width:10px;
        height:10px;
        background:green;
        display:block;
        position:absolute;
        border-radius:50%;
        right:10px;
        top:10px
    }
    .user-button {
        width:100%;
        position: relative;
        display:inline-block;
        margin-top:15px;
    }
}
`
const ChangePassword = styled.div`
width:30%;
.password-information {
  width:100%;
  display:inline-block;
  ul {
    padding:0;
    margin:30px 0xp;
    list-style:none;
    li {
      list-style:none;
      margin-top:20px;
      p {
        display:inline-block;
        margin-right:10px;
        font-size:18px;
        strong {
          font-weight:bold;
        }
      }
      label {
        width:100%;
        display:inline-block;
        font-size:20px;
        font-weight:bold;
      }
      input {
        border:2px #8854d0 solid;
        margin-top:5px;
        width:300px;
        padding:10px 15px;
        border-radius:25px;
        font-size:18px;
        &:disabled {
          border:2px #cccccc solid;
        }
      }
    }

  }
}
`


    
    return (
      <>  
      <MainWrapper>
      <SectionCon>
        <AsideSection>
          <ChatCardUl>
            <ChatCardLi>
              <div className='card-container'>
                  <span className='login-status'></span>
                  <div className='pro-pic'>profile pic</div>
                  <div className='user-button'><ButtonFill>Edit Profile Pic</ButtonFill></div>
              </div>
            </ChatCardLi>
          </ChatCardUl>
        </AsideSection>
        <AsideWrapper>
 
          <div className='profile-information'>
          <Heading2>Edit Information</Heading2>
            <ul>
              <li><p><strong>User Name :</strong></p><p>MOhit9313</p></li>
              <li>
                <label>Name</label>
                <input type='text' value='Mohit Sharma' disabled></input>
              </li>
              <li>
                <label>Email</label>
                <input type='text' value='mohitanim@gmail.com' disabled></input>
              </li>
              <li className='edit-profile-link'>
              <span>Edit Profile</span>
            </li>
            </ul>
          </div>
        </AsideWrapper>
        <ChangePassword>
        <Heading2>Edit Password</Heading2>
        <div className='password-information'>
        
            <ul>
             
              <li>
                <label>Old Password</label>
                <input type='password'></input>
              </li>
              <li>
                <label>New Password</label>
                <input type='password'></input>
              </li>
              <li>
                <label>Verify Password</label>
                <input type='password'></input>
              </li>
              <li>
              <div className='user-button'><ButtonOutline>Update Password</ButtonOutline></div>
              </li>
            </ul>
          </div>
        </ChangePassword>
      </SectionCon>
      </MainWrapper>
    
    
    </>
       
    
    );
  }

  