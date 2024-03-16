import { Button, Checkbox, Dropdown, Input, MenuProps, Modal, Select, Space, Table } from 'antd'
import React, { useState } from 'react'
import "./ModalsCommonStyles.scss"
import CloseIcon from "../../../assets/icons/close-icon.svg"
import SelectWrapper from '../../../shared/SelectWrapper/SelectWrapper'
import { DownOutlined } from "@ant-design/icons";
import { CheckboxValueType } from 'antd/es/checkbox/Group'

import searchIcon from "../../../assets/icons/search.svg";
import { ColumnsType } from 'antd/es/table'
import deleteIcon from "../../../assets/icons/delete-rounded.svg"
import DeleteModal from '../../../shared/DeleteModal/DeleteModal'


const AllocateCarerModal = ({ isAllocateCarerModal, setIsAllocateCarerModal }: any) => {
  // const [isAllocateCarerModal, setIsAllocateCarerModal] = useState(true)

  const [isOpenDropdown, setisOpenDropdown] = useState(false);
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>();
  const [isDeleteModal, setIsDeleteModal] = useState(false);

    const handleDeleteSubmit = () => {
        setIsDeleteModal(false);
    };
    const handleCancelSubmit = () => {
        setIsDeleteModal(false);
    };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const onChange = (checkedValues: CheckboxValueType[]) => {
    setCheckedList(checkedValues);
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <Checkbox.Group
          options={[
            { value: 'The Meadows Residential Care Home', label: 'The Meadows Residential Care Home' },
            { value: 'Nettlestead Care Home', label: 'Nettlestead Care Home' },
            { value: 'Park Avenue Care Home', label: 'Park Avenue Care Home' },
            { value: 'Rokewood Court', label: 'Rokewood Court' },
            { value: 'Royal Star & Garter - Surbiton', label: 'Royal Star & Garter - Surbiton' },
            { value: 'Sancroft Community Care Ltd- Sancroft Hall', label: 'Sancroft Community Care Ltd- Sancroft Hall' },
            { value: 'Speirs House', label: 'Speirs House' },
            { value: 'Sweetcroft Care Home', label: 'Sweetcroft Care Home' },
            { value: 'The White House Nursing Home ', label: 'The White House Nursing Home ' },
          ]}
          value={checkedList}
          onChange={onChange}
          className='group-checkbox-flex'
        />
      ),
      key: "1",
    },
  ];

  const AllocateCarerColumnsData: ColumnsType<any> = [
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
  const AllocateCarerModalMockData = [
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
      title={<div style={{ fontSize: '14px', fontWeight: "600" }}>Allocate Carer to Care Home</div>}
      open={isAllocateCarerModal}
      onCancel={() => setIsAllocateCarerModal(false)}
      wrapClassName="allocate-carer-modal"
      footer={false}
      closeIcon={<img src={CloseIcon} alt="" />}>
      <div className="overlay-wrapper-modal-content">
        <div className="carer-modal-select-wrapper">

          <div>
            <label className='fs-14 fw-600'>Select Care Home</label>
            <Dropdown
              menu={{ items }}
              trigger={["click"]}
              open={isOpenDropdown}
              onOpenChange={setisOpenDropdown}
            >
              <div
                onClick={(e) => {
                  e.preventDefault();
                }}
                style={{ height: "39px" }}
                className="select-dropdown-btn fs-14 fw-400 border-radius-4"
              >
                <Space>
                  {checkedList?.length ? (<p className='text-ellipsis'>{checkedList?.join(", ")}</p>) : "Multiple Selected"}
                  <DownOutlined />
                </Space>
              </div>
            </Dropdown>
          </div>
          <div className="bottom-buttons">
            <Button type='primary' className='inner-bottom-btn bg-orange-color'>Cancel</Button>
            <Button type='primary' className='inner-bottom-btn btn-secondary'>Allocate</Button>
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
          <Table className="common-staff-allocation-table" columns={AllocateCarerColumnsData} dataSource={AllocateCarerModalMockData} scroll={{ x: "max-content", scrollToFirstRowOnChange: true }} />
        </div>


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

export default AllocateCarerModal