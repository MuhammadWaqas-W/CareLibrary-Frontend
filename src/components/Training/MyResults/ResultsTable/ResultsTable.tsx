import { Space, Table } from "antd";

import { resultsTableData } from "../../../../mock/TrainingData/ResultsTableData";
import viewIcon from "../../../../assets/icons/training/view.png";
import DisableviewIcon from "../../../../assets/icons/training/disable-view-icon.png";

const ResultsTable = ({ setShowCertificate }: any) => {
  const columns: any = [
    {
      title: "Sr.No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Instructor Name",
      dataIndex: "instructorName",
      key: "instructorName",
    },
    {
      title: "Assessment Date",
      dataIndex: "assessmentDate",
      key: "assessmentDate",
    },
    {
      title: "Grade Achieved",
      dataIndex: "gradeAchieved",
      key: "gradeAchieved",
    },
    {
      title: "Certificate Status",
      dataIndex: "certificateStatus",
      key: "certificateStatus",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "Action",
      key: "action",
      render: ({ certificateStatus }: any) => (
        <span className="fs-12 fw-400 line-height-18 title-color">
          <Space>
            <div
              onClick={() => setShowCertificate(certificateStatus === "Available")}
              className="border-color cursor-pointer"
            >
              {certificateStatus === "Available" ? (
                <img src={viewIcon} alt="viewIcon" />
              ) : (
                <img src={DisableviewIcon} alt="viewIcon" />
              )}
            </div>
          </Space>
        </span>
      ),
    },
  ];
  return (
    <>
      <Table
        columns={columns}
        scroll={{ x: "max-content" }}
        pagination={false}
        dataSource={resultsTableData}
      />
    </>
  );
};

export default ResultsTable;
