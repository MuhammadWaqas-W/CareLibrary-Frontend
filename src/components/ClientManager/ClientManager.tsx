import { Button, Col, Dropdown, Form, Input, Modal, Progress, Row, Select, Space, Switch, Table } from 'antd'
import React, { useState } from 'react'
import "./ClientManager.scss"
import CloseIcon from "../../assets/icons/close-icon.svg"
import arrowDown from "../../assets/icons/arrow-down-icon.svg"
import { useForm } from 'antd/es/form/Form'

import viewIcon from "../../assets/icons/view-icon.svg"
import editIcon from "../../assets/icons/edit-outlined-blue.svg"
import threeDots from "../../assets/icons/three-dots.svg"
import searchIcon from "../../assets/icons/search.svg";

import { ColumnsType } from 'antd/es/table'
import ClientManagerFilters from './ClientManagerFilters/ClientManagerFilters'
import { useNavigate } from 'react-router-dom'
import { ClientManagerTableData } from '../../mock/ClientManagerData'
import ClientViewProfileModal from './ClientViewProfileModal/ClientViewProfileModal'

const { Option } = Select;

const ClientManagerMain = () => {

    const [isAddNewClientModal, setIsAddNewClientModal] = useState(false);
    const [isPartOfGroup, setIsPartOfGroup] = useState(false)

    const [viewClientModal, setviewClientModal] = useState(false)

    const [tableID, settableID] = useState(false)

    const [form] = useForm();
    const onFinish = (values: any) => {
        console.log('Success:', values);
        form.resetFields();
        setIsAddNewClientModal(false)
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
        setIsPartOfGroup(checked)
    };
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    }

    const navigate = useNavigate()


    interface IClientManagerTableData {
        key: any;
        id: any;
        avatar: any;
        displayName: any;
        groupName: any;
        type: any;
        profileStatus: any;
        actions: any;
    }

    const items: any = [
        {
            label: (
                <div onClick={() => setviewClientModal(true)}>
                    <Space >
                        <img src={viewIcon} alt="Edit" className="d-flex align-center" width={24} height={24} />
                        <span >View</span>
                    </Space>
                </div>
            ),
            key: "1",
        },
        {
            label: (
                <Space onClick={() => navigate(`/client-manager/client-registration/${tableID}`)}>
                    <img src={editIcon} alt="Delete" className="d-flex align-center" width={24} height={24} />
                    <span>Edit</span>
                </Space>
            ),
            key: "2",
        },

    ];



    const columns: ColumnsType<any> = [
        {
            title: <span style={{ paddingLeft: "75px" }}>Display Name</span>,
            dataIndex: 'displayName',
            key: 'displayName',
            ellipsis: true,
            width: 270,
            render: (_, text) =>
                <div className="cursor-pointer d-flex align-center "  >
                    <img src={text.avatar} alt="avatar" />
                    <span className='fs-14 fw-400 title-color' style={{ marginLeft: "30px" }}>
                        {text.displayName}
                    </span>
                </div>
        },
        {
            title: <span>Group Name </span>,
            dataIndex: 'groupName',
            key: 'groupName',
            width: 300,
            render: (_, text) =>
                <Space >
                    <span className='fs-14 fw-400 title-color'>
                        {text.groupName}
                    </span>
                </Space>,
        },
        {
            title: <span>Type</span>,
            dataIndex: 'type',
            key: 'type',
            width: 300,
            render: (_, text) =>
                <Space >
                    <span className='fs-14 fw-400 title-color'>
                        {text.type}
                    </span>
                </Space>,
        },
        {
            title: 'Profile Status',
            dataIndex: 'type',
            key: 'type',
            width: 300,
            render: (_, text) =>
                <div>
                    <div className='fs-14 fw-400 title-color' style={{ minWidth: "70px" }}>
                        <span className='fw-700 fs-14'>{text?.profileStatus}%</span>   <span style={{ marginLeft: "5px" }} className='fw-600 fs-14'>Done</span>
                    </div>
                    <Progress percent={text?.profileStatus} strokeColor='#F7B923' strokeWidth={11} width={50} showInfo={false} />
                </div>
        },
        {
            title: <div className='equal--width-tb'>Actions</div>,
            dataIndex: "actions",
            key: "actions",
            width: 150,
            render: (_, text) => (
                <Dropdown
                    menu={{ items }}
                    placement="bottomRight"
                    trigger={["click"]}
                    className="actionDropDown"
                >
                    <div className="equal--width-tb">
                        <img className='cursor-pointer' src={threeDots} alt="menu" onClick={() => settableID(text.id)} />
                    </div>
                </Dropdown>
            ),
        },
    ];




    return (
        <div className='client-manager-wrapper-main'>
            <div className="wrapper-search-and-filters">
                <div className="inner-main-head">
                    <div className="upper-level-buttons d-flex">
                        <Button className='upper-level-btn btn-secondary white-color' onClick={() => setIsAddNewClientModal(true)}>Add New Client</Button>
                        <Button className='upper-level-btn btn-secondary btn--orange white-color' onClick={() => navigate(`/client-manager/manage-groups`)}>Create Group</Button>
                    </div>
                    <div className="search-and-filters">
                        <ClientManagerFilters />
                    </div>
                </div>
                <Input
                    className="search-input"
                    placeholder="Search"
                    prefix={<img src={searchIcon} alt="searchIcon" width={24} height={24} style={{ marginRight: '0.623rem' }} />}
                />
            </div>

            <div className="client-main-table-wrapper">
                <Table className="wrapper-table" columns={columns} dataSource={ClientManagerTableData} scroll={{ x: "max-content" }} pagination={{ pageSize: 7 }} />
            </div>


            <Modal
                centered
                title={<div className='fs-20 fw-500'>Client Information</div>}
                open={isAddNewClientModal}
                onCancel={() => { setIsAddNewClientModal(false); form.resetFields() }}
                wrapClassName="add-client-info-form"
                footer={false}
                closeIcon={<img src={CloseIcon} alt="" />}>

                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    // autoComplete="off"
                    layout="vertical"
                    form={form}
                >
                    <Row gutter={[30, 0]} align="bottom">
                        <Col xs={24} sm={24} md={12} lg={12}>
                            <Form.Item
                                label="Client Name"
                                name="clientName"
                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12}>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12}>
                            <Form.Item
                                label="Contact"
                                name="contact"
                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <h4 className='fs-20 fw-500' style={{ marginTop: "0px", marginBottom: '15px' }}>Client’s Admin</h4>
                    <Row gutter={[30, 0]} align="bottom">
                        <Col xs={24} sm={24} md={12} lg={12}>
                            <Form.Item
                                label="Title"
                                name="title"
                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Select placeholder="Selected Option" onChange={handleChange} suffixIcon={<img src={arrowDown} />}>
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12}>
                            <Form.Item
                                label="First Name"
                                name="firstName"
                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12}>
                            <Form.Item
                                label="Last Name"
                                name="lastName"
                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <h4 className='fs-20 fw-500' style={{ marginTop: "0px", marginBottom: '15px' }}>Group Information</h4>
                    <div className="form-check-group">
                        <Switch onChange={onChange} /> &nbsp; <span>Part of a group?</span>
                    </div>

                    {isPartOfGroup && <Row gutter={[30, 0]} align="bottom">
                        <Col xs={24} sm={24} md={12} lg={12}>
                            <Form.Item
                                label="Group Name"
                                name="Group Name"
                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Select placeholder="Selected Option" onChange={handleChange} suffixIcon={<img src={arrowDown} />}>
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12}>
                            <Form.Item
                                label="Copy Settings From?"
                                name="copySettingsFrom"
                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Select placeholder="Selected Option" onChange={handleChange} suffixIcon={<img src={arrowDown} />}>
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12}>
                            <Form.Item
                                label="Settings To Copy"
                                name="settingsToCopy"
                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Select placeholder="Selected Option" onChange={handleChange} suffixIcon={<img src={arrowDown} />}>
                                    <Option value="Staff Setting">Staff Setting</Option>
                                    <Option value="Shift Time Settings">Shift Time Settings</Option>
                                    <Option value="Bank Holiday">Bank Holiday</Option>
                                    <Option value="Job Role">Job Role</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>}

                    <div className='cus-footer-buttons'>
                        <Button className='inner-cus-footer-btn btn--cancel' onClick={() => { setIsAddNewClientModal(false); form.resetFields() }}>Cancel</Button>
                        <Button className='inner-cus-footer-btn btn--save' htmlType='submit'>Save</Button>
                    </div>


                </Form>
            </Modal>

            <ClientViewProfileModal viewClientModal={viewClientModal} setviewClientModal={setviewClientModal} />
        </div>
    )
}

export default ClientManagerMain