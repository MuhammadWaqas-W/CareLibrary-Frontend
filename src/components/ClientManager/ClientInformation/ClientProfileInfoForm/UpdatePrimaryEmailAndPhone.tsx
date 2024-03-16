import { Button, Col, Row, Select, Switch, Tooltip } from 'antd'
import { Form, Input } from 'antd';
import infoIcon from "../../../../assets/icons/info-icon.svg"
import "./ClientManagerForm.scss"
import FormLowerButtons from './FormLowerButtons/FormLowerButtons';



const UpdatePrimaryEmailAndPhone = (props: any) => {


    const onFinish = (values: any) => {
        console.log('Success:', values);
        props.onChildStateChange(props.selectedStepValue + 1)
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
        <div className='client-manager-information-form-wrapper'>
            <div className='form-heading heading-flex'>Update Primary Email & Phone
                <Tooltip
                    placement="bottomLeft"
                    autoAdjustOverflow={true}
                    //   arrow={false}
                    showArrow={false}
                    color="#65CDF0"
                    overlayInnerStyle={{
                        backgroundColor: "#65CDF0",
                        color: "#ffffff",
                        width: "499px",
                    }}
                    title='You can update or reset the primary email and phone of the client.'
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
                            label="Primary Email"
                            name="PrimaryEmail"
                            rules={[{ required: false, message: 'Required field' }]}
                        >
                            <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={10}>
                        <Form.Item
                            label="Primary Phone"
                            name="PrimaryPhone"
                            rules={[{ required: false, message: 'Required field' }]}
                        >
                            <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={10}>
                        <Form.Item
                            label="New Primary Email"
                            name="newPrimaryEmail"
                            rules={[
                                { required: true, message: 'Required field' },
                                { validator: emailValidator },]}
                        >
                            <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={10}>
                        <Form.Item
                            label="New Primary Phone"
                            name="newPrimaryPhone *"
                            rules={[{ required: true, message: 'Required field' }]}
                        >
                            <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} />
                        </Form.Item>
                    </Col>
                </Row>
                <FormLowerButtons />
            </Form>
        </div>
    )
}

export default UpdatePrimaryEmailAndPhone