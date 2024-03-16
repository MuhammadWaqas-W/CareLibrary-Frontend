import { Button, Card, Col, Divider, Row } from "antd";
import { v4 as uuidv4 } from "uuid";
import DateTime from "../../assets/images/CordinatorDashboard/date.png";
import Location from "../../assets/images/CordinatorDashboard/location.png";
import User from "../../assets/images/CordinatorDashboard/user.png";
import Requests from "../../assets/images/CordinatorDashboard/requests.png";
import Pending from "../../assets/images/CordinatorDashboard/pending.png";
import Calendar from "../../assets/images/CordinatorDashboard/calendar.png";
import Total from "../../assets/images/CordinatorDashboard/total.png";
import Open from "../../assets/images/CordinatorDashboard/open.png";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import ShiftRequestedGraph from "./ShiftRequestedGraph";
import CarerStatusGraph from "./CarerStatusGraph";
import ShiftInsightTabs from "./ShiftInsightTabs";
import TopRatedCarers from "./TopRatedCarers";
import { useNavigate } from "react-router-dom";
import "./CordinatorDashboard.scss";
import CarerBookingCalendar from "./CarerBookingCalendar/CarerBookingCalendar";

const CordinatorDashboardPage = () => {
  const navigate = useNavigate();
  const CardsDetails = [
    {
      btn: "Shift Requests",
      link: "/shift-manager",
      moreDetailsLink: "/shift-manager/1",
      background: "#65CDF0",
      title: "Tall Tree Care Home",
      options: [
        { option: "May 18, Tue - 20:00 pm", img: DateTime },
        { option: "UK Street 1 House # 2", img: Location },
        { option: "Health Care Assistant : 05", img: User },
      ],
    },
    {
      btn: "Shift Bookings",
      link: "/shift-manager",
      moreDetailsLink: "/shift-manager/1",
      background: "#EE2E7E",
      title: "Tall Tree Care Home",
      options: [
        { option: "Total Requests : 05", img: Requests },
        { option: "Booked Shifts : 05", img: Calendar },
        { option: "Pending Shifts : 00", img: Pending },
      ],
    },
    {
      btn: "Whistle Blowing",
      link: "/shift-manager",
      moreDetailsLink: "/shift-manager/1",
      background: "#4E132C",
      title: "Tall Tree Care Home",
      options: [
        { option: "Total Requests : 04  ", img: Total },
        { option: "Open Requests : 01", img: Open },
        { option: "Pending Requests : 03 ", img: Pending },
      ],
    },
  ];
  return (
    <div className="cordinator-dashboard">
      <Row gutter={[25, 25]}>
        <Col xs={24} xl={18}>
          <Row gutter={[25, 25]}>
            {CardsDetails.map((item: any) => (
              <Col xs={24} md={12} xl={8} key={uuidv4()}>
                <Card className="detailed-card">
                  <Button
                    className="btn fs-20 fw-500 line-height-28 cursor-pointer d-flex align-center"
                    style={{ backgroundColor: item.background }}
                    onClick={() => navigate(item.link)}
                    type="primary"
                  >
                    <span style={{marginTop:'2px'}}>{item.btn}</span>
                  </Button>
                  <div className="card-body">
                    <p className="title-color fs-20 fw-500 line-height-28">
                      {item.title}
                    </p>
                    <div className="details">
                      <LeftOutlined />
                      <div className="card-details">
                        {item.options?.map((val: any) => (
                          <div className="d-flex" key={uuidv4()}>
                            <img
                              src={val.img}
                              alt="DateTimeImg"
                              width={18}
                              height={22}
                            />
                            <span className="title-color fs-14 fw-400 line-height-22">
                              {val.option}
                            </span>
                          </div>
                        ))}
                      </div>
                      <RightOutlined />
                    </div>
                    <div className="btn-more">
                      <Button
                        className="fs-14 fw-600 line-height-22 cursor-pointer"
                        onClick={() => navigate(item.moreDetailsLink)}
                        type="primary"
                      >
                        More Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
            <Col xs={24} md={12} xl={16}>
              <ShiftRequestedGraph />
            </Col>
            <Col xs={24} md={12} xl={8}>
              <CarerStatusGraph />
            </Col>
          </Row>
        </Col>
        <Col xs={24} xl={6}>
          <Card className="insight">
            <div className="shiftInsights d-flex">
              <ShiftInsightTabs />
              <Divider />
              <div className="ratings d-flex">
                <h3 className="fs-20 m-0 fw-500 title-color">
                  Top Rated Carers
                </h3>
                <p className="fs-16 m-0 fw-500 title-color cursor-pointer">
                  See all
                </p>
              </div>
              <TopRatedCarers />
            </div>
          </Card>
        </Col>
        <Col xs={24}>
          <CarerBookingCalendar />
        </Col>
      </Row>
    </div>
  );
};

export default CordinatorDashboardPage;
