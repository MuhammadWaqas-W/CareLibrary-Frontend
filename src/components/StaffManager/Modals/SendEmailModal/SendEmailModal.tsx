import React, { useState } from "react";
import { Input, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import CloseIcon from "../../../../assets/icons/close-icon.svg";
import "./SendEmailModal.scss";

const SendEmailModal = (props: any) => {
  const { isSendEmailModalOpen, setIsSendEmailModalOpen } = props;
  return (
    <>
      <Modal
        open={isSendEmailModalOpen}
        onCancel={() => setIsSendEmailModalOpen(false)}
        footer={false}
        centered
        className="staff-email-send-modal"
        closeIcon={<img src={CloseIcon} alt="" />}
        width={700}
      >
        <div className="staff-email-send-content d-flex flex-column">
          <div className="input-field">
            <Input
              placeholder="david@email.com"
              type="email"
              size="large"
              className="fs-14 fw-400 title-color line-heigth-22"
            />
          </div>
          <div className="input-field d-flex align-center subject-field">
            <p className="m-0 fs-14 fw-400">Subject:</p>
            <Input
              // placeholder="Subject:"
              type="text"
              size="large"
              className="fs-14 fw-400 title-color line-heigth-22 "
            />
          </div>
          <div className="input-field-text-area">
            <TextArea
              rows={10}
              placeholder="Write something here ...."
              className="fs-14 fw-400 line-height-22"
            />
          </div>
          <div className="send-email-btn">
            <button
              type="button"
              className="cursor-pointer fs-16 line-height-22 white-color fw-600"
            >
              Send Email
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SendEmailModal;
