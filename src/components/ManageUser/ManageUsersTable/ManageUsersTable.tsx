import {
  Button,
  Col,
  Dropdown,
  Input,
  Row,
  Select,
  Space,
  Switch,
  Table,
} from "antd";
import { useState } from "react";
import SearchIcon from "../../../assets/images/OnBoarding/Search.svg";
import ActionIcon from "../../../assets/icons/ShiftManger/action-icon.svg";
import Edit from "../../../assets/icons/ManageUser/edit-icon.svg";
import { v4 as uuidv4 } from "uuid";
import ResetPassword from "../../../assets/icons/ManageUser/reset-password.svg";
import BirthDayModal from "../../../shared/BirthDayModal/BirthDayModal";
import Reset from "../../../assets/icons/ManageUser/reset-modal-icon.svg";
import "./ManageUsersTable.scss";
import "../AddNewUserModal/AddNewModal.scss";
import AddNewUser from "../AddNewUserModal/AddNewUserModal";
import EditNewUserModal from "../EditNewUserModal/EditNewUserModal";
import SelectWrapper from "../../../shared/SelectWrapper/SelectWrapper";

const ManageUsersTable = () => {
  //states
  const [isModalOpen, setIsOpenModal] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddNewUserModalOpen, setIsAddNewUserModalOpen] = useState(false);
  const [selectedTableData, setSelectedRowData] = useState("");
  const [manageUsersTableData, setManageUsersTableData] = useState([]);

  const handleResetModal = () => {
    setIsOpenModal(true);
  };
  const handleEditModal = () => {
    setIsEditModalOpen(true);
  };
  function isNotEmpty(obj: any): boolean {
    return Object.keys(obj).length > 0;
  }
  const handleModalFormSubmit = (formData: any) => {
    const RolesAndRightsData: any = [...manageUsersTableData, formData];
    setManageUsersTableData(RolesAndRightsData);
  };
  const handleItemClick = (record: any) => {
    setSelectedRowData(record);
  };

  const items = [
    {
      label: (
        <div
          className="d-flex align-center"
          style={{ gap: "18px", paddingBottom: "12px", paddingTop: "12px" }}
        >
          <img src={ResetPassword} height={20} width={20} alt="ResetPassword" />
          <span
            className="fs-14 fw-400 line-height-22 title-color"
            onClick={handleResetModal}
          >
            Reset Password
          </span>
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div
          className="d-flex align-center"
          style={{ gap: "18px", paddingBottom: "12px" }}
        >
          <img height={20} width={20} src={Edit} alt="Edit" />
          <span
            className="fs-14 fw-400 line-height-22 title-color"
            onClick={handleEditModal}
          >
            Edit
          </span>
        </div>
      ),
      key: "2",
    },
  ];
  const columns = [
    {
      title: "Sr #",
      dataIndex: "id",
      key: "id",
      render: (text: any) => (
        <span className="fs-14 fw-400 m-0 line-height-22 title-color">
          {text}
        </span>
      ),
    },
    {
      title: "ID",
      dataIndex: "userId",
      key: "userId",
      render: (text: any) => (
        <span className="fs-14 fw-400 m-0 line-height-22 title-color">
          {text}
        </span>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: any) => (
        <span className="fs-14 fw-400 m-0 line-height-22 title-color">
          {text}
        </span>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text: any) => (
        <span className="fs-14 fw-400 m-0 line-height-22 title-color">
          {text}
        </span>
      ),
    },
    {
      title: "Created Date",
      dataIndex: "createdDate",
      key: "createdDate",
      render: (text: any) => (
        <span className="fs-14 fw-400 m-0 line-height-22 title-color">
          {text}
        </span>
      ),
    },
    {
      title: "Reset Password",
      dataIndex: "resetPassword",
      key: "resetPassword",
      render: (text: any) => (
        <span className="fs-14 fw-400 m-0 line-height-22 title-color">
          {text}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: any) => (
        <Switch checked={status} className="switch-manage-user" />
      ),
    },
    {
      title: "Actions",
      key: "action",
      render: (_: any, record: any) => (
        <div>
          {isNotEmpty(manageUsersTableData) && (
            <Dropdown
              menu={{
                items: items.map((item: any) => ({
                  ...item,
                  onClick: () => handleItemClick(record),
                })),
              }}
              placement="bottomRight"
              trigger={["click"]}
              overlayClassName="distraction-alerts-dropdown"
              className="actionDropDown "
            >
              <Space key={uuidv4()}>
                <div className="border-color cursor-pointer">
                  <img src={ActionIcon} alt="" />
                </div>
              </Space>
            </Dropdown>
          )}
        </div>
      ),
    },
  ];

  return (
    <>
      <AddNewUser
        manageUsersTableData={manageUsersTableData}
        onSubmit={handleModalFormSubmit}
        isAddNewUserModalOpen={isAddNewUserModalOpen}
        setIsAddNewUserModalOpen={setIsAddNewUserModalOpen}
      />
      <EditNewUserModal
        isEditModalOpen={isEditModalOpen}
        selectedTableData={selectedTableData}
      />
      <BirthDayModal
        iconImage={Reset}
        isModalOpen={isModalOpen}
        setIsOpenModal={setIsOpenModal}
        birthDayMessage="Are you sure you want to reset the password of account?"
        wishButtonText="Reset"
        backgroundColor="#F7B923"
      />

      <div className="manager-users-wrapper w-100">
        <div className="manager-confirmed-shift-filters bg-white border-radius-10 add-new-user-wrapper">
          <Button type="primary"
            onClick={() => {
              setIsAddNewUserModalOpen(true);
            }}
          >
            Add User
          </Button>
          <h2
            className="fs-14 fw-600 line-height-18 m-0"
            style={{ paddingTop: "18px" }}
          >
            Name
          </h2>
          <Row style={{ paddingBottom: "30px" }}>
            <Col
              xxl={{ span: 6 }}
              xl={{ span: 6 }}
              md={24}
              sm={24}
              xs={24}
              lg={24}
            >
              <div style={{marginTop:"8px"}}>
                <SelectWrapper  name="userType" options={[]}  size="large" defaultValue="Arlington Manor"/>
               
              </div>
            </Col>
            <Col
              xxl={{ span: 6, offset: 12 }}
              xl={{ span: 6, offset: 12 }}
              md={24}
              xs={24}
              sm={24}
              lg={24}
              className="manage-users-input"
            >
              <div className="input-search-wrapper">
                <Input
                  placeholder="search"
                  prefix={
                    <img src={SearchIcon} alt="search icon" className="icon" />
                  }
                />
              </div>
            </Col>
          </Row>
          {/* </div>
                <div className="manager-confirmed-shift-table"> */}
          <Table
            columns={columns}
            dataSource={manageUsersTableData}
            rowKey={(record: any) => record.key}
            pagination={false}
            scroll={{ x: "max-content" }}
            className="booking-table-content"
          />
        </div>
      </div>
    </>
  );
};
export default ManageUsersTable;
