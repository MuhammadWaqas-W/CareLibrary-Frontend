import { Button, Col, Row, Select, Switch, Tooltip } from 'antd'
import { Form, Input } from 'antd';
import infoIcon from "../../../../assets/icons/info-icon.svg"
import arrowDown from "../../../../assets/icons/arrow-down-icon.svg"
import "./ClientManagerForm.scss"
import FormLowerButtons from './FormLowerButtons/FormLowerButtons';

const { Option } = Select;

const ClientProfileInfoForm = (props: any) => {

    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
    };
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    }
    const onFinish = (values: any) => {
        console.log('Success:', values);
        props.onChildStateChange(props.selectedStepValue + 1)
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    // Email Validation 
    const emailValidator = (rule: any, value: any, callback: any) => {
        if (!value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            callback();
        } else {
            callback('Please enter a valid email address');
        }
    };

    return (
        <div className='client-manager-information-form-wrapper'>
            <div className='form-heading heading-flex'>Client Profile Information
                <Tooltip
                    placement="bottomLeft"
                    autoAdjustOverflow={true}
                    showArrow={false}
                    color="#65CDF0"
                    overlayInnerStyle={{
                        backgroundColor: "#65CDF0",
                        color: "#ffffff",
                        width: "499px",
                    }}
                    title='You can add basic information about your client here.'
                >
                    <img src={infoIcon} alt="infoIcon" />
                </Tooltip>
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
                    <Col xs={24} sm={24} md={12} lg={10}>
                        <Form.Item
                            label="Client Name"
                            name="clientName"
                            rules={[{ required: true, message: 'Required field' }]}
                        >
                            <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={10}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                { required: true, message: 'Required field' },
                                { validator: emailValidator },]}
                        >
                            <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            name="email"
                            rules={[{ required: false, message: 'Required field' }]}
                        >
                            <div className='form--label'>
                                <label htmlFor="">Email Notification Setting</label>
                                <p className='m--0 d--flex' style={{ marginTop: '11px' }}><Switch defaultChecked onChange={onChange} />&nbsp;&nbsp;Do you want Email notification to be turned on for this client? </p>
                                {/* <SwitchWrapper name='emailNotificationSettings' onChange={onChange} label="Do you want Email notification to be turned on for this client?"/> */}
                            </div>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={10}>
                        <Form.Item
                            label="Mobile Number"
                            name="mobileNumber"
                            rules={[
                                { required: true, message: 'Required field' },
                                //  {pattern: /^\d{11}$/, message: 'Please enter a valid 11-digit phone number!',}
                            ]}
                        >
                            <Input type='number' placeholder="Type here" style={{ width: '100%', height: '45px' }} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={10}>
                        <Form.Item
                            label="Additional Phone "
                            name="additionalPhone "
                            rules={[{ required: false, message: 'Required field' }]}
                        >
                            <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={10}>
                        <Form.Item
                            label="Business Name"
                            name="businessName"
                            rules={[{ required: true, message: 'Required field' }]}
                        >
                            <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={10}>
                        <Form.Item
                            label="Client Type"
                            name="clientType"
                            rules={[{ required: true, message: 'Required field' }]}
                        >
                            <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={10}>
                        <Form.Item
                            label="CPart of a group? "
                            name="cPartOfGroup?"
                            rules={[{ required: false, message: 'Required field' }]}

                        >
                            <Select placeholder="Select an option" onChange={handleChange} suffixIcon={<img src={arrowDown} />}>
                                <Option value="option1">Option 1</Option>
                                <Option value="option2">Option 2</Option>
                                <Option value="option3">Option 3</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <FormLowerButtons/>
            </Form>



        </div>
    )
}

export default ClientProfileInfoForm