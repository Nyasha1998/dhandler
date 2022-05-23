import React from 'react'
import { SingleCard } from './SingleTipStyle'

const SingleTip = ({ tip }) => {
    return (
        <SingleCard>
          <h1>{tip}</h1>   
        </SingleCard>
    )
}

export default SingleTip