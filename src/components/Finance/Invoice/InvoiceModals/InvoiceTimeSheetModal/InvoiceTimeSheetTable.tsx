import { Table } from "antd";
import { invoiceTimeSheetTableData } from "../../../../../mock/InvoiceData";

const InvoiceTimeSheetTable = () => {
  const columns = [
    {
      title: "Sr #",
      dataIndex: "srno",
      key: "srno",
    },
    {
      title: "Shift Date",
      dataIndex: "shiftDate",
      key: "shiftDate",
    },
    {
      title: "Shift Day",
      dataIndex: "shiftDay",
      key: "shiftDay",
    },
    {
      title: "Staff Name",
      dataIndex: "staffName",
      key: "staffName",
    },
    {
      title: "Client Name",
      dataIndex: "clientName",
      key: "clientName",
    },
    {
      title: "Shift Type",
      dataIndex: "shiftType",
      key: "shiftType",
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
    },
    {
      title: "Hours",
      dataIndex: "hours",
      key: "hours",
    },
    {
      title: "Client Rate",
      dataIndex: "clientRate",
      key: "clientRate",
    },
    {
      title: "Total Receivable",
      dataIndex: "receiveable",
      key: "receiveable",
    },
  ];
  return <Table scroll={{ x: "max-content" }} pagination={false} dataSource={invoiceTimeSheetTableData} columns={columns} />;
};

export default InvoiceTimeSheetTable;
