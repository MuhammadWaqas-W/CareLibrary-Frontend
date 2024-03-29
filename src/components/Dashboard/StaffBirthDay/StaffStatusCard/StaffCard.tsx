import { Card, Col, Layout, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import { Link } from "react-router-dom";
import { ClientCardGraph } from "../../RecruitmentDetails/ClientCard/ClientGraph";

//Main
export const StaffStatusCard = () => {
  return (
    <Layout className="dashboard bg-unset">
      <Card
        className="most-used-services-card  border-radius-8 card card-bg-color"
        bordered={false}
        style={{
          boxShadow: "0px 12px 23px rgba(62, 73, 84, 0.04)",
          minHeight: "350px",
        }}
      >
        <div className="attendance-summary">
          <Row>
            <Col xs={24} sm={12} lg={12} xl={12} md={12}>
              <Paragraph className="attendance-summary-text title-color fw-500 fs-20">
                Staff Status
              </Paragraph>
            </Col>
            <Col
              xs={24}
              sm={12}
              lg={12}
              xl={12}
              md={12}
              style={{ textAlign: "end" }}
            >
              <Link to="" className="fw-400 fs-16" style={{ color: "#A0ACBB" }}>
                View All
              </Link>
            </Col>
          </Row>
        </div>
        <ClientCardGraph />
      </Card>
    </Layout>
  );
};
