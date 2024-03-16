import React, { useEffect, useState } from 'react'

import { Button, Checkbox, Col, DatePicker, Dropdown, MenuProps, message, Row, Select, Switch, Tooltip, UploadProps } from 'antd'
import { Form, Input } from 'antd';
import infoIcon from "../../../../assets/icons/info-icon.svg"
import arrowDown from "../../../../assets/icons/arrow-down-icon.svg"
import DateIcon from "../../../../assets/icons/calender-icon.svg"
import bgUpload from "../../../../assets/images/Webinar/bg-upload.svg"

import uploadCloudIcon from "../../../../assets/icons/AddCourse/upload-cloud.svg"


import './Attendees.scss'
import TextArea from 'antd/es/input/TextArea';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { useLocation } from 'react-router-dom';


const { Option } = Select;

const Attendees = () => {

  const [isViewWebinar, setisViewWebinar] = useState(false)

  const location = useLocation();
  const path = location.pathname;

  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>();

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
  const handelSelectChange = (checkedValues: any) => {
    setCheckedList(checkedValues);
  };

  useEffect(() => {
    if(path === '/webinar/view-webinar'){
      setisViewWebinar(true)
    }else{
      setisViewWebinar(false)
    }
  }, [path])
  
  const items: any = [
    {
      label: (
        <Checkbox.Group
          options={[
            { value: 'Address', label: 'Address' },
            { value: 'City', label: 'City' },
            { value: 'State', label: 'State' },
            { value: 'ZIP/Post Code', label: 'ZIP/Post Code' },
            { value: 'Country/ Region', label: 'Country/ Region' },
            { value: 'Job Title', label: 'Job Title' },
            { value: 'Industry ', label: 'Industry ' },
            { value: 'Organization', label: 'Organization' },
            { value: 'Any other Question', label: 'Any other Question' },
          ]}
          value={checkedList}
          onChange={handelSelectChange}
          className='group-checkbox-style-flex'
        />
      ),
    },
  ];
  const DataDynamicFields = [
    { value: 'Address', label: 'Address' },
    { value: 'City', label: 'City' },
    { value: 'State', label: 'State' },
    { value: 'ZIP/Post Code', label: 'ZIP/Post Code' },
    { value: 'Country/ Region', label: 'Country/ Region' },
    { value: 'Job Title', label: 'Job Title' },
    { value: 'Industry ', label: 'Industry ' },
    { value: 'Organization', label: 'Organization' },
    { value: 'Any other Question', label: 'Any other Question' },
  ]

  return (
    <div className='attendees-wrapper-main'>
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
              label="Require Attendees"
              name="requireAttendees"
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
              label="Webinar Size"
              name="webinarSize"
              rules={[{ required: false, message: 'Required field' }]}
            >
              <Select placeholder="Select an option" onChange={handleChange} suffixIcon={<img src={arrowDown} />} disabled={isViewWebinar}>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24}>
            <div className="d-flex" style={{ gap: '10px' }}><Switch defaultChecked onChange={onChange} disabled={isViewWebinar}/> <span className='fs-14 fw-600'>Registration Form: Want your outsider trainee to register for this webinar?</span></div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24}>
            <div className='fs-14 fw-600' style={{marginTop:"13px", marginBottom:"13px"}}>This is the form your attendees will fill out when they sign up.</div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={10}>
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: false, message: 'Required field' }]}
            >
              <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} disabled={isViewWebinar}/>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={10}>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: false, message: 'Required field' }]}
            >
              <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} disabled={isViewWebinar}/>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={10}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: false, message: 'Required field' }]}
            >
              <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} disabled={isViewWebinar}/>
            </Form.Item>
          </Col>
          {DataDynamicFields.map((item:any, key:any) => (
            <>
              {checkedList?.includes(item.label) && (<Col xs={24} sm={24} md={12} lg={10}>
                <Form.Item
                  label={item.label}
                  name={item.label}
                  rules={[{ required: false, message: 'Required field' }]}
                >
                  <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} />
                </Form.Item>
              </Col>)}
            </>
          ))}
          <Col xs={24} sm={24} md={24} lg={24}>
            <div className="wrapper-cus-dropdown">
              <Dropdown 
              disabled={isViewWebinar}
                menu={{ items }}
                placement="bottomRight"
                trigger={["click"]}
                className="action-drop-down"
              >
                <div className='fw-600 fs-14' style={{color:'#65CDF0'}}>+ Add more Fields</div>
              </Dropdown>
            </div>
          </Col>
          
          <Col xs={24} sm={24} md={24} lg={24}>
            <div className="d-flex" style={{ gap: '10px', marginTop:"10px" }}><Switch defaultChecked onChange={onChange} disabled={isViewWebinar}/> <span className='fs-14 fw-600'>Send Reminder Notification to all Attendees </span></div>
            <div className="d-flex" style={{ gap: '10px', marginTop:"20px" }}><Switch defaultChecked onChange={onChange} disabled={isViewWebinar}/> <span className='fs-14 fw-600'>Send Thankyou email to attendees after event has ended</span></div>
          </Col>
        </Row>
        {!isViewWebinar && <Button className='save-and-next-button fs-16 fw-600'>Schedule</Button>}
      </Form>
    </div>
  )
}

export default Attendees