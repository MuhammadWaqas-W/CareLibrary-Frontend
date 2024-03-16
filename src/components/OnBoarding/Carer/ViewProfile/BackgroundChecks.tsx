import { Col, Divider, Row, Space } from 'antd'
import { DbsDetails, RightToWork } from '../../../../mock/OnBoarding'


const BackgroundChecks = () => {
  return (
    <div>
      <p className='fw-500 fs-20'>DBS</p>


      <Row gutter={[20, 12]}>
        {
          DbsDetails.map((item) =>
            <Col xs={12}>
              <Space direction='vertical' size={0}>
                <span className='fw-600 fs-12'>
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

      </Row>

      <Divider style={{ borderColor: "#D9DBE9" }} dashed />
      <p className='fw-500 fs-20'>Right to Work</p>



      <Row gutter={[20, 12]}>
        {
          RightToWork.map((item) =>
            <Col xs={12}>
              <Space direction='vertical' size={0}>
                <span className='fw-600 fs-12'>
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

      </Row>
    </div>
  )
}

export default BackgroundChecks