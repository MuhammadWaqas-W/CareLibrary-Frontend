import { Card, Col, Layout, Row } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import { Link } from 'react-router-dom';
import { ClientCardGraph } from './ClientGraph';
//Main
export const ClientCard = () => {
  return (
    <Layout className='dashboard bg-unset' >
    <Card className="most-used-services-card  border-radius-8 card card-bg-color" bordered={false}  style={{boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.15)"}}>
      <div className="attendance-summary">
        <Row>
          <Col xs={24} sm={12} lg={12} xl={12} md={12}>
          <Paragraph className="attendance-summary-text title-color fw-500 fs-20">Recruitment</Paragraph>
          </Col>
          <Col xs={24} sm={12} lg={12} xl={12} md={12} style={{ textAlign: "end" }}>
              <Link to="" className="fw-400 fs-16" style={{ color: "#A0ACBB" }}>
                View All
              </Link>
            </Col>
        </Row>
      </div>
       <ClientCardGraph/>
    </Card>
    </Layout>
  );
};