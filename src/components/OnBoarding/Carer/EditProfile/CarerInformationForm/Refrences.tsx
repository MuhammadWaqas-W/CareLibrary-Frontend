

import { Button, Col, Dropdown, Form, Input, Modal, Row, Select, Space, Switch, Tooltip } from 'antd';
import { useState } from 'react';
import './FormMain.scss'
import Arrow from '../../../../../assets/images/OnBoarding/arrow.svg';
import Close from '../../../../../assets/images/OnBoarding/Close.svg';
import AddIcon from '../../../../../assets/images/OnBoarding/addIcon.svg'
import infoIcon from "../../../../../assets/icons/info-icon.svg";
import { Option } from '../../../CareCordinator/ClientDetails/AllocateNewCareHomeModal';
import Dots from '../../../../../assets/images/OnBoarding/dots.png';
import Delete from '../../../../../assets/images/OnBoarding/Delete.svg';
import Edit from '../../../../../assets/icons/OnBoarding/edit.svg';

import View from '../../../../../assets/images/OnBoarding/View.svg';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { candidateReference, ICandidateReference, } from '../../../../../mock/OnBoarding';
import DeleteModal from '../../../../../shared/DeleteModal/DeleteModal';

const Refrences = (props: any) => {
    const { handleSelectedStepValue, setActivePanelKey, auditCheck } = props;
    const [IsModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModal, setIsDeleteModal] = useState(false);

    const handleDeleteSubmit = () => {
        setIsDeleteModal(false);
    };
    const handleCancelSubmit = () => {
        setIsDeleteModal(false);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onChange = (checked: boolean) => {
        console.log(checked);

    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
        // props.onChildStateChange(props.selectedStepValue + 1)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const emailValidator = (rule: any, value: any, callback: any) => {
        if (!value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            callback();
        } else {
            callback('Please enter a valid email address');
        }
    };
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
        {
            label: (
                <Space size={15} onClick={() => setIsDeleteModal(true)} >
                    <img src={Delete} alt="Delete" className="d-flex align-center" width={24} height={24} />
                    <span className='fw-400 fs-14'>Delete </span>
                </Space>
            ),
            key: "3",
        },

    ];

    const columns: ColumnsType<ICandidateReference> = [
        {
            title: <span >Reference Type</span>,
            dataIndex: 'Reference Type ',
            key: 'type',
            width: 100,
            render: (_, text) =>
                <span className='fs-14 fw-400 title-color'>
                    {text.type}
                </span>
        },
        {
            title: <span>Full name of the referee </span>,
            dataIndex: 'fullName',
            key: 'fullName',
            width: 130,
            render: (_, text) =>
                <Space >
                    <span className='fs-14 fw-400 title-color'>
                        {text.fullName}
                    </span>
                </Space>,
        },
        {
            title: <span >Contact No. of the referee</span>,
            dataIndex: 'contactNo ',
            key: 'contactNo',
            width: 130,
            render: (_, text) =>
                <div >
                    <span className='fs-14 fw-400 title-color'>
                        {text.contactNo}
                    </span>
                </div>
        },
        {
            title: 'Email ID of the referee',
            dataIndex: 'email',
            key: 'email',
            width: 130,
            render: (_, text) =>

                <span className='fs-14 fw-400 title-color'>
                    {text.email}
                </span>
        },
        {
            title: 'Approval Status',
            dataIndex: 'approvalStatus',
            key: 'approvalStatus',
            width: 100,
            render: () =>
                <div>
                    <Select
                        defaultValue="Select Category"
                        className="select-onboarding"
                        style={{ width: "170px" }}
                        suffixIcon={<img src={Arrow} />}
                        options={[
                            { value: 'Design', label: 'Design' },
                            { value: 'Email', label: 'Email' },
                            { value: 'Social Media', label: 'Social Media' },
                            { value: 'Music', label: 'Music' },
                        ]}
                    />
                </div>
        },
        {
            title: <span>Ref. completed on </span>,
            dataIndex: 'completedRef',
            key: 'completedRef',
            width: 130,
            render: (_, text) =>
                <Space >
                    <span className='fs-14 fw-400 title-color'>
                        {text.completedRef}
                    </span>
                </Space>
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            width: 100,

            render: () => (
                <Dropdown
                    menu={{ items }}
                    placement="bottomRight"
                    trigger={["click"]}
                    className="actionDropDown"
                    overlayStyle={{ width: '150px' }}
                >
                    <div className="border-color cursor-pointer d-flex algin-center  justify-center">
                        <img src={Dots} alt="menu" />
                    </div>
                </Dropdown>
            ),
        },
    ];







    return (
        <div >

            <Row gutter={[20, 20]}>
                <Col xs={24}>
                    <Space>
                        <div className='tooltip-text'>
                            <span className='fw-600 fs-20 inner-text' >Add Reference</span>
                            &nbsp;
                            <span className='fw-600 fs-14'>
                                (Framework Ready Reference Multi )
                            </span>
                        </div>
                        <Tooltip placement="bottomLeft" color="#65CDF0" overlayInnerStyle={{
                            width: "499px",
                        }} title="The  candidate is asked to collect references by clicking on Email or Whastapp button while they register. 2 references in total are taken in general but you can change this from Settings > Staff Settings > Reference Settings.">
                            <img src={infoIcon} alt="infoIcon" className='d-flex align-center' />
                        </Tooltip>
                    </Space>
                </Col>
                <Col xs={24}>
                    <button className='add-reference-modal-btn' onClick={showModal}>
                        <Space >
                            <span className='fw-600 fs-14 title-color'> Add Reference </span>
                            <img src={AddIcon} alt="AddIcon" className='d-flex align-center' />
                        </Space>
                    </button>
                </Col>


                <Col xs={24}>
                    <Space>
                        <div className='tooltip-text'>
                            <span className='fw-600 fs-20 inner-text' >Candidate Reference</span>
                            &nbsp;
                            <span className='fw-600 fs-14'>
                                (Framework Ready Reference Multi )
                            </span>
                        </div>
                        <Tooltip placement="bottomLeft" color="#65CDF0" overlayInnerStyle={{
                            width: "499px",
                        }} title="Here you can see the status of all the references. When the system receives references, they will appear here. If the status is still “Awaiting”, please resend the reference request from the previous section.">
                            <img src={infoIcon} alt="infoIcon" className='d-flex align-center' />
                        </Tooltip>
                    </Space>
                </Col>

                <Col xs={24} className='onboading-table-wrapper'>
                    <Table columns={columns} dataSource={candidateReference} scroll={{ x: "max-content" }} pagination={{ pageSize: 7 }} />

                </Col>

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
                            <Button className='edit-module-button   align-center d-flex btn-secondary' onClick={() => { handleSelectedStepValue('Training Certificate'); setActivePanelKey('Training & Work History') }}  >Continue</Button>
                        </Space>
                    </div>
                </Col>
            </Row>
            <Modal className='personal-form-wrapper' title={<span style={{ fontWeight: "500px", fontSize: "20px" }}>Add Reference</span>} centered open={IsModalOpen} onOk={handleOk} onCancel={handleCancel} width={800} footer={false} closeIcon={<img src={Close} alt="" />}>
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
                                label="Reference Type "
                                name="refrenceType"
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

                        <Col xs={24} sm={24} md={12} lg={12} className='carer-form-input '>
                            <Form.Item
                                label="Full name of the referee"
                                name="refereeName"

                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} className='carer-form-input '>
                            <Form.Item
                                label="Contact nummber of the referee"
                                name="contactNumber"
                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={24} md={12} lg={12} className='carer-form-input '>
                            <Form.Item
                                label="Email ID of the referee"
                                name="emailID"
                                rules={[
                                    { required: true, message: 'Required field' },
                                    { validator: emailValidator },]}

                            >
                                <Input placeholder="Type here" />
                            </Form.Item>
                        </Col>

                        <Col xs={24} >
                            <Form.Item name="switch" label="" >
                                <Space>

                                    <Switch onChange={onChange} />
                                    <span className='fw-600 fs-14 label-color'>Can we request reference from this contact now?</span>
                                </Space>

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


            <DeleteModal
                setDeleteModal={setIsDeleteModal}
                deleteModal={isDeleteModal}
                submitTitle='Cancel'
                cancelTitle='Delete'
                title='Do you want to delete this row'
                onSubmit={handleDeleteSubmit}
                onCancel={handleCancelSubmit}
            />


        </div>

    )
}

export default Refrences