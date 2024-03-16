import React from 'react'

// Ant Components
import { Col, Row } from 'antd'
import type { ColumnsType } from 'antd/es/table';

// Components
import CommonReportTable from '../CommonReportTable/CommonReportTable';
import CommonReportChildFilters from '../CommonReportChildFilters/CommonReportChildFilters';

// Table and Filters Mock Data and Interface
import { StaffDataReportFilters, StaffDataReportMockData } from '../../../mock/ReportMockData/StaffDataReportMockData';
import { staffDataReportMockDataInterface } from '../../../types/ReportsInterface';

// Staff Data Report Table Columns
const StaffDataReportTableColumnData: ColumnsType<staffDataReportMockDataInterface> = [
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
        render: (staffName: string) => (
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{staffName}</span>
        )
    },
    {
        title: 'Staff Type',
        dataIndex: 'staffType',
        key: 'staffType',
        align: "center",
        render: (staffType: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{staffType}</span>,
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
        align: "center",
        render: (gender: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{gender}</span>,
    },
    {
        title: 'DOJ',
        dataIndex: 'doj',
        key: 'doj',
        align: "center",
        render: (doj: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{doj}</span>,
    },
    {
        title: 'DOB',
        dataIndex: 'dob',
        key: 'dob',
        align: "center",
        render: (dob: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{dob}</span>,
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        align: "center",
        render: (email: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{email}</span>,
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
        align: "center",
        render: (phone: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{phone}</span>,
    },
    {
        title: 'Staff Band',
        dataIndex: 'staffBand',
        key: 'staffBand',
        align: "center",
        render: (staffBand: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{staffBand}</span>,
    },
    {
        title: 'EMP. Status',
        dataIndex: 'empStatus',
        key: 'empStatus',
        align: "center",
        render: (empStatus: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{empStatus}</span>,
    },
    {
        title: 'Profile Percentage',
        dataIndex: 'profilePercentage',
        key: 'profilePercentage',
        align: "center",
        render: (profilePercentage: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{profilePercentage}</span>,
    },
    {
        title: 'User Status',
        dataIndex: 'userStatus',
        key: 'userStatus',
        align: "center",
        render: (userStatus: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{userStatus}</span>,
    },
    {
        title: 'Visa Type',
        dataIndex: 'visaType',
        key: 'visaType',
        align: "center",
        render: (visaType: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{visaType}</span>,
    },
];

const StaffDataReport = () => {
    return (
        <div className='reports-child-wrapper-class'>
            <Row>
                <Col xs={24} className="filter-div">
                    <CommonReportChildFilters filtersArray={StaffDataReportFilters} />
                </Col>
                <Col xs={24}>
                    <CommonReportTable tableHeader={StaffDataReportTableColumnData} tableData={StaffDataReportMockData} />
                </Col>
            </Row>
        </div>
    )
}

export default StaffDataReport