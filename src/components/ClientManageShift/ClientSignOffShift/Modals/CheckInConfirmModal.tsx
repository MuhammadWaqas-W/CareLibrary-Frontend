import React from "react";
import { Col, Modal, Row } from "antd";
import ProfileImg from "../../../../assets/images/ClientBookingCalendar/profile-img.png";
import { clientShiftInformationData } from "../../../../mock/ClientManageShift";
import "./Modal.scss";

const ConfirmModal = (props: any) => {
  const { isConfirmModal, setIsConfirmModal } = props;
  return (
    <>
      <Modal title="Shift Information" open={isConfirmModal} onCancel={() => setIsConfirmModal(false)} footer={false} className="confirm-modal-wrapper" width={800}>
        <div className="confirm-modal-content">
          <Row gutter={[20, 20]} align="middle" justify="center">
            <Col xl={8} lg={8} md={24} sm={24} xs={24}>
              <div className="profile-information text-center">
                <img src={ProfileImg} alt="" />
                <h2 className="fs-16 fw-500 m-0 title-color">Mallesh Goriga</h2>
                <p className="fs-14 fw-400 m-0 light-grey-color">Health Care Assistant</p>
              </div>
            </Col>
            <Col xl={16} lg={16} md={16} sm={24} xs={24}>
              {clientShiftInformationData.map((item) => (
                <div className="shift-info d-flex justify-between">
                  <div className="shift-icon-wrap d-flex align-center">
                    <div
                      className="shift-item-img d-flex align-center justify-center"
                      style={{
                        background:
                          item.id === "1"
                            ? "#AAFFDA"
                            : item.id === "2"
                            ? "#E7CEE7"
                            : item.id === "3"
                            ? "#89C1F1"
                            : item.id === "4"
                            ? "#FFD0D1"
                            : item.id === "5"
                            ? "#FFE7AE"
                            : item.id === "6"
                            ? "#FCC7D3"
                            : item.id === "7"
                            ? "#DAEFFF"
                            : "",
                      }}
                    >
                      <img src={item.icon} alt="" />
                    </div>
                    <h2 className="fs-14 fw-600 line-height-18 form-heading-color m-0">{item.label}</h2>
                  </div>
                  <div className="shifts-title">
                    <p className="fs-14 fw-400 title-color m-0">{item.value}</p>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
          <div className="shift-btn-wrapper d-flex align-center">
            <button type="button" className="cancel-btn fs-16 fw-600 white-color m-0">
              Cancel
            </button>
            <button type="submit" className="confirm-btn fs-16 fw-600 white-color m-0">
              Confirm and Sign Off
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ConfirmModal;
