import { Select, Tabs, TabsProps } from "antd";
import { useState } from "react";

import Arrow from "../../../assets/images/OnBoarding/arrow.svg";
import "./CarerTraining.scss";
import CoursesList from "./CoursesCards/CoursesList";

const CarerTraining = () => {
  const [activeTab, setActiveTab] = useState("enrolled");

  const items: TabsProps["items"] = [
    {
      key: "enrolled",
      label: `Enrolled`,
      children: <CoursesList activeTab={activeTab} />,
    },
    {
      key: "in progress",
      label: `In Progress`,
      children: <CoursesList activeTab={activeTab} />,
    },
    {
      key: "completed",
      label: `Completed`,
      children: <CoursesList activeTab={activeTab} />,
    },
    {
      key: "pending",
      label: `Pending`,
      children: <CoursesList activeTab={activeTab} />,
    },
  ];
  const onChange = (key: string) => {
    setActiveTab(key);
  };
  return (
    <div className="carer-training-wrapper">
      <div className="top-header">
        <div>
          <span className="fw-600 fs-14 label">Carer</span>
        </div>
        <Select
          placeholder="Carer Name"
          className="select"
          suffixIcon={<img src={Arrow} alt="arrow icon" />}
          options={[
            { value: "Design", label: "Design" },
            { value: "Email", label: "Email" },
            { value: "Social Media", label: "Social Media" },
            { value: "Music", label: "Music" },
          ]}
        />
      </div>

      <div className="main-section">
        <Tabs defaultActiveKey="Enrolled" items={items} onChange={onChange} />
      </div>
    </div>
  );
};

export default CarerTraining;
