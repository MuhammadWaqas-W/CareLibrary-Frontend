import { Col, Row } from "antd";
import DashboardTable from "./ItHelpDeskDashboard/DashboardTable";
import { MyTicketDetails } from "./ItHelpDeskDashboard/MyTicketDetails";
import TicketsSummary from "./ItHelpDeskDashboard/TicketsSummary";
import "../../sass/common.scss";
import TaskSummaryGraph from "./ItHelpDeskDashboard/TaskSummaryGraph";
import { MyTicketDetailsInstructor } from "./ItHelpDeskDashboard/MyTicketDetailsInstructor";

export const ItHelpDesk = () => {
  return (
    <>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row"  xl={10} lg={24} >
        <div className="bg-white border-radius-12 padding-30"style={{marginBottom:"30px"}}>
          <h6
            className="fs-20 fw-600 line-height-18 m-0"
            style={{
              color: "#23262F",
              marginBottom:"30px"
            }}
          >
            Tickets Summary
          </h6>

          <TicketsSummary />
        </div>
      </Col>

      <Col className="gutter-row" xs={24} sm={24} md={24} xl={14} lg={24} >
        <div
          className="bg-white border-radius-12 padding-30"
          style={{marginBottom: "30px",height:"292px" }}
        >
          <div className="d-flex justify-between" style={{marginBottom:"30px"}}>
            <h6
              className="fs-20 fw-600 line-height-18 m-0"
              style={{ color: "#23262F" }}
            >
              Task Summary
            </h6>
            {/* <div
              className="border-radius-10 d-flex justify-center  align-center"
              style={{
                width: "115px",
                height: "25px",
                padding: "10px",
                border: "0.716599px solid #65CDF0",
              }}
            >
              <span>This weak</span>
            </div> */}
          </div>
          <TaskSummaryGraph/>
        </div>
        <div className="bg-white border-radius-12 padding-30"
           style={{height:"274px"}}>
            <div className="d-flex justify-between">
              <h6
                className="fs-20 fw-600 line-height-18 m-0"
                style={{ color: "#23262F" }}
              >
                My Ticket Details
              </h6>
              {/* <div
                className="border-radius-10 d-flex justify-center  align-center"
                style={{
                  width: "115px",
                  height: "25px",
                  padding: "10px",
                  border: "0.716599px solid #65CDF0",
                }}
              >
                <span>This weak</span>
              </div> */}
            </div>

          <MyTicketDetails />
          {/* <MyTicketDetailsInstructor/> */}
        </div>
      </Col>

      {/* table start here */}
      </Row>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={24}>
        <div
          className="bg-white border-radius-12"
        >
          <DashboardTable />
        </div>
      </Col>
    </Row>
    </>
  );
};
