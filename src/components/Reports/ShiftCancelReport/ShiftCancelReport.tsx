import React from 'react'

// Ant Components
import { Col, Row } from 'antd'
import type { ColumnsType } from 'antd/es/table';

// Components
import CommonReportTable from '../CommonReportTable/CommonReportTable';
import CommonReportChildFilters from '../CommonReportChildFilters/CommonReportChildFilters';

// Table and Filters Mock Data and Interface
import { ShiftCancelReportFilters, ShiftCancelReportMockData } from '../../../mock/ReportMockData/ShiftCancelReportMockData';
import { shiftCancelReportMockDataInterface } from '../../../types/ReportsInterface';

// Shift Cancel Report Table Columns
const ShiftCancelReportTableHeader: ColumnsType<shiftCancelReportMockDataInterface> = [
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
        title: 'Staff Name',
        dataIndex: 'staffName',
        key: 'staffName',
        align: "center",
        render: (staffName: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{staffName}</span>,
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
        title: 'Shift Date',
        dataIndex: 'shiftDate',
        key: 'shiftDate',
        align: "center",
        render: (shiftDate: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{shiftDate}</span>,
    },
    {
        title: 'Cancelled By',
        dataIndex: 'cancelledBy',
        key: 'cancelledBy',
        render: (cancelledBy: string) => (
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{cancelledBy}</span>
        ),
        align: "center",
    },
    {
        title: 'Cancelled At',
        dataIndex: 'cancelledAt',
        key: 'cancelledAt',
        render: (cancelledAt: string) => (
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{cancelledAt}</span>
        ),
        align: "center",
    },
    {
        title: 'Cancel Reason',
        dataIndex: 'cancelReason',
        key: 'cancelReason',
        render: (cancelReason: string) => (
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{cancelReason}</span>
        ),
        align: "center",
    },
];


const ShiftCancelReport = () => {
    return (
        <div className='reports-child-wrapper-class'>
            <Row>
                <Col xs={24} className="filter-div">
                    <CommonReportChildFilters filtersArray={ShiftCancelReportFilters} />
                </Col>
                <Col xs={24}>
                    <CommonReportTable tableHeader={ShiftCancelReportTableHeader} tableData={ShiftCancelReportMockData} />
                </Col>
            </Row>
        </div>
    )
}

export default ShiftCancelReport