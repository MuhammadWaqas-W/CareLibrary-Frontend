import React from 'react'

// Ant Components
import { Col, Popover, Row } from 'antd'
import type { ColumnsType } from 'antd/es/table';

// Components
import CommonReportTable from '../CommonReportTable/CommonReportTable';
import CommonReportChildFilters from '../CommonReportChildFilters/CommonReportChildFilters';

// Table and Filters Mock Data and Interface
import { activityReportInterface } from '../../../types/ReportsInterface';
import { ActivityReportFilters, ActivityReportMockData } from '../../../mock/ReportMockData/ActivityReportMockData';

// Activity Report Table Columns
const ActivityReportTableColumnData: ColumnsType<activityReportInterface> = [
    {
        title: 'Sr #',
        dataIndex: 'key',
        key: 'key',
        render: (key: React.Key) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{key}</span>,
    },
    {
        title: 'Activity Date',
        dataIndex: 'activityDate',
        key: 'activityDate',
        align: "center",
        render: (activityDate: string) => (
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{activityDate}</span>
        )
    },
    {
        title: 'Activity Name',
        dataIndex: 'activityName',
        key: 'activityName',
        width: 150,
        align: "center",
        ellipsis: true,

        render: (activityName: string) => (
            <Popover
                arrow={false}
                overlayInnerStyle={{ margin: "1rem", padding: 0, height:"auto" }}
                trigger="hover"
                placement="top"
                content={
                    <>
                        <span className='fs-14 fw-400 m-0 line-height-22 white-color btn-secondary card-box-shadow common-border border-radius-8' style={{ padding: "0.938rem 1.125rem" }} >{activityName}</span>
                    </>
                }
            >
                <p className='fs-14 fw-400 m-0 line-height-22 title-color'>{activityName}</p>
            </Popover>
        )
    },
    {
        title: 'Activity Type',
        dataIndex: 'activityType',
        key: 'activityType',
        align: "center",
        render: (activityType: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{activityType}</span>,
    },
    {
        title: 'Activity By',
        dataIndex: 'activityBy',
        key: 'activityBy',
        align: "center",
        render: (activityBy: string) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{activityBy}</span>,
    },
];

const ActivityReports = () => {
    return (
        <div className='reports-child-wrapper-class'>
            <Row>
                <Col xs={24} className="filter-div">
                    <CommonReportChildFilters filtersArray={ActivityReportFilters} />
                </Col>
                <Col xs={24}>
                    <CommonReportTable tableHeader={ActivityReportTableColumnData} tableData={ActivityReportMockData} />
                </Col>
            </Row>
        </div>
    )
}

export default ActivityReports