import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Select, Tooltip } from "antd";
import arrowDown from "../../../../assets/icons/arrow-down-icon.svg"
import "./BussinessDetials.scss";
import "../../../../sass/common.scss";

const BussinessDetials = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Finish:', values);
    };

    return (
        <div className="setting-bussiness-detials">
            <div className="heading">
                <h1 className="fs-20 fw-500">Business Details
                    <Tooltip placement="bottomLeft" color="#65CDF0" title="Agency's customer support number (for tap to 'Call' feature on mobile apps).">
                        <InfoCircleOutlined />
                    </Tooltip>

                </h1>
            </div>
            <Form layout="vertical" onFinish={onFinish} form={form}>

            <Row gutter={14} className="dateTime">
                        <Col xs={24} md={12} lg={10}>
                            <Form.Item name="Category" rules={[{ required: false, message: "Required field" }]} label={"Business Name"} className="mb-10">
                              <Input className="input-field" placeholder="Care Library"/>
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12} lg={10}>
                            <Form.Item name="Category" rules={[{ required: false, message: "Required field" }]} label={"Support number"}  className="mb-10">
                            <Input  className="input-field" placeholder="00735257829"/>
                            </Form.Item>
                        </Col>
                    </Row>
                
                    <Row gutter={14} className="dateTime">
                        <Col xs={24} md={12} lg={10}>
                            <Form.Item name="Category" rules={[{ required: false, message: "Required field" }]} label={"Country"}  className="mb-10">
                                <Select
                                 suffixIcon={<img src={arrowDown} />}
                                    placeholder="Slough"
                                    options={[
                                        { value: 'Buzz Hr', label: 'Buzz Hr' },
                                        { value: 'Web & app', label: 'Web & app' },
                                        { value: 'Screencasts', label: 'Screencasts' },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12} lg={10}>
                            <Form.Item name="Category" rules={[{ required: false, message: "Required field" }]} label={"County"}  className="mb-10">
                                <Select
                                suffixIcon={<img src={arrowDown} />}
                                placeholder="Slough"
                                    options={[
                                        { value: 'Buzz Hr', label: 'Buzz Hr' },
                                        { value: 'Web & app', label: 'Web & app' },
                                        { value: 'Screencasts', label: 'Screencasts' },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={14} className="dateTime">
                        <Col xs={24} md={12} lg={10}>
                            <Form.Item name="Task" rules={[{ required: false, message: "Required field" }]} label={"Town/City"} >
                                <Select
                                suffixIcon={<img src={arrowDown} />}
                                placeholder="Slough"
                                    options={[
                                        { value: 'Buzz Hr', label: 'Buzz Hr' },
                                        { value: 'Web & app', label: 'Web & app' },
                                        { value: 'Screencasts', label: 'Screencasts' },
                                    ]}
                                />
                            </Form.Item>

                        </Col>
                        <Col xs={24} md={12} lg={10}>
                            <Form.Item name="Category" rules={[{ required: false, message: "Required field" }]} label={"Post Code"}  className="mb-10">
                            <Input  className="input-field" placeholder="SLF BH2"/>
                            </Form.Item>
                        </Col>

                    </Row>

                    <Row gutter={14} className="dateTime">
                        <Col xs={24} md={12} lg={10}>
                            <Form.Item name="Category" rules={[{ required: false, message: "Required field" }]} label={"Address 1"}  className="mb-10">
                              <Input className="input-field" placeholder="Unit 25,The Business Village"/>
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12} lg={10}>
                            <Form.Item name="Category" rules={[{ required: false, message: "Required field" }]} label={"Business Name"}  className="mb-10">
                            <Input  className="input-field" placeholder="Unit 25,The Business Village"/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Col md={24} style={{ display: "flex" }}>
                        <Form.Item>
                       
                            <Button type="primary" htmlType="submit">
                                Save
                            </Button>
                        </Form.Item>
                    </Col>
                </Form>



        </div>


    )
}

export default BussinessDetials