import React from 'react'
import {data, feedbackMessage, callService} from '../../Data/MonitoringData'
import SingleTip from './SingleTip'
import {Cards, Feedback  } from './MonitoringTipsStyle'


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
       <Feedback>{callService}: icon</Feedback>
      </>
    )
}

export default MonitoringTips