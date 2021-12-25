
  
import React from "react";
import styled from "styled-components";

const SelectionBoxUl = styled.ul`
   
padding:0;
margin:0;
list-style:none;
`
const SelectionBoxLi = styled.li`
float:left;
margin-left:15px;
list-style:none;
`
const SelectBt = styled.select`
font-size:16px;
border-radius:30px;
padding:10px 15px;
`


export default function SelectionBox() {

    return (
        
   
      <SelectionBoxUl>
          <SelectionBoxLi>
            <SelectBt>
                <option>
                    Female
                </option>
                <option>
                    Male
                </option>
            </SelectBt> 
          </SelectionBoxLi>
         
      </SelectionBoxUl>


    
    
    );
  }

  