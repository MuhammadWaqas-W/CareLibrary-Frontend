import { Col, Layout, Row } from "antd";
import { ClientCard } from "./RecruitmentDetails/ClientCard/ClientCard";
import { StaffCard } from "./RecruitmentDetails/StaffCard/StaffCard";
import { RecruitmentCard } from "./RecruitmentDetails/RecruitmentCard/RecruitmentCard";
import { TopCandidates } from "./ComprehensionCandidates/TopCandidates/TopCandidates";
import { StaffBirthDay } from "./StaffBirthDay/BirthDay/BirthDay";
import { ShiftComprehension } from "./ComprehensionCandidates/ShiftComprehension/ShiftComprehension";
import { ShiftsCard } from "./ShiftsInvoiceSheet/ShiftsCard/ShiftsCard";
import { InvoiceCard } from "./ShiftsInvoiceSheet/InvoiceCard/InvoiceCard";
import { TimeSheetCard } from "./ShiftsInvoiceSheet/TimeSheetCard/TimeSheetCard";
import { StaffStatusCard } from "./StaffBirthDay/StaffStatusCard/StaffCard";
import { v4 as uuidv4 } from "uuid";
import "../../sass/common.scss";

const DashboardAdmin = () => {

  const shiftInvoiceTimeSheet = ["Shifts", "Invoice", "TimeSheet"]
  const recruitmentStaffClientCard = ["Recruitment", "Staff", "Client"]
  const comprehensionCandidates = ["shiftComprehension", "topCandidates"]
  const birthDayStaffStatus = ["BirthDay", "staffStatus"]

  const renderSelectedShiftInvoiceTimeSheetCard = (item: string) => {
    if (item === "Shifts") { return <ShiftsCard />; }
    else if (item === "Invoice") { return <InvoiceCard />; }
    else if (item === "TimeSheet") { return <TimeSheetCard />; }
  }

  const renderRecruitmentStaffClientCard = (item: string) => {
    if (item === "Recruitment") { return <ClientCard />; }
    else if (item === "Staff") { return <StaffCard />; }
    else if (item === "Client") { return <RecruitmentCard />; }
  }

  const renderSelectedComprehensionCandidates = (item: string) => {
    if (item === "shiftComprehension") { return <ShiftComprehension />; }
    else if (item === "topCandidates") { return <TopCandidates />; }
  }

  const renderBirthDayStaffStatus = (item: string) => {
    if (item === "BirthDay") { return <StaffBirthDay/>; }
    else if (item === "staffStatus") { return <StaffStatusCard/>; }
  }

  return (
    <Layout className="bgLight-color dashboard">
      <Row gutter={[29, 29]} style={{ paddingBottom: "30px" }}>
        {shiftInvoiceTimeSheet.map((item: string) => {
          return (<Col xs={24} sm={24} md={24} lg={24} xl={ item==="TimeSheet"? 24:12} xxl={8} key={uuidv4()}>
            {renderSelectedShiftInvoiceTimeSheetCard(item)}
          </Col>
          )
        })}
      </Row>
      <Row gutter={[29, 29]} style={{ paddingBottom: "30px" }}>
        {comprehensionCandidates.map((item: string) => {
          return (<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={12} key={uuidv4()}>
            {renderSelectedComprehensionCandidates(item)}
          </Col>)
        })

        }


      </Row>
      <Row gutter={[29, 29]} style={{ paddingBottom: "30px" }}>
        {recruitmentStaffClientCard.map((item: string) => {
          return (<Col xs={24} sm={24} md={24} lg={24} xl={ item==="Client"? 24:12}  xxl={8} key={uuidv4()}>
            {renderRecruitmentStaffClientCard(item)}
          </Col>
          )
        })}
      </Row>
      <Row gutter={[29, 29]} style={{ paddingBottom: "30px" }}>
        {birthDayStaffStatus.map((item: string) => {
          return (<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={12} key={uuidv4()}>
            {renderBirthDayStaffStatus(item)}
          </Col>)
        })}
      </Row>
    </Layout>


  );
};

export default DashboardAdmin;
