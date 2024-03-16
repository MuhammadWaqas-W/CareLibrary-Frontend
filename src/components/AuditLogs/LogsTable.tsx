import { Input, Select, Space, Table } from "antd";
import Search from "../../assets/images/OnBoarding/Search.svg";
import { LogsData, ColumnsData } from "../../mock/AuditLogsMock";
import coloredCopyIcon from "../../assets/icons/Report/colored-copy.png";
import coloredCsvIcon from "../../assets/icons/Report/colored-csv.png";
import coloredXlsIcon from "../../assets/icons/Report/colored-xls.png";
import LogsSelection from "./LogsSelection";
import "./AuditLogs.scss";

const LogsTable = () => {
  return (
    <div className="audit-logs-wrapper">
      <LogsSelection />
      <div className="searchbox">
        <div className="selector">
          <div>
            <Select
              labelInValue
              defaultValue={{ value: "lucy", label: "100" }}
              style={{ width: 120 }}
              options={[
                {
                  value: "101",
                  label: "101",
                },
                {
                  value: "102",
                  label: "102",
                },
              ]}
            />
          </div>
          <div className="search-download-section">
            <div className="input-search-wrapper">
              <Input
                placeholder="search"
                prefix={<img src={Search} alt="search icon" className="icon" />}
              />
            </div>
            <Space size={[25, 0]} className="download-icons">
              <img src={coloredCopyIcon} alt="csv" className="img-hover" />
              <img src={coloredCsvIcon} alt="csv" className="img-hover" />
              <img src={coloredXlsIcon} alt="csv" className="img-hover" />
            </Space>
          </div>
        </div>
        <Table
          columns={ColumnsData}
          dataSource={LogsData}
          pagination={false}
          scroll={{ x: "max-content" }}
        />
      </div>{" "}
    </div>
  );
};

export default LogsTable;
