import React from "react";
import { Col, Modal, Rate, Row } from "antd";
import ProfileImg from "../../../../assets/images/ClientBookingCalendar/profile-img.png";
import { clientShiftConfirmData, } from "../../../../mock/ClientManageShift";
import "./Modal.scss";
import TextArea from "antd/es/input/TextArea";

const CompletedConfirmModal = (props: any) => {
  const { isCompletedConfirmModal, setIsCompletedConfirmModal } = props;
  return (
    <>
      <Modal title="Shift Information" open={isCompletedConfirmModal} onCancel={() => setIsCompletedConfirmModal(false)} footer={false} className="confirm-modal-wrapper" width={850} centered>
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
              {clientShiftConfirmData.map((item) => (
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
          <div className="shift-textarea-wrapper shift-textare-content bg-white">
            <div className="shift-rating-wrapper">
              <p className="form-heading-color fs-16 fw-500 line-height-24 m-0">Rate this shift</p>
              <Rate defaultValue={2} allowHalf style={{ color: "#FABF35" }} />
            </div>
            <label className="label-color fs-14 fw-600 m-0">Leave a review</label>
            <TextArea rows={3} placeholder="Type here" />
          </div>
          <div className="shift-btn-wrapper d-flex align-center" style={{paddingTop: "30px"}}>
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

export default CompletedConfirmModal;
