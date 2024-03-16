import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { ReferenceDetails } from '../../../../mock/OnBoarding';



interface IReferenceDetails {
  type: string,
  name: string,
  contactNo: string,
  email: string,
  status: string,
  refViewed: string,
  refComplete: string
}



const Refrences = () => {
  const columns: ColumnsType<IReferenceDetails> = [
    {
      title: <span className='fw-600 fs-14'>Reference Type </span>,
      dataIndex: 'type',
      key: 'type',
      width: 100,
      render: (_, text) =>

        <span className='fs-14 fw-400 title-color'>
          {text.type}
        </span>

    },
    {
      title: <span className='fw-600 fs-14'>Full name of the referee</span>,
      dataIndex: 'name',
      key: 'name',
      width: 150,
      render: (_, text) =>

        <span className='fs-14 fw-400 title-color'>
          {text.name}
        </span>

    },
    {
      title: <span className='fw-600 fs-14'>Contact No.of the referee</span>,
      dataIndex: 'contactNo',
      key: 'contactNo',
      width: 160,

      render: (_, text) =>
        <span className='fs-14 fw-400 title-color'>
          {text.contactNo}
        </span>

    },
    {
      title: <span className='fw-600 fs-14'>Email ID of the referee</span>,
      dataIndex: 'email',
      key: 'email',
      width: 160,

      render: (_, text) =>
        <span className='fs-14 fw-400 title-color'>
          {text.email}
        </span>

    },
    {
      title: <span className='fw-600 fs-14'>Approval Status</span>,
      dataIndex: 'status',
      key: 'status',
      width: 100,

      render: (_, text) =>
        <span className='fs-14 fw-400 title-color'>
          {text.status}
        </span>

    },

    {
      title: <span className='fw-600 fs-14' >Ref.viewed on</span>,
      dataIndex: 'status',
      key: 'status',
      width: 100,

      render: (_, text) =>
        <span className='fs-14 fw-400 title-color'>
          {text.refViewed}
        </span>

    },
    {
      title: <span className='fw-600 fs-14'>Ref. completed on</span>,
      dataIndex: 'complete',
      key: 'complete',
      width: 140,

      render: (_, text) =>
        <span className='fs-14 fw-400 title-color'>
          {text.refComplete}
        </span>

    },

  ];
  return (
    <div>
      <p className='fw-500 fs-20'>Refrences</p>
<div className='onboading-table-wrapper'>
  
      <Table  columns={columns} dataSource={ReferenceDetails} scroll={{ x: "max-content" }} pagination={false} />
</div>
    </div>
  )
}

export default Refrences