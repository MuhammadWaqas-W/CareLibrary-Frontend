import {
  Button,
  Col,
  DatePicker,
  DatePickerProps,
  Input,
  Pagination,
  Row,
  Select,
  Space,
} from "antd";
import {
  optionsPrioritymock,
  optionsReportedBymock,
  optionsTicketmock,
  ticketsSummaryAdminlList,
  ticketsSummaryDetailList,
} from "../../../../mock/ItHelpDesk/ItHelpDashboard";
import ItHelpTicketSummaryCommonTable from "./ItHelpTicketSummaryCommonTable/ItHelpTicketSummaryCommonTable";
import "./ItHelpTicketSummaryDetail.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import AddTicketModal from "./AddTicketCommonModal/AddTicketModal";
import "../../../Reports/CommonReportChildFilters/CommonReportChildFilters.scss";
import Search from "../../../../assets/images/OnBoarding/Search.svg";
import dateIcon from "../../../../assets/icons/ItHelpDesk/dateIcon.svg";
import AssignToCommonModal from "./AssignToCommonModal/AssignToCommonModal";

// Assets
import searchIcon from "../../../../assets/icons/search.svg";
import coloredCopyIcon from "../../../../assets/icons/Report/colored-copy.png";
import coloredCsvIcon from "../../../../assets/icons/Report/colored-csv.png";
import coloredXlsIcon from "../../../../assets/icons/Report/colored-xls.png";
import { ROLES } from "../../../../constants/Roles";




const ItHelpTicketSummaryDetails = () => {
  const [stepperValue, setStepperValue] = useState<string>("My Tickets");
  const [addTicketModal, setAddTicketModal] = useState(false);
  const [assignToModal, setAssignToModal] = useState(false);
  const [selectedStepValue, setselectedStepValue] = useState<number>(2);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 5 });

  const { role }: any = JSON.parse(localStorage.getItem("careUserData") || "{}");
console.log(role,"role is *************************")

  // const { tableHeader, tableData } = props;

  const handelSelectedStepValue = (ele: any) => {
    setselectedStepValue(ele.id);
  };
  const handelNextStep = (ele: any) => {
    setselectedStepValue(selectedStepValue + 1);
  };

  console.log("selectedStepValue", selectedStepValue);

  const handleChildStateChange = (childState: any) => {
    setselectedStepValue(childState);
  };

  const handleData = (list: any) => {
    console.log(list);
    setStepperValue(list);
  };

  let { pathname } = useLocation();
  const navigate = useNavigate();
  console.log("*******************", pathname);

  const words = pathname.split("/");
  console.log(words[4]);

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const Icon = () => <img src={dateIcon} alt="" />;

  // let role = "superAdmin";
  return (
    <div className="wrap-ticket-summary-details">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row " span={24}>
          <div
            className="bg-white card-box-shadow padding-30 border-radius-8"
            style={{ border: "1px solid #D9DBE9 " }}
          >
            <div className="add-new-ticket">
              {(role === ROLES.superAdmin || role === ROLES.admin ) && (
                <Button
                type="primary"
                  className="bg-orange-color"
                  style={{ marginRight: "1px" }}
                  onClick={() => {
                    setAssignToModal(true);
                  }}
                >
                  Assign To
                </Button>
              )}
              <AssignToCommonModal
                assignToModal={assignToModal}
                setAssignToModal={setAssignToModal}
              />

              <Button
              type="primary"
                className="add-btn"
                onClick={() => {
                  setAddTicketModal(true);
                }}
              >
                Add New Ticket
              </Button>
              <AddTicketModal
                title="Add New ticket"
                addTicketModal={addTicketModal}
                setAddTicketModal={setAddTicketModal}
              />
            </div>
            <Row className="d-flex justify-between align-center wrap-filterss">
              <Col xs={24} md={24} lg={24} xl={24} xxl={17}>
                <Row className="common-report-child-filter-wrapper">
                  <Col xs={24} md={12} lg={6} xl={6} xxl={5} className="wrap-filter">
                    <p
                      className="fs-14 fw-600 title-color line-height-17 m-0"
                      style={{ marginBottom: "0.563rem" }}
                    >
                      {/* {singleItem.labelName} */}
                      Ticket #
                    </p>
                    <div className="filter-column">
                      <Select
                        size="large"
                        placeholder="All"
                        optionFilterProp="children"
                        className="app-select-wrap-class"
                        popupClassName="app-select-popup-wrap-class"
                        style={{ width: "100%" }}
                        // onChange={handleCommonFilterChange}
                        // filterOption={(input: any, option: any) => { (option?.label ?? "").toLowerCase().includes(input.toLowerCase()) }}
                        options={
                          !!optionsTicketmock &&
                          optionsTicketmock.map((item: any) => ({
                            value: item?.value,
                            label: item?.label,
                          }))
                        }
                      />
                    </div>
                  </Col>
                  {( role === ROLES.carer || role === ROLES.client) && (
                    <Col xs={24} md={12} lg={6} xl={6} xxl={5} className="wrap-filter">
                      <p
                        className="fs-14 fw-600 title-color line-height-17 m-0"
                        style={{ marginBottom: "0.563rem" }}
                      >
                        Date
                        {/* {singleItem.labelName} */}
                      </p>
                      <div className="filter-column">
                        <DatePicker
                          onChange={onChange}
                          size="large"
                          suffixIcon={<Icon />}
                          className="app-select-wrap-class"
                          popupClassName="app-select-popup-wrap-class"
                          style={{
                            width: "100%",
                            borderLeft: "0PX",
                            borderRight: "0px",
                            borderRadius: "0px",
                          }}
                        />
                      </div>
                    </Col>
                  )}
                  {(role === ROLES.superAdmin || role === ROLES.instructor || role === ROLES.coordinator || role === ROLES.admin) && (
                    <Col xs={24} md={12} lg={6} xl={6} xxl={5} className="wrap-filter">
                      <p
                        className="fs-14 fw-600 title-color line-height-17 m-0"
                        style={{ marginBottom: "0.563rem" }}
                      >
                        {/* {singleItem.labelName} */}
                        Time Frame
                      </p>
                      <div className="filter-column">
                        <Select
                          size="large"
                          placeholder="Month To Date"
                          optionFilterProp="children"
                          className="app-select-wrap-class"
                          popupClassName="app-select-popup-wrap-class"
                          style={{ width: "100%" }}
                          // onChange={handleCommonFilterChange}
                          // filterOption={(input: any, option: any) => { (option?.label ?? "").toLowerCase().includes(input.toLowerCase()) }}
                          options={
                            !!optionsReportedBymock &&
                            optionsReportedBymock.map((item: any) => ({
                              value: item?.value,
                              label: item?.label,
                            }))
                          }
                        />
                      </div>
                    </Col>
                  )}
                 {(role === ROLES.admin || role === ROLES.carer || role === ROLES.client || role === ROLES.superAdmin) && <Col xs={24} md={12} lg={6} xl={6} xxl={5} className="wrap-filter">
                    <p
                      className="fs-14 fw-600 title-color line-height-17 m-0"
                      style={{ marginBottom: "0.563rem" }}
                    >
                      {/* {singleItem.labelName} */}
                      Reported by
                    </p>
                    <div className="filter-column">
                      <Select
                        size="large"
                        placeholder="All user"
                        optionFilterProp="children"
                        className="app-select-wrap-class"
                        popupClassName="app-select-popup-wrap-class"
                        style={{ width: "100%" }}
                        // onChange={handleCommonFilterChange}
                        // filterOption={(input: any, option: any) => { (option?.label ?? "").toLowerCase().includes(input.toLowerCase()) }}
                        options={
                          !!optionsReportedBymock &&
                          optionsReportedBymock.map((item: any) => ({
                            value: item?.value,
                            label: item?.label,
                          }))
                        }
                      />
                    </div>
                  </Col>}
                  {(role === ROLES.superAdmin|| role === ROLES.instructor|| role === ROLES.coordinator|| role === ROLES.admin) && <Col xs={24} md={12} lg={6} xl={6} xxl={5} className="wrap-filter">
                    <p
                      className="fs-14 fw-600 title-color line-height-17 m-0"
                      style={{ marginBottom: "0.563rem" }}
                    >
                      {/* {singleItem.labelName} */}
                      Status
                    </p>
                    <div className="filter-column">
                      <Select
                        size="large"
                        placeholder="Select Status"
                        optionFilterProp="children"
                        className="app-select-wrap-class"
                        popupClassName="app-select-popup-wrap-class"
                        style={{ width: "100%" }}
                        // onChange={handleCommonFilterChange}
                        // filterOption={(input: any, option: any) => { (option?.label ?? "").toLowerCase().includes(input.toLowerCase()) }}
                        options={
                          !!optionsTicketmock &&
                          optionsTicketmock.map((item: any) => ({
                            value: item?.value,
                            label: item?.label,
                          }))
                        }
                      />
                    </div>
                  </Col>}
                  {( role === ROLES.carer || role === ROLES.client) && (
                    <Col xs={24} md={12} lg={5} xl={5} xxl={5} className="wrap-filter">
                      <p
                        className="fs-14 fw-600 title-color line-height-17 m-0"
                        style={{ marginBottom: "0.563rem" }}
                      >
                        {/* {singleItem.labelName} */}
                        Priority
                      </p>
                      <div className="filter-column">
                        <Select
                          size="large"
                          placeholder="High"
                          optionFilterProp="children"
                          className="app-select-wrap-class"
                          popupClassName="app-select-popup-wrap-class"
                          style={{ width: "100%" }}
                          // onChange={handleCommonFilterChange}
                          // filterOption={(input: any, option: any) => { (option?.label ?? "").toLowerCase().includes(input.toLowerCase()) }}
                          options={
                            !!optionsPrioritymock &&
                            optionsPrioritymock.map((item: any) => ({
                              value: item?.value,
                              label: item?.label,
                            }))
                          }
                        />
                      </div>
                    </Col>
                  )}
                </Row>
              </Col>
              {( role === ROLES.carer || role === ROLES.client) && (
                <Col xs={24} md={12} lg={8} xl={6} xxl={5} className="wrap-filter">
                  <div
                    className="input-search-wrapper"
                    style={{ marginTop: "25px" }}
                  >
                    <Input
                      placeholder="search"
                      prefix={
                        <img src={Search} alt="search icon" className="icon" />
                      }
                    />
                  </div>
                </Col>
              )}
            </Row>
          </div>
        </Col>

        {(role === ROLES.superAdmin || role === ROLES.instructor || role === ROLES.admin) && (
          <Col className="gutter-row " span={24}>
            <div className="custom-pagination-search">
              <Pagination
                current={pagination.current}
                // responsive={true}
                showSizeChanger={true}
                defaultPageSize={5}
                pageSize={pagination.pageSize}
                rootClassName="custom-pagination-wrapper-class"
                // total={tableData.length}
                // showTotal={(total) => `Total ${total} items`}
                onChange={(current, pageSize) =>
                  setPagination({ current, pageSize })
                }
              />
              <Space className="input-export-icons" size={[30, 0]}>
                <Input
                  className="search-input"
                  placeholder="Search Schedule"
                  prefix={
                    <img
                      src={searchIcon}
                      alt="searchIcon"
                      width={24}
                      height={24}
                      style={{ marginRight: "0.623rem" }}
                    />
                  }
                />
                <Space size={[25, 0]}>
                  <img src={coloredCopyIcon} alt="csv" className="img-hover" />
                  <img src={coloredCsvIcon} alt="csv" className="img-hover" />
                  <img src={coloredXlsIcon} alt="csv" className="img-hover" />
                </Space>
              </Space>
            </div>
          </Col>
        )}

        <Col
          className="gutter-row"
          xs={24}
          sm={12}
          md={11}
          lg={10}
          xl={9}
          xxl={6}
        >
          <div className="bg-white ticket-summary-list card-box-shadow">
            {( role === ROLES.client || role === ROLES.carer) && (
              <ul>
                {ticketsSummaryAdminlList.map((list) => {
                  return (
                    <>
                      <li
                        className="cursor"
                        style={{
                          color:
                            words[4] === list.queryName ? "#52C41A" : "#A0A3BD",
                        }}
                        onClick={() => {
                          handleData(list.list);
                          navigate(
                            `/help/it-help-desk/all-tickets/${list.queryName}`
                          );
                        }}
                      >
                        {list.list}
                        <span>_____________</span>
                        <span
                          className="count"
                          style={{
                            color:
                              words[4] === list.queryName
                                ? "#52C41A"
                                : "#A0A3BD",
                          }}
                        >
                          03
                        </span>
                      </li>
                    </>
                  );
                })}
              </ul>
            )}

            {(role === ROLES.superAdmin || role === ROLES.instructor ||role === ROLES.admin ) && (
              <div className="content-card side-bar-steps">
                <div
                  className="bg-inner-shadow title-color fw-600 fs-14"
                  style={{ padding: "10px", marginBottom: "10px" }}
                >
                  Tickets Count
                </div>
                {ticketsSummaryDetailList.map((item: any, index: any) => (
                  <div
                    className="steps-flex"
                    key={index}
                    onClick={() => {
                      handleData(item.list);
                      navigate(
                        `/help/it-help-desk/all-tickets/${item.queryName}`
                      );
                    }}
                  >
                    <div className="rounded" style={{cursor:"pointer"}}>
                      {stepperValue === item.list && (
                        <div className="inner--selected"></div>
                      )}
                    </div>
                    <div className="steps-content">
                      <span className="list-title">{item.list}</span>
                      {/* <span ></span> */}
                    </div>
                    <span className="count-super-admin">03</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Col>

        <Col
          className="gutter-row"
          xs={24}
          sm={12}
          md={13}
          lg={14}
          xl={15}
          xxl={18}
        >
          <div className="bg-white ticket-summary-list card-box-shadow">
            {(role === ROLES.superAdmin || role === ROLES.instructor  ||ROLES.admin || role === ROLES.carer  || role===ROLES.client || role===ROLES.coordinator)  &&(
              <ItHelpTicketSummaryCommonTable
                ticketsSummaryDetailList={ticketsSummaryDetailList}
                stepperValue={stepperValue}
              />
            )}

            {/* {
              role === "superAdmin" &&
              <ItHelpDeskInstructorCommonTable 
              ticketsSummaryDetailList={ticketsSummaryDetailList}
              stepperValue={stepperValue}
              />
            } */}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ItHelpTicketSummaryDetails;
