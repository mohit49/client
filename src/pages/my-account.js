import React, {useState,useEffect} from "react";
import ImageUploading from 'react-images-uploading';
import MainWrapper from "../ui-elements/section/Section";
import {Heading2} from "../ui-elements/page-heading/page-heading";
import Axios from "axios";
import { useHistory } from "react-router";
import Resizer from "react-image-file-resizer";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ButtonOutline,ButtonFill } from "../ui-elements/button/site-button";
import { userdet } from "../actions";
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
      .error-hide {
        color:red;
        width:100%;
        display:inline-block;
        margin-top:10px;
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
      &.saveProfile {
        margin-left:20px;
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
  .badge-image {
    font-size:13px;
    padding:5px;
    margin-bottom:10px;
    width:100%;
    display:inline-block;
    color:#ffffff;
    background:#8854d0;
    border-radius:20px;
  }
  button {
    margin-top:10px;
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

export default function MyAccount() {
  const dispatch = useDispatch();
  const [lodingState, setLodingState] = useState(false);
  const history = useHistory();
  const [uploadBtn, setUploadBtn] = useState(false);  
  const [imageSaved, setImageSaved] = useState(false);
  const myaccountInfo = useSelector(state => state.isloggedinUserDet);
  const [editMode, setEditMode] = useState(false),
        baseUrl = 'https://freehostingshop.com/images/profile-pic/',
       
        [images, setImages] = useState([]),
        maxNumber = 1,
        userEmail = myaccountInfo ? JSON.parse(myaccountInfo)[0].email : '',
        fullName = myaccountInfo ? JSON.parse(myaccountInfo)[0].fullName : '',
        [errors, setErrors] = useState({
          email : '',
          fullName :  '',
        }),
        [changedDetails , setsetChangeDetails] = useState({
          email :'',
          fullName:'' 
        }),
        triggerChange = (e)=>{
          const name = e.target.name;
          const value = e.target.value;

          if (e.target.name == 'fullName') {
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
          setsetChangeDetails({ ...changedDetails, [name]: value });
          console.log(changedDetails);
        },
        resizeFile = (file) => 
        
        new Promise((resolve) => {
          
          Resizer.imageFileResizer(
            file,
            300,
            300,
            "JPEG",
            100,
            0,
            (uri) => {
              resolve(uri);
            },
            "file"
          );
        }),
        onChangeImage = async(imageList, addUpdateIndex) => {
          
          // data for submit
          try {
          const file = imageList[0].file;
          const image = await resizeFile(file);
          imageList[0].file = image;
          
          setImages(imageList);
        } catch (err) {
          console.log(err);
        }
        },

        profileImageSubmit = () => {
          setLodingState(!lodingState);
          const userName = myaccountInfo ? JSON.parse(myaccountInfo)[0].userName :'';
          const formData = new FormData();

          
          formData.append('myImage',images[0].file);
          formData.append('userName', userName);
          const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
          Axios.post('https://freehostingshop.com/upload', formData , config).then((response)=>{
           
           if(response.statusText === 'OK') {
            
            localStorage.setItem("userImg" ,response.data.filename);
            setLodingState(lodingState);
            setImageSaved(!imageSaved)
            setImages('');
            setUploadBtn(uploadBtn);
          
           }
        });
          
        },
        saveInformation = () => {
          if(!errors.fullName && !errors.email) {
            
            Axios.post('https://freehostingshop.com/informationUpdate', {
              userName: myaccountInfo ? JSON.parse(myaccountInfo)[0].userName:'',
              fullName : changedDetails.fullName,
              email: changedDetails.email
          }).then((response)=>{
            if(response.statusText === 'OK') {
              setEditMode(!editMode);
              let inforData = JSON.parse(localStorage.getItem('loginUser'))[0];
             
              if(response.data.json[0].fullName.length > 0) {
                inforData.fullName = response.data.json[0].fullName;
              }
              if(response.data.json[0].email.length > 0) { 
                inforData.email = response.data.json[0].email;
              }

              localStorage.setItem('loginUser', '[' + JSON.stringify(inforData)+ ']');
              dispatch(userdet('[' + JSON.stringify(inforData) + ']'))
              
            }
           });
            
          }
          
        }
       




    
    return (
      <>  
      <MainWrapper>
      <SectionCon>
        <AsideSection>
          <ChatCardUl>
            <ChatCardLi>
              <div className='card-container'>
             {lodingState &&<p> Saving Image</p>}
              <img className='pro-pic' src={images.length > 0 ? images[0]['data_url']: myaccountInfo ? baseUrl+ localStorage.getItem("userImg") :'k'} alt="" width="100" />
              <ImageUploading
        
        value={images}
        onChange={onChangeImage}
        maxNumber='1'
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
                        {imageList.map((image, index) => (
                 
              <div key={index} className="image-item">
             
                <div className="image-item__btn-wrapper">
                  {!imageSaved && <ButtonFill onClick={profileImageSubmit}>Save</ButtonFill>}

                
                </div>
              </div>
            ))}
         
          {!uploadBtn   && <ButtonFill
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
              
            > 
              Upload Image
            </ButtonFill> }
           

          </div>
        )}
      </ImageUploading>
                 
              </div>
            </ChatCardLi>
          </ChatCardUl>
        </AsideSection>
        <AsideWrapper>
 
          <div className='profile-information'>
          <Heading2>Edit Information</Heading2>
            <ul>
              <li><p><strong>User Name :</strong></p><p>{ (myaccountInfo ? JSON.parse( myaccountInfo)[0].userName: '')}</p></li>
              <li>
                <label>Name</label>
                <input name='fullName' defaultValue={fullName} type='text'  onChange={triggerChange}  disabled={!editMode}></input>
                {errors.fullName && (
                <span className="error-hide">Max length more then 3</span>
              )}
              </li>
          
              <li>
                <label>Email</label>
                <input name ='email' defaultValue={userEmail} type='email' onChange={triggerChange} disabled={!editMode}></input>
                {errors.email && (
                <span className="error-hide">Please Enter Correct email example (user@domain.com)</span>
              )}
              </li>
              <li className='edit-profile-link'>
              <span onClick={()=> setEditMode(!editMode)}>{!editMode ? "Edit Profile" :'Cancel' } </span>
            </li>
           {editMode && <li className='edit-profile-link saveProfile'>
              <span onClick={saveInformation}>Save Profile </span>
            </li>}
            </ul>
          </div>
        </AsideWrapper>
        <ChangePassword>
        <Heading2>Change Password</Heading2>
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

  