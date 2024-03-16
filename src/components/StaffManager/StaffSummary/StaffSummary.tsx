import { Row, Col } from "antd";
import BackGroundChecks from "./BackGroundChecks/BackGroundChecks";
import EmploymentStatus from "./EmploymentStatus/EmploymentStatus";
import MetricsInfo from "./MetricsInfo/MetricsInfo";
import ShiftStatus from "./ShiftStatus/ShiftStatus";
import StaffContactCard from "./StaffContactCard/StaffContactCard";
import StaffSummaryCard from "./StaffSummaryCard/StaffSummaryCard";
import TraningsCard from "./TraningsCard/TraningsCard";
import Engagements from "./Engagements/Engagements";
import MonthlyJobBooking from "./MonthlyJobBooking/MonthlyJobBooking";
import "./StaffSummary.scss";

const StaffSummary = () => {
  return (
    <>
      <Row gutter={[20, 20]}>
        <Col xs={24} lg={7} >
          <Row gutter={[20, 20]}>
            <Col xs={24} sm={24} lg={24} md={24}>
              <StaffSummaryCard />
            </Col>
            <Col xs={24} sm={24} lg={24} md={24}>
              <StaffContactCard />
            </Col>
          </Row>
        </Col>

        <Col lg={17}>
          <Row gutter={[20, 20]}>
            <Col xl={12} lg={24} md={24} sm={24} xs={24}>
              <MonthlyJobBooking />
            </Col>
            <Col xl={12} lg={24} md={24} sm={24} xs={24}>
              <Engagements />
            </Col>
            <Col xl={12} lg={24} md={24} sm={24} xs={24}>
              <ShiftStatus />
            </Col>
            <Col xl={12} lg={24} md={24} sm={24} xs={24}>
              <MetricsInfo />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row
        gutter={[20, 20]}
        style={{ marginTop: "15px", marginBottom: "40px" }}
      >
        <Col xl={8} lg={12} md={12} sm={24} xs={24}>
          <EmploymentStatus />
        </Col>
        <Col xl={8} lg={12} md={12} sm={24} xs={24}>
          <BackGroundChecks />
        </Col>
        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <TraningsCard />
        </Col>
      </Row>
    </>
  );
};

export default StaffSummary;
