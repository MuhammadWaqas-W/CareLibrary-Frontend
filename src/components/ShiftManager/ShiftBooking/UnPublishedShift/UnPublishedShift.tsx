import React, { useState } from "react";
import { Dropdown, Input, Space, Table } from "antd";
import { UnfilledShiftBookingTableData } from "../../../../mock/ShiftManageData";
import ActionIcon from "../../../../assets/images/manageShift/action-icon.png";
import PublishedIcon from "../../../../assets/icons/ShiftManger/publish-icon.png";
import BookStaffIcon from "../../../../assets/icons/ShiftManger/book-staff-icon.png";
import CancelShiftIcon from "../../../../assets/icons/ShiftManger/cancel-shift-icon.png";
import SearchIcon from "../../../../assets/images/OnBoarding/Search.svg";
import "./UnPublishedShift.scss";
import PublishModal from "./Modals/PublishModal";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../../../../shared/DeleteModal/DeleteModal";

const UnPublishedShift = () => {
  const [isCancelModelOpen, setIsCancelModelOpen] = useState<boolean>(false);
  const [isPublishModal, setIsPublishModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const columns = [
    {
      title: "Sr #",
      dataIndex: "id",
      key: "id",
      render: (text: any) => <span className="fs-14 fw-400 m-0 line-height-22 title-color">{text}</span>,
    },
    {
      title: "Job Date",
      dataIndex: "jobDate",
      key: "jobDate",
      render: (text: any) => <span className="fs-14 fw-400 m-0 line-height-22 title-color">{text}</span>,
    },
    {
      title: "Client Name",
      dataIndex: "clientName",
      key: "clientName",
      render: (text: any) => <span className="fs-14 fw-400 m-0 line-height-22 title-color">{text}</span>,
    },
    {
      title: "Shift Name",
      dataIndex: "shiftName",
      key: "shiftName",
      render: (text: any) => <span className="fs-14 fw-400 m-0 line-height-22 title-color">{text}</span>,
    },
    {
      title: "Booked By",
      dataIndex: "bookedBy",
      key: "bookedBy",
      render: (text: any) => <span className="fs-14 fw-400 m-0 line-height-22 title-color">{text}</span>,
    },
    {
      title: "Staff Required",
      dataIndex: "staffRequired",
      key: "staffRequired",
      render: (text: any) => <span className="fs-14 fw-400 m-0 line-height-22 title-color">{text}</span>,
    },
    {
      title: "Staff Booked",
      dataIndex: "staffBooked",
      key: "staffBooked",
      render: (text: any) => <span className="fs-14 fw-400 m-0 line-height-22 title-color">{text}</span>,
    },
    {
      title: "Staff Booked At",
      dataIndex: "staffBookedAt",
      key: "staffBookedAt",
      render: (text: any) => <span className="fs-14 fw-400 m-0 line-height-22 title-color">{text}</span>,
    },
    {
      title: "Time Diff.",
      dataIndex: "timeDiff",
      key: "timeDiff",
      render: (text: any) => <span className="fs-14 fw-400 m-0 line-height-22 title-color">{text}</span>,
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <div>
          <Dropdown menu={{ items }} placement="bottomRight" trigger={["click"]} overlayClassName="distraction-alerts-dropdown" className="actionDropDown ">
            <Space>
              <div className="border-color cursor-pointer">
                <img src={ActionIcon} alt="" />
              </div>
            </Space>
          </Dropdown>
        </div>
      ),
    },
  ];

  const items = [
    {
      label: (
        <div className="d-flex align-center" style={{ gap: "18px", paddingBottom: "12px", paddingTop: "12px" }} onClick={() => setIsPublishModal(true)}>
          <img src={PublishedIcon} alt="AllocateStaff" />
          <span className="fs-14 fw-400 line-height-22 title-color">Publish</span>
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div className="d-flex align-center" style={{ gap: "18px", paddingBottom: "12px" }} onClick={() => navigate("/unpublished-shift/book-staff")}>
          <img src={BookStaffIcon} alt="ViewProfile" />
          <span className="fs-14 fw-400 line-height-22 title-color">Book Staff </span>
        </div>
      ),
      key: "2",
    },
    {
      label: (
        <div className="d-flex align-center" style={{ gap: "18px", paddingBottom: "12px" }}>
          <img src={CancelShiftIcon} alt="ViewProfile" />
          <span className="fs-14 fw-400 line-height-22 title-color">Delete</span>
        </div>
      ),
      key: "3",
    },
  ];

  return (
    <>
      <div className="manager-unpublished-shift-wrapper w-100">
        <div className="manager-unpublished-shift-table">
          <p className="fs-14 fw-400 m-0 bg-white">This Section captures and lists all the shift requests from your clients (shifts that are not yet posted to allocated staff) so you can decide to directly assign them to your perferred staff, or post to all allocated staff from this page</p>
          <div className='input-search-wrapper d-flex' style={{ justifyContent: "flex-end", marginBottom: "10px" }}>
            <Input
              className='w-100'
              placeholder="search"
              prefix={<img src={SearchIcon} alt="search icon" className="icon" width={20} height={20} />}
              style={{ maxWidth: "350px" }}
            />
          </div>
          <Table columns={columns} dataSource={UnfilledShiftBookingTableData} pagination={false} className="booking-table-content" scroll={{ x: "max-content" }} />
        </div>
      </div>
      <DeleteModal
        setDeleteModal={setIsCancelModelOpen}
        deleteModal={isCancelModelOpen}
        submitTitle="Cancel"
        cancelTitle="Delete"
        title="Do you want to delete this user"
        onCancel={() => setIsCancelModelOpen(false)}
      />
      <PublishModal isPublishModal={isPublishModal} setIsPublishModal={setIsPublishModal} />
    </>
  );
};

export default UnPublishedShift;
