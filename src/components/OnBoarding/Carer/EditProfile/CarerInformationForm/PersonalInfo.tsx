
import { Button, Col, DatePicker, Row, Select, Space, Switch, Tooltip } from 'antd'
import { Form, Input } from 'antd';
import "./FormMain.scss";
import Arrow from '../../../../../assets/images/OnBoarding/SelectArrow.svg'
import DateIcon from '../../../../../assets/images/OnBoarding/datePicker.svg';

import { Option } from '../../../CareCordinator/ClientDetails/AllocateNewCareHomeModal';
import '../../../../../shared/DatePickerWrapper/DatePickerWrapper.scss'



{/* <Col xs={24} >
<div >
    <Space>
        <Button className='edit-module-button  audit-button  align-center d-flex'
        >Audit</Button>
        <Button className='edit-module-button bg-orange-color  align-center d-flex '>Save</Button>
        <Button className='edit-module-button   align-center d-flex btn-secondary' >Continue</Button>
    </Space>
</div>
</Col> */}

const PersonalInfo = (props: any) => {
    const { handleSelectedStepValue, auditCheck } = props;

    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
    };
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    }

    const onFinish = (values: any) => {
        console.log('Success:', values);
        // onClick={() => handleSelectedStepValue('Address Details')} 

        values && handleSelectedStepValue('Address Details')
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
        rules: [{ type: 'object' as const, required: true, message: 'Required Field', }],
    };

    return (
        <div className='personal-form-wrapper'>

            <div className='fw-500 fs-20 form-heading-color' style={{ marginBottom: 10 }}>
                Personal Info
            </div>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                // autoComplete="off"
                layout="vertical"
            >
                <Row gutter={[30, 5]} align="bottom">

                    <Col xs={24} sm={24} md={12} lg={10} className='carer-form-input '>
                        <Form.Item
                            label=" First Name"
                            name="firstname"
                            rules={[{ required: true, message: 'Required field' }]}
                        >
                            <Input placeholder="Type here" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={10} className='carer-form-input '>
                        <Form.Item
                            label="Last Name"
                            name="lastName"
                            rules={[{ required: true, message: 'Required field' }]}
                        >
                            <Input placeholder="Type here" />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={10} className='date-picker-wrapper'>

                        <Form.Item name="dateOfBirth" label="Date Of Birth" {...config} style={{ maxWidth: '100%' }}>
                            <DatePicker popupClassName="date-picker-content" suffixIcon={<img src={DateIcon} />} clearIcon={false} />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={10}>
                        <Form.Item
                            label="Gender "
                            name="gender"
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
                            label="Phone Number"
                            name="phoneNumber"
                            rules={[{ required: true, message: 'Required field' }]}
                        >
                            <Input placeholder="Type here" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={10} className='carer-form-input '>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                { required: true, message: 'Required field' },
                                { validator: emailValidator },]}
                        >
                            <Input placeholder="Type here" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={10}>
                        <Form.Item
                            label="Nationality "
                            name="nationality"
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
                            label="Job Applying For "
                            name="jobApplyingFor"
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

                    <Col xs={24} sm={24} md={12} lg={10} className='carer-form-input ' >
                        <Form.Item
                            label="Linkdin ID"
                            name="linkdinId"
                        >
                            <Input placeholder="Type here" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={10} className='carer-form-input '>
                        <Form.Item
                            label="Valid Driving Licence"
                            name="licence"
                        >
                            <Input placeholder="Type here" />
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
                                <Button className='edit-module-button bg-orange-color  align-center d-flex '>Save</Button>
                                <Button className='edit-module-button   align-center d-flex btn-secondary' htmlType='submit'>Continue</Button>
                            </Space>
                        </div>
                    </Col>
                </Row>
            </Form>


        </div >
    )
}

export default PersonalInfo