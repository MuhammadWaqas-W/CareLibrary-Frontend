import React, { useState } from 'react'
import './ViewDetails.scss'
import userIcon from '../../../../assets/images/Webinar/user-icon.png'
import ViewDetailsFilters from './ViewDetailsFilters/ViewDetailsFilters'
import ViewDetailsTable from './ViewDetailsTable/ViewDetailsTable'
import { ColumnsType } from 'antd/es/table'
import { ViewDetailsTableMockData } from '../../../../mock/Webinar/WebinarHistory/WebinarHistoryData'

import iconDone from '../../../../assets/icons/Webinar/icon-tick-rounded.svg'
import iconFileCross from '../../../../assets/icons/Webinar/icon-file-cross.svg'
import iconRoundedCheck from '../../../../assets/icons/Webinar/check-rounded-icon.svg'
import { Button, Modal, Popover, Progress } from 'antd'
import BirthDayModal from '../../../../shared/BirthDayModal/BirthDayModal'
import UploadImage from '../../../Setting/SettingKeyInfo/UploadImage/UploadImage'

const ViewDetails = () => {

  const [isDownloadModal, setIsDownloadModal] = useState(false)
  const [isSendCertificate, setIsisSendCertificate] = useState(false)

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [progressPrecent, setProgressPrecent] = useState(0)
  const [isprogressPopover, setIsProgressPopover] = useState(false)


  const ViewDetailsTableHeader: ColumnsType<any> = [
    {
      title: 'S.No#',
      dataIndex: 'id',
      key: 'id',
      render: (id: any) =>
        <span className='fs-14 fw-400 m-0 text-left line-height-22 title-color'>{id}</span>,
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
      render: (fullName: any) =>
        <span className='fs-14 fw-400 m-0 text-left line-height-22 title-color'>{fullName}</span>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (email: any) =>
        <span className='fs-14 fw-400 m-0 text-left line-height-22 title-color'>{email}</span>,
    },
    {
      title: 'Join Time',
      dataIndex: 'joinTime',
      key: 'joinTime',
      render: (joinTime: any) =>
        <span className='fs-14 fw-400 m-0 text-left line-height-22 title-color'>{joinTime}</span>,
    },
    {
      title: 'Leave Time ',
      dataIndex: 'leaveTime',
      key: 'leaveTime',
      render: (leaveTime: any) => (
        <span className='fs-14 fw-400 m-0 text-left line-height-22 title-color'>{leaveTime}</span>
      ),
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration',
      render: (duration: any) => (
        <span className='fs-14 m-0 line-height-22 title-color'>{duration}</span>
      ),
    },
    {
      title: <div>Certificate Status</div>,
      dataIndex: "certificateStatus",
      key: "certificateStatus",
      width: 160,
      render: (certificateStatus: any) => (
        (() => {
          switch (certificateStatus) {
            case "done":
              return (
                <span style={{ width: "100%", display: 'flex', justifyContent: "center" }}><img src={iconDone} alt="" /></span>
              );
            case "rejected":
              return (
                <span style={{ width: "100%", display: 'flex', justifyContent: "center" }}><img src={iconFileCross} alt="" /></span>
              );
            default:
              return null;
          }
        })()
      ),
    },
  ];

  const handleClick = () => {
    let count = 0;
    const intervalId = setInterval(() => {
      count++;
      setProgressPrecent(count);
      setIsProgressPopover(true)
      if (count === 100) {
        clearInterval(intervalId);
      }
    }, 10);
  };

  const content = (
    <span>
      {progressPrecent}%
    </span>
  );

  const format = () => `${progressPrecent}%`;

  return (
    <div className='view-details-main-wrapper'>
      <div className="inner-flex-wrapper">
        <div className="d-flex" style={{ gap: '15px' }}>
          <div style={{ width: "50px", height: "50px" }}><img src={userIcon} alt="" /></div>
          <div className="d-flex flex-column">
            <span className='fs-14 fw-600'>Minor Injuries</span>
            <span className='fs-12 fw-400'>13:00 - 16:00 (3 hours )</span>
            <span className='fs-12 fw-400 '>05/02/2022s</span>
          </div>
        </div>
        <div className='dark-brown-color fs-14 fw-600'>Total Attendees : <span className='fs-14 fw-400'>40</span></div>
      </div>

      <div className="wrapper-filters-btns">
        <ViewDetailsFilters />
        <div className="inset-filters-btns">
          <Button className='filter-btn import-attendees-record-btn' onClick={() => setIsModalOpen(true)}>Import Attendees Record</Button>
          <Button className='filter-btn download-tempalte-btn' onClick={() => setIsDownloadModal(true)}>Download Tempalte </Button>
          <Button className='filter-btn send-certificate-btn' onClick={() => setIsisSendCertificate(true)}>Send Certificate</Button>
        </div>
      </div>

      <div className="table-fnc-head-wrapper">
        <ViewDetailsTable tableHeader={ViewDetailsTableHeader} tableData={ViewDetailsTableMockData} />
      </div>

      <BirthDayModal iconImage={iconRoundedCheck} isModalOpen={isDownloadModal} setIsOpenModal={setIsDownloadModal} birthDayMessage="Attendees Report template is downloaded Successfully" wishButtonText={<span style={{ padding: "0px 34px" }}>OK</span>} backgroundColor="#F7B923" />
      <BirthDayModal iconImage={iconRoundedCheck} isModalOpen={isSendCertificate} setIsOpenModal={setIsisSendCertificate} birthDayMessage="webinar Certificate Successfully send to David williams " wishButtonText={<span style={{ padding: "0px 34px" }}>OK</span>} backgroundColor="#F7B923" />

      {/* <UploadImage id={'1'} /> */}

      <Modal footer={false} centered open={isModalOpen} onOk={() => setIsModalOpen(false)} onCancel={() => setIsModalOpen(false)} wrapClassName='upload-wth-progress-wrapper'>
        <div className='inner-upload-wrapper'>
          <UploadImage id={'1'} />
          <Popover 
          content={content} 
          overlayClassName="upload-progress-popover"
          open={isprogressPopover}
          arrow={true}
          >
          
            <Progress
              percent={progressPrecent}
              strokeColor='#1FB036'
              strokeWidth={19}
              // width={50}
              showInfo={false}
            />
          </Popover>
          <div style={{ width: "fit-content", margin: "0 auto", marginTop: '20px' }}>
            <Button type='primary' className='w-auto bg-orange-color' onClick={handleClick}>Upload</Button>
          </div>
        </div>
      </Modal>



    </div>
  )
}

export default ViewDetails