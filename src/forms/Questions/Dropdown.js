import React from 'react'
import {
    DropdownWrapper,
    StyledSelect,
    StyledOption,
    StyledLabel,
    StyledButton,
  } from './DropdownStyle'

export const Dropdown = (props) => {
  return (
    <DropdownWrapper action={props.action}>
      <StyledLabel htmlFor="score">
        {props.formLabel1}
      </StyledLabel>
      <StyledSelect id="score" name="score">
        {props.children}
      </StyledSelect>
      <StyledLabel htmlFor="score">
        {props.formLabel2}
      </StyledLabel>
      <StyledSelect id="score2" name="score">
        {props.children}
      </StyledSelect>
      <StyledLabel htmlFor="score">
        {props.formLabel3}
      </StyledLabel>
      <StyledSelect id="score3" name="score">
        {props.children}
      </StyledSelect>
      <StyledLabel htmlFor="score">
        {props.formLabel4}
      </StyledLabel>
      <StyledSelect id="score3" name="score">
        {props.children}
      </StyledSelect>
      <StyledLabel htmlFor="score">
        {props.formLabel5}
      </StyledLabel>
      <StyledSelect id="score4" name="score">
        {props.children}
      </StyledSelect>
      <StyledLabel htmlFor="score">
        {props.formLabel6}
      </StyledLabel>
      <StyledSelect id="score5" name="score">
        {props.children}
      </StyledSelect>
      <StyledLabel htmlFor="score">
        {props.formLabel7}
      </StyledLabel>
      <StyledSelect id="score6" name="score">
        {props.children}
      </StyledSelect>
      <StyledButton type="submit" value={props.buttonText} />
    </DropdownWrapper>
  )
}

export const Option = (props) => {
    return (
        <StyledOption selected={props.selected}>
         {props.value}
        </StyledOption>
    );
}