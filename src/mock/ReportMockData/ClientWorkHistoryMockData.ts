import { commonReportFiltersInterface, clientWorkHistoryMockDataInterface } from "../../types/ReportsInterface";

// Filters Array 
export const ClientWorkHistoryReportFilters: commonReportFiltersInterface[] = [
    {
        key: "01",
        labelName: "Client Name",
        placeholder: "Select Client Name",
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
            }
        ]
    },
    {
        key: "02",
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
            }
        ]
    },
    {
        key: "03",
        labelName: "Shift Status",
        placeholder: "Select Shift Status",
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
export const ClientWorkHistoryMockData: clientWorkHistoryMockDataInterface[] = [
    {
        key: "01",
        shiftName: "Long Day",
        staffName: "Maaz Khan",
        jobDate: "Monday May 12 2022",
        workedHours: "11 : 25",
        hourlyRate: "15 : 50",
        shiftAmount: "174.38",
        shiftStatus: "Confirmed Shift"
    },
    {
        key: "02",
        shiftName: "Early Shift",
        staffName: "Ali Rehman",
        jobDate: "Tuesday May 13 2022",
        workedHours: "11 : 25",
        hourlyRate: "15 : 50",
        shiftAmount: "174.38",
        shiftStatus: "Confirmed Shift"
    },
    {
        key: "03",
        shiftName: "Night Shift",
        staffName: "Aesa Khan",
        jobDate: "Wednesday May 14 2022",
        workedHours: "11 : 25",
        hourlyRate: "15 : 50",
        shiftAmount: "174.38",
        shiftStatus: "Signed Off"
    },
    {
        key: "04",
        shiftName: "Long Day",
        staffName: "Ali Rehman",
        jobDate: "Thursday May 15 2022",
        workedHours: "11 : 25",
        hourlyRate: "15 : 50",
        shiftAmount: "174.38",
        shiftStatus: "Confirmed Shift"
    },
    {
        key: "05",
        shiftName: "Long Day",
        staffName: "Maaz Khan",
        jobDate: "Frkeyay May 16 2022",
        workedHours: "11 : 25",
        hourlyRate: "15 : 50",
        shiftAmount: "174.38",
        shiftStatus: "Confirmed Shift"
    },
]