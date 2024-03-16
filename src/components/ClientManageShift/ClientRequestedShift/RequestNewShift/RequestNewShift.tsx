import { Form, Modal, Row, Col } from 'antd';
import React from 'react';
import SelectWrapper from '../../../../shared/SelectWrapper/SelectWrapper';
import SwitchWrapper from '../../../../shared/SwitchWrapper/SwitchWrapper';

type IRequestType = {
    isRequestNewShift: boolean;
    setIsRequestNewShift: React.Dispatch<React.SetStateAction<boolean>>
}

const RequestNewShift = (props: IRequestType) => {
    const { isRequestNewShift, setIsRequestNewShift } = props;
    const [form] = Form.useForm();
    const onFinish = () => { }
    const handleChange = (e: any) => { }
    return (
        <>
            <Modal title="Request Shift" open={isRequestNewShift} onCancel={() => setIsRequestNewShift(false)} className="request-new-shift-wrapper" width={800} footer={false}>
                <div className='care-booking-content'>
                    <div className='cancel-shift-modal-content'>
                        <Form layout="vertical" onFinish={onFinish} form={form}>
                            <Row gutter={[30, 20]} align="middle">
                                <Col xl={12} lg={12} md={12} sm={24} xs={24} className="request-shift-fields">
                                    <SelectWrapper
                                        label="Select Shift Date"
                                        name="shiftDate"
                                        required={true}
                                        placeHolder="Selected Option"
                                        options={[]}
                                        onChange={(e: any) => handleChange(e)}
                                    />
                                </Col>
                                <Col xl={12} lg={12} md={12} sm={24} xs={24} className="request-shift-fields">
                                    <SelectWrapper
                                        label="Select Carer type"
                                        name="carerType"
                                        required={true}
                                        placeHolder="Selected Option"
                                        options={[]}
                                        onChange={(e: any) => handleChange(e)}
                                    />
                                </Col>
                                <Col xl={12} lg={12} md={12} sm={24} xs={24} className="request-shift-fields">
                                    <SelectWrapper
                                        label="Department"
                                        name="carerType"
                                        required={true}
                                        placeHolder="Selected Option"
                                        options={[]}
                                        onChange={(e: any) => handleChange(e)}
                                    />
                                </Col>
                                <Col xl={12} lg={12} md={12} sm={24} xs={24} className="request-shift-fields">
                                    <SelectWrapper
                                        label="Select Shift "
                                        name="carerType"
                                        required={true}
                                        placeHolder="Selected Option"
                                        options={[]}
                                        onChange={(e: any) => handleChange(e)}
                                    />
                                </Col>
                                <Col xl={12} lg={12} md={12} sm={24} xs={24} className="request-shift-fields">
                                    <SelectWrapper
                                        label="Number of Staff Requied"
                                        name="carerType"
                                        required={true}
                                        placeHolder="Selected Option"
                                        options={[]}
                                        onChange={(e: any) => handleChange(e)}
                                    />
                                </Col>
                                <Col xl={24} lg={24} md={24} sm={24} xs={24} className="request-shift-fields">
                                    <div className='shift-duration'>
                                        <h2 className='fs-14 fw-600 line-height-17 m-0 label-color'>Shift Duration:</h2>
                                    </div>
                                </Col>
                                <Col xl={12} lg={12} md={12} sm={24} xs={24} className="request-shift-fields">
                                    <SelectWrapper
                                        label="Start Time"
                                        name="startTime"
                                        required={true}
                                        placeHolder="Select Time"
                                        options={[]}
                                        onChange={(e: any) => handleChange(e)}
                                    />
                                </Col>
                                <Col xl={12} lg={12} md={12} sm={24} xs={24} className="request-shift-fields">
                                    <SelectWrapper
                                        label="End Time"
                                        name="endTime"
                                        required={true}
                                        placeHolder="Select Time"
                                        options={[]}
                                        onChange={(e: any) => handleChange(e)}
                                    />
                                </Col>
                                <Col xl={12} lg={12} md={12} sm={24} xs={24} className="request-shift-fields">
                                    <SelectWrapper
                                        label="Number of Staff Required"
                                        name="staffRequired"
                                        required={true}
                                        placeHolder="Selected Option"
                                        options={[]}
                                        onChange={(e: any) => handleChange(e)}
                                    />
                                </Col>
                                <Col xl={24} lg={24} md={24} sm={24} xs={24} className="request-shift-fields">
                                    <div className='turn-preferences'>
                                        <SwitchWrapper
                                            name=""
                                            label="Turn on Preferences"
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <div className="request-shift-btn d-flex align-center">
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
                                    Save
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default RequestNewShift