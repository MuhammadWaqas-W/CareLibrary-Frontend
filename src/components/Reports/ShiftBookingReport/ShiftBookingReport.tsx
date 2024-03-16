import React from 'react'

// Ant Components
import { Col, Row } from 'antd'
import type { ColumnsType } from 'antd/es/table';

// Components
import CommonReportTable from '../CommonReportTable/CommonReportTable';
import CommonReportChildFilters from '../CommonReportChildFilters/CommonReportChildFilters';

// Table and Filters Mock Data and Interface
import { ShiftBookingReportFilters, ShiftBookingReportMockData } from '../../../mock/ReportMockData/ShiftBookingReportMockData';
import { shiftBookingReportMockDataInterface } from '../../../types/ReportsInterface';

// Shift Booking Report Table Columns
const ShiftBookingReportTableHeader: ColumnsType<shiftBookingReportMockDataInterface> = [
    {
        title: 'Sr #',
        dataIndex: 'key',
        key: 'key',
        render: (key: React.Key) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{key}</span>,
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
        title: 'Staff Type',
        dataIndex: 'staffType',
        key: 'staffType',
        align: "center",
        render: (staffType: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{staffType}</span>,
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
        title: 'Shift Date',
        dataIndex: 'shiftDate',
        key: 'shiftDate',
        align: "center",
        render: (shiftDate: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{shiftDate}</span>,
    },
    {
        title: 'Booked By',
        dataIndex: 'bookedBy',
        key: 'bookedBy',
        render: (bookedBy: string) => (
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{bookedBy}</span>
        ),
        align: "center",
    },
    {
        title: 'Booked At',
        dataIndex: 'bookedAt',
        key: 'bookedAt',
        render: (bookedAt: string) => (
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{bookedAt}</span>
        ),
        align: "center",
    },
    {
        title: 'Requested By',
        dataIndex: 'requestedBy',
        key: 'requestedBy',
        render: (requestedBy: string) => (
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{requestedBy}</span>
        ),
        align: "center",
    },
];

const ShiftBookingReport = () => {
    return (
        <div className='reports-child-wrapper-class'>
            <Row>
                <Col xs={24} className="filter-div">
                    <CommonReportChildFilters filtersArray={ShiftBookingReportFilters} />
                </Col>
                <Col xs={24}>
                    <CommonReportTable tableHeader={ShiftBookingReportTableHeader} tableData={ShiftBookingReportMockData} />
                </Col>
            </Row>
        </div>
    )
}

export default ShiftBookingReport