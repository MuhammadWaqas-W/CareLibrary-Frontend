import { Button, Col, Dropdown, Modal, Row, Space, Table, Tooltip } from 'antd'
import { Form, Input } from 'antd';
import infoIcon from "../../../../assets/icons/info-icon.svg"
import plusIcon from "../../../../assets/icons/plus-icon.svg"
import CloseIcon from "../../../../assets/icons/close-icon.svg"
import threeDots from "../../../../assets/icons/three-dots.svg"
import editIcon from "../../../../assets/icons/edit-icon.svg"
import deleteIcon from "../../../../assets/icons/delete-icon.svg"
import { useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
import "./ClientManagerForm.scss"
import DeleteModal from '../../../../shared/DeleteModal/DeleteModal';




const ManageDepartmentsForm = (props: any) => {

    const [isManageDepartmentModal, setIsManageDepartmentModal] = useState(false);
    const [isDeleteModal, setIsDeleteModal] = useState(false);

    const handleDeleteSubmit = () => {
        setIsDeleteModal(false);
    };
    const handleCancelSubmit = () => {
        setIsDeleteModal(false);
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
        setIsManageDepartmentModal(false)
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const items: any = [
        {
            label: (
                <div onClick={() => setIsManageDepartmentModal(true)} style={{ display: "flex", alignItems: 'center', gap: '10px' }}>
                    <img src={editIcon} alt="editIcon" /> Edit
                </div>
            ),
            key: "1",
        },
        {
            label: (
                <div onClick={()=>setIsDeleteModal(true)} style={{ display: "flex", alignItems: 'center', gap: '10px' }}>
                    <img src={deleteIcon} alt="editIcon" /> Delete
                </div>
            ),
            key: "2",
        },
    ];

    const dataSource = [
        {
            key: '1',
            sNo: '1',
            departmentName: 'Carer Support',
            description: "carer role for someone they know to improve that person's quality....",
        },
        {
            key: '2',
            sNo: '2',
            departmentName: 'Help At home',
            description: "Our duties include administering medications, cleaning a client's ....",
        },
    ];

    const columns = [
        {
            title: 'S. No.',
            dataIndex: 'sNo',
            key: 'sNo',
        },
        {
            title: 'Department Name',
            dataIndex: 'departmentName',
            key: 'departmentName',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Action',
            dataIndex: 'address',
            key: 'address',
            render: () => (
                <Dropdown
                    menu={{ items }}
                    placement="bottomRight"
                    trigger={["click"]}
                    className="actionDropDown"
                >
                    <Space>
                        <div className="border-color cursor-pointer">
                            <img src={threeDots} alt="menu" />
                        </div>
                    </Space>
                </Dropdown>
            ),
        },

    ];


    return (
        <>
            <div className='client-manager-information-form-wrapper'>
                <div className='form-heading heading-flex'>Manage Departments
                    <Tooltip
                        placement="bottomLeft"
                        autoAdjustOverflow={true}
                        //   arrow={false}
                        showArrow={false}
                        color="#65CDF0"
                        overlayInnerStyle={{
                            backgroundColor: "#65CDF0",
                            color: "#ffffff",
                            width: "499px",
                        }}
                        title='You can create a department(For example Ward, A-Wing etc) within the client. This will give you the ability to manage shifts, rates, users etc specific to the department.'
                    >
                        <img src={infoIcon} alt="infoIcon" />
                    </Tooltip>
                </div>
                <div className="add-department-button form--label">
                    <span>Department Name</span> <img onClick={() => setIsManageDepartmentModal(true)} src={plusIcon} alt="add" />
                </div>
                <div className="department-table-wrapper">
                    <Table dataSource={dataSource} columns={columns} pagination={false} scroll={{ x: "max-content" }}/>
                </div>
                <Modal
                    centered
                    title={<div style={{ fontSize: '24px', fontWeight: "500" }}>Manage Departments</div>}
                    open={isManageDepartmentModal}
                    onCancel={() => setIsManageDepartmentModal(false)}
                    wrapClassName="add-department-form"
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
                                    label="Department Name"
                                    name="departmentName"
                                    rules={[{ required: true, message: 'Required field' }]}
                                >
                                    <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item
                                    label="Please type the description here"
                                    name="information"
                                    rules={[{ required: false, message: 'Required field' }]}
                                >
                                    <TextArea rows={4} style={{ width: '830px' }} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <div className='cus-footer-buttons' style={{flexWrap:"wrap"}}>
                            <Button className='inner-cus-footer-btn btn--cancel' onClick={() => setIsManageDepartmentModal(false)}>Cancel</Button>
                            <Button className='inner-cus-footer-btn btn--save' htmlType='submit'>Save</Button>
                        </div>
                    </Form>
                </Modal>
                <div className="form-lower-buttons">
                    <Button className='inner-button inner-form-buttons-audit'>Audit</Button>
                    <Button className='inner-button inner-form-buttons-save'>Save</Button>
                    <Button className='inner-button inner-form-buttons-continue' onClick={() => props.onChildStateChange(props.selectedStepValue + 1)}>Continue</Button>
                </div>
            </div>
            <DeleteModal
                setDeleteModal={setIsDeleteModal}
                deleteModal={isDeleteModal}
                submitTitle='Cancel'
                cancelTitle='Delete'
                title='Do you want to delete this ticket'
                onSubmit={handleDeleteSubmit}
                onCancel={handleCancelSubmit}
            />
        </>
    )
}

export default ManageDepartmentsForm