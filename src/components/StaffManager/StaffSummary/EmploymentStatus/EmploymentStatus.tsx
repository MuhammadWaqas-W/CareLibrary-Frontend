import { Row, Col } from 'antd'
import React from 'react'

const EmploymentStatus = () => {
    return (
        <>
            <div className="employment-status-card-wrapper">
                <h4 className="fs-20 fw-500 line-height-28 title-color">Employment Status</h4>
                {/* <div className='d-flex justify-between align-items-center'>
                            <div>
                                <span>Billing Type</span>
                                <h5 className='m-0'>Paye</h5>
                            </div>
                            <div>
                                <span className='m-0'>Business Type</span>
                                <h5 className='m-0'>Not Self Employed</h5>
                            </div>
                        </div>
                        <div className='d-flex justify-between align-items-center' style={{ paddingTop: '30px' }}>
                            <div>
                                <span className='m-0'>National Insurance No</span>
                                <h5 className='m-0'>SX1245684</h5>
                            </div>
                            <div style={{ marginRight: '22px' }}>
                                <span className='m-0'>Pay Tax Code</span>
                                <h5 className='m-0'>Ghana</h5>
                            </div>
                        </div>
                        <div style={{ paddingTop: '30px' }}>
                            <span className='m-0'>Nationality</span>
                            <h5 className='m-0'>British</h5>
                        </div> */}
                <Row gutter={[16, 16]} className="m-0">
                    <Col xs={12} className="m-0">
                        <span className="fs-12 fw-400 line-height-18">
                            Billing Type
                        </span>
                        <p className="fs-14 fw-600 line-height-22 m-0">
                            Paye
                        </p>
                    </Col>
                    <Col xs={12} className="m-0">
                        <p className="fs-12 fw-400 line-height-18 m-0">
                            Business Type
                        </p>
                        <p className="fs-14 fw-600 line-height-22 m-0">
                            Not Self Employed
                        </p>
                    </Col>
                    <Col xs={12} className="m-0">
                        <p className="fs-12 fw-400 line-height-18 m-0">
                            National Insurance No
                        </p>
                        <p className="fs-14 fw-600 line-height-22 m-0">
                            SX1245684
                        </p>
                    </Col>
                    <Col xs={12} className="m-0">
                        <p className="fs-12 fw-400 line-height-18 m-0">
                            Pay Tax Code
                        </p>
                        <p className="fs-14 fw-600 line-height-22 m-0">
                            Ghana
                        </p>
                    </Col>
                    <Col xs={12} className="m-0">
                        <p className="fs-12 fw-400 line-height-18 m-0">
                            Nationality
                        </p>
                        <p className="fs-14 fw-600 line-height-22 m-0">
                            British
                        </p>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default EmploymentStatus