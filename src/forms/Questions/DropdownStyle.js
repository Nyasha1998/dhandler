import styled from "styled-components";

export const Container = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  padding-top: 2rem;
  align-items: center;
  background-color: #00888B;
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;
`;

export const DropdownWrapper = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 1rem 1rem 1rem;
  
`;
export const StyledSelect = styled.select`
  max-width: 50%;
  height: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
`;

export const StyledOption = styled.option`
  color: ${(props) => (props.selected ? "lightgrey" : "grey")};
`;

export const StyledLabel = styled.label`
  margin-bottom: 1rem;
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;  
`;

export const StyledButton = styled.input`
  max-width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  border: solid 2px #00888B;
  padding: 0.5rem;
  border-radius: 1rem;
`;

