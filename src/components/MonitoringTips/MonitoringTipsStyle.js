import styled from "styled-components";

export const Feedback = styled.div`
  display: flex;
  flex-direction: center;
  font-family: 'Montserrat', sans-serif;
  color: #00888B;
  font-size: 30px;
  margin: 2rem 5rem 2rem 5rem;
  
`;

export const CallIcon = styled.div`
  
  display: flex;
  margin-top: 2.3rem;
  margin-left: 0;
  cursor: pointer;
  font-size: 2rem;
  color: #00888B;
`;

export const FeedbackContainer = styled.div`
  display: flex;
  justify-content: no-space;
  flex-direction: row;
  font-family: 'Montserrat', sans-serif;
  flex-direction: start;
`;

export const Cards = styled.div`  
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 grid-template-row: 1fr 1fr;
 
 @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-row: 1fr 1fr 1fr;
    
 }
 @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-row: 1fr;
   
 }
 `;