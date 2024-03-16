import React, { useState } from 'react'

// Ant Components
import { Col, Modal, Row, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table';

// Components
import CommonReportTable from '../CommonReportTable/CommonReportTable';
import CommonReportChildFilters from '../CommonReportChildFilters/CommonReportChildFilters';

// Table and Filters Mock Data and Interface
import { DailyShiftReportFilters, DailyShiftReportMockData, DetailsReportModalMockData } from '../../../mock/ReportMockData/DailyShiftReportMockData';
import { dailyShiftReportMockDataInterface, detailsShiftReportMockDataInterface } from '../../../types/ReportsInterface';

// SCSS
import "./DailyShiftReport.scss";

// Assets
import blueEyeIcon from "../../../assets/icons/Report/blue-eye.png";

// Single Details Modal Table Column Data
const DetailsModalTableColumnData: ColumnsType<detailsShiftReportMockDataInterface> = [
    {
        title: <span style={{ paddingLeft: "2rem" }}>Staff Name</span>,
        dataIndex: 'staffName',
        key: 'staffName',
        width: 300,
        render: (staffName: any) => (
            <span className='fs-14 fw-400 m-0 line-height-22 title-color' style={{ paddingLeft: "2rem" }}>{staffName}</span>
        )
    },
    {
        title: 'Shift Name',
        dataIndex: 'shiftName',
        key: 'shiftName',
        align: "center",
        render: (shiftName: any) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{shiftName}</span>,
    },
    {
        title: <span style={{ paddingRight: "2rem" }}>Shift Start time</span>,
        dataIndex: 'shiftStartTime',
        key: 'shiftStartTime',
        align: "right",
        render: (shiftStartTime: any) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color' style={{ paddingRight: "2rem" }}>{shiftStartTime}</span>,
    },
];

const DailyShiftReport = () => {
    const [isOpenDailyShiftDetailsModal, setIsOpenDailyShiftDetailsModal] = useState<boolean>(false);

    // Daily Shift Report Table Columns
    const DailyShiftReportTableColumnData: ColumnsType<dailyShiftReportMockDataInterface> = [
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
            render: (clientName: string) => (
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{clientName}</span>
            )
        },
        {
            title: 'Booked Shifts',
            dataIndex: 'bookedShifts',
            key: 'bookedShifts',
            align: "center",
            render: (bookedShifts: string) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{bookedShifts}</span>,
        },
        {
            title: 'Accepted Shifts',
            dataIndex: 'acceptedShifts',
            key: 'acceptedShifts',
            align: "center",
            render: (acceptedShifts: string) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{acceptedShifts}</span>,
        },
        {
            title: 'Booking Pending',
            dataIndex: 'bookingPending',
            key: 'bookingPending',
            align: "center",
            render: (bookingPending: string) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{bookingPending}</span>,
        },
        {
            title: "View",
            dataIndex: "View",
            key: 'View',
            render: () => (
                <div className="fs-12 fw-400 line-height-22">
                    <img src={blueEyeIcon} alt='Delete' className='cursor-pointer' onClick={(e: any) => setIsOpenDailyShiftDetailsModal(true)} />
                </div>
            ),
        },
    ];


    return (
        <div className='reports-child-wrapper-class'>
            <Row>
                <Col xs={24} className="filter-div">
                    <CommonReportChildFilters filtersArray={DailyShiftReportFilters} />
                </Col>
                <Col xs={24}>
                    <CommonReportTable tableHeader={DailyShiftReportTableColumnData} tableData={DailyShiftReportMockData} />
                </Col>
            </Row>

            {/* Details Modal */}
            <Modal
                centered
                wrapClassName="daily-shit-report-details-modal"
                closeIcon={false}
                closable={false}
                open={isOpenDailyShiftDetailsModal}
                footer={false}
            >
                <p className="fs-20 fw-500 title-color line-height-28 m-0 common-border-bottom" style={{ paddingBottom: "1.063rem" }}>
                    Shift Booking Details
                </p>
                <Table columns={DetailsModalTableColumnData} dataSource={DetailsReportModalMockData} pagination={false} className="common-report-table" scroll={{ x: "max-content", scrollToFirstRowOnChange: true }} />

                <button className="btn-secondary" onClick={() => setIsOpenDailyShiftDetailsModal(false)} style={{ marginTop: "2rem" }}>Close</button>
            </Modal>
        </div>
    )
}

export default DailyShiftReport