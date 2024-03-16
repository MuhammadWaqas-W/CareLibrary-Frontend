import { useState } from "react";
import {
  Button,
  Modal,
  Input,
  Form,
  Row,
  Col,
} from "antd";
import "./EmailTemplates.scss";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import "../../../../sass/common.scss";

function AddModal(props: any) {
  const { addTemplate, setAddTemplate } = props;
  const [errorUsers, setErrorUsers] = useState("");
  const [value, setValue] = useState('');

  const [form] = Form.useForm();

  //Failed form fields
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  //On Finish used to reset form fields in form
  const onFinish = (values: any) => {
    form.resetFields();
    setAddTemplate(false);
  };
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline',],
      [{ 'align': [] }],
      [{ 'list': 'ordered'}],
      ['link', 'image'],
    ]
  };

  return (
    <Modal
      title="Create Template"
      open={addTemplate}
      onOk={() => {
        setAddTemplate(false);
      }}
      onCancel={() => {
        setAddTemplate(false);
      }}
      centered
      className="add-Template"
      footer={false}
      width="888px"
    >
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed} style={{ marginTop: "20px" }}>
        <Row gutter={20}>
          <Col lg={12} xs={24}>
            <label className="fs-14 fw-600">Template Title</label>
            <Form.Item
              name="TemplateTitle"
              rules={[{ required: true, message: "Required field " }]}
              style={{ marginBottom: "8px" }}
            >
              <Input
                placeholder="Type here"
                id="TemplateTitle"
                style={{ marginTop: "2px" }}
              />
            </Form.Item>
          </Col>
        </Row>

        <div className="template-editor">
            <ReactQuill theme="snow" value={value} onChange={setValue} placeholder="Type here"modules={modules}/>
            
        </div>

      

        <Form.Item style={{ marginTop: "20px" }}>


          <Button
            className="btn-cancel"  
            onClick={() => {
              setAddTemplate(false);form.resetFields();
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
