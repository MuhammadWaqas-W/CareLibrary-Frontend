import { Layout,Card ,Row,Col,Divider } from 'antd'
import React from 'react'
import {cancelShiftData} from '../../../mock/ShiftDetailsMockData/ShiftDetailsMock'

import './CancelledShifts.scss'

const CancelledShifts = () => {


  return (
    <Layout className='wrap-shifts-details-canceled-shift'>
     <Card className='shifts-details-canceled-shift border-radius-10'>
   
    <Row gutter={[23,23]}>
      {cancelShiftData.map((shiftData:any,id)=>{
        return(    
          <Col xl={24} lg={24} md={24} sm={24} xs={24} className="gutter-row " key={id}>
            <Card className='wrap-canceled-shift-card-content  border-radius-10'>
              {/* <Row gutter={[3,3]}>   */}
            <div className='d-flex justify-between main-cancelled-shift-detail-content'>
            <Col xxl={7} xl={7} lg={7} md={9} sm={24} xs={24} className="shift-details-cancel-left-content">
            
            
             
              <div  className='d-flex align-center cancel-shift-img-text'>
                      <img src={shiftData.titleImg} alt="HomeIcon" width="32px" height="32px" className="shift-img"/>
                      <span className='fw-500 fs-20 shift-title title-color cancel-shift-title'>{shiftData.title}
                     </span>
                     </div>
                     
                <div className='shift-cancel-bottom-content'>              
                 <Row gutter={[18,18]} className=' d-flex  align-center shift-cancel-card-content' >
                   <Col xl={3}> <img src={shiftData.weatherImg} alt="HomeIcon" width={18} height={24}/></Col>
                   <Col xl={10 } xs={24}>  <span className='fw-400 fs-14 line-height-22 title-color text-left'>{shiftData.weather}</span></Col>
                    </Row> 
                    <Row gutter={[18,18]}  className=' d-flex align-center shift-cancel-card-content'>
                    <Col xl={3}>  <img src={shiftData.dateImg} alt="HomeIcon" width={21} height={21}/></Col>
                    <Col xl={20} xs={24}>  <span  className='fw-400 fs-14 line-height-22 title-color text-left'>{shiftData.date}</span></Col>
                    </Row>
                    <Row gutter={[18,18]}  className=' d-flex  align-center shift-cancel-card-content'>
                    <Col xl={3}>   <img src={shiftData.shiftRateImg} alt="HomeIcon" width={16} height={16}/></Col>
                    <Col xl={18} xs={24}>   <span  className='fw-400 fs-14 line-height-22 title-color text-left' dangerouslySetInnerHTML={{ __html: shiftData?.shiftRate }}>
                      </span>
                      </Col>
                      </Row> 
                    
                    </div>
                   
              </Col>
            <Col className='shift-line' xl={1}> <Divider type="vertical" className='verical-line' style={{height:"210px",border:"1px solid  #D9DBE9",marginLeft:"20px"}}/></Col> 
              <Col xxl={16} xl={16} lg={14} md={14} sm={24}  xs={24}>
                
                <div className='m-auto'>
              <Card className='cancel-shift-details-content'>
               <p className='fw-500 fs-16 line-height-24 title-color details-shift-cancel-title' style={{paddingBottom:"4px",marginTop:"0px"}}>Staff  Cancelation Details</p>
                 <Row gutter={[6,6]}>  
                  <Col xl={8}>
                  <span className='fw-600 fs-14 line-height-17 title-color '>
                  Shift Canceled By:
                  </span>
                  </Col>
                  <Col xl={16}>
                  <span className='fw-400 fs-14 line-height-22 title-color'>
                 {shiftData.shiftCanceledBy}
                  </span>
                  </Col>

                  <Col xl={8}>
                  <span className='fw-600 fs-14 line-height-17 title-color'>
                  Date:
                  </span>
                  </Col>

                  <Col xl={16}>
                  <span className='fw-400 fs-14 line-height-22 title-color'>
                 {shiftData.dateDetail}
                  </span>
                  </Col>

                  <Col xl={8}>
                  <span className='fw-600 fs-14 line-height-17 title-color'>
                  Time/Date:
                  </span>
                  </Col>
                  <Col xl={16}>
                  <span className='fw-400 fs-14 line-height-22 title-color'>
                 {shiftData.timeDate}
                  </span>
                  </Col>

                  <Col xl={8}>
                  <span className='fw-600 fs-14 line-height-17 title-color'>
                  Shift Cancelation Reason:
                  </span>
                  </Col>
                  <Col xl={15}>
                  <span className='fw-400 fs-14 line-height-22 title-color'>
                 {shiftData.shiftCancelationReason}
                  </span>
                  </Col>
                 </Row>
              </Card> 
              </div>
              </Col>
              </div>
             
              {/* </Row> */}
            </Card>

          </Col>
        )
      })}
    </Row>
     </Card>
    </Layout>
  )
}

export default CancelledShifts
