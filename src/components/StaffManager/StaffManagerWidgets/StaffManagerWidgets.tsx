import React from 'react'
import { Row, Col, Card } from 'antd'
import { v4 as uuidv4 } from 'uuid';
import { staffWidgetsData } from '../../../mock/StaffManagerMock'
import '../StaffManager.scss'

const StaffManagerWidgets = () => {
    return (
        <>
            <Row gutter={[10, 10]} style={{ paddingTop: "20px" }} justify="space-between">
                {
                    staffWidgetsData.map((card, index) => {
                        return (
                            <Col lg={6} xl={4} sm={24} md={12} xs={24} key={uuidv4()}>
                                <Card
                                    className='border-radius-10 satff-manager-widgets-wrapper'
                                    key={index}
                                    style={{borderLeft: card.id === '1' ? '7px solid #65CDF0' : card.id === '2' ? '7px solid #FAAD14' : card.id === '3' ? '7px solid #52C41A' : card.id === '4' ? '7px solid #EE2E7E' : card.id === '5' ? '7px solid #4E132C' :''}}
                                > 
                                    <div className='d-flex align-center justify-between'>
                                        <span className='fw-600 fs-20'>{card.title}</span>
                                        <span className='staff-widgets-amount fw-600 fs-30' style={{background: card.id === '1' ? '#65CDF0' : card.id === '2' ? '#FAAD14': card.id === '3' ? '#52C41A' : card.id === '4' ? '#EE2E7E' : card.id === '5' ? '#4E132C' :''}}>{card.amount}</span>
                                    </div>
                                </Card>
                            </Col>
                        );
                    })}
            </Row>
        </>
    )
}
export default StaffManagerWidgets