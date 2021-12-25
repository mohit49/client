
  
import React, {useState, useEffect} from "react";
import Axios from "axios";
import styled from "styled-components";
import {Heading2} from "../../ui-elements/page-heading/page-heading";
import MainWrapper from "../../ui-elements/section/Section";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { ButtonFill, ButtonOutline} from "../../ui-elements/button/site-button";
import Messages from "../../pages/messages";
import { chatPerson } from "../../actions/index";
import io from "socket.io-client";
const NearContainer = styled.div`
display:flex;
width:100%;
margin-top:20px;
flex-direction: column;
min-heigh:500px;

`
const ChatCardContainer = styled.div`
display:flex;
width:100%;
margin-top:20px;
flex-diraction:row;
overflow-x:auto;
justify-content:space-between;
text-align:center;

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


padding:10px;
.card-container {
border:2px #8854d0 solid;
border-radius:20px;
padding:30px 15px;
position:relative;
display:block;
.pro-pic {
    width:120px;
    height:120px;
    display:inline-block;
    border-radius:50%;
    background:#333333;
    overflow:hidden;
    text-align:center;
    img {
        width:180px;
        height:auto;
        margin: 0 auto;
        position:relative;

       
    }
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
export default function NearbyPeople() {
    const dispatch = useDispatch();
    const userInformation = useSelector(state => state.isloggedinUserDet);
    const  [onlineClients, setonlinClient] = useState([]);
    const socket = io.connect("http://103.70.166.47:3000", {transports: ['websocket']});
    const history = useHistory();
    const baseUrl = 'https://freehostingshop.com/images/profile-pic/';
    const onlineUsers = useSelector(state => state.onlineUsers),
    chatWith = (e) => {
        const name = e.target.dataset.userName;
        dispatch(chatPerson(name));
         
        
        history.push('/messages')
    };

    useEffect(() => {
       socket.emit("fetchUserDetails", {
            userNames: onlineUsers
          });
       
        
      }, [onlineUsers]);

      useEffect(() => {
        socket.on(
          "user-details",
          (data2) => {
            setonlinClient(data2)
           
          }
        );
      }, []);




    return (
        
    <NearContainer>
        <MainWrapper>
        <Heading2>  Chat with some more People in your area</Heading2>
        </MainWrapper>
     
        <ChatCardContainer>
            <ChatCardUl>
       

            {onlineClients && onlineClients.map((ele,key) => {
                 
               return(
            ele.userName !== JSON.parse(userInformation)[0].userName &&  
              <ChatCardLi key={key}>
              <div className='card-container'>
                      <span className='login-status'></span>
                      <div className='pro-pic'><img src={`${baseUrl}/${ele.profilePic}`}/></div>
                      <div className='user-name'>{ele.fullName}</div>
                      <div className='user-age'><span>{ele.birthDate}</span> yrs old</div>
                      {/*<div className='user-location'>Bahadurgarh(haryana)</div>*/}
                      <div className='user-button'><ButtonFill>View Profile</ButtonFill></div>
                      <div className='user-button' ><ButtonOutline onClick={chatWith} data-user-name={ele.userName}>Send Message</ButtonOutline></div>
                  </div>

              </ChatCardLi>)

            }) }

               
            </ChatCardUl>
        </ChatCardContainer>
     
    </NearContainer>
    );
  }

  