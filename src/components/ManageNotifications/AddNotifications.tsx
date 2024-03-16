import { useState } from 'react';
import { Col, Form, Input, Modal, Row, Select, Space } from 'antd';
import Arrow from '../../assets/images/OnBoarding/SelectArrow.svg';
import Close from '../../assets/images/OnBoarding/Close.svg';
import "./ManageNotification.scss";

const AddNotifications = () => {
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

    return (
        <div className='candidate-wrapper'>
            <button onClick={showModal} className="fw-600 fs-14 cursor-pointer border-radius-6 add-btn" >
                Add Notification
            </button>
            <Modal title={<span className='fs-14 fw-600 label-color'>Add Notification</span>} centered open={IsModalOpen} onOk={handleOk} onCancel={handleCancel} width={700} className='add-modal' footer={false} closeIcon={<img src={Close} alt="" />}>
                <Form name="basic" layout="vertical">
                    <Row gutter={[20, 5]} >
                        <Col md={12} xs={24} className='onBoarding-input' >
                            <Form.Item
                                label={<span className='fs-14 fw-600 label-color'>Notifications</span>}
                                name="notifications"
                                rules={[{ required: true, message: 'Required Field' }]}
                            >
                                <Input placeholder="Type here" />
                            </Form.Item>
                        </Col>
                        <Col md={12} xs={24} className='onBoarding-input'>
                            <Form.Item
                                label={<span className='fs-14 fw-600 label-color'>Description</span>}
                                labelAlign="left"
                                name="description"
                                rules={[{ required: true, message: 'Required Field' }]}
                            >
                                <Input placeholder="Type here" />
                            </Form.Item>
                        </Col>
                        <Col md={12} xs={24} className='onBoarding-input'>
                            <Form.Item
                                label={<span className='fs-14 fw-600 label-color'>Select User</span>}
                                labelAlign="left"
                                name="user"
                                rules={[{ required: true, message: 'Required Field' }]}
                            >
                                <Input placeholder="Type here" />
                            </Form.Item>
                        </Col>
                        <Col md={12} xs={24}>
                            <Form.Item
                                label={<span className='fs-14 fw-600 label-color'>Action Type</span>}
                                name="actionType"
                                rules={[{ required: true, message: 'Required Field' }]}
                            >
                                <Select
                                    placeholder="Selected Option"
                                    rootClassName='selection'
                                    style={{ width: "100%" }}
                                    size='large'
                                    suffixIcon={<img src={Arrow} alt='arrow' />}
                                    className="onBoarding-select"
                                    options={[
                                        { value: 'When User is Created', label: 'When User is Created' },
                                        { value: 'When Carer Register', label: 'When Carer Register' },
                                        { value: 'When Carer is assigned', label: 'When Carer is assigned' },
                                        { value: 'When Carer Resigned', label: 'When Carer Resigned' },
                                        { value: 'When User is Created', label: 'When User is Created' },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                        <Col md={12} xs={24} className='onBoarding-input'>
                            <Form.Item
                                label={<span className='fs-14 fw-600 label-color'>Status</span>}
                                labelAlign="right"
                                name="status"
                                rules={[{ required: true, message: 'Required Field' }]}
                            >
                                <Input placeholder="Type here" />
                            </Form.Item>
                        </Col>
                        <Col md={12} xs={24} className='onBoarding-input'>
                            <Form.Item
                                label={<span className='fs-14 fw-600 label-color'>Aditional Mail</span>}
                                labelAlign="right"
                                name="mail"
                                rules={[{ required: true, message: 'Required Field' }]}
                            >
                                <Input placeholder="Type here" />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Space size={12}>
                                <button onClick={handleCancel} className="btn-error fs-14 fw-600">Cancel</button>
                                <button className="btn-secondary ">Add</button>
                            </Space>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </div>
    );
};

export default AddNotifications