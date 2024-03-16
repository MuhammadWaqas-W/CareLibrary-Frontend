import { Avatar, Col, Input, Row, Select } from "antd";
import CountWedgits from "./CountWedgits/CountWedgits";
import WorkHistoryTable from "./workHistoryTable/WorkHistoryTable";
import searchIcon from "../../../assets/icons/search.svg";
import "./WorkHistory.scss";

const WorkHistory = () => {
  return (
    <>
      <div style={{ paddingBlock: "30px" }}>
        <Avatar
          style={{ backgroundColor: "#4E132C", color: "#FFFFFF" }}
          size="large"
        >
          DM
        </Avatar>
        <span
          className="fs-14 fw-600 line-height-17"
          style={{ marginLeft: "10px" }}
        >
          David Williams
        </span>
      </div>
      <Row
        className="staff-availability-sheet-common-filter-wrapper work-histor-search-filter bg-white"
        justify="space-between"
      >
        <Col xs={24} md={16} xl={14} xxl={12}>
          <Row gutter={[0, 20]} className="filter-wrapper">
            <>
              <Col xs={24} sm={8}>
                <p
                  className="fs-14 fw-600 title-color line-height-17 m-0"
                  style={{ marginBottom: "0.563rem" }}
                >
                  Shift Name
                </p>
                <div className="filter-column">
                  <Select
                    size="large"
                    placeholder=""
                    defaultValue="All"
                    optionFilterProp="children"
                    className="app-select-wrap-class"
                    popupClassName="app-select-popup-wrap-class"
                    options={[
                      { value: "Option One", label: "Option One" },
                      { value: "Option Two", label: "Option Two" },
                    ]}
                  />
                </div>
              </Col>
              <Col xs={24} sm={8}>
                <p
                  className="fs-14 fw-600 title-color line-height-17 m-0"
                  style={{ marginBottom: "0.563rem" }}
                >
                  Shift Status
                </p>
                <div className="filter-column">
                  <Select
                    size="large"
                    placeholder=""
                    defaultValue="All"
                    optionFilterProp="children"
                    className="app-select-wrap-class"
                    popupClassName="app-select-popup-wrap-class"
                    options={[
                      { value: "Option One", label: "Option One" },
                      { value: "Option Two", label: "Option Two" },
                    ]}
                  />
                </div>
              </Col>
              <Col xs={24} sm={8}>
                <p
                  className="fs-14 fw-600 title-color line-height-17 m-0"
                  style={{ marginBottom: "0.563rem" }}
                >
                  Client Name
                </p>
                <div className="filter-column">
                  <Select
                    size="large"
                    placeholder=""
                    defaultValue="All"
                    optionFilterProp="children"
                    className="app-select-wrap-class"
                    popupClassName="app-select-popup-wrap-class"
                    options={[
                      { value: "Option One", label: "Option One" },
                      { value: "Option Two", label: "Option Two" },
                    ]}
                  />
                </div>
              </Col>
            </>
          </Row>
        </Col>

        <Col xs={24} md={8} xl={6} className="gutter-row">
          <div className="input-search-wrapper">
            <p
              className="fs-14 fw-600 title-color line-height-17 m-0"
              style={{ marginBottom: "0.563rem" }}
            >
              &nbsp;
            </p>
            <Input
              placeholder="search"
              prefix={<img src={searchIcon} className="icon" />}
            />
          </div>
        </Col>
      </Row>
      <CountWedgits />
      <WorkHistoryTable />
    </>
  );
};

export default WorkHistory;
