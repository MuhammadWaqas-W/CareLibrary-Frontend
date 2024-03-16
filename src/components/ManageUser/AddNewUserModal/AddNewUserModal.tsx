import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
} from "antd";
import "./AddNewModal.scss";
import "../../../sass/common.scss";
import dayjs from "dayjs";
import CrossIcon from "../../../assets/icons/ManageUser/cross-icon.svg";
import SelectWrapper from "../../../shared/SelectWrapper/SelectWrapper";

//Main Component
const AddNewUser = ({
  onSubmit,
  isAddNewUserModalOpen,
  setIsAddNewUserModalOpen,
  manageUsersTableData,
}: any) => {

  const [form] = Form.useForm();
 

  //when all the values we entered are valid then handleOk Funtion will Execute
  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const data = {
          ...values,
          status: values.status === "Active" ? true : false,
          createdDate: dayjs(values?.createdDate).format("YYYY-MM-DD"),
          id: manageUsersTableData.length + 1,
          userId: "UID-S8910",
          name: values.firstName + values.lastName,
          resetPassword: "Reset",
        };
        onSubmit(data);
        form.resetFields();
        setIsAddNewUserModalOpen(false);
        console.log(data); // submit form data here
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
      });
  };

  //it will excute when we want to cancel the form or wants to exit without any successful execution
  const handleCancel = () => {
    form.resetFields();
    setIsAddNewUserModalOpen(false);
  };
//Main
  return (
    <div className="add-new-user-wrapper">
      <Modal
        title={
          <span style={{ fontWeight: "500px", fontSize: "20px" }}>
            Add User
          </span>
        }
        centered
        visible={isAddNewUserModalOpen}
        open={isAddNewUserModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
        className="add-new-user-modal"
        footer={false}
        closeIcon={
          <img src={CrossIcon} alt="CrossIcon" height={16} width={16} />
        }
      >
        <Form
          layout="vertical"
          form={form}
          onFinish={handleOk}
        >
          <Row gutter={20}>
            <Col md={12} xs={24} className="add-user-input">
              <Form.Item
                className="add-user-modal-label"
                label="First Name"
                name="firstName"
                rules={[{ required: true, message: "Required field" }]}
              >
                <Input
                  placeholder="Type here"
                  name="firstName"
                />
              </Form.Item>
            </Col>
            <Col md={12} xs={24} className="add-user-input">
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[{ required: true, message: "Required field" }]}
              >
                <Input placeholder="Type here" />
              </Form.Item>
            </Col>
            <Col md={12} xs={24} className="add-user-input">
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Required field" },
                  { type: "email", message: "Invalid email format" },
                ]}
              >
                <Input
                  placeholder="Type here"
                />
              </Form.Item>
            </Col>
            <Col md={12} xs={24} className="add-user-input">
              <Form.Item
                label="Phone Number"
                name="phoneNumber"
                rules={[{ required: true, message: "Required field" }]}
              >
                <Input
                  placeholder="Type here"

                />
              </Form.Item>
            </Col>
            <Col md={24} xs={24} lg={24} xl={24} sm={24}>
              <Form.Item
                label="Status"
                name="status"
                rules={[{ required: true, message: "Required field" }]}
              >
                 <SelectWrapper  placeHolder="Selected Option"  name="userType"  options={[
                    { value: "Active", label: "Active" },
                    { value: "Inactive", label: "Inactive" },
                  ]}  size="large" />
              </Form.Item>
            </Col>
            <Col md={24} xs={24} lg={24} xl={24} sm={24}>
              <Form.Item
                label="Created Date"
                name="createdDate"
                rules={[{ required: true, message: "Required field" }]}
              >
                <DatePicker
                  style={{ width: "100%", borderRadius: "3px", height: "45px" }}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Space size={12}>
                <Button type="primary"
                  onClick={handleCancel}
                  style={{ backgroundColor: "#FF4D4F" }}
                >
                  Cancel
                </Button>
                <Button type="primary" htmlType="submit"

                >
                  Add
                </Button>
              </Space>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default AddNewUser;
