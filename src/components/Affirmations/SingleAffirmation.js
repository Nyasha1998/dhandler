import React from 'react'
import { SingleCard } from './SingleAffirmationStyle'

const SingleTip = ({ statement }) => {
    return (
        <SingleCard>
          <p>{statement}</p>   
        </SingleCard>
    )
}

export default SingleTip