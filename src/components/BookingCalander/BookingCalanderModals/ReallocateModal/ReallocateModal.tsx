import { Button, Col, Form, Input, Modal, Row } from 'antd';
import SelectWrapper from '../../../../shared/SelectWrapper/SelectWrapper';
import Close from '../../../../assets/images/OnBoarding/Close.svg';
import './ReallocateModal.scss'

function ReallocateModal(props: any) {
    const { isReallocateModalOpen, setIsReallocateModalOpen } = props;
    return (
        <Modal centered width={890}
            closeIcon={< img src={Close} alt="close" />}
            title={<span className="fs-20 fw-600">Reallocate</span>}
            footer={false} className="Reallocate"
            open={isReallocateModalOpen} onOk={() => { setIsReallocateModalOpen(false) }} onCancel={() => { setIsReallocateModalOpen(false) }}>
            <Form layout='vertical'>
                <Row style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Col xs={24} md={12}>
                        <SelectWrapper
                            label="Available Staff Member"
                            onChange={(value: any) => {
                                console.log(`selected ${value}`);
                            }}
                            required={false}
                            placeHolder="Selected avaliable staff member"
                            options={[
                                { value: "Option1", label: "Option1" },
                                { value: "Option2", label: "Option2" },
                                { value: "Option3", label: "Option3" },
                            ]}
                            name="staffMember"
                        />
                    </Col>
                    <Col xs={24} md={24}>
                        <Row>
                            <Col xs={24} md={16}>
                                <Form.Item label="Please mention reason for reallocation.">
                                    <Input.TextArea rows={4} placeholder='Type here' style={{ border: "1.5px solid #A0A3BD", borderRadius: "3px" }} />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24} className="btn-wrapper d-flex">
                        <Button type='primary' className='cancel-btn fs-16 fw-600' onClick={() => { setIsReallocateModalOpen(false) }}>NO</Button>
                        <Button type='primary' className='allocate-btn fs-16 fw-600' onClick={() => { setIsReallocateModalOpen(false) }}>Allocate (acceptance required)</Button>
                        <Button type='primary' className='allocate-success-btn fs-16 fw-600' onClick={() => { setIsReallocateModalOpen(false) }}>Allocate</Button>
                    </Col>
                </Row>
            </Form>
        </Modal>
    )
}

export default ReallocateModal
