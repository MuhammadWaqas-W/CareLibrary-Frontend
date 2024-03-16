import { activityReportInterface, commonReportFiltersInterface } from "../../types/ReportsInterface";

// Filters Array 
export const ActivityReportFilters: commonReportFiltersInterface[] = [
    {
        key: "01",
        labelName: "Activity By",
        placeholder: "Select Name",
        optionsArray: [
            {
                value: "Timesheet",
                label: "Timesheet",
            },
            {
                value: "Staff Direct Booking",
                label: "Staff Direct Booking",
            },
            {
                value: "Shift Direct Booking",
                label: "Shift Direct Booking",
            },
        ]
    },
    {
        key: "02",
        labelName: "Activity Type",
        placeholder: "Select Activity Type",
        optionsArray: [
            {
                value: "Shift Direct Booking",
                label: "Shift Direct Booking",
            },
            {
                value: "Shift Direct Staff",
                label: "Shift Direct Staff",
            },
            {
                value: "Shift Allocated Staff",
                label: "Shift Allocated Staff",
            }
        ]
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
            }
        ]
    },
]

// Table Mock Data
export const ActivityReportMockData: activityReportInterface[] = [
    {
        key: "01",
        activityDate: "Thu, May 12, 2022 23 : 51",
        activityName: "Timesheet: Direct shift booking aganist job number JOBS20220512165.",
        activityType: "Shift Direct Booking : Admin",
        activityBy: "Maaz Khan",
    },
    {
        key: "02",
        activityDate: "Fri, May 13, 2022 23 : 51",
        activityName: "Staff Direct Booking Push Notify sent to CHRISTINA PUNNACKAL CHAKKAPPAN",
        activityType: "Shift Direct Booking : Admin",
        activityBy: "Aesa Khan",
    },
    {
        key: "03",
        activityDate: "Sat, May 14, 2022 23 : 51",
        activityName: "Staff Direct Booking Email sent to CHRISTINA PUNNACKAL CHAKKAPPAN ",
        activityType: "Shift Direct Booking : Admin",
        activityBy: "Ali Rehman",
    },
    {
        key: "04",
        activityDate: "Sun, May 15, 2022 23 : 51",
        activityName: "Timesheet: Direct shift booking aganist job number JOBS20220512165.",
        activityType: "Shift Direct Booking : Admin",
        activityBy: "Usama",
    },
    {
        key: "05",
        activityDate: "Mon, May 16, 2022 23 : 51",
        activityName: "Timesheet: Direct shift booking aganist job number JOBS20220512165.",
        activityType: "Shift Direct Booking : Admin",
        activityBy: "Abdul Qadir",
    },
]