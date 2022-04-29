import React, { useState, useEffect } from 'react'
import TextTransition, { presets } from "react-text-transition"
import {Container, 
  Button, 
  Text, 
  Affirmations,
  Circle,
  Paragraph} from './LandingPageStyle.js'

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
      5000 // every 3 seconds
    ); 
    return () => clearTimeout(intervalId);
  }, []);



  return (
     <Container> 
      <Text><TextTransition
      text={ TEXTS[index % TEXTS.length] }
      springConfig={ presets.slow }
      />
      </Text>
      <Button>Register for Free</Button>
      <Affirmations>
        <Circle><Paragraph><p>I am not afraid to keep going, and I believe in myself</p></Paragraph></Circle>
        <Circle><Paragraph><p>I have come this far, and I am proud of myself</p></Paragraph></Circle>
        <Circle><Paragraph><p>This is just one moment in my life, and it does not define who I am</p></Paragraph></Circle>
        <Circle><Paragraph><p>This is one isolated moment, not my entire life. Things will get better</p></Paragraph></Circle>
        <Circle><Paragraph><p>These are just thoughts. Only I determine the way I choose to feel</p></Paragraph></Circle>
        <Circle><Paragraph><p>I am loved and appreciated even when it seems like I’m not</p></Paragraph></Circle>
      </Affirmations>
    </Container>
  )
}

export default LandingPage

