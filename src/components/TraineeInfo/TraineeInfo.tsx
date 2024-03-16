import { Input, Space, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import React from 'react'
import { TraineeInfoTableData } from '../../mock/TraineeInfoData'
import "./TraineeInfo.scss"
import TraineeInfoFilters from './TraineeInfoFilters/TraineeInfoFilters'
import viewIcon from "../../assets/icons/view-icon.svg"
import searchIcon from "../../assets/icons/search.svg";
import { useNavigate } from 'react-router-dom'

const TraineeInfo = () => {

  const navigate = useNavigate()
  const columns: ColumnsType<any> = [
    {
      title: <span style={{ paddingLeft: "75px" }}>Trainee ID</span>,
      dataIndex: 'traineeID',
      key: 'traineeID',
      ellipsis: true,
      render: (_, text) =>
        <div className="cursor-pointer d-flex align-center "  >
          <img src={text.avatar} alt="avatar" style={{ width: "45px", height: "45px", borderRadius: "50%" }} />
          <span className='fs-14 fw-400 title-color' style={{ marginLeft: "30px" }}>
            {text.traineeID}
          </span>
        </div>
    },
    {
      title: <span>Trainee Name</span>,
      dataIndex: 'traineeName',
      key: 'traineeName',
      render: (_, text) =>
        <Space >
          <span className='fs-14 fw-400 title-color'>
            {text.traineeName}
          </span>
        </Space>,
    },
    {
      title: <span>Email</span>,
      dataIndex: 'email',
      key: 'email',
      render: (_, text) =>
        <Space >
          <span className='fs-14 fw-400 title-color'>
            {text.email}
          </span>
        </Space>,
    },
    {
      title: <span>Designation</span>,
      dataIndex: 'designation',
      key: 'designation',
      render: (_, text) =>
        <Space >
          <span className='fs-14 fw-400 title-color'>
            {text.designation}
          </span>
        </Space>,
    },
    {
      title: <span>No of Courses</span>,
      dataIndex: 'noOfCourses',
      key: 'noOfCourses',
      render: (_, text) =>
        <Space >
          <span className='fs-14 fw-400 title-color'>
            {text.noOfCourses}
          </span>
        </Space>,
    },
    {
      title: <div className='equal--width-tb'>Actions</div>,
      dataIndex: "actions",
      key: "actions",
      width: 150,
      render: (_, text) => (
        <img src={viewIcon} alt="" onClick={() => navigate(`/trainee-info/trainee-courses/${text.traineeID}`)}/>
      ),
    },
  ];

  return (
    <div className='trainee-info-main-wrapper'>
      <div className="inner-main-head">
        <div className="search-and-filters">
          <TraineeInfoFilters />
        </div>
        <Input
          className="search-input"
          placeholder="Search"
          prefix={<img src={searchIcon} alt="searchIcon" width={24} height={24} style={{ marginRight: '0.623rem' }} />}
        />
      </div>

      <div className="trainee-info-table-wrapper">
        <Table className="wrapper-table" columns={columns} dataSource={TraineeInfoTableData} scroll={{ x: "max-content" }} pagination={{ pageSize: 7 }} />
      </div>
    </div>
  )
}

export default TraineeInfo