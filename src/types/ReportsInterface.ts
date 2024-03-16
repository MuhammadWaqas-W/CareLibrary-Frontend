// Main Report Page Cards Interface

import React from "react";

export interface adminReportsDataInterface {
    id: string;
    icon: string;
    title: string;
    desc: string;
    allowdedRoles: string[];
    navigateTo: string;
}

// Report Common Filter Interface
export interface commonReportFiltersOptionsInterface {
    label: string;
    value: string;
}
export interface commonReportFiltersInterface {
    key: string;
    labelName: string;
    placeholder: string;
    optionsArray: commonReportFiltersOptionsInterface[];
}


// Report Common Filter Options Interface 
export interface reportCommonFilterOptionsInterface {
    label: string;
    value: string
}

// Activity Reports Interface
export interface activityReportInterface {
    key: React.Key;
    activityDate: string;
    activityName: string;
    activityType: string;
    activityBy: string
}

// ################ Advance Staff Search Interface #################
export interface advanceStaffReportOptionsDataInterface {
    key: React.Key,
    label: string;
    value: string;
    disabled?: boolean;
}

export interface advanceStaffCardDataInterface {
    key: React.Key;
    profileImg: any;
    rating: string;
    title: string;
    tag: string;
    location: string;
    gmail: string;
    phoneNumber: string;
}

// ################ Carer Request Report Interface #################
export interface carerRequestReportMockDataInterface {
    key: React.Key,
    careHome: string,
    requestedByName: string,
    requestedByImg: string,
    requestType: string,
    requestedAt: string,
    reason: string,
    status: string,
}


// ################ Client Work History Report Interface #################
export interface clientWorkHistoryMockDataInterface {
    key: React.Key,
    shiftName: string,
    staffName: string,
    jobDate: string,
    workedHours: string,
    hourlyRate: string,
    shiftAmount: string,
    shiftStatus: string
}


// ################ Daily Shift Report Report Interface #################
export interface detailsShiftReportMockDataInterface {
    key: React.Key,
    staffName: string,
    shiftName: string,
    shiftStartTime: string,
}

export interface dailyShiftReportMockDataInterface {
    key: React.Key,
    clientName: string,
    bookedShifts: string,
    acceptedShifts: string,
    bookingPending: string,
}


// ################ Extra Hour Report Report Interface #################
export interface extraHoursReportTableMockDataInterface {
    key: React.Key,
    staffName: string,
    clientName: string,
    shiftName: string,
    firstCheckIn: string,
    lastCheckIn: string,
    extraHours: string,
    approvalStatus: string,
}


// ################ Gross Profit Loss Report Report Interface #################
export interface grossProfitLossReportMockDataInterface {
    key: React.Key,
    clientName: string,
    workedHours: string,
    clientAmount: string,
    staffAmount: string,
    diff: string
}


// ################ Payment Data Report Report Interface #################
export interface paymentDataReportMockDataInterface {
    key: React.Key,
    shiftDate: string,
    shiftDay: string,
    staffName: string,
    clientName: string,
    shiftType: string,
    designation: string,
    employeeStatus: string,
    totalHours: string,
    payRate: string,
    totalPayable: string,
    clientRate: string,
    totalReceivable: string,
}


// ################ Shift Booked Report Report Interface #################
export interface shiftBookedReportMockDataInterface {
    key: React.Key,
    clientName: string,
    staffType: string,
    shiftName: string,
    shiftDate: string,
    bookedBy: string,
    bookedAt: string,
    requestedBy: string
}
// ################ Shift Booking Report Report Interface #################
export interface shiftBookingReportMockDataInterface {
    key: React.Key,
    clientName: string,
    staffType: string,
    shiftName: string,
    shiftDate: string,
    bookedBy: string,
    bookedAt: string,
    requestedBy: string
}


// ################ Shift Cancel Report Report Interface #################
export interface shiftCancelReportMockDataInterface {
    key: React.Key,
    clientName: string,
    staffName: string,
    staffType: string,
    shiftDate: string,
    cancelledBy: string,
    cancelledAt: string,
    cancelReason: string,
}


// ################ Shift Cancel Report Report Interface #################
export interface shiftRateSettingMockDataInterface {
    key: React.Key,
    shiftName: string,
    startTime: string,
    endTime: string,
    date: string,
    clientShiftBreakPayStatus: string,
    clientShiftBreakTime: string,
    staffShiftBreakTimePayStatus: string,
    staffShiftBreakTime: string,
    paymentType: string,
    splitRateApplicable: string,
    taxVatApplicable: string,
    department: string,
    transportApplicable: string,
    transportType: string,
    transportClientRate: string,
    transportStaffRate: string,
    shiftBreakStaffInfo: string,
}


// ################ Staff Attendance Report Report Interface #################
export interface staffAttendanceReportMockDataInterface {
    key: React.Key,
    staffName: string,
    staffImg: string,
    clientName: string,
    shiftDate: string,
    shiftName: string,
    totalHours: string,
    outOfOfficeHours: string,
}

export interface attendanceReportDetailsMockDataInterface {
    key: React.Key,
    date: string,
    day: string,
    time: string,
    checkInOut: string,
    actualHours: string,
    salaryHours: string,
}


// ################ Staff Availability Sheet Interface #################
export interface staffAvailabilitySheetMockDataInterface {
    key: React.Key,
    displayImg: string,
    stafName: string,
    monday: string,
    tuesday: string,
    wednesday: string,
    thursday: string,
    friday: string,
    saturday: string,
    sunday: string,
}


export interface weekAvailabilityTableMockDataInterface {
    key: React.Key,
    staffImg: string,
    staffName: string,
    designation: string,
    mobileNumber: string,
    monday: string,
    tuesday: string,
    wednesday: string,
    thursday: string,
    friday: string,
    saturday: string,
    sunday: string,
}

export interface dailyAvaialabilityTableMockDataInterface {
    key: React.Key,
    staffImg: string,
    staffName: string,
    designation: string,
    mobileNumber: string,
    todayDate: string,
}

// ################ Staff Compliance Report Interface #################
export interface staffComplianceReportMockDataInterface {
    key: React.Key,
    certificateName: string,
    userType: string,
    issueDate: string,
    expiryDate: string
}


// ################ Staff Data Report Interface #################
export interface staffDataReportMockDataInterface {
    key: React.Key,
    staffName: string,
    staffType: string,
    gender: string,
    doj: string,
    dob: string,
    email: string,
    phone: string,
    staffBand: string,
    empStatus: string,
    profilePercentage: string,
    userStatus: string,
    visaType: string,
}


// ################ Staff Data Report Interface #################
export interface staffShiftHoursReportMockDataInterface {
    key: React.Key,
    name: string,
    email: string,
    phone: string,
    noOfShifts: string,
    workedHours: string
}


// ################ Staff Work Report Interface #################
export interface staffWorkHistoryReportMockDataInterface {
    key: React.Key,
    shiftName: string,
    clientName: string,
    shiftDate: string,
    shiftHours: string,
    hourlyRate: string,
    shiftAmount: string,
    invoiceNumber: string,
    shiftStatus: string,
    paymentDate: string,
}

// ################ Vaccination Report Mock Data Interface ##################
export interface vaccinationReportTableMockDataInterface {
    key: React.Key,
    staffName: string,
    email: string,
    phone: string,
    userType: string,
    userStatus: string,
    vaccinationName: string,
    vaccinationDate: string,
}



// ################ Vaccination Report Mock Data Interface ##################
export interface terminatedStaffMockDataInterface {
    key: React.Key,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    userRole: string,
    doj: string,
    reasonForLeaving: string,
    terminatedAt: string,
    terminatedBy: string,
}