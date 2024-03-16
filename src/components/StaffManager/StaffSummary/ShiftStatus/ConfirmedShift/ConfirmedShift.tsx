import { Row, Col, Button, Rate } from "antd";
import { useState } from "react";
import { confirmShiftData } from "../../../../../mock/StaffManagerMock";
import HomeImg from "../../../../../assets/images/staffManager/home.png";
import DeleteModal from "../../../../../shared/DeleteModal/DeleteModal";
import PersonImg from '../../../../../assets/images/staffManager/person.png'
import './ConfirmedShift.scss'

const ConfirmedShift = () => {
  const [isCancelShift, setIsCancelShift] = useState(false);
  return (
    <>
      <div className="confirmed-shift-wrapper-main">
        <div className="open-shift-wrapper" >
          <Row gutter={[20, 20]}>
            {confirmShiftData.map((item: any) => (
              <Col xl={6} lg={12} md={12} xs={24} sm={24}>
                <div className="open-shift-cards-wrapper d-flex flex-column">
                  <div
                    className="d-flex justify-around"
                    style={{ gap: "10px" }}
                  >
                    <div>
                      <img src={HomeImg} alt="homeIcon" />
                    </div>
                    <div>
                      <span className="fs-20 fw-500 line-height-28">
                        {item.shiftTitle}
                      </span>
                      <div>
                        <Rate disabled defaultValue={2} />
                      </div>
                    </div>
                  </div>
                  <div className="open-shift-content d-flex align-center">
                    <img src={PersonImg} alt="contacts-img" />
                    <span>{item.address}</span>
                  </div>
                  <div className="open-shift-content d-flex align-center">
                    <img src={item.homeImg} alt="contacts-img" />
                    <span>{item.address}</span>
                  </div>
                  <div className="open-shift-content d-flex align-center">
                    <img src={item.calanderIcon} alt="contacts-img" />
                    <span>{item.date}</span>
                  </div>
                  <div className="open-shift-content d-flex align-center">
                    <img src={item.clockIcon} alt="contacts-img" />
                    <span>{item.time}</span>
                  </div>
                  <div className="open-shift-content d-flex align-center">
                    <img src={item.sunIcon} alt="contacts-img" />
                    <span>{item.weather}</span>
                  </div>
                  <div className="open-shift-content d-flex align-center">
                    <img src={item.poundSign} alt="contacts-img" />
                    <span>{item.shiftRate}</span>
                  </div>
                  <div className="staff-cards-btn d-flex align-item-center">
                    <Button
                      className="assign-btn"
                      onClick={() => setIsCancelShift(true)}
                    >
                      Cancel Shift
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <DeleteModal
        deleteModal={isCancelShift}
        title={"Are you sure you want to cancel this shift?"}
        submitTitle={"Cancel"}
        cancelTitle={"Yes, Discard"}
        setDeleteModal={() => setIsCancelShift(false)}
        onSubmit={() => setIsCancelShift(false)}
        onCancel={() => setIsCancelShift(false)}
      />
    </>
  );
};
export default ConfirmedShift;
