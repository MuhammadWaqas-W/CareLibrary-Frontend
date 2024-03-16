import React from 'react'

// Ant Components
import { Col, Row } from 'antd'
import type { ColumnsType } from 'antd/es/table';

// Components
import CommonReportTable from '../CommonReportTable/CommonReportTable';
import CommonReportChildFilters from '../CommonReportChildFilters/CommonReportChildFilters';

// Table and Filters Mock Data and Interface
import { ShiftRateSettingFilters, ShiftRateSettingMockData } from '../../../mock/ReportMockData/ShiftRateSettingMockData';
import { shiftRateSettingMockDataInterface } from '../../../types/ReportsInterface';

// Client Shift Details Table Columns
const ClientShiftDetailsTableColumnData: ColumnsType<shiftRateSettingMockDataInterface> = [
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
        render: (shiftName: string) => (
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{shiftName}</span>
        )
    },
    {
        title: 'Start Time',
        dataIndex: 'startTime',
        key: 'startTime',
        align: "center",
        render: (startTime: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{startTime}</span>,
    },
    {
        title: 'End Time',
        dataIndex: 'endTime',
        key: 'endTime',
        align: "center",
        render: (endTime: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{endTime}</span>,
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        align: "center",
        render: (date: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{date}</span>,
    },
    {
        title: 'Client Shift Break Pay Status',
        dataIndex: 'clientShiftBreakPayStatus',
        key: 'clientShiftBreakPayStatus',
        align: "center",
        render: (clientShiftBreakPayStatus: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{clientShiftBreakPayStatus}</span>,
    },
    {
        title: 'Client Shift Break Time',
        dataIndex: 'clientShiftBreakTime',
        key: 'clientShiftBreakTime',
        align: "center",
        render: (clientShiftBreakTime: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{clientShiftBreakTime}</span>,
    },
    {
        title: 'Staff Shift Break Time Pay Status',
        dataIndex: 'staffShiftBreakTimePayStatus',
        key: 'staffShiftBreakTimePayStatus',
        align: "center",
        render: (staffShiftBreakTimePayStatus: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{staffShiftBreakTimePayStatus}</span>,
    },
    {
        title: 'Staff Shift Break Time',
        dataIndex: 'staffShiftBreakTime',
        key: 'staffShiftBreakTime',
        align: "center",
        render: (staffShiftBreakTime: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{staffShiftBreakTime}</span>,
    },
    {
        title: 'Payment Type',
        dataIndex: 'paymentType',
        key: 'paymentType',
        align: "center",
        render: (paymentType: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{paymentType}</span>,
    },
    {
        title: 'Split Rate Applicable',
        dataIndex: 'splitRateApplicable',
        key: 'splitRateApplicable',
        align: "center",
        render: (splitRateApplicable: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{splitRateApplicable}</span>,
    },
    {
        title: 'Tax Vat Applicable',
        dataIndex: 'taxVatApplicable',
        key: 'taxVatApplicable',
        align: "center",
        render: (taxVatApplicable: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{taxVatApplicable}</span>,
    },
    {
        title: 'Department',
        dataIndex: 'department',
        key: 'department',
        align: "center",
        render: (department: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{department}</span>,
    },
    {
        title: 'Transport Applicable',
        dataIndex: 'transportApplicable',
        key: 'transportApplicable',
        align: "center",
        render: (transportApplicable: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{transportApplicable}</span>,
    },
    {
        title: 'Transport Type',
        dataIndex: 'transportType',
        key: 'transportType',
        align: "center",
        render: (transportType: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{transportType}</span>,
    },
    {
        title: 'Transport Client Rate',
        dataIndex: 'transportClientRate',
        key: 'transportClientRate',
        align: "center",
        render: (transportClientRate: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{transportClientRate}</span>,
    },
    {
        title: 'Transport Staff Rate',
        dataIndex: 'transportStaffRate',
        key: 'transportStaffRate',
        align: "center",
        render: (transportStaffRate: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{transportStaffRate}</span>,
    },
    {
        title: 'Shift Break Staff Info',
        dataIndex: 'shiftBreakStaffInfo',
        key: 'shiftBreakStaffInfo',
        align: "center",
        render: (shiftBreakStaffInfo: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{shiftBreakStaffInfo}</span>,
    },
];


const ClientShiftDetails = () => {
    return (
        <div className='reports-child-wrapper-class'>
            <Row>
                <Col xs={24} className="filter-div">
                    <CommonReportChildFilters filtersArray={ShiftRateSettingFilters} />
                </Col>
                <Col xs={24}>
                    <CommonReportTable tableHeader={ClientShiftDetailsTableColumnData} tableData={ShiftRateSettingMockData} />
                </Col>
            </Row>
        </div>
    )
}

export default ClientShiftDetails