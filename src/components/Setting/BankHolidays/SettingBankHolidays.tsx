
import { Button, Dropdown, MenuProps, Space, Table, Pagination, Input } from "antd";
import { PlusCircleOutlined } from '@ant-design/icons';
import { useState } from "react";
import { ColumnsType } from "antd/es/table";
import actionImg from "../../../assets/icons/Setting/actionImg.svg";
import editIcon from "../../../assets/icons/edit-blue.svg";
import deleteIcon from "../../../assets/icons/delete-icon-outlined.svg";
import "./SettingBankHolidays.scss";
import "../../../sass/common.scss";
import { data, DataType } from "../../../mock/BankHolidays";
import AddModal from "./AddModal";
import searchIcon from "../../../assets/icons/search.svg";
import DeleteModal from "../../../shared/DeleteModal/DeleteModal";
import coloredCopyIcon from "../../../assets/icons/Report/colored-copy.png";
import coloredCsvIcon from "../../../assets/icons/Report/colored-csv.png";
import coloredXlsIcon from "../../../assets/icons/Report/colored-xls.png";

const SettingBankHolidays = () => {
    const [addEditJobRole, setAddEditJobRole] = useState<boolean>(false);
    const [pagination, setPagination] = useState({ current: 1, pageSize: 5 });
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
                    onClick={() => setAddEditJobRole(true)}
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

    const columns: ColumnsType<DataType> = [
        {
            title: "Sr.no",
            dataIndex: "Srno",
        },
        {
            title: "Holiday Name",
            dataIndex: "HolidayName",
        },
        {
            title: "Holiday Date",
            dataIndex: "HolidayDate",
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
        <>
            <div className='setting-Bank-Holiday'>
                <div className="record-table  border-radius-10">

                    <div className="header">
                        <Button className="add-job-role-btn fs-14 fw-600 border-radius-10 d-flex justify-center align-items-center" onClick={() => setAddEditJobRole(true)}>
                            Add Bank Holiday
                            <PlusCircleOutlined />
                        </Button>

                    </div>
                    <div className="filter-bar">
                        <Pagination
                            current={pagination.current}
                            showSizeChanger={true}
                            defaultPageSize={5}
                            pageSize={pagination.pageSize}
                            rootClassName="custom-pagination-wrapper-class"
                            total={data.length}
                            onChange={(current, pageSize) =>
                                setPagination({ current, pageSize })
                            }
                        />
                        <Space className='input-export-icons input-search-wrapper' size={[30, 10]}>
                            <Input
                                className="search-input"
                                placeholder="Search"
                                prefix={<img src={searchIcon} alt="searchIcon" width={24} height={24} style={{ marginRight: '0.623rem' }} />}
                            />
                            <Space size={[25, 0]}>
                                <img src={coloredCopyIcon} alt="csv" className='img-hover' />
                                <img src={coloredCsvIcon} alt="csv" className='img-hover' />
                                <img src={coloredXlsIcon} alt="csv" className='img-hover' />

                            </Space>
                        </Space>

                    </div>
                    <Table scroll={{ x: 768 }} columns={columns} dataSource={data} pagination={pagination} onChange={(pagination: any) => setPagination(pagination)} className="common-setting-table" />
                </div>
            </div>
            <AddModal addEditJobRole={addEditJobRole} setAddEditJobRole={setAddEditJobRole} />
            <DeleteModal
                setDeleteModal={setIsDeleteModal}
                deleteModal={isDeleteModal}
                submitTitle='Yes'
                cancelTitle='No'
                title='Do you want to discard this Details?'
                onSubmit={handleDeleteSubmit}
                onCancel={handleCancelSubmit}
            />
        </>


    )
}

export default SettingBankHolidays