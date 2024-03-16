import { Col, Form, Input, Modal, Row, Select, Space } from "antd";
import Arrow from "../../assets/images/OnBoarding/SelectArrow.svg";
import Close from "../../assets/images/OnBoarding/Close.svg";
import "./ManageNotification.scss";
interface Props {
  isShowEditModal: any;
  setIsShowEditModal: any;
}
const EditNotification = (props: Props) => {
  const { isShowEditModal, setIsShowEditModal } = props;

  const handleOk = () => {
    setIsShowEditModal(false);
  };

  const handleCancel = () => {
    setIsShowEditModal(false);
  };

  return (
    <div className="candidate-wrapper">
      <Modal
        title={
          <span className="fs-14 fw-600 label-color">Edit Notification</span>
        }
        centered
        open={isShowEditModal}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
        className="add-modal"
        footer={false}
        closeIcon={<img src={Close} alt="" />}
      >
        <Form name="basic" layout="vertical">
          <Row gutter={[20, 5]}>
            <Col md={12} xs={24} className="onBoarding-input">
              <Form.Item
                label={
                  <span className="fs-14 fw-600 label-color">
                    Notifications
                  </span>
                }
                name="notifications"
              >
                <Input placeholder="Type here" />
              </Form.Item>
            </Col>
            <Col md={12} xs={24} className="onBoarding-input">
              <Form.Item
                label={
                  <span className="fs-14 fw-600 label-color">Description</span>
                }
                labelAlign="left"
                name="description"
              >
                <Input placeholder="Type here" />
              </Form.Item>
            </Col>
            <Col md={12} xs={24} className="onBoarding-input">
              <Form.Item
                label={
                  <span className="fs-14 fw-600 label-color">Select User</span>
                }
                labelAlign="left"
                name="user"
              >
                <Input placeholder="Type here" />
              </Form.Item>
            </Col>
            <Col md={12} xs={24}>
              <Form.Item
                label={
                  <span className="fs-14 fw-600 label-color">Action Type</span>
                }
                name="actionType"
              >
                <Select
                  placeholder="Selected Option"
                  rootClassName="selection"
                  style={{ width: "100%" }}
                  size="large"
                  suffixIcon={<img src={Arrow} alt="arrow" />}
                  className="onBoarding-select"
                  options={[
                    {
                      value: "When User is Created",
                      label: "When User is Created",
                    },
                    {
                      value: "When Carer Register",
                      label: "When Carer Register",
                    },
                    {
                      value: "When Carer is assigned",
                      label: "When Carer is assigned",
                    },
                    {
                      value: "When Carer Resigned",
                      label: "When Carer Resigned",
                    },
                    {
                      value: "When User is Created",
                      label: "When User is Created",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col md={12} xs={24} className="onBoarding-input">
              <Form.Item
                label={<span className="fs-14 fw-600 label-color">Status</span>}
                labelAlign="right"
                name="status"
              >
                <Input placeholder="Type here" />
              </Form.Item>
            </Col>
            <Col md={12} xs={24} className="onBoarding-input">
              <Form.Item
                label={
                  <span className="fs-14 fw-600 label-color">
                    Aditional Mail
                  </span>
                }
                labelAlign="right"
                name="mail"
              >
                <Input placeholder="Type here" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Space size={12}>
                <button
                  onClick={handleCancel}
                  className="btn-error fs-14 fw-600"
                >
                  Cancel
                </button>
                <button className="btn-secondary ">Update</button>
              </Space>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default EditNotification;
