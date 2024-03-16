import React from "react";
import { Col, Form, Modal, Row } from "antd";
import dayjs from "dayjs";
import DatePickerWrapper from "../../../../../shared/DatePickerWrapper/DatePickerWrapper";
import SelectWrapper from "../../../../../shared/SelectWrapper/SelectWrapper";
// import SwitchWrapper from "../../../../../shared/SwitchWrapper/SwitchWrapper";
import "./AllocateShift.scss";
import ViewPreferences from "./ViewPreferences";
import SwitchWrapper from "../../../../../shared/SwitchWrapper/SwitchWrapper";
import TextArea from "antd/es/input/TextArea";
import InputWrapper from "../../../../../shared/InputWrapper/InputWrapper";
import CloseIcon from "../../../../../assets/icons/ShiftManger/close-icon.svg"

const AllocateShift = (props: any) => {
    const { open, onCancel, handleChange, allocateShift} = props;
   
    const [form] = Form.useForm();

    const onFinish = () => { };

    
    return (
        <>
            <Modal title="Allocate Staff" open={open} footer={false} onCancel={onCancel} className="booking-allocate-modal-wrapper" width={890} centered closeIcon={< img src={CloseIcon} alt="close" />}>
                <p className="allocate-paragraph light-black-color fw-400 line-height-22 m-0">This feature should be used only for booking a particular staff member for a shift</p>
                <div className="allocate-modal-content">
                    <Form layout="vertical" onFinish={onFinish} form={form}>
                        <Row gutter={[30, 20]} align="middle">
                            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="post-shift-fields">
                                <SelectWrapper
                                    label="Care Home"
                                    name="careHome"
                                    required={false}
                                    placeHolder="Select"
                                    disabled={true}
                                    defaultValue={"Arlington Manor"}
                                    options={[]}
                                    onChange={(e: any) => handleChange(e, "careHome")}
                                />
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="post-shift-fields date-picker-wrap">
                                <DatePickerWrapper
                                    name="shiftDate"
                                    label="Shift Date"
                                    required={true}
                                    onChange={(e: any) => handleChange(dayjs(e).format("YYYY-MM-DD"), "shiftDate")}
                                />
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="post-shift-fields">
                                <SelectWrapper
                                    label="Choose user type"
                                    name="userType"
                                    required={true}
                                    placeHolder="Select"
                                    options={[]}
                                    onChange={(e: any) => handleChange(e, "userType")}
                                />
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="post-shift-fields">
                                <SelectWrapper
                                    label="Choose a shift"
                                    name="chooseShift"
                                    required={true}
                                    placeHolder="Select"
                                    options={[]}
                                    onChange={(e: any) => handleChange(e, "chooseShift")}
                                />
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="post-shift-fields">
                                <SelectWrapper
                                    label="Start Time"
                                    name="startTime"
                                    required={true}
                                    placeHolder="Select"
                                    options={[]}
                                    onChange={(e: any) => handleChange(e, "startTime")}
                                />
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="post-shift-fields">
                                <SelectWrapper
                                    label="End Time"
                                    name="endTime"
                                    required={true}
                                    placeHolder="Select"
                                    options={[]}
                                    onChange={(e: any) => handleChange(e, "endTime")}
                                />
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="post-shift-fields">
                                <SelectWrapper
                                    label="Department"
                                    name="department"
                                    required={true}
                                    placeHolder="Select"
                                    options={[]}
                                    onChange={(e: any) => handleChange(e, "department")}
                                />
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="post-shift-fields">
                                <SelectWrapper
                                    label="Shift requested by"
                                    name="requestedBy"
                                    required={true}
                                    placeHolder="Select"
                                    options={[]}
                                    onChange={(e: any) => handleChange(e, "requestedBy")}
                                />
                            </Col>
                            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                                <ViewPreferences />
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="post-shift-fields">
                                <SelectWrapper
                                    label="Select Staff Name"
                                    name="staffName"
                                    required={true}
                                    placeHolder="Select"
                                    options={[]}
                                    onChange={(e: any) => handleChange(e, "staffName")}
                                />
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="post-shift-fields">
                                <SwitchWrapper name="acceptence" label="Staff acceptence required[Optional]" onChange={(e: any) => handleChange(e, "acceptence")} required={false} />
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="post-shift-fields ">
                                <Form.Item label={"Optional Information, if any."} name={["information"]} rules={[{ message: "Required Field", required: false }]}>
                                    <TextArea
                                        rows={4}
                                        placeholder="Type here"
                                        maxLength={6}
                                        onChange={(e: any) => handleChange(e, "information")} />
                                </Form.Item>
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="post-shift-fields">
                                <SwitchWrapper
                                    name="provideNumber"
                                    label="Provide PO Number?"
                                    onChange={(e: any) => handleChange(e, "provideNumber")} />
                            </Col>
                            {allocateShift.provideNumber === true &&
                                <Col xl={12} lg={12} md={12} sm={24} xs={24} className="post-shift-fields">
                                    <InputWrapper
                                        name="orderNumber"
                                        defaultValue={["Enter Purchase Order Number"]}
                                        label="Enter Purchase Order Number"
                                        disabled={true}
                                        onChange={(e: any) => handleChange(e, "orderNumber")}
                                    />
                                </Col>
                            }
                        </Row>
                        <div className="allocate-shift-btn d-flex align-center">
                            <button
                                type="button"
                                className="cancel-btn cursor-pointer fs-16 line-height-22 white-color fw-600"
                                onClick={() => {
                                    form.resetFields();
                                }}
                            >
                                Cancel
                            </button>
                            <button type="submit" className="save-btn cursor-pointer fs-16 line-height-22 white-color fw-600">
                                Book Staff
                            </button>
                        </div>
                    </Form>
                </div>
            </Modal>
        </>
    );
};

export default AllocateShift;
