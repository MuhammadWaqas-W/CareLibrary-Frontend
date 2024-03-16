import { Space, Table, Dropdown, MenuProps } from "antd";

import dots from "../../../assets/icons/dots.png";
import Publish from "../../../assets/icons/unpublishedShift/publish.png";
import BookStaff from "../../../assets/icons/unpublishedShift/online-booking.png";
import Delete from "../../../assets/icons/unpublishedShift/cancel.png";

import { tableData } from "../../../mock/UnpublishedShifts/TableData";
import PublishModal from "../Modals/PublishModal";
import { useState } from "react";
import DeleteModal from "../../../shared/DeleteModal/DeleteModal";

const UnpublishedTable = ({ setShowBookingStaff }: any) => {
  const [isPublishModal, setIsPublishModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const handleDeleteSubmit = () => {
    setIsDeleteModal(false);
  };
  const handleCancelSubmit = () => {
    setIsDeleteModal(false);
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <div
          className="dropdown-items"
          onClick={() => {
            setIsPublishModal(true);
          }}
        >
          <img src={Publish} alt="edit" width={18} height={18} /> <p className="title">Publish</p>
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div
          className="dropdown-items"
          onClick={() => {
            setShowBookingStaff(true);
          }}
        >
          <img src={BookStaff} alt="delete" width={16} height={18} />{" "}
          <p className="title">Book Staff</p>
        </div>
      ),
      key: "2",
    },
    {
      label: (
        <div
          className="dropdown-items"
          onClick={() => {
            setIsDeleteModal(true);
          }}
        >
          <img src={Delete} alt="delete" width={16} height={18} /> <p className="title">Delete</p>
        </div>
      ),
      key: "3",
    },
  ];

  const columns: any = [
    {
      title: "Sr.No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Job Date",
      dataIndex: "jobDate",
      key: "jobDate",
    },
    {
      title: "Client Name",
      dataIndex: "clientName",
      key: "clientName",
    },
    {
      title: "Shift Name",
      dataIndex: "shiftName",
      key: "shiftName",
    },
    {
      title: "Booked By",
      dataIndex: "bookedBy",
      key: "bookedBy",
    },
    {
      title: "Staff Required",
      dataIndex: "staffRequired",
      key: "staffRequired",
    },
    {
      title: "Shift Booked At",
      dataIndex: "shiftBookedAT",
      key: "shiftBookedAT",
    },
    {
      title: "Time Diff",
      dataIndex: "timeDiff",
      key: "timeDiff",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <span className="fs-12 fw-400 line-height-18 title-color">
          {" "}
          <Dropdown
            menu={{ items }}
            placement="bottomRight"
            trigger={["click"]}
            overlayClassName="unpublished-dropdown"
            className="actionDropDown "
          >
            <Space>
              <div className="border-color cursor-pointer">
                <img src={dots} alt="menu" />
              </div>
            </Space>
          </Dropdown>
        </span>
      ),
    },
  ];
  return (
    <>
      <Table
        columns={columns}
        className='unpublished-table'
        scroll={{ x: "max-content" }}
        pagination={false}
        dataSource={tableData}
      />
      <PublishModal setPublishModal={setIsPublishModal} publishModal={isPublishModal} />
      <DeleteModal
        setDeleteModal={setIsDeleteModal}
        deleteModal={isDeleteModal}
        submitTitle='Yes'
        cancelTitle='No'
        title='Are you sure you want to cancel this shift?'
        onSubmit={handleDeleteSubmit}
        onCancel={handleCancelSubmit}
      />
    </>
  );
};

export default UnpublishedTable;
