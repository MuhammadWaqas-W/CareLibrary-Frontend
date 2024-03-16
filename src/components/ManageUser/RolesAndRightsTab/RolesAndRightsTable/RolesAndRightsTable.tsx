import { Col, Dropdown, Input, Row, Button, Select, Space, Table } from "antd";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SearchIcon from "../../../../assets/images/OnBoarding/Search.svg";
import ActionIcon from "../../../../assets/icons/ShiftManger/action-icon.svg";
import Edit from "../../../../assets/icons/ManageUser/edit-icon.svg";
import ResetPassword from "../../../../assets/icons/ManageUser/reset-password.svg";
import "./RolesAndRightsTable.scss";
import EditRolesAndRights from "../EditRolesAndRights";
import SelectWrapper from "../../../../shared/SelectWrapper/SelectWrapper";

const RolesAndRights = () => {
  const [isEditRole, setIsEditRole] = useState(false);
  const [rolesAndRightsTableData, setRolesAndRightsTableData] = useState([]);

  const handleEditModal = () => {
    setIsEditRole(true);
  };
  function isNotEmpty(obj: any): boolean {
    return Object.keys(obj).length > 0;
  }
  const handleAddRole = () => {
    setIsEditRole(true);
  };
  const handleEditRolesAndRights = (formData: any) => {
    const RolesAndRightsData: any = [...rolesAndRightsTableData, formData];
    console.log(RolesAndRightsData);
    setRolesAndRightsTableData(RolesAndRightsData);
  };

  const items = [
    {
      label: (
        <div
          className="d-flex align-center"
          style={{ gap: "18px", paddingBottom: "12px", paddingTop: "12px" }}
        >
          <img height={20} width={20} src={ResetPassword} alt="ResetPassword" />
          <span className="fs-14 fw-400 line-height-22 title-color">
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
      title: "Role Title",
      dataIndex: "roleTitle",
      key: "roleTitle",
      render: (text: any) => (
        <span className="fs-14 fw-400 m-0 line-height-22 title-color">
          {text}
        </span>
      ),
    },
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
      render: (text: any) => (
        <span className="fs-14 fw-400 m-0 line-height-22 title-color">
          {text}
        </span>
      ),
    },
    {
      title: "Role Assigned By",
      dataIndex: "roleAssignedBy",
      key: "roleAssignedBy",
      render: (text: any) => (
        <span className="fs-14 fw-400 m-0 line-height-22 title-color">
          {text}
        </span>
      ),
    },
    {
      title: "Assigned Date",
      dataIndex: "assignedDate",
      key: "assignedDate",
      render: (text: any) => (
        <span className="fs-14 fw-400 m-0 line-height-22 title-color">
          {text}
        </span>
      ),
    },

    {
      title: "Actions",
      key: "action",
      render: (_: any, record: any) => (
        <div>
          {isNotEmpty(rolesAndRightsTableData) && (
            <Dropdown
              menu={{
                items: items.map((item: any) => ({
                  ...item,
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
      {isEditRole && (
        <EditRolesAndRights
          handleEditRolesAndRights={handleEditRolesAndRights}
          setIsEditRole={setIsEditRole}
          rolesAndRightsTableData={rolesAndRightsTableData}
        />
      )}
      {!isEditRole && (
        <div className="manager-users-wrapper w-100">
          <div className="manager-confirmed-shift-filters bg-white border-radius-10 add-new-user-wrapper">
            <Button type="primary"
              onClick={handleAddRole}
            >
              Add Role
            </Button>
            <Row style={{ paddingBottom: "30px" }}>
              <Col
                xxl={{ span: 6 }}
                xl={{ span: 6 }}
                md={24}
                sm={24}
                xs={24}
                lg={24}
              >
                <div  style={{marginTop:"15px"}}>
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
                className="manage-users-search"
              >
                <div className="input-search-wrapper">
                  <Input
                    placeholder="search"
                    prefix={
                      <img
                        src={SearchIcon}
                        alt="search icon"
                        className="icon"
                      />
                    }
                  />
                </div>
              </Col>
            </Row>
            {/* </div>
                <div className="manager-confirmed-shift-table"> */}
            <Table
              columns={columns}
              dataSource={rolesAndRightsTableData}
              scroll={{ x: "max-content" }}
              rowKey={(record: any) => record.key}
              pagination={false}
              className="booking-table-content"
            />
          </div>
        </div>
      )}
    </>
  );
};
export default RolesAndRights;
