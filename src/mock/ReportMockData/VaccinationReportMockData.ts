import {
  commonReportFiltersInterface,
  vaccinationReportTableMockDataInterface,
} from "../../types/ReportsInterface";

// Filters Array
export const VaccinationReportFilters: commonReportFiltersInterface[] = [
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
    labelName: "User Status",
    placeholder: "Select User Status",
    optionsArray: [
      {
        value: "Active",
        label: "Active",
      },
      {
        value: "In - Active",
        label: "In - Active",
      },
    ],
  },
  {
    key: "03",
    labelName: "User Type",
    placeholder: "Select User Type",
    optionsArray: [
      {
        value: "Sr. Health Care Assistant",
        label: "Sr. Health Care Assistant",
      },
      {
        value: "Health Care Assistant",
        label: "Health Care Assistant",
      },
      {
        value: "Mid. Health Care Assistant",
        label: "Mid. Health Care Assistant",
      },
      {
        value: "Support Staff",
        label: "Support Staff",
      },
    ],
  },
];

export const VaccinationReportMockData: vaccinationReportTableMockDataInterface[] =
  [
    {
      key: "01",
      staffName: "Sally Breay",
      email: "mr.vaqas@outlook.com",
      phone: "+447825585641",
      userType: "Sr. Health Care Assistant",
      userStatus: "Active State",
      vaccinationName: "COVID 19",
      vaccinationDate: "01 / 05 / 2021",
    },
    {
      key: "02",
      staffName: "Jittu Joseph",
      email: "mr.vaqas@outlook.com",
      phone: "+447825585641",
      userType: "Sr. Health Care Assistant",
      userStatus: "Active State",
      vaccinationName: "COVID 19",
      vaccinationDate: "01 / 05 / 2021",
    },
    {
      key: "03",
      staffName: "Harry Joseph",
      email: "mr.vaqas@outlook.com",
      phone: "+447825585641",
      userType: "Sr. Health Care Assistant",
      userStatus: "Active State",
      vaccinationName: "COVID 19",
      vaccinationDate: "01 / 05 / 2021",
    },
    {
      key: "04",
      staffName: "Sally Breay",
      email: "mr.vaqas@outlook.com",
      phone: "+447825585641",
      userType: "Sr. Health Care Assistant",
      userStatus: "Active State",
      vaccinationName: "COVID 19",
      vaccinationDate: "01 / 05 / 2021",
    },
    {
      key: "05",
      staffName: "Harry Joseph",
      email: "mr.vaqas@outlook.com",
      phone: "+447825585641",
      userType: "Sr. Health Care Assistant",
      userStatus: "Active State",
      vaccinationName: "COVID 19",
      vaccinationDate: "01 / 05 / 2021",
    },
  ];
