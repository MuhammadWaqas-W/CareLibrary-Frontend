import { Col, Divider, Row, Space } from 'antd'
import React from 'react'
import Pdf from '../../../../assets/images/OnBoarding/pdf.svg';
import Word from '../../../../assets/images/OnBoarding/word.svg';
import Excel from '../../../../assets/images/OnBoarding/excel.svg';
import { AddressDetails, ProfileDetails } from '../../../../mock/OnBoarding';

const About = () => {


  return (
    <div>
      <p className='fw-500 fs-20'> About</p>
      <Row gutter={[20, 12]}>
        {
          ProfileDetails.map((item, index) =>
            <Col xs={index % 2 === 0 ? 14 : 8}>
              <Space direction='vertical' size={0}>
                <span className='fw-600 fs-12'>
                  {item.title}
                </span>
                <span className='fw-400 fs-12'>
                  {item.detail}
                </span>
              </Space>
            </Col>
          )
        }

      </Row>

      <Divider style={{ borderColor: "#D9DBE9" }} dashed />

      <p className='fw-500 fs-20'> Address Detail</p>
      <Row gutter={[20, 12]}>
        {
          AddressDetails.map((item, index) =>
            <Col xs={index % 2 === 0 ? 14 : 8}>
              <Space direction='vertical' size={0}>
                <span className='fw-600 fs-12'>
                  {item.title}
                </span>
                <span className='fw-400 fs-12'>
                  {item.detail}
                </span>
              </Space>
            </Col>
          )
        }

      </Row>
      <Row gutter={[10, 10]}>
        <Col xs={24} style={{marginTop:'10px'}}>
          <span className='fw-600 fs-12'>How long the candidate lived in this address?</span>
        </Col>
        <Col xs={24} >
          <Space direction='vertical' size={0}>
            <span className='fw-600 fs-12'> Date</span>
            <span className='fw-400 fs-12'> Emily Smith</span>

          </Space>
        </Col>
        <Col xs={24}>
          <span className='fw-600 fs-12'> Document</span>
        </Col>
        <Col md={8} xs={24} className='d-flex justify-between align-center '>
          <Space size={3} > <span className='d-flex align-center'><img src={Pdf} alt="image" /></span> <span >doc.pdf</span></Space>
          <Space size={3}>  <img src={Word} alt="image" className='d-flex align-center' /> <span>wrd.doc</span></Space>
          <Space size={3}> <img src={Excel} alt="image" className='d-flex align-center' /> <span>xsl.excel</span></Space>
        </Col>
      </Row>

      <Divider style={{ borderColor: "#D9DBE9" }} dashed />

      <p className='fw-500 fs-20'> ID Upload (Passport/DL)</p>

      <div>
        <Space size={3} direction='vertical'>
          <span className='fw-600 fs-12'>ID Proof Upload</span>
          <Space size={3} className='d-flex align-center'> <span className='d-flex align-center'><img src={Pdf} alt="" /></span> <span className='fw-400 fs-12' >doc.pdf</span></Space>
        </Space>
      </div>



    </div >
  )
}

export default About