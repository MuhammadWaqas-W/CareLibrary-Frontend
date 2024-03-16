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
      title="Manage Job Role"
      open={addEditJobRole}
      onOk={() => {
        setAddEditJobRole(false);
      }}
      onCancel={() => {
        setAddEditJobRole(false);
      }}
      centered
      className="add-Manage-Job-Role"
      footer={false}
      width="888px"
    >
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row gutter={20} style={{ marginTop: "20px" }}>
          <Col lg={12} xs={24}>
            <label className="fs-14 fw-600">Position Name</label>
            <Form.Item
              name="PositionName"
              rules={[{ required: true, message: "Required field " }]}
              style={{ marginBottom: "8px" }}
            >
              <Input
                placeholder="Type here"
                id="PositionName"
                style={{ marginTop: "2px", height: "40px",}}
              />
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
          <label className="fs-14 fw-600">Select User Role</label>
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
          <Col lg={12} xs={24}>
          <label className="fs-14 fw-600">Position Short Form</label>
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
        </Row>

        <Form.Item>
      
          <Button
          type="primary"
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
