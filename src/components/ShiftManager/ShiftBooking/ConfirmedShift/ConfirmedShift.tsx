import { Avatar, Dropdown, Input, Pagination, Space, Table } from "antd";
import React, { useState } from "react";
import { ConfirmedShiftBookingTableData } from "../../../../mock/ShiftManageData";
import ActionIcon from "../../../../assets/images/manageShift/action-icon.png";
import AllocateStaffIcon from "../../../../assets/icons/ShiftManger/allocate-staff-icon.png";
import ModifyStaffIcon from "../../../../assets/images/manageShift/modifyIcon.png";
import CancelShiftIcon from "../../../../assets/icons/ShiftManger/cancel-shift-icon.png";
import "./ConfirmedShift.scss";
import CancelShiftModal from "../ShiftsModals/CancelShiftModal/CancelShiftModal";
import ModifyStaffRequirement from "../ShiftsModals/ModifyStaffRequirement/ModifyStaffRequirement";
import AllocateShift from '../ShiftsModals/AllocateShift/AllocateShift';
import SearchIcon from "../../../../assets/images/OnBoarding/Search.svg";
import SelectWrapper from "../../../../shared/SelectWrapper/SelectWrapper";

const ConfirmedShift = () => {
    const [isCancelModalOpen, setIsCancelModalOpen] = useState<boolean>(false);
    const [isModifyStaffModalOpen, setIsModifyStaffModalOpen] = useState<boolean>(false);
    const [isAllocateShiftModalOpen, setIsAllocateShiftModalOpen] = useState<boolean>(false);
    const [cancelShiftData, setCancelShiftData] = useState("");
    const [pagination, setPagination] = useState({ current: 1, pageSize: 5 });
    const [count, setCount] = useState<any>(0);
    const [allocateShiftData, setAllocateShiftData] = useState({
        careHome: '',
        shiftDate: '',
        userType: '',
        chooseShift: '',
        startTime: '',
        endTime: '',
        department: '',
        requestedBy: '',
        staffName: '',
        acceptence: false,
        information: '',
        provideNumber: false,
        orderNumber: ''
    });

    const handleAddModal = (value: any, type: string) => {
        setAllocateShiftData({ ...allocateShiftData, [type]: value })
    }

    const handleChange = () => { }
    console.log('cancelShiftData', cancelShiftData);

    const items = [
        {
            label: (
                <div className="d-flex align-center" style={{ gap: "18px", paddingBottom: "12px", paddingTop: "12px" }} onClick={() => setIsAllocateShiftModalOpen(true)}>
                    <img src={AllocateStaffIcon} alt="AllocateStaff" />
                    <span className="fs-14 fw-400 line-height-22 title-color">Allocate Staff</span>
                </div>
            ),
            key: "1",
        },
        {
            label: (
                <div className="d-flex align-center" style={{ gap: "18px", paddingBottom: "12px" }} onClick={() => setIsModifyStaffModalOpen(true)}>
                    <img src={ModifyStaffIcon} alt="ViewProfile" />
                    <span className="fs-14 fw-400 line-height-22 title-color">Modify staff requirement</span>
                </div>
            ),
            key: "2",
        },
        {
            label: (
                <div className="d-flex align-center" style={{ gap: "18px", paddingBottom: "12px" }} onClick={() => setIsCancelModalOpen(true)}>
                    <img src={CancelShiftIcon} alt="ViewProfile" />
                    <span className="fs-14 fw-400 line-height-22 title-color">Cancel Shift</span>
                </div>
            ),
            key: "3",
        },
    ];
    const columns = [
        {
            title: "Sr #",
            dataIndex: "id",
            key: "id",
            render: (text: any) => <span className="fs-14 fw-400 m-0 line-height-22 title-color">{text}</span>,
        },
        {
            title: "Staff Name",
            dataIndex: "staffName",
            key: "staffName",
            render: (text: any) => <span className="fs-14 fw-400 m-0 line-height-22 title-color">{text}</span>,
        },
        {
            title: "Staff Photo",
            dataIndex: "staffPhoto",
            key: "staffPhoto",
            render: (text: any) => <Avatar style={{ backgroundColor: '#65CDF0', verticalAlign: 'middle' }} size="large">
                HC
            </Avatar>,
        },
        {
            title: "Shift Date",
            dataIndex: "shiftDate",
            key: "shiftDate",
            render: (text: any) => <span className="fs-14 fw-400 m-0 line-height-22 title-color">{text}</span>,
        },
        {
            title: "Shift Type",
            dataIndex: "shiftType",
            key: "shiftType",
            render: (text: any) => <span className="fs-14 fw-400 m-0 line-height-22 title-color">{text}</span>,
        },
        {
            title: "Shift Name",
            dataIndex: "shiftName",
            key: "shiftName",
            render: (text: any) => <span className="fs-14 fw-400 m-0 line-height-22 title-color">{text}</span>,
        },
        {
            title: "Booked By",
            dataIndex: "bookedBy",
            key: "bookedBy",
            render: (text: any) => (
                <span
                    className="fs-14 fw-400 m-0 line-height-22 title-color"
                >
                    {text}
                </span>
            ),
        },
        {
            title: "Shift Rate",
            dataIndex: "shiftRate",
            key: "shiftRate",
            render: (text: any) => (
                <span
                    className="fs-14 fw-400 m-0 line-height-22 title-color"
                >
                    {text}
                </span>
            ),
        },
        {
            title: "Action",
            key: "action",
            render: (_: any, record: any) => (
                <div>

                    <Dropdown menu={{ items }} placement="bottomRight" trigger={["click"]} overlayClassName="distraction-alerts-dropdown" className="actionDropDown ">
                        <Space>
                            <div className="border-color cursor-pointer">
                                <img src={ActionIcon} alt="" />
                            </div>
                        </Space>
                    </Dropdown>
                </div>
            ),
        },
    ];
    return (
        <>
            <div className="manager-confirmed-shift-wrapper w-100">
                <div className="manager-confirmed-shift-filters bg-white border-radius-10">
                    <label className="fs-14 fw-600 line-height-18 m-0">Care Home</label>
                    <div className="manager-confirmed-select w-100">
                        <SelectWrapper
                            size="large"
                            name="manageSelect"
                            placeHolder="Arlington Manor"
                            options={[]}
                            defaultValue="Arlington Manor"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="manager-confirmed-shift-table">
                    <div className="d-flex justify-between align-center">
                        <Pagination
                            current={pagination.current}
                            // responsive={true}
                            showSizeChanger={true}
                            defaultPageSize={5}
                            pageSize={pagination.pageSize}
                            rootClassName="custom-pagination-wrapper-class"
                            total={ConfirmedShiftBookingTableData.length}
                            // showTotal={(total) => `Total ${total} items`}
                            onChange={(current, pageSize) => setPagination({ current, pageSize })}
                        />
                        <div className="input-search-wrapper d-flex w-100" style={{maxWidth: "350px"}}>
                            <Input className="w-100" placeholder="search" prefix={<img src={SearchIcon} alt="search icon" className="icon" width={20} height={20} />} style={{  marginBottom: "5px" }} />
                        </div>
                    </div>
                    <Table columns={columns} dataSource={ConfirmedShiftBookingTableData} pagination={pagination} className="booking-table-content" scroll={{ x: "max-content" }} />
                </div>
            </div>
            <AllocateShift open={isAllocateShiftModalOpen} onCancel={() => setIsAllocateShiftModalOpen(false)} allocateShift={allocateShiftData} handleChange={handleAddModal} />
            <ModifyStaffRequirement open={isModifyStaffModalOpen} onCancel={() => setIsModifyStaffModalOpen(false)} counter={count} setCounter={setCount} />
            <CancelShiftModal placeholder={'Staff are not Avaliable'} label={'Specify reason for Cancelling Shift'} open={isCancelModalOpen} onCancel={() => setIsCancelModalOpen(false)} onChange={(val: any) => setCancelShiftData(val.target.value)} />
        </>
    );
};

export default ConfirmedShift;
