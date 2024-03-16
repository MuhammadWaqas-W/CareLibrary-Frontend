import React, { useState } from 'react';

// Ant Components
import { Col, Row, Space } from 'antd'
import type { ColumnsType } from 'antd/es/table';

// Components
import CommonReportTable from '../CommonReportTable/CommonReportTable'
import CommonReportChildFilters from '../CommonReportChildFilters/CommonReportChildFilters';
import AttendanceReportDetails from './AttendanceReportDetails/AttendanceReportDetails';

// Table and Filters Mock Data and Interface
import { StaffAttendanceReportFilters, StaffAttendanceReportMockData } from '../../../mock/ReportMockData/StaffAttendanceReportMockData';
import { staffAttendanceReportMockDataInterface } from '../../../types/ReportsInterface';

// Assets
import blueEyeIcon from "../../../assets/icons/Report/blue-eye.png";


const StaffAttendanceReport = () => {
    const [isAttendanceReportDetails, setIsAttendanceReportDetails] = useState<boolean>(false);

    // Staff Attendance Report Table Columns
    const StaffAttendaceReportTableHeader: ColumnsType<staffAttendanceReportMockDataInterface> = [
        {
            title: 'Sr #',
            dataIndex: 'key',
            key: 'key',
            render: (key: React.Key) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{key}</span>,
        },
        {
            title: 'Staff Name',
            dataIndex: 'staffName',
            key: 'staffName',
            align: "center",
            render: (_, { staffImg, staffName }: any) => (
                <div style={{ marginLeft: "auto", textAlign: "center", width: "80%" }}>
                    <Space size={16} style={{ width: "100%" }}>
                        <img src={staffImg} alt={staffImg} />
                        <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{staffName}</span>
                    </Space>
                </div>
            )
        },
        {
            title: 'Client Name',
            dataIndex: 'clientName',
            key: 'clientName',
            align: "center",
            render: (clientName: string) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{clientName}</span>,
        },
        {
            title: 'Shift Date',
            dataIndex: 'shiftDate',
            key: 'shiftDate',
            align: "center",
            render: (shiftDate: string) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{shiftDate}</span>,
        },
        {
            title: 'Shift Name',
            dataIndex: 'shiftName',
            key: 'shiftName',
            align: "center",
            render: (shiftName: string) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{shiftName}</span>,
        },
        {
            title: 'Total Hours',
            dataIndex: 'totalHours',
            key: 'totalHours',
            render: (totalHours: string) => (
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{totalHours}</span>
            ),
            align: "center",
        },
        {
            title: 'Out of Office Hours',
            dataIndex: 'outOfOfficeHours',
            key: 'outOfOfficeHours',
            render: (outOfOfficeHours: string) => (
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{outOfOfficeHours}</span>
            ),
            align: "center",
        },
        {
            title: "View",
            dataIndex: "View",
            key: 'View',
            render: () => (
                <div className="fs-12 fw-400 line-height-22">
                    <img src={blueEyeIcon} alt='Delete' className='cursor-pointer' onClick={() => setIsAttendanceReportDetails(true)} />
                </div>
            ),
        },
    ];

    return (
        <div className='reports-child-wrapper-class'>
            {!!isAttendanceReportDetails ? (
                <AttendanceReportDetails />
            ) : (
                <Row>
                    <Col xs={24} className="filter-div">
                        <CommonReportChildFilters filtersArray={StaffAttendanceReportFilters} />
                    </Col>
                    <Col xs={24}>
                        <CommonReportTable tableHeader={StaffAttendaceReportTableHeader} tableData={StaffAttendanceReportMockData} />
                    </Col>
                </Row>
            )}
        </div>
    )
}

export default StaffAttendanceReport