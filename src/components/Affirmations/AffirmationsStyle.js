import styled from 'styled-components'

export const Cards = styled.div`  
 margin: 90px 40px 10px 40px;
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 grid-template-rows: 1fr 1fr 1fr;
 grid-column-gap: 3rem;
 grid-row-gap: 3rem;
 
 @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    
 }
 @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
 }
 `;