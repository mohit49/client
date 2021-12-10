import styled  from "styled-components";
const ButtonFill = styled.button`
border-radius:30px;
outline:none;
border:none;
font-family: 'Open Sans', sans-serif;
padding:10px 30px;
font-size:18px;
background: #8854d0;
color:#ffffff;
cursor:pointer;
`
const ButtonOutline = styled.button`
border-radius:30px;
outline:none;
border:none;
padding:9px 20px;
font-size:18px;
background:none;
border: 2px solid #8854d0;
font-family: 'Open Sans', sans-serif;
color:#8854d0;
cursor:pointer;
&:hover {
    color:#ffffff;
    background:#8854d0;
  }
`

export  {ButtonFill, ButtonOutline}
