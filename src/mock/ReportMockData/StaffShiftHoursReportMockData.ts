import {
  commonReportFiltersInterface,
  staffShiftHoursReportMockDataInterface,
} from "../../types/ReportsInterface";

// Filters Array
export const StaffShiftHoursReportFilters: commonReportFiltersInterface[] = [
  {
    key: "01",
    labelName: "Available Options",
    placeholder: "Select Options",
    optionsArray: [
      {
        value: "Staff Report",
        label: "Staff Report",
      },
      {
        value: "Client Report",
        label: "Client Report",
      },
    ],
  },
  {
    key: "02",
    labelName: "Options Name",
    placeholder: "Select Option Name",
    optionsArray: [
      {
        value: "Staff Report",
        label: "Staff Report",
      },
      {
        value: "Client Report",
        label: "Client Report",
      },
    ],
  },
  {
    key: "03",
    labelName: "Time Frame",
    placeholder: "Select Time Frame",
    optionsArray: [
      {
        value: "Morning",
        label: "Morning",
      },
      {
        value: "Afternoon",
        label: "Afternoon",
      },
      {
        value: "Evening",
        label: "Evening",
      },
    ],
  },
];

// Table Mock Data
export const StaffShiftHoursReportMockData: staffShiftHoursReportMockDataInterface[] =
  [
    {
      key: "01",
      name: "Ali Rehman",
      email: "mr.vaqas@gmail.com",
      phone: "06899658203",
      noOfShifts: "3",
      workedHours: "28.72",
    },
    {
      key: "02",
      name: "Usama",
      email: "mr.vaqas@gmail.com",
      phone: "06899658203",
      noOfShifts: "2",
      workedHours: "24.72",
    },
    {
      key: "03",
      name: "Maaz Khan",
      email: "mr.vaqas@gmail.com",
      phone: "06899632203",
      noOfShifts: "2",
      workedHours: "20.72",
    },
    {
      key: "04",
      name: "Aesa Khan",
      email: "mr.vaqas@gmail.com",
      phone: "06899658203",
      noOfShifts: "3",
      workedHours: "28.72",
    },
    {
      key: "05",
      name: "Ali Rehman",
      email: "mr.vaqas@gmail.com",
      phone: "06899658203",
      noOfShifts: "3",
      workedHours: "28.72",
    },
    {
      key: "06",
      name: "Maaz Khan",
      email: "mr.vaqas@gmail.com",
      phone: "06899658203",
      noOfShifts: "3",
      workedHours: "28.72",
    },
  ];
