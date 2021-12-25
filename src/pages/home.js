import React from "react";

import MainWrapper from "../ui-elements/section/Section";
import {Heading} from "../ui-elements/page-heading/page-heading";
import VideoChatBox from "../component/Videochatbox/VideoChatBox";
import NearbyPeople from "../component/NearByPeople/NearByPeople";
import { useSelector } from "react-redux";
//import SelectionBox from "../component/SelectionBox/SelectionBox";
// <SelectionBox></SelectionBox>
export default function HomePage() {
  const loginCheck = useSelector(state => state.islogged);
    return (
      <>  
    <MainWrapper className='containerWrapper'>
      <Heading>Start Talking with Strangers Now just click on below button</Heading>
    
      </MainWrapper>
    <MainWrapper>
    <VideoChatBox></VideoChatBox>
   
    </MainWrapper>
    {loginCheck && <NearbyPeople></NearbyPeople> }
    
    </>
       
    
    );
  }