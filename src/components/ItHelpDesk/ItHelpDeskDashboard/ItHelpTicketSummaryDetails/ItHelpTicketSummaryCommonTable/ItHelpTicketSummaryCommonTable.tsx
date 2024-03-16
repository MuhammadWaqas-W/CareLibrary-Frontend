import { Dropdown, Menu, Select, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import {
  ItHelpDeskSummaryCommonTableData,
  itHelpDeskSummaryCommonTableData,
} from "../../../../../mock/ItHelpDesk/ItHelpDashboard";
import viewTicketIcon from "../../../../../assets/icons/ItHelpDesk/viewTicketDetail.svg";
import editTicketIcon from "../../../../../assets/images/OnBoarding/edit.svg";
import delteTicketIcon from "../../../../../assets/icons/ItHelpDesk/viewDeleteTicket.svg";
import reOpenTicketIcon from "../../../../../assets/images/itHelpDesk/reopenTicket.svg";
import tableAttachmentIcon from "../../../../../assets/images/itHelpDesk/tableAttachmentIcon.svg";
import commentIcon from "../../../../../assets/icons/ItHelpDesk/commentIcon.svg";
import threeDots from "../../../../../assets/icons/three-dots.svg";
import { useState } from "react";
import DeleteModal from "../../../../../shared/DeleteModal/DeleteModal";
import { useNavigate } from "react-router-dom";
import AddTicketModal from "../AddTicketCommonModal/AddTicketModal";
import ReopenModal from "../AddTicketCommonModal/ReopenModal";
import { DownloadOutlined, EllipsisOutlined } from "@ant-design/icons";
import "./ItHelpTicketSummaryCommonTable.scss";
import { ROLES } from "../../../../../constants/Roles";

const ItHelpTicketSummaryCommonTable = ({ stepperValue }: any) => {
  const [addTicketModal, setAddTicketModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isReopenModal, setIsReopenModal] = useState(false);
  const [modalType, setModalType] = useState("Add");
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const navigate = useNavigate();
  const { role }: any = JSON.parse(
    localStorage.getItem("careUserData") || "{}"
  );
  console.log(role, "role is *************************");

  const handleDeleteSubmit = () => {
    setIsDeleteModal(false);
  };
  const handleCancelSubmit = () => {
    setIsDeleteModal(false);
  };
  const handleReopenSubmit = () => {
    setIsReopenModal(false);
  };
  const handleCancelReopenSubmit = () => {
    setIsReopenModal(false);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const menuItems: any = [
    {
      label: (
        <div
          onClick={() => {
            setAddTicketModal(true);
            setModalType("View Ticket");
          }}
        >
          <Space>
            <img
              src={viewTicketIcon}
              alt="View"
              className="d-flex align-center"
              width={24}
              height={24}
            />
            <span>View Ticket Details</span>
          </Space>
        </div>
      ),
      key: "1",
      status: (role === ROLES.admin || role===ROLES.client || role===ROLES.carer) ? ["Pending", "Resolved", "Onhold"] : [],
    },
    {
      label: (
        <div
          onClick={() => {
            setAddTicketModal(true);
            setModalType("Edit Ticket");
          }}
        >
          <Space>
            <img
              src={editTicketIcon}
              alt="Edit"
              className="d-flex align-center"
              width={24}
              height={24}
            />
            <span>Edit</span>
          </Space>
        </div>
      ),
      key: "2",
      status:
      (role === ROLES.admin || role===ROLES.client || role===ROLES.carer)
          ? ["Pending"]
          : ["All Ticket", "My Tickets", "Pending"],
    },
    {
      label: (
        <div onClick={() => navigate(`/help/it-help-desk/support-dashbaord`)}>
          <Space>
            <img
              src={commentIcon}
              alt="commentIcon"
              className="d-flex align-center"
              width={24}
              height={24}
            />
            <span>View Comments</span>
          </Space>
        </div>
      ),
      key: "3",
      status: (role === ROLES.admin || role===ROLES.client || role===ROLES.carer) ? ["Pending", "Resolved", "Onhold"] : [],
    },
    {
      label: (
        <div
          onClick={() => {
            setIsDeleteModal(true);
          }}
        >
          <Space>
            <img
              src={delteTicketIcon}
              alt="Delete"
              className="d-flex align-center"
              width={24}
              height={24}
            />
            <span>Delete</span>
          </Space>
        </div>
      ),
      key: "4",
      status:
      (role === ROLES.admin || role===ROLES.client || role===ROLES.carer)
          ? ["Pending"]
          : ["All Ticket", "My Tickets", "Pending", "Onhold"],
    },
    {
      label: (
        <div
          onClick={() => {
            setIsReopenModal(true);
          }}
        >
          <Space>
            <img
              src={reOpenTicketIcon}
              alt="Reopen"
              className="d-flex align-center"
              width={24}
              height={24}
            />
            <span>Reopen Ticket</span>
          </Space>
        </div>
      ),
      key: "5",
      status: ["Resolved"],
    },
  ];

  const DropDownWrapper = (props: any) => {
    let { items } = props;
    return (
      <Dropdown menu={{ items }} trigger={["click"]}>
        <div className="equal--width-tb">
          <img src={threeDots} alt="menu" style={{ cursor: "pointer" }} />
        </div>
      </Dropdown>
    );
  };

  const columns: ColumnsType<ItHelpDeskSummaryCommonTableData> = [
    {
      title: "Ticket #",
      dataIndex: "ticketNO",
      width: "123px",
      align: "center",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      width: "170px",
      align: "center",
    },

    {
      title: "Priority",
      dataIndex: "priority",
      width: "130px",
      align: "center",
    },
  ];
  // let role = "superAdmin";

  if (role === ROLES.superAdmin || role === ROLES.admin  ) {
    columns.splice(0, 0, {
      title: "Sr #",
      dataIndex: "srNo",
      width: "100px",
      align: "center",
    });
    columns.splice(3, 0, {
      title: "Ticket Description",
      dataIndex: "ticketDescription",
      width: "208px",
      align: "center",
    });
    columns.splice(4, 0, {
      title: "Ticket Status",
      dataIndex: "ticketStatus",
      width: "240px",
      align: "center",
      render: (_, ticketStatus) => (
        <div className="equal--width-tb d-flex justify-center wrap--select">
          <Select
            defaultValue={"pending"}
            style={{ width: 120 }}
            className="wrap-select-ticket-status"
            onChange={handleChange}
            options={[
              { value: "pending", label: "pending" },
              { value: "onhold", label: "onhold" },
              { value: "closed", label: "closed" },
              { value: "resolved", label: "resolved" },
            ]}
          />
        </div>
      ),
    });
    columns.splice(5, 0, {
      title: "Initiated By",
      dataIndex: "initiatedBy",
      width: "130px",
      align: "center",
    });
    columns.splice(6, 0, {
      title: "Initiated Date",
      width: "130px",
      dataIndex: "initiatedDate",
      align: "center",
    });
    columns.splice(7, 0, {
      title: "Assigned To",
      dataIndex: "assignedTo",
      width: "130px",
      align: "center",
    });
    columns.splice(8, 0, {
      title: "Comment",
      dataIndex: "comment",
      width: "140px",
      align: "center",
      render: (_, ticketStatus) => (
        <div
          onClick={() => navigate(`/help/it-help-desk/support-dashbaord`)}
          className="equal--width-tb d-flex justify-center"
        >
          <div className="wrap-comment">
            <EllipsisOutlined />
          </div>
        </div>
      ),
    });
    columns.splice(9, 0, {
      title: "Attachment",
      dataIndex: "attachment",
      width: "130px",
      align: "center",
      render: () => (
        <div className="d-flex align-center justify-center">
          <img
            src={tableAttachmentIcon}
            alt="tableAttachmentIcon"
            style={{ cursor: "pointer" }}
          />
          <DownloadOutlined className="table-download-icon" />
        </div>
      ),
    });
    {
      columns.splice(11, 0, {
        title: "Action",
        dataIndex: "action",
        width: "130px",
        align: "center",
        render: (_, item) => (
          <div className="equal--width-tb d-flex justify-center">
            {/* {item.status} */}
            {item.status !== "Closed" &&
              item.status !== "Onhold" &&
              item.status !== "Resolved" && (
                <DropDownWrapper
                  items={menuItems.filter((ele: any) =>
                    ele.status.includes(stepperValue)
                  )}
                />
              )}
            {item.status === "Resolved" && (
              <div>
                <div
                  onClick={() => {
                    setIsReopenModal(true);
                  }}
                >
                  <Space>
                    <img
                      src={reOpenTicketIcon}
                      alt="Edit"
                      className="d-flex align-center"
                      width={24}
                      height={24}
                      style={{cursor:"pointer"}}
                    />
                  </Space>
                </div>
              </div>
            )}

            {/* {(item.status === "Resolved") && <div>dsad</div>} */}
          </div>
        ),
      });
    }
  }
  if (role === ROLES.instructor || role === ROLES.coordinator ) {
    columns.splice(0, 0, {
      title: "Sr #",
      dataIndex: "srNo",
      width: "100px",
      align: "center",
    });
    columns.splice(3, 0, {
      title: "Ticket Description",
      dataIndex: "ticketDescription",
      width: "208px",
      align: "center",
    });
    columns.splice(4, 0, {
      title: "  Ticket Status ",
      dataIndex: "status",
      width: "150px",
      align: "center",
      render: (_, item) => (
        <div
          className="equal--width-tb d-flex"
          style={{
            justifyContent: "space-around",
            color: `${
              item.status === "Resolved"
                ? "#52C41A"
                : item.status === "Pending"
                ? "#FAAD14"
                : item.status === "Onhold"
                ? "#FF4D4F"
                : item.status === "Closed"
                ? "#65CDF0"
                : ""
            }`,
          }}
        >
          {item.status}
          {/* {item.status !== "Closed" && (
            <DropDownWrapper
              items={menuItems.filter((ele: any) =>
                ele.status.includes(item.status)
              )}
            />
          )} */}
        </div>
      ),
    });
    columns.splice(5, 0, {
      title: "Initiated Date",
      width: "130px",
      dataIndex: "initiatedDate",
      align: "center",
    });
   
    columns.splice(6, 0, {
      title: "Comment",
      dataIndex: "comment",
      width: "140px",
      align: "center",
      render: (_, ticketStatus) => (
        <div
          onClick={() => navigate(`/help/it-help-desk/support-dashbaord`)}
          className="equal--width-tb d-flex justify-center"
        >
          <div className="wrap-comment">
            <EllipsisOutlined />
          </div>
        </div>
      ),
    });
    columns.splice(9, 0, {
      title: "Attachment",
      dataIndex: "attachment",
      width: "130px",
      align: "center",
      render: () => (
        <div className="d-flex align-center justify-center">
          <img
            src={tableAttachmentIcon}
            alt="tableAttachmentIcon"
            style={{ cursor: "pointer" }}
          />
          <DownloadOutlined className="table-download-icon" />
        </div>
      ),
    });
    {
      columns.splice(11, 0, {
        title: "Action",
        dataIndex: "action",
        width: "130px",
        align: "center",
        render: (_, item) => (
          <div className="equal--width-tb d-flex justify-center">
            {/* {item.status} */}
            {item.status !== "Closed" &&
              item.status !== "Onhold" &&
              item.status !== "Resolved" && (
                <DropDownWrapper
                  items={menuItems.filter((ele: any) =>
                    ele.status.includes(stepperValue)
                  )}
                />
              )}
            {item.status === "Resolved" && (
              <div>
                <div
                  onClick={() => {
                    setIsReopenModal(true);
                  }}
                >
                  <Space>
                    <img
                      src={reOpenTicketIcon}
                      alt="Edit"
                      className="d-flex align-center"
                      width={24}
                      height={24}
                      style={{cursor:"pointer"}}
                    />
                  </Space>
                </div>
              </div>
            )}

            {/* {(item.status === "Resolved") && <div>dsad</div>} */}
          </div>
        ),
      });
    }
  }

  if ( role === ROLES.client || role === ROLES.carer) {
    columns.splice(2, 0, {
      title: "Reported by",
      dataIndex: "reportedBy",
      width: "130px",
      align: "center",
    });
    columns.splice(4, 0, {
      title: "Response Added",
      dataIndex: "responseAdded",
      width: "130px",
      align: "center",
    });
    columns.splice(3, 0, {
      title: "Date ",
      dataIndex: "date",
      width: "130px",
      align: "center",
    });
    columns.splice(6, 0, {
      title: "Status ",
      dataIndex: "status",
      width: "150px",
      align: "center",
      render: (_, item) => (
        <div
          className="equal--width-tb "
          style={{
            // justifyContent: "space-around",
            color: `${
              item.status === "Resolved"
                ? "#52C41A"
                : item.status === "Pending"
                ? "#FAAD14"
                : item.status === "Onhold"
                ? "#FF4D4F"
                : item.status === "Closed"
                ? "#65CDF0"
                : ""
            }`,
          }}
        >
          {item.status}
          {/* {item.status !== "Closed" && (
            <DropDownWrapper
              items={menuItems.filter((ele: any) =>
                ele.status.includes(item.status)
              )}
            />
          )} */}
        </div>
      ),
    });
    columns.splice(8, 0, {
      title: "Action ",
      dataIndex: "action",
      width: "150px",
      align: "center",
      render: (_, item) => (
        <div
          className="equal--width-tb "
          // style={{
          //   justifyContent: "space-around",
          //   color: `${
          //     item.status === "Resolved"
          //       ? "#52C41A"
          //       : item.status === "Pending"
          //       ? "#FAAD14"
          //       : item.status === "Onhold"
          //       ? "#FF4D4F"
          //       : item.status === "Closed"
          //       ? "#65CDF0"
          //       : ""
          //   }`,
          // }}
        >
          {/* {item.status} */}
          {item.status !== "Closed" && (
            <DropDownWrapper
              items={menuItems.filter((ele: any) =>
                ele.status.includes(item.status)
              )}
            />
          )}
        </div>
      ),
    });
  }

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    hideSelectAll: true,
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div className="wrap-common-table">
      <Table
        columns={columns}
        rowSelection={role === "superAdmin" ? rowSelection : undefined}
        dataSource={
          stepperValue === "All Tickets" || stepperValue === "My Tickets"
            ? itHelpDeskSummaryCommonTableData
            : itHelpDeskSummaryCommonTableData.filter(
                (itHelpDeskSummaryCommonTableDatafilter) =>
                  itHelpDeskSummaryCommonTableDatafilter.status === stepperValue
              )
        }
        size="middle"
        scroll={{ x: "max-content" }}
        pagination={{ pageSize: 4 }}
        // pagination=defaultCurrent={1} total={50}
      />
      {/* )}  */}
      <DeleteModal
        setDeleteModal={setIsDeleteModal}
        deleteModal={isDeleteModal}
        submitTitle="Cancel"
        cancelTitle="Yes, Delete"
        title="Are you sure you want to Delete this ?"
        onSubmit={handleDeleteSubmit}
        onCancel={handleCancelSubmit}
      />
      <ReopenModal
        setIsReopenModal={setIsReopenModal}
        isReopenModal={isReopenModal}
        submitTitle="Yes"
        cancelTitle="No"
        title="Are you sure you want to re-open this Ticket?"
        onSubmit={handleReopenSubmit}
        onCancel={handleCancelReopenSubmit}
      />
      <AddTicketModal
        // title="Edit Ticket"
        addTicketModal={addTicketModal}
        setAddTicketModal={setAddTicketModal}
        type={modalType}
      />
    </div>
  );
};

export default ItHelpTicketSummaryCommonTable;
