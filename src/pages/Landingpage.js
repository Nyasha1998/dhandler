import React from 'react'
import styled, { keyframes } from 'styled-components'

const Landingpage = () => {


  return (
    <Container>
      <Blue>
        <p>Stress Reliever</p>
      <Orange>
        <p>Welcoming</p>
        <Yellow>
          <p>Energizing</p>
          <Green> 
            <p>Inspire Concentration</p>
          </Green>
        </Yellow>
      </Orange>
    </Blue>
    </Container>
  )
}

export default Landingpage

const example = keyframes`
  from {background-color: blue;}
  to {background-color: yellow;}
`
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 20px 20px 20px 20px;
`

const Blue = styled.div`
  display: flex;
  width: 100vh;
  height: 100vh;
  background-color: #2337ED;
  animation-name: ${example};
  animation-duration: 3s;
`

const Orange = styled.div`
  display: flex;
  position: relative;
  width: 75vh;
  height: 75vh;
  background-color: #6BF01E;
  animation-name: ${example};
  animation-duration: 3s;
`
const Yellow = styled.div`
  display: flex;
  position: relative;
  width: 50vh;
  height: 50vh;
  background-color: yellow;
  animation-name: ${example};
  animation-duration: 3s;
`
const Green = styled.div`
  display: flex;
  position: relative;
  width: 25vh;
  height: 25vh;
  background-color: #84BF42;
  animation-name: ${example};
  animation-duration: 3s;
`