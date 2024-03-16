import HomeIcon from "../assets/images/staffManager/homeBlue.png";
import Calander from "../assets/images/staffManager/calendar.png";
import ClockIcon from "../assets/images/staffManager/clock.png";
import SunIcon from "../assets/images/staffManager/sun.png";
import PoundSign from "../assets/images/staffManager/pound.png";
import ProfileImg from "../assets/images/ClientManageShift/profile-icon.png";
import ShiftIcon from "../assets/icons/ClientBookingCalendar/shift-timing-icon.png";
import DateIcon from "../assets/icons/ClientBookingCalendar/date-icon.png";
import TotalShiftHoursIcon from "../assets/icons/ClientBookingCalendar/hours-icon.png";
import TotalShiftPayIcon from "../assets/icons/ClientBookingCalendar/pay-icon.png";
import ExtraHours from "../assets/icons/ClientBookingCalendar/time-icon.png";
import Department from "../assets/icons/ClientBookingCalendar/department-icon.png";
import SignInIcon from "../assets/icons/ClientManageShift/check-in-icon.png";

export const ClientManageShitsTableData = [
  {
    id: "01",
    shiftDate: "Fri, July 22 2022",
    shiftType: "Night Shift",
    staffType: "HCA",
    requestedBy: "ANA MIHAI",
    staffRequired: "3",
    shiftStatus: "Booking Awaiting",
  },
  {
    id: "02",
    shiftDate: "Fri, July 22 2022",
    shiftType: "Night Shift",
    staffType: "HCA",
    requestedBy: "ANA MIHAI",
    staffRequired: "3",
    shiftStatus: "Partially Booked",
  },
  {
    id: "03",
    shiftDate: "Fri, July 22 2022",
    shiftType: "Night Shift",
    staffType: "HCA",
    requestedBy: "ANA MIHAI",
    staffRequired: "3",
    shiftStatus: "Booking Completed",
  },
];

export const renderImg: any = {
  address: HomeIcon,
  date: Calander,
  time: ClockIcon,
  weather: SunIcon,
  shiftRate: PoundSign,
};

// upcoming shift
export const ClientUpcomingShiftData = [
  {
    id: "1",
    img: ProfileImg,
    shiftType: "HCA",
    rating: 4,
    shiftTitle: "Tall Tree Care Home",
    address: "Elderly Care Unit",
    date: "May 18, Tuesday ",
    time: "8:00 PM  TO  4:00 AM",
    weather: "Longday",
    shiftRate: "Shift Rate:£275.00",
  },
  {
    id: "2",
    img: ProfileImg,
    shiftType: "HCA",
    rating: 3.5,
    shiftTitle: "Tall Tree Care Home",
    address: "Elderly Care Unit",
    date: "May 18, Tuesday ",
    time: "8:00 PM  TO  4:00 AM",
    weather: "Longday",
    shiftRate: "Shift Rate:£275.00",
  },
  {
    id: "3",
    img: ProfileImg,
    shiftType: "HCA",
    rating: 4,
    shiftTitle: "Tall Tree Care Home",
    address: "Elderly Care Unit",
    date: "May 18, Tuesday ",
    time: "8:00 PM  TO  4:00 AM",
    weather: "Longday",
    shiftRate: "Shift Rate:£275.00",
  },
  {
    id: "4",
    img: ProfileImg,
    shiftType: "HCA",
    rating: 4,
    shiftTitle: "Tall Tree Care Home",
    address: "Elderly Care Unit",
    date: "May 18, Tuesday ",
    time: "8:00 PM  TO  4:00 AM",
    weather: "Longday",
    shiftRate: "Shift Rate:£275.00",
  },
];

// signoff

export const renderCompletedImg: any = {
  title: ProfileImg,
  weather: SunIcon,
  time: ClockIcon,
  shiftRate: PoundSign,
  department: ClockIcon,
};

export const renderShiftCalculation: any = {
  totalShiftHours: "Total Shift Hours",
  shiftType: "Shift Type",
  shiftRate: "Shift Rate",
  totalShiftAmount: "Total Shift Amount:",
  shiftTime: "Shift Time",
  extraTotalWorked: "Extra Hours Worked:",
  endShiftHours: "End Shift Rate:",
};

export const renderShiftOff: any = {
  signedOffBy: "Signed-off by:",
  modifiedBy: "Modified By:",
};

export const ClientCompletedShiftData = [
  {
    id: "1",
    title: "Mario Luigi",
    time: "8:00 PM  TO  4:00 AM",
    weather: "Longday",
    shiftRate: "Shift Rate:£275.00",
    department: "Old Age Care",
    shiftCalculation: {
      id: "a",
      totalShiftHours: "15 Hrs",
      shiftRate: "£27.00",
      shiftType: "Long Day",
      endShiftHours: "£25.00",
      shiftTime: "8:00 PM - 4:00 AM",
      totalShiftAmount: "£283.00",
      extraTotalWorked: "0 Hrs",
    },
    signOff: {
      signedOffBy: "Sun, 03 Apr 22 - 8:00 PM",
      modifiedBy: "Sun, 03 Apr 22 - 8:00 PM",
      modificationReason: "The shift timings were modified as the carer arived later to the care home, than the time that was mentioned n the timesheet",
    },
  },
  {
    id: "2",
    title: "Mario Luigi",
    time: "8:00 PM  TO  4:00 AM",
    weather: "Longday",
    shiftRate: "Shift Rate:£275.00",
    department: "Old Age Care",
    shiftCalculation: {
      id: "a",
      totalShiftHours: "15 Hrs",
      shiftRate: "£27.00",
      shiftType: "Long Day",
      endShiftHours: "£25.00",
      shiftTime: "8:00 PM - 4:00 AM",
      totalShiftAmount: "£283.00",
      extraTotalWorked: "0 Hrs",
    },
    signOff: {
      signedOffBy: "Sun, 03 Apr 22 - 8:00 PM",
      modifiedBy: "Sun, 03 Apr 22 - 8:00 PM",
      modificationReason: "The shift timings were modified as the carer arived later to the care home, than the time that was mentioned n the timesheet",
    },
  },
];

export const ClientCheckInData = [
  {
    id: "1",
    img: ProfileImg,
    shiftType: "HCA",
    rating: 4,
    shiftTitle: "Tall Tree Care Home",
    address: "Elderly Care Unit",
    date: "May 18, Tuesday ",
    time: "8:00 PM  TO  4:00 AM",
    weather: "Longday",
    shiftRate: "Shift Rate:£275.00",
  },
  {
    id: "2",
    img: ProfileImg,
    shiftType: "HCA",
    rating: 3.5,
    shiftTitle: "Tall Tree Care Home",
    address: "Elderly Care Unit",
    date: "May 18, Tuesday ",
    time: "8:00 PM  TO  4:00 AM",
    weather: "Longday",
    shiftRate: "Shift Rate:£275.00",
  },
  {
    id: "3",
    img: ProfileImg,
    shiftType: "HCA",
    rating: 4,
    shiftTitle: "Tall Tree Care Home",
    address: "Elderly Care Unit",
    date: "May 18, Tuesday ",
    time: "8:00 PM  TO  4:00 AM",
    weather: "Longday",
    shiftRate: "Shift Rate:£275.00",
  },
  {
    id: "4",
    img: ProfileImg,
    shiftType: "HCA",
    rating: 4,
    shiftTitle: "Tall Tree Care Home",
    address: "Elderly Care Unit",
    date: "May 18, Tuesday ",
    time: "8:00 PM  TO  4:00 AM",
    weather: "Longday",
    shiftRate: "Shift Rate:£275.00",
  },
];

export const clientShiftInformationData = [
  { id: "1", label: "Date", value: "May 22, Sunday - 2022", icon: DateIcon },
  { id: "2", label: "Shift Timing", value: "07:30 - 17:00", icon: ShiftIcon },
  { id: "3", label: "Check In", value: "", icon: SignInIcon },
  { id: "4", label: "Total Shift Hours", value: "9.00 Hrs.", icon: TotalShiftHoursIcon },
  { id: "5", label: "Total Shift Pay", value: "£275.00", icon: TotalShiftPayIcon },
  { id: "6", label: "Extra Hours Worked", value: "0 Hrs", icon: ExtraHours },
  { id: "7", label: "Department", value: "Dementia Department", icon: Department },
];

export const clientShiftConfirmData = [
  { id: "1", label: "Date", value: "May 22, Sunday - 2022", icon: DateIcon },
  { id: "2", label: "Shift Timing", value: "07:30 - 17:00", icon: ShiftIcon },
  { id: "3", label: "Check In/Check Out Time:", value: "07:30 AM", icon: SignInIcon },
  { id: "4", label: "Total Shift Hours", value: "9.00 Hrs.", icon: TotalShiftHoursIcon },
  { id: "5", label: "Total Shift Pay", value: "£275.00", icon: TotalShiftPayIcon },
  { id: "6", label: "Extra Hours Worked", value: "0 Hrs", icon: ExtraHours },
  { id: "7", label: "Department", value: "Dementia Department", icon: Department },
];

export const clientShiftCompletedData = [
  { id: "1", label: "Check in Sign off", value: "No", icon: Department },
  { id: "2", label: "Date", value: "May 22, Sunday - 2022", icon: DateIcon },
  { id: "3", label: "Check In", icon: SignInIcon },
  { id: "4", label: "Check Out", icon: SignInIcon },
  { id: "5", label: "Shift Timing", value: "07:30 - 17:00", icon: ShiftIcon },
  { id: "6", label: "Total Shift Hours", value: "9.00 Hrs.", icon: TotalShiftHoursIcon },
  { id: "7", label: "Total Shift Pay", value: "£275.00", icon: TotalShiftPayIcon },
  { id: "8", label: "Extra Hours Worked", value: "0 Hrs", icon: ExtraHours },
  { id: "9", label: "Department", value: "Dementia Department", icon: Department },
];