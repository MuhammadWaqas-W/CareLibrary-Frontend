import { commonReportFiltersInterface, paymentDataReportMockDataInterface } from "../../types/ReportsInterface";

// Filters Array 
export const PaymentDataReportFilters: commonReportFiltersInterface[] = [
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
export const PaymentDataReportMockData: paymentDataReportMockDataInterface[] = [
    {
        key: "01",
        shiftDate: "14 / 03 / 2023",
        shiftDay: "Tuesday",
        staffName: "Ethelred Care Home",
        clientName: "Arsalan Rafique",
        shiftType: "Night",
        designation: "HCA",
        employeeStatus: "Payroll",
        totalHours: "11.00",
        payRate: "9.5",
        totalPayable: "104.50",
        clientRate: "15.00",
        totalReceivable: "165.00"
    },
    {
        key: "02",
        shiftDate: "15 / 03 / 2023",
        shiftDay: "Wednesday",
        staffName: "Ethelred Care Home",
        clientName: "Maaz Khan",
        shiftType: "Night",
        designation: "HCA",
        employeeStatus: "Payroll",
        totalHours: "11.00",
        payRate: "9.5",
        totalPayable: "104.50",
        clientRate: "15.00",
        totalReceivable: "165.00"
    },
    {
        key: "03",
        shiftDate: "16 / 03 / 2023",
        shiftDay: "Thursday",
        staffName: "Ethelred Care Home",
        clientName: "Aesa Khan",
        shiftType: "Night",
        designation: "HCA",
        employeeStatus: "Payroll",
        totalHours: "11.00",
        payRate: "9.5",
        totalPayable: "104.50",
        clientRate: "15.00",
        totalReceivable: "165.00"
    },
    {
        key: "04",
        shiftDate: "17 / 03 / 2023",
        shiftDay: "Frkeyay",
        staffName: "Ethelred Care Home",
        clientName: "Ali Rehman",
        shiftType: "Night",
        designation: "HCA",
        employeeStatus: "Payroll",
        totalHours: "11.00",
        payRate: "9.5",
        totalPayable: "104.50",
        clientRate: "15.00",
        totalReceivable: "165.00"
    },
    {
        key: "05",
        shiftDate: "14 / 03 / 2023",
        shiftDay: "Tuesday",
        staffName: "Ethelred Care Home",
        clientName: "Kashif",
        shiftType: "Night",
        designation: "HCA",
        employeeStatus: "Payroll",
        totalHours: "11.00",
        payRate: "9.5",
        totalPayable: "104.50",
        clientRate: "15.00",
        totalReceivable: "165.00"
    },
]