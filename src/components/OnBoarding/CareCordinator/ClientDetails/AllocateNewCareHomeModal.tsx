import { Button, Col, Form, Input, Modal, Row, Select, Space } from 'antd';
import { useState } from 'react';
import './ClientDetails.scss';
import Arrow from '../../../../assets/images/OnBoarding/SelectArrow.svg';
import Close from '../../../../assets/images/OnBoarding/Close.svg'



export const { Option } = Select;

const AllocateNewCareHomeModal = () => {


    const [IsModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onFinish = (values: any) => {
        console.log('Success:', values);
        // props.onChildStateChange(props.selectedStepValue + 1)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div >
            <button onClick={showModal} className="allocate-home-button fw-600 fs-16 cursor-pointer" >
                Allocate New Care Home
            </button>
            <Modal title='' centered open={IsModalOpen} onOk={handleOk} onCancel={handleCancel} width={500} className='client-details' footer={false} closeIcon={<img src={Close} alt="" />}>
                <>
                    <p className='d-flex align-center justify-center fw-500 fs-30'>Add New Care Home</p>
                </>

                <Form
                    name="basic"
                    initialValues={{ remember: true, 'clientName': "Tree Tall Care Home" }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    // autoComplete="off"
                    layout="vertical"
                >
                    <Row gutter={[20, 30]} className='d-flex align-center justify-center' >

                        <Col xs={21} className='allocate-input' >

                            <Form.Item
                                label={<span className='fw-600 fs-14 label-color'>Cordinator Name</span>}
                                name="clientName"
                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" disabled />
                            </Form.Item>

                        </Col>
                        <Col xs={21}>
                            <Form.Item
                                label={<span className='fw-600 fs-14 label-color'>Care Home</span>}
                                name="care home"
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



                        <Col xs={21} className='d-flex align-center justify-center'>
                            <Space size={12}>
                                <Button onClick={handleCancel} className=" action-button  btn-cancel d-flex align-center ">Cancel</Button>
                                <Button className=" action-button  btn-secondary d-flex align-center " htmlType='submit'>Save</Button>
                            </Space>
                        </Col>

                    </Row>

                </Form>


            </Modal>
        </div>
    )
}

export default AllocateNewCareHomeModal