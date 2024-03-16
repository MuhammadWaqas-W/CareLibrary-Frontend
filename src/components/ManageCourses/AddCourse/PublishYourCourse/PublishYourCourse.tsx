import { Button, Col, Form, Input, Row, Select } from 'antd';
import React, { useState } from 'react'
import "./PublishYourCourse.scss"
import arrowDown from "../../../../assets/icons/arrow-down-icon.svg"
import TextArea from 'antd/es/input/TextArea';

import uploadIcon from '../../../../assets/icons/AddCourse/upload-icon.svg'


const { Option } = Select;

const PublishYourCourse = () => {

  const [uploadadImage, setUploadadImage] = useState<any>('');
  const [imageName, setImageName] = useState<any>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [videoURL, setVideoURL] = useState<string>('');


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



  const handleImageChange = (e: any) => {
    const selectedImage = e.target.files[0];
    setImageName(selectedImage.name);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUploadadImage(reader.result);
      }
    };
    reader.readAsDataURL(selectedImage);
  };




  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedFile(file || null);
    setVideoURL(file ? URL.createObjectURL(file) : '');
  };


  return (
    <div className='publish-your-couese-main-wrapper'>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        // autoComplete="off"
        layout="vertical"
      >
        <Row gutter={[30, 5]} align="bottom">

          <Col xs={24} sm={24} md={12} lg={10}>
            <Form.Item
              label="Course Title"
              name="courseTitle"
              rules={[{ required: false, message: 'Required field' }]}
            >
              <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={10}>
            <Form.Item
              label="Course Duration"
              name="courseDuration"
              rules={[{ required: false, message: 'Required field' }]}
            >
              <Select placeholder="Select Level" onChange={handleChange} suffixIcon={<img src={arrowDown} />}>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={20} lg={20}>
            <Form.Item
              label="Course Description"
              name="courseDescription"
              rules={[{ required: false, message: 'Required field' }]}
            >
              <TextArea rows={4} placeholder="Type Here" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={10}>
            <Form.Item
              label="Language"
              name="language"
              rules={[{ required: false, message: 'Required field' }]}
            >
              <Select placeholder="Select Level" onChange={handleChange} suffixIcon={<img src={arrowDown} />}>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={10}>
            <Form.Item
              label="Course Type"
              name="courseType"
              rules={[{ required: false, message: 'Required field' }]}
            >
              <Select placeholder="Select Level" onChange={handleChange} suffixIcon={<img src={arrowDown} />}>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={10}>
            <Form.Item
              label="Category (Role)"
              name="categoryRole"
              rules={[{ required: false, message: 'Required field' }]}
            >
              <Select placeholder="Select Level" onChange={handleChange} suffixIcon={<img src={arrowDown} />}>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={10}>
            <Form.Item
              label="Validity"
              name="validity"
              rules={[{ required: false, message: 'Required field' }]}
            >
              <Select placeholder="Select Level" onChange={handleChange} suffixIcon={<img src={arrowDown} />}>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={10}>
            {/* <Input ></Input> */}
            <Form.Item
              label="Course Image"
              name="courseImage"
              rules={[{ required: false, message: 'Required field' }]}
            >
              <div className='upload-file-area'>
                <input type="file" accept="image/*" name="" onChange={handleImageChange} id="" />
                <img className='upload-doc-icon cursor-pointer' src={uploadIcon} alt="" />
                <p className='file-title-display'>{imageName ? imageName : <span style={{ color: "#888888" }}>File Name</span>}</p>
              </div>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={10}>
            <Form.Item
              label="Promotional Video"
              name="promotionalVideo"
              rules={[{ required: false, message: 'Required field' }]}
            >
              <div className='upload-file-area'>
                <input type="file" accept="video/*" onChange={handleFileChange} id="" />
                <img className='upload-doc-icon cursor-pointer' src={uploadIcon} alt="" />
                <p className='file-title-display'>{selectedFile?.name ? selectedFile?.name : <span style={{ color: "#888888" }}>File Name</span>}</p>
              </div>
            </Form.Item>
          </Col>


          <Col xs={24} sm={24} md={12} lg={10}>
            <div className='uploaded-image d-flex justify-center align-center'>
              {uploadadImage ? (
                <img src={uploadadImage} alt="preview" className='uploaded-image-preview' />
              ) : (
                <span className='fs-14 fw-600'>Preview</span>
              )}
              {/* <p>{imageName}</p> */}
            </div>
          </Col>

          <Col xs={24} sm={24} md={12} lg={10}>
            <div className='uploaded-image d-flex justify-center align-center'>
              {selectedFile ? (
                <video width="100%" height="100%" controls>
                  <source src={videoURL} type="video/mp4" />
                </video>
              ) : (
                <span className='fs-14 fw-600'>Preview</span>
              )}
            </div>
          </Col>
        </Row>
        <Button className='save-and-next-btn fs-16 fw-600' htmlType='submit' style={{marginTop:"30px"}}>Submit</Button>
      </Form>
    </div>
  )
}

export default PublishYourCourse