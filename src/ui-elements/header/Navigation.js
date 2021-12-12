import React from "react";
import styled from "styled-components";
import MainWrapper from "../section/Section";
import  {ButtonFill ,ButtonOutline} from "../button/site-button";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import '../../fontcss/logoFont.css';
export default function Navigation() {

  const userInformation = useSelector(state => state.isloggedinUserDet);
  const loginCheck = useSelector(state => state.islogged);
 
 

    const Logo = styled.div`
    float:left;
    font-family: 'Blonde Personal Use';
    font-size: 60px;
    background: #8854d0;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
const MenuCon = styled.ul`
padding:0
z-index:10;
list-style:none;
float:right;
&.fixedClass {
  position:absolute;
  width:200px;
  background:#ffffff;
  padding:0;
  margin:0;
  list-style:none;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
  margin-top:10px;
}
`
const LI = styled.li`
 padding:0;
 float:left;
 margin:0px 10px;
 list-style:none;
 position:relative;
 &.dropdownLinks {
  width:100%;
  
  margin:0;
  padding: 0;
  
   a {
    border:none;
     color:#333333;
     cursor:pointer;
     &:hover {
      background: #8854d0;
    color:#ffffff;
    border-radius:0;
    }
     
   }
}
 a {
  border-radius:30px;
  outline:none;
  border:none;
  display:block;
  padding:9px 20px;
  font-size:18px;
  background:none;
  border: 2px solid #8854d0;
  font-family: 'Open Sans', sans-serif;
  color:#8854d0;
  cursor:pointer;
  margin-top:5px;
  text-decoration:none;
  &:hover {
      color:#ffffff;
      background:#8854d0;
    }
    &.button-fill {
      color:#ffffff;
      background:#8854d0;
    }
 }
`
const INPUT = styled.input`
display:block;
border-radius:20px;
font-family: 'Open Sans', sans-serif;
padding: 0 10px;
height:40px;
width:300px;
outline:none;
border-color:#000000;
font-size:16px;
margin-top:10px;
`
const SearchIcon = styled.i`
{
    display: inline-block;
    width: 24px;
    position:absolute;

    top: 18px;
    right: 16px;
    height: 24px;
    background:  url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAyNCAyNCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDkgMiBDIDUuMTQ1ODQ5NSAyIDIgNS4xNDU4NTI0IDIgOSBDIDIgMTIuODU0MTQ4IDUuMTQ1ODQ5NSAxNiA5IDE2IEMgMTAuNzQ3OTk5IDE2IDEyLjM0NTAwOSAxNS4zNDgwMjQgMTMuNTc0MjE5IDE0LjI4MTI1IEwgMTQgMTQuNzA3MDMxIEwgMTQgMTYgTCAyMCAyMiBMIDIyIDIwIEwgMTYgMTQgTCAxNC43MDcwMzEgMTQgTCAxNC4yODEyNSAxMy41NzQyMTkgQyAxNS4zNDgwMjQgMTIuMzQ1MDA5IDE2IDEwLjc0Nzk5NyAxNiA5IEMgMTYgNS4xNDU4NTI0IDEyLjg1NDE1MSAyIDkgMiB6IE0gOSA0IEMgMTEuNzczMjcxIDQgMTQgNi4yMjY3MzA3IDE0IDkgQyAxNCAxMS43NzMyNjkgMTEuNzczMjcxIDE0IDkgMTQgQyA2LjIyNjcyOSAxNCA0IDExLjc3MzI2OSA0IDkgQyA0IDYuMjI2NzMwNyA2LjIyNjcyOSA0IDkgNCB6Ij48L3BhdGg+PC9zdmc+') 50% 50% no-repeat;
    background-size: 100%; `
    
    return (
        
    <MainWrapper className='mn-header'>
        <Logo>Talk&Type</Logo>
        <MenuCon>
          <LI>
<INPUT type='text'  autocomplete="off" placeholder='Search with name or place'/>
<SearchIcon></SearchIcon>
          </LI>
          {!loginCheck && <LI><Link to='/login'>Login</Link></LI>}
          {!loginCheck && <LI><Link className='button-fill' to='/register'>Join Now</Link></LI>}
          {loginCheck && <LI><Link to='/my-account'>  Hi {(userInformation ? JSON.parse( userInformation)[0].fullName: '')}</Link>
          <MenuCon className='fixedClass'>
          <LI className='dropdownLinks'>
            <Link to='/my-account'>My Account</Link>
          </LI>
          <LI className='dropdownLinks'>
            <Link>My Friends</Link>
          </LI>
          <LI className='dropdownLinks'>
            <Link>Logout</Link>
          </LI>
          </MenuCon>
          </LI>}
        </MenuCon>
    </MainWrapper>
    
    
    );
  }

  