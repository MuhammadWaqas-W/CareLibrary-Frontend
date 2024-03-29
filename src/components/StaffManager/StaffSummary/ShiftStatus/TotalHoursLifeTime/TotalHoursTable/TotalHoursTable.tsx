import React from 'react'
import Table, { ColumnsType } from 'antd/es/table';
import { data, DataType } from '../../../../../../mock/SettingJobRole.ts';
import { totalHoursTableData } from '../../../../../../mock/StaffManagerMock';
import './TotalHoursTable.scss';

const columns = [
  {
    title: 'S.No',
    dataIndex: 'sno',
    key: 'sno',
  },
  {
    title: 'Shift Name',
    dataIndex: 'shiftName',
    key: 'shiftName',
  },
  {
    title: 'Client Name ',
    dataIndex: 'clientName',
    key: 'clientName',
  },
  {
    title: 'Shift Date',
    dataIndex: 'shiftDate',
    key: 'shiftDate',
  },
  {
    title: 'Shift Hours ',
    dataIndex: 'shiftHours',
    key: 'shiftHours',
  },
  {
    title: 'Shift Rate ( £ ) ',
    dataIndex: 'shiftRate',
    key: 'shiftRate',
  },
  {
    title: 'Shift Amount ',
    dataIndex: 'shiftAmount',
    key: 'shiftAmount',
  },
  {
    title: 'Invoice Number ',
    dataIndex: 'invoiceNumber',
    key: 'invoiceNumber',
  },
  {
    title: 'Shift Status ',
    dataIndex: 'shiftStatus',
    key: 'shiftStatus',
  },
  {
    title: 'Payment Status ',
    dataIndex: 'paymentStatus',
    key: 'paymentStatus',
  },
  {
    title: 'Payment Date ',
    dataIndex: 'paymentDate',
    key: 'paymentDate',
  },
];

const TotalHoursTable = () => <div className='total-hours-table'>
  <Table columns={columns} dataSource={totalHoursTableData} pagination={false} className="total-table-content" scroll={{ x: "max-content" }} />
</div>
export default TotalHoursTable