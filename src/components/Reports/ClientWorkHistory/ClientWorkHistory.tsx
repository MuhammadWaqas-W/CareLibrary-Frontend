import React from 'react'

// Ant Components
import { Col, Row } from 'antd'
import type { ColumnsType } from 'antd/es/table';

// Components
import CommonReportTable from '../CommonReportTable/CommonReportTable';
import CommonReportChildFilters from '../CommonReportChildFilters/CommonReportChildFilters';

// Table and Filters Mock Data and Interface
import { ClientWorkHistoryReportFilters, ClientWorkHistoryMockData } from '../../../mock/ReportMockData/ClientWorkHistoryMockData';
import { clientWorkHistoryMockDataInterface } from '../../../types/ReportsInterface';


// Client Work History Table Columns
const ClientWorkHistoryReportTableHeader: ColumnsType<clientWorkHistoryMockDataInterface> = [
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
        title: 'Staff Name',
        dataIndex: 'staffName',
        key: 'staffName',
        align: "center",
        render: (staffName: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{staffName}</span>,
    },

    {
        title: 'Job Date',
        dataIndex: 'jobDate',
        key: 'jobDate',
        align: "center",
        render: (jobDate: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{jobDate}</span>,
    },

    {
        title: 'Worked Hours',
        dataIndex: 'workedHours',
        key: 'workedHours',
        render: (workedHours: string) => (
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{workedHours}</span>
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
        render: (shiftAmount:string) => (
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{shiftAmount}</span>
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
];


const ClientWorkHistory = () => {
    return (
        <div className='reports-child-wrapper-class'>
            <Row>
                <Col xs={24} className="filter-div">
                    <CommonReportChildFilters filtersArray={ClientWorkHistoryReportFilters} extraCards={true} />
                </Col>
                <Col xs={24}>
                    <CommonReportTable tableHeader={ClientWorkHistoryReportTableHeader} tableData={ClientWorkHistoryMockData} />
                </Col>
            </Row>
        </div>
    )
}

export default ClientWorkHistory