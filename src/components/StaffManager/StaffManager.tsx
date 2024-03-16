import React from "react";
import StaffManagerInfo from "./StaffManagerInfo/StaffManagerInfo";
import StaffManagerWidgets from "./StaffManagerWidgets/StaffManagerWidgets";
import { Col, Input, Row, Select } from "antd";
import searchIcon from "../../assets/icons/search.svg";
import "./StaffManager.scss";
import { Search } from "react-router-dom";
import { applicationStage } from "../../mock/OnBoarding";

const staffManager = () => {
  return (
    <>
      <div
        className="total-staff-count-main d-flex align-center"
        style={{ gap: "20px", justifyContent: "flex-end" }}
      >
        <p className="fs-15 fw-600 line-height-28 m-0">Total Staff:</p>
        <div className="counter-div">
          <p className="staff-count fs-16 fw-600 line-height-22 m-0">404</p>
        </div>
      </div>
      <StaffManagerWidgets />
      <Row
        className="staff-availability-sheet-common-filter-wrapper staff-main-search-filter bg-white"
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
                  Search by
                </p>
                <div className="filter-column">
                  <Select
                    size="large"
                    placeholder="Name"
                    defaultValue="All"
                    optionFilterProp="children"
                    className="app-select-wrap-class"
                    popupClassName="app-select-popup-wrap-class"
                    options={[
                      { value: 'Option One', label: 'Option One' },
                      { value: 'Option Two', label: 'Option Two' },
                    ]}
                  />
                </div>
              </Col>
              <Col xs={24} sm={8}>
                <p
                  className="fs-14 fw-600 title-color line-height-17 m-0"
                  style={{ marginBottom: "0.563rem" }}
                >
                  Choose by job Role
                </p>
                <div className="filter-column">
                  <Select
                    size="large"
                    placeholder="Choose by job Role"
                    defaultValue="All"
                    optionFilterProp="children"
                    className="app-select-wrap-class"
                    popupClassName="app-select-popup-wrap-class"
                    options={[
                      { value: 'Option One', label: 'Option One' },
                      { value: 'Option Two', label: 'Option Two' },
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

      <StaffManagerInfo />
    </>
  );
};

export default staffManager;
