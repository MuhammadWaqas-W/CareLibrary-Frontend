import { Col, Row } from 'antd';
import React from 'react';
import ShiftCards from './ClientDashBoardWidgets/ShiftCards/ShiftCards';
import './ClientDashboard.scss';
import { ClientCardData } from '../../mock/ClientDashboardData';
import CarersGraph from './ClientDashBoardWidgets/CarersGraph/CarersGraph';
import RecentReviews from './ClientDashBoardWidgets/RecentReviews/RecentReviews';
import ClientCalendar from './ClientDashBoardWidgets/ClientCalendar/ClientCalendar';
// import CarerBookingCalendar from './CarerBookingCalendar/CarerBookingCalendar';
import OverAllRating from './ClientDashBoardWidgets/OverAllRating/OverAllRating';

const ClientDashboard = () => {
    return (
        <>
            <div className='client-dashboard-wrapper'>
                <Row gutter={[20, 20]}>
                    <Col xl={24} lg={24} md={24}>
                        <Row gutter={[20, 20]}>
                            {ClientCardData.map((card: any, index: number) => (
                                <Col className="client-shift-cards-wrap" key={index} xxl={6} xl={6} lg={12} md={12} sm={12} xs={24}>
                                    <ShiftCards card={card} />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col xxl={12} xl={18} lg={12} md={12} sm={12} xs={24}>
                        <CarersGraph />
                    </Col>
                    <Col xxl={6} xl={6} lg={12} md={12} sm={12} xs={24}>
                        <OverAllRating />
                    </Col>
                    <Col xxl={6} xl={6} lg={24} md={24} sm={24} xs={24}>
                        <RecentReviews />
                    </Col>
                    <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                        <ClientCalendar />
                        {/* <CarerBookingCalendar /> */}
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default ClientDashboard