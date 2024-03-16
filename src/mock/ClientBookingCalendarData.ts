import ShiftIcon from "../assets/icons/ClientBookingCalendar/shift-timing-icon.png";
import DateIcon from "../assets/icons/ClientBookingCalendar/date-icon.png";
import TotalShiftHoursIcon from "../assets/icons/ClientBookingCalendar/hours-icon.png";
import TotalShiftPayIcon from "../assets/icons/ClientBookingCalendar/pay-icon.png";
import ExtraHours from "../assets/icons/ClientBookingCalendar/time-icon.png";
import Department from "../assets/icons/ClientBookingCalendar/department-icon.png";

export const clientBookingCalendarData = [
  {
    id: "a",
    title: "Monday",
  },
  {
    id: "b",
    title: "Tuesday",
  },
  {
    id: "c",
    title: "Wednesday",
  },
  {
    id: "d",
    title: "Thursday",
  },
  {
    id: "e",
    title: "Friday",
  },
  {
    id: "f",
    title: "Saturday",
  },
  {
    id: "g",
    title: "Sunday",
  },
];

export const clientBookingEventsData = [
  {
    id: "1",
    resourceIds: ["a"],
    title: "Morning",
    start: "2023-03-27T06:00:00",
    end: "2023-03-27T12:40:00",
    totalShift: "9",
    totalCarers: "9"
  },
  {
    id: "2",
    resourceIds: ["b"],
    title: "Morning",
    start: "2023-03-27T09:00:00",
    end: "2023-03-28T10:20:00",
    totalShift: "9",
    totalCarers: "9"
  },
  {
    id: "3",
    resourceIds: ["c"],
    title: "Morning",
    start: "2023-03-28T09:00:00",
    end: "2023-03-29T10:20:00",
    totalShift: "9",
    totalCarers: "9"
  },
];

export const ClientBookingShiftDetails = [
  {
    id: "01",
    carer: "Mallesh",
    jobRole: "Nurse",
    shiftTime: "Morning",
    shiftDuration: "8:00 am - 3:00 pm",
    department: "Dementia",
  },
  {
    id: "02",
    carer: "Mallesh",
    jobRole: "Nurse",
    shiftTime: "Morning",
    shiftDuration: "8:00 am - 3:00 pm",
    department: "Dementia",
  },
  {
    id: "03",
    carer: "Mallesh",
    jobRole: "Nurse",
    shiftTime: "Morning",
    shiftDuration: "8:00 am - 3:00 pm",
    department: "Dementia",
  },
];

export const clientViewShiftDetailsData = [
  { id: "1", label: "Shift Timing", value: "07:30 - 17:00", icon: ShiftIcon},
  { id: "2", label: "Date", value: "May 22, Sunday - 2022", icon: DateIcon},
  { id: "3", label: "Total Shift Hours", value: "9.00 Hrs.", icon: TotalShiftHoursIcon},
  { id: "4", label: "Total Shift Pay", value: "£275.00", icon: TotalShiftPayIcon},
  { id: "5", label: "Extra Hours Worked", value: "0 Hrs", icon: ExtraHours},
  { id: "6", label: "Department", value: "Dementia Department", icon: Department},
]