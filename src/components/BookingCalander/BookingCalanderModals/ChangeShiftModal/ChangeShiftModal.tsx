import { Fragment } from "react";
import { Col, Form, Modal, Row } from 'antd';
import { v4 as uuidv4 } from "uuid";
import MockUser from "../../../../assets/BookingCalander/images/mock-user.png";
import Close from '../../../../assets/images/OnBoarding/Close.svg';
import SelectWrapper from "../../../../shared/SelectWrapper/SelectWrapper";


function ChangeShiftModal(props: any) {
  const { isChangeShiftTimeOpen, setIsChangeShiftTimeOpen } = props
  const shiftInfoMock = [
    { heading: "Staff Name", detail: "Ana Mihai" },
    { heading: "Shift Date", detail: "16/06/2022" },
    { heading: "Shift Type", detail: "Long Day" },
  ];
  return (
    <Modal centered width={636}
      closeIcon={< img src={Close} alt="close" />}
      title={<span className="fs-20 fw-600">Change Shift Time</span>}
      footer={false} className="change-shift-modal"
      open={isChangeShiftTimeOpen} onOk={() => { setIsChangeShiftTimeOpen(false) }} onCancel={() => { setIsChangeShiftTimeOpen(false) }} >
      <Row className="d-flex align-items-center justify-between">
        <Col xs={24} sm={12} md={12} style={{ margin: "2rem 0 3rem 0" }}>
          <img src={MockUser} alt="mock_user" />
          <h3 className="fs-20 fw-500 m-0">Davers Cour</h3>
        </Col>
        <Col xs={24} sm={12} md={12}>
          <Row style={{ lineHeight: 2.5 }}>
            {shiftInfoMock.map((data) => {
              return (
                <Fragment key={uuidv4()}>
                  <Col xs={12} className="fs-14 fw-600">{data.heading}:</Col>
                  <Col xs={12}>{data.detail}</Col>
                </Fragment>
              );
            })}
          </Row>
        </Col>
        <Col xs={24} md={24}>
          <Form layout="vertical">
            <Row gutter={[10, 0]}>
              <Col xs={24} md={12}>
                <SelectWrapper
                  label="Start Time"
                  onChange={(value: any) => {
                    console.log(`selected ${value}`);
                  }}
                  required={false}
                  placeHolder="07:15"
                  options={[
                    { value: "07:15", label: "07:15" },
                    { value: "08:15", label: "08:15" },
                    { value: "09:15", label: "09:15" },
                  ]}
                  name="startTime"
                />
              </Col>
              <Col xs={24} md={12}>
                <SelectWrapper
                  label="End Time"
                  onChange={(value: any) => {
                    console.log(`selected ${value}`);
                  }}
                  required={false}
                  placeHolder="07:30"
                  options={[
                    { value: "07:30", label: "07:30" },
                    { value: "08:30", label: "08:30" },
                    { value: "09:30", label: "09:30" },
                  ]}
                  name="endTime"
                />
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Modal>
  )
}

export default ChangeShiftModal
