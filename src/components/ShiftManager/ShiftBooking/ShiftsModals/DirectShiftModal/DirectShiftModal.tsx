import React, { useState } from "react";
import { Col, Form, Input, Modal, Row, Select } from "antd";
import SelectWrapper from "../../../../../shared/SelectWrapper/SelectWrapper";
import SwitchWrapper from "../../../../../shared/SwitchWrapper/SwitchWrapper";
import "./DirectShiftModal.scss";
import DatePickerWrapper from "../../../../../shared/DatePickerWrapper/DatePickerWrapper";
import InputWrapper from "../../../../../shared/InputWrapper/InputWrapper";
import DownArrowIcon from "../../../../../assets/icons/ShiftManger/down-arrow-icon.png";
import FilterIcon from "../../../../../assets/images/manageShift/filterIcon.png";
import AdvanceStaffSearch from "../AdvanceStaffSearch/AdvanceStaffSearch";
import CloseIcon from "../../../../../assets/icons/ShiftManger/close-icon.svg"

const DirectShiftModal = (props: any) => {
  const { isDirectShiftModalOpen, setIsDirectShiftModalOpen } = props;
  const [isAdvanceSearchModalOpen, setIsAdvanceSearchModalOpen] = useState<boolean>(false);
  const [directShiftField, setDirectShiftField] = useState({
    careHome: "",
    shiftDate: "",
    userType: "",
    chooseShift: "",
    startTime: "",
    endTime: "",
    department: "",
    shiftRequestBy: "",
    staffName: "",
    staffAcceptence: false,
    information: "",
    providePONumber: false,
    poNumber: "",
  });
  const [form] = Form.useForm();
  const { TextArea } = Input;

  const careHomeSelect = [{ value: "option", label: "option" }];
  const onFinish = () => { };

  const handleDirectShift = (value: any, type: string) => {
    setDirectShiftField({ ...directShiftField, [type]: value });
  };

  return (
    <>
      <Modal
        title="Direct Book Staff"
        open={isDirectShiftModalOpen}
        onOk={() => setIsDirectShiftModalOpen(false)}
        onCancel={() => setIsDirectShiftModalOpen(false)}
        width="900px"
        className="direct-shift-modal-wrapper"
        centered
        footer={false}
        closeIcon={< img src={CloseIcon} alt="close" />}
      >
        <div className="direct-paragraph">
          <p className="fs-14 fw-400 m-0">This feature should be used only for booking a particular staff member for a shift</p>
        </div>
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Row gutter={[30, 20]} align="middle">
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <SelectWrapper label="Care Home" name="careHome" required={false} placeHolder="Select" disabled={true} options={careHomeSelect} onChange={(e: any) => handleDirectShift(e, "careHome")} />
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="post-shift-fields date-picker-wrap">
              <DatePickerWrapper name="shiftDate" label="When do you need? Shift Date" required={true} onChange={(e: any) => handleDirectShift(e, "shiftDate")} />
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <SelectWrapper label="Choose user type" name="userType" required={true} placeHolder="Select" options={careHomeSelect} onChange={(e: any) => handleDirectShift(e, "userType")} />
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <SelectWrapper label="Choose a shift" name="chooseShift" required={true} placeHolder="Select" options={careHomeSelect} onChange={(e: any) => handleDirectShift(e, "chooseShift")} />
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <SelectWrapper label="Start Time" name="startTime" required={true} placeHolder="Select" options={careHomeSelect} onChange={(e: any) => handleDirectShift(e, "startTime")} />
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <SelectWrapper label="End Time" name="endTime" required={true} placeHolder="Select" options={careHomeSelect} onChange={(e: any) => handleDirectShift(e, "endTime")} />
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <SelectWrapper label="Department" name="department" required={true} placeHolder="Select" options={careHomeSelect} onChange={(e: any) => handleDirectShift(e, "department")} />
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <SelectWrapper
                label="Shift requested by"
                name="shiftRequestBy"
                required={true}
                placeHolder="Select"
                options={careHomeSelect}
                onChange={(e: any) => handleDirectShift(e, "shiftRequestBy")}
              />
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item label="Select a staff name" name="staffNo">
                <div className="staff-wrapper">
                  <Select
                    bordered={false}
                    suffixIcon={<img src={DownArrowIcon} alt="down-arrow" />}
                    placeholder="Select a staff name"
                    size="large"
                    onChange={(value) => {
                      console.log(`selected ${value}`);
                    }}
                    options={[
                      { value: "1", label: "1" },
                      { value: "2", label: "2" },
                      { value: "3", label: "3" },
                    ]}
                  />
                  <span className="filter-icon">
                    <img
                      src={FilterIcon}
                      alt="filter"
                      onClick={() => {
                        setIsAdvanceSearchModalOpen(true);
                        setIsDirectShiftModalOpen(false);
                      }}
                    />
                  </span>
                </div>
              </Form.Item>
              {/* <SelectWrapper label="Select a staff name " name="staffName" required={true} placeHolder="Select" options={careHomeSelect} onChange={(e: any) => handleDirectShift(e, "staffName")} /> */}
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24} >
              <SwitchWrapper name="staffAcceptence" label="Staff acceptence required[Optional]" onChange={(e: any) => handleDirectShift(e, "staffAcceptence")} />
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="post-shift-fields ">
              <Form.Item label={"Optional Information, if any."} name={["information"]} rules={[{ message: "Required Field", required: false }]}>
                <TextArea rows={4} placeholder="Type here" maxLength={6} onChange={(e: any) => handleDirectShift(e, "information")} />
              </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <SwitchWrapper name="providePONumber" label="Provide PO Number?" onChange={(e: any) => handleDirectShift(e, "providePONumber")} />
            </Col>
            {directShiftField?.providePONumber === true && (
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <InputWrapper label="PO Number" name="poNumber" placeHolder="Enter Here" onChange={(e: any) => handleDirectShift(e, "poNumber")} />
              </Col>
            )}
          </Row>
          <div className="direct-shift-btn d-flex align-center">
            <button type="button" className="close-btn cursor-pointer fs-16 line-height-22 white-color fw-600" onClick={() => setIsDirectShiftModalOpen(false)}>
              Cancel
            </button>
            <button type="submit" className="book-btn cursor-pointer fs-16 line-height-22 white-color fw-600">
              Book Staff
            </button>
          </div>
        </Form>
      </Modal>
      <AdvanceStaffSearch isAdvanceSearchModalOpen={isAdvanceSearchModalOpen} setIsAdvanceSearchModalOpen={setIsAdvanceSearchModalOpen} />
    </>
  );
};

export default DirectShiftModal;
