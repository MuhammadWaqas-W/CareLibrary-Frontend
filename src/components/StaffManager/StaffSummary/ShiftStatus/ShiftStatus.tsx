import { Row, Col } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { shiftStatusData } from '../../../../mock/StaffManagerMock'
import './ShiftStatus.scss'

const ShiftStatus = () => {
    const navigate = useNavigate();

    const handleCardClick = (id: string, type: string) => {
        switch (type) {
            case 'Open shifts':
                navigate(`/staff-manager/staff-summary/open-shift`)
                break;
            case 'Total Hours Life Time':
                navigate(`/staff-manager/staff-summary/total-hours-life-time`)
                break;
            case 'Confirmed shifts':
                navigate(`/staff-manager/staff-summary/confirmed-shift`)
                break;
            case 'Total Hours This Month':
                navigate(`/staff-manager/staff-summary/total-hours-month`)
                break;
            case 'Completed shifts':
                navigate(`/staff-manager/staff-summary/completed-shift`)
                break;
            default:
                break;
        }
    }
    return (
        <>
            <div className="shift-status-card-wrapper">
                <h4 className="fs-20 fw-500 line-height-28 title-color">Shift Status</h4>
                <Row gutter={[20, 20]}>
                    {shiftStatusData.map((data: any) => (
                            <Col xxl={12} xl={12} lg={24} md={12} xs={24} sm={24} key={data.id}>
                                <div className='shift-status-widgets' onClick={() => handleCardClick(data.id, data.title)}>
                                    <div className='d-flex justify-between align-center'>
                                        <div className='shift-data' >
                                            <h5 className='fs-14 fw-400 line-height-22 m-0'>{data.title}</h5>
                                            <h5 className='fs-14 fw-600 line-height-17 m-0'>{data.amount}</h5>
                                        </div>
                                        {data.title.includes('shift') && <h1 className='shift-notify fs-16 fw-500 m-0 d-flex align-center justify-center'>{data.shiftNotify}</h1>}
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </>
    )
}
export default ShiftStatus