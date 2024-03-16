import { Dropdown, MenuProps, Table } from 'antd';
import React, { useState } from 'react';
import ActionIcon from "../../../assets/icons/ShiftManger/action-icon.svg";
import ModifyIcon from "../../../assets/icons/ClientManageShift/modify-icon.png";
import CancelIcon from "../../../assets/icons/ClientManageShift/cancel-icon.png";
import { ColumnsType } from 'antd/es/table';
import './ClientRequestedShift.scss';
import { ClientManageShitsTableData } from '../../../mock/ClientManageShift';
import RequestNewShift from './RequestNewShift/RequestNewShift';
import ModifyStaffRequirement from '../../ShiftManager/ShiftBooking/ShiftsModals/ModifyStaffRequirement/ModifyStaffRequirement';
import DeleteModal from '../../../shared/DeleteModal/DeleteModal';
import SelectWrapper from '../../../shared/SelectWrapper/SelectWrapper';

const ClientRequestedShift = () => {
    const [isRequestNewShift, setIsRequestNewShift] = useState<boolean>(false);
    const [isModifyStaffModalOpen, setIsModifyStaffModalOpen] = useState<boolean>(false);
    const [isCancelModelOpen, setIsCancelModelOpen] = useState<boolean>(false);
    const [count, setCount] = useState<any>(0);
    const handleChange = () => { }
    const items: MenuProps['items'] | undefined = [
        {
            label: (
                <div className="d-flex align-center" style={{ gap: "18px", paddingBottom: "12px", paddingTop: "12px" }} onClick={() => setIsModifyStaffModalOpen(true)}>
                    <img src={ModifyIcon} alt="AllocateStaff" />
                    <span className="fs-14 fw-400 line-height-22 title-color">Modify staff requirement</span>
                </div>
            ),
            key: "1",
        },
        {
            label: (
                <div className="d-flex align-center" style={{ gap: "18px", paddingBottom: "12px" }} onClick={() => setIsCancelModelOpen(true)}>
                    <img src={CancelIcon} alt="ModifyStaff" />
                    <span className="fs-14 fw-400 line-height-22 title-color">Cancel Shift</span>
                </div>
            ),
            key: "2",
        },
    ];
    const columns: ColumnsType<any> = [
        {
            title: 'Sr #',
            dataIndex: 'id',
            key: 'id',
            render: (text: any) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{text}</span>,
        },
        {
            title: 'Shift Date',
            dataIndex: 'shiftDate',
            key: 'shiftDate',
            render: (text: any) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{text}</span>,
        },
        {
            title: 'Shift Type',
            dataIndex: 'shiftType',
            key: 'shiftType',
            render: (text: any) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{text}</span>,
        },
        {
            title: 'Staff Type',
            dataIndex: 'staffType',
            key: 'staffType',
            render: (text: any) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{text}</span>,
        },
        {
            title: 'Requested By',
            dataIndex: 'requestedBy',
            key: 'requestedBy',
            render: (text: any) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{text}</span>,
        },
        {
            title: 'Staff Required',
            dataIndex: 'staffRequired',
            key: 'staffRequired',
            render: (text: any) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{text}</span>,
        },
        {
            title: 'Shift Status',
            dataIndex: 'shiftStatus',
            key: 'shiftStatus',
            render: (text: any) =>
                <span className='fs-14 fw-700 m-0 line-height-22 title-color' style={{ color: text === 'Booking Awaiting' ? '#F7B923' : text === 'Partially Booked' ? '#65CDF0' : text === 'Booking Completed' ? '#52C41A' : '' }}>{text}</span>,
        },
        {
            title: 'Action',
            key: 'action',
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
    return (
        <>
            <div className='client-requested-shifts-wrapper'>
                <div className='client-requested-wrap bg-white'>
                    <div className='client-requested-btn' onClick={() => setIsRequestNewShift(true)}>
                        <button type='button' className='cursor-pointer fs-16 line-height-22 white-color fw-600'>Request New Shift</button>
                    </div>
                    <div className='client-requested-filters w-100'>
                        <label className="fs-14 fw-600 line-height-18 m-0 label-color">Shift Status</label>
                        <SelectWrapper
                            size="large"
                            name="manageSelect"
                            placeHolder="All"
                            options={[]}
                            defaultValue="All"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='client-requested-table'>
                    <Table columns={columns} dataSource={ClientManageShitsTableData} pagination={false} className="booking-table-content" scroll={{ x: "max-content" }} />
                </div>
            </div>
            <DeleteModal
                setDeleteModal={setIsCancelModelOpen}
                deleteModal={isCancelModelOpen}
                submitTitle="Cancel"
                cancelTitle="Delete"
                title="Do you want to delete this user"
                onCancel={() => setIsCancelModelOpen(false)}
            />
            <RequestNewShift isRequestNewShift={isRequestNewShift} setIsRequestNewShift={setIsRequestNewShift} />
            <ModifyStaffRequirement open={isModifyStaffModalOpen} onCancel={() => setIsModifyStaffModalOpen(false)} counter={count} setCounter={setCount} />
        </>
    )
}

export default ClientRequestedShift