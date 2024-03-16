
import { Button, Col, DatePicker, Row, Select, Space, Switch, Form, Input, Tooltip } from 'antd'
import "./FormMain.scss";
import Arrow from '../../../../../assets/images/OnBoarding/SelectArrow.svg'
import { Option } from '../../../CareCordinator/ClientDetails/AllocateNewCareHomeModal';
import DateIcon from '../../../../../assets/images/OnBoarding/datePicker.svg';
import '../../../../../shared/DatePickerWrapper/DatePickerWrapper.scss'
import { useState } from 'react';
import UploadImage from '../../../../Setting/SettingKeyInfo/UploadImage/UploadImage';
import infoIcon from "../../../../../assets/icons/info-icon.svg";



const AddressDetails = (props: any) => {
    const { handleSelectedStepValue, auditCheck } = props;
    const [isShowDate, setIsShowDate] = useState(false)
    const onChange = (checked: boolean) => {
        setIsShowDate(checked)
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
        values && handleSelectedStepValue('Photo for ID Badge')
        // props.onChildStateChange(props.selectedStepValue + 1)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    const config = {
        rules: [{ type: 'object' as const, required: true, message: 'Please select time!' }],
    };
    return (
        <div className='personal-form-wrapper ' >
            <div className='fw-500 fs-20 form-heading-color' style={{ marginBottom: 10 }}>
                Address Details
            </div>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                // autoComplete="off"
                layout="vertical"
            >

                <Row gutter={[35, 5]} align="bottom">
                    <Col xs={24} sm={24} md={12} lg={10} className='carer-form-input '>
                        <Form.Item
                            label="Address First Line"
                            name="addressFirstLine"

                            rules={[{ required: true, message: 'Required field' }]}
                        >
                            <Input placeholder="Type here" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={10} className='carer-form-input '>
                        <Form.Item
                            label="Address Second Line"
                            name="addressSecondLine"

                        >
                            <Input placeholder="Type here" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={10} className='carer-form-input '>
                        <Form.Item
                            label="Country "
                            name="country"
                            rules={[{ required: true, message: 'Required field' }]}
                            className='allocate-select'
                        >
                            <Select placeholder="Selected option" suffixIcon={<img src={Arrow} />}>
                                <Option value="option1">Option 1</Option>
                                <Option value="option2">Option 2</Option>
                                <Option value="option3">Option 3</Option>
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={10}>
                        <Form.Item
                            label="Gender "
                            name="gender"

                            className='allocate-select'
                        >
                            <Select placeholder="Selected option" suffixIcon={<img src={Arrow} />}>
                                <Option value="option1">Option 1</Option>
                                <Option value="option2">Option 2</Option>
                                <Option value="option3">Option 3</Option>
                            </Select>
                        </Form.Item>

                    </Col>
                    <Col xs={24} sm={24} md={12} lg={10} className='carer-form-input '>
                        <Form.Item
                            label="Town/City "
                            name="town/city"
                            rules={[{ required: true, message: 'Required field' }]}
                            className='allocate-select'
                        >
                            <Select placeholder="Selected option" suffixIcon={<img src={Arrow} />}>
                                <Option value="option1">Option 1</Option>
                                <Option value="option2">Option 2</Option>
                                <Option value="option3">Option 3</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={10} className='carer-form-input '>
                        <Form.Item
                            label="Post Code "
                            name="postCode"
                            rules={[{ required: true, message: 'Required field' }]}
                            className='allocate-select'
                        >
                            <Select placeholder="Selected option" suffixIcon={<img src={Arrow} />}>
                                <Option value="option1">Option 1</Option>
                                <Option value="option2">Option 2</Option>
                                <Option value="option3">Option 3</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} >
                        <span className='fw-600 fs-14 title-color' >How long the candidate lived in this address?</span>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={10} className='date-picker-wrapper'>
                        <Form.Item name="FromDate" label="From Date" {...config} style={{ maxWidth: '100%' }}>
                            <DatePicker popupClassName="date-picker-content" suffixIcon={<img src={DateIcon} />} clearIcon={false} />
                        </Form.Item>
                    </Col>

                    {!isShowDate && <Col xs={24} sm={24} md={12} lg={10} className='date-picker-wrapper'>
                        <Form.Item name="ToDate" label="To Date" {...config} style={{ maxWidth: '100%' }}>
                            <DatePicker popupClassName="date-picker-content" suffixIcon={<img src={DateIcon} />} clearIcon={false} />
                        </Form.Item>

                    </Col>}

                    <Col xs={24} >
                        <Form.Item name="switch" label="" >
                            <Space>

                                <Switch onChange={onChange} />
                                <span className='fw-600 fs-14 label-color'>This is the current address</span>
                            </Space>

                        </Form.Item>
                    </Col>

                    <Col xs={24} >

                        <Space>
                            <span className='fw-500 fs-20 form-heading-color'>
                                Required Docmuent
                            </span>
                            <Tooltip placement="bottomLeft" color="#65CDF0" overlayInnerStyle={{
                                width: "499px",
                            }} title="These are extra documents (that may not be included in any of the above sections). You can customise this from Settings> Staff Settings> Define Required Documents.">
                                <img src={infoIcon} alt="infoIcon" className='d-flex align-center' />
                            </Tooltip>
                        </Space>

                    </Col>
                    <Col xs={24} lg={21}>
                        <UploadImage id="" />
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

export default AddressDetails