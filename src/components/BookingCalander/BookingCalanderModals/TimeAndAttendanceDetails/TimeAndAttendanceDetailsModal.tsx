import { Fragment } from "react";
import { Col, Modal, Row } from "antd";
import { v4 as uuidv4 } from "uuid";
import MockUser from "../../../../assets/BookingCalander/images/mock-user.png";
import Ribbon from "../../../../assets/BookingCalander/images/ribbon.png";
import DateIcon from "../../../../assets/BookingCalander/images/date.png";
import Close from '../../../../assets/images/OnBoarding/Close.svg';

function TimeAndAttendanceDetailsModal(props: any) {
  const { isAttendanceModalOpen, setIsAttendanceModalOpen } = props;
  const shiftInfoMock = [
    { heading: "Shift Duration", detail: "16/06/2022" },
    { heading: "Start Time", detail: "08:50 Am" },
    { heading: "End Time", detail: "08:50 pm" },
  ];
  return (
    <Modal
      centered
      width={691}
      closeIcon={< img src={Close} alt="close" />}
      footer={false}
      className="details-modal-wrapper"
      open={isAttendanceModalOpen}
      onOk={() => {setIsAttendanceModalOpen(false)}}
      onCancel={() => { setIsAttendanceModalOpen(false)}}>
      <Row>
        <Col xs={12} sm={12} md={12} style={{ margin: "2rem 0 3rem 0" }}>
          <img src={MockUser} alt="mock_user" />
          <h3 className="fs-20 fw-500 m-0">Davers Cour</h3>
          <div className="detail-wrapper">
            <img src={Ribbon} alt="ribbon" />
            <span className="fs-12 fw-500" style={{marginLeft:"10px"}}>Long Day</span>
          </div>
          <div className="detail-wrapper">
            <img src={DateIcon} alt="date" />
            <span className="fs-12 fw-500" style={{marginLeft:"10px"}}>16/06/2022 - 16/06/2022</span>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12}>
          <Row style={{ marginTop: "5rem" }}>
            {shiftInfoMock.map((data) => {
              return (
                <Fragment key={uuidv4()}>
                  <Col xs={12} className="fs-14 fw-600">
                    {data.heading}:
                  </Col>
                  <Col xs={12}>{data.detail}</Col>
                </Fragment>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Modal>
  );
}

export default TimeAndAttendanceDetailsModal;
