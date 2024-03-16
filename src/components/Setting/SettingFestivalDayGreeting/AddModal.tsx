import { useState } from "react";
import {
  Button,
  Modal,
  Input,
  Form,
  Row,
  Col,
  DatePicker,
  Select,
} from "antd";
import "./SettingFestivalDayGreeting.scss";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import arrowDown from "../../../assets/icons/arrow-down-icon.svg"
import dateIcon from "../../../assets/icons/Setting/dateIcon.svg"
// import "../../../../sass/common.scss";

function AddModal(props: any) {
  const { addEditFestivalDay, setAddEditFestivalDay } = props;
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
    setAddEditFestivalDay(false);
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
      open={addEditFestivalDay}
      onOk={() => {
        setAddEditFestivalDay(false);
      }}
      onCancel={() => {
        setAddEditFestivalDay(false);
      }}
      centered
      className="add-festival"
      footer={false}
      width="888px"
    >
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed} style={{ marginTop: "20px" }}>
        <Row gutter={20}>
          <Col lg={12} xs={24}>
            <label className="fs-14 fw-600">Festival Name</label>
            <Form.Item
              name="FestivalName"
              rules={[{ required: true, message: "Required field " }]}
              style={{ marginBottom: "8px" }}
            >
              <Input
                placeholder="Type here"
                id="FestivalName"
                style={{ marginTop: "2px" }}
              />
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <label className="fs-14 fw-600">Festival Date</label>
            <Form.Item
              name="TemplateTitle"
              rules={[{ required: true, message: "Required field " }]}
              style={{ marginBottom: "8px" }}
            >
              <DatePicker suffixIcon={<img src={dateIcon} />}/>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={20}>

          <Col lg={12} xs={24}>
            <label className="fs-14 fw-600">Template</label>
            <Form.Item
              name="TemplateType"
              rules={[{ required: true, message: "Required field " }]}
              style={{ marginBottom: "8px" }}
            >
              <Select
                suffixIcon={<img src={arrowDown} />}
                defaultValue="Select"
                options={[
                  { value: 'Buzz Hr', label: 'Buzz Hr' },
                  { value: 'Web & app', label: 'Web & app' },
                  { value: 'Screencasts', label: 'Screencasts' },
                ]}
              />
            </Form.Item>
          </Col>

        </Row>

        <div className="template-editor">
          <ReactQuill theme="snow" value={value} onChange={setValue} placeholder="Type here"  modules={modules}/>

        </div>



        <Form.Item style={{ marginTop: "20px" }}>


          <Button
            className="btn-cancel"
            onClick={() => {
              setAddEditFestivalDay(false); form.resetFields();
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
