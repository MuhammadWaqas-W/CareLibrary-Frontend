import { Col, Row, Space, Tooltip } from 'antd'
import React, { useState } from 'react'
import infoIcon from "../../../../../assets/icons/info-icon.svg";
import { Button, DatePicker, Select, } from 'antd'
import { Form, Input } from 'antd';
import "./FormMain.scss";
import Arrow from '../../../../../assets/images/OnBoarding/SelectArrow.svg'
import DateIcon from '../../../../../assets/images/OnBoarding/datePicker.svg';

import { Option } from '../../../CareCordinator/ClientDetails/AllocateNewCareHomeModal';
import '../../../../../shared/DatePickerWrapper/DatePickerWrapper.scss'
import { Link } from 'react-router-dom';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import UploadImage from '../../../../Setting/SettingKeyInfo/UploadImage/UploadImage';


const RightToWork = (props: any) => {
    const { handleSelectedStepValue, setActivePanelKey, conditionalPath,auditCheck  } = props;
    const [value, setValue] = useState(false);

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
        // props.onChildStateChange(props.selectedStepValue + 1)
        conditionalPath ? handleSelectedStepValue('Employment Status') : handleSelectedStepValue('Next Of Kin')
        setActivePanelKey('Other Information')
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const config = {
        rules: [{ type: 'object' as const, required: true, message: 'Required Field', }],
    };
    return (
        <div >
            <Row>
                <Col xs={24}>
                    <Space>
                        <span className='fw-600 fs-20' > Right to Work</span>
                        <Tooltip placement="bottomLeft" color="#65CDF0" overlayInnerStyle={{
                            width: "499px",
                        }} title="For all candidates with nationalities other than UK, the system will ask to confirm their right to work (RTW) in the UK by collecting the following details so you can perform your checks.">
                            <img src={infoIcon} alt="infoIcon" className='d-flex align-center' />
                        </Tooltip>
                    </Space>
                </Col>

            </Row>

            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                // autoComplete="off"
                layout="vertical"
                className='personal-form-wrapper'
            >
                <Row gutter={[30, 5]} align="bottom">

                    <Col xs={24} sm={24} md={12} lg={10} className='carer-form-input '>
                        <Form.Item
                            label="Does the candidate have the right to work in UK?"
                            name=""
                        >
                            <Radio.Group onChange={onChange} value={value} defaultValue={false} >
                                <Radio value={true}>Yes</Radio>
                                <Radio value={false}>No</Radio>

                            </Radio.Group>
                        </Form.Item>

                    </Col>
                    {value && <Col xs={24} sm={24} md={12} lg={10}>
                        <Form.Item
                            label="Visa Type "
                            name="visaType"
                            rules={[{ required: true, message: 'Required field' }]}
                            className='allocate-select'
                        >
                            <Select placeholder="Select Visa Type" suffixIcon={<img src={Arrow} />}>
                                <Option value="Biometric">Biometric</Option>
                                <Option value="British Passport ">British Passport</Option>
                                <Option value="EU Citizen ">EU Citizen </Option>
                            </Select>
                        </Form.Item>

                    </Col>}

                    {value && <Col xs={24} sm={24} md={12} lg={10} className='carer-form-input '>
                        <Form.Item
                            label="Visa / BRP Number"
                            name="Visa/BRP Number"
                            rules={[{ required: true, message: 'Required field' }]}
                        >
                            <Input placeholder="Type here" />
                        </Form.Item>
                    </Col>}

                    {value && <Col xs={24} sm={24} md={12} lg={10} className='date-picker-wrapper'>

                        <Form.Item name="Visa/BrpExpiryDate" label="Visa / BRP Expiry Date" {...config} style={{ maxWidth: '100%' }}>
                            <DatePicker popupClassName="date-picker-content" suffixIcon={<img src={DateIcon} />} clearIcon={false} />
                        </Form.Item>
                    </Col>}



                    {value && <Col xs={24} sm={24} md={12} lg={10} className='carer-form-input '>
                        <Form.Item
                            label="Share Code"
                            name="shareCode"
                            rules={[{ required: true, message: 'Required field' }]}
                        >
                            <Input placeholder="Type here" />
                        </Form.Item>
                    </Col>}
                    {value && <Col xs={24} sm={24} md={12} lg={10} className='d-flex align-center' >
                        <Form.Item
                            label=""
                            name=""
                        >
                            <Space >
                                <Link to={'https://www.gov.uk/view-right-to-work'} className='secondary-color'>View Right to Work</Link>
                                <Link to={' https://www.gov.uk/prove-right-to-work'} className='secondary-color'>Prove Right to Work</Link>
                            </Space>
                        </Form.Item>

                    </Col>}
                    {value && <Col xs={24} lg={21}  ><span className='fw-500 fs-20'>Upload File</span></Col>}
                    {value && <Col xs={24} lg={21}  >

                        <UploadImage id="" />

                    </Col>}
                    <Col xs={24} >
                        <div >
                            <Space className='carer-buttons'>
                            {  auditCheck &&  <Tooltip
                                        autoAdjustOverflow={true}
                                        showArrow={false}
                                        placement="bottomLeft" color="#65CDF0"
                                        title='Click to mark as audit'
                                    >

                                        <Button className='edit-module-button  audit-button  align-center d-flex' >Audit</Button>
                                    </Tooltip>}
                                <Button className='edit-module-button bg-orange-color  align-center d-flex ' >Save</Button>
                                <Button className='edit-module-button   align-center d-flex btn-secondary' htmlType='submit'>Continue</Button>
                            </Space>
                        </div>
                    </Col>
                </Row>
            </Form>



        </div>
    )
}

export default RightToWork