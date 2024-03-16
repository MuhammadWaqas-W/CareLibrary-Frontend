// import "../../../../sass/common.scss";
import { Button, Table, Space, Dropdown, MenuProps } from "antd";
import { PlusCircleOutlined } from '@ant-design/icons';
import { useState } from "react";
import "./EmailTemplates.scss";
import AddModal from "./AddModal";
import { ColumnsType } from "antd/es/table";
import editIcon from "../../../../assets/icons/edit-blue.svg";
import actionImg from "../../../../assets/icons/Setting/actionImg.svg";
import deleteIcon from "../../../../assets/icons/delete-icon-outlined.svg";
import DeleteModal from "../../../../shared/DeleteModal/DeleteModal";
import {DataType, TemplateData } from "../../../../mock/EmailTemplates";

function EmailTemplates() {
    const [addTemplate, setAddTemplate] = useState<boolean>(false);
    const [isDeleteModal, setIsDeleteModal] = useState(false);

    const handleDeleteSubmit = () => {
        setIsDeleteModal(false);
    };
    const handleCancelSubmit = () => {
        setIsDeleteModal(false);
    };

    const items: MenuProps["items"] = [
        {
            label: (
                <Space
                    onClick={() => setAddTemplate(true)}
                >
                    <img src={editIcon} alt="edit" className="d-flex align-center" height={18} width={16} />
                    <span className="m-0">Edit Details</span>
                </Space>),
            key: "1",
        },
        {
            label: (
                <Space onClick={() => setIsDeleteModal(true)}>
                    <img src={deleteIcon} className="d-flex align-center" alt="delete" height={18} width={16} />
                    <span>Delete</span>
                </Space>),
            key: "3",
        },
    ];

    const TemplateColumns: ColumnsType<DataType> = [
        {
            title: 'S. No.',
            dataIndex: 'SNo',
            key: 'SNo',
        },
        {
            title: 'Template Title',
            dataIndex: 'Title',
            key: 'Title',
        },
        {
            title: 'Body',
            dataIndex: 'Body',
            key: 'Body',
        },
        {
            title: "Action",
            dataIndex: "action",
            render: () => (
                <div>
                    <Dropdown
                        menu={{ items }}
                        placement="bottomLeft"
                        trigger={["click"]}
                        overlayClassName="actionDropDownBlocking my-dropdown-blocking"
                        overlayStyle={{ borderRadius: '4px' }}
                    >
                        <Space>
                            <div className="border-color cursor-pointer">
                                <img src={actionImg} alt="ElpiseIcon" />
                            </div>
                        </Space>
                    </Dropdown>
                </div>
            ),
        },
    ];

    return (
        <div className='email-templates'>

            <Button className="add-visa-type-btn fs-14 fw-600 border-radius-10 d-flex justify-center align-items-center" onClick={() => setAddTemplate(true)}>
                Create Template
                <PlusCircleOutlined />
            </Button>
            <div>
                <Table
                    className="common-setting-table"
                    columns={TemplateColumns}
                    dataSource={TemplateData}
                    pagination={false}
                    scroll={{ x: 768 }}
                />
            </div>

            <AddModal addTemplate={addTemplate} setAddTemplate={setAddTemplate} />
            <DeleteModal
                setDeleteModal={setIsDeleteModal}
                deleteModal={isDeleteModal}
                submitTitle='Yes'
                cancelTitle='No'
                title='Do you want to discard this ?'
                onSubmit={handleDeleteSubmit}
                onCancel={handleCancelSubmit}
            />
        </div>

    );
}

export default EmailTemplates;
