import { Col, Divider, Row, Space } from 'antd';
import React from 'react';
import Pdf from '../../../../assets/images/OnBoarding/pdf.svg';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { OtherInformationDetails, UserInformation } from '../../../../mock/OnBoarding';

interface IUserInfo {
  name: string,
  bank: string,
  code: string,
  account: string,
  type: string,
  image: string

}




const columns: ColumnsType<IUserInfo> = [
  {
    title: <span className='fw-600 fs-14'>Account User Name </span>,
    dataIndex: 'name',
    key: 'name',
    width: 160,
    render: (_, text) =>

      <span className='fs-14 fw-400 title-color'>
        {text.name}
      </span>

  },
  {
    title: <span className='fw-600 fs-14'>Name of Bank</span>,
    dataIndex: 'bank',
    key: 'bank',
    width: 150,
    render: (_, text) =>

      <span className='fs-14 fw-400 title-color'>
        {text.bank}
      </span>

  },
  {
    title: <span className='fw-600 fs-14'>Sort Code</span>,
    dataIndex: 'code',
    key: 'code',
    width: 160,

    render: (_, text) =>
      <span className='fs-14 fw-400 title-color'>
        {text.code}
      </span>

  },
  {
    title: <span className='fw-600 fs-14'>Account Number</span>,
    dataIndex: 'account',
    key: 'account',
    width: 160,

    render: (_, text) =>
      <span className='fs-14 fw-400 title-color'>
        {text.account}
      </span>

  },
  {
    title: <span className='fw-600 fs-14'>Account Type</span>,
    dataIndex: 'status',
    key: 'status',
    width: 140,

    render: (_, text) =>
      <span className='fs-14 fw-400 title-color'>
        {text.type}
      </span>

  },

  {
    title: <span className='fw-600 fs-14' >Attachments</span>,
    dataIndex: 'status',
    key: 'status',
    width: 100,

    render: (_, text) =>
      <span className='fs-14 fw-400 title-color'>
        <img src={text.image} alt="image" />
      </span>

  },


];







const OtherInformation = () => {
  return (
    <div>
      <p className='fw-500 fs-20'> Employment Status</p>

      <Row gutter={[20, 12]}>
        {OtherInformationDetails.map((item, index) =>
          <Col xs={index % 2 === 0 ? 16 : 8}>
            <Space direction='vertical' size={0}>
              <span className='fw-600 fs-14'>
                {item.title}
              </span>
              <Space size={6}>

                {item.image && <span className='d-flex align-center'> <img src={item.image} alt='pdf' /></span>}
                <span className='fw-400 fs-12'> {item.detail}</span>
              </Space>
            </Space>
          </Col>
        )
        }


        <Col xs={24}>
          <Space direction='vertical' size={6}>
            <span className='fw-600 fs-14'>Are you  repaying your student loan directly to the student loan company? </span>
            <span className='fw-400 fs-14'> No</span>

          </Space>
        </Col>

        <Col xs={24}>
          <Space direction='vertical' size={6}>
            <span className='fw-600 fs-14'>Do you have a post graduate loan which is fully repaid?</span>
            <span className='fw-400 fs-14'> No</span>

          </Space>
        </Col>

      </Row>


      <Divider dashed />
      <p className='fw-500 fs-20'>Additional Docs</p>
      <Row gutter={[20, 12]} >


        <Col xs={16}>  <Space direction='vertical' size={2}>
          <span className='fw-600 fs-14'> Document Name</span>
          <span className='fw 400 fs-14'> care library</span>
        </Space></Col>
        <Col xs={8}>  <Space direction='vertical' size={2}>
          <span className='fw-600 fs-14'> Document</span>
          <Space size={6}>

            <span className='d-flex align-center'> <img src={Pdf} alt='pdf' /></span>
            <span className='fw-400 fs-12'> doc.pdf</span>
          </Space>
        </Space>
        </Col>

      </Row>

      <Divider dashed />
      <p className='fw-500 fs-20'>Bank Details</p>
      <div className='onboading-table-wrapper'>

        <Table columns={columns} dataSource={UserInformation} scroll={{ x: "max-content" }} pagination={false} />
      </div>




    </div>
  )
}

export default OtherInformation