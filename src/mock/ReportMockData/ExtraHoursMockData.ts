// Interfaces
import { commonReportFiltersInterface, extraHoursReportTableMockDataInterface } from "../../types/ReportsInterface"

// Filters Array 
export const ExtraHoursReportFilters: commonReportFiltersInterface[] = [
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
            }
        ]
    },
    {
        key: "02",
        labelName: "Approval Status",
        placeholder: "Select Approval Status",
        optionsArray: [
            {
                value: "Yes",
                label: "Yes",
            },
            {
                value: "No",
                label: "No",
            },
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
    {
        key: "04",
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
]

// Table Mock Data
export const ExtraHoursReportTableMockData: extraHoursReportTableMockDataInterface[] = [
    {
        key: "01",
        staffName: "Ali Rehman",
        clientName: "Syed Nizam",
        shiftName: "Long Day",
        firstCheckIn: "09/03/2023",
        lastCheckIn: "09/03/2023",
        extraHours: "4",
        approvalStatus: "Yes",
    },
    {
        key: "02",
        staffName: "Ali Rehman",
        clientName: "Syed Nizam",
        shiftName: "Long Day",
        firstCheckIn: "09/03/2023",
        lastCheckIn: "09/03/2023",
        extraHours: "4",
        approvalStatus: "Yes",
    },
    {
        key: "03",
        staffName: "Ali Rehman",
        clientName: "Syed Nizam",
        shiftName: "Long Day",
        firstCheckIn: "09/03/2023",
        lastCheckIn: "09/03/2023",
        extraHours: "4",
        approvalStatus: "Yes",
    },
    {
        key: "04",
        staffName: "Ali Rehman",
        clientName: "Syed Nizam",
        shiftName: "Long Day",
        firstCheckIn: "09/03/2023",
        lastCheckIn: "09/03/2023",
        extraHours: "4",
        approvalStatus: "Yes",
    },
    {
        key: "05",
        staffName: "Ali Rehman",
        clientName: "Syed Nizam",
        shiftName: "Long Day",
        firstCheckIn: "09/03/2023",
        lastCheckIn: "09/03/2023",
        extraHours: "4",
        approvalStatus: "Yes",
    },
    {
        key: "06",
        staffName: "Ali Rehman",
        clientName: "Syed Nizam",
        shiftName: "Long Day",
        firstCheckIn: "09/03/2023",
        lastCheckIn: "09/03/2023",
        extraHours: "4",
        approvalStatus: "Yes",
    },

]