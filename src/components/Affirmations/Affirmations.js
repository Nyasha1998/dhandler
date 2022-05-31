import React from 'react'
import {data} from '../../Data/AffirmativeState'
import SingleAffirmation from './SingleAffirmation'
import { Cards } from './AffirmationsStyle'


const MonitoringTips = () => {

    return (
      <>
     
        <Cards>
          {data.map((statement, id) => {
              return (
                  <SingleAffirmation
                    key={id}
                    {...statement}
                  />
              )
          })}
        </Cards>
       </>
    )
}

export default MonitoringTips