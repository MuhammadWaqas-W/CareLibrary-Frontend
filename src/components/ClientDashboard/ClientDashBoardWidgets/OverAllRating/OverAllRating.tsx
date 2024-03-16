import { Rate } from 'antd'
import React from 'react'
import RatingGraph from './RatingGraph/RatingGraph'

const OverAllRating = () => {
    return (
        <>
            <div className='client-graph-rating-wrapper bg-white'>
                <h2 className='fs-20 fw-500 m-0 title-color'>Overall Rating</h2>
                <RatingGraph />
                <div className='client-graph-rating text-center'>
                    <Rate allowHalf defaultValue={2.5} style={{color: "#FABF35"}} />
                </div>
            </div>
        </>
    )
}

export default OverAllRating