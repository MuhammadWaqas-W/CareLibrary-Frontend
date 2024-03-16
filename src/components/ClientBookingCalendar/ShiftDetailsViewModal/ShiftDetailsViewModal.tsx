import React from 'react';
import { Col, Modal, Row } from 'antd';
import './ShiftDetailsViewModal.scss';
import { clientViewShiftDetailsData } from '../../../mock/ClientBookingCalendarData';
import ProfileImg from "../../../assets/images/MockImages/user-profile.png";

const ShiftDetailsViewModal = (props: any) => {
    const { isShiftInformationModal, setIsShiftInformationModal } = props;
    return (
        <>
            <Modal title="Shift Information" open={isShiftInformationModal} onCancel={() => setIsShiftInformationModal(false)} footer={false} className="shift-details-view-wrapper" width={800}>
                <div className='shift-details-view-modal'>
                    <Row gutter={[20, 20]} justify="center">
                        <Col xl={8} lg={8} md={24} sm={24} xs={24}>
                            <div className='profile-information text-center'>
                                <img src={ProfileImg} alt="" />
                                <h2 className='fs-16 fw-500 m-0 title-color'>Mallesh Goriga</h2>
                                <p className='fs-14 fw-400 m-0 light-grey-color'>Health Care Assistant</p>
                            </div>
                        </Col>
                        <Col xl={16} lg={16} md={16} sm={24} xs={24}>
                            {clientViewShiftDetailsData.map((item) => (
                                <div className='shift-info d-flex justify-between'>
                                    <div className='shift-icon-wrap d-flex align-center'>
                                        <div className='shift-item-img d-flex align-center justify-center' style={{ background: item.id === '1' ? '#E7CEE7' : item.id === '2' ? '#AAFFDA' : item.id === '3' ? '#FFD0D1' : item.id === '4' ? '#FFE7AE' : item.id === '5' ? '#FCC7D3' : item.id === '6' ? '#DAEFFF' : '' }}><img src={item.icon} alt="" /></div>
                                        <h2 className='fs-14 fw-600 line-height-18 form-heading-color m-0'>{item.label}</h2>
                                    </div>
                                    <div className='shifts-title'>
                                        <p className='fs-14 fw-400 title-color m-0'>{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </div>
            </Modal>
        </>
    )
}

export default ShiftDetailsViewModal