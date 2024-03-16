import {
  commonReportFiltersInterface,
  terminatedStaffMockDataInterface,
} from "../../types/ReportsInterface";

// Filters Array
export const TerminatedStaffReportFilters: commonReportFiltersInterface[] = [
  {
    key: "01",
    labelName: "Staff Name",
    placeholder: "Select Staff Name",
    optionsArray: [
      {
        value: "Maaz Khan",
        label: "Maaz Khan",
      },
      {
        value: "Aesa Khan",
        label: "Aesa Khan",
      },
      {
        value: "Ali Rehman",
        label: "Ali Rehman",
      },
    ],
  },
  {
    key: "02",
    labelName: "User Role",
    placeholder: "Select User Role",
    optionsArray: [
      {
        value: "Super Admin",
        label: "Super Admin",
      },
      {
        value: "Admin",
        label: "Admin",
      },
      {
        value: "User",
        label: "User",
      },
    ],
  },
  {
    key: "03",
    labelName: "Terminated By",
    placeholder: "Select Terminated By",
    optionsArray: [
      {
        value: "Maaz Khan",
        label: "Maaz Khan",
      },
      {
        value: "Aesa Khan",
        label: "Aesa Khan",
      },
      {
        value: "Ali Rehman",
        label: "Ali Rehman",
      },
    ],
  },
  {
    key: "04",
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
export const TerminatedStaffMockData: terminatedStaffMockDataInterface[] = [
  {
    key: "01",
    firstName: "Abid",
    lastName: "Azeem",
    email: "mr.vaqas@gmail.com",
    phone: "06764578065",
    userRole: "Non - Medical Staff",
    doj: "25 / 08 / 2021",
    reasonForLeaving: "Didn't join us",
    terminatedAt: "25 / 08 / 2021  13 : 30 PM",
    terminatedBy: "Ali Rehman",
  },
  {
    key: "02",
    firstName: "Abid",
    lastName: "Azeem",
    email: "mr.vaqas@gmail.com",
    phone: "06764578065",
    userRole: "Non - Medical Staff",
    doj: "25 / 08 / 2021",
    reasonForLeaving: "Didn't join us",
    terminatedAt: "25 / 08 / 2021  13 : 30 PM",
    terminatedBy: "Ali Rehman",
  },
  {
    key: "03",
    firstName: "Abid",
    lastName: "Azeem",
    email: "mr.vaqas@gmail.com",
    phone: "06764578065",
    userRole: "Non - Medical Staff",
    doj: "25 / 08 / 2021",
    reasonForLeaving: "Didn't join us",
    terminatedAt: "25 / 08 / 2021  13 : 30 PM",
    terminatedBy: "Ali Rehman",
  },
  {
    key: "04",
    firstName: "Abid",
    lastName: "Azeem",
    email: "mr.vaqas@gmail.com",
    phone: "06764578065",
    userRole: "Non - Medical Staff",
    doj: "25 / 08 / 2021",
    reasonForLeaving: "Didn't join us",
    terminatedAt: "25 / 08 / 2021  13 : 30 PM",
    terminatedBy: "Ali Rehman",
  },
  {
    key: "05",
    firstName: "Abid",
    lastName: "Azeem",
    email: "mr.vaqas@gmail.com",
    phone: "06764578065",
    userRole: "Non - Medical Staff",
    doj: "25 / 08 / 2021",
    reasonForLeaving: "Didn't join us",
    terminatedAt: "25 / 08 / 2021  13 : 30 PM",
    terminatedBy: "Ali Rehman",
  },
];
