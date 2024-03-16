import { Button, Col, Form, Input, Row } from 'antd'
import React, { useState } from 'react'
import "./PlanYourCourse.scss"

import deleteIcon from "../../../../assets/icons/delete-icon.svg"

const PlanYourCourse = ({ handleTabsValueChange }: any) => {

  const [fieldsSectionOne, setFieldsSectionOne] = useState([{ value: '' }, { value: '' }]);
  const [fieldsSectionTwo, setFieldsSectionTwo] = useState([{ value: '' }]);
  const [fieldsSectionThree, setFieldsSectionThree] = useState([{ value: '' }]);

  const onFinish = (values: any) => {
    console.log('Success:', values);
    // props.handleChildStateChange('2')
    // console.log("tabsValue", props.tabsValue)
    handleTabsValueChange('2');
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  // section one func 
  const addFieldSectionOne = () => {
    const newFieldsSectionOne = [...fieldsSectionOne, { value: '' }];
    setFieldsSectionOne(newFieldsSectionOne);
  };
  const removeFieldSectionOne = (index: any) => {
    const newFieldsSectionOne = [...fieldsSectionOne];
    newFieldsSectionOne.splice(index, 1);
    setFieldsSectionOne(newFieldsSectionOne);
  };
  const handleFieldChangeSectionOne = (indexOne: any, eventOne: any) => {
    const newFieldsSectionOne = [...fieldsSectionOne];
    newFieldsSectionOne[indexOne].value = eventOne.target.value;
    setFieldsSectionOne(newFieldsSectionOne);
  };

  // section Two func 
  const addFieldSectionTwo = () => {
    const newFieldsSectionTwo = [...fieldsSectionTwo, { value: '' }];
    setFieldsSectionTwo(newFieldsSectionTwo);
  };
  const removeFieldSectionTwo = (index: any) => {
    const newFieldsSectionTwo = [...fieldsSectionTwo];
    newFieldsSectionTwo.splice(index, 1);
    setFieldsSectionTwo(newFieldsSectionTwo);
  };
  const handleFieldChangeSectionTwo = (indexTwo: any, eventTwo: any) => {
    const newFieldsSectionTwo = [...fieldsSectionTwo];
    newFieldsSectionTwo[indexTwo].value = eventTwo.target.value;
    setFieldsSectionTwo(newFieldsSectionTwo);
  };

  // section Three func 
  const addFieldSectionThree = () => {
    const newFieldsSectionThree = [...fieldsSectionThree, { value: '' }];
    setFieldsSectionThree(newFieldsSectionThree);
  };
  const removeFieldSectionThree = (index: any) => {
    const newFieldsSectionThree = [...fieldsSectionThree];
    newFieldsSectionThree.splice(index, 1);
    setFieldsSectionThree(newFieldsSectionThree);
  };
  const handleFieldChangeSectionThree = (indexThree: any, eventThree: any) => {
    const newFieldsSectionThree = [...fieldsSectionThree];
    newFieldsSectionThree[indexThree].value = eventThree.target.value;
    setFieldsSectionThree(newFieldsSectionThree);
  };



  return (
    <div className='wrapper-plan-your-course'>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        <div className='form--head fs-14 fw-600'>What will students learn in your course?</div>
        <Row gutter={[30, 0]} align="bottom">
          {fieldsSectionOne.map((fieldOne, indexOne) => (
            <Col xs={24} sm={24} md={12} lg={10} key={indexOne}>
              <Form.Item
                // label={indexOne + 1 + "."}
                name={indexOne + 1}
                rules={[{ required: false, message: 'Required field' }]}
              >
                <div className="d-flex" style={{ gap: "10px" }}>
                  <Input placeholder="Type here" value={fieldOne.value} onChange={(eventOne) => handleFieldChangeSectionOne(indexOne, eventOne)} style={{ width: '100%', height: '45px' }}
                    suffix={indexOne > 1 && <div className='delete-button'>
                      <img className='cursor-pointer' src={deleteIcon} alt="" onClick={() => removeFieldSectionOne(indexOne)} />
                    </div>}
                  />
                </div>
              </Form.Item>
            </Col>
          ))}
          <Col xs={24} sm={24} md={24} lg={24}>
            <button type="button" className='add-more-fields fs-14 fw-600 cursor-pointer' onClick={addFieldSectionOne}>+ Add more to your response</button>
          </Col>
        </Row>
        <div className='form--head fs-14 fw-600'>What are the requirements or prerequisites for taking your course?</div>
        <Row gutter={[30, 0]} align="bottom">
          {fieldsSectionTwo.map((fieldTwo, indexTwo) => (
            <Col xs={24} sm={24} md={12} lg={10} key={indexTwo}>
              <Form.Item
                // name={indexTwo}
                rules={[{ required: false, message: 'Required field' }]}
              >
                <div className="d-flex" style={{ gap: "10px" }}>
                  <Input placeholder="Type here" value={fieldTwo.value} onChange={(eventTwo) => handleFieldChangeSectionTwo(indexTwo, eventTwo)} style={{ width: '100%', height: '45px' }} 
                  suffix={indexTwo > 1 && <div className='delete-button'>
                  <img className='cursor-pointer' src={deleteIcon} alt="" onClick={() => removeFieldSectionTwo(indexTwo)} />
                </div>}
                />
                </div>
              </Form.Item>
            </Col>
          ))}
          <Col xs={24} sm={24} md={24} lg={24}>
            <button type="button" className='add-more-fields fs-14 fw-600 cursor-pointer' onClick={addFieldSectionTwo}>+ Add more to your response</button>
          </Col>
        </Row>

        <div className='form--head fs-14 fw-600'>Who is this course for?</div>
        <Row gutter={[30, 0]} align="bottom">
          {fieldsSectionThree.map((fieldThree, indexThree) => (
            <Col xs={24} sm={24} md={12} lg={10} key={indexThree}>
              <Form.Item
                // name={indexThree}
                rules={[{ required: false, message: 'Required field' }]}
              >
                <div className="d-flex" style={{ gap: "10px" }}>
                  <Input placeholder="Type here" value={fieldThree.value} onChange={(eventThree) => handleFieldChangeSectionThree(indexThree, eventThree)} style={{ width: '100%', height: '45px' }} 
                   suffix={indexThree > 1 && <div className='delete-button'>
                   <img className='cursor-pointer' src={deleteIcon} alt="" onClick={() => removeFieldSectionThree(indexThree)} />
                 </div>}
                 />
                </div>
              </Form.Item>
            </Col>
          ))}
          <Col xs={24} sm={24} md={24} lg={24}>
            <button type="button" className='add-more-fields fs-14 fw-600 cursor-pointer' onClick={addFieldSectionThree}>+ Add more to your response</button>
          </Col>
        </Row>
        <Button className='save-and-next-btn fs-16 fw-600' htmlType='submit' >Save & Next</Button>
      </Form>
    </div>
  )
}

export default PlanYourCourse