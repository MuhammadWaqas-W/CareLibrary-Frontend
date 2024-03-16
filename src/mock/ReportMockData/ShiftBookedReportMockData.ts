import { commonReportFiltersInterface, shiftBookedReportMockDataInterface } from "../../types/ReportsInterface"

// Filters Array 
export const ShiftBookedReportFilters: commonReportFiltersInterface[] = [
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
        labelName: "Staff User Type",
        placeholder: "Select User Type",
        optionsArray: [
            {
                value: "Admin",
                label: "Admin",
            },
            {
                value: "Super Admin",
                label: "Super Admin",
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

]

// Table Mock Data
export const ShiftBookedReportMockData: shiftBookedReportMockDataInterface[] = [
    {
        key: "01",
        clientName: "Arsalan Khan",
        staffType: "HCA",
        shiftName: "Morning",
        shiftDate: "09 / 05 / 2022",
        bookedBy: "Kashif",
        bookedAt: "08 / 05 / 2022 14:13",
        requestedBy: "Maaz Khan"
    },
    {
        key: "02",
        clientName: "Maaz Khan",
        staffType: "HCA",
        shiftName: "Morning",
        shiftDate: "09 / 05 / 2022",
        bookedBy: "Kashif",
        bookedAt: "08 / 05 / 2022 14:13",
        requestedBy: "Arsalan"
    },
    {
        key: "03",
        clientName: "Aesa Khan",
        staffType: "HCA",
        shiftName: "Morning",
        shiftDate: "09 / 05 / 2022",
        bookedBy: "Kashif",
        bookedAt: "08 / 05 / 2022 14:13",
        requestedBy: "Arsalan"
    },
    {
        key: "04",
        clientName: "Arif",
        staffType: "HCA",
        shiftName: "Morning",
        shiftDate: "09 / 05 / 2022",
        bookedBy: "Kashif",
        bookedAt: "08 / 05 / 2022 14:13",
        requestedBy: "Arsalan"
    },
    {
        key: "05",
        clientName: "Arsalan",
        staffType: "HCA",
        shiftName: "Morning",
        shiftDate: "09 / 05 / 2022",
        bookedBy: "Kashif",
        bookedAt: "08 / 05 / 2022 14:13",
        requestedBy: "Aesa Khan"
    },
]