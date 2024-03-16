import { Button, Col, DatePicker, Row, Space, Switch, Form, Tooltip } from 'antd'
import "./FormMain.scss";
import DateIcon from '../../../../../assets/images/OnBoarding/datePicker.svg';
import '../../../../../shared/DatePickerWrapper/DatePickerWrapper.scss'
import infoIcon from "../../../../../assets/icons/info-icon.svg";
import { useState } from 'react';
import UploadImage from '../../../../Setting/SettingKeyInfo/UploadImage/UploadImage';

const TraingingCertificates = (props: any) => {
    const { handleSelectedStepValue, auditCheck } = props;
    const onChange = (checked: boolean) => {
        console.log(checked);

    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
        values && handleSelectedStepValue('Addtional Training Details')
        // props.onChildStateChange(props.selectedStepValue + 1)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    const emailValidator = (rule: any, value: any, callback: any) => {
        if (!value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            callback();
        } else {
            callback('Please enter a valid email address');
        }
    };
    const config = {
        rules: [{ type: 'object' as const, required: true, message: 'Please select time!' }],
    };
    return (
        <div className='personal-form-wrapper ' >
            <div style={{ marginBottom: 10 }}>
                <Space>
                    <span className='fw-500 fs-20 form-heading-color'>
                        Training Certificates
                    </span>
                    <Tooltip placement="bottomLeft" color="#65CDF0" overlayInnerStyle={{
                        width: "499px",
                    }} title="The following training list can be customised and changed from Setting> Staff Settings> Define Mendatory Training.">
                        <img src={infoIcon} alt="infoIcon" className='d-flex align-center' />
                    </Tooltip>
                </Space>
            </div>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                // autoComplete="off"
                layout="vertical"
            >

                <Row gutter={[30, 0]} align="bottom">
                    <Col xs={24} >
                        <Form.Item name="switch" label="" >
                            <Space>

                                <Switch onChange={onChange} />
                                <span className='fw-400 fs-14 label-color'>Physically Audited And No Document Uploaded</span>
                            </Space>

                        </Form.Item>
                    </Col>
                    <Col xs={24} >
                        <Form.Item name="switch" label="" >
                            <span className='fw-600 fs-14 title-color' >Did you require further training (online or in person) ?</span>

                        </Form.Item>
                    </Col>

                    <Col xs={24} >
                        <Form.Item name="switch" label="" >
                            <Space>

                                <Switch onChange={onChange} />
                                <span className='fw-400 fs-14 label-color'> Yes</span>
                            </Space>

                        </Form.Item>
                    </Col>
                    <Col xs={24} >
                        <Form.Item name="switch" label="" >
                            <Space>

                                <Switch onChange={onChange} />
                                <span className='fw-400 fs-14 label-color'>No</span>
                            </Space>

                        </Form.Item>
                    </Col>
                    <Col xs={24} >
                        <Form.Item name="switch" label="" >
                            <span className='fw-600 fs-14 title-color' >Please choose the following options for :</span>
                        </Form.Item>
                    </Col>


                    <Col xs={24} >
                        <Form.Item name="switch" label="" >
                            <Space>

                                <Switch onChange={onChange} />
                                <span className='fw-400 fs-14 label-color'>Single certificate covering multiple trainings.</span>
                            </Space>

                        </Form.Item>
                    </Col>

                    <Col xs={24} >
                        <Form.Item name="switch" label="" >
                            <Space>

                                <Switch onChange={onChange} />
                                <span className='fw-400 fs-14 label-color'>Individual training certificates, as the case may be.</span>
                            </Space>
                        </Form.Item>
                    </Col>
                    <Col xs={24} style={{ marginBottom: "5px" }}>

                        <Space>
                            <span className='fw-500 fs-20 form-heading-color'>
                                Upload Certificate
                            </span>
                            <Tooltip placement="bottomLeft" color="#65CDF0" overlayInnerStyle={{
                                width: "499px",
                            }} title="Please make sure you upload Image or Pdf">
                                <img src={infoIcon} alt="infoIcon" className='d-flex align-center' />
                            </Tooltip>
                        </Space>


                    </Col>
                    <Col xs={21}>
                        <UploadImage id="" />
                    </Col>



                    <Col xs={24} sm={24} md={12} lg={10} className='date-picker-wrapper'>
                        <Form.Item name="certificateIssued" label="When was the certificate Issued" {...config} style={{ maxWidth: '100%' }}>
                            <DatePicker popupClassName="date-picker-content" suffixIcon={<img src={DateIcon} />} clearIcon={false} />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={10} className='date-picker-wrapper'>
                        <Form.Item name="cerficateExpiry" label="Certificate Expiry Date" {...config} style={{ maxWidth: '100%' }}>
                            <DatePicker popupClassName="date-picker-content" suffixIcon={<img src={DateIcon} />} clearIcon={false} />
                        </Form.Item>
                    </Col>


                    <Col xs={24} >
                        <div >
                            <Space className='carer-buttons'>

                                {auditCheck && <Tooltip
                                    autoAdjustOverflow={true}
                                    showArrow={false}
                                    placement="bottomLeft" color="#65CDF0"
                                    title='Click to mark as audit'
                                >

                                    <Button className='edit-module-button  audit-button  align-center d-flex' >Audit</Button>
                                </Tooltip>}
                                <Button className='edit-module-button bg-orange-color  align-center d-flex ' htmlType='submit'>Save</Button>
                                <Button className='edit-module-button   align-center d-flex btn-secondary' htmlType='submit'>Continue</Button>
                            </Space>
                        </div>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default TraingingCertificates