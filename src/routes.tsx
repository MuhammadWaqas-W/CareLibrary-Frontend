import { FC, lazy, LazyExoticComponent, Suspense } from "react";
import { Navigate } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";

import Login from "./components/Authentication/Login";
import NotFound from "./components/Authentication/NotFound";
import SignUp from "./components/Authentication/SignUp";
import Unathorized from "./components/Authentication/Unathorized";


import CareCordinatorClientDetails from "./components/OnBoarding/CareCordinator/ClientDetails/ClientDetails";
import SystemPerformancePage from "./pages/SystemPerformance";
import RequireAuth from "./components/Authentication/RequireAuth";
import LoadingSvg from "../src/assets/Login/loader-icon.gif"
import { ROLES } from "./constants/Roles";


const Loadable = (Component: LazyExoticComponent<FC>) => (props: any) =>
(
  <Suspense fallback={<div className="d-flex justify-center align-center" style={{ height: "80vh" }}><img src={LoadingSvg} height={200} width={200} alt="LoadingSvg" /></div>}>
    <Component {...props} />
  </Suspense>
);
const ApiInventoryPage = Loadable(lazy(() => import("./pages/ApiInventory")));
const ManageUsersPage = Loadable(lazy(() => import("./pages/ManageUsers")));
const ReviewCareHomesPage = Loadable(lazy(() => import("./pages/Ratings")));
const ManageUsersTypesPage = Loadable(lazy(() => import("./pages/ManageUserTypes")));
const SuperAdminDashboardPage = Loadable(lazy(() => import("./pages/SuperAdminDashboard")));
const DashboardPage = Loadable(lazy(() => import("./pages/Dashboard")));
const CarerDashboardPage = Loadable(lazy(() => import("./pages/CarerDashboard")));
const OverAllRatingsPage = Loadable(lazy(() => import("./pages/OverAllRatings")));
const ClientManagerPage = Loadable(lazy(() => import("./pages/ClientManager")));
const ClientRegistration = Loadable(lazy(() => import("./components/ClientManager/ClientInformation/ClientRegistration")));
const ManageGroups = Loadable(lazy(() => import("./components/ClientManager/ManageGroups/ManageGroups")));


//Onboarding
const CarerPage = Loadable(lazy(() => import("./pages/OnboardingPages/Carer")));
const CareCoordinatorPage = Loadable(lazy(() => import("./pages/OnboardingPages/CareCoordinator")));
const TrainingInstructorPage = Loadable(lazy(() => import("./pages/OnboardingPages/TrainingInstructor")));

const CarerEditProfilePage = Loadable(lazy(() => import("./pages/OnboardingPages/Carer/EditProfile")));
const CareCoordinatorEditProfilePage = Loadable(lazy(() => import("./pages/OnboardingPages/CareCoordinator/EditProfile")));
const TraingingInstructorEditProfilePage = Loadable(lazy(() => import("./pages/OnboardingPages/TrainingInstructor/EditProfile")));

//profile

const InstructorProfilePage = Loadable(lazy(() => import("./pages/InstructorProfile")));
const CarerProfilePage = Loadable(lazy(() => import("./pages/CarerProfile")));
const CarerCoordinatorProfilePage = Loadable(lazy(() => import("./pages/CareCoordinatorProfile")));
const ClientProfilePage = Loadable(lazy(() => import("./pages/ClientProfile")));

const InvoiceCoordinatorPage = Loadable(lazy(() => import("./components/Finance/Invoice/InvoiceDetails/InvoiceCareHome")));
const InvoiceWeeksPage = Loadable(lazy(() => import("./components/Finance/Invoice/InvoiceDetails/InvoiceWeeks")));
const InvoiceWeeksDetailPage = Loadable(lazy(() => import("./components/Finance/Invoice/InvoiceDetails/InvoiceWeekDetail")));
const InvoiceStaffDetailPage = Loadable(lazy(() => import("./components/Finance/Invoice/InvoiceDetails/InvoiceStaffDetail")));

const StaffManagerPage = Loadable(lazy(() => import("./pages/StaffManager")));
const AvailabilityCalendar = Loadable(
  lazy(() => import("./components/StaffManager/StaffSummary/StaffSummaryCard/AvailabilityCalendar/AvailabilityCalendar"))
);
const StaffManagerSummary = Loadable(lazy(() => import("./components/StaffManager/StaffSummary/StaffSummary")));
const StaffManagerOpenShift = Loadable(lazy(() => import("./components/StaffManager/StaffSummary/ShiftStatus/OpenShift/OpenShift")));
const StaffManagerTotalHours = Loadable(
  lazy(() => import("./components/StaffManager/StaffSummary/ShiftStatus/TotalHoursLifeTime/TotalHoursLifeTime"))
);
const StaffManagerConfirmedShift = Loadable(lazy(() => import("./components/StaffManager/StaffSummary/ShiftStatus/ConfirmedShift/ConfirmedShift")));
const StaffManagerTotalHoursMonth = Loadable(
  lazy(() => import("./components/StaffManager/StaffSummary/ShiftStatus/TotalHoursMonth/TotalHoursMonth"))
);
const StaffManagerCompletedShift = Loadable(lazy(() => import("./components/StaffManager/StaffSummary/ShiftStatus/CompletedShift/CompletedShift")));
const StaffAllocationPage = Loadable(lazy(() => import("./pages/StaffAllocation")));
const StaffBookingPage = Loadable(lazy(() => import("./pages/StaffBooking")));
const AvailableShift = Loadable(lazy(() => import("./components/StaffBooking/AvailableShift/AvailableShift")));
const UpComingShift = Loadable(lazy(() => import("./components/StaffBooking/UpComingShift/UpComingShift")));
const CompletedShift = Loadable(lazy(() => import("./components/StaffBooking/CompletedShift/CompletedShift")));
const WorkHistory = Loadable(lazy(() => import("./components/StaffBooking/WrokHistory/WorkHistory")));

const BookingCalenderPage = Loadable(lazy(() => import("./pages/BookingCalender")));
const StaffAvailabilityPage = Loadable(lazy(() => import("./components/BookingCalander/StaffAvailability/StaffAvailability")));
const ShiftManagerPage = Loadable(lazy(() => import("./pages/ShiftManager")));
const ShiftManagerDetails = Loadable(lazy(() => import("./components/ShiftManager/ShiftBooking/ShiftBooking")));
const ShiftManagerConfirmedShift = Loadable(lazy(() => import("./pages/ShiftManager/ConfirmedShift")));
const ShiftManagerUnfilledShift = Loadable(lazy(() => import("./pages/ShiftManager/UnfilledShift")));
const ShiftManagerUnPublishedShift = Loadable(lazy(() => import("./pages/ShiftManager/UnPublishedShift")));
const ShiftManagerBookStaff = Loadable(lazy(() => import("./pages/ShiftManager/UnPublishedShift/BookStaff")));
const UnpublishedShiftPage = Loadable(lazy(() => import("./pages/UnpublishedShift")));
const FinancePage = Loadable(lazy(() => import("./pages/FinancePages/Finance")));
const SetupPage = Loadable(lazy(() => import("./pages/FinancePages/Setup")));
const FinanceReportsPage = Loadable(lazy(() => import("./pages/FinancePages/Reports")));
const FinanceReportsStaffHoursPage = Loadable(lazy(() => import("./pages/FinancePages/Reports/StaffHours")));
const FinanceReportsNIPaymentPage = Loadable(lazy(() => import("./pages/FinancePages/Reports/NIPayment")));
const FinanceReportsNonNIPaymentPage = Loadable(lazy(() => import("./pages/FinancePages/Reports/NonNiPayment")));
const FinanceReportsLimitedPage = Loadable(lazy(() => import("./pages/FinancePages/Reports/Limited")));
const FinanceReportsShiftSummaryPage = Loadable(lazy(() => import("./pages/FinancePages/Reports/ShiftSummary")));
const FinanceReportsContractorPaymentPage = Loadable(lazy(() => import("./pages/FinancePages/Reports/ContractorPayment")));
const InvoicePage = Loadable(lazy(() => import("./pages/FinancePages/Invoice")));
const StaffPaymentDetailsPage = Loadable(lazy(() => import("./pages/FinancePages/StaffPaymentDetails")));
const ClientPaymentDetailsPage = Loadable(lazy(() => import("./pages/FinancePages/ClientPaymentDetails")));

// Reports and its Child Routes Starts Here
const ReportsMainPage = Loadable(lazy(() => import("./pages/ReportsPage")));
const ActivityReport = Loadable(lazy(() => import("./pages/ReportsPage/ActivityReport")));
const CarerReport = Loadable(lazy(() => import("./pages/ReportsPage/CarerReport")));
const ClientWork = Loadable(lazy(() => import("./pages/ReportsPage/ClientWork")));
const DailyShift = Loadable(lazy(() => import("./pages/ReportsPage/DailyShift")));
const ExtraHoursReport = Loadable(lazy(() => import("./pages/ReportsPage/ExtraHourReport")));
const GrossProfitLoss = Loadable(lazy(() => import("./pages/ReportsPage/GrossProfitLoss")));
const PaymentData = Loadable(lazy(() => import("./pages/ReportsPage/PaymentData")));
const ShiftBooked = Loadable(lazy(() => import("./pages/ReportsPage/ShiftBooked")));
const ShiftBooking = Loadable(lazy(() => import("./pages/ReportsPage/ShiftBooking")));
const ShiftCancelled = Loadable(lazy(() => import("./pages/ReportsPage/ShiftCancelled")));
const StaffData = Loadable(lazy(() => import("./pages/ReportsPage/StaffData")));
const ShiftRateSetting = Loadable(lazy(() => import("./pages/ReportsPage/ShiftRateSetting")));
const StaffAttendance = Loadable(lazy(() => import("./pages/ReportsPage/StaffAttendance")));
const StaffAvailability = Loadable(lazy(() => import("./pages/ReportsPage/StaffAvailability")));
const StaffCompliance = Loadable(lazy(() => import("./pages/ReportsPage/StaffCompliance")));
const StaffReport = Loadable(lazy(() => import("./pages/ReportsPage/StaffReport")));
const StaffShiftHours = Loadable(lazy(() => import("./pages/ReportsPage/StaffShiftHours")));
const StaffWork = Loadable(lazy(() => import("./pages/ReportsPage/StaffWork")));
const TerminatedStaff = Loadable(lazy(() => import("./pages/ReportsPage/TerminatedStaff")));
const Vaccination = Loadable(lazy(() => import("./pages/ReportsPage/Vaccination")));
const TrainingPage = Loadable(lazy(() => import("./pages/Training")));
const MyCoursesPage = Loadable(lazy(() => import("./pages/Training/MyCourses")));
const CourseDetailsPage = Loadable(lazy(() => import("./pages/Training/CourseDetails")));
const MyNotesPage = Loadable(lazy(() => import("./pages/Training/MyNotes")));
const MyResultsPage = Loadable(lazy(() => import("./pages/Training/MyResults")));
const CertificatePage = Loadable(lazy(() => import("./pages/Training/CourseCertificate")));
const AllCoursesPage = Loadable(lazy(() => import("./pages/Training/AllCourses")));
const CarerTrainingPage = Loadable(lazy(() => import("./pages/Training/CarerTraining")));
const InstructorDashboard = Loadable(lazy(() => import("./pages/InstructorDashboard")));
const ManageCourses = Loadable(lazy(() => import("./pages/ManageCourses")));
const CoursesDetail = Loadable(lazy(() => import("./components/ManageCourses/CourseDetail/CourseDetail")));
const AddCourses = Loadable(lazy(() => import("./components/ManageCourses/AddCourse/AddCourse")));
const TraineeInfo = Loadable(lazy(() => import("./pages/TraineeInfo")));
const TraineeCourses = Loadable(lazy(() => import("./components/TraineeInfo/TraineeCourses/TraineeCourses")));

const Webinars = Loadable(lazy(() => import("./pages/Webinars")));

const RequestedAttendees = Loadable(lazy(() => import("./components/Webinar/UpcomingWebinars/RequestedAttendees/RequestedAttendees")));

const WebinarHistory = Loadable(lazy(() => import("./components/Webinar/WebinarHistory/WebinarHistory")));
const ViewDetails = Loadable(lazy(() => import("./components/Webinar/WebinarHistory/ViewDetails/ViewDetails")));
const AddWebinar = Loadable(lazy(() => import("./components/Webinar/AddWebinar/AddWebinar")));

// Reports and its Child Routes Ends Here

const SettingsPage = Loadable(lazy(() => import("./pages/settingsPage")));
const FAQsPage = Loadable(lazy(() => import("./pages/HelpPages/FAQs")));
const BackUp = Loadable(lazy(() => import("./pages/BackUp")));
const AuditLogs = Loadable(lazy(() => import("./pages/AuditLogs")));
const ManageNotifications = Loadable(lazy(() => import("./pages/ManageNotifications/ManageNotifications")));
const RatingsFeedback = Loadable(lazy(() => import("./pages/RatingAndFeedback")));
const CoordinatorDashboard = Loadable(lazy(() => import("./pages/CareCoordinatorDashboard")));
const ItHelpDeskPage = Loadable(lazy(() => import("./pages/HelpPages/ItHelpDesk")));
const ItHelpDeskAllTicketsPage = Loadable(lazy(() => import("./pages/HelpPages/ItHelpDesk/AllTickets/AllTickets")));
// const ItHelpDeskPendingTicketsPage = Loadable(
//   lazy(() => import("./pages/HelpPages/ItHelpDesk/PendingTickets/PendingTickets"))
// );
// const ItHelpDeskOnHoldTicketsPage = Loadable(
//   lazy(() => import("./pages/HelpPages/ItHelpDesk/OnHoldTickets/OnHoldTickets"))
// );
// const ItHelpDeskClosedTicketsPage = Loadable(
//   lazy(() => import("./pages/HelpPages/ItHelpDesk/ClosedTickets/ClosedTickets"))
// );
// const ItHelpDeskResolvedTicketsPage = Loadable(
//   lazy(() => import("./pages/HelpPages/ItHelpDesk/ResolvedTickets/ResolvedTickets"))
// );
const ItHelpDeskSupportDashboard = Loadable(lazy(() => import("./pages/HelpPages/ItHelpDesk/SupportDashboard/SupportDashboard")));
const KeyInfo = Loadable(lazy(() => import("./pages/settingsPage/KeyInfo")));
const JobRole = Loadable(lazy(() => import("./pages/settingsPage/JobRole")));
const ShiftTimeSettings = Loadable(lazy(() => import("./pages/settingsPage/ShiftTimeSettings")));
const StaffSettings = Loadable(lazy(() => import("./pages/settingsPage/StaffSettings")));
const BankHolidays = Loadable(lazy(() => import("./pages/settingsPage/BankHolidays")));
const DBSConfiguration = Loadable(lazy(() => import("./pages/settingsPage/DBSConfiguration")));
const EmailNotification = Loadable(lazy(() => import("./pages/settingsPage/EmailNotification")));
const ResetEmailPhone = Loadable(lazy(() => import("./pages/settingsPage/ResetEmailPhone")));
const WeekStartDay = Loadable(lazy(() => import("./pages/settingsPage/WeekStartDay")));
const FestivalDayGreeting = Loadable(lazy(() => import("./pages/settingsPage/FestivalDayGreeting")));
const BreakTime = Loadable(lazy(() => import("./pages/settingsPage/BreakTime")));
const ChangePassword = Loadable(lazy(() => import("./pages/settingsPage/ChangePassword")));
const ElectronicAttendanceMonitoring = Loadable(
  lazy(() => import("./pages/settingsPage/ElectronicAttendanceMonitoring"))
);

// client
const ClientBookingCalendar = Loadable(lazy(() => import("./pages/ClientBookingCalendar")));
const ClientCalendarShiftDetails = Loadable(lazy(() => import("./components/ClientBookingCalendar/BookingShiftDetails/BookingShiftDetails")));
const ClientUserManagement = Loadable(lazy(() => import("./pages/ClientUserManagement")));
const ClientPreferences = Loadable(lazy(() => import("./pages/ClientPreferences")));
const ClientDashboard = Loadable(lazy(() => import("./pages/ClientDashboard")));

const AvailableShifts = Loadable(lazy(() => import("./pages/ShiftDetails/AvailableShifts")));
const UpcomingShifts = Loadable(lazy(() => import("./pages/ShiftDetails/UpcomingShifts")));
const CompletedShifts = Loadable(lazy(() => import("./pages/ShiftDetails/CompletedShifts")));
const CancelledShifts = Loadable(lazy(() => import("./pages/ShiftDetails/CancelledShifts")));
const CarerMyCalendarPage = Loadable(lazy(() => import("./pages/CarerMyCalendar")));

// Client Manage Shift
const ClientRequestedShifts = Loadable(lazy(() => import("./pages/ClientManageShift/ClientRequestedShift")));
const ClientUpcomingShifts = Loadable(lazy(() => import("./pages/ClientManageShift/ClientUpcomingShift")));
const ClientCompletedShifts = Loadable(lazy(() => import("./pages/ClientManageShift/ClientCompletedShift")));
const ClientSignOffShifts = Loadable(lazy(() => import("./pages/ClientManageShift/ClientSignOffShift")));

const SystemPerformance = Loadable(lazy(() => import("./pages/SystemPerformance")));

export const routes: any = [
  { path: "/", element: <Navigate to="dashboard" /> },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "unauthorized",
    element: <Unathorized />,
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "super-admin-dashboard",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <SuperAdminDashboardPage />
          </RequireAuth>
        ),
      },
      {
        path: "dashboard",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <DashboardPage />
          </RequireAuth>
        ),
      },
      {
        path: "coordinator-dashboard",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <CoordinatorDashboard />
          </RequireAuth>
        ),
      },
      {
        path: "carer-dashboard",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <CarerDashboardPage />
          </RequireAuth>
        ),
      },
      {
        path: "carer-my-calendar",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <CarerMyCalendarPage />
          </RequireAuth>
        ),
      },
      {
        path: "",
        children: [
          {
            path: "shift-details/available-shifts",
            element: (
              // Adimin will be remove once carer role created
              <RequireAuth allowedRoles={[ROLES.admin, ROLES.carer]}>
                <AvailableShifts />
              </RequireAuth>
            ),
          },

          {
            path: "shift-details/upcoming-shifts",
            element: (
              // Adimin will be remove once carer role created
              <RequireAuth allowedRoles={[ROLES.admin, ROLES.carer]}>
                <UpcomingShifts />
              </RequireAuth>
            ),
          },

          {
            path: "shift-details/completed-shifts",
            element: (
              // Adimin will be remove once carer role created
              <RequireAuth allowedRoles={[ROLES.admin, ROLES.carer]}>
                <CompletedShifts />
              </RequireAuth>
            ),
          },

          {
            path: "shift-details/cancelled-shifts",
            element: (
              // Adimin will be remove once carer role created
              <RequireAuth allowedRoles={[ROLES.admin, ROLES.carer]}>
                <CancelledShifts />
              </RequireAuth>
            ),
          },
        ],
      },
      // SystemPerformance

      {
        path: "system-performance",
        children: [
          {
            path: "",
            element: (
              // Adimin will be remove once Super Admin role created
              <RequireAuth allowedRoles={[ROLES.admin, ROLES.superAdmin]}>
                <SystemPerformance />
              </RequireAuth>
            ),
          },
        ],
      },

      {
        path: "",
        children: [
          {
            path: "manage-user",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <ManageUsersTypesPage />
              </RequireAuth>
            ),
          },
          {
            path: "manage-user/admin",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <ManageUsersPage />
              </RequireAuth>
            ),
          },
          {
            path: "manage-user/carer",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <InvoicePage />
              </RequireAuth>
            ),
          },
          {
            path: "manage-user/carer-cordinator",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <StaffPaymentDetailsPage />
              </RequireAuth>
            ),
          },
          {
            path: "manage-user/client",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <ClientPaymentDetailsPage />
              </RequireAuth>
            ),
          },
          {
            path: "manage-user/agency-admin",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <FinanceReportsPage />
              </RequireAuth>
            ),
          },
        ],
      },
      {
        path: "client-manager",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <ClientManagerPage />
          </RequireAuth>
        ),
      },
      {
        path: "client-manager/client-registration/:id",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <ClientRegistration />
          </RequireAuth>
        ),
      },
      {
        path: "client-manager/manage-groups",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <ManageGroups />
          </RequireAuth>
        ),
      },
      {
        path: "instructor-profile",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            < InstructorProfilePage />
          </RequireAuth>
        ),
      },

      {
        path: "client-profile",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <ClientProfilePage />
          </RequireAuth>
        ),
      },
      {
        path: "carer-profile",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            < CarerProfilePage />
          </RequireAuth>
        ),
      },
      {
        path: "care-coordinator-profile",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <CarerCoordinatorProfilePage />
          </RequireAuth>
        ),
      },


      {
        path: "",
        children: [
          {
            path: "onboarding/carer",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <CarerPage />
              </RequireAuth>
            ),
          },
          {
            path: "onboarding/carer/edit-profile/:id",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <CarerEditProfilePage />
              </RequireAuth>
            ),
          },
          {
            path: "onboarding/care-coordinator/edit-profile/:id",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <CareCoordinatorEditProfilePage />
              </RequireAuth>
            ),
          },
          {
            path: "onboarding/training-instructor/edit-profile/:id",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <TraingingInstructorEditProfilePage />
              </RequireAuth>
            ),
          },

          {
            path: "onboarding/care-coordinator/client-details",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <CareCordinatorClientDetails />
              </RequireAuth>
            ),
          },
          {
            path: "onboarding/care-coordinator",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <CareCoordinatorPage />
              </RequireAuth>
            ),
          },
          {
            path: "onboarding/training-instructor",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <TrainingInstructorPage />
              </RequireAuth>
            ),
          },
        ],
      },
      {
        path: "staff-manager",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <StaffManagerPage />
          </RequireAuth>
        ),
      },
      {
        path: "staff-manager/staff-summary/:id",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <StaffManagerSummary />
          </RequireAuth>
        ),
      },
      {
        path: "staff-manager/staff-summary/availability-calendar",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <AvailabilityCalendar />
          </RequireAuth>
        ),
      },
      {
        path: "staff-manager/staff-summary/open-shift",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <StaffManagerOpenShift />
          </RequireAuth>
        ),
      },
      {
        path: "staff-manager/staff-summary/total-hours-life-time",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <StaffManagerTotalHours />
          </RequireAuth>
        ),
      },
      {
        path: "staff-manager/staff-summary/confirmed-shift",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <StaffManagerConfirmedShift />
          </RequireAuth>
        ),
      },
      {
        path: "staff-manager/staff-summary/total-hours-month",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <StaffManagerTotalHoursMonth />
          </RequireAuth>
        ),
      },
      {
        path: "staff-manager/staff-summary/completed-shift",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <StaffManagerCompletedShift />
          </RequireAuth>
        ),
      },
      {
        path: "staff-allocation",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <StaffAllocationPage />
          </RequireAuth>
        ),
      },
      {
        path: "backup",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <BackUp />
          </RequireAuth>
        ),
      },
      {
        path: "audit-logs",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <AuditLogs />
          </RequireAuth>
        ),
      },
      {
        path: "ratings",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <RatingsFeedback />
          </RequireAuth>
        ),
      },
      {
        path: "notifications",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <ManageNotifications />
          </RequireAuth>
        ),
      },
      {
        path: "staff-booking",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <StaffBookingPage />
          </RequireAuth>
        ),
      },
      {
        path: "staff-booking/available-shift/:id",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <AvailableShift />
          </RequireAuth>
        ),
      },
      {
        path: "staff-booking/UpComing-shift/:id",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <UpComingShift />
          </RequireAuth>
        ),
      },
      {
        path: "staff-booking/completed-shift/:id",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <CompletedShift />
          </RequireAuth>
        ),
      },
      {
        path: "staff-booking/work-history/:id",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <WorkHistory />
          </RequireAuth>
        ),
      },
      {
        path: "instructor-dashboard",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <InstructorDashboard />
          </RequireAuth>
        ),
      },
      {
        path: "manage-courses",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <ManageCourses />
          </RequireAuth>
        ),
      },
      {
        path: "manage-courses/courses-detail/:id",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <CoursesDetail />
          </RequireAuth>
        ),
      },
      {
        path: "manage-courses/add-courses",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <AddCourses />
          </RequireAuth>
        ),
      },
      {
        path: "manage-courses/edit-course/:id",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <AddCourses />
          </RequireAuth>
        ),
      },
      {
        path: "webinar/upcomming-webinar",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <Webinars />
          </RequireAuth>
        ),
      },
      {
        path: "webinar/upcoming-webninar/requested-attendees/:id",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <RequestedAttendees />
          </RequireAuth>
        ),
      },
      {
        path: "webinar/webinar-history",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <WebinarHistory />
          </RequireAuth>
        ),
      },
      {
        path: "webinar/webinar-history/view-details/:id",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <ViewDetails />
          </RequireAuth>
        ),
      },
      {
        path: "webinar/add-webinar",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <AddWebinar />
          </RequireAuth>
        ),
      },
      {
        path: "webinar/edit-webinar/:id",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <AddWebinar />
          </RequireAuth>
        ),
      },
      {
        path: "webinar/:mode",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <AddWebinar />
          </RequireAuth>
        ),
      },
      {
        path: "",
        children: [
          {
            path: "training",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <TrainingPage />
              </RequireAuth>
            ),
          },
          {
            path: "training/my-courses",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <MyCoursesPage />
              </RequireAuth>
            ),
          },
          {
            path: "training/my-courses/:id",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <CourseDetailsPage />
              </RequireAuth>
            ),
          },
          {
            path: "training/all-courses",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <AllCoursesPage />
              </RequireAuth>
            ),
          },
          {
            path: "training/all-courses/:id",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <CoursesDetail />
              </RequireAuth>
            ),
          },
          {
            path: "training/carer-training",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <CarerTrainingPage />
              </RequireAuth>
            ),
          },
          {
            path: "training/my-notes",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <MyNotesPage />
              </RequireAuth>
            ),
          },
          {
            path: "training/my-results",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <MyResultsPage />
              </RequireAuth>
            ),
          },
          {
            path: "training/my-results/certificate/:id",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <CertificatePage />
              </RequireAuth>
            ),
          },
        ],
      },
      {
        path: "booking-calendar",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <BookingCalenderPage />
          </RequireAuth>
        ),
      },
      {
        path: "booking-calendar/staff-availability",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <StaffAvailabilityPage />
          </RequireAuth>
        ),
      },
      {
        path: "shift-manager",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <ShiftManagerPage />
          </RequireAuth>
        ),
      },
      {
        path: "shift-manager/:id",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <ShiftManagerDetails />
          </RequireAuth>
        ),
      },
      {
        path: "shift-manager/confirmed-shift",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <ShiftManagerConfirmedShift />
          </RequireAuth>
        ),
      },
      {
        path: "shift-manager/unfilled-shift",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <ShiftManagerUnfilledShift />
          </RequireAuth>
        ),
      },
      {
        path: "shift-manager/unpublished-shift",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <ShiftManagerUnPublishedShift />
          </RequireAuth>
        ),
      },
      {
        path: "unpublished-shift",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <UnpublishedShiftPage />
          </RequireAuth>
        ),
      },

      {
        path: "unpublished-shift/book-staff",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <ShiftManagerBookStaff />
          </RequireAuth>
        ),
      },
      {
        path: "",
        children: [
          {
            path: "finance",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <FinancePage />
              </RequireAuth>
            ),
          },
          {
            path: "finance/setup",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <SetupPage />
              </RequireAuth>
            ),
          },
          {
            path: "finance/invoice",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <InvoicePage />
              </RequireAuth>
            ),
          },
          {
            path: "finance/invoice/invoice-coordinator/:id",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <InvoiceCoordinatorPage />
              </RequireAuth>
            ),
          },
          {
            path: "finance/invoice/invoice-coordinator/week/:id",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <InvoiceWeeksPage />
              </RequireAuth>
            ),
          },
          {
            path: "finance/invoice/invoice-coordinator/week/detail/:id",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <InvoiceWeeksDetailPage />
              </RequireAuth>
            ),
          },
          {
            path: "finance/invoice/invoice-coordinator/week/detail/staff-detail/:id",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <InvoiceStaffDetailPage />
              </RequireAuth>
            ),
          },
          {
            path: "finance/staff-payment-details",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <StaffPaymentDetailsPage />
              </RequireAuth>
            ),
          },
          {
            path: "finance/client-payment-details",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <ClientPaymentDetailsPage />
              </RequireAuth>
            ),
          },
          {
            path: "",
            children: [
              {
                path: "finance/reports",
                element: (
                  <RequireAuth allowedRoles={[ROLES.admin]}>
                    <FinanceReportsPage />
                  </RequireAuth>
                ),
              },
              {
                path: "finance/reports/staff-hours-report",
                element: (
                  <RequireAuth allowedRoles={[ROLES.admin]}>
                    <FinanceReportsStaffHoursPage />
                  </RequireAuth>
                ),
              },
              {
                path: "finance/reports/ni-payment",
                element: (
                  <RequireAuth allowedRoles={[ROLES.admin]}>
                    <FinanceReportsNIPaymentPage />
                  </RequireAuth>
                ),
              },
              {
                path: "finance/reports/non-ni-payment",
                element: (
                  <RequireAuth allowedRoles={[ROLES.admin]}>
                    <FinanceReportsNonNIPaymentPage />
                  </RequireAuth>
                ),
              },
              {
                path: "finance/reports/limited",
                element: (
                  <RequireAuth allowedRoles={[ROLES.admin]}>
                    <FinanceReportsLimitedPage />
                  </RequireAuth>
                ),
              },
              {
                path: "finance/reports/shift-summary",
                element: (
                  <RequireAuth allowedRoles={[ROLES.admin]}>
                    <FinanceReportsShiftSummaryPage />
                  </RequireAuth>
                ),
              },
              {
                path: "finance/reports/contractor-payment",
                element: (
                  <RequireAuth allowedRoles={[ROLES.carer, ROLES.admin]}>
                    <FinanceReportsContractorPaymentPage />
                  </RequireAuth>
                ),
              },
            ]
          },
        ],
      },
      {
        path: "api-inventory",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <ApiInventoryPage />
          </RequireAuth>
        ),
      },
      {
        path: "performance",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <SystemPerformancePage />
          </RequireAuth>
        ),
      },
      {
        path: "trainee-info",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <TraineeInfo />
          </RequireAuth>
        ),
      },
      {
        path: "trainee-info/trainee-courses/:id",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <TraineeCourses />
          </RequireAuth>
        ),
      },
      {
        path: "trainee-info/trainee-courses/course-content/:id",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <CourseDetailsPage />
          </RequireAuth>
        ),
      },
      {
        path: "",
        children: [
          {
            path: "reports",
            element: (
              <RequireAuth allowedRoles={[ROLES.client, ROLES.carer, ROLES.instructor, ROLES.admin, ROLES.superAdmin]}>
                <ReportsMainPage />
              </RequireAuth>
            ),
          },
          {
            path: "reports/extra-hours-report",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <ExtraHoursReport />
              </RequireAuth>
            ),
          },
          {
            path: "reports/advance-staff-search",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <StaffReport />
              </RequireAuth>
            ),
          },
          {
            path: "reports/attendance-report",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <StaffAttendance />
              </RequireAuth>
            ),
          },
          {
            path: "reports/client-work-history",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <ClientWork />
              </RequireAuth>
            ),
          },
          {
            path: "reports/staff-work-history",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <StaffWork />
              </RequireAuth>
            ),
          },
          {
            path: "reports/gross-profit&loss",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <GrossProfitLoss />
              </RequireAuth>
            ),
          },
          {
            path: "reports/activity-report",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <ActivityReport />
              </RequireAuth>
            ),
          },
          {
            path: "",
            children: [
              {
                path: "reports/staff-availability-sheet",
                element: (
                  <RequireAuth allowedRoles={[ROLES.admin]}>
                    <StaffAvailability />
                  </RequireAuth>
                ),
              },
              {
                path: "reports/weekly-availability-sheet",
                element: (
                  <RequireAuth allowedRoles={[ROLES.admin]}>
                    <StaffAvailability />
                  </RequireAuth>
                ),
              },
              {
                path: "reports/daily-availability-sheet",
                element: (
                  <RequireAuth allowedRoles={[ROLES.admin]}>
                    <StaffAvailability />
                  </RequireAuth>
                ),
              },
            ],
          },
          {
            path: "reports/client-shift-details",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <ShiftRateSetting />
              </RequireAuth>
            ),
          },
          {
            path: "reports/shift-booking-report",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <ShiftBooking />
              </RequireAuth>
            ),
          },
          {
            path: "reports/terminated-staff-list",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <TerminatedStaff />
              </RequireAuth>
            ),
          },
          {
            path: "reports/staff-report",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <StaffShiftHours />
              </RequireAuth>
            ),
          },
          {
            path: "reports/compliance-report",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <StaffCompliance />
              </RequireAuth>
            ),
          },
          {
            path: "reports/payment-data",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <PaymentData />
              </RequireAuth>
            ),
          },
          {
            path: "reports/vaccination-report",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <Vaccination />
              </RequireAuth>
            ),
          },
          {
            path: "reports/carer-request",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <CarerReport />
              </RequireAuth>
            ),
          },
          {
            path: "reports/shift-cancelled-report",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <ShiftCancelled />
              </RequireAuth>
            ),
          },
          {
            path: "reports/shift-booked-report",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <ShiftBooked />
              </RequireAuth>
            ),
          },
          {
            path: "reports/staff-data-report",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <StaffData />
              </RequireAuth>
            ),
          },
          {
            path: "reports/daily-shift-report",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <DailyShift />
              </RequireAuth>
            ),
          },
        ],
      },
      {
        path: "",
        children: [
          {
            path: "ratings/reviewed",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <OverAllRatingsPage />
              </RequireAuth>
            ),
          },
          {
            path: "ratings/review-care-homes",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <ReviewCareHomesPage />
              </RequireAuth>
            ),
          },
        ],
      },

      {
        path: "",
        children: [
          {
            path: "settings",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <SettingsPage />
              </RequireAuth>
            ),
          },
          {
            path: "settings/Key-info",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <KeyInfo />
              </RequireAuth>
            ),
          },
          {
            path: "settings/job-role",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <JobRole />
              </RequireAuth>
            ),
          },
          {
            path: "settings/shift-time-settings",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <ShiftTimeSettings />
              </RequireAuth>
            ),
          },
          {
            path: "settings/staff-settings",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <StaffSettings />
              </RequireAuth>
            ),
          },
          {
            path: "settings/bank-holidays",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <BankHolidays />
              </RequireAuth>
            ),
          },
          {
            path: "settings/dbs-configuration",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <DBSConfiguration />
              </RequireAuth>
            ),
          },
          {
            path: "settings/email-notification",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <EmailNotification />
              </RequireAuth>
            ),
          },
          {
            path: "settings/reset-mail-Phone",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <ResetEmailPhone />
              </RequireAuth>
            ),
          },
          {
            path: "settings/week-start-day",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <WeekStartDay />
              </RequireAuth>
            ),
          },
          {
            path: "settings/festival-day-greeting",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <FestivalDayGreeting />
              </RequireAuth>
            ),
          },
          {
            path: "settings/break-time-settings",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <BreakTime />
              </RequireAuth>
            ),
          },
          {
            path: "settings/change-password",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <ChangePassword />
              </RequireAuth>
            ),
          },
          {
            path: "settings/electronic-attendance-monitoring",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <ElectronicAttendanceMonitoring />
              </RequireAuth>
            ),
          },
        ],
      },
      {
        path: "",
        children: [
          {
            path: "help/FAQs",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <FAQsPage />
              </RequireAuth>
            ),
          },
          {
            path: "",
            // element: (
            //   <RequireAuth>
            //     <ItHelpDeskPage />
            //   </RequireAuth>
            // ),
            children: [
              {
                path: "help/it-help-desk",
                element: (
                  <RequireAuth allowedRoles={[ROLES.admin]}>
                    <ItHelpDeskPage />
                  </RequireAuth>
                ),
              },
              {
                path: "help/it-help-desk/all-tickets/:id",
                element: (
                  <RequireAuth allowedRoles={[ROLES.admin]}>
                    <ItHelpDeskAllTicketsPage />
                  </RequireAuth>
                ),
              },
              // {
              //   path: "help/it-help-desk/pending-tickets",
              //   element: (
              //     <RequireAuth allowedRoles={[ROLES.admin]}>
              //       <ItHelpDeskPendingTicketsPage />
              //     </RequireAuth>
              //   ),
              // },
              // {
              //   path: "help/it-help-desk/hold-tickets",
              //   element: (
              //     <RequireAuth allowedRoles={[ROLES.admin]}>
              //       <ItHelpDeskOnHoldTicketsPage />
              //     </RequireAuth>
              //   ),
              // },
              // {
              //   path: "help/it-help-desk/closed-tickets",
              //   element: (
              //     <RequireAuth allowedRoles={[ROLES.admin]}>
              //       <ItHelpDeskClosedTicketsPage />
              //     </RequireAuth>
              //   ),
              // },
              // {
              //   path: "help/it-help-desk/resolved-tickets",
              //   element: (
              //     <RequireAuth allowedRoles={[ROLES.admin]}>
              //       <ItHelpDeskResolvedTicketsPage />
              //     </RequireAuth>
              //   ),
              // },
              {
                path: "help/it-help-desk/support-dashbaord",
                element: (
                  <RequireAuth allowedRoles={[ROLES.admin]}>
                    <ItHelpDeskSupportDashboard />
                  </RequireAuth>
                ),
              },
            ],
          },
        ],
      },
      //client
      {
        path: "",
        children: [
          {
            path: "client-booking-calendar",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <ClientBookingCalendar />
              </RequireAuth>
            ),
          },
          {
            path: "client-booking-calendar/:id",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <ClientCalendarShiftDetails />
              </RequireAuth>
            ),
          },
        ],
      },
      {
        path: "client-user-management",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <ClientUserManagement />
          </RequireAuth>
        ),
      },
      {
        path: "client-preferences",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin]}>
            <ClientPreferences />
          </RequireAuth>
        ),
      },
      {
        path: "client-dashboard",
        element: (
          <RequireAuth allowedRoles={[ROLES.client, ROLES.admin]}>
            <ClientDashboard />
          </RequireAuth>
        ),
      },
      // client manage shift
      {
        path: "",
        children: [
          {
            path: "client-requested-shift",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <ClientRequestedShifts />
              </RequireAuth>
            ),
          },
          {
            path: "client-upcoming-shift",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <ClientUpcomingShifts />
              </RequireAuth>
            ),
          },
          {
            path: "client-completed-shift",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <ClientCompletedShifts />
              </RequireAuth>
            ),
          },
          {
            path: "client-signoff-shift",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin]}>
                <ClientSignOffShifts />
              </RequireAuth>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
