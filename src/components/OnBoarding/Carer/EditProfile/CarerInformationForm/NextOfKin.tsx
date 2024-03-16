
import { Button, Col, Row, Select, Space, Form, Input, Tooltip } from 'antd'
import "./FormMain.scss";
import Arrow from '../../../../../assets/images/OnBoarding/SelectArrow.svg'
import { Option } from '../../../CareCordinator/ClientDetails/AllocateNewCareHomeModal';



const NextOfKin = (props: any) => {
    const { handleSelectedStepValue,auditCheck  } = props;
    const onFinish = (values: any) => {
        console.log('Success:', values);
        // props.onChildStateChange(props.selectedStepValue + 1)
        values && handleSelectedStepValue('Contact Prefrence')
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

    return (
        <div className='personal-form-wrapper ' >
            <div className='fw-500 fs-20 form-heading-color' style={{ marginBottom: 10 }}>
                Next Of Kin
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
                    <Col xs={24} sm={24} md={12} className='carer-form-input '>
                        <Form.Item
                            label="First Name"
                            name="firstName"
                        >
                            <Input placeholder="Type here" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} className='carer-form-input '>
                        <Form.Item
                            label="Last Name"
                            name="lastName"
                        >
                            <Input placeholder="Type here" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} className='carer-form-input '>
                        <Form.Item
                            label="Email Address"
                            name="email"
                            rules={[
                                { validator: emailValidator },]}
                        >
                            <Input placeholder="Type here" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} className='carer-form-input '>
                        <Form.Item
                            label="Phone Number"
                            name="phoneNumber"
                        >
                            <Input placeholder="Type here" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} className='carer-form-input '>
                        <Form.Item
                            label="Relationship "
                            name="relationship"
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
                        <div >
                            <Space className='carer-buttons'>
                             { auditCheck &&  <Tooltip
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

export default NextOfKin