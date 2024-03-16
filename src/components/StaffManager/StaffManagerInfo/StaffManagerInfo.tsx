import React, { useState } from "react";
import { Row, Col, Avatar, Dropdown, Space, Progress } from "antd";
import EmailIcon from "../../../assets/images/staffManager/emailIcon.png";
import { StaffManagerData } from "../../../mock/StaffManagerMock";
import type { MenuProps } from "antd";
import ViewProfileIcon from "../../../assets/images/staffManager/viewProfileImg.png";
import SendIcon from "../../../assets/images/staffManager/sendEmailIcon.png";
import AllocateStaffIcon from "../../../assets/images/staffManager/allocateStaffIcon.png";
import StaffSummaryImg from "../../../assets/images/staffManager/staffSummaryImg.png";
import DeleteIcon from "../../../assets/images/staffManager/DeleteIcon.png";
import ActionImg from "../../../assets/images/staffManager/actionImg.png";
import CallImg from "../../../assets/images/staffManager/callImg.png";
import { useNavigate } from "react-router-dom";
import AllocateStaffModal from "../Modals/AllocateStaffModal/AllocateStaffModal";
import DeleteModal from "../../../shared/DeleteModal/DeleteModal";
import SendResendModal from "../Modals/SendResendModal/SendResendModal";
import SendEmailModal from "../Modals/SendEmailModal/SendEmailModal";
import ViewProfile from "../../OnBoarding/Carer/ViewProfile/ViewProfile";
import PostCodeImg from "../../../assets/images/staffManager/postCodeImg.png";

const StaffManagerInfo = () => {
  const [staffId, setStaffId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [allocateStaff, setAllocateStaff] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [isSendEmailModalOpen, setIsSendEmailModalOpen] =
    useState<boolean>(false);
  const [IsProfileModal, setIsProfileModal] = useState(false);

  const navigate = useNavigate();
  const items: MenuProps["items"] = [
    {
      label: (
        <div
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
          onClick={() => setIsProfileModal(true)}
        >
          <img src={ViewProfileIcon} alt="ViewProfile" />
          <span>View Profile</span>
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          onClick={() => navigate(`/staff-manager/staff-summary/${staffId}`)}
        >
          <div
            className="d-flex align-center justify-center"
            style={{
              backgroundColor: "#EFF0F7",
              borderRadius: "50%",
              width: "28px",
              height: "28px",
            }}
          >
            <img src={StaffSummaryImg} alt="ViewProfile" />
          </div>
          <span>Staff Summary</span>
        </div>
      ),
      key: "2",
    },
    {
      label: (
        <div
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
          onClick={() => setIsSendEmailModalOpen(true)}
        >
          <img src={SendIcon} alt="ViewProfile" width={28} height={28} />
          <span>Send Email</span>
        </div>
      ),
      key: "3",
    },
    {
      label: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          onClick={() => setIsModalOpen(true)}
        >
          <img src={EmailIcon} alt="ViewProfile" width={28} height={28} />
          <span>Send / Resend Invitation</span>
        </div>
      ),
      key: "4",
    },
    {
      label: (
        <div
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
          onClick={() => setAllocateStaff(true)}
        >
          <img
            src={AllocateStaffIcon}
            alt="ViewProfile"
            width={28}
            height={28}
          />
          <span>Allocate Staff</span>
        </div>
      ),
      key: "5",
    },
    {
      label: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          onClick={() => setDeleteModal(true)}
        >
          <img src={DeleteIcon} alt="ViewProfile" width={28} height={28} />
          <span>Delete</span>
        </div>
      ),
      key: "6",
    },
  ];
  return (
    <>
      <div className="staff-info-wrapper">
        <div className="scroll-div">
          {StaffManagerData.map((item: any) => (
            <Row
              gutter={[20, 20]}
              className="staff-mananger-wrapper"
              style={{ marginBlock: "0.7rem" }}
              align="middle"
            >
              <Col xs={24} lg={6} xl={4} className="staff-info">
                <div className="border-right">
                  <Avatar
                    src={item.img}
                    className="user-img"
                    style={{
                      height: 100,
                      width: 100,
                    }}
                  />
                  <div className="staff-manager-heading">
                    <h2>{item.heading}</h2>
                    <p
                      className="fs-14 fw-400 line-height-18 m-0"
                      style={{ color: "#A0A3BD" }}
                    >
                      {item.profileCategory}
                    </p>
                    <p
                      className="fs-14 fw-400 line-height-18 m-0"
                      style={{ color: "#A0A3BD" }}
                    >
                      Biometric Card
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={24} lg={18} xl={20}>
                <div className="staff-manager-details">
                  <Row gutter={[15, 20]}>
                    <Col xs={24} sm={10} md={12} xxl={5}>
                      <div>
                        <h5
                          className="staff-manager-contact fs-16 fw-600 line-height-24 m-0"
                          style={{ color: "#6E7191" }}
                        >
                          Contact:
                        </h5>
                        <div
                          className="d-flex align-center contact-content"
                          style={{
                            gap: "5px",
                            marginTop: "4px",
                            paddingLeft: "1.5rem",
                          }}
                        >
                          <img src={EmailIcon} alt="email" />
                          <p className="m-0">{item.contact.email}</p>
                        </div>
                        <div
                          className="d-flex align-center contact-content"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            marginTop: "6px",
                            paddingLeft: "1.5rem",
                          }}
                        >
                          <div
                            className="d-flex align-center justify-center"
                            style={{
                              backgroundColor: "#EFF0F7",
                              borderRadius: "50%",
                              width: "28px",
                              height: "28px",
                            }}
                          >
                            <img src={CallImg} alt="email" />
                          </div>
                          <p className="m-0" style={{ margin: "0" }}>
                            {item.contact.phoneNumber}
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={14} md={12} xxl={6}>
                      <div className="d-flex align-center justify-between">
                        <div>
                          <h5
                            className="staff-manager-contact fs-16 fw-600 line-height-24 m-0 status-title"
                            style={{ color: "#6E7191" }}
                          >
                            Status:
                          </h5>
                          <h5
                            className="staff-manager-contact fs-16 fw-600 line-height-24 m-0 status-title"
                            style={{ color: "#6E7191",marginTop:'8px' }}
                          >
                            Staff Band:
                          </h5>
                          <h5
                            className="staff-manager-contact fs-16 fw-600 line-height-24 m-0 status-title"
                            style={{ color: "#6E7191",marginTop:'6px' }}
                          >
                            Employment Type:
                          </h5>
                        </div>
                        <div>
                          <h5
                            className="staff-manager-contact fs-16 fw-700 line-height-24 m-0 status-data"
                            style={{ color: "#52C41A" }}
                          >
                            {item.status}
                          </h5>
                          <h5
                            className="staff-manager-contact fs-16 fw-700 line-height-24 m-0 status-data"
                            style={{ color: "#4E4B66",marginTop:'8px' }}
                          >
                            {item.staffBand}
                          </h5>
                          <h5
                            className="staff-manager-contact fs-16 fw-700 line-height-24 m-0 status-data"
                            style={{ color: "#4E4B66",marginTop:'6px' }}
                          >
                            {item.employmentType}
                          </h5>
                        </div>
                      </div>
                    </Col>
                    <Col
                      xs={24}
                      md={12}
                      xxl={7}
                      className="d-flex justify-center progress-bar"
                    >
                      <div>
                        <h5 className="staff-manager-contact fs-16 fw-700 line-height-24 m-0">
                          {item.progress}
                        </h5>
                        <Space direction="vertical">
                          <Progress
                            percent={90}
                            strokeColor="#3CCC4A"
                            showInfo={false}
                            size={[192, 15]}
                          />
                        </Space>
                      </div>
                    </Col>
                    <Col xs={16} md={6} lg={8} xxl={3}>
                      <h5
                        className="staff-manager-contact fs-16 fw-600 line-height-24 m-0"
                        style={{ color: "#6E7191" }}
                      >
                        Post Code:
                      </h5>
                      <div
                        className="d-flex justify-around align-center"
                        style={{ gap: "6px", paddingLeft: "1rem", }}
                      >
                        <h5
                          className="staff-manager-contact fs-16 fw-700 line-height-24 m-0"
                          style={{ color: "#4E4B66" }}
                        >
                          {item.postCode}
                        </h5>
                        <img src={PostCodeImg} alt="" />
                      </div>
                    </Col>
                    <Col
                      xs={8}
                      md={6}
                      lg={4}
                      xxl={3}
                      style={{ display: "flex", justifyContent: "center" }}
                      className="staff-actions"
                    >
                      <div>
                        <h5
                          className="staff-manager-contact fs-16 fw-600 line-height-24 m-0"
                          style={{ color: "#6E7191" }}
                        >
                          Actions
                        </h5>
                        <Dropdown
                          menu={{ items }}
                          placement="bottomRight"
                          trigger={["click"]}
                          overlayClassName="distraction-alerts-dropdown"
                          className="actionDropDown "
                        >
                          <Space>
                            <div className="border-color cursor-pointer">
                              <img
                                src={ActionImg}
                                alt=""
                                onClick={() => setStaffId(item.id)}
                              />
                            </div>
                          </Space>
                        </Dropdown>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          ))}
        </div>
      </div>
      <DeleteModal
        deleteModal={deleteModal}
        title={"Are you sure you want to Delete this ?"}
        submitTitle={"Yes, Delete"}
        cancelTitle={"Cancel"}
        setDeleteModal={() => setDeleteModal(false)}
        onSubmit={() => setDeleteModal(false)}
        onCancel={() => setDeleteModal(false)}
      />
      <SendResendModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <AllocateStaffModal
        allocateStaff={allocateStaff}
        setAllocateStaff={setAllocateStaff}
      />
      <SendEmailModal
        isSendEmailModalOpen={isSendEmailModalOpen}
        setIsSendEmailModalOpen={setIsSendEmailModalOpen}
      />
      <ViewProfile
        IsProfileModal={IsProfileModal}
        setIsProfileModal={setIsProfileModal}
      />
    </>
  );
};
export default StaffManagerInfo;
