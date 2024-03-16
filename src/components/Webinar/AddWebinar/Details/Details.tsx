import React, { useEffect, useState } from 'react'

import { Button, Checkbox, Col, DatePicker, message, Row, Select, Switch, Tooltip, UploadProps } from 'antd'
import { Form, Input } from 'antd';
import infoIcon from "../../../../assets/icons/info-icon.svg"
import arrowDown from "../../../../assets/icons/arrow-down-icon.svg"
import DateIcon from "../../../../assets/icons/calender-icon.svg"
import bgUpload from "../../../../assets/images/Webinar/bg-upload.svg"

import uploadCloudIcon from "../../../../assets/icons/AddCourse/upload-cloud.svg"

import './Details.scss'
import TextArea from 'antd/es/input/TextArea';
import Dragger from 'antd/es/upload/Dragger';
import { useLocation } from 'react-router-dom';

const { Option } = Select;

const Details = () => {

  const [isViewWebinar, setisViewWebinar] = useState(false)

  const location = useLocation();
  const path = location.pathname;

  console.log('path', path)

  

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  }
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const options = [
    { label: 'Q&A : Participant Questions ', value: 'Q&A : Participant Questions ' },
    { label: 'Webinar : Presentation Mode', value: 'Webinar : Presentation Mode' },
  ];

  useEffect(() => {
    if(path === '/webinar/view-webinar'){
      setisViewWebinar(true)
    }else{
      setisViewWebinar(false)
    }
  }, [path])
  

  return (
    <div className='details-wrapper-main'>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        // autoComplete="off"
        layout="vertical"
      >
        <Row gutter={[150, 5]} align="bottom">
          <Col xs={24} sm={24} md={12} lg={10}>
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: false, message: 'Required field' }]}
            >
              <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} disabled={isViewWebinar}/>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={10}>
            <Form.Item
              label="Date"
              name="date"
              rules={[{ required: false, message: 'Required field' }]}
              
            >
              <DatePicker style={{ width: '100%', height: '45px' }} placeholder='dd/mm/yyyy' suffixIcon={<img src={DateIcon} alt=""  />} disabled={isViewWebinar} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={10}>
            <Form.Item
              label="Time"
              name="time"
              rules={[{ required: false, message: 'Required field' }]}
            >
              <Select placeholder="Select an option" onChange={handleChange} suffixIcon={<img src={arrowDown}/>} disabled={isViewWebinar}>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={10}>
            <Form.Item
              label="Duration"
              name="duration?"
              rules={[{ required: false, message: 'Required field' }]}
            >
              <Select placeholder="Select an option" onChange={handleChange} suffixIcon={<img src={arrowDown} />} disabled={isViewWebinar}>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={10}>
            <Form.Item
              label="Time Zone"
              name="timeZone"
              rules={[{ required: false, message: 'Required field' }]}
            >
              <Select placeholder="Select an option" onChange={handleChange} suffixIcon={<img src={arrowDown} />} disabled={isViewWebinar}>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={10}>
            <Form.Item
              label="Venue"
              name="Venue"
              rules={[{ required: false, message: 'Required field' }]}
            >
              <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} disabled={isViewWebinar}/>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={10}>
            <Form.Item
              label="Webinar Agenda"
              name="webinarAgenda"
              rules={[{ required: false, message: 'Required field' }]}
            >
              <TextArea rows={4} disabled={isViewWebinar} placeholder='Type here'/>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={10}>
            <Form.Item
              label="Audio mode"
              name="audiomode "
              rules={[{ required: false, message: 'Required field' }]}
            >
              <div className="wrp-checkbox-grp">
                <Checkbox.Group className='cus-checkbox-group' options={options} disabled={isViewWebinar}/>
              </div>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={24} lg={20}>
            <div className="upload-content-wrapper">
              <img src={bgUpload} className='upload-image' alt="" />
              <Dragger {...props} className="upload-box" disabled={isViewWebinar}>
                <p className="ant-upload-drag-icon">
                  <img src={uploadCloudIcon} alt="" />
                </p>
                <p className="fs-14 fw-600">Drag and drop, or <span style={{ color: '#65CDF0' }}>Browse</span> your file</p>
              </Dragger>
            </div>
          </Col>
        </Row>
        {!isViewWebinar && <Button className='save-and-next-button fs-16 fw-600'>Save & Next</Button>}
      </Form>
    </div>
  )
}

const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: '',
  onChange(info) {
    const { status }: any = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
      console.log("Get File Info", info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
      console.log("name=>", info.file.name)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

export default Details