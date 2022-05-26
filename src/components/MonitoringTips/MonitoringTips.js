import React from 'react'
import {data, feedbackMessage, callService} from '../../Data/MonitoringData'
import SingleTip from './SingleTip'
import {Cards, Feedback, CallIcon, FeedbackContainer  } from './MonitoringTipsStyle'
import { AiTwotonePhone } from "react-icons/ai";

const MonitoringTips = () => {

    return (
      <>
       <Feedback>{feedbackMessage}</Feedback>
        <Cards>
          {data.map((tip, id) => {
              return (
                  <SingleTip
                    key={id}
                    {...tip}
                  />
              )
          })}
        </Cards>
        <FeedbackContainer>
        <Feedback>{callService}:</Feedback>
        <CallIcon><AiTwotonePhone/></CallIcon>
        </FeedbackContainer>
       </>
    )
}

export default MonitoringTips