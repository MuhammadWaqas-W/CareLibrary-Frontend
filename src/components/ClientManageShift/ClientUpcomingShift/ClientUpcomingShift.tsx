import { Col, Rate, Row } from 'antd';
import React from 'react';
import { ClientUpcomingShiftData, renderImg } from '../../../mock/ClientManageShift';
import './ClientUpcomingShift.scss';

const ClientUpcomingShift = () => {
    return (
        <>
            <div className='client-upcoming-shift-wrapper bg-white'>
                <Row gutter={[20, 20]}>
                    {ClientUpcomingShiftData.map((item: any) => (
                        <Col xl={6} lg={8} md={12} sm={12} xs={24} key={item.id}>
                            <div className='upcoming-shift-wrapper bg-white'>
                                <div className='shift-img d-flex align-center'>
                                    <img src={item.img} alt="" />
                                    <div>
                                        <h2 className='fs-16 fw-500 m-0 form-heading-color'>{item.shiftTitle}</h2>
                                        <p className='fs-12 fw-400 m-0 title-color'>{item.shiftType}</p>
                                        <Rate defaultValue={item.rating} allowHalf style={{ color: "#FABF35" }} />
                                    </div>
                                </div>
                                <div className='upcoming-content-wrap d-flex flex-column'>
                                    {Object.keys(item).map((data: any) => renderImg[data] && (
                                        <div className='d-flex align-center' style={{ gap: "15px" }}>
                                            <img src={renderImg[data]} alt="" />
                                            {renderImg[data] && <p className="m-0">{item[data]}</p>}
                                        </div>
                                    ))}
                                </div>
                                <div className="upcoming-btn">
                                    <button type='button' className='white-color fs-16 fw-600 line-height-20'>Cancel Booking</button>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}

export default ClientUpcomingShift