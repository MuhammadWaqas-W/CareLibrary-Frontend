import React from 'react'

// Ant Components
import { Col, Row } from 'antd'
import type { ColumnsType } from 'antd/es/table';

// Components
import CommonReportTable from '../CommonReportTable/CommonReportTable'
import CommonReportChildFilters from '../CommonReportChildFilters/CommonReportChildFilters';

// Table and Filters Mock Data and Interface
import { StaffComplianceReportFilters, StaffComplianceReportMockData } from '../../../mock/ReportMockData/StaffComplianceReportMockData';
import { staffComplianceReportMockDataInterface } from '../../../types/ReportsInterface';

// Staff Compliance Report Table Columns
const StaffComplianceReportTableHeader: ColumnsType<staffComplianceReportMockDataInterface> = [
    {
        title: 'Sr #',
        dataIndex: 'key',
        key: 'key',
        render: (key: React.Key) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{key}</span>,
    },
    {
        title: 'Certificate Name',
        dataIndex: 'certificateName',
        key: 'certificateName',
        align: "left",
        render: (certificateName: string) => (
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{certificateName}</span>
        )
    },
    {
        title: 'User Type',
        dataIndex: 'userType',
        key: 'userType',
        align: "center",
        render: (userType: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{userType}</span>,
    },
    {
        title: 'Issue Date',
        dataIndex: 'issueDate',
        key: 'issueDate',
        align: "center",
        render: (issueDate: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{issueDate}</span>,
    },
    {
        title: 'Expired Date',
        dataIndex: 'expiryDate',
        key: 'expiryDate',
        align: "center",
        render: (expiryDate: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{expiryDate}</span>,
    },
];

const StaffComplianceReport = () => {
    return (
        <div className='reports-child-wrapper-class'>
            <Row>
                <Col xs={24} className="filter-div">
                    <CommonReportChildFilters filtersArray={StaffComplianceReportFilters} />
                </Col>
                <Col xs={24}>
                    <CommonReportTable tableHeader={StaffComplianceReportTableHeader} tableData={StaffComplianceReportMockData} />
                </Col>
            </Row>
        </div>
    )
}

export default StaffComplianceReport