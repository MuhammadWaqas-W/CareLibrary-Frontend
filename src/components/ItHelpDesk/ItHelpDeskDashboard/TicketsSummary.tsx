import { Col, Row } from "antd";
import { ticketsSummary } from "../../../mock/ItHelpDesk/ItHelpDashboard";
import "./ItHelpDeskDasboard.scss";
import "../../../sass/common.scss";
import { Link, useNavigate } from "react-router-dom";

const TicketsSummary = () => {
  const navigate = useNavigate();
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      {ticketsSummary.map((item: any) => {
        return (
          <Col
            key={item.id}
            className="gutter-row"
            xxl={12}
            xl={24}
            lg={12}
            md={12}
            sm={12}
            xs={24}
          >
            <div
              className="d-flex wrap-tickets-summary"
              onClick={() => navigate(`all-tickets/${item.pathQuery}`)}
            >
              <div
                className="ticket-images cursor"
                style={{ background: item.backgroundColor }}
              >
                <img src={item.images} alt="" />
              </div>
              <div>
                <p
                  className="fs-16 fw-400 line-height-24 m-0 cursor"
                  style={{ color: "#6F767E" }}
                >
                  {item.ticketStatus}
                </p>
                <p className="fs-24 fw-500 line-height-32 title-color m-0 cursor">
                  {item.ticketCount}
                </p>
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default TicketsSummary;
