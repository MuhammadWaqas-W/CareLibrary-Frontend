import { useState } from 'react';
import { Button, Col, Row, Select, Switch, Tooltip } from 'antd'
import { Form, Input } from 'antd';
import arrowDown from "../../../../assets/icons/arrow-down-icon.svg"
import TextArea from 'antd/es/input/TextArea';
import "./ClientManagerForm.scss"
import FormLowerButtons from './FormLowerButtons/FormLowerButtons';

const { Option } = Select;

const ClientAddressForm = (props: any) => {

    const [isAdditionalPhone, setIsAdditionalPhone] = useState(false)

    const onChange = (checked: boolean) => {
        setIsAdditionalPhone(checked)
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


    return (
        <div className='client-manager-information-form-wrapper'>
            <div className='form-heading heading-flex'>Client Address</div>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
            >
                <Row gutter={[30, 5]} align="bottom">
                    <Col xs={24} sm={24} md={12} lg={10}>
                        <Form.Item
                            label="County"
                            name="country"
                            rules={[{ required: true, message: 'Required field' }]}
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
                            label="Town/City"
                            name="Town/City"
                            rules={[{ required: true, message: 'Required field' }]}
                        >
                            <Select placeholder="" onChange={handleChange} suffixIcon={<img src={arrowDown} />}>
                                <Option value="option1">Option 1</Option>
                                <Option value="option2">Option 2</Option>
                                <Option value="option3">Option 3</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={20}>
                        <Form.Item
                            label="Address"
                            name="address"
                            rules={[{ required: false, message: 'Required field' }]}
                        >
                            <Select placeholder="Selected option" onChange={handleChange} suffixIcon={false}>
                                <Option value="option1">1D, Carven Court, Carven Street Brierfield, Nelson, BB9 5AJ</Option>
                                <Option value="option2">1D, Bethany Homes, St. Peters Rise Bristol, BS13 7LZ</Option>
                                <Option value="option3">1D, Eithne House, Duncairn Prade Belfast, BT15 2EW</Option>
                                <Option value="option4">1D, Mount Vernon House, Shore Road Belfast, BT15 4BA</Option>
                                <Option value="option5">1D, Chapel Court, Chapel Road Wirral, CH47 3AY</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={10}>
                        <Form.Item
                            label="Post Code"
                            name="postCode"
                            rules={[{ required: true, message: 'Required field' }]}
                        >
                            <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            label="Additional Phone "
                            name="additionalPhone "
                            rules={[{ required: false, message: 'Required field' }]}
                        >
                            <div>
                                <Switch onChange={onChange} /> &nbsp; Add address manually?
                            </div>
                        </Form.Item>
                    </Col>

                    {isAdditionalPhone && <Col span={20}>
                        <Form.Item
                            label="Please type address here"
                            name="manualAddress"
                            rules={[{ required: true, message: 'Required field' }]}
                        >
                            <TextArea rows={4} />
                        </Form.Item>
                    </Col>}

                </Row>
                <FormLowerButtons/>

            </Form>



        </div>
    )
}

export default ClientAddressForm