import { useState } from "react";
import {
  Button,
  Modal,
  Input,
  Form,
  Row,
  Col,
} from "antd";
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
      title="Add DBS Check Link"
      open={addEditJobRole}
      onOk={() => {
        setAddEditJobRole(false);
      }}
      onCancel={() => {
        setAddEditJobRole(false);
      }}
      centered
      className="add-dbs-check"
      footer={false}
      width="888px"
    >
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row gutter={20} style={{marginTop:"20px"}}>
          <Col lg={12} xs={24}>
            <label className="fs-14 fw-600">Website Name</label>
            <Form.Item
              name="WebsiteName"
              rules={[{ required: true, message: "Required field " }]}
              style={{ marginBottom: "8px" }}
            >
              <Input
                placeholder="Type here"
                id="WebsiteName"
                style={{ marginTop: "2px", height: "40px",}}
              />
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
          <label className="fs-14 fw-600">Wesite URL</label>
            <Form.Item
              name="WesiteURL"
              rules={[{ required: true, message: "Required field " }]}
              style={{ marginBottom: "8px" }}
            >
               <Input
                placeholder="Type here"
                id="WesiteURL"
                style={{ marginTop: "2px", height: "40px",}}
              />
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
