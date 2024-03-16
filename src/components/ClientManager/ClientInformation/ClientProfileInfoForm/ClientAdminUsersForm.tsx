import { Button, Col, Row, Select, Switch, Tooltip } from 'antd'
import { Form, Input } from 'antd';
import infoIcon from "../../../../assets/icons/info-icon.svg"
import arrowDown from "../../../../assets/icons/arrow-down-icon.svg"
import "./ClientManagerForm.scss"
import FormLowerButtons from './FormLowerButtons/FormLowerButtons';

const { Option } = Select;



const ClientAdminUsersForm = (props: any) => {

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

    return (
        <div className='client-manager-information-form-wrapper'>
            <div className='form-heading heading-flex'>Client Admin Users
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
                    title='If your clients use the client portalor client mobile apps, you can add additional client admins here. They can post and sign off shifts.'
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
                            label="First Name"
                            name="firstName"
                            rules={[{ required: true, message: 'Required field' }]}
                        >
                            <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={10}>
                        <Form.Item
                            label="LastName"
                            name="lastName"
                            rules={[{ required: true, message: 'Required field' }]}
                        >
                            <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={10}>
                        <Form.Item
                            label="Phone No."
                            name="phoneNumber"
                            rules={[{ required: true, message: 'Required field' }]}
                        >
                            <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={10}>
                        <Form.Item
                            label="Email ID "
                            name="emailId"
                            rules={[{ required: false, message: 'Required field' }]}
                        >
                            <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={10}>
                        <Form.Item
                            label="Admin Type"
                            name="adminType"
                            rules={[{ required: false, message: 'Required field' }]}

                        >
                            <Select placeholder="Selected option" onChange={handleChange} suffixIcon={<img src={arrowDown} />}>
                                <Option value="option1">Option 1</Option>
                                <Option value="option2">Option 2</Option>
                                <Option value="option3">Option 3</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={10}>
                        <Form.Item
                            label="Department"
                            name="department"
                            rules={[{ required: false, message: 'Required field' }]}

                        >
                            <Select placeholder="Selected option" onChange={handleChange} suffixIcon={<img src={arrowDown} />}>
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

export default ClientAdminUsersForm