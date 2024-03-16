import { Layout, Card, Row, Col } from "antd";
import { useState } from "react";
import { EngagementsGraph } from "./EngagementsGraph";

const Engagements = () => {
  const [selectedEngagements, setSelectedEngagements] = useState("weeks");
  const data = [
    { id: "weeks", label: "Weekly" },
    { id: "months", label: "Monthly" },
  ];
  const handleClick = (id: any) => {
    setSelectedEngagements(id);
  };
  const getColor = (id: any) => {
    return selectedEngagements === id ? "#4E132C" : "#C4C4C4";
  };
  return (
    <Layout className="bg-unset">
      <Card
        className="most-used-services-card border-radius-8 card card-bg-color"
        bordered={false}
        style={{
          minHeight: "360px",
          boxShadow: "0px 12px 23px rgba(62, 73, 84, 0.04)",
        }}
      >
        <div className="d-flex justify-between">
          <div style={{ display: "flex" }}>
            <p
              className="fw-500 fs-20"
              style={{ color: "#4E4B66", marginTop: "0px" }}
            >
              Engagements
            </p>
          </div>
          <div className="filter-score">
            <Row>
              {data.map((item) => (
                <Col
                  key={item.id}
                  sm={12}
                  lg={12}
                  xl={12}
                  md={12}
                  style={{
                    borderRight:
                      item.id === "weeks" ? "1px solid #a0acbb" : "none",
                  }}
                >
                  <span
                    className={`lowest fw-400 fs-16 cursor-pointer ${
                      selectedEngagements === item.id ? "active" : ""
                    }`}
                    onClick={() => handleClick(item.id)}
                    style={{ color: getColor(item.id), margin: "0px 10px" }}
                  >
                    {item.label}
                  </span>
                </Col>
              ))}
            </Row>
          </div>
        </div>
        <EngagementsGraph />
      </Card>
    </Layout>
  );
};
export default Engagements;
