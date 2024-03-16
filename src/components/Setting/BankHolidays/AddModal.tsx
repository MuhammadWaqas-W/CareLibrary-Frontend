import { useState } from "react";
import {
  Button,
  Modal,
  Form,
  Row,
  Col,
  Select,
  DatePicker
} from "antd";
import arrowDown from "../../../assets/icons/arrow-down-icon.svg"
import dateIcon from "../../../assets/icons/Setting/dateIcon.svg"
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
      title="Bank Holiday"
      open={addEditJobRole}
      onOk={() => {
        setAddEditJobRole(false);
      }}
      onCancel={() => {
        setAddEditJobRole(false);
      }}
      centered
      className="add-bank-holiday"
      footer={false}
      width="888px"
    >
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row gutter={20} style={{marginTop:"20px"}}>
          <Col lg={12} xs={24}>
            <label className="fs-14 fw-600">Select Date</label>
            <Form.Item
              name="SelectDate"
              rules={[{ required: true, message: "Required field " }]}
              style={{ marginBottom: "8px" }}
            >
             <DatePicker placeholder="dd/mm/yyyy" suffixIcon={<img src={dateIcon} />}/>
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
          <label className="fs-14 fw-600">Select Holiday Type</label>
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
