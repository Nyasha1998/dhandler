import styled, { keyframes } from 'styled-components'

export const colors = keyframes`
  0% {background-color: #ffffff;}
  25% {background-color: yellow;}
  50% {background-color:  #6BF01E;}
  75% {background-color: green;}
  100% {background-color: #2337ED;}
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Button = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  font-family: 'Orbitron', sans-serif;
  font-size: 30px;
  width: 20rem;
  margin-left: 695px;
  border-style: solid;
  border-radius: 20px;
  padding: 5px 3px 5px 7px;
  color: #84BF42;
  background-color: #2337ED;
`

export const Text = styled.div`
  margin: 5rem 5rem 1rem 5rem;
  display: flex;
  justify-content: center;
  font-size: 40px;
  font-family: 'Permanent Marker', cursive;
  color: #84BF42;
  text-shadow: #2337ED 0.2px 2px 3px;
`

export const Affirmations = styled.div`
  width: 100vh;
  font-family: 'Source CodePro', monospace;
  margin: 2rem 10rem 2rem 23rem;
  display: grid;  
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
`

export const AnnimationBackground = styled.div`
  width: 100%;
  animation: ${colors} 10s linear infinite;
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

