import React from "react";
import { Col, Row } from "antd";
import "./CompletedShift.scss";
import {
  renderStaffCalculation,
  renderStaffCompletedImg,
  renderStaffOff,
  StaffCompletedShiftData,
} from "../../../../../mock/StaffManagerMock";
import HomeImg from "../../../../../assets/images/staffManager/home.png";

const CompletedShift = () => {
  return (
    <>
      <div className="client-completed-shift-wrapper bg-white">
        {StaffCompletedShiftData.map((item: any) => (
          <div
            className="client-item-completed bg-white"
            style={{ marginBottom: "20px" }}
            key={item.id}
          >
            <Row gutter={[20, 20]}>
              <Col lg={5} md={24} sm={24} xs={24}>
                <div className="d-flex justify-around" style={{ gap: "10px",paddingBottom:'25px' }}>
                  <div>
                    <img src={HomeImg} alt="homeIcon" />
                  </div>
                  <span className="fs-20 fw-500 line-height-28">
                    Tall Tree Care Home
                  </span>
                </div>
                <div className="client-content-wrapper d-flex flex-column">
                  {Object.keys(item).map(
                    (data) =>
                      renderStaffCompletedImg[data] && (
                        <div
                          className="d-flex align-center"
                          style={{ gap: "13px" }}
                        >
                          <img src={renderStaffCompletedImg[data]} alt="" />
                          <p className="fs-14 fw-400 line-height-20 m-0">
                            {item[data]}
                          </p>
                        </div>
                      )
                  )}
                </div>
              </Col>
              {/* <Divider type='vertical' style={{height: "100%"}} /> */}
              <Col lg={19}>
                <div className="client-calucation ">
                  <Row gutter={[20, 20]}>
                    {item?.shiftCalculation?.map((client: any) => (
                      <Col xl={12} lg={24} md={24}>
                        <div className="client-inner-calculation bg-white">
                          <h2 className="fs-16 fw-500 m-0 title-color line-height-24">
                            {client.id === "01"
                              ? "Staff Calculations"
                              : "Client Calculations"}
                          </h2>
                          <div className="d-flex" style={{ flexWrap: "wrap" }}>
                            {Object.keys(client).map(
                              (shift: any) =>
                                renderStaffCalculation[shift] && (
                                  <div
                                    className="staff-manager-inner d-flex align-center"
                                    style={{ gap: "10px" }}
                                  >
                                    <p className="fs-14 fw-400 m-0 title-color">
                                      {`${renderStaffCalculation[shift]}:`}
                                    </p>
                                    <h2
                                      className="fs-14 fw-600 title-color m-0"
                                      style={{
                                        color:
                                          renderStaffCalculation[shift] ===
                                            "Start Shift Hours" ||
                                          renderStaffCalculation[shift] ===
                                            "Start Shift Rate"
                                            ? "#65CDF0"
                                            : renderStaffCalculation[shift] ===
                                                "End Shift Hours" ||
                                              renderStaffCalculation[shift] ===
                                                "End Shift Rate"
                                            ? "#FF4D4F"
                                            : "",
                                      }}
                                    >
                                      {client[shift]}
                                    </h2>
                                  </div>
                                )
                            )}
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
                <div className="signed-off bg-white">
                  <div className="signed-inner-off">
                    {Object.keys(item.signOff).map(
                      (sign: any, i: number) =>
                        renderStaffOff[sign] && (
                          <Col
                            xl={12}
                            lg={12}
                            md={24}
                            sm={24}
                            xs={24}
                            key={i}
                            style={{ padding: "0" }}
                          >
                            <div
                              className="d-flex justify-between align-center"
                              style={{ gap: " 10px", flexWrap: "wrap" }}
                            >
                              <h2 className="fs-14 fw-600 title-color m-0">
                                {renderStaffOff[sign]}
                              </h2>
                              <span className="fs-14 fw-400 line-height-22 title-color">
                                Malcolm Y
                              </span>
                              <p className="fs-14 fw-400 m-0 title-color">
                                {item.signOff[sign]}
                              </p>
                            </div>
                          </Col>
                        )
                    )}
                  </div>
                  <div className="signed-desc d-flex align-center">
                    <h2 className="fs-16 fw-600 line-height-18 title-color m-0">
                      Modification Reason:
                    </h2>
                    <p className="fs-14 fw-400 m-0 title-color line-height-22">
                      {item?.signOff?.modificationReason}
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </div>
    </>
  );
};
export default CompletedShift;
