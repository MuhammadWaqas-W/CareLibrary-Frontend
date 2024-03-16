import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Card } from "antd";

const shifts = [
  { title: "Created Shifts", total: "01", background: "#E5F7FF" },
  { title: "Booked Shifts", total: "03", background: "#EFFFF4" },
  { title: "Cancelled Shifts", total: "01", background: "#ECEAFE" },
  { title: "Unfilled Shifts", total: "06", background: "#FFF0F7" },
  { title: "Directly Booked & Awaiting", total: "00", background: "#F3F1FF" },
  { title: "Directly Booked & Confirmed", total: "01", background: "#EFFFF4" },
  { title: "Directly Booked", total: "00", background: "#FFF0E6" },
];
const tabs = ["Day", "Week", "Month"];

const ShiftInsightTabs: React.FC = () => (
  <div className="shifts w-100">
    <div className="card-title d-flex" style={{ marginBottom: "30px" }}>
      <h3 className="fs-20 m-0 line-height-28 fw-500 title-color">
        Shifts Insight
      </h3>
      <div className="d-flex" style={{ gap: "10px" }}>
        {tabs.map((item: any) => (
          <span key={uuidv4()}>{item}</span>
        ))}
      </div>
    </div>
    <div>
      {shifts.map((item) => (
        <Card style={{ backgroundColor: item.background }} key={uuidv4()}>
          <div className="d-flex" style={{ justifyContent: "space-between" }}>
            <span className='fs-12 fw-400 title-color'>{item.title}</span>
            <span className='fs-12 fw-400 title-color'>{item.total}</span>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

export default ShiftInsightTabs;
