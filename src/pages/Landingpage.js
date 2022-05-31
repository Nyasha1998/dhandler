import React, { useState, useEffect } from 'react'
import TextTransition, { presets } from "react-text-transition"
import Affirmations from '../components/Affirmations/Affirmations'
import Signup from '../forms/signup/Signup'
import {Container, 
  Button, 
  Text,
  Upper,
  AnnimationBackground,
  } from './LandingPageStyle.js'

const TEXTS = [
  "University students are mostly affected by depression",
  "This has a major effect on their academic excellence",
  "Whilst depression affects student’s performance",
  "It also claims lives of the students",
  "As it causes suicidal thoughts among them",
  "It is unlikely that",
  "This area of mental health is under-resourced",
  "And the treatment cannot", 
  "be afforded and accessed by everyone",
  "But don't worry we are here to help you",
   "just click on the register button."  
]

const LandingPage = () => {

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );  
    return () => clearTimeout(intervalId);
  }, []);



  return (
     <Container> 
      <Upper>
      <Text><TextTransition
      text={ TEXTS[index % TEXTS.length] }
      springConfig={ presets.slow }
      />
      </Text>
      <Button onClick={Signup}>Register for Free</Button>
      </Upper>
      
      <AnnimationBackground>
      <Affirmations />
      </AnnimationBackground>
    </Container>
  )
}

export default LandingPage

