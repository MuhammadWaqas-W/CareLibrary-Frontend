import { Space, Dropdown, Select, Switch, Checkbox } from "antd";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import Dots from "../../assets/images/OnBoarding/dots.png";
import Edit from "../../assets/icons/edit-blue.svg";
import Delete from "../../assets/icons/delete-icon-outlined.svg";
import Arrow from "../../assets/images/OnBoarding/arrow.svg";
import {
  NotificationDetails,
  ICarerDetails,
} from "../../mock/ManageNoticationsMock";
import { useState } from "react";
import EditNotification from "./EditNotificationModal";
import DeleteModal from "../../shared/DeleteModal/DeleteModal";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import "./ManageNotification.scss";

const ManageNotificationTable = () => {
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const onChange = (e: CheckboxChangeEvent) => {
    setIsChecked(e.target.checked);
  };

  const items: any = [
    {
      label: (
        <div onClick={() => setIsShowEditModal(true)}>
          <Space>
            <img
              src={Edit}
              alt="Edit"
              className="d-flex align-center"
              width={14}
              height={16}
            />
            <span className="fs-14 fw-400 title-color">Edit</span>
          </Space>
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <Space onClick={() => setDeleteModal(true)}>
          <img
            src={Delete}
            alt="Delete"
            className="d-flex align-center"
            width={14}
            height={16}
          />
          <span className="fs-14 fw-400 title-color">Delete</span>
        </Space>
      ),
      key: "2",
    },
  ];

  const columns: ColumnsType<ICarerDetails> = [
    {
      title: "Notification",
      dataIndex: "notification",
      key: "notification",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action Type",
      dataIndex: "actionType",
      key: "actionType",
    },
    {
      title: "Notify on Action",
      dataIndex: "notifyAction",
      key: "notifyAction",
      render: () => <Checkbox onChange={onChange} />,
    },

    {
      title: "Advance Notification",
      dataIndex: "notification",
      key: "notification",
      render: () => (
        <Space>
          <div className={`selection ${isChecked && "checked"}`}>5</div>
          <Select
            defaultValue="Days(s)"
            className={`select-onboarding ${isChecked && "checked"}`}
            style={{ width: "140px" }}
            suffixIcon={<img src={Arrow} alt="arrowImg" />}
            options={[
              { value: "Design", label: "Design" },
              { value: "Email", label: "Email" },
              { value: "Social Media", label: "Social Media" },
              { value: "Music", label: "Music" },
            ]}
          />
        </Space>
      ),
    },
    {
      title: "Frequency",
      dataIndex: "frequency",
      key: "frequency",
      render: () => (
        <Space>
          <div className={`selection ${isChecked && "checked"}`}>5</div>
          <Select
            defaultValue="Days(s)"
            className={`select-onboarding ${isChecked && "checked"}`}
            style={{ width: "140px" }}
            suffixIcon={<img src={Arrow} alt="arrowImg" />}
            options={[
              { value: "Design", label: "Design" },
              { value: "Email", label: "Email" },
              { value: "Social Media", label: "Social Media" },
              { value: "Music", label: "Music" },
            ]}
          />
        </Space>
      ),
    },
    {
      title: "Select User",
      dataIndex: "selectUser",
      key: "selectUser",
      render: () => (
        <Space>
          <Select
            defaultValue="Select"
            className="select-onboarding"
            style={{ width: "140px" }}
            suffixIcon={<img src={Arrow} alt="arrowImg" />}
            options={[
              { value: "Design", label: "Design" },
              { value: "Email", label: "Email" },
              { value: "Social Media", label: "Social Media" },
              { value: "Music", label: "Music" },
            ]}
          />
        </Space>
      ),
    },
    {
      title: "Aditional Mail",
      dataIndex: "aditionalMail",
      key: "aditionalMail",
      render: () => <div className="selection">Email</div>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: () => (
        <div>
          <Switch defaultChecked />
        </div>
      ),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <Dropdown
          menu={{ items }}
          placement="bottomRight"
          trigger={["click"]}
          rootClassName="actionDropDown"
        >
          <div className="border-color cursor-pointer d-flex algin-center justify-center">
            <img src={Dots} alt="dotImg" />
          </div>
        </Dropdown>
      ),
    },
  ];

  return (
    <div className="carer-wrapper">
      <div className="carer-main">
        <Table
          className="wrapper-table"
          columns={columns}
          dataSource={NotificationDetails}
          scroll={{ x: "max-content" }}
          bordered={false}
          pagination={false}
        />
      </div>
      <EditNotification
        isShowEditModal={isShowEditModal}
        setIsShowEditModal={setIsShowEditModal}
      />
      <DeleteModal
        deleteModal={deleteModal}
        setDeleteModal={setDeleteModal}
        title="Are you sure you want to Delete"
        submitTitle="Delete"
        cancelTitle="Cancel"
        onCancel={() => setDeleteModal(false)}
      />
    </div>
  );
};

export default ManageNotificationTable;
