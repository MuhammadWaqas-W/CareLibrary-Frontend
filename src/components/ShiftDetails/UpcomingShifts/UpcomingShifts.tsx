import { Layout, Row, Col, Card, Rate, Space, Modal, Form, Input, InputNumber } from 'antd';
import React, { useState } from 'react'
import { availableShiftCardData } from '../../../mock/ShiftDetailsMockData/ShiftDetailsMock';
import '../AvailableShifts/AvailableShiftsTab/AvailableShiftsTab.scss'
import { notification } from 'antd';
import DeleteIcon from "../../../assets/icons/ShiftDetails/DateIcon.svg"

const UpcomingShifts = () => {
  const [openCancelModal, setopenCancelModal] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: 'Shift Accepted',
      description: "",
      className: 'custom-class',
      style: {
        width: 229,
        height: 56,
        background: '#E5E5E5',
        border: '1px solid #FF4D4F',
        borderRadius: '4px',
        color: 'white',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      icon: <img src={DeleteIcon} width="36px" height="36px" alt="Success Icon" style={{ marginTop: "-5px", marginLeft: "-16px" }} />,
    });
  };

  // cancel Moodal
  const showAcceptModal = () => {
    setopenCancelModal(true);
  };

  const handleOkCancelModal = () => {
    setopenCancelModal(false);
  };

  const handleCancelModal = () => {
    setopenCancelModal(false);
  }
  // form
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };


  return (
    <Layout className='wrap-shift-details-card '>
      <div className='wrap-upcoming-shift-cards'>
        <Row gutter={[23, 23]} style={{ paddingTop: "15px" }}>
          {availableShiftCardData.map((shiftData: any, id) => {
            return (
              <Col className="gutter-row" xs={24} sm={24} md={24} lg={6} xl={6} key={id} >
                <div className=''>
                  <Card
                    className='border-radius-10 shift-details-card-style'>
                    <div className='d-flex justify-between'>
                      <img src={shiftData.homeIcon} alt="HomeIcon" width={28} height={28} className="shift-img" />
                      <span className='fw-500 fs-20 shift-title'>{shiftData.title}
                        <span className='rating-star'><Rate disabled defaultValue={shiftData.rateStar} style={{ fontSize: "15px", marginLeft: "5px" }} /></span>

                      </span>
                    </div>
                    <div className='wrap-shift-card-info '>
                      <div className=' d-flex shift-card-content align-center' >
                        <img src={shiftData.locationIcon} alt="HomeIcon" width={18} height={24} />
                        <span className='fw-400 fs-14 line-height-22 '>{shiftData.address}</span>
                      </div>
                      <div className=' d-flex  shift-card-content'>
                        <img src={shiftData.dateIcon} alt="HomeIcon" width={21} height={21} />
                        <span className='fw-400 fs-14 line-height-22 '>{shiftData.date}</span>
                      </div>
                      <div className=' d-flex  shift-card-content'>
                        <img src={shiftData.timeIcon} alt="HomeIcon" width={16} height={16} />
                        <span className='fw-400 fs-14 line-height-22 '>{shiftData.time}</span>
                      </div>
                      <div className=' d-flex  shift-card-content'>
                        <img src={shiftData.weatherIcon} alt="HomeIcon" width={24} height={24} />
                        <span className='fw-400 fs-14 line-height-22 '> {shiftData.weather}</span>
                      </div>
                      <div className=' d-flex   shift-card-content'>
                        <img src={shiftData.euroIcon} alt="HomeIcon" width={15.32} height={21} />
                        <span dangerouslySetInnerHTML={{ __html: shiftData?.shiftRate }}>
                        </span>
                      </div>
                      <Space className='wrap-shift-card-btn'>
                        <button className='fw-600 fs-16 white-color cursor-pointer shift-details-card-cancel-btn' onClick={showAcceptModal}>Cancel Shift</button>

                      </Space>
                    </div>
                  </Card>
                </div>

              </Col>
            )
          })}

        </Row>
      </div>
      <Modal centered className='wrap-shift-details-accept-modal'
        title={<span className='fw-600 fs-18 line-height-21 black-color'> Cancellation Reason</span>}
        open={openCancelModal}
        onOk={handleOkCancelModal}
        onCancel={handleCancelModal}
        width={868}
        footer={[
          <>

          </>
        ]}
      >
        <div className='wrap-shift-detail-accept-modal-content d-flex justify-between flex-column '>
          <div className=' '>
            <Form layout='vertical'
              onFinish={onFinish}
            >

              <Form.Item className='wrap-upcoming-shift-detail-cancel-modal' name="username" label={<span className='fw-500 fs-15 line-height-28'>Specify reason for Cancelling Shift</span>} rules={[{ required: true, message: 'Required Feild' }]}>
                <Input.TextArea className='upcoming-shift-detail-cancel-modal-input' placeholder='Staff are not Avaliable' />
              </Form.Item>
              <Row gutter={[8, 8]} className=' wrap-shift-accept-btn'>
                <Col xl={4}>
                  <button className='fw-600 fs-16 line-height-22 white-color shift-detail-accept-btn-no cursor-pointer ' onClick={handleCancelModal}>Close</button>
                </Col>
                <Col xl={6}>
                  <button className='fw-600 fs-16 line-height-22 white-color btn-secondary white-color cursor-pointer' onClick={handleOkCancelModal} type="submit">Cancel Shift</button>
                </Col>
              </Row>

            </Form>
          </div>
        </div>
      </Modal>
    </Layout>

  )
}

export default UpcomingShifts