import { Modal } from "antd";
import React from "react";
import "./AvailabilityModal.scss";

const AvailabilityModal = (props: any) => {
  const { isAvailability, setIsAvailability } = props;
  return (
    <Modal
      title="Select Aarathi Sabu Availability"
      centered
      open={isAvailability}
      onCancel={() => setIsAvailability(false)}
      onOk={() => setIsAvailability(false)}
      footer={false}
      width={550}
      className="availability-modal-wrapper"
    >
      <div className="availability-modal-content">
        <div
          className="availability-date d-flex align-center"
          style={{ gap: "5px" }}
        >
          <h3 className="m-0 fs-14 fw-600 line-height-17">
            Availability Date:
          </h3>
          <p className="m-0 fs-14 fw-500 line-height-17">19-05-2022 </p>
        </div>
        <div className="select-availability">
          <h3
            className="m-0 fs-14 fw-600 line-height-17"
            style={{ paddingBlock: "30px" }}
          >
            Select Availability
          </h3>
          <div
            className="weather-update-wrapper d-flex align-item-center"
            style={{ gap: "35px" }}
          >
            <div className="Long-day"></div>
            <div className="morning-update d-flex justify-center align-center">
              <h3 className="m-0 fs-14 fw-600 line-height-17">A M</h3>
            </div>
            <div className="afternoon-update d-flex justify-center align-center">
              <h3 className="m-0 fs-14 fw-600 line-height-17 ">P M</h3>
            </div>
            <div className="night"></div>
          </div>
        </div>

        <div className="d-flex availability-modal-btn">
          <button
            type="button"
            className="cancel-btn cursor-pointer fs-16 line-height-22 white-color fw-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="save-btn cursor-pointer fs-16 line-height-22 white-color fw-600"
          >
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AvailabilityModal;
