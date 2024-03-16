import React, { useState } from 'react'
import { Row, Col } from 'antd'
import { metricsInfoData } from '../../../../mock/StaffManagerMock'
import BoxWrapper from '../../../../shared/BoxWrapper/BoxWrapper'
import AssignedClients from './AssignedClients/AssignedClients'
import ClientsRemoved from './ClientsRemoved/ClientsRemoved'
import './MetricsInfo.scss'

const MetricsInfo = () => {
    const [isAssignedClients, setIsAssignedClients] = useState<boolean>(false);
    const [isClientsRemoved, setIsClientsRemoved] = useState<boolean>(false);

    const handleMetricsInfo = (data: any) => {
        if (data === '1') {
            setIsAssignedClients(true)
        }
        else if (data === '2') {
            setIsClientsRemoved(true)
        }
    }
    return (
        <>
            <BoxWrapper title={'Metrics info'} className='metrics-info-card-wrapper'>
                <Row gutter={[20, 20]}>
                    {metricsInfoData.map((data: any) => (
                        <Col xxl={12} xl={12} lg={24} md={12} xs={24} sm={24} key={data.id}>
                            <div className='d-flex justify-between align-center metrics-info-widgets' onClick={() => handleMetricsInfo(data.id)}>
                                <div className='metrics-data'>
                                    <h5 className='fs-14 fw-400 line-height-22 m-0'>{data.title}</h5>
                                    <h5 className='fs-14 fw-600 line-height-17 m-0'>{data.amount}</h5>
                                </div>
                                {data.metricsNotify && <h1 className='metrics-notify fs-16 fw-500 m-0 d-flex align-center justify-center'>{data.metricsNotify}</h1>}
                            </div>
                        </Col>
                    ))
                    }
                </Row>
            </BoxWrapper>
            <AssignedClients isAssignedClients={isAssignedClients} setIsAssignedClients={setIsAssignedClients} />
            <ClientsRemoved isClientsRemoved={isClientsRemoved} setIsClientsRemoved={setIsClientsRemoved} />
        </>
    )
}
export default MetricsInfo