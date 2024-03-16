
import { Button, Dropdown, MenuProps, Select, Space, Table, Pagination, Input } from "antd";
import { PlusCircleOutlined } from '@ant-design/icons';
import { useState } from "react";
import { ColumnsType } from "antd/es/table";
import actionImg from "../../../assets/icons/Setting/actionImg.svg";
import editIcon from "../../../assets/icons/edit-blue.svg";
import crossAllocation from "../../../assets/icons/Setting/crossAllocation.svg";
import deleteIcon from "../../../assets/icons/delete-icon-outlined.svg";
import "./SettingJobRole.scss";
import "../../../sass/common.scss";
import { data, DataType } from "../../../mock/SettingJobRole.ts";
import AddModal from "./AddModal";
import CrossAllocationModal from "./CrossAllocationModal";
import searchIcon from "../../../assets/icons/search.svg";
import coloredCopyIcon from "../../../assets/icons/Report/colored-copy.png";
import coloredCsvIcon from "../../../assets/icons/Report/colored-csv.png";
import coloredXlsIcon from "../../../assets/icons/Report/colored-xls.png";
import DeleteModal from "../../../shared/DeleteModal/DeleteModal";


const SettingJobRole = () => {
    const [addEditJobRole, setAddEditJobRole] = useState<boolean>(false);
    const [showCrossAllocation, setShowCrossAllocation] = useState<boolean>(false);
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
                <Space onClick={() => { setShowCrossAllocation(true) }}>
                    <img src={crossAllocation} className="d-flex align-center" alt="delete" height={18} width={16} />
                    <span>Cross Allocation</span>
                </Space>),
            key: "2",
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
            title: "S.No",
            dataIndex: "Srno",
        },
        {
            title: "Position Name",
            dataIndex: "PositionName",
        },
        {
            title: "Short Form",
            dataIndex: "ShortForm",
        },
        {
            title: "Role",
            dataIndex: "Role",
        },

        {
            title: "Action",
            dataIndex: "action",
            render: () => (
                <div>
                    <Dropdown
                        menu={{ items }}
                        placement="bottom"
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
            <div className='setting-job-role'>
                <div className="header border-radius-10">
                    <Button className="add-job-role-btn fs-14 fw-600 border-radius-10 d-flex justify-center align-items-center" onClick={() => setAddEditJobRole(true)}>
                        Add Job Role
                        <PlusCircleOutlined style={{marginLeft:"20px"}}/>
                    </Button>

                    <div>
                        <label className="fs-14 fw-600">User Role</label><br />
                        <Select
                        // suffixIcon={<img src={deleteIcon} className="d-flex align-center" alt="delete" height={18} width={16} />}
                            className="d-flex"
                            placeholder="Select User Role"
                            options={[
                                { value: 'Medical Staff ', label: 'Medical Staff ' },
                                { value: 'Medical Staff', label: 'Medical Staff' },
                            ]}
                        />
                    </div>

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
                            prefix={<img src={searchIcon} alt="searchIcon" width={22} height={22} style={{ marginRight: '0.623rem' }} />}
                        />
                        <Space size={[25, 0]}>
                            <img src={coloredCopyIcon} alt="csv" className='img-hover' />
                            <img src={coloredCsvIcon} alt="csv" className='img-hover' />
                            <img src={coloredXlsIcon} alt="csv" className='img-hover' />

                        </Space>
                    </Space>

                </div>

                <div className="record-table  border-radius-10">
                    <Table scroll={{ x: 768 }} columns={columns} dataSource={data} pagination={pagination} onChange={(pagination: any) => setPagination(pagination)} className="common-setting-table" />
                </div>
            </div>
            <AddModal addEditJobRole={addEditJobRole} setAddEditJobRole={setAddEditJobRole} />
            <CrossAllocationModal showCrossAllocation={showCrossAllocation} setShowCrossAllocation={setShowCrossAllocation} />
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

export default SettingJobRole