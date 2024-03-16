import React from 'react'

// Ant Components
import { Col, Row } from 'antd'
import type { ColumnsType } from 'antd/es/table';

// Components
import CommonReportTable from '../CommonReportTable/CommonReportTable';
import CommonReportChildFilters from '../CommonReportChildFilters/CommonReportChildFilters';

// Table and Filters Mock Data and Interface
import { StaffWorkHistoryReportFilters, StaffWorkHistoryReportMockData } from '../../../mock/ReportMockData/StaffWorkHistoryMockData';
import { staffWorkHistoryReportMockDataInterface } from '../../../types/ReportsInterface';

// Staff Work History Report Table Columns
const StaffWorkHistoryTableHeader: ColumnsType<staffWorkHistoryReportMockDataInterface> = [
    {
        title: 'Sr #',
        dataIndex: 'key',
        key: 'key',
        render: (key: React.Key) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{key}</span>,
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
        title: 'Shift Hours',
        dataIndex: 'shiftHours',
        key: 'shiftHours',
        render: (shiftHours: string) => (
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{shiftHours}</span>
        ),
        align: "center",
    },
    {
        title: 'Hourly Rate(£)',
        dataIndex: 'hourlyRate',
        key: 'hourlyRate',
        render: (hourlyRate: string) => (
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{hourlyRate}</span>
        ),
        align: "center",
    },
    {
        title: 'Shift Amount',
        dataIndex: 'shiftAmount',
        key: 'shiftAmount',
        render: (shiftAmount: string) => (
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{shiftAmount}</span>
        ),
        align: "center",
    },
    {
        title: 'Invoice Number',
        dataIndex: 'invoiceNumber',
        key: 'invoiceNumber',
        render: (invoiceNumber: string) => (
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{invoiceNumber}</span>
        ),
        align: "center",
    },
    {
        title: 'Shift Status',
        dataIndex: 'shiftStatus',
        key: 'shiftStatus',
        render: (shiftStatus: string) => (
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{shiftStatus}</span>
        ),
        align: "center",
    },
    {
        title: 'Payment Date',
        dataIndex: 'paymentDate',
        key: 'paymentDate',
        render: (paymentDate: string) => (
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{paymentDate}</span>
        ),
        align: "center",
    },
];

const StaffWorkHistory = () => {
    return (
        <div className='reports-child-wrapper-class'>
            <Row>
                <Col xs={24} className="filter-div">
                    <CommonReportChildFilters filtersArray={StaffWorkHistoryReportFilters} extraCards={true} />
                </Col>
                <Col xs={24}>
                    <CommonReportTable tableHeader={StaffWorkHistoryTableHeader} tableData={StaffWorkHistoryReportMockData} />
                </Col>
            </Row>
        </div>
    )
}

export default StaffWorkHistory