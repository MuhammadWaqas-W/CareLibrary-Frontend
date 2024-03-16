import React from 'react';

const ShiftCards = ({card}:any) => {
    return (
        <>
            <div className="client-shift-card bg-white">
                <h1 className='title fs-20 fw-500 white-color m-0' style={{backgroundColor: card.title === 'Upcoming Shifts' ? '#65CDF0' : card.title === 'Available Shifts' ? '#8D6AB1' : card.title === 'Last Shift Details' ? '#2BC155' : card.title === 'Canceled Shifts' ? '#EE2E7E' : ''}}>{card?.title}</h1>
                <div className="card-content text-center">
                    <h2 className="card-heading fs-20 fw-500 align-center">{card?.heading}</h2>
                    <div className="card-details">
                        {card?.details.map((item: any) => (
                            <div className="item d-flex align-center">
                                <img src={item?.icon} alt="" />
                                <p>{item?.text}</p>
                            </div>
                        ))}
                        {!card?.checkStatus ? (
                            <button className="btn white-color">More Details</button>
                        ) : (
                            <div className="check-status d-flex justify-between">
                                <div>
                                    <p>Check-In</p>
                                    <h2 className="check-in fs-20 fw-500 m-0">{card?.checkStatus?.checkIn}</h2>
                                </div>
                                <div>
                                    <p>Check-Out</p>
                                    <h2 className="check-out fs-20 fw-500 m-0">{card?.checkStatus?.checkOut}</h2>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShiftCards