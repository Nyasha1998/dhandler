import React from 'react'
import { negativeFeedbackMessage } from '../../Data/MonitoringData' 
import { AiTwotonePhone } from "react-icons/ai";

import { Container,  CallIcon, FeedbackContainer } from './FeedbackStyle'

const NegativeFeedback = () => {
  return (
    <Container>
      <FeedbackContainer>
          {negativeFeedbackMessage}
          <CallIcon>{AiTwotonePhone}</CallIcon> 
      </FeedbackContainer>
    </Container>
  )
}

export default NegativeFeedback