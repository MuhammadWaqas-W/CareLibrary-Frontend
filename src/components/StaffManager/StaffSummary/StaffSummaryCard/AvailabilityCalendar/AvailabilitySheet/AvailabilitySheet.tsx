import { Col, DatePicker, Input, Row, Select, Table } from "antd";
import { useState } from "react";
import { availabilitySheetData } from "../../../../../../mock/StaffManagerMock";
import AvailabilityModal from "./AvailabilityModal/AvailabilityModal";
import searchIcon from "../../../../../../assets/icons/search.svg";
import { DatePickerProps } from "antd/es/date-picker";
import datePickerIcon from "../../../../../../assets/BookingCalander/images/date-picker.png";
import "./AvailabilitySheet.scss";


const AvailabilitySheet = () => {
  const [isAvailability, setIsAvailability] = useState(false);
  const handleChangeFrom: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  const handleChangeTo: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const columns = [
    {
      title: "Display Name",
      dataIndex: "displayName",
      key: "displayName",
    },
    {
      title: (
        <div className="d-flex flex-column">
          Monday<span className="fs-12 fw-400">16/05/2022</span>
        </div>
      ),
      dataIndex: "monday",
      key: "monday",
      width: 180,
      render: (text: any) => (
        <div
          className="weather-update-wrapper d-flex align-item-center"
          style={{ gap: "2px" }}
          onClick={() => setIsAvailability(true)}
        >
          <div className="day-update"></div>
          <div className="am-update d-flex justify-center align-center">
            <h3 className="m-0 fs-14 fw-600 line-height-17">A M</h3>
          </div>
          <div className="pm-update d-flex justify-center align-center">
            <h3 className="m-0 fs-14 fw-600 line-height-17 ">P M</h3>
          </div>
          <div className="moon-update"></div>
        </div>
      ),
    },
    {
      title: (
        <div className="d-flex flex-column">
          Tuesday<span className="fs-12 fw-400">17/05/2022</span>
        </div>
      ),
      dataIndex: "tuesday",
      key: "tuesday",
      width: 180,
      render: (text: any) => (
        <div
          className="weather-update-wrapper d-flex align-item-center"
          style={{ gap: "2px" }}
        >
          <div className="day-update"></div>
          <div className="am-update d-flex justify-center align-center">
            <h3 className="m-0 fs-14 fw-600 line-height-17">A M</h3>
          </div>
          <div
            className="pm-update d-flex justify-center align-center"
            style={{ backgroundColor: "#F89A0C", color: "#FCFCFC" }}
          >
            <h3 className="m-0 fs-14 fw-600 line-height-17 ">P M</h3>
          </div>
          <div className="moon-update"></div>
        </div>
      ),
    },
    {
      title: (
        <div className="d-flex flex-column">
          Wednesday<span className="fs-12 fw-400">18/05/2022</span>
        </div>
      ),
      dataIndex: "wednesday",
      key: "wednesday",
      width: 180,
      render: (text: any) => (
        <div
          className="weather-update-wrapper d-flex align-item-center"
          style={{ gap: "2px" }}
        >
          <div className="day-update"></div>
          <div
            className="am-update d-flex justify-center align-center"
            style={{ backgroundColor: "#E6B15D", color: "#FCFCFC" }}
          >
            <h3 className="m-0 fs-14 fw-600 line-height-17">A M</h3>
          </div>
          <div className="pm-update d-flex justify-center align-center">
            <h3 className="m-0 fs-14 fw-600 line-height-17 ">P M</h3>
          </div>
          <div className="moon-update"></div>
        </div>
      ),
    },
    {
      title: (
        <div className="d-flex flex-column">
          Thursday<span className="fs-12 fw-400">19/05/2022</span>
        </div>
      ),
      dataIndex: "thursday",
      key: "thursday",
      width: 180,
      render: (text: any) => (
        <div
          className="weather-update-wrapper d-flex align-item-center"
          style={{ gap: "2px" }}
        >
          <div className="day-update"></div>
          <div className="am-update d-flex justify-center align-center">
            <h3 className="m-0 fs-14 fw-600 line-height-17">A M</h3>
          </div>
          <div className="pm-update d-flex justify-center align-center">
            <h3 className="m-0 fs-14 fw-600 line-height-17 ">P M</h3>
          </div>
          <div className="moon-update moon-color"></div>
        </div>
      ),
    },
    {
      title: (
        <div className="d-flex flex-column">
          Friday<span className="fs-12 fw-400">20/05/2022</span>
        </div>
      ),
      dataIndex: "friday",
      key: "friday",
      width: 180,
      render: (text: any) => (
        <div
          className="weather-update-wrapper d-flex align-item-center"
          style={{ gap: "2px" }}
        >
          <div className="day-update"></div>
          <div className="am-update d-flex justify-center align-center">
            <h3 className="m-0 fs-14 fw-600 line-height-17">A M</h3>
          </div>
          <div className="pm-update d-flex justify-center align-center">
            <h3 className="m-0 fs-14 fw-600 line-height-17 ">P M</h3>
          </div>
          <div className="moon-update moon-color"></div>
        </div>
      ),
    },
    {
      title: (
        <div className="d-flex flex-column">
          Saturday<span className="fs-12 fw-400">21/05/2022</span>
        </div>
      ),
      dataIndex: "saturday",
      key: "saturday",
      width: 180,
      render: (text: any) => (
        <div
          className="weather-update-wrapper d-flex align-item-center"
          style={{ gap: "2px" }}
        >
          <div className="day-update sun-color"></div>
          <div className="am-update d-flex justify-center align-center">
            <h3 className="m-0 fs-14 fw-600 line-height-17">A M</h3>
          </div>
          <div className="pm-update d-flex justify-center align-center">
            <h3 className="m-0 fs-14 fw-600 line-height-17 ">P M</h3>
          </div>
          <div className="moon-update"></div>
        </div>
      ),
    },
    {
      title: (
        <div className="d-flex flex-column">
          Sunday<span className="fs-12 fw-400">22/02/2022</span>
        </div>
      ),
      dataIndex: "sunday",
      key: "sunday",
      width: 180,
      render: (text: any) => (
        <div
          className="weather-update-wrapper d-flex align-item-center"
          style={{ gap: "2px" }}
        >
          <div className="day-update sun-color"></div>
          <div className="am-update d-flex justify-center align-center">
            <h3 className="m-0 fs-14 fw-600 line-height-17">A M</h3>
          </div>
          <div className="pm-update d-flex justify-center align-center">
            <h3 className="m-0 fs-14 fw-600 line-height-17 ">P M</h3>
          </div>
          <div className="moon-update"></div>
        </div>
      ),
    },
  ];
  return (
    <>
      <Row
        className="staff-availability-sheet-common-filter-wrapper work-histor-search-filter bg-white"
        justify="space-between"
        style={{marginBlock:'20px'}}
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
                  Date Range
                </p>
                <div className="filter-column">
                  <DatePicker
                    suffixIcon={<img src={datePickerIcon} alt="calander" />}
                    className="date-picker"
                    onChange={handleChangeFrom}
                    placeholder="Form"
                  />
                </div>
              </Col>

              <Col xs={24} sm={8}>
                <p
                  className="fs-14 fw-600 title-color line-height-17 m-0"
                  style={{ marginBottom: "0.563rem" }}
                >
                  &nbsp;
                </p>
                <div className="filter-column">
                  <DatePicker
                    suffixIcon={<img src={datePickerIcon} alt="calander" />}
                    className="date-picker"
                    onChange={handleChangeTo}
                    placeholder="To"
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
      <div className="availability-table">
        <Table
          columns={columns}
          dataSource={availabilitySheetData}
          pagination={false}
          className=""
          scroll={{ x: "max-content" }}
        />
      </div>
      <AvailabilityModal
        isAvailability={isAvailability}
        setIsAvailability={setIsAvailability}
      />
    </>
  );
};

export default AvailabilitySheet;