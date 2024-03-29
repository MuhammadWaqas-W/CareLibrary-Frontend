import { Button, Col, DatePicker, Form, Input, Row, Select, Space, Switch, Tooltip } from 'antd'
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react'
import infoIcon from "../../../../../assets/icons/info-icon.svg";
import { Option } from '../../../CareCordinator/ClientDetails/AllocateNewCareHomeModal';
import './FormMain.scss';
import Arrow from '../../../../../assets/images/OnBoarding/SelectArrow.svg';
import DateIcon from '../../../../../assets/images/OnBoarding/datePicker.svg';
import '../../../../../shared/DatePickerWrapper/DatePickerWrapper.scss'
import UploadImage from '../../../../Setting/SettingKeyInfo/UploadImage/UploadImage';


const BackGroundDBS = (props: any) => {
    const { handleSelectedStepValue, auditCheck } = props;
    const [validCandidate, setValidCandidate] = useState(null);
    const onFinish = (values: any) => {
        console.log('Success:', values);
        values && handleSelectedStepValue('Right to Work')

    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const handleSelectChange = (value: any) => {
        setValidCandidate(value);
    };


    return (
        <div className='personal-form-wrapper'>

            <Space>
                <span className='fw-600 fs-20' > DBS</span>
                <Tooltip placement="bottomLeft" color="#65CDF0" overlayInnerStyle={{
                    width: "399px",
                }} title="The candidate is requested to provide an Enhanced DBS Certificate">
                    <img src={infoIcon} alt="infoIcon" className='d-flex align-center' />
                </Tooltip>
            </Space>

            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                // autoComplete="off"
                layout="vertical"
            >
                <Row gutter={[20, 15]}>

                    <Col xs={24} sm={24} md={12} lg={10} className='carer-form-input '>
                        <div className='allocate-select' >
                            <Form.Item name="validDBS " label="Does the candidate have a valid Enhanced DBS?" style={{ maxWidth: '100%' }}>
                                <Select style={{ width: '100%' }} placeholder="Selected option" suffixIcon={<img src={Arrow} />} value={validCandidate} onChange={handleSelectChange}>
                                    <Option value="Yes">Yes</Option>
                                    <Option value="No"> No</Option>
                                </Select>
                            </Form.Item>
                        </div>
                    </Col>
                    {validCandidate === 'Yes' && <Col xs={24} sm={24} md={12} lg={10} className='carer-form-input '>
                        <Form.Item
                            label="DBS (PVG) Certificate Number "
                            name="certificateNumber"  >
                            <Input placeholder="Type here" />
                        </Form.Item>
                    </Col>}
                    {validCandidate === 'Yes' && <Col xs={24} sm={24} md={12} lg={10} className='date-picker-wrapper'>
                        <Form.Item name="issueDate" label="DBS (PVG) Issue Date Date" style={{ maxWidth: '100%' }}>
                            <DatePicker popupClassName="date-picker-content" suffixIcon={<img src={DateIcon} />} clearIcon={false} />
                        </Form.Item>
                    </Col>}
                    {validCandidate === 'Yes' && <Col xs={24} sm={24} md={12} lg={10} className='carer-form-input '>
                        <Form.Item
                            label="Is DBS (PVG) online ?  "
                            name="isDBSonline ? "
                            className='allocate-select' >
                            <Select placeholder="Selected option" suffixIcon={<img src={Arrow} />}>
                                <Option value="Yes">Yes</Option>
                                <Option value="No">No</Option>
                            </Select>
                        </Form.Item>
                    </Col>}
                    {validCandidate === 'Yes' && <Col xs={24} sm={24} md={12} lg={10} className='carer-form-input '>
                        <Form.Item
                            label="DBS (PVG) Update Service No. "
                            name="serviceNo">
                            <Input placeholder="Type here" />
                        </Form.Item>
                    </Col>}

                    {validCandidate === 'No' && <Col xs={24} className='carer-form-input '>
                        <Space direction='vertical' size={5}>
                            <span className=' title-color fw-400 fs-14'>Please follow the following link to initiate for DBS Application process:</span>
                            <span className='secondary-color fw-400 fs-14'> https://checkmydbs.co.uk</span>

                        </Space>
                    </Col>}
                    {validCandidate === 'Yes' && <Col xs={21}>
                        <span className='fw-600 fs-20' > Upload Certificate</span>
                    </Col>}

                    {validCandidate === 'Yes' && <Col xs={21}>
                        <UploadImage id="" />
                    </Col>}

                    <Col xs={24} >
                        <div >
                            <Space className='carer-buttons'>
                                {validCandidate && auditCheck && <Tooltip
                                    autoAdjustOverflow={true}
                                    showArrow={false}
                                    placement="bottomLeft" color="#65CDF0"
                                    title='Click to mark as audit'
                                >

                                    <Button className='edit-module-button  audit-button  align-center d-flex' >Audit</Button>
                                </Tooltip>}
                                {validCandidate && <Button className='edit-module-button bg-orange-color  align-center d-flex ' htmlType='submit'>Save</Button>}
                                <Button className='edit-module-button   align-center d-flex btn-secondary' htmlType='submit'>Continue</Button>
                            </Space>
                        </div>
                    </Col>


                </Row>
            </Form>

        </div>
    )
}

export default BackGroundDBS