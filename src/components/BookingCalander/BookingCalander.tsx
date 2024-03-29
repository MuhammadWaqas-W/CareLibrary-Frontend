import { TabsProps, Tabs } from "antd";
import TimeAndAttendance from "./TimeAndAttendance/TimeAndAttendance";
import BookingCalanderTab from "./BookingCalanderTab/BookingCalanderTab";
import TimeSheetCalander from "./TimeSheetCalander/TimeSheetCalander";
import "./BookingCalander.scss";

function BookingCalander() {
  const MainTabItems: TabsProps["items"] = [
    {
      key: "1",
      label: `Booking Calander`,
      children: <BookingCalanderTab />,
    },
    {
      key: "2",
      label: `Time Sheet Calander`,
      children: <TimeSheetCalander />,
    },
    {
      key: "3",
      label: `Time and Attendance`,
      children: <TimeAndAttendance />,
    },
  ];
  const onTabChange = (key: string) => {
    console.log(key);
  };
  return (
    <>
    <div className="main-body">
      <Tabs defaultActiveKey="1" items={MainTabItems} onChange={onTabChange} />
    </div>
    </>
  );
}

export default BookingCalander;
