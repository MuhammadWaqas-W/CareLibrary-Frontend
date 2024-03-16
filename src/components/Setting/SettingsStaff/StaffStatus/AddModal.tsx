import { useState } from "react";
import {
  Button,
  Modal,
  Input,
  Form,
  Row,
  Col,
} from "antd";
import "./StaffStatus.scss";
// import "../../../../sass/common.scss";

function AddModal(props: any) {
  const { addEditVisa, setAddEditVisa } = props;
  const [errorUsers, setErrorUsers] = useState("");

  const [form] = Form.useForm();

  //Failed form fields
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  //On Finish used to reset form fields in form
  const onFinish = (values: any) => {
    form.resetFields();
    setAddEditVisa(false);
  };
  return (
    <Modal
      title="Add Status "
      open={addEditVisa}
      onOk={() => {
        setAddEditVisa(false);
      }}
      onCancel={() => {
        setAddEditVisa(false);
      }}
      centered
      className="add-status"
      footer={false}
      width="888px"
    >
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed} style={{marginTop:"20px"}}>
        <Row gutter={20}>
          <Col lg={12} xs={24}>
            <label className="fs-14 fw-600">Status Title</label>
            <Form.Item
              name="StatusTitle"
              rules={[{ required: true, message: "Required field " }]}
              style={{ marginBottom: "8px" }}
            >
              <Input
                placeholder="Type here"
                id="StatusTitle"
                style={{ marginTop: "2px"}}
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item style={{ marginTop: "20px" }}>
      
          <Button
          className="btn-save btn-secondary"
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
