import styled, { keyframes } from 'styled-components'

export const colors = keyframes`
  0% {background-color: #ffffff;}
  25% {background-color: yellow;}
  50% {background-color:  #6BF01E;}
  75% {background-color: green;}
  100% {background-color: #00888B;}
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Button = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  width: 17rem;
  display: flex;
  align-items: center;
  margin-left: 10rem;
  border-style: solid;
  border-radius: 20px;

  color: #ffffff;
  background-color:  #00888B;
  cursor: pointer;
  
  &:hover {
    color: blue;
    transition: 200ms ease-in;
}

@media screen and (max-width: 768px) {
  font-size: 20px;
  width: 12rem;
}

  
`

export const Text = styled.div`
  margin: 5rem 5rem 1rem 5rem;
  display: flex;
  justify-content: center;
  font-size: 40px;
  font-family: 'Montserrat', sans-serif;
  color: #00888B;
  text-shadow: #ffffff 0.2px 2px 3px;

  @media-screen and (max-width: 768px) {
    font-size: 30px;
  }
`


export const AnnimationBackground = styled.div`
  width: 100%;
  animation: ${colors} 10s linear infinite;
`;


export const Upper = styled.div`
  display: flex;
  flex-direction: column;

`;