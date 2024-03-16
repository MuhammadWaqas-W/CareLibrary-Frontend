import { useState } from "react";
import { Dropdown, Space, Table } from "antd";
import { staffBookingData } from "../../../mock/StaffBookingMockData";
import ActionImg from "../../../assets/images/staffManager/actionImg.png";
import { ColumnsType } from "antd/es/table";
import viewIcon from "../../../assets/icons/StaffBooking/View.svg";
import UpcomingShift from "../../../assets/icons/StaffBooking/Upcoming.svg";
import CompletedShift from "../../../assets/icons/StaffBooking/Completed icon.svg";
import WorkHistoryIcon from "../../../assets/icons/StaffBooking/workHistoryIcon.svg";
import { useNavigate } from "react-router-dom";
import './StaffBookingTable.scss'

const StaffBookingTable = () => {
  const [staffBookingId, setStaffBookingId] = useState("");
  const navigate = useNavigate();

  const items: any = [
    {
      label: (
        <div>
          <Space
            onClick={() =>
              navigate(`/staff-booking/available-shift/${staffBookingId}`)
            }
          >
            <img
              src={viewIcon}
              alt="Edit"
              className="d-flex align-center"
              width={24}
              height={24}
            />
            <span>Available Shift</span>
          </Space>
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <Space
          onClick={() =>
            navigate(`/staff-booking/UpComing-shift/${staffBookingId}`)
          }
        >
          <img
            src={UpcomingShift}
            alt="Delete"
            className="d-flex align-center"
            width={24}
            height={24}
          />
          <span>Upcoming Shift</span>
        </Space>
      ),
      key: "2",
    },
    {
      label: (
        <Space
          onClick={() =>
            navigate(`/staff-booking/completed-shift/${staffBookingId}`)
          }
        >
          <img
            src={CompletedShift}
            alt="Delete"
            className="d-flex align-center"
            width={24}
            height={24}
          />
          <span>Completed Shift</span>
        </Space>
      ),
      key: "3",
    },
    {
      label: (
        <Space
          onClick={() =>
            navigate(`/staff-booking/work-history/${staffBookingId}`)
          }
        >
          <img
            src={WorkHistoryIcon}
            alt="Delete"
            className="d-flex align-center"
            width={24}
            height={24}
          />
          <span>Work History</span>
        </Space>
      ),
      key: "4",
    },
  ];
  const columns: ColumnsType<any> = [
    {
      title: <span style={{ paddingLeft: "75px" }}>User Name</span>,
      dataIndex: "userName",
      key: "userName",
      ellipsis: true,
      width: 270,
      render: (_, text) => (
        <div className="cursor-pointer d-flex align-center ">
          <img src={text.avatar} alt="avatar" />
          <span
            className="fs-14 fw-400 title-color"
            style={{ marginLeft: "30px" }}
          >
            {text.userName}
          </span>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "User Type",
      dataIndex: "userType",
      key: "userType",
    },
    {
      title: "Time To Call",
      dataIndex: "timeToCall",
      key: "timeToCall",
    },
    {
      title: <div className="equal--width-tb">Actions</div>,
      dataIndex: "actions",
      key: "actions",
      width: 150,
      render: (_, text) => (
        <Dropdown
          menu={{ items }}
          placement="bottomRight"
          trigger={["click"]}
          className="actionDropDown cursor-pointer"
        >
          <div
            className="equal--width-tb"
            onClick={() => setStaffBookingId(text.key)}
          >
            <img src={ActionImg} alt="menu" />
          </div>
        </Dropdown>
      ),
    },
  ];

  return (
    <div className="">
      <Table
        columns={columns}
        dataSource={staffBookingData}
        pagination={false}
        className="staff-booking-table"
        scroll={{ x: "max-content" }}
      />
    </div>
  );
};
export default StaffBookingTable;
