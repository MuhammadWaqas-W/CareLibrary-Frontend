import React, { useState } from 'react'
import { Tabs, TabsProps } from 'antd';
import './ClientSignOffShift.scss';
import { Col, Rate, Row } from 'antd'
import { ClientCheckInData, renderImg } from '../../../mock/ClientManageShift'
import ConfirmModal from './Modals/CompletedConfirmModal'
import ModifyModal from './Modals/CompletedModifyModal'

const ClientSignOffShift = () => {
  const [isCompletedConfirmModal, setIsCompletedConfirmModal] = useState<boolean>(false);
  const [isCompletedModifyModal, setIsCompletedModifyModal] = useState<boolean>(false);

  return (
    <>
      <div className='client-signoff-shift-wrapper bg-white'>
        <div className='client-checkin-tabs-wrapper bg-white'>
          <Row gutter={[20, 20]}>
            {ClientCheckInData.map((item: any) => (
              <Col xl={6} lg={8} md={12} sm={12} xs={24} key={item.id}>
                <div className='checkin-shift-wrapper bg-white'>
                  <div className='shift-img d-flex align-center'>
                    <img src={item.img} alt="" />
                    <div>
                      <h2 className='fs-16 fw-500 m-0 form-heading-color'>{item.shiftTitle}</h2>
                      <p className='fs-12 fw-400 m-0 title-color'>{item.shiftType}</p>
                      <Rate defaultValue={item.rating} allowHalf style={{ color: "#FABF35" }} />
                    </div>
                  </div>
                  <div className='checkin-content-wrap d-flex flex-column'>
                    {Object.keys(item).map((data: any) => renderImg[data] && (
                      <div className='d-flex align-center' style={{ gap: "15px" }}>
                        <img src={renderImg[data]} alt="" />
                        {renderImg[data] && <p className="m-0">{item[data]}</p>}
                      </div>
                    ))}
                  </div>
                  <div className="checkin-btn d-flex align-center">
                    <button type='button' className='confirm-btn white-color fs-16 fw-600 line-height-20 cursor-pointer' onClick={() => setIsCompletedConfirmModal(true)}>Confirm</button>
                    <button type='button' className='modify-btn white-color fs-16 fw-600 line-height-20 cursor-pointer' onClick={() => setIsCompletedModifyModal(true)}>Modify and Confirm</button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <ConfirmModal isCompletedConfirmModal={isCompletedConfirmModal} setIsCompletedConfirmModal={setIsCompletedConfirmModal} />
      <ModifyModal isCompletedModifyModal={isCompletedModifyModal} setIsCompletedModifyModal={setIsCompletedModifyModal} />
    </>
  )
}

export default ClientSignOffShift