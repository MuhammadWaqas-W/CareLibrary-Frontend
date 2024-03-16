import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, MenuProps, Pagination, Select, Space } from "antd";
import editIcon from "../../../assets/icons/edit-blue.svg";
import deleteIcon from "../../../assets/icons/delete-icon-outlined.svg";
import "./SettingBreakTime.scss";
import Table, { ColumnsType } from "antd/es/table";
import searchIcon from "../../../assets/icons/search.svg";
import { useState } from "react";
import DeleteModal from "../../../shared/DeleteModal/DeleteModal";
import AddModal from "./AddModal";
import actionImg from "../../../assets/icons/Setting/actionImg.svg";
import { BreakTimeData ,DataType} from "../../../mock/BreakTime";

function SettingBreakTime() {
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
                <Space  onClick={() => setIsDeleteModal(true)}>
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
            title: "Break Time",
            dataIndex: "BreakTime",
        },
        {
            title: "Care Home",
            dataIndex: "CareHome",
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
     
            <div className='setting-break-time'>
                <div className="header border-radius-10">
                    <h1 className="fs-16 fw-500">Add Break Time</h1>
                    <Button className="add-job-role-btn fs-14 fw-600 border-radius-10 d-flex justify-center align-items-center" onClick={() => setAddEditJobRole(true)}>
                    Break Time
                        <PlusCircleOutlined />
                    </Button>

                    <div>
                        <label className="fs-14 fw-600">  Care Home</label><br />
                        <Select
                            className="d-flex"
                            placeholder="Select"
                            options={[
                                { value: 'Medical Staff ', label: 'Medical Staff ' },
                                { value: 'Medical Staff', label: 'Medical Staff' },
                            ]}
                        />
                    </div>

                </div>
                <div className="filter-bar input-search-wrapper">
                <Pagination
                    current={pagination.current}
                    showSizeChanger={true}
                    defaultPageSize={5}
                    pageSize={pagination.pageSize}
                    rootClassName="custom-pagination-wrapper-class"
                    total={BreakTimeData.length}
                    onChange={(current, pageSize) =>
                        setPagination({ current, pageSize })
                    }
                />
                <Space className='input-export-icons' size={[30, 10]}>
                    <Input
                        className="search-input"
                        placeholder="Search"
                        prefix={<img src={searchIcon} alt="searchIcon" width={24} height={24} style={{ marginRight: '0.623rem' }} />}
                    />
                  
                </Space>

                </div>

                <div className="record-table  border-radius-10">
                    <Table scroll={{ x: 768 }} columns={columns} dataSource={BreakTimeData} pagination={pagination} onChange={(pagination: any) => setPagination(pagination)} className="common-setting-table" />
                </div>
            </div>
            <AddModal addEditJobRole={addEditJobRole} setAddEditJobRole={setAddEditJobRole} />
            <DeleteModal
                setDeleteModal={setIsDeleteModal}
                deleteModal={isDeleteModal}
                submitTitle='Yes'
                cancelTitle='No'
                title='Do you want to discard this ?'
                onSubmit={handleDeleteSubmit}
                onCancel={handleCancelSubmit}
            />
          
        </>

    );
}

export default SettingBreakTime;
