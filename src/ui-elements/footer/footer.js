import React from "react";
import styled from "styled-components";
import MainWrapper from "../section/Section";
import '../../fontcss/logoFont.css';
export default function Footer() {
    const Logo = styled.div`
    float:left;
    font-family: 'Blonde Personal Use';
    font-size: 60px;
    background: #ffffff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
const FooterCon = styled.div`
    display:flex;
    width:100%;
    padding:10px 0px;
    background:#000000;
    margin-top:40px;
    .all-right {
        p {
            color:#fff;
            font-family: 'Open Sans', sans-serif;
        }
    }
`

    return (
     <FooterCon >
    <MainWrapper className='footer-override'>
        <Logo>Talk&Type</Logo>
        <div className='all-right'><p>© 2021 Copyright Alliance</p></div>
       
    </MainWrapper>
    </FooterCon>  
    
    
    );
  }

  