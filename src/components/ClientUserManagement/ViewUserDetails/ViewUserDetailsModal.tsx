import { Form, Modal, Row, Col, Button } from 'antd';
import InputWrapper from '../../../shared/InputWrapper/InputWrapper';
import SelectWrapper from '../../../shared/SelectWrapper/SelectWrapper';
import '../../ClientUserManagement/ClientUserManagement.scss'

const ViewUserDetailsModal = (props: any) => {
    const { viewUserDetailsModal, setViewUserDetailsModal } = props;
    const [form] = Form.useForm();
    const onFinish = () => { }
    const handleChange = (e: any) => { }
    return (
        <>
            <Modal title="Admin Details" open={viewUserDetailsModal} onCancel={() => setViewUserDetailsModal(false)} footer={false} centered className='client-user-managment-modal' width={800}>
                <div className='care-booking-content'>
                    <div className='cancel-shift-modal-content'>
                        <Form layout="vertical" onFinish={onFinish} form={form}>
                        <Row gutter={[30, 20]} align="middle">
                                <Col xl={12} lg={12} md={12} sm={24} xs={24} className="request-shift-fields">
                                    <InputWrapper
                                        label='First Name'
                                        name="searchClients"
                                        disabled={true}
                                        defaultValue={'John'}
                                        onChange={(val: any) => { }}
                                    />
                                </Col>
                                <Col xl={12} lg={12} md={12} sm={24} xs={24} className="request-shift-fields">
                                    <InputWrapper
                                        label='Last Name'
                                        name="searchClients"
                                        disabled={true}
                                        defaultValue={'Doe'}
                                        onChange={(val: any) => { }}
                                    />
                                </Col>
                                <Col xl={12} lg={12} md={12} sm={24} xs={24} className="request-shift-fields">
                                    <InputWrapper
                                        label='Phone No.'
                                        name="searchClients"
                                        disabled={true}
                                        defaultValue={'4564531234564'}
                                        onChange={(val: any) => { }}
                                    />
                                </Col>
                                <Col xl={12} lg={12} md={12} sm={24} xs={24} className="request-shift-fields">
                                    <InputWrapper
                                        label='Email ID'
                                        name="searchClients"
                                        disabled={true}
                                        defaultValue={'abc@gmail.com'}
                                        onChange={(val: any) => { }}
                                    />
                                </Col>
                                <Col xl={12} lg={12} md={12} sm={24} xs={24} className="request-shift-fields">
                                    <InputWrapper
                                        label='Admin Type'
                                        name="searchClients"
                                        disabled={true}
                                        defaultValue={'Health Care Assistant'}
                                        onChange={(val: any) => { }}
                                    />
                                </Col>
                                <Col xl={12} lg={12} md={12} sm={24} xs={24} className="request-shift-fields">
                                    <InputWrapper
                                        label='Department'
                                        name="searchClients"
                                        disabled={true}
                                        defaultValue={'Dementia'}
                                        onChange={(val: any) => { }}
                                    />
                                </Col>
                                <Col xl={12} lg={12} md={12} sm={24} xs={24} className="request-shift-fields">
                                    <InputWrapper
                                        label='Date of Joining'
                                        name="searchClients"
                                        disabled={true}
                                        defaultValue={'12-01-2020'}
                                        onChange={(val: any) => { }}
                                    />
                                </Col>
                                
                            </Row>
                            <div className="request-shift-btn d-flex align-center">
                                <Button type='primary' className='cancel-btn' onClick={() => setViewUserDetailsModal(false)}>Cancel</Button>
                                {/* <button
                                    type="button"
                                    className="cancel-btn cursor-pointer fs-16 line-height-22 white-color fw-500"
                                    onClick={() => setViewUserDetailsModal(false)}
                                >
                                    Cancel
                                </button> */}
                            </div>
                        </Form>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ViewUserDetailsModal