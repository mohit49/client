
  
import React from "react";
import styled from "styled-components";
import {Heading2} from "../../ui-elements/page-heading/page-heading";
import MainWrapper from "../../ui-elements/section/Section";
import { ButtonFill, ButtonOutline} from "../../ui-elements/button/site-button";

export default function NearbyPeople() {
    const NearContainer = styled.div`
    display:flex;
    width:100%;
    margin-top:20px;
    flex-direction: column;
   
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
        width:100px;
        height:100px;
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



    return (
    <NearContainer>
        <MainWrapper>
        <Heading2>Chat with some more People in your area</Heading2>
        </MainWrapper>
       
        <ChatCardContainer>
            <ChatCardUl>
                <ChatCardLi>
                <div className='card-container'>
                        <span className='login-status'></span>
                        <div className='pro-pic'>profile pic</div>
                        <div className='user-name'>Mohit Sharma</div>
                        <div className='user-age'><span>30</span> yrs old</div>
                        <div className='user-location'>Bahadurgarh(haryana)</div>
                        <div className='user-button'><ButtonFill>View Profile</ButtonFill></div>
                        <div className='user-button'><ButtonOutline>Send Message</ButtonOutline></div>
                    </div>

                </ChatCardLi>
                <ChatCardLi>
                    <div className='card-container'>
                        <span className='login-status'></span>
                        <div className='pro-pic'>profile pic</div>
                        <div className='user-name'>Mohit Sharma</div>
                        <div className='user-age'><span>30</span> yrs old</div>
                        <div className='user-location'>Bahadurgarh(haryana)</div>
                        <div className='user-button'><ButtonFill>View Profile</ButtonFill></div>
                        <div className='user-button'><ButtonOutline>Send Message</ButtonOutline></div>
                    </div>
                </ChatCardLi>
                <ChatCardLi>
                    <div className='card-container'>
                        <span className='login-status'></span>
                        <div className='pro-pic'>profile pic</div>
                        <div className='user-name'>Mohit Sharma</div>
                        <div className='user-age'><span>30</span> yrs old</div>
                        <div className='user-location'>Bahadurgarh(haryana)</div>
                        <div className='user-button'><ButtonFill>View Profile</ButtonFill></div>
                        <div className='user-button'><ButtonOutline>Send Message</ButtonOutline></div>
                    </div>
                </ChatCardLi>
                <ChatCardLi>
                    <div className='card-container'>
                        <span className='login-status'></span>
                        <div className='pro-pic'>profile pic</div>
                        <div className='user-name'>Mohit Sharma</div>
                        <div className='user-age'><span>30</span> yrs old</div>
                        <div className='user-location'>Bahadurgarh(haryana)</div>
                        <div className='user-button'><ButtonFill>View Profile</ButtonFill></div>
                        <div className='user-button'><ButtonOutline>Send Message</ButtonOutline></div>
                    </div>
                </ChatCardLi>
                <ChatCardLi>
                    <div className='card-container'>
                        <span className='login-status'></span>
                        <div className='pro-pic'>profile pic</div>
                        <div className='user-name'>Mohit Sharma</div>
                        <div className='user-age'><span>30</span> yrs old</div>
                        <div className='user-location'>Bahadurgarh(haryana)</div>
                        <div className='user-button'><ButtonFill>View Profile</ButtonFill></div>
                        <div className='user-button'><ButtonOutline>Send Message</ButtonOutline></div>
                    </div>
                </ChatCardLi>
                <ChatCardLi>
                    <div className='card-container'>
                        <span className='login-status'></span>
                        <div className='pro-pic'>profile pic</div>
                        <div className='user-name'>Mohit Sharma</div>
                        <div className='user-age'><span>30</span> yrs old</div>
                        <div className='user-location'>Bahadurgarh(haryana)</div>
                        <div className='user-button'><ButtonFill>View Profile</ButtonFill></div>
                        <div className='user-button'><ButtonOutline>Send Message</ButtonOutline></div>
                    </div>
                </ChatCardLi>
                <ChatCardLi>
                    <div className='card-container'>
                        <span className='login-status'></span>
                        <div className='pro-pic'>profile pic</div>
                        <div className='user-name'>Mohit Sharma</div>
                        <div className='user-age'><span>30</span> yrs old</div>
                        <div className='user-location'>Bahadurgarh(haryana)</div>
                        <div className='user-button'><ButtonFill>View Profile</ButtonFill></div>
                        <div className='user-button'><ButtonOutline>Send Message</ButtonOutline></div>
                    </div>
                </ChatCardLi>
                <ChatCardLi>
                    <div className='card-container'>
                        <span className='login-status'></span>
                        <div className='pro-pic'>profile pic</div>
                        <div className='user-name'>Mohit Sharma</div>
                        <div className='user-age'><span>30</span> yrs old</div>
                        <div className='user-location'>Bahadurgarh(haryana)</div>
                        <div className='user-button'><ButtonFill>View Profile</ButtonFill></div>
                        <div className='user-button'><ButtonOutline>Send Message</ButtonOutline></div>
                    </div>
                </ChatCardLi>
                <ChatCardLi>
                    <div className='card-container'>
                        <span className='login-status'></span>
                        <div className='pro-pic'>profile pic</div>
                        <div className='user-name'>Mohit Sharma</div>
                        <div className='user-age'><span>30</span> yrs old</div>
                        <div className='user-location'>Bahadurgarh(haryana)</div>
                        <div className='user-button'><ButtonFill>View Profile</ButtonFill></div>
                        <div className='user-button'><ButtonOutline>Send Message</ButtonOutline></div>
                    </div>
                </ChatCardLi>
                <ChatCardLi>
                    <div className='card-container'>
                        <span className='login-status'></span>
                        <div className='pro-pic'>profile pic</div>
                        <div className='user-name'>Mohit Sharma</div>
                        <div className='user-age'><span>30</span> yrs old</div>
                        <div className='user-location'>Bahadurgarh(haryana)</div>
                        <div className='user-button'><ButtonFill>View Profile</ButtonFill></div>
                        <div className='user-button'><ButtonOutline>Send Message</ButtonOutline></div>
                    </div>
                </ChatCardLi>
                <ChatCardLi>
                    <div className='card-container'>
                        <span className='login-status'></span>
                        <div className='pro-pic'>profile pic</div>
                        <div className='user-name'>Mohit Sharma</div>
                        <div className='user-age'><span>30</span> yrs old</div>
                        <div className='user-location'>Bahadurgarh(haryana)</div>
                        <div className='user-button'><ButtonFill>View Profile</ButtonFill></div>
                        <div className='user-button'><ButtonOutline>Send Message</ButtonOutline></div>
                    </div>
                </ChatCardLi>
              
               
            </ChatCardUl>
        </ChatCardContainer>
     
    </NearContainer>
    );
  }

  