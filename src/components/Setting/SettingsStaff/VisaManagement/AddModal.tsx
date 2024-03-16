import { useState } from "react";
import {
  Button,
  Modal,
  Input,
  Form,
  Row,
  Col,
} from "antd";
import "./VisaManagement.scss";
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
      title="Add Visa Type"
      open={addEditVisa}
      onOk={() => {
        setAddEditVisa(false);
      }}
      onCancel={() => {
        setAddEditVisa(false);
      }}
      centered
      className="add-visa-type"
      footer={false}
      width="888px"
    >
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed} style={{marginTop:"20px"}}>
        <Row gutter={20}>
          <Col lg={12} xs={24}>
            <label className="fs-14 fw-600">Visa Type</label>
            <Form.Item
              name="VisaType"
              rules={[{ required: true, message: "Required field " }]}
              style={{ marginBottom: "8px" }}
            >
              <Input
                placeholder="Type here"
                id="VisaType"
                style={{ marginTop: "2px", height: "40px",}}
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item style={{ marginTop: "20px" }}>
      
          <Button
          className="btn-cancel"
            onClick={() => {
              setAddEditVisa(false);form.resetFields();
            }}
          >
            Cancel
          </Button>
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
