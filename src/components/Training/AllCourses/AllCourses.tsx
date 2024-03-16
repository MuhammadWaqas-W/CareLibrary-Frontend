import { Col, Input, Row } from "antd";

import SearchIcon from "../../../assets/icons/Search.png";
import { myResultsFilter } from "../../../mock/TrainingData/ResultDropDownData";
import CommonReportChildFilters from "../../Reports/CommonReportChildFilters/CommonReportChildFilters";
import "./AllCourses.scss";
import CoursesList from "./CoursesCards/CoursesList";

const AllCourses = () => {
  return (
    <div className="courses-wrapper">
      <div className="top-header">
        <Row gutter={[20, 20]} className="d-flex align-center">
          <Col lg={12} xs={24}>
            <CommonReportChildFilters filtersArray={myResultsFilter} />
          </Col>
          <Col lg={12} xs={24} style={{ display: "flex", justifyContent: "end" }}>
            <div className="input-search-wrapper">
              <Input
                placeholder="search"
                prefix={<img src={SearchIcon} alt="search icon" className="icon" />}
              />
            </div>
          </Col>
        </Row>
      </div>
      <div className="courses">
        <CoursesList />
      </div>
    </div>
  );
};

export default AllCourses;
