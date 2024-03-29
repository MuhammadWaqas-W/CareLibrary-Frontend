import {
  Col,
  DatePicker,
  Button,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
} from "antd";
import { useState } from "react";
import "./EditNewUserModal.scss";
import "../../../sass/common.scss";
import dayjs from "dayjs";
import CrossIcon from "../../../assets/icons/ManageUser/cross-icon.svg";

const EditNewUserModal = ({ isEditModalOpen, selectedTableData }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const editData = {
          ...values,
          createdDate: dayjs(values?.createdDate).format("YYYY-MM-DD"),
          id: "04",
          userId: "UID-S8910",
          name: values.firstName + values.lastName,
        };
        form.resetFields();
        setIsModalOpen(false);
        console.log(editData); // submit form data here
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
      });
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };
  return (
    <div className="add-new-user-wrapper">
      <Modal
        title={
          <span style={{ fontWeight: "500px", fontSize: "20px" }}>
            Edit User
          </span>
        }
        centered
        open={isEditModalOpen}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
        className="add-new-user-modal"
        footer={false}
        closeIcon={
          <img src={CrossIcon} alt="CrossIcon" height={16} width={16} />
        }
      >
        <Form form={form} onFinish={handleOk} initialValues={selectedTableData}>
          <Row gutter={[20, 20]}>
            <Col md={12} xs={24} className="onBoarding-input">
              <label className="fw-600 fs-14  color :#6E7191">First Name</label>
              <Form.Item
                name="firstName"
                rules={[{ required: true, message: "Required field" }]}
              >
                <Input
                  placeholder="Type here"
                  name="firstName"
                />
              </Form.Item>
            </Col>
            <Col md={12} xs={24} className="onBoarding-input">
              <label className="fw-600 fs-14  color :#6E7191">Last Name</label>
              <Form.Item
                name="lastName"
                rules={[{ required: true, message: "Required field" }]}
              >
                <Input placeholder="Type here" />
              </Form.Item>
            </Col>
            <Col md={12} xs={24} className="onBoarding-input">
              <label className="fw-600 fs-14  color :#6E7191">Email</label>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Required field" },
                  { type: "email", message: "Invalid email format" },
                ]}
              >
                <Input placeholder="Type here" />
              </Form.Item>
            </Col>
            <Col md={12} xs={24} className="onBoarding-input">
              <label className="fw-600 fs-14  color :#6E7191">Phone Number</label>
              <Form.Item
                name="phoneNumber"
                rules={[{ required: true, message: "Required field" }]}
              >
                <Input placeholder="Type here" />
              </Form.Item>
            </Col>
            <Col md={24} xs={24} lg={24} xl={24} sm={24}>
              <label className="fw-600 fs-14  color :#6E7191">Status</label>
              {/* <label>Phone Number</label> */}
              <Form.Item
                name="status"
                rules={[{ required: true, message: "Required field" }]}
              >
                <Select
                  placeholder="Selected Option"
                  style={{ width: "100%", borderRadius: "3px", height: "45px" }}
                  // suffixIcon={<img src={Arrow} />}
                  className="onBoarding-select"
                  options={[
                    { value: "Active", label: "Active" },
                    { value: "Inactive", label: "Inactive" },
                  ]}
                />
              </Form.Item>
            </Col>
            {/* <Col md={24} xs={24} lg={24} xl={24} sm={24}>
                            <label>Created Date</label>
                            <Form.Item
                                name='createdDate'
                                rules={[
                                    { required: true, message: 'Required field' },
                                ]}
                            >
                            <DatePicker style={{ width: "100%", borderRadius: "3px", height: "45px" }} />
                            </Form.Item>
                        </Col> */}

            <Col span={24}>
              <Space size={12}>
                <Button type="primary"
                  style={{ backgroundColor: "#FF4D4F" }}
                >
                  Cancel
                </Button>
                <Button
                 type="primary" htmlType="submit"
                
                >
                  Update
                </Button>
              </Space>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default EditNewUserModal;
