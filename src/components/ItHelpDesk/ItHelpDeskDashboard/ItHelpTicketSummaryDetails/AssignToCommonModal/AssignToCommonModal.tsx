import { Button, Input, Modal } from "antd";
import { assignToList } from "../../../../../mock/ItHelpDesk/ItHelpDashboard";
import Search from "../../../../../assets/images/OnBoarding/Search.svg";
import CrossIcon from "../../../../../assets/icons/ManageUser/cross-icon.svg";
import "./AssignToCommonModal.scss";
import { useState } from "react";

const AssignToCommonModal = ({
  assignToModal,
  setAssignToModal,
  title,
  type,
}: any) => {
  const [assignList, setAssignList] = useState("");
  const handleData = (item: any) => {
    console.log(item);
    setAssignList(item);
  };
  return (
    <>
      <Modal
        className="wrap-assign-to"
        wrapClassName="wrap-assign"
        // title="Assign To"
        title={
          <span
            style={{ fontWeight: "600px", fontSize: "20px", color: "#6E7191" }}
          >
            Assign To
          </span>
        }
        open={assignToModal}
        width={693}
        centered
        onOk={() => setAssignToModal(false)}
        onCancel={() => setAssignToModal(false)}
        footer={null}
        closeIcon={
          <img src={CrossIcon} alt="CrossIcon" height={16} width={16} />
        }
      >
        <Input
          placeholder={assignList ? assignList : "Search"}
          style={{ marginBottom: "30px", border: " 1.5px solid #D9DBE9" }}
          prefix={<img src={Search} alt="search icon" className="icon" />}
          value={assignList}
        />
        <ul>
          {assignToList.map((item: any) => {
            return (
              <li
                className="fs-14 fw-400 title-color assign-list-hover"
                style={{ marginBottom: "15px", cursor: "pointer" }}
                onClick={(e: any) => {
                  handleData(e.target.innerHTML);
                }}
              >
                {item.firstName + " " + item.lastName}
              </li>
            );
          })}
        </ul>
        <div
          className="d-flex"
          style={{ marginTop: "30px", gap: "3px", flexWrap: "wrap" }}
        >
          <Button
            className="assign-btn"
            style={{ backgroundColor: "#4E132C", color: "white" }}
            onClick={() => {
              setAssignToModal(false);
            }}
          >
            Cancel
          </Button>
          <Button
            className="assign-btn"
            style={{ backgroundColor: "#4AD1FE", color: "white" }}
            onClick={() => {
              setAssignToModal(false);
            }}
          >
            Assign
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default AssignToCommonModal;
