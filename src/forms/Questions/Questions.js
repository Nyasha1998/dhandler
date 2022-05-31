import React, { useState } from 'react'
import { Dropdown, Option } from './Dropdown';
import { Container } from './DropdownStyle'

const Questions = () => {

  const [optionValue, setOptionValue] = useState("");
  const handleSelect = (e) => {
    console.log(e.target.value);
    setOptionValue(e.target.value);
  };



  return (
    <Container>
       <p>Hie, I would like you to answer the following questions by selecting a number on a scale 0 - 3, please answer with honest so that I may help you : </p>
      <Dropdown
        formLabel1="Do you have moments where you: Could not experience the positive feeling?"
        formLabel2="Do you have moments where you: Could not work up the initiative to do things?"
        formLabel3="Do you have moments where you: Had nothing to look forward to?"
        formLabel4="Do you have moments where you: Felt down-hearted and blue(sad)?"
        formLabel5="Do you have moments where you: Were unable to become enthusiastic (you were less excited about anything)?"
        formLabel6="Do you have moments where you: Felt you weren’t worth much as a person?"
        formLabel7="Do you have moments where you: Felt life was meaningless?"
        buttonText="Send Answers"
        onChange={handleSelect}
        action="/"
      >
        <Option selected value="Select score" />
        <Option value="0" />
        <Option value="1" />
        <Option value="2" />
        <Option value="3" />
      </Dropdown>

    </Container>
  )
}

export default Questions