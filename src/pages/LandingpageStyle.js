import styled, { keyframes } from 'styled-components'

export const example = keyframes`
  from {background-color: blue;}
  to {background-color: yellow;}
`
export const Container = styled.div`
  
  position: absolute;
  box-sizing: border-box;
  
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