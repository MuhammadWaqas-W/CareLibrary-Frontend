import { Col, Form, Input, Modal, Row, Select, Space } from 'antd';
import './OnboardingAddModal.scss';
import Arrow from '../../../../assets/images/OnBoarding/SelectArrow.svg';
import Close from '../../../../assets/images/OnBoarding/Close.svg'
import { Option } from '../../CareCordinator/ClientDetails/AllocateNewCareHomeModal';

const OnboardingAddModal = (props: any) => {

    const { isOpenModal, setIsOpenModal, title } = props;

    const handleOk = () => setIsOpenModal(false);
    const handleCancel = () => setIsOpenModal(false);
    const onFinish = (values: any) => console.log('Success:', values);
    const onFinishFailed = (errorInfo: any) => console.log('Failed:', errorInfo);


    return (
        <div className='candidate-wrapper'>

            <Modal title={<span className='fw-500 fs-20'>{title}</span>} centered open={isOpenModal} onOk={handleOk} onCancel={handleCancel} width={800} className='candidate-modal' footer={false} closeIcon={<img src={Close} alt="" />}>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    // autoComplete="off"
                    layout="vertical"
                >
                    <Row gutter={[30, 5]} align="bottom">



                        <Col xs={24} sm={24} md={12} lg={12} className='onBoarding-input'>
                            <Form.Item
                                label="First Name"
                                name="first-name"

                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} className='onBoarding-input'>
                            <Form.Item
                                label="Last Name"
                                name="last-name"

                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} className='onBoarding-input'>
                            <Form.Item
                                label="Email"
                                name="email"

                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} className='onBoarding-input'>
                            <Form.Item
                                label="Contact"
                                name="contact"
                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" />
                            </Form.Item>
                        </Col>
                        {title !== 'Add New Instructor' && <Col xs={24} sm={24} md={12} lg={12} className='onBoarding-input'>

                            <Form.Item
                                label="User Type"
                                name="user-type"

                                className="onBoarding-select"
                            >
                                <Select placeholder="User Type" suffixIcon={<img src={Arrow} />}>
                                    <Option value="option1">Carer</Option>
                                    <Option value="option2"> Cordinator</Option>
                                    <Option value="option3">Nurse</Option>
                                </Select>

                            </Form.Item>

                        </Col>}

                        <Col xs={24} sm={24} md={12} lg={12} className='onBoarding-input'>

                            <Form.Item
                                label="Gender"
                                name="gender"

                                className="onBoarding-select"
                            >
                                <Select placeholder="Gender" suffixIcon={<img src={Arrow} />}>
                                    <Option value="Male">Male</Option>
                                    <Option value="Female">Female</Option>

                                </Select>

                            </Form.Item>

                        </Col>

                        <Col span={24}>
                            <Space size={12} className='modal-buttons'>
                                <button onClick={handleCancel} className="modal-button btn-cancel ">Cancel</button>
                                <button className="modal-button btn-secondary ">Save</button>
                            </Space>
                        </Col>


                    </Row>
                </Form>


            </Modal>
        </div>
    );
};

export default OnboardingAddModal