import { commonReportFiltersInterface, staffDataReportMockDataInterface } from "../../types/ReportsInterface"


// Filters Array 
export const StaffDataReportFilters: commonReportFiltersInterface[] = [
    {
        key: "01",
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
        key: "02",
        labelName: "Staff Type",
        placeholder: "Select Staff Type",
        optionsArray: [
            {
                value: "HCA",
                label: "HCA",
            },
        ]
    },
    {
        key: "03",
        labelName: "User Status",
        placeholder: "Select User Status",
        optionsArray: [
            {
                value: "Active State",
                label: "Active State",
            },
            {
                value: "Inactive State",
                label: "Inactive State",
            },
        ]
    },
]

// Table Mock Data
export const StaffDataReportMockData: staffDataReportMockDataInterface[] = [
    {
        key: "01",
        staffName: "Waqas",
        staffType: "HCA",
        gender: "Male",
        doj: "01 / 11 / 2021",
        dob: "25 / 08 / 1998",
        email: "care.library@gmail.com",
        phone: "+447825585641",
        staffBand: "HCA Band",
        empStatus: "PAYE",
        profilePercentage: "95",
        userStatus: "Active State",
        visaType: "Biometric Card",
    },
    {
        key: "02",
        staffName: "Kashif",
        staffType: "HCA",
        gender: "Male",
        doj: "01 / 11 / 2021",
        dob: "25 / 08 / 1998",
        email: "care.library@gmail.com",
        phone: "+447825585641",
        staffBand: "HCA Band",
        empStatus: "PAYE",
        profilePercentage: "95",
        userStatus: "Active State",
        visaType: "Biometric Card",
    },
    {
        key: "03",
        staffName: "Maaz Khan",
        staffType: "HCA",
        gender: "Male",
        doj: "01 / 11 / 2021",
        dob: "25 / 08 / 1998",
        email: "care.library@gmail.com",
        phone: "+447825585641",
        staffBand: "HCA Band",
        empStatus: "PAYE",
        profilePercentage: "95",
        userStatus: "Active State",
        visaType: "Biometric Card",
    },
    {
        key: "04",
        staffName: "Ali Rehman",
        staffType: "HCA",
        gender: "Male",
        doj: "01 / 11 / 2021",
        dob: "25 / 08 / 1998",
        email: "care.library@gmail.com",
        phone: "+447825585641",
        staffBand: "HCA Band",
        empStatus: "PAYE",
        profilePercentage: "95",
        userStatus: "Active State",
        visaType: "Biometric Card",
    }
]