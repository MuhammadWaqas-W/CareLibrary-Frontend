import { useState } from 'react';
import { Button, Dropdown, Input, MenuProps, Table } from 'antd';
import SelectWrapper from '../../shared/SelectWrapper/SelectWrapper';
import ActionIcon from "../../assets/icons/ShiftManger/action-icon.svg";
import SearchIcon from "../../assets/images/OnBoarding/Search.svg";
import ViewIcon from "../../assets/icons/view-icon.svg";
import DeleteIcon from "../../assets/icons/delete-icon-outlined.svg";
import { ColumnsType } from 'antd/es/table';
import DeleteModal from '../../shared/DeleteModal/DeleteModal';
import AddAdminUserModal from './AddAdminUser/AddAdminUserModal';
import ViewUserDetailsModal from './ViewUserDetails/ViewUserDetailsModal';
import './ClientUserManagement.scss';

const ClientUserManagement = () => {
    const [isDeleteModal, setIsDeleteModal] = useState(false);
    const [addUserModalOpen, setAddUserModalOpen] = useState(false);
    const [viewUserDetailsModal, setViewUserDetailsModal] = useState(false);

    const items: MenuProps['items'] | undefined = [
        {
            label: (
                <div className="d-flex align-center" style={{ gap: "18px", padding: "12px" }} onClick={() => setViewUserDetailsModal(true)}>
                    <img width={24} src={ViewIcon} alt="AllocateStaff" />
                    <span className="fs-14 fw-400 line-height-22 title-color">View Detail</span>
                </div>
            ),
            key: "1",
        },
        {
            label: (
                <div className="d-flex align-center" style={{ gap: "18px", padding: "0 12px 12px 12px" }} onClick={() => setIsDeleteModal(true)}>
                    <img width={24} src={DeleteIcon} alt="ModifyStaff" />
                    <span className="fs-14 fw-400 line-height-22 title-color">Delete</span>
                </div>
            ),
            key: "2",
        }
    ];

    // const dropdownMenu: any = {
    //     'Booking Completed': items,
    //     'Booking Awaiting': itemsTwo,
    // }[record.shiftNa

    const columns: ColumnsType<any> = [
        {
            title: 'Sr #',
            dataIndex: 'id',
            key: 'id',
            render: (text: any) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{text}</span>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text: any) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{text}</span>,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (text: any) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{text}</span>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            render: (text: any) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{text}</span>,
        },
        {
            title: 'User Type',
            dataIndex: 'userType',
            key: 'userType',
            render: (text: any) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{text}</span>,
        },
        {
            title: 'Date of joining',
            dataIndex: 'joiningDate',
            key: 'joiningDate',
            render: (text: any) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{text}</span>,
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_: any, { shiftName }: { shiftName: string } = { shiftName: 'abc' }) => (
                <div>
                    <Dropdown
                        menu={{ items }}
                        placement="bottomRight"
                        trigger={["click"]}
                        overlayClassName="distraction-alerts-dropdown"
                        className="actionDropDown "
                    >
                        <div className="border-color cursor-pointer">
                            <img src={ActionIcon} alt="" />
                        </div>
                    </Dropdown>
                </div >
            ),
        }


    ];

    const ClientUserManagementData = [
        {
            id: "01",
            name: "Amber Allison",
            status: "Active",
            email: "abf@gmail.com",
            userType: "Health Care Assistant ",
            joiningDate: "12-01-2020",
        },
        {
            id: "02",
            name: "John Doe",
            status: "Active",
            email: "abf@gmail.com",
            userType: "Support Worker",
            joiningDate: "12-01-2020",
        },
        {
            id: "03",
            name: "Amber Allison",
            status: "Active",
            email: "abf@gmail.com",
            userType: "Support Worker",
            joiningDate: "12-01-2020",
        },
        {
            id: "04",
            name: "David",
            status: "Active",
            email: "abf@gmail.com",
            userType: "Support Worker",
            joiningDate: "12-01-2020",
        },
        {
            id: "05",
            name: "James",
            status: "Active",
            email: "abf@gmail.com",
            userType: "Support Worker",
            joiningDate: "12-01-2020",
        },
    ];

    const handleChange = () => { }
    const handleDeleteSubmit = () => {
        setIsDeleteModal(false);
    };
    const handleCancelSubmit = () => {
        setIsDeleteModal(false);
    };
    return (
        <div className='client-user-management-wrapper'>
            <div className='client-user-wrap bg-white'>
                <Button type='primary' onClick={() => setAddUserModalOpen(true)}>Add Admin User</Button>
                <div className='client-user-select'>
                    <SelectWrapper
                        name='department'
                        options={[
                            { value: "dementia_department", label: "Dementia Department" },
                            { value: "elder_department", label: "Elder's Department" },
                            { value: "childern_department", label: "Childern's Department" },
                            { value: "all", label: "All" },
                        ]}
                        label="Department"
                        required={false}
                        onChange={handleChange}
                        placeHolder="All"
                    />
                </div>
            </div>
            <div className="input-search-wrapper" >
                <Input
                    style={{ margin: "30px 0", maxWidth: "350px", float: 'right' }}
                    placeholder="search"
                    prefix={<img src={SearchIcon} alt="search icon" className="icon" />}
                />
            </div>
            <div className='client-user-manangement-table'>
                <Table columns={columns} dataSource={ClientUserManagementData} pagination={false} className="client-user-manangement-table-content" scroll={{ x: "max-content" }} />
            </div>
            <DeleteModal
                setDeleteModal={setIsDeleteModal}
                deleteModal={isDeleteModal}
                submitTitle="Cancel"
                cancelTitle="Delete"
                title="Do you want to delete this user"
                onSubmit={handleDeleteSubmit}
                onCancel={handleCancelSubmit}
            />
            <AddAdminUserModal setAddUserModalOpen={setAddUserModalOpen} addUserModalOpen={addUserModalOpen} />
            <ViewUserDetailsModal setViewUserDetailsModal={setViewUserDetailsModal} viewUserDetailsModal={viewUserDetailsModal} />
        </div>

    )
}

export default ClientUserManagement