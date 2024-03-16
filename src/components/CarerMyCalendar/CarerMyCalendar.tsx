import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import interactionPlugin from "@fullcalendar/interaction";
import ResourcePlugin from "@fullcalendar/resource";
import SearchIcon from "../../assets/images/OnBoarding/Search.svg";
import { Card, Input } from "antd";
import Sun from "../../assets/BookingCalander/images/sun.png";
import Menu from "../../assets/BookingCalander/images/menu.png";
import CarerMyCalendarFilter from "./CarerMyCalendarFilter/CarerMyCalendarFilter";
import ViewEventDetailsModal from "./ViewEventDetailsModal/ViewEventDetailsModal";
import './CarerMyCalendar.scss';

const CarerMyCalendar = () => {
  const [isViewModalOpen, setIsViewModalOpen] = useState<boolean>(false);
  const [eventClicked, setEventClicked] = useState({});

  const calendarSideColumns = [
    {
      id: "a",
      clientName: <span><strong>Monday</strong><br /><span>11/03/2023</span></span>,
      title: "Morning",
    },
    {
      id: "b",
      clientName: <span><strong>Tuesday</strong><br /><span>11/03/2023</span></span>,
      title: "Afternoon",
    },
    {
      id: "c",
      clientName: <span><strong>Wednesday</strong><br /><span>11/03/2023</span></span>,
      title: "Long Day",
    },
    {
      id: "d",
      clientName: <span><strong>Thursday</strong><br /><span>11/03/2023</span></span>,
      title: "",
    },
    {
      id: "e",
      clientName: <span><strong>Friday</strong><br /><span>11/03/2023</span></span>,
      title: "Night",
    },
    {
      id: "f",
      clientName: <span><strong>Saturday</strong><br /><span>11/03/2023</span></span>,
      title: "Morning",
    },
  ];
  const calanderEvents = [
    {
      id: "1",
      resourceIds: ["a"],
      title: "HCA",
      status: "unPublished",
      start: "2023-03-20T02:10:00",
      end: "2023-03-20T10:00:00",
    },
    {
      id: "2",
      resourceIds: ["b"],
      title: "HCA",
      status: "published",
      start: "2023-03-21T02:00:00",
      end: "2023-03-22T08:20:00",
    },
    {
      id: "3",
      resourceIds: ["c"],
      title: "HCA",
      status: "completed",
      start: "2023-03-20T09:00:00",
      end: "2023-03-21T10:20:00",
    },
    {
      id: "4",
      resourceIds: ["d"],
      title: "HCA",
      status: "Not Token",
      start: "2023-03-13T09:00:00",
      end: "2023-03-13T10:20:00",
    }]
  const handleSlotContent = (slotEvent: any) => {
    return (
      <>
        <div className="slot-event-wrapper">
          <p className="fs-14 fw-600 label-color">{slotEvent.text}</p>
        </div>
      </>
    );
  };
  const handleResourceRender = (info: any) => {
    const resource = info.resource._resource;
    return (
      <>
        <div className="resource-render-wrapper d-flex align-center">
          <div
            className="resource-render-content d-flex align-center cursor-pointer"
          >
            <label
              className="grey-color fs-14 fw-400 line-height-20 cursor-pointer"
              htmlFor={`${resource.id}`}
            >
              {resource.title}
            </label>
          </div>
        </div>
      </>
    );
  };

  const resourceGroupLabelContent = (info: any) => {
    const resource = info.resource._resource.extendedProps;
    return (
      <>
        <div className="resource-render-wrapper d-flex align-center">
          <div
            className="resource-render-content d-flex align-center cursor-pointer"
          // style={{ marginLeft: "25px" }}
          >
            {/* <img src={resource.clientImg} alt="user_mock" /> */}
            <label
              className="grey-color fs-14 fw-400 line-height-20 cursor-pointer"
              htmlFor={`${resource.id}`}
            >
              {resource.clientName}
            </label>
            <div className="resource">
              <h2></h2>
            </div>
          </div>
        </div>
      </>
    );
  };

  const eventContentHandler = (eventInfo: any) => {
    const { publicId, title } = eventInfo.event._def;
    return (
      <>
        <div className="carer-event-wrapper">
          <div className="event-icon d-flex align-center justify-between">
            <img src={Sun} alt="" />
            <img src={Menu} alt="" />
          </div>
          <div className="event-content">
            <h2 className="m-0 fs-14">{title}</h2>
            <p className="m-0 fs-10">7:15 am - 7:30 am</p>
          </div>
        </div>
      </>
    );
  };


  const resourceAreaColumns = [
    {
      group: true,
      field: "clientName",
      headerContent: "Date",
    },
    {
      field: "staffName",
      headerContent: "Slot",
    },
  ];

  return (
    <div className="carer-my-calendar-wrapper">
      <Card>
        <div className="d-flex align-center justify-between" style={{ flexWrap: "wrap", margin: "30px 0", gap: "10px", width: "100%" }}>
          <CarerMyCalendarFilter />

          <div className="input-search-wrapper" style={{ maxWidth: "100%" }}>
            <Input
              placeholder="search"
              style={{ width: "100%" }}
              prefix={<img src={SearchIcon} alt="search icon" className="icon" />}
            />
          </div>
        </div>
        <FullCalendar
          schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
          plugins={[
            resourceTimelinePlugin,
            interactionPlugin,
            dayGridPlugin,
            ResourcePlugin,
          ]}
          headerToolbar={false}
          initialView="resourceTimelineDay"
          resources={calendarSideColumns}
          events={calanderEvents}
          editable={true}
          height="68vh"
          droppable={true}
          slotMinWidth={50}
          resourceAreaWidth={300}
          eventContent={eventContentHandler}
          resourceAreaColumns={resourceAreaColumns}
          resourceLabelContent={handleResourceRender}
          resourceGroupLabelContent={resourceGroupLabelContent}
          slotDuration="01:00:00"
          slotLabelInterval="02:00:00"
          slotLabelContent={handleSlotContent}
          slotLabelFormat={[
            {
              hour: "numeric",
              // minute: "0-digit",
              omitZeroMinute: false,
              meridiem: "short",
            },
          ]}
          eventClick={(e) => { setIsViewModalOpen(true); setEventClicked(e) }}
        />
      </Card>
      {isViewModalOpen && <ViewEventDetailsModal isViewModalOpen={isViewModalOpen} setIsViewModalOpen={setIsViewModalOpen} eventClicked={eventClicked} />}
    </div>
  )
}

export default CarerMyCalendar