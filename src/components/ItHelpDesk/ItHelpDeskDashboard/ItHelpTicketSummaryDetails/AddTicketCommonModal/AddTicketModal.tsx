import { Modal, Button, Form, Input, DatePicker, Row, Col, Select } from "antd";
import { useState } from "react";
import dateIcon from '../../../../../assets/icons/ItHelpDesk/dateIcon.svg'
import "./AddTicketModal.scss";
import UploadImage from "../../../../Setting/SettingKeyInfo/UploadImage/UploadImage";
import CrossIcon from "../../../../../assets/icons/ManageUser/cross-icon.svg"
import { ROLES } from "../../../../../constants/Roles";

const validateMessages = {
  required: "Required field",
};
const { Option } = Select;


const AddTicketModal = ({ addTicketModal, setAddTicketModal, title, type }: any) => {
  // let role ="superAdmin"
  const Icon = () => (
    <img src={dateIcon} alt="dateicon" />
  )
  const onFinish = (values: any) => {
    console.log(values);
    setAddTicketModal(false);
  };

  const { role }: any = JSON.parse(localStorage.getItem("careUserData") || "{}");
console.log(role,"role is *************************")

  return (
    <div className="wrap-add-ticket">
      <Modal
        // title={ title ? title : type}
        title={<span style={{ fontWeight: "600px", fontSize: "18px",color:"#6E7191" }}>{ title ? title : type}</span>}
        width={890}
        centered
        open={addTicketModal}
        onOk={() => setAddTicketModal(false)}
        onCancel={() => setAddTicketModal(false)}
        footer={null}
        closeIcon={<img src={CrossIcon} alt="CrossIcon" height={16} width={16}/>}
      >
        {/* ******************* add ticket start here */}
       <Form
          //   {...layout}
          name="nest-messages"
          layout="vertical"
          onFinish={onFinish}
          validateMessages={validateMessages}
          className="add-new-ticket"
        >
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <Form.Item name="Date"
                //   label="Date"
                label={<label style={{ color: "#6E7191", fontSize: "14px", fontWeight: "600" }}>Date</label>}
              >
                <DatePicker suffixIcon={<Icon />} style={{ width: "100%", border: "1.5px solid #A0A3BD", borderRadius: "3PX", padding: "10px" }} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <div>
                <Form.Item
                  name={["Subject", "Subject"]}
                  label={<label style={{ color: "#6E7191", fontSize: "14px", fontWeight: "600" }}>Subject</label>}
                  rules={[{ required: true }]}
                >
                  <Input className="subject" placeholder="Type here" style={{ border: "1.5px solid #A0A3BD", borderRadius: "3PX", padding: "10px" }} />
                </Form.Item>
              </div>
            </Col>
           {(role !== ROLES.superAdmin  && role !== ROLES.admin) ?  
           <Col className="gutter-row" xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <div>
                <Form.Item
                  name={["Reported by", "Reported by"]}
                  label={<label style={{ color: "#6E7191", fontSize: "14px", fontWeight: "600" }}>Reported by</label>}
                >
                  <Input placeholder="Type here" style={{ border: "1.5px solid #A0A3BD", borderRadius: "3PX", padding: "10px" }} />
                </Form.Item>
              </div>
            </Col> : 
            <Col className="gutter-row" xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <div>
              <Form.Item
                name={["Reported by", "Reported by"]}
                label={<label style={{ color: "#6E7191", fontSize: "14px", fontWeight: "600" }}>Assigned To</label>}
              >
                <Input placeholder="Type here" style={{ border: "1.5px solid #A0A3BD", borderRadius: "3PX", padding: "10px" }} />
              </Form.Item>
            </div>
          </Col>
          }
            <Col className="gutter-row" xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <div>
                <Form.Item
                  name="Priority"
                  label={<label style={{ color: "#6E7191", fontSize: "14px", fontWeight: "600" }}>Priority</label>}
                  rules={[{ required: true, message: "Required field" }]}
                >
                  <Select placeholder="select your Priority" size="large" className="pririty-select" popupClassName="pririty-select-popup-wrap-class">
                    <Option value="high">high</Option>
                    <Option value="medium">medium</Option>
                    <Option value="low">low</Option>
                  </Select>
                </Form.Item>
              </div>
            </Col>
            <Col className="gutter-row" xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
              <div>
                <Form.Item
                  name="Description"
                  label={<label style={{ color: "#6E7191", fontSize: "14px", fontWeight: "600" }}>Description</label>}
                  rules={[{ required: true, message: "Required field" }]}
                >
                  <Input.TextArea showCount maxLength={150} placeholder="Type here" className="description" style={{ height: "100px",width:"100%" }} />
                </Form.Item>
              </div>
            </Col>
            <Col className="gutter-row" xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
              
              <div>
                <Form.Item
                  name="Attachment"
                  label={<label style={{ color: "#6E7191", fontSize: "14px", fontWeight: "600" }}>Attachment</label>}
                >
                  <UploadImage id="ticket-attchment"/>
                </Form.Item>
              </div>
            </Col>
          </Row>
          <div className="d-flex" style={{ gap: "10px" }}>
            <Form.Item>
              <Button
                htmlType="submit"
                className="btn-cancel d-flex justify-center align-center fw-600 fs-16 btn-padding"
                onClick={() => setAddTicketModal(false)}
              >
                Close
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                className="btn-secondary d-flex justify-center align-center fw-600 fs-16 btn-padding"

              >
                Save
              </Button>
            </Form.Item>
          </div>
        </Form>

      </Modal>
    </div>
  );
};

export default AddTicketModal;
