import { Input, Modal, Space, Table } from 'antd'
import React, { useState } from 'react'
import "./ModalsCommonStyles.scss"
import CloseIcon from "../../../assets/icons/close-icon.svg"
import homeCheck from "../../../assets/icons/StaffAllocation/home-check.svg"
import UserOne from "../../../assets/images/staffAllocation/user-img.svg"
import deleteIcon from "../../../assets/icons/delete-rounded.svg"
import { ColumnsType } from 'antd/es/table'
import searchIcon from "../../../assets/icons/search.svg";
import DeleteModal from '../../../shared/DeleteModal/DeleteModal'

const ViewCarerHomeModal = ({ isViewCarerHomeModal, setIsViewCarerHomeModal }: any) => {
  // const [isAllocateCarerModal, setIsAllocateCarerModal] = useState(true)

  const [isDeleteModal, setIsDeleteModal] = useState(false);

    const handleDeleteSubmit = () => {
        setIsDeleteModal(false);
    };
    const handleCancelSubmit = () => {
        setIsDeleteModal(false);
    };

  const ViewCarerColumnsData: ColumnsType<any> = [
    {
      title: 'Sr #',
      dataIndex: 'id',
      key: 'id',
      render: (id: any) =>
        <span className='fs-14 fw-400 m-0 text-left line-height-22 title-color'>{id}</span>,
    },
    {
      title: 'Care Home',
      dataIndex: 'careHome',
      key: 'careHome',
      render: (careHome: any) =>
        <span className='fs-14 fw-400 m-0 text-left line-height-22 title-color'>{careHome}</span>,
    },
    {
      title: 'Allocated ON',
      dataIndex: 'allocatedOn',
      key: 'allocatedOn',
      render: (allocatedOn: any) =>
        <span className='fs-14 fw-400 m-0 text-left line-height-22 title-color'>{allocatedOn}</span>,
    },
    {
      title: <div>Actions</div>,
      dataIndex: "actions",
      key: "actions",
      width: 150,
      render: (_, text) => (
        <img onClick={()=>setIsDeleteModal(true)} src={deleteIcon} alt="delete" />
      ),
    },
  ];
  const ViewCarerModalMockData = [
    {
      id: "01",
      careHome: "Bondcare Care Home",
      allocatedOn: "Tuseday Nov 30,2021 10:03",
    },
    {
      id: "02",
      careHome: "Bondcare Care Home",
      allocatedOn: "Tuseday Nov 30,2021 10:03",
    },
    {
      id: "03",
      careHome: "Bondcare Care Home",
      allocatedOn: "Tuseday Nov 30,2021 10:03",
    },
  ]



  return (
    <>
    <Modal
      centered
      title={''}
      open={isViewCarerHomeModal}
      onCancel={() => setIsViewCarerHomeModal(false)}
      wrapClassName="view-carer-home-modal"
      footer={false}
      closeIcon={<img src={CloseIcon} alt="" />}>
      <div className="view-carer-home-details d-flex align-center" style={{ gap: "10px" }}>
        <div className="carer-profile-thumb">
          <img src={UserOne} alt="user profile" />
        </div>
        <div className='d-flex flex-column'>
          <span className='fs-14 fw-600'>Jhon Doe</span>
          <div className='d-flex align-center' style={{ gap: "5px" }}>
            <img src={homeCheck} alt="" />
            <span style={{ fontSize: '9px' }}>3 Care homes Allocated</span>
          </div>
        </div>
      </div>
      <div className="modal-search">
        <Input
          className="search-input"
          placeholder="Search Schedule"
          prefix={<img src={searchIcon} alt="searchIcon" width={24} height={24} style={{ marginRight: '0.623rem' }} />}
        />
      </div>
      <div className='common-staff-allocation-table-wrapper'>
        <Table className="common-staff-allocation-table" columns={ViewCarerColumnsData} dataSource={ViewCarerModalMockData} scroll={{ x: "max-content", scrollToFirstRowOnChange: true }} />
      </div>
    </Modal>
    <DeleteModal
                setDeleteModal={setIsDeleteModal}
                deleteModal={isDeleteModal}
                submitTitle='Cancel'
                cancelTitle='Yes, Remove'
                title='Are you sure you want to cancel this record?'
                onSubmit={handleDeleteSubmit}
                onCancel={handleCancelSubmit}
            />
    </>
  )
}

export default ViewCarerHomeModal