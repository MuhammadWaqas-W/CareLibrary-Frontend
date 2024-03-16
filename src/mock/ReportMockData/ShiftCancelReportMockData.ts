import { commonReportFiltersInterface, shiftCancelReportMockDataInterface } from "../../types/ReportsInterface"

// Filters Array 
export const ShiftCancelReportFilters: commonReportFiltersInterface[] = [
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
        labelName: "User Type",
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
export const ShiftCancelReportMockData: shiftCancelReportMockDataInterface[] = [
    {
        key: "01",
        clientName: "Maaz Khan",
        staffName: "Ali Rehman",
        staffType: "HCA",
        shiftDate: "09 / 05 / 2022",
        cancelledBy: "Aesa Khan",
        cancelledAt: "08 / 05 / 2022 14:13",
        cancelReason: "Dkeyn't work"
    },
    {
        key: "02",
        clientName: "Ali Rehman",
        staffName: "Maaz Khan",
        staffType: "HCA",
        shiftDate: "10 / 05 / 2022",
        cancelledBy: "Aesa Khan",
        cancelledAt: "08 / 05 / 2022 14:13",
        cancelReason: "No"
    },
    {
        key: "03",
        clientName: "Aesa Khan",
        staffName: "Ali Rehman",
        staffType: "HCA",
        shiftDate: "09 / 05 / 2022",
        cancelledBy: "Maaz Khan",
        cancelledAt: "08 / 05 / 2022 14:13",
        cancelReason: "Home cancelled"
    },
    {
        key: "04",
        clientName: "Maaz Khan",
        staffName: "Ali Rehman",
        staffType: "HCA",
        shiftDate: "09 / 05 / 2022",
        cancelledBy: "Aesa Khan",
        cancelledAt: "08 / 05 / 2022 14:13",
        cancelReason: "Dkeyn't work"
    },
    {
        key: "05",
        clientName: "Maaz Khan",
        staffName: "Ali Rehman",
        staffType: "HCA",
        shiftDate: "09 / 05 / 2022",
        cancelledBy: "Aesa Khan",
        cancelledAt: "08 / 05 / 2022 14:13",
        cancelReason: "Dkeyn't work"
    },
    {
        key: "06",
        clientName: "Maaz Khan",
        staffName: "Ali Rehman",
        staffType: "HCA",
        shiftDate: "09 / 05 / 2022",
        cancelledBy: "Aesa Khan",
        cancelledAt: "08 / 05 / 2022 14:13",
        cancelReason: "Dkeyn't work"
    },
    {
        key: "07",
        clientName: "Maaz Khan",
        staffName: "Ali Rehman",
        staffType: "HCA",
        shiftDate: "09 / 05 / 2022",
        cancelledBy: "Aesa Khan",
        cancelledAt: "08 / 05 / 2022 14:13",
        cancelReason: "Dkeyn't work"
    },
    {
        key: "08",
        clientName: "Maaz Khan",
        staffName: "Ali Rehman",
        staffType: "HCA",
        shiftDate: "09 / 05 / 2022",
        cancelledBy: "Aesa Khan",
        cancelledAt: "08 / 05 / 2022 14:13",
        cancelReason: "Dkeyn't work"
    },
]