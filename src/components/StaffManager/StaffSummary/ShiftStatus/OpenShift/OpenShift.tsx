import React, { useState } from "react";
import { Row, Col, Rate, Button, Avatar } from "antd";
import { useParams } from "react-router-dom";
import { openShiftsData } from "../../../../../mock/StaffManagerMock";
import HomeImg from "../../../../../assets/images/staffManager/home.png";
import MoreInfoModal from "./Modals/MoreInfoModal";
import DeleteModal from "../../../../../shared/DeleteModal/DeleteModal";
import RangerWrapper from "../../../../../shared/RangeWrapper/RangerWrapper";
import "../../../StaffSummary/StaffSummary.scss";
import "./OpenShift.scss";

const OpenShift = () => {
  const [isMoreInfo, setIsMoreInfo] = useState(false);
  const [isMoreInfoCards, setIsMoreInfoCards] = useState(false);
  const [isAssignShift, setIsAssignShift] = useState(false);
  const [inputValue, setInputValue] = useState(100);

  const handleProgressBar = (newValue: number) => {
    setInputValue(newValue);
  };
  const { id } = useParams();
  console.log("id", id);

  return (
    <>
      <div className="open-shift-wrapper-main">
        <div
          className="d-flex justify-between align-center"
          style={{ flexWrap: "wrap", gap: "20px" }}
        >
          <div>
            <Avatar
              style={{ backgroundColor: "#4E132C", color: "#FFFFFF" }}
              size="large"
            >
              NB
            </Avatar>
            <span
              className="fs-14 fw-600 line-height-17"
              style={{ marginLeft: "10px" }}
            >
              Nassira Boateng
            </span>
          </div>
          {/* <div className="d-flex align-center" style={{ gap: "20px" }}>
            <p className="fs-14 fw-600 line-height-17 m-0">Work Radius: </p>
            <RangerWrapper
              value={inputValue}
              onChange={handleProgressBar}
              text={inputValue}
            />
          </div> */}
          <div>
            <button
              className="open-shift-btn cursor-pointer"
              onClick={() => setIsMoreInfoCards(true)}
            >
              View Available Shifts
            </button>
          </div>
        </div>
        {!isMoreInfoCards && (
          <div
            className="d-flex align-center text-center w-100"
            style={{
              height: "100%",
              minHeight: "80vh",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            <p className="fs-14 fw-400 line-height-22 m-0">
              Available shifts in your work area will be listed here. You need
              to login and accept the shift as soon as you receive shift
              notification alerts. If you get an alert and find no shift when
              you log in, that means that shift is already accepted by someone
              else.
            </p>
          </div>
        )}

        {isMoreInfoCards && (
          <div className="open-shift-wrapper">
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
                        <div>
                          <Rate disabled defaultValue={2} />
                        </div>
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
                        className="more-info-btn"
                        onClick={() => setIsMoreInfo(true)}
                      >
                        More Info
                      </Button>
                      <Button
                        className="assign-btn"
                        onClick={() => setIsAssignShift(true)}
                      >
                        Assign Shift
                      </Button>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </div>
      <MoreInfoModal isMoreInfo={isMoreInfo} setIsMoreInfo={setIsMoreInfo} />
      <DeleteModal
        deleteModal={isAssignShift}
        title={"Do you want assign this shift to David Williams?"}
        submitTitle={"Yes"}
        cancelTitle={"No"}
        setDeleteModal={() => setIsAssignShift(false)}
        onSubmit={() => setIsAssignShift(false)}
        onCancel={() => setIsAssignShift(false)}
      />
    </>
  );
};
export default OpenShift;
