import { Row, Col, Button, Avatar, Rate } from "antd";
import { useState } from "react";
import { openShiftsData } from "../../../mock/StaffManagerMock";
import HomeImg from "../../../assets/images/staffManager/home.png";
import DeleteModal from "../../../shared/DeleteModal/DeleteModal";
import "./UpComingShift.scss";

const UpComingShift = () => {
  const [isCancelShift, setIsCancelShift] = useState(false);
  return (
    <>
      <div className="open-shift-wrapper-main">
        <div style={{ paddingBottom: "30px" }}>
          <Avatar
            style={{ backgroundColor: "#4E132C", color: "#FFFFFF" }}
            size="large"
          >
            DM
          </Avatar>
          <span
            className="fs-14 fw-600 line-height-17"
            style={{ marginLeft: "10px" }}
          >
            David Williams
          </span>
        </div>
        <div className="open-shift-wrapper" style={{ padding: "10px 10px" }}>
          <Row gutter={[20, 20]}>
            {openShiftsData.map((item: any) => (
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
                      <div><Rate disabled defaultValue={2} style={{}} /></div>
                    </div>
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
export default UpComingShift;
