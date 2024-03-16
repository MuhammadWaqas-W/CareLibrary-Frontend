import { commonReportFiltersInterface, grossProfitLossReportMockDataInterface } from "../../types/ReportsInterface"


// Filters Array 
export const GrossProfitLossReportFilters: commonReportFiltersInterface[] = [
    {
        key: "01",
        labelName: "Income Tax",
        placeholder: "Select Income Tax",
        optionsArray: [
            {
                value: "5",
                label: "5",
            },
            {
                value: "10",
                label: "10",
            },
            {
                value: "15",
                label: "15",
            }
        ]
    },
    {
        key: "02",
        labelName: "National Ins. %",
        placeholder: "Select Approval Status",
        optionsArray: [
            {
                value: "5",
                label: "5",
            },
            {
                value: "10",
                label: "10",
            },
        ]
    },
    {
        key: "03",
        labelName: "Other Overheads",
        placeholder: "Select Other Overheads",
        optionsArray: [
            {
                value: "5",
                label: "5",
            },
            {
                value: "10",
                label: "10",
            },
            {
                value: "20",
                label: "20",
            }
        ]
    },
]

// Table Mock Data
export const GrossProfitLossReportMockData: grossProfitLossReportMockDataInterface[] = [
    {
        key: "01",
        clientName: "Maaz Khan",
        workedHours: "76.2",
        clientAmount: "1324.4",
        staffAmount: "324.4",
        diff: "1000"
    },
    {
        key: "02",
        clientName: "Aesa Khan",
        workedHours: "76.2",
        clientAmount: "1324.4",
        staffAmount: "324.4",
        diff: "1000"
    },
    {
        key: "03",
        clientName: "Ali Rehman",
        workedHours: "76.2",
        clientAmount: "1324.4",
        staffAmount: "324.4",
        diff: "1000"
    },
]