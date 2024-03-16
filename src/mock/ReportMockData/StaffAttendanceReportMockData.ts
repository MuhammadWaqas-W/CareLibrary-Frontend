
// Interface
import { attendanceReportDetailsMockDataInterface, commonReportFiltersInterface, staffAttendanceReportMockDataInterface } from "../../types/ReportsInterface";

// Assets
import harryJoseph2Img from "../../assets/images/MockImages/harry-joseph-2.png";
import harryJosephImg from "../../assets/images/MockImages/harry-joseph.png";
import jittuJoseph2Img from "../../assets/images/MockImages/jittu-joseph-2.png";
import jittuJosephImg from "../../assets/images/MockImages/jittu-joseph.png";
import sallyBreayImg from "../../assets/images/MockImages/sally-breay.png";
import abidMustafaImg from "../../assets/images/MockImages/abid-mustafa.png";
import abidMustafa2Img from "../../assets/images/MockImages/abid-mustafa-2.png";



// Filters Array 
export const StaffAttendanceReportFilters: commonReportFiltersInterface[] = [
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
export const StaffAttendanceReportMockData: staffAttendanceReportMockDataInterface[] = [
    {
        key: "01",
        staffName: "Ali Rehman",
        staffImg: harryJoseph2Img,
        clientName: "Syed Nizam",
        shiftDate: "Fri - May-13, 2021",
        shiftName: "Night Shift",
        totalHours: "07:56:56",
        outOfOfficeHours: "00:00:00",
    },
    {
        key: "02",
        staffName: "Maaz Khan",
        staffImg: jittuJoseph2Img,
        clientName: "Aesa Khan",
        shiftDate: "Sat - May-14, 2021",
        shiftName: "Late Shift",
        totalHours: "07:56:56",
        outOfOfficeHours: "00:00:00",
    },
    {
        key: "03",
        staffName: "Usama",
        staffImg: harryJosephImg,
        clientName: "Aesa Khan",
        shiftDate: "Sat - May-14, 2021",
        shiftName: "Late Shift",
        totalHours: "07:56:56",
        outOfOfficeHours: "00:00:00",
    },
    {
        key: "04",
        staffName: "Maaz Khan",
        staffImg: jittuJosephImg,
        clientName: "Aesa Khan",
        shiftDate: "Sat - May-14, 2021",
        shiftName: "Night Shift",
        totalHours: "07:56:56",
        outOfOfficeHours: "00:00:00",
    },
    {
        key: "05",
        staffName: "Maaz Khan",
        staffImg: sallyBreayImg,
        clientName: "Aesa Khan",
        shiftDate: "Sat - May-14, 2021",
        shiftName: "Day Shift",
        totalHours: "07:56:56",
        outOfOfficeHours: "00:00:00",
    },
    {
        key: "06",
        staffName: "Maaz Khan",
        staffImg: abidMustafaImg,
        clientName: "Aesa Khan",
        shiftDate: "Sat - May-14, 2021",
        shiftName: "Late Shift",
        totalHours: "07:56:56",
        outOfOfficeHours: "00:00:00",
    },
    {
        key: "07",
        staffName: "Maaz Khan",
        staffImg: abidMustafa2Img,
        clientName: "Aesa Khan",
        shiftDate: "Sat - May-14, 2021",
        shiftName: "Day Shift",
        totalHours: "07:56:56",
        outOfOfficeHours: "00:00:00",
    },
]

// Attendance Report Details Mock Data
export const AttendanceReportDetailsMockData: attendanceReportDetailsMockDataInterface[] = [
    {
        key: "01",
        date: "05 / 02 / 2021",
        day: "Monday",
        time: "12 : 42 : 48",
        checkInOut: "In",
        actualHours: "05: 03: 46",
        salaryHours: "05: 03: 46",
    },
    {
        key: "02",
        date: "05 / 03 / 2021",
        day: "Tuesday",
        time: "17 : 46 : 34",
        checkInOut: "Out",
        actualHours: "",
        salaryHours: "00: 00: 00",
    },
    {
        key: "03",
        date: "05 / 02 / 2021",
        day: "Monday",
        time: "18 : 19 : 52",
        checkInOut: "In",
        actualHours: "02 : 02: 49",
        salaryHours: "00 : 00: 00",
    },
]