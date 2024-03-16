import { Col, Row } from "antd";
import CertificateCard from "./CertificateCard";
import CertificateProfile from "./CertificateProfile";
import CertificateRating from "./CertificateRating";

const MyCertificate = () => {
  return (
      <div className="certificate-wrapper">
        <Row gutter={[20, 20]}>
          <Col xxl={12} xs={24}>
            <Row gutter={[20, 20]}>
              <Col xl={24}>
                <CertificateProfile />
              </Col>
              <Col xl={24}>
                <CertificateRating />
              </Col>
            </Row>
          </Col>
          <Col xxl={12} xs={24}>
            <CertificateCard />
          </Col>
        </Row>
    </div>
  );
};

export default MyCertificate;
