import React from 'react';
import { Col, Row } from 'antd';
import './ClientCompletedShift.scss';
import { ClientCompletedShiftData, renderCompletedImg, renderShiftCalculation, renderShiftOff } from '../../../mock/ClientManageShift';
import SelectWrapper from '../../../shared/SelectWrapper/SelectWrapper';

const ClientCompletedShift = () => {
    const handleChange = () => { }
    return (
        <>
            <div className='client-completed-shift-wrapper bg-white'>
                <div className="client-completed-select w-100">
                    <label className="fs-14 fw-600 line-height-18 m-0 label-color">Sign off Status</label>
                    <SelectWrapper
                        size="large"
                        name="manageSelect"
                        placeHolder="All"
                        options={[]}
                        defaultValue="All"
                        onChange={handleChange}
                    />
                </div>
                {ClientCompletedShiftData.map((item: any) => (
                    <div className='client-item-completed bg-white' style={{ marginBottom: "20px" }} key={item.id}>
                        <Row gutter={[20, 20]}>
                            <Col lg={5} md={24} sm={24} xs={24}>
                                <div className='client-content-wrapper d-flex flex-column'>
                                    {Object.keys(item).map((data) => renderCompletedImg[data] && (
                                        <div className='d-flex align-center' style={{ gap: "13px" }}>
                                            <img src={renderCompletedImg[data]} alt="" />
                                            <p className='fs-14 fw-400 line-height-20 m-0'>{item[data]}</p>
                                        </div>
                                    ))}
                                </div>
                            </Col>
                            {/* <Divider type='vertical' style={{height: "100%"}} /> */}
                            <Col lg={19}>
                                <div className="client-calucation bg-white">
                                    <h2 className='fs-16 fw-500 m-0 title-color pb-18'>Shift Calculation</h2>
                                    <Row gutter={[20, 10]} >
                                        {Object.keys(item.shiftCalculation).map((shift: any) => renderShiftCalculation[shift] && (
                                            <Col xl={6} lg={12} md={12} sm={12} xs={24} className='d-flex align-center' style={{ gap: "15px" }}>
                                                <p className='fs-14 fw-400 m-0 title-color'>{renderShiftCalculation[shift]}</p>
                                                <h2 className='fs-14 fw-600 title-color m-0'>{item.shiftCalculation[shift]}</h2>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                                <div className='signed-off bg-white'>
                                    <div className='signed-inner-off d-flex justify-between align-center'>
                                        {Object.keys(item.signOff).map((sign: any, i: number) => renderShiftOff[sign] && (
                                            <Col xl={12} lg={12} md={24} sm={24} xs={24} key={i} style={{paddingLeft: "0"}}>
                                                <div className='d-flex justify-between align-center' style={{ gap: " 10px", flexWrap: "wrap" }}>
                                                    <h2 className='fs-14 fw-600 title-color m-0'>{renderShiftOff[sign]}</h2>
                                                    <span className='fs-14 fw-400 line-height-22 title-color'>Malcolm Y</span>
                                                    <p className='fs-14 fw-400 m-0 title-color'>{item.signOff[sign]}</p>
                                                </div>
                                            </Col>
                                        ))}
                                    </div>
                                    <div className='signed-desc d-flex align-center'>
                                        <h2 className='fs-16 fw-600 line-height-18 title-color m-0'>Modification Reason:</h2>
                                        <p className='fs-14 fw-400 m-0 title-color line-height-22'>{item?.signOff?.modificationReason}</p>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ClientCompletedShift;
