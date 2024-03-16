import { Form, Modal, Row, Col, Button } from 'antd';
import SelectWrapper from '../../../shared/SelectWrapper/SelectWrapper';
import InputWrapper from '../../../shared/InputWrapper/InputWrapper';
import '../../ClientUserManagement/ClientUserManagement.scss'

const AddAdminUserModal = (props: any) => {
    const { addUserModalOpen, setAddUserModalOpen } = props;
    const [form] = Form.useForm();
    const onFinish = () => { }
    const handleChange = (e: any) => { }
    return (
        <>
            <Modal title="Admin Details " open={addUserModalOpen} onCancel={() => setAddUserModalOpen(false)} footer={false} centered className='client-user-managment-modal' width={800}>
                <div className='care-booking-content'>
                    <div className='cancel-shift-modal-content'>
                        <Form layout="vertical" onFinish={onFinish} form={form}>
                            <Row gutter={[30, 20]} align="middle">
                                <Col xl={12} lg={12} md={12} sm={24} xs={24} className="request-shift-fields">
                                    <InputWrapper
                                        label='First Name'
                                        name="searchClients"
                                        disabled={false}
                                        // defaultValue={''}
                                        placeHolder='Type here'
                                        required={true}
                                        onChange={(val: any) => { }}
                                    />
                                </Col>
                                <Col xl={12} lg={12} md={12} sm={24} xs={24} className="request-shift-fields">
                                    <InputWrapper
                                        label='Last Name'
                                        name="searchClients"
                                        disabled={false}
                                        // defaultValue={''}
                                        placeHolder='Type here'
                                        required={true}
                                        onChange={(val: any) => { }}
                                    />
                                </Col>
                                <Col xl={12} lg={12} md={12} sm={24} xs={24} className="request-shift-fields">
                                    <InputWrapper
                                        label='Phone No.'
                                        name="searchClients"
                                        disabled={false}
                                        // defaultValue={''}
                                        placeHolder='Type here'
                                        required={true}
                                        onChange={(val: any) => { }}
                                    />
                                </Col>
                                <Col xl={12} lg={12} md={12} sm={24} xs={24} className="request-shift-fields">
                                    <InputWrapper
                                        label='Email ID'
                                        name="searchClients"
                                        disabled={false}
                                        // defaultValue={''}
                                        placeHolder='Type here'
                                        required={true}
                                        onChange={(val: any) => { }}
                                    />
                                </Col>
                                <Col xl={12} lg={12} md={12} sm={24} xs={24} className="request-shift-fields">
                                    <SelectWrapper
                                        label="Admin Type"
                                        name="shiftDate"
                                        required={true}
                                        placeHolder="Selected Option"
                                        options={[]}
                                        onChange={(e: any) => handleChange(e)}
                                    />
                                </Col>
                                <Col xl={12} lg={12} md={12} sm={24} xs={24} className="request-shift-fields">
                                    <SelectWrapper
                                        label="Department"
                                        name="carerType"
                                        required={true}
                                        placeHolder="Selected Option"
                                        options={[]}
                                        onChange={(e: any) => handleChange(e)}
                                    />
                                </Col>
                            </Row>
                            <div className="request-shift-btn d-flex align-center">
                                {/* <button
                                    type="button"
                                    className="cancel-btn cursor-pointer fs-16 line-height-22 white-color fw-500"
                                    
                                >
                                    Cancel
                                </button> */}
                                <Button type='primary' className='cancel-btn' onClick={() => form.resetFields()}>Cancel</Button>
                                <Button type='primary' htmlType='submit'>Save</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default AddAdminUserModal