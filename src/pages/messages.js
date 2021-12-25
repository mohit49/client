import React, {useState,useEffect} from "react";
import ImageUploading from 'react-images-uploading';
import MainWrapper from "../ui-elements/section/Section";
import Axios from "axios";
import styled from "styled-components";
import {useSelector } from "react-redux";
import io from "socket.io-client";
import { useHistory } from "react-router";
//import SelectionBox from "../component/SelectionBox/SelectionBox";
// <SelectionBox></SelectionBox>

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
const MessageSender = styled.div`
background:#ffffff;
border-radius:20px;
width:100%;
form {
    display:flex;
width:100%;
padding: 10px;
margin:0;
display:flex;
flex-direction:coloumn;
}
input {
    width:90%;
    border:none;
    outline:none;
    font-size:16px;
    font-family: 'Open Sans', sans-serif;
}
button{
    outline:none;
    border:none;
    padding:10px 20px;
    font-size:16px;
    border-radius:20px;
    cursor:pointer;
    background:#8854d0;
    color:#ffffff;
    font-family: 'Open Sans', sans-serif;
}
`
const ChatContainer = styled.div`
display:flex;
width:68%;
border-radius:20px;
padding:10px;
margin:0px;
flex-wrap: wrap;
background: #eee;
font-family: 'Open Sans', sans-serif;
ul {
    padding:20px;
    margin:0;
    list-style:none;
    display: flex;
    flex-direction: column;
    width:100%;
    max-height:500px;
    overflow-y: auto;
    li {
        &.reciver-con {
            p {
               float:right;
               background: #dddddd;
            }
        }
        p{
            float:left;
            background: #ffffff;
            border-radius:50px;
           
            margin:0;
            padding:5px;
            diaplay:inline-block;
            align-items: center;
        
            .sender-pic {
                width:30px;
                height:30px;
                float:left;
                background:#333333;
                border-radius:50%;
            }
            .sender-message {
                width:80%;
                float:left;
                font-size:13px;
                font-style:italic;
                margin-left:10px;
            }
        }
    }
}
`
const ChatList = styled.div`
display:flex;
flex-direction: column;
width:30%;
background:#8854d0;
margin:0px;
border-radius:20px;
padding:10px;
.Search-box {
    width:100%;
    display:flex;
    height:50px;
    background:#ffffff;
    border-radius:25px;
    overflow:hidden;
    input {
        width:100%;
        display:inline-block;
        border:none;
        outline:none;
        font-size:16px;
        padding:0px 10px;
        font-family: 'Open Sans', sans-serif;
    }
}
.messages-inbox {
    width:100%;
    background:#ffffff;
    border-radius:25px;
    padding:0;
    max-height:500px;
    overflow-y:scroll;
    ul {
        display: flex;
        flex-direction: column;
    }
    li {
        width:100%;
        list-style:none;
        padding:10px;
        display:flex;
        flex-direction: row;
        cursor:pointer;
        border-bottom:1px #eee solid;
       
        .user-pic {
            width:50px;
            height:50px;
            border-radius:50%;
            background:#333;
            margin-right:5px;
            overflow:hidden;
            img {
                width:100%;
                height:auto;
            }
        }
        .user-messages {
            strong {
                padding:0;
                margin:0;
                font-size:15px;
                margin:5px;
            }
            p{
                margin:5px;
                font-size:13px;
            }

        }

    }

}
`


export default function Messages() {
 
    
    const socket = io.connect("http://103.70.166.47:3000", {transports: ['websocket']});
    const baseUrl = 'https://freehostingshop.com/images/profile-pic/';
    const history = useHistory();
    const loginChecks = localStorage.getItem("loginStatus")
    const userInformation = useSelector(state => state.isloggedinUserDet);
    const crntCht = useSelector(state => state.chatinPerson);
    const [msgState, setmsgState] = useState('');
    const [currentchat, setCurrentchat] = useState('');
    const [msgList, setMsgList] = useState([]);
    const [connection, setNewConnection] = useState({
        senderId:'',
        receiverId:'',
        text:''
    }),
    createRoom =(e) => {
        const reciversName = e.target.dataset.userName;
        const sendersName = JSON.parse(userInformation)[0].userName;
        let room = Date.now() + Math.random();
        room = room.toString().replace(".","_");
        socket.emit('createRoom', {room: room, userId:sendersName, withUserId:reciversName});
        
    },
    

    sendMessage = (e) => {
        e.preventDefault();
        setNewConnection({
            senderId: JSON.parse(userInformation)[0].userName,
            room: JSON.parse(userInformation)[0].userName + '-' + currentchat,
            receiverId: currentchat,
            text: msgState,
        });
        
    },
    handleMsgChange = (e) => {
        setmsgState(e.target.value);
    }
    useEffect(() => {
        if(crntCht) {
            Axios.post('https://freehostingshop.com/chatPerson', {
                userName : crntCht
            }).then((response)=>{
           
           if(response.statusText === 'OK') {
            setMsgList((prev)=>[...prev, response.data.details[0]])
           }
        });
        }
    },[crntCht]);
    useEffect(() => {
        
        if(connection.text) {
            socket.emit("send_msg_to_person", connection);
        }
    }, [connection])
    useEffect(() => {

        //socket.on("recived_msg",(userDetails) => {
         //   console.log(userDetails)
            //setMsgList((prev)=> [...prev, userDetails])
        //});
        socket.on('invite', function(data) {
            socket.emit("joinRoom",data)
        });
    }, [socket]);
    
    
  
    
    return (
      <>  
      <MainWrapper>
      <SectionCon>
       <ChatList>
           <div className='Search-box'>
            <input type='search' placeholder='search meassage'/>
           </div>
           <ul className='messages-inbox'>
               {console.log(msgList)}
           {msgList.length>0 && msgList.map((ele,index)=>{
               return (
                <li key={index} onClick={createRoom} data-user-name={ele.userName}>
                    <span className='user-pic'><img src={baseUrl + ele.profilePic}/></span>
                    <span className="user-messages"><strong>{ele.fullName}</strong>
                    <p>{ele.message} </p></span>
                </li>
               )
           })}
             
           </ul>
       </ChatList>
       <ChatContainer>
           <ul>
               <li><p><span className='sender-pic'></span> <span className='sender-message'> It is a long established fact that a reader will </span></p></li>
               <li className='reciver-con'><p><span className='sender-pic'></span> <span className='sender-message'> It is a long established fact that a reader will </span></p></li>
               <li><p><span className='sender-pic'></span> <span className='sender-message'> It is a long established fact that a reader will </span></p></li>
               <li className='reciver-con'><p><span className='sender-pic'></span> <span className='sender-message'> It is a long established fact that a reader will </span></p></li>
               <li><p><span className='sender-pic'></span> <span className='sender-message'> It is a long established fact that a reader will </span></p></li>
               <li className='reciver-con'><p><span className='sender-pic'></span> <span className='sender-message'> It is a long established fact that a reader will </span></p></li>
               <li><p><span className='sender-pic'></span> <span className='sender-message'> It is a long established fact that a reader will </span></p></li>
               <li className='reciver-con'><p><span className='sender-pic'></span> <span className='sender-message'> It is a long established fact that a reader will </span></p></li>
               <li><p><span className='sender-pic'></span> <span className='sender-message'> It is a long established fact that a reader will </span></p></li>
               <li className='reciver-con'><p><span className='sender-pic'></span> <span className='sender-message'> It is a long established fact that a reader will </span></p></li>
           </ul>
           <MessageSender>
               <form onSubmit={sendMessage}>
               <input onChange={handleMsgChange}  value={msgState} placeholder='Type your message here' type='text'/>
               <button  type='submit'>send</button>
               </form>
           </MessageSender>
       </ChatContainer>
       
      </SectionCon>
      </MainWrapper>
    
    
    </>
       
    
    );
  }

  