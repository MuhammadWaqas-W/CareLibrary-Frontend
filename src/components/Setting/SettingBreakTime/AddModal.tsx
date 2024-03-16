import { useState } from "react";
import {
  Button,
  Modal,
  Input,
  Form,
  Row,
  Col,
  Select,
} from "antd";
import arrowDown from "../../../assets/icons/arrow-down-icon.svg"
import Counter from "../SettingsStaff/ProfileMetrics/Counter/Counter";
import SwitchWrapper from "../../../shared/SwitchWrapper/SwitchWrapper";
// import "../../../../sass/common.scss";

function AddModal(props: any) {
  const { addEditJobRole, setAddEditJobRole } = props;
  const [errorUsers, setErrorUsers] = useState("");

  const [form] = Form.useForm();

  //Failed form fields
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  //On Finish used to reset form fields in form
  const onFinish = (values: any) => {
    form.resetFields();
    setAddEditJobRole(false);
  };
  return (
    <Modal
      title="Add Break Time"
      open={addEditJobRole}
      onOk={() => {
        setAddEditJobRole(false);
      }}
      onCancel={() => {
        setAddEditJobRole(false);
      }}
      centered
      className="add-break-time"
      footer={false}
      width="888px"
    >
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row gutter={20}>
          <Col lg={12} xs={24}>
            <label className="fs-14 fw-600">Client Name</label>
            <Form.Item
              name="Selected Option"
              rules={[{ required: true, message: "Required field " }]}
              style={{ marginBottom: "8px" }}
            >
              <Select
                suffixIcon={<img src={arrowDown} />}
                className="d-flex"
                placeholder="Selected Option"
                options={[
                  { value: 'Medical Staff ', label: 'Medical Staff ' },
                  { value: 'Medical Staff', label: 'Medical Staff' },
                ]}
              />
            </Form.Item>
          </Col>
          <Col lg={12} xs={24} className="d-flex align-items-center justify-center">
            <div className="counter-plus-mins">
              <p className="m-0 fs-14 fw-600 from-text">From</p>
              <Counter />
            </div>
            <div className="counter-plus-mins">
              <p className="m-0 fs-14 fw-600 to-text">To</p>
              <Counter />
            </div>
            <p className="m-0">Hours</p>
          </Col>
          <Col lg={12} xs={24}>
            <label className="fs-14 fw-600">Break Time</label>
            <Form.Item
              name="PositionShortForm"
              rules={[{ required: true, message: "Required field " }]}
              style={{ marginBottom: "8px" }}
            >
              <Input
                placeholder="Type here"
                id="PositionShortForm"
                style={{ marginTop: "2px", height: "40px", }}
              />
            </Form.Item>
          </Col>
          <Col lg={12} xs={24} className="d-flex align-items-center justify-center" style={{marginTop:"25px"}}>
            {/* <label className="fs-14 fw-600">Do you Want to pay care for the break time?</label> */}
            <Form.Item
              name="PayForBreakTime"
              rules={[{ required: true, message: "Required field " }]}
              style={{ marginBottom: "8px" }}
            >
              <SwitchWrapper name="PayForBreakTime" label="Do you Want to pay carer for the break time?"/>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item style={{ marginTop: "20px" }}>

          <Button
            className="btn-cancel"
            onClick={() => {
              setAddEditJobRole(false); form.resetFields();
            }}
          >
            Cancel
          </Button>

          <Button
            className="btn-secondary"
            htmlType="submit"
            onClick={() => {
              setErrorUsers("Required field");
            }}
          >
            Save
          </Button>
        </Form.Item>
      </Form>
    </Modal>

  );
}

export default AddModal;
