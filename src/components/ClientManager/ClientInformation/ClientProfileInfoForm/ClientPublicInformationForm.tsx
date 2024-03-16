import { Button, Col, Row, Select, Switch, Tooltip } from 'antd'
import { Form, Input } from 'antd';
import "./ClientManagerForm.scss"
import infoIcon from "../../../../assets/icons/info-icon.svg"
import arrowDown from "../../../../assets/icons/arrow-down-icon.svg"
import TextArea from 'antd/es/input/TextArea';
import FormLowerButtons from './FormLowerButtons/FormLowerButtons';

const ClientPublicInformationForm = (props: any) => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
        props.onChildStateChange(props.selectedStepValue + 1)
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='client-manager-information-form-wrapper'>
            <div className='form-heading heading-flex'>Client Public Information
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
                    title='Upto 265 characters of text can be entered here which is visible to staff mobile apps when shifts are posted through the apps.'
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
                    <Col span={20}>
                        <Form.Item
                            label="Please type information here"
                            name="information"
                            rules={[{ required: false, message: 'Required field' }]}
                        >
                            <TextArea rows={4} />
                        </Form.Item>
                    </Col>
                </Row>

                <FormLowerButtons/>

            </Form>



        </div>
    )
}

export default ClientPublicInformationForm