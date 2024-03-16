import { Card, Col, Input, Row } from 'antd'
import Search from '../../assets/images/OnBoarding/Search.svg';
import AddNotifications from './AddNotifications';
import "./ManageNotification.scss";
import ManageNotificationTable from './ManageNotificationTable';

const ManageNotification = () => {
    return (
        <Card className='main-notifications-wrapper'>
            <Row className='carer-main carer-style' style={{justifyContent:'space-between'}} >
                <Col xs={24} md={16} style={{ marginBottom: "20px" }}>
                    <AddNotifications />
                </Col>
                <Col xs={24} md={8} lg={6}>
                    <div className="input-search-wrapper" style={{marginTop:'10px'}}>
                        <Input
                            placeholder="search"
                            prefix={<img src={Search} alt="search icon" className="icon" />}
                        />
                    </div>
                </Col>
                <Col xs={24}>
                    <ManageNotificationTable />
                </Col>
            </Row>
        </Card>
    )
}

export default ManageNotification