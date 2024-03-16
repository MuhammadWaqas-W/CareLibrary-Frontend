import { commonReportFiltersInterface, staffComplianceReportMockDataInterface } from "../../types/ReportsInterface"

// Filters Array 
export const StaffComplianceReportFilters: commonReportFiltersInterface[] = [
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
        key: "03",
        labelName: "Certificates",
        placeholder: "Select Certificates",
        optionsArray: [
            {
                value: "Expiry Certificates",
                label: "Expiry Certificates",
            },
            {
                value: "Due Certificates",
                label: "Due Certificates",
            },
        ]
    },
]

// Table Mock Data
export const StaffComplianceReportMockData: staffComplianceReportMockDataInterface[] = [
    {
        key: "01",
        certificateName: "DBS Certificate",
        userType: "HCA",
        issueDate: "18 / 05 / 2022",
        expiryDate: "18 / 05 / 2023"
    },
    {
        key: "02",
        certificateName: "Training Docs : Moving and Handing",
        userType: "HCA",
        issueDate: "18 / 05 / 2022",
        expiryDate: "18 / 05 / 2023"
    },
    {
        key: "03",
        certificateName: "DBS Certificate",
        userType: "HCA",
        issueDate: "18 / 05 / 2022",
        expiryDate: "18 / 05 / 2023"
    },
]