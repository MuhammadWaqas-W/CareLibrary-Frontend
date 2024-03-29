import allTicketsIcon from "../../assets/icons/ItHelpDesk/allTickets.svg";
import pendingTicketsIcon from "../../assets/icons/ItHelpDesk/pendingTickets.svg";
import onHoldTicketsIcon from "../../assets/icons/ItHelpDesk/onHoldTickets.svg";
import closedTicketsIcon from "../../assets/icons/ItHelpDesk/closedTickets.svg";
import resolvedTicketsIcon from "../../assets/icons/ItHelpDesk/resolvedTickets.svg";

export interface ticketsSummary {
  id: string;
  ticketStatus: string;
  ticketCount: string;
  images: string;
  backgroundColor: string;
  pathQuery: string;
  // path:string;
}
export interface ticketsSummaryDetail {
  id: string;
  list: string;
  queryName: string;
}
export interface optionData {
  // id: string;
  value: string;
  label: string;
}
export const ticketsSummary: ticketsSummary[] = [
  {
    id: "1",
    ticketStatus: "All Tickets",
    ticketCount: "1300",
    images: allTicketsIcon,
    backgroundColor: "rgba(245, 184, 35,0.1)",
    pathQuery: "all-tickets",
    // path:"all-tickets"
  },
  {
    id: "2",
    ticketStatus: "Pending Tickets",
    ticketCount: "53",
    images: pendingTicketsIcon,
    backgroundColor: "rgba(102, 205, 238,0.1)",
    pathQuery: "pending-tickets",
    // path:"pending-tickets"
  },
  {
    id: "3",
    ticketStatus: "Onhold Tickets",
    ticketCount: "5,250.90",
    images: onHoldTicketsIcon,
    backgroundColor: "rgba(66, 122, 10,0.1)",
    pathQuery: "onhold-tickets",

    // path:"hold-tickets"
  },
  {
    id: "4",
    ticketStatus: "Closed Tickets",
    ticketCount: "10,596.80",
    images: closedTicketsIcon,
    backgroundColor: "rgba(250, 95, 28,0.1)",
    pathQuery: "closed-tickets",
    // path:"closed-tickets"
  },
  {
    id: "5",
    ticketStatus: "Resolved Tickets",
    ticketCount: "0.00",
    images: resolvedTicketsIcon,
    backgroundColor: "rgba(26, 85, 175,0.1)",
    pathQuery: "resolved-tickets",
    // path:"resolved-tickets"
  },
];

export const ticketsSummaryAdminlList: ticketsSummaryDetail[] = [
  
  {
    id: "6",
    list: "My Tickets",
    queryName: "all-tickets",
  },
  {
    id: "2",
    list: "Pending",
    queryName: "pending-tickets",
  },
  {
    id: "3",
    list: "Onhold",
    queryName: "onhold-tickets",
  },
  {
    id: "4",
    list: "Resolved",
    queryName: "resolved-tickets",
  },
  {
    id: "5",
    list: "Closed",
    queryName: "closed-tickets",
  },
];
export const ticketsSummaryDetailList: ticketsSummaryDetail[] = [
  {
    id: "1",
    list: "All Tickets",
    queryName: "all-tickets",
  },
  {
    id: "6",
    list: "My Tickets",
    queryName: "all-tickets",
  },
  {
    id: "2",
    list: "Pending",
    queryName: "pending-tickets",
  },
  {
    id: "3",
    list: "Onhold",
    queryName: "onhold-tickets",
  },
  {
    id: "4",
    list: "Resolved",
    queryName: "resolved-tickets",
  },
  {
    id: "5",
    list: "Closed",
    queryName: "closed-tickets",
  },
];

// dashbaord table data start here
export interface DashboardTableData {
  key: React.Key;
  srNo: string;
  ticket: string;
  ticketDescription: string;
  initiatedBy: string;
  initiatedDate:string;
  priority: string;
}
export const dashbaordTableDataContent: DashboardTableData[] = [
  {
    key: "1",
    srNo: "01",
    ticket: "13431",
    ticketDescription: "Lorem Ipsum",
    initiatedBy: "Xyz User",
    initiatedDate:"10-30-2022",
    priority: "High",
  },
  {
    key: "2",
    srNo: "03",
    ticket: "13431",
    ticketDescription: "Lorem Ipsum",
    initiatedBy: "Xyz User",
    initiatedDate:"10-30-2022",
    priority: "High",
  },
];

// ticket summary detail table data start here
export interface ItHelpDeskSummaryCommonTableData {
  key: React.Key;
  srNo: string;
  ticketNO: string;
  subject: string;
  ticketDescription: string;
  ticketStatus:string;
  initiatedBy: string;
  initiatedDate: string;
  reportedBy: string;
  date: string;
  priority: string;
  assignedTo: string;
  responseAdded: string;
  status: string;
  comment: string;
  attachment: string;
  action:""
}
export const itHelpDeskSummaryCommonTableData: ItHelpDeskSummaryCommonTableData[] =
  [
    {
      key: "1",
      srNo: "01",
      ticketNO: "112233",
      subject: "Connection Error",
      ticketDescription: "Lorem Ipsum",
      ticketStatus:"",
      initiatedBy: "XYZ USER",
      initiatedDate: "02/04/2022",
      assignedTo: "unassigned",
      comment: "",
      attachment: "",
      reportedBy: "Tim Horton",
      date: "05/12/2022",
      priority: "High",
      responseAdded: "yes",
      status: "Resolved",
      action:""
      
    },
    {
      key: "2",
      srNo: "02",
      ticketNO: "112233",
      subject: "Connection Error",
      ticketDescription: "Lorem Ipsum",
      ticketStatus:"",
      initiatedBy: "XYZ USER",
      initiatedDate: "02/04/2022",
      assignedTo: "unassigned",
      comment: "",
      attachment: "",
      reportedBy: "Tim Horton",
      date: "05/12/2022",
      priority: "High",
      responseAdded: "yes",
      status: "Resolved",
      action:""
      
    },
    {
      key: "3",
      srNo: "03",
      ticketNO: "112233",
      subject: "Connection Error",
      ticketDescription: "Lorem Ipsum",
      ticketStatus:"",
      initiatedBy: "XYZ USER",
      initiatedDate: "02/04/2022",
      assignedTo: "unassigned",
      comment: "",
      attachment: "",
      reportedBy: "Tim Horton",
      date: "05/12/2022",
      priority: "High",
      responseAdded: "yes",
      status: "Resolved",
      action:""
      
    },
    {
      key: "4",
      srNo: "04",
      ticketNO: "112234",
      subject: "System Information",
      ticketDescription: "Lorem Ipsum",
      ticketStatus:"",
      initiatedBy: "XYZ USER",
      initiatedDate: "02/04/2022",
      assignedTo: "unassigned",
      comment: "",
      attachment: "",
      reportedBy: "Tim Horton",
      date: "05/12/2022",
      priority: "low",
      responseAdded: "yes",
      status: "Pending",
      action:""
      
    },
    {
      key: "5",
      srNo: "05",
      ticketNO: "112233",
      subject: "Connection Error",
      ticketDescription: "Lorem Ipsum",
      ticketStatus:"",
      initiatedBy: "XYZ USER",
      initiatedDate: "02/04/2022",
      assignedTo: "unassigned",
      comment: "",
      attachment: "",
      reportedBy: "Tim Horton",
      date: "05/12/2022",
      priority: "normal",
      responseAdded: "no",
      status: "Closed",
      action:""
      
    },
    {
      key: "6",
      srNo: "06",
      ticketNO: "112233",
      subject: "Connection Error",
      ticketDescription: "Lorem Ipsum",
      ticketStatus:"",
      initiatedBy: "XYZ USER",
      initiatedDate: "02/04/2022",
      assignedTo: "unassigned",
      comment: "",
      attachment: "",
      reportedBy: "Tim Horton",
      date: "05/12/2022",
      priority: "normal",
      responseAdded: "no",
      status: "Onhold",
      action:""
      
    },
    {
      key: "7",
      srNo: "07",
      ticketNO: "112233",
      subject: "Connection Error",
      ticketDescription: "Lorem Ipsum",
      ticketStatus:"",
      initiatedBy: "XYZ USER",
      initiatedDate: "02/04/2022",
      assignedTo: "unassigned",
      comment: "",
      attachment: "",
      reportedBy: "Tim Horton",
      date: "05/12/2022",
      priority: "normal",
      responseAdded: "no",
      status: "Onhold",
      action:""
      
    },
    {
      key: "8",
      srNo: "08",
      ticketNO: "112233",
      subject: "Connection Error",
      ticketDescription: "Lorem Ipsum",
      ticketStatus:"",
      initiatedBy: "XYZ USER",
      initiatedDate: "02/04/2022",
      assignedTo: "unassigned",
      comment: "",
      attachment: "",
      reportedBy: "Tim Horton",
      date: "05/12/2022",
      priority: "normal",
      responseAdded: "no",
      status: "Onhold",
      action:""
      
    },
    {
      key: "9",
      srNo: "09",
      ticketNO: "112233",
      subject: "Connection Error",
      ticketDescription: "Lorem Ipsum",
      ticketStatus:"",
      initiatedBy: "XYZ USER",
      initiatedDate: "02/04/2022",
      assignedTo: "unassigned",
      comment: "",
      attachment: "",
      reportedBy: "Tim Horton",
      date: "05/12/2022",
      priority: "normal",
      responseAdded: "no",
      status: "Pending",
      action:""
      
    },
    {
      key: "10",
      srNo: "10",
      ticketNO: "112233",
      subject: "Connection Error",
      ticketDescription: "Lorem Ipsum",
      ticketStatus:"",
      initiatedBy: "XYZ USER",
      initiatedDate: "02/04/2022",
      assignedTo: "unassigned",
      comment: "",
      attachment: "",
      reportedBy: "Tim Horton",
      date: "05/12/2022",
      priority: "normal",
      responseAdded: "no",
      status: "Pending",
      action:""
      
    },
    {
      key: "11",
      srNo: "11",
      ticketNO: "112233",
      subject: "Connection Error",
      ticketDescription: "Lorem Ipsum",
      ticketStatus:"",
      initiatedBy: "XYZ USER",
      initiatedDate: "02/04/2022",
      assignedTo: "unassigned",
      comment: "",
      attachment: "",
      reportedBy: "Tim Horton",
      date: "05/12/2022",
      priority: "normal",
      responseAdded: "no",
      status: "Closed",
      action:""
      
    },
    {
      key: "12",
      srNo: "12",
      ticketNO: "112233",
      subject: "Connection Error",
      ticketDescription: "Lorem Ipsum",
      ticketStatus:"",
      initiatedBy: "XYZ USER",
      initiatedDate: "02/04/2022",
      assignedTo: "unassigned",
      comment: "",
      attachment: "",
      reportedBy: "Tim Horton",
      date: "05/12/2022",
      priority: "normal",
      responseAdded: "no",
      status: "Closed",
      action:""
      
    },
  ];


  export interface OptionData {
    value: string;
    label: string;
  }
  export interface AssignToData {
    id:string,
    firstName:string;
    lastName:string;
  }
  
  export interface ItHelpDeskSuperAdminData {
    key: string;
    srNo: string;
    ticketNO: string;
    subject: string;
    ticketDescription: string;
    ticketStatus: OptionData[];
    initiatedBy: string;
    initiatedDate: string;
    priority: string;
    assignedTo: string;
    comment: string;
    attachment: string;
    action: string;
  }
  
 export const ItHelpDeskSuperAdminTable: ItHelpDeskSuperAdminData[] = [
    {
      key: "1",
      srNo: "01",
      ticketNO: "112233",
      subject: "Connection Erdfsror",
      ticketDescription: "Lorem Ipsum",
      ticketStatus: [
        {
          value: "Pending",
          label: "Pending",
        },
        {
          value: "All tickets",
          label: "All tickets",
        },
        // Add more options here
      ],
      initiatedBy: "XYZ USER",
      initiatedDate: "02/04/2022",
      priority: "high",
      assignedTo: "unassigned",
      comment: "",
      attachment: "",
      action: "",
    },
    {
      key: "2",
      srNo: "02",
      ticketNO: "112233",
      subject: "Connection Erdfsror",
      ticketDescription: "Lorem Ipsum",
      ticketStatus: [
        {
          value: "OnHold",
          label: "OnHold",
        },
        // Add more options here
      ],
      initiatedBy: "XYZ USER",
      initiatedDate: "02/04/2022",
      priority: "high",
      assignedTo: "unassigned",
      comment: "",
      attachment: "",
      action: "",
    },
  ];



  export const optionsTicketmock:optionData[]= [
    {
        value: "Pending",
        label: "Pending",
    },
    {
        value: "All tickets",
        label: "All tickets",
    },
    {
        value: "Resolved",
        label: "Resolved",
    },
    {
        value: "Closed",
        label: "Closed",
    },
    {
        value: "OnHold",
        label: "OnHold",
    },
]
  export const optionsReportedBymock:optionData[]= [
    {
        value: "first User",
        label: "first User",
    },
    {
        value: "users",
        label: "users",
    },
]
  export const optionsPrioritymock:optionData[]= [
    {
        value: "High",
        label: "High",
    },
    {
        value: "Medium",
        label: "Medium",
    },
    {
        value: "Low",
        label: "Low",
    },
]
  export const assignToList:AssignToData[]= [
    {
        id: "1",
        firstName: "Aaron",
        lastName:"John"
    },
    {
        id: "2",
        firstName: "Account",
        lastName:"Ahmed"
    },
    {
      id: "3",
      firstName: "Afridi",
      lastName:"Muhammad"
    },
    {
      id: "4",
      firstName: "Ajmal",
      lastName:"Frhan"
    },
    {
      id: "5",
      firstName: "Best",
      lastName:"Wayne"
    },
    {
      id: "6",
      firstName: "Ali",
      lastName:"Arham"
    },
    {
      id: "7",
      firstName: "Brown",
      lastName:"Newel"
    },
    {
      id: "8",
      firstName: "Aakel",
      lastName:"Momna"
    },
  ]
