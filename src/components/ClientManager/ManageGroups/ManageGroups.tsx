import { Button, Checkbox, Col, Dropdown, Form, Input, MenuProps, Modal, Row, Space, Table } from 'antd';
import React, { useState } from 'react'

import plusIcon from "../../../assets/icons/plus-icon.svg"
import editIcon from "../../../assets/icons/edit-icon.svg"
import CloseIcon from "../../../assets/icons/close-icon.svg"

import { DownOutlined } from "@ant-design/icons";

import "./ManageGroups.scss"
import { CheckboxValueType } from 'antd/es/checkbox/Group';


const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

const ManageGroups = () => {

    const [isCreateGroupModal, setisCreateGroupModal] = useState(false);
    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>();
    const [isOpenDropdown, setisOpenDropdown] = useState(false);
    const [isEditMode, setisEditMode] = useState(false)

    const manageGroupsDataSource = [
        {
            key: '1',
            sNo: '1',
            groupName: 'Tall Tree House',
            careHomes: "Hallmark Homes, Lansdowne Care Home, The Meadows Reside...",
        },
        {
            key: '2',
            sNo: '2',
            groupName: 'Halmark Homes',
            careHomes: "Hallmark Homes",
        },
        {
            key: '3',
            sNo: '3',
            groupName: 'Speirs House',
            careHomes: "Lansdowne Care Home, The Meadows Reside...",
        },
        {
            key: '4',
            sNo: '4',
            groupName: 'Lavender Oaks Care Home ',
            careHomes: "Lansdowne Care Home",
        },
    ];

    const manageGroupsColumns = [
        {
            title: 'Sr. #',
            dataIndex: 'sNo',
            key: 'sNo',
        },
        {
            title: 'Group Name',
            dataIndex: 'groupName',
            key: 'groupName',
        },
        {
            title: 'Care Homes',
            dataIndex: 'careHomes',
            key: 'careHomes',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: () => (
                <div className="border-color cursor-pointer">
                    <img src={editIcon} onClick={() => { setisCreateGroupModal(true); setisEditMode(true) }} style={{ width: '17px', height: '17px' }} alt="edit" />
                </div>
            ),
        },

    ];

    const listHomesDataSource = [
        {
            key: '1',
            sNo: '1',
            careHomes: "Tall Tree House",
        },
        {
            key: '2',
            sNo: '2',
            careHomes: "Halmark Homes",
        },
    ];

    const listHomesColumns = [
        {
            title: 'Sr. #',
            dataIndex: 'sNo',
            key: 'sNo',
        },
        {
            title: 'Care Homes',
            dataIndex: 'careHomes',
            key: 'careHomes',
        },

    ];

    const onChange = (checkedValues: CheckboxValueType[]) => {
        setCheckedList(checkedValues);
    };

    console.log("checkedList", checkedList?.join(", "))

    const items: MenuProps["items"] = [
        {
            label: (
                <Checkbox.Group
                    options={[
                        { value: 'The Meadows Residential Care Home', label: 'The Meadows Residential Care Home' },
                        { value: 'Nettlestead Care Home', label: 'Nettlestead Care Home' },
                        { value: 'Park Avenue Care Home', label: 'Park Avenue Care Home' },
                        { value: 'Rokewood Court', label: 'Rokewood Court' },
                        { value: 'Royal Star & Garter - Surbiton', label: 'Royal Star & Garter - Surbiton' },
                        { value: 'Sancroft Community Care Ltd- Sancroft Hall', label: 'Sancroft Community Care Ltd- Sancroft Hall' },
                        { value: 'Speirs House', label: 'Speirs House' },
                        { value: 'Sweetcroft Care Home', label: 'Sweetcroft Care Home' },
                        { value: 'The White House Nursing Home ', label: 'The White House Nursing Home ' },
                    ]}
                    value={checkedList}
                    onChange={onChange}
                    className='group-checkbox-flex'
                />
            ),
            key: "1",
        },
    ];

    return (
        <div className='manage-groups-wrapper'>
            <div style={{ fontWeight: "500", fontSize: "20px" }}>Manage Groups</div>

            <div className="create-groups-button form--label" style={{ margin: '30px 0px 22px 0px' }}>
                <span>Create Group</span> <img src={plusIcon} onClick={() => setisCreateGroupModal(true)} alt="add" />
            </div>

            <div className="manage-groups-table-wrapper">
                <Table dataSource={manageGroupsDataSource} columns={manageGroupsColumns} pagination={false} />
            </div>
            <Modal
                centered
                title={<div style={{ fontSize: '20px', fontWeight: "500" }}>Client Information</div>}
                open={isCreateGroupModal}
                onCancel={() => { setisCreateGroupModal(false); setisEditMode(false) }}
                wrapClassName="create-group-modal-form"
                footer={false}
                closeIcon={<img src={CloseIcon} alt="" />}>

                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    // autoComplete="off"
                    layout="vertical"
                >
                    <Row gutter={[30, 0]} align="bottom">
                        <Col xs={24} sm={24} md={12} lg={12}>
                            <Form.Item
                                label="Group Name"
                                name="groupName"
                                rules={[{ required: false, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12}>
                            <Form.Item
                                label="Select Care Home"
                                name="selectCareHome"
                                rules={[{ required: false, message: 'Required field' }]}
                            >
                                <Dropdown
                                    menu={{ items }}
                                    trigger={["click"]}
                                    open={isOpenDropdown}
                                    onOpenChange={setisOpenDropdown}
                                >
                                    <div
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                        style={{ height: "39px" }}
                                        className="select-dropdown-btn fs-14 fw-400 border-radius-4"
                                    >
                                        <Space>
                                            {checkedList?.length ? (<p className='text-ellipsis'>{checkedList?.join(", ")}</p>) : "Select Status"}
                                            <DownOutlined />
                                        </Space>
                                    </div>
                                </Dropdown>
                            </Form.Item>

                        </Col>

                    </Row>

                    {isEditMode &&
                        <div className="list-homes-table-wrapper" style={{ marginBottom: '20px' }}>
                            <Table dataSource={listHomesDataSource} columns={listHomesColumns} pagination={false} />
                        </div>}


                    {/* <Button type="primary" htmlType="submit">
                  Submit
                </Button> */}

                    <div className='cus-footer-buttons'>
                        <Button className='inner-cus-footer-btn btn--cancel' onClick={() => setisCreateGroupModal(false)}>Cancel</Button>
                        <Button className='inner-cus-footer-btn btn--save'>Save</Button>
                    </div>


                </Form>
            </Modal>


        </div>
    )
}

export default ManageGroups