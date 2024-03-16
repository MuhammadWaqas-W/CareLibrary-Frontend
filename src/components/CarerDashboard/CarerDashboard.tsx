import { useState } from "react";
import { Col, Dropdown, MenuProps, Row } from "antd";

import { shiftCardData } from "../../mock/CarerDashboardData/ShiftsCardData";
import ShiftCard from "./DashBoardWidgets/ShiftsCards/ShiftCard";
import Experience from "./DashBoardWidgets/Experience/Experience";
import Accomplishment from "./DashBoardWidgets/Accomplishment/Accomplishment";
import Skills from "./DashBoardWidgets/Skills/Skills";
import checkInIcon from "../../assets/icons/carerDashboard/check-in.png";
import Requests from "./DashBoardWidgets/Requests/Requests";
import DocumentExpiry from "./DashBoardWidgets/ExpiryDates/DocumentExpiry";
import Rating from "./DashBoardWidgets/Ratings/Rating";
import "./CarerDashboard.scss";
import CheckInDropdown from "./DashBoardWidgets/CheckInDropdown/CheckInDropdown";
import LocationModal from "./DashBoardWidgets/LocationModal/LocationModal";
import CarerCalendar from "./DashBoardWidgets/Calendar/Calendar";
//remove this comment

const items: MenuProps["items"] = [
  {
    label: <CheckInDropdown />,
    key: "0",
  },
];

const CarerDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="dropdown">
        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <img src={checkInIcon} alt="check-in" />
          </a>
        </Dropdown>
      </div>
      <div className="carer-dashboard-wrapper">
        <Row gutter={[20, 20]}>
          <Col xxl={18} lg={24}>
            <Row gutter={[20, 20]}>
              {shiftCardData.map((card: any, index: number) => (
                <Col className="shift-cards" key={index} xl={8} md={index === 2 ? 24 : 12} xs={24}>
                  <ShiftCard setIsModalOpen={setIsModalOpen} card={card} />
                </Col>
              ))}
              <Col xxl={8} lg={12} xs={24}>
                <Rating />
              </Col>
              <Col xxl={8} lg={12} xs={24}>
                <DocumentExpiry />
              </Col>
              <Col xxl={8} lg={24} xs={24}>
                <Requests />
              </Col>
            </Row>
          </Col>
          <Col xxl={6} md={24} lg={24}>
            <Row gutter={[20, 20]}>
              <Col xxl={24} md={12} xs={24}>
                <Experience />
              </Col>
              <Col xxl={24} md={12} xs={24}>
                <Accomplishment />
              </Col>
              <Col xxl={24} md={24} xs={24}>
                <Skills />
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <CarerCalendar />
          </Col>
        </Row>
      </div>
      {isModalOpen && <LocationModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
    </>
  );
};

export default CarerDashboard;
