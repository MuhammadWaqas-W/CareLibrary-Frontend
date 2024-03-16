import {
  Button,
  Col,
  DatePicker,
  Dropdown,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Switch,
  Tooltip,
} from "antd";
import { useState } from "react";
import "./FormMain.scss";
import Arrow from "../../../../../assets/images/OnBoarding/arrow.svg";
import Close from "../../../../../assets/images/OnBoarding/Close.svg";
import AddIcon from "../../../../../assets/images/OnBoarding/addIcon.svg";
import infoIcon from "../../../../../assets/icons/info-icon.svg";
import { Option } from "../../../CareCordinator/ClientDetails/AllocateNewCareHomeModal";
import Dots from "../../../../../assets/images/OnBoarding/dots.png";
import Delete from "../../../../../assets/images/OnBoarding/Delete.svg";
import Edit from "../../../../../assets/images/OnBoarding/edit.svg";
import View from "../../../../../assets/images/OnBoarding/View.svg";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import TextArea from "antd/es/input/TextArea";
import DateIcon from "../../../../../assets/images/OnBoarding/datePicker.svg";
import "../../../../../shared/DatePickerWrapper/DatePickerWrapper.scss";
import DeleteModal from "../../../../../shared/DeleteModal/DeleteModal";

const WorkExperience = (props: any) => {

  const { handleSelectedStepValue, auditCheck } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const handleDeleteSubmit = () => {
    setIsDeleteModal(false);
  };
  const handleCancelSubmit = () => {
    setIsDeleteModal(false);
  };



  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChange = (checked: boolean) => {
    console.log(checked);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
    // props.onChildStateChange(props.selectedStepValue + 1)
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const items: any = [
    {
      label: (
        <div onClick={() => { }}>
          <Space size={15} onClick={showModal}>
            <img
              src={View}
              alt="Edit"
              className="d-flex align-center"
              width={24}
              height={24}
            />
            <span className="fw-400 fs-14">View </span>
          </Space>
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <Space size={15} onClick={showModal}>
          <img
            src={Edit}
            alt="Delete"
            className="d-flex align-center"
            width={24}
            height={24}
          />
          <span className="fw-400 fs-14">Edit </span>
        </Space>
      ),
      key: "2",
    },
    {
      label: (
        <Space size={15} onClick={() => setIsDeleteModal(true)}>
          <img
            src={Delete}
            alt="Delete"
            className="d-flex align-center"
            width={24}
            height={24}
          />
          <span className="fw-400 fs-14">Delete </span>
        </Space>
      ),
      key: "3",
    },
  ];

  interface IWorkExperience {
    employerName: string;
    Position: string;
    Experience: string;
    startDate: string;
    endDate: string;
    leavingReason: string;
  }

  const WorkExperienceDetails = [
    {
      employerName: "John Snow",
      Position: "Social Carer",
      Experience: "two-year associate practice....",
      startDate: "willing to learn more",
      endDate: "11/02/2004",
      leavingReason: "11/02/2004",
    },
    {
      employerName: "John Snow",
      Position: "Nurse",
      Experience: "Coordinate patient care and....",
      startDate: "found better opportunity",
      endDate: "11/02/2008",
      leavingReason: "11/02/2012",
    },
  ];

  const columns: ColumnsType<IWorkExperience> = [
    {
      title: <span>Name of Employer</span>,
      dataIndex: "employerName",
      key: "employerName",

      render: (_, text) => (
        <span className="fs-14 fw-400 title-color">{text.employerName}</span>
      ),
    },
    {
      title: <span>Position </span>,
      dataIndex: "Position",
      key: "Position",

      render: (_, text) => (
        <Space>
          <span className="fs-14 fw-400 title-color">{text.Position}</span>
        </Space>
      ),
    },
    {
      title: <span>Experience</span>,
      dataIndex: "Experience ",
      key: "Experience",

      render: (_, text) => (
        <div>
          <span className="fs-14 fw-400 title-color">{text.Experience}</span>
        </div>
      ),
    },
    {
      title: "Reason for Leaving",
      dataIndex: "leavingReason",
      key: "leavingReason",

      render: (_, text) => (
        <span className="fs-14 fw-400 title-color">{text.leavingReason}</span>
      ),
    },

    {
      title: <span>Start Date </span>,
      dataIndex: "startDate",
      key: "startDate",

      render: (_, text) => (
        <Space>
          <span className="fs-14 fw-400 title-color">{text.startDate}</span>
        </Space>
      ),
    },
    {
      title: <span>End Date </span>,
      dataIndex: "endDate",
      key: "endDate",

      render: (_, text) => (
        <Space>
          <span className="fs-14 fw-400 title-color">{text.endDate}</span>
        </Space>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",

      render: () => (
        <Dropdown
          menu={{ items }}
          placement="bottomRight"
          trigger={["click"]}
          className="actionDropDown"
          overlayStyle={{ width: "150px" }}
        >
          <div className="border-color cursor-pointer d-flex algin-center  justify-center">
            <img src={Dots} alt="menu" />
          </div>
        </Dropdown>
      ),
    },
  ];

  const config = {
    rules: [
      {
        type: "object" as const,
        required: true,
        message: "Please select time!",
      },
    ],
  };

  return (
    <div>
      <Row gutter={[20, 20]}>
        <Col xs={24}>
          <button className="add-reference-modal-btn cursor-pointer" onClick={showModal}>
            <Space>
              <span className="fw-600 fs-14 title-color">
                Add Work Experience
              </span>
              <img src={AddIcon} alt="AddIcon" className='d-flex align-center' />
            </Space>
          </button>
        </Col>

        <Col xs={24}>
          <Space>
            <div className="tooltip-text">
              <span className="fw-600 fs-20 inner-text">Candidate Reference</span>
              &nbsp;
              <span className="fw-600 fs-14">
                (Framework Ready Reference Multi )
              </span>
            </div>
            <Tooltip
              placement="bottomLeft"
              color="#65CDF0"
              overlayInnerStyle={{
                width: "499px",
              }}
              title="Here you can see the status of all the references. When the system receives references, they will appear here. If the status is still “Awaiting”, please resend the reference request from the previous section."
            >
              <img
                src={infoIcon}
                alt="infoIcon"
                className="d-flex align-center"
              />
            </Tooltip>
          </Space>
        </Col>
        <Col xs={24}>
          <Table
            className='onboading-table-wrapper'
            columns={columns}
            dataSource={WorkExperienceDetails}
            scroll={{ x: "max-content" }}
            pagination={false}
          />
        </Col>

        <Col xs={24} >
          <div >
            <Space className='carer-buttons'>
              {auditCheck && <Tooltip
                autoAdjustOverflow={true}
                showArrow={false}
                placement="bottomLeft" color="#65CDF0"
                title='Click to mark as audit'
              >

                <Button className='edit-module-button  audit-button  align-center d-flex' >Audit</Button>
              </Tooltip>}
              <Button className='edit-module-button bg-orange-color  align-center d-flex '>Save</Button>
              <Button className='edit-module-button   align-center d-flex btn-secondary' onClick={() => handleSelectedStepValue('Specialities')}>Continue</Button>
            </Space>
          </div>
        </Col>
      </Row>
      <Modal
        className="personal-form-wrapper"
        title={
          <span style={{ fontWeight: "500px", fontSize: "20px" }}>
            Add Work Experience
          </span>
        }
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
        footer={false}
        closeIcon={<img src={Close} alt="" />}
      >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          // autoComplete="off"
          layout="vertical"
        >
          <Row gutter={[30, 5]} align="bottom">
            <Col xs={24} sm={24} md={12} lg={12} className="carer-form-input ">
              <Form.Item
                label="Name of Employer"
                name="employerName"
                rules={[{ required: true, message: "Required field" }]}
              >
                <Input placeholder="Type here" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} className="carer-form-input ">
              <Form.Item
                label="Position with the Employer"
                name="employerPosition"
                rules={[{ required: true, message: "Required field" }]}
              >
                <Input placeholder="Type here" />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item label="Experience" name="experience">
                <TextArea rows={4} />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item label="Reason of Leaving" name="reasonOfLeaving">
                <TextArea rows={4} />
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={12} className="date-picker-wrapper">
              <Form.Item
                name="startDate"
                label="Start Date"
                {...config}
                style={{ maxWidth: "100%" }}
              >
                <DatePicker
                  popupClassName="date-picker-content"
                  suffixIcon={<img src={DateIcon} />}
                  clearIcon={false}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} className="date-picker-wrapper">
              <Form.Item
                name="endDate"
                label="End Date"
                {...config}
                style={{ maxWidth: "100%" }}
              >
                <DatePicker
                  popupClassName="date-picker-content"
                  suffixIcon={<img src={DateIcon} />}
                  clearIcon={false}
                />
              </Form.Item>
            </Col>

            <Col xs={24}>

              <Space className='modal-buttons'>
                <button className='modal-button btn-cancel  ' >Cancel</button>
                <button className='modal-button btn-secondary' >Save</button>
              </Space>

            </Col>
          </Row>
        </Form>
      </Modal>

      <DeleteModal
        setDeleteModal={setIsDeleteModal}
        deleteModal={isDeleteModal}
        submitTitle='Cancel'
        cancelTitle='Delete'
        title='Do you want to delete this row'
        onSubmit={handleDeleteSubmit}
        onCancel={handleCancelSubmit}
      />
    </div>
  );
};

export default WorkExperience;
