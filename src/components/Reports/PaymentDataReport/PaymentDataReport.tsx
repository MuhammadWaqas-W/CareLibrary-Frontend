import React from 'react'



// Ant Components
import { Col, Row } from 'antd'
import type { ColumnsType } from 'antd/es/table';

// Components
import CommonReportTable from '../CommonReportTable/CommonReportTable';
import CommonReportChildFilters from '../CommonReportChildFilters/CommonReportChildFilters';

// Table and Filters Mock Data and Interface
import { PaymentDataReportFilters, PaymentDataReportMockData } from '../../../mock/ReportMockData/PaymentDataReportMockData';
import { paymentDataReportMockDataInterface } from '../../../types/ReportsInterface';

// Payment Data Report Table Columns
const PaymentDataReportTableColumnData: ColumnsType<paymentDataReportMockDataInterface> = [
    {
        title: 'Sr #',
        dataIndex: 'key',
        key: 'key',
        render: (key: React.Key) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{key}</span>,
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
        title: 'Shift Day',
        dataIndex: 'shiftDay',
        key: 'shiftDay',
        align: "center",
        render: (shiftDay: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{shiftDay}</span>,
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
        title: 'Client Name',
        dataIndex: 'clientName',
        key: 'clientName',
        align: "center",
        render: (clientName: string) => (
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{clientName}</span>
        )
    },
    {
        title: 'Shift Type',
        dataIndex: 'shiftType',
        key: 'shiftType',
        align: "center",
        render: (shiftType: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{shiftType}</span>,
    },
    {
        title: 'Designation',
        dataIndex: 'designation',
        key: 'designation',
        align: "center",
        render: (designation: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{designation}</span>,
    },
    {
        title: 'Employee Status',
        dataIndex: 'employeeStatus',
        key: 'employeeStatus',
        align: "center",
        render: (employeeStatus: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{employeeStatus}</span>,
    },
    {
        title: 'Total Hours',
        dataIndex: 'totalHours',
        key: 'totalHours',
        align: "center",
        render: (totalHours: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{totalHours}</span>,
    },
    {
        title: 'Pay Rate',
        dataIndex: 'payRate',
        key: 'payRate',
        align: "center",
        render: (payRate: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{payRate}</span>,
    },
    {
        title: 'Total Payable',
        dataIndex: 'totalPayable',
        key: 'totalPayable',
        align: "center",
        render: (totalPayable: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{totalPayable}</span>,
    },
    {
        title: 'Client Rate',
        dataIndex: 'clientRate',
        key: 'clientRate',
        align: "center",
        render: (clientRate: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{clientRate}</span>,
    },
    {
        title: 'Total Receivable',
        dataIndex: 'totalReceivable',
        key: 'totalReceivable',
        align: "center",
        render: (totalReceivable: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{totalReceivable}</span>,
    },
];

const PaymentDataReport = () => {
    return (
        <div className='reports-child-wrapper-class'>
            <Row>
                <Col xs={24} className="filter-div">
                    <CommonReportChildFilters filtersArray={PaymentDataReportFilters} />
                </Col>
                <Col xs={24}>
                    <CommonReportTable tableHeader={PaymentDataReportTableColumnData} tableData={PaymentDataReportMockData} />
                </Col>
            </Row>
        </div>
    )
}

export default PaymentDataReport