import { Button, Col, Dropdown, Form, Input, Modal, Row, Select, Space, Tooltip } from 'antd';
import { useState } from 'react';
import View from '../../../../../assets/images/OnBoarding/View.svg';
import './FormMain.scss'
import Arrow from '../../../../../assets/images/OnBoarding/SelectArrow.svg';
import Close from '../../../../../assets/images/OnBoarding/Close.svg';
import AddIcon from '../../../../../assets/images/OnBoarding/addIcon.svg'
import { Option } from '../../../CareCordinator/ClientDetails/AllocateNewCareHomeModal';
import Dots from '../../../../../assets/images/OnBoarding/dots.png';
import Edit from '../../../../../assets/icons/OnBoarding/edit.svg';
import '../../../../../shared/DatePickerWrapper/DatePickerWrapper.scss';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { additionalTraining, OtherBankDetails } from '../../../../../mock/OnBoarding';


interface IBankDetails {
    name: string,
    bankName: string,
    sortCode: string,
    accountNumber: string,
    accountPreference: string
}

const BankDetails = (props: any) => {
    const { handleSelectedStepValue, setActivePanelKey, conditionalPath, auditCheck } = props;

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


    const newTabHandler = () => {
        conditionalPath ? handleSelectedStepValue("Declaration") : handleSelectedStepValue('Immunisation');
        setActivePanelKey(conditionalPath ? "Declaration" : 'Medical History')
    }




    const items: any = [
        {
            label: (
                <div onClick={() => { }}>
                    <Space size={15} onClick={showModal} >
                        <img src={View} alt="Edit" className="d-flex align-center" width={24} height={24} />
                        <span className='fw-400 fs-14' >View </span>
                    </Space>
                </div>
            ),
            key: "1",
        },
        {
            label: (
                <Space size={15} onClick={showModal} >
                    <img src={Edit} alt="Delete" className="d-flex align-center" width={24} height={24} />
                    <span className='fw-400 fs-14'>Edit </span>
                </Space>
            ),
            key: "2",
        },


    ];

    const columns: ColumnsType<IBankDetails> = [
        {
            title: <span className='fw-600 fs-14'>Account User Name</span>,
            dataIndex: 'name',
            key: 'name',
            render: (_, text) =>
                <span className='fs-14 fw-400 title-color'>
                    {text.name}
                </span>
        },
        {
            title: <span className='fw-600 fs-14'>Name of the Bank</span>,
            dataIndex: 'bankName',
            key: 'bankName',
            render: (_, text) =>
                <span className='fs-14 fw-400 title-color'>
                    {text.bankName}
                </span>
        },
        {
            title: <span className='fw-600 fs-14'>Sort Code</span>,
            dataIndex: 'Sort Code',
            key: 'sortCode',
            render: (_, text) =>

                <span className='fs-14 fw-400 title-color'>
                    {text.sortCode}
                </span>
        },
        {
            title: <span className='fw-600 fs-14'>Account Number</span>,
            dataIndex: 'accountNumber',
            key: 'accountNumber',
            render: (_, text) =>

                <span className='fs-14 fw-400 title-color'>
                    {text.accountNumber}
                </span>
        },
        {
            title: <span className='fw-600 fs-14'>Account Preference</span>,
            dataIndex: 'accountPreference',
            key: 'accountPreference',
            render: (_, text) =>
                <span className='fs-14 fw-400 title-color'>
                    {text.accountPreference}
                </span>
        },
        {
            title: <span className='fw-600 fs-14'>Action</span>,
            dataIndex: 'action',
            key: 'action',
            render: (_, text) =>

                <Dropdown
                    menu={{ items }}
                    placement="bottomRight"
                    trigger={["click"]}
                    className="actionDropDown"
                    overlayStyle={{ width: '150px' }}
                >
                    <div className="border-color cursor-pointer d-flex algin-center  justify-center">
                        <img src={Dots} alt="edit" />
                    </div>
                </Dropdown>
        },
    ];
    return (
        <div>
            <Row gutter={[20, 20]}>
                <Col xs={24}>
                    <span className='fw-600 fs-20' >Bank Details</span>
                </Col>
                <Col xs={24}>
                    <button className='add-reference-modal-btn cursor-pointer' onClick={showModal}>
                        <Space>
                            <span className='fw-600 fs-14 title-color'>Add Bank Details </span>
                            <img src={AddIcon} alt="AddIcon" className='d-flex align-center' />
                        </Space>
                    </button>
                </Col>


                {additionalTraining.length > 0 && <Col xs={24}>
                    <Table className='onboading-table-wrapper' columns={columns} dataSource={OtherBankDetails} scroll={{ x: "max-content" }} pagination={false} />
                </Col>}

                <Col xs={24} >
                    <div >
                        <Space className='carer-buttons'>
                            {auditCheck && <Tooltip
                                autoAdjustOverflow={true}
                                showArrow={false}
                                placement="bottomLeft" color="#65CDF0"
                                title='Click to mark as audit'
                            >

                                <Button className='edit-module-button  audit-button  align-center d-flex' >Audit</Button>
                            </Tooltip>}
                            <Button className='edit-module-button bg-orange-color  align-center d-flex '>Save</Button>
                            <Button className='edit-module-button   align-center d-flex btn-secondary' onClick={newTabHandler}  >Continue</Button>
                        </Space>
                    </div>
                </Col>

            </Row>
            <Modal className='personal-form-wrapper' title={<span style={{ fontWeight: "500px", fontSize: "20px" }}>Add Bank Details</span>} centered open={IsModalOpen} onOk={handleOk} onCancel={handleCancel} width={800} footer={false} closeIcon={<img src={Close} alt="" />}>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    // autoComplete="off"
                    layout="vertical"
                >
                    <Row gutter={[30, 5]} align="bottom">
                        <Col xs={24} sm={24} md={12} lg={12} className='carer-form-input '>
                            <Form.Item
                                label="Account User Name"
                                name="userName"

                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={24} md={12} lg={12} className='carer-form-input '>
                            <Form.Item
                                label="Name of the Bank"
                                name="bankName"

                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} className='carer-form-input '>
                            <Form.Item
                                label="Sort Code"
                                name="sortCode"

                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={24} md={12} lg={12} className='carer-form-input '>
                            <Form.Item
                                label="Account Number"
                                name="accountNumber"

                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} className='carer-form-input '>
                            <Form.Item
                                label="Account Type "
                                name="accountType"
                                rules={[{ required: true, message: 'Required field' }]}
                                className='allocate-select'
                            >
                                <Select placeholder="Selected option" suffixIcon={<img src={Arrow} />}>
                                    <Option value="Personal">Personal</Option>
                                    <Option value="Business">Business</Option>

                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} className='carer-form-input '>
                            <Form.Item
                                label="Account Preference "
                                name="accountPrefrence"
                                rules={[{ required: true, message: 'Required field' }]}
                                className='allocate-select'
                            >
                                <Select placeholder="Selected option" suffixIcon={<img src={Arrow} />}>
                                    <Option value="Primary">Primary</Option>
                                    <Option value="Secondary">Secondary</Option>

                                </Select>
                            </Form.Item>
                        </Col>

                        <Col xs={24} >
                            <Space className='modal-buttons'>
                                <button className='modal-button btn-cancel  ' >Cancel</button>
                                <button className='modal-button btn-secondary' >Save</button>
                            </Space>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </div>
    )
}

export default BankDetails