
// Ant Components
import { Card, Col, Row } from 'antd'
import type { ColumnsType } from 'antd/es/table';
import CommonReportChildFilters from '../Reports/CommonReportChildFilters/CommonReportChildFilters';
import { Link } from 'react-router-dom';
import "../../sass/common.scss"
import { apiInventoryFilters, ApiInventoryTableMockData } from '../../mock/ApiInventory';
import ApiInventoryTable from './ApiInventoryTable';


// Api Inventory Table Columns
const ApiInventoryTableHeader: ColumnsType<any> = [
  {
    title: 'Sr #',
    dataIndex: 'id',
    key: 'id',
    render: (id: any) =>
      <span className='fs-14 fw-400 m-0 line-height-22' style={{color:"#4E4B66"}}>{id}</span>,
  },
  {
    title: 'API Name',
    dataIndex: 'apiName',
    key: 'apiName',
    align: "center",
    render: (apiName: any) =>
      <span className='fs-14 fw-400 m-0 line-height-22' style={{color:"#4E4B66"}}>{apiName}</span>,
  },
  {
    title: 'API Key',
    dataIndex: 'apiKey',
    key: 'apiKey',
    align: "center",
    render: (apiKey: any) =>
      <span className='fs-14 fw-400 m-0 line-height-22' style={{color:"#4E4B66"}}>{apiKey}</span>,
  },
  {
    title: 'Expiry Date',
    dataIndex: 'expiryDate',
    key: 'expiryDate',
    align: "center",
    render: (expiryDate: any) =>
      <span className='fs-14 fw-400 m-0 line-height-22' style={{color:"#4E4B66"}}>{expiryDate}</span>,
  },
  {
    title: 'API Link',
    dataIndex: 'apiName',
    key: 'apiName',
    align: "center",
    render: (apiName: string, record: any) => (
        <Link to={record.apiLink} className='fs-14 fw-400 m-0 line-height-22 ' style={{textDecoration:"underLine",color:"#4E4B66"}}>{apiName}</Link>
      ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: any) => (
      <span className='fs-14 fw-400 m-0 line-height-22' style={{color:"#4E4B66"}}>{status}</span>
    ),
    align: "center",
  },
  {
    title: 'Hits per minute',
    dataIndex: 'hitsPerMinute',
    key: 'hitsPerMinute',
    render: (hitsPerMinute: any) => (
      <span className='fs-14 fw-400 m-0 line-height-22' style={{color:"#4E4B66"}}>{hitsPerMinute}</span>
    ),
    align: "center",
  },
  {
    title: 'Average Response Time',
    dataIndex: 'averageResponseTime',
    key: 'averageResponseTime',
    render: (averageResponseTime: any) => (
      <span className='fs-14 fw-400 m-0 line-height-22' style={{color:"#4E4B66"}}>{averageResponseTime}</span>
    ),
    align: "center",
  },
];


const ApiInventory = () => {
  return (
    <div className='reports-child-wrapper-class'>
      <Row gutter={[20, 20]}>
        <Col xs={24}>
       <Card className='border-radius-8' style={{boxShadow:"0px 12px 23px rgba(62, 73, 84, 0.04)",border: "1px solid #D9DBE9"}}>
       <CommonReportChildFilters filtersArray={apiInventoryFilters} />
       </Card>
        </Col>
        <Col xs={24}>
          <ApiInventoryTable tableHeader={ApiInventoryTableHeader} tableData={ApiInventoryTableMockData} />
        </Col>
      </Row>
    </div>
  )
}

export default ApiInventory