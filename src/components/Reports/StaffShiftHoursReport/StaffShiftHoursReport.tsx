import React from 'react'

// Ant Components
import { Col, Progress, Row, Space } from 'antd'
import type { ColumnsType } from 'antd/es/table';

// Components
import CommonReportChildFilters from '../CommonReportChildFilters/CommonReportChildFilters';
import CommonReportTable from '../CommonReportTable/CommonReportTable';

// Assets
import circularIcon from "../../../assets/icons/Report/circular-arrows.png";
import blackClockIcon from "../../../assets/icons/Report/black-clock-icon.png";

// Table and Filters Mock Data and Interface
import { StaffShiftHoursReportFilters, StaffShiftHoursReportMockData } from '../../../mock/ReportMockData/StaffShiftHoursReportMockData';
import { staffShiftHoursReportMockDataInterface } from '../../../types/ReportsInterface';

// Staff Shift Hours Report Table Columns
const StaffShiftHoursReportTableColumnData: ColumnsType<staffShiftHoursReportMockDataInterface> = [
  {
    title: 'Sr #',
    dataIndex: 'key',
    key: 'key',
    render: (key: React.Key) =>
      <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{key}</span>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    align: "center",
    render: (name: string) => (
      <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{name}</span>
    )
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
    title: 'No. of Shifts',
    dataIndex: 'noOfShifts',
    key: 'noOfShifts',
    align: "center",
    render: (noOfShifts: string) =>
      <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{noOfShifts}</span>,
  },
  {
    title: 'Worked Hours',
    dataIndex: 'workedHours',
    key: 'workedHours',
    align: "center",
    render: (workedHours: string) =>
      <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{workedHours}</span>,
  },
];


const StaffShiftHoursReport = () => {
  return (
    <div className='reports-child-wrapper-class'>
      <Row gutter={[0, 0]}>
        <Col xs={{ span: 24 }} lg={{ span: 12 }} className="filter-div">
          <CommonReportChildFilters filtersArray={StaffShiftHoursReportFilters} rightCards={true} />
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 11 }} lg={{ span: 5, offset: 1 }} className="filter-div">
          <Space size={16} wrap>
            <Progress type="circle" strokeColor="#F9896B" size={78} percent={65} format={(percent: any) => <img src={circularIcon} alt="circular arrows" />} />
            <div>
              <p className='fs-26 fw-500 line-height-45 m-0 right-card-heading' style={{ color: "#F9896B" }}>6789.78</p>
              <p className='fs-20 fw-400 label-color line-height-28 m-0'>No. of Shifts</p>
            </div>
          </Space>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 11, offset: 2 }} lg={{ span: 5, offset: 1 }} className="filter-div">
          <Space size={16} wrap>
            <Progress type="circle" strokeColor="#51459E" size={78} percent={85} format={(percent: any) => <img src={blackClockIcon} alt="black clock" />} />
            <div>
              <p className='fs-26 fw-500 line-height-45 m-0 right-card-heading' style={{ color: "#51459E" }}>969.75</p>
              <p className='fs-20 fw-400 label-color line-height-28 m-0'>Worked Hours</p>
            </div>
          </Space>
        </Col>
        <Col xs={24}>
          <CommonReportTable tableHeader={StaffShiftHoursReportTableColumnData} tableData={StaffShiftHoursReportMockData} />
        </Col>
      </Row>
    </div>
  )
}

export default StaffShiftHoursReport