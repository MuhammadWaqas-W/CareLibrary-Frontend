import { Button, Col, Row, Select, Switch, Tooltip } from 'antd'
import { Form, Input } from 'antd';
import infoIcon from "../../../../assets/icons/info-icon.svg"
import TextArea from 'antd/es/input/TextArea';
import "./ClientManagerForm.scss"
import FormLowerButtons from './FormLowerButtons/FormLowerButtons';





const ProfileComments = (props:any) => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
        props.onChildStateChange(props.selectedStepValue + 1)
    };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

  return (
    <div className='client-manager-information-form-wrapper'>
            <div className='form-heading heading-flex'>Profile Comments
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
                    title='Any notes and comments, log of communications etc can be added here to retrieve and review in future.'
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
                            label="Please write your comments here"
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

export default ProfileComments