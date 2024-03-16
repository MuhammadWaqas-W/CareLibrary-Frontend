import React from 'react'
import "./WebinarHistory.scss"
import WebinarHistoryFilters from './WebinarHistoryFilters/WebinarHistoryFilters'
import viewIcon from "../../../assets/icons/view-icon.svg"
import searchIcon from "../../../assets/icons/search.svg";
import { Input, Space } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import { WebinarHistoryTableData } from '../../../mock/WebinarHistoryData';
import { useNavigate } from 'react-router-dom';

const WebinarHistory = () => {

    const navigate = useNavigate()

  const columns: ColumnsType<any> = [
    {
        title: <span>S.No#</span>,
        dataIndex: 'sNo',
        key: 'sNo',
        render: (_, text) =>
            <Space >
                <span className='fs-14 fw-400 title-color'>
                    {text.sNo}
                </span>
            </Space>,
    },
    {
        title: <span>Webinar Title</span>,
        dataIndex: 'webinarTitle',
        key: 'webinarTitle',
        render: (_, text) =>
            <Space >
                <span className='fs-14 fw-400 title-color'>
                    {text.webinarTitle}
                </span>
            </Space>,
    },
    {
        title: <span>Date</span>,
        dataIndex: 'date',
        key: 'date',
        render: (_, text) =>
            <Space >
                <span className='fs-14 fw-400 title-color'>
                    {text.date}
                </span>
            </Space>,
    },
    {
        title: <span>Duration</span>,
        dataIndex: 'duration',
        key: 'duration',
        render: (_, text) =>
            <Space >
                <span className='fs-14 fw-400 title-color'>
                    {text.duration}
                </span>
            </Space>,
    },
    {
        title: <span>Venue </span>,
        dataIndex: 'venue',
        key: 'venue',
        render: (_, text) =>
            <Space >
                <span className='fs-14 fw-400 title-color'>
                    {text.venue}
                </span>
            </Space>,
    },
    {
        title: <span>Attendees</span>,
        dataIndex: 'attendees',
        key: 'attendees',
        render: (_, text) =>
            <Space >
                <span className='fs-14 fw-400 title-color'>
                    {text.attendees}
                </span>
            </Space>,
    },


    {
        title: <div className='equal--width-tb'>Actions</div>,
        dataIndex: "actions",
        key: "actions",
        width: 150,
        render: (_, text) => (
           <img src={viewIcon} className='cursor-pointer' onClick={() => navigate(`/webinar/webinar-history/view-details/${text.id}`)} alt="" />
        ),
    },
];
  return (
    <div className='webinar-history-main-wrapper'>
    <div className="inner-main-head">
      <div className="search-and-filters">
        <WebinarHistoryFilters/>
      </div>
      <Input
        className="search-input"
        placeholder="Search"
        prefix={<img src={searchIcon} alt="searchIcon" width={24} height={24} style={{ marginRight: '0.623rem' }} />}
      />
    </div>

    <div className="webinar-history-table-wrapper">
      <Table className="wrapper-table" columns={columns} dataSource={WebinarHistoryTableData} scroll={{ x: "max-content" }} pagination={{ pageSize: 7 }} />
    </div>
  </div>
  )
}

export default WebinarHistory