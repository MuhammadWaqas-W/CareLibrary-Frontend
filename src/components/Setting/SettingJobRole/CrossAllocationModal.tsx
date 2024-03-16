import {
  Modal,
  Table,
} from "antd";
import { ColumnsType } from "antd/es/table";
import { dataCrossAllocation, DataTypeCrossAllocation } from "../../../mock/SettingJobRole.ts";
import SwitchWrapper from "../../../shared/SwitchWrapper/SwitchWrapper";
import "./SettingJobRole.scss";
// import "../../../../sass/common.scss";

function CrossAllocationModal(props: any) {
  const { showCrossAllocation, setShowCrossAllocation } = props;

  const columns: ColumnsType<DataTypeCrossAllocation> = [
    {
        title: "S.No",
        dataIndex: "Srno",
    },
    {
        title: "Job Roles",
        dataIndex: "JobRoles",
    },
    {
        title: "Enable Cross-Allocation",
        dataIndex: "EnableCrossAllocation",
        render: () => (
          <SwitchWrapper
          name="EnableCrossAllocation"
        />
        ),
    }, 
];

  return (
    <Modal
      title="Cross Allocation"
      open={showCrossAllocation}
      onOk={() => {
        setShowCrossAllocation(false);
      }}
      onCancel={() => {
        setShowCrossAllocation(false);
      }}
      centered
      className="cross-allocation"
      footer={false}
      width="888px"
    >
    <Table scroll={{ x: 768 }} columns={columns} dataSource={dataCrossAllocation} pagination={false} className="common-setting-table"  style={{ marginTop: "20px",marginBottom: "50px" }}/>

    </Modal>

  );
}

export default CrossAllocationModal;
