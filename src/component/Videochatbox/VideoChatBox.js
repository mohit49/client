
  
import React from "react";
import styled from "styled-components";
import CutcallImg from '../../assets/cut-call.png'
import CamOffImg from '../../assets/cam-off.png'
import CamOffMic from '../../assets/mic-off.png'
import RightArr from '../../assets/right-arrow.png'
export default function VideoChatBox() {
    const VideoContainer = styled.div`
    display:flex;
    width:100%;
    margin-top:20px;
    height:500px;
    flex-diraction:column;
    justify-content:space-between;
  `
    const VideoFrame = styled.div`
    display:flex;
    width:65%;
    border:2px #8854d0 solid;
    border-radius:30px;
    background:#fff;
    justify-content:space-between;
    position: relative;
  `
  const ButtonUl = styled.ul`

  position:absolute;
  bottom: 0;
  left:50%;
  margin-left:-150px;
  width:300px;
  height:70px;
  list-style:none;
  padding:0;

  text-align:center;
  
`
const ButtonLi = styled.li`
display:inline-block;
margin-left:20px;

`
const ImgConCutCall = styled.a`
width:80px;
display:block;
border-radius:50%;
background:red;
text-align:center;
height:80px;
cursor:pointer;
img {
    width: 60%;
    text-align: center;
    margin-top: 16px;
}

`
const ImgCamera = styled.a`
width:60px;
display:block;
border-radius:50%;
background:white;
text-align:center;
height:60px;
cursor:pointer;
img {
    width: 50%;
    text-align: center;
    margin-top: 16px;
}

`

const ImgMic = styled.a`
width:60px;
display:block;
border-radius:50%;
background:white;
text-align:center;
height:60px;
cursor:pointer;
img {
    width: 50%;
    text-align: center;
    margin-top: 16px;
}

`
const ChatBox = styled.div`
width:30%;
background:#none;
position:relative;
border-radius:30px;
border:2px #8854d0 solid;
overflow:hidden;
`
const RecivedChatBox = styled.div`
width:100%;
background:none;
position: absolute;
height:85%;
background:#eeeeee;
`
const SubmitChatBox = styled.div`
width:100%;
background:none;
bottom:0;
position: absolute;
font-family: 'Open Sans', sans-serif;
height:15%;

`
const InputBox = styled.textarea`
width:100%;
outline:none;
background:none;
font-family: 'Open Sans', sans-serif;
font-weight:bold;
font-size:16px;
bottom:0;
border:none;
height:50px;
padding: 5px 10px;
background:#fff;
`

const SendButton = styled.button`
width:60px;
height:60px;
border-radius:50%;
background:#8854d0;
position:absolute;
right:10px;
border:none;
top:10px;
curser:pointer;
text-align:center;
img {
    width:30px;

}
`


    return (
        
   
      <VideoContainer>
          <VideoFrame>
            <ButtonUl>
                <ButtonLi>
                <ImgMic><img src={CamOffMic}/></ImgMic>
                </ButtonLi>
                <ButtonLi>
                <ImgConCutCall><img src={CutcallImg}/></ImgConCutCall>
                </ButtonLi>
                <ButtonLi>
                <ImgCamera><img src={CamOffImg}/></ImgCamera>
                </ButtonLi>
            </ButtonUl> 
          </VideoFrame>
          <ChatBox>
            <RecivedChatBox></RecivedChatBox>
            <SubmitChatBox>
                <InputBox placeholder='Type your message here'></InputBox>
                <SendButton><img src={RightArr}/></SendButton>
            </SubmitChatBox>
          </ChatBox>

      </VideoContainer>


    
    
    );
  }

  