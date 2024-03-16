import React from 'react';
import { recentReviewsData } from '../../../../mock/ClientDashboardData';

const RecentReviews = () => {
   
    return (
        <>
            <div className='client-recent-reviews-wrappper bg-white'>
                <h2 className='fs-20 fw-500 line-height-28 form-heading-color m-0'>Recent Reviews</h2>
                <div className='recent-reviews-content'>
                    {recentReviewsData.map((item: any) => (
                        <div className='recent-reviews-items d-flex align-center' key={item.id}>
                            <img src={item.img} alt="" />
                            <div className='recent-details'>
                                <h2 className='m-0 title-color fs-12 fw-400 line-height-18'>{item.title}</h2>
                                <p className='m-0 fs-10 fw-400 line-height-16 light-grey-color'>{item.timeZone}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default RecentReviews