import React from 'react'

// Ant Components
import { Col, Row } from 'antd'
import type { ColumnsType } from 'antd/es/table';

// Components
import CommonReportTable from '../CommonReportTable/CommonReportTable';
import CommonReportChildFilters from '../CommonReportChildFilters/CommonReportChildFilters';

// Table and Filters Mock Data and Interface
import { ExtraHoursReportFilters, ExtraHoursReportTableMockData } from '../../../mock/ReportMockData/ExtraHoursMockData';
import { extraHoursReportTableMockDataInterface } from '../../../types/ReportsInterface';

// Extra Hours Report Table Columns
const ExtraHoursReportTableHeader: ColumnsType<extraHoursReportTableMockDataInterface> = [
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
    render: (staffName: string) =>
      <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{staffName}</span>,
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
    title: 'Shift Name',
    dataIndex: 'shiftName',
    key: 'shiftName',
    align: "center",
    render: (shiftName: string) =>
      <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{shiftName}</span>,
  },
  {
    title: 'First Check In',
    dataIndex: 'firstCheckIn',
    key: 'firstCheckIn',
    align: "center",
    render: (firstCheckIn: string) =>
      <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{firstCheckIn}</span>,
  },
  {
    title: 'Last Check In',
    dataIndex: 'lastCheckIn',
    key: 'lastCheckIn',
    render: (lastCheckIn: string) => (
      <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{lastCheckIn}</span>
    ),
    align: "center",
  },
  {
    title: 'Extra Hours',
    dataIndex: 'extraHours',
    key: 'extraHours',
    render: (extraHours: string) => (
      <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{extraHours}</span>
    ),
    align: "center",
  },
  {
    title: 'Approval Status',
    dataIndex: 'approvalStatus',
    key: 'approvalStatus',
    render: (approvalStatus: string) => (
      <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{approvalStatus}</span>
    ),
    align: "center",
  },
];

const ExtraHoursReport = () => {
  return (
    <div className='reports-child-wrapper-class'>
      <Row>
        <Col xs={24} className="filter-div">
          <CommonReportChildFilters filtersArray={ExtraHoursReportFilters} />
        </Col>
        <Col xs={24}>
          <CommonReportTable tableHeader={ExtraHoursReportTableHeader} tableData={ExtraHoursReportTableMockData} />
        </Col>
      </Row>
    </div>
  )
}

export default ExtraHoursReport