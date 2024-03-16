import { Layout,Row,Col,Card,Rate ,Space,Modal} from 'antd';
import React , { useState } from 'react'
import {availableShiftCardData} from '../../../../mock/ShiftDetailsMockData/ShiftDetailsMock';
import './AvailableShiftsTab.scss';
import {modalInfodata} from'../../../../mock/ShiftDetailsMockData/ShiftDetailsMock';
import ExclamationIcon from '../../../../assets/icons/ShiftDetails/ExclamationIcon.svg';

const AvailableShiftsTab= () => {
  const [openInfoModal, setopenInfoModal] = useState(false);
  const [openAcceptModal, setopenAcceptModal] = useState(false);

  const showModal = () => {
    setopenInfoModal(true);
  };

  const handleOk = () => {
    setopenInfoModal(false);
  };

  const handleCancel = () => {
    setopenInfoModal(false);
  };

  // Accept Moodal
  const showAcceptModal = () => {
    setopenAcceptModal(true);
  };

  const handleOkAcceptModal = () => {
    setopenAcceptModal(false);
  };

  const handleCancelAcceptModal = () => {
    setopenAcceptModal(false);
  };
  return (
    <Layout className='wrap-shift-details-card'>
    <Row  gutter={[23, 23]} style={{ paddingTop: "15px" }}>        
            {availableShiftCardData.map((shiftData: any, id) => {
                return (
                  <Col className="gutter-row" xs={24} sm={24} md={12} lg={6} xl={6} key={id} >
                   <div className=''>
                    <Card
                    className='border-radius-10 shift-details-card-style'>
                    <Row gutter={[6,6]} className='d-flex justify-between shift-details-available-shift-top-img-text'>
                      <Col xl={24} sm={24} xs={24}>
                      <img src={shiftData.homeIcon} alt="HomeIcon" width={28} height={28} className="shift-img"/>
                      <span className='fw-500 fs-20 shift-title'>{shiftData.title} </span>
                      </Col>
                      <Col xl={24} sm={24} xs={24}>
                      <span className='rating-star'><Rate disabled defaultValue={shiftData.rateStar} style={{fontSize:"15px",marginLeft:"35px"}}/></span>
                      </Col>
                      
                    </Row>
                    <div className='wrap-shift-card-info '>
                    <div className=' d-flex shift-card-content align-center' >
                    <img src={shiftData.locationIcon} alt="HomeIcon" width={18} height={24}/>
                    <span className='fw-400 fs-14 line-height-22 '>{shiftData.address}</span>
                    </div>
                    <div  className=' d-flex  shift-card-content'>
                    <img src={shiftData.dateIcon} alt="HomeIcon" width={21} height={21}/>
                    <span  className='fw-400 fs-14 line-height-22 '>{shiftData.date}</span>
                    </div>
                    <div  className=' d-flex  shift-card-content'>
                    <img src={shiftData.timeIcon} alt="HomeIcon" width={16} height={16}/>
                    <span  className='fw-400 fs-14 line-height-22 '>{shiftData.time}</span>
                    </div>
                    <div  className=' d-flex  shift-card-content'>
                    <img src={shiftData.weatherIcon} alt="HomeIcon" width={24} height={24} />
                    <span  className='fw-400 fs-14 line-height-22 '> {shiftData.weather}</span>
                    </div>
                    <div  className=' d-flex   shift-card-content'>
                    <img src={shiftData.euroIcon} alt="HomeIcon" width={15.32} height={21}/>
                    <span dangerouslySetInnerHTML={{ __html: shiftData?.shiftRate }}>
                      </span>
                    </div>
                    <Space className='wrap-shift-card-btn'>
                     
                      <button className='fw-600 fs-16 white-color cursor-pointer shift-details-card-info-btn' onClick={showModal}>More Info</button>
                       <button className='fw-600 fs-16 white-color cursor-pointer shift-details-card-accept-btn' onClick={showAcceptModal}>Accept</button>
                     
                      </Space>
                    </div>
                  </Card>
                  </div>
                 
             </Col>
                    )
            })}
            </Row>
            {/*  */}
        <div className='wrapper-shift-detail-info-modal'>
        <Modal centered className='wrap-shift-detail-info-modal'
        open={openInfoModal}
        title={<span className='fw-500 fs-24 line-height-32 black-color'> More Information</span>}
        onOk={handleOk}
        onCancel={handleCancel}
        width={784}
      
        footer={[
          
        ]}
      >
       {modalInfodata.map((item:any,id)=>{
        return(
          <div key={id} className="wrap-shift-detail-info-modal-content">
          <Row gutter={[23, 23]} >
          <Col  className='modal-img-and-title d-flex align-items-center'>
          <span><img src={item.homeIcon} alt="HomeIcon" width="32px" height="32px" className=""/></span>
       
          <span className='fw-600 fs-24 line-height-32 form-heading-color shift-info-modal-title'>{item.title}</span>
        
          </Col>
          <div className='shift-details-modal-content'>
          <Row gutter={[23, 23]} className='d-flex align-items-center  shift-details-modal-content-text-style' >
             <Col xl={6} className='fw-600 fs-16 line-height-22 form-heading-color'>Address:</Col>
             <Col xl={18} className='fw-400 title-color fs-14 line-height-22'>{item.address}</Col>
          </Row>
          <Row gutter={[16, 16]} className='d-flex align-items-center shift-details-modal-content-text-style'>
             <Col xl={6} className='fw-600 fs-16 line-height-22 form-heading-color '>Total Shift Hours:</Col>
             <Col xl={16} className='fw-400 title-color fs-14 line-height-22'>{item.totalShiftHours}</Col>
          </Row>
          <Row gutter={[16, 16]} className='d-flex align-items-center shift-details-modal-content-text-style'>
             <Col xl={6} className='fw-600 fs-16 line-height-22 form-heading-color'>Date:</Col>
             <Col xl={16}className='fw-400 title-color fs-14 line-height-22'>{item.date}</Col>
          </Row>
          <Row gutter={[16, 16]} className='d-flex align-items-center shift-details-modal-content-text-style'>
             <Col xl={6} className='fw-600 fs-16 line-height-22 form-heading-color'>Shift Timing:</Col>
             <Col xl={16} className='fw-400 title-color fs-14 line-height-22'>{item.shiftTiming}</Col>
          </Row>
          <Row gutter={[16, 16]} className='d-flex align-items-center shift-details-modal-content-text-style'>
             <Col xl={6} className='fw-600 fs-16 line-height-22 form-heading-color'>Total Shift Pay:</Col>
             <Col xl={16} className='fw-400 title-color fs-14 line-height-22'>{item.totalShiftPay}</Col>
          </Row>
          <Row gutter={[16, 16]} className='d-flex align-items-center shift-details-modal-content-text-style'>
             <Col xl={6} className='fw-600 fs-16 line-height-22 form-heading-color'>Department:</Col>
             <Col xl={16} className='fw-400 title-color fs-14 line-height-22'>{item.department}</Col>
          </Row>
          <Row gutter={[16, 16]} className='d-flex align-items-center shift-details-modal-content-text-style'>
             <Col xl={6} className='fw-600 fs-16 line-height-22 form-heading-color'>Distance from you:</Col>
             <Col xl={16}className='fw-400 title-color fs-14 line-height-22'>{item.distance}</Col>
          </Row>
            <Col xl={24}>
            <p  className='fw-400 fs-12 title-color line-height-22 shift-detail-bottom-paragraph'>About: Care homes provide accommodation and personal care for people who need extra support in their daily lives.
               Personal care might include help with eating, washing, dressing, going to the toilet or taking medication</p>
          </Col>
          </div>
          </Row>
          </div>
        )
       })}
       
      </Modal>
      {/* Accept Modal */}
      <Modal centered className='wrap-shift-details-accept-modal'
        open={openAcceptModal}
        onOk={handleOkAcceptModal}
        onCancel={handleCancelAcceptModal}
        width={500}
        footer={[
          <>
          
          </>
        ]}
      >
            <div className='wrap-shift-detail-accept-modal-content d-flex justify-between flex-column m-auto'>
              <div className='m-auto shift-detail-accept-modal-img'> <img src={ExclamationIcon} alt="ExclamationIcon" width="99px" height="100px"/></div>
              <span className='fw-500 fs-30 line-height-40 m-auto shift-detail-accept-modal-text'>
               Do you want to accept <br/> this  shift with transport?
              </span>
              <Space className='m-auto wrap-shift-accept-btn'>
            <button className='fw-600 fs-14 btn-secondary white-color' onClick={handleOkAcceptModal}>Yes</button>
            <button className='fw-600 fs-14 shift-detail-accept-btn-no white-color cursor-pointer' onClick={handleCancelAcceptModal}>No</button>
          </Space>
            </div>
      </Modal>
      </div>
    </Layout>
  )
}

export default AvailableShiftsTab