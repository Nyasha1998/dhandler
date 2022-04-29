import styled, { keyframes } from 'styled-components'

export const example = keyframes`
  from {background-color: blue;}
  to {background-color: yellow;}
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
   
`
export const Button = styled.div`
  margin-top: 50px;
  font-family: 'Orbitron', sans-serif;
  font-size: 30px;
  width: 20rem;
  margin-left: 695px;
  border-style: solid;
  border-radius: 20px;
  padding: 5px 3px 5px 7px;
`

export const Text = styled.div`
  margin: 10rem 5rem 1rem 5rem;
  display: flex;
  justify-content: center;
  font-size: 40px;
  font-family: 'Permanent Marker', cursive;
`

export const Affirmations = styled.div`
  font-family: 'Source CodePro', monospace;
  margin: 2rem 10rem 2rem 20rem;
  display: grid;  
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  grid-row-gap: 2rem;
`


export const Circle = styled.div`
  width: 200px;
  height: 200px;
  background-color: #2337ED;
  border-radius: 100px;
  margin: 25px 5px 10px 15pxs;
`
export const Paragraph = styled.p`
  color: #84BF42;
  display: flex;
  align-items: center;
  margin-top: 60px;
  margin-left: 20px;
  font-weight: bold;
 
`

export const Blue = styled.div`
  display: flex;
  width: 100vh;
  height: 100vh;
  background-color: #2337ED;
  animation-name: ${example};
  animation-duration: 3s;
`

export const Orange = styled.div`
  display: flex;
  position: relative;
  width: 75vh;
  
  margin: 20px 20px 20px 20px;
  background-color: #6BF01E;
  animation-name: ${example};
  animation-duration: 3s;
`
export const Yellow = styled.div`
  display: flex;
  position: relative;
  width: 50vh;
 
  margin: 20px 20px 20px 20px;
  background-color: yellow;
  animation-name: ${example};
  animation-duration: 3s;
`
export const Green = styled.div`
  display: flex;
  position: relative;
  width: 25vh;
  
  margin: 20px 20px 20px 20px;
  background-color: #84BF42;
  animation-name: ${example};
  animation-duration: 3s;
`