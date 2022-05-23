import styled from "styled-components";

export const Feedback = styled.div`
  display: flex;
  flex-direction: center;
  font-family: 'Source CodePro', monospace;
  color: #2337ED;
  font-size: 30px;
  margin: 2rem 5rem 2rem 5rem;
  
`

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