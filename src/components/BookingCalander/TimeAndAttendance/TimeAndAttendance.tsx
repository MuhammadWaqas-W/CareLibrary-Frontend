import { useState } from "react";
import { Avatar, Col, Input, Row } from "antd";
import { v4 as uuidv4 } from "uuid";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import interactionPlugin from "@fullcalendar/interaction";
import ResourcePlugin from "@fullcalendar/resource";
import SearchIcon from "../../../assets/BookingCalander/images/search.png";
import Sun from "../../../assets/BookingCalander/images/sun.png";
import Menu from "../../../assets/BookingCalander/images/menu.png";
import { timeAndAttendance, timeAttendanceCalanderEvents, } from "../../../mock/BookingCalander/BookingCalanderData";
import TimeAndAttendanceFilters from "./TimeAndAttendenceFilters/TimeAndAttendanceFilters";
import TimeAndAttendanceDetailsModal from "../BookingCalanderModals/TimeAndAttendanceDetails/TimeAndAttendanceDetailsModal";
import "./TimeAndAttendance.scss";

function TimeAndAttendance() {
  const [isAttendanceModalOpen, setIsAttendanceModalOpen] = useState(false);
  const calanderStatuses = [
    { title: "Not Token", color: "#98B7C9" },
    { title: "Early", color: "#FA9359" },
    { title: "On Time", color: "#65CDF0" },
    { title: "Late", color: "#FF7976" },
  ];
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
          <div className="resource-render-content d-flex align-center cursor-pointer">
            <Avatar src={resource.extendedProps.staffImg} alt="user_mock" />
            <label style={{ paddingLeft: '10px' }}
              className="grey-color fs-14 fw-400 line-height-20 cursor-pointer"
              htmlFor={`${resource.id}`} >
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
          <div className="resource-render-content d-flex align-center cursor-pointer">
            <Avatar src={resource.clientImg} alt="user_mock" />
            <label style={{ paddingLeft: '10px' }} className="grey-color fs-14 fw-400 line-height-20 cursor-pointer"
              htmlFor={`${resource.id}`}>
              {resource.clientName}
            </label>
          </div>
        </div>
      </>
    );
  };

  const eventContentHandler = (eventInfo: any) => {
    const event = eventInfo.event._def;
    const calanderStatuses: any = {
      "Not Token": "#98B7C9",
      "Early": "#FA9359",
      "On Time": "#65CDF0",
      "Late": "#FF7976",
    };
    return (
      <>
        <div className="event-grid">
          <div className="event-grid-item" style={{  backgroundColor: calanderStatuses[event?.extendedProps.status]}}>
            <div className="event-grid-content">
              <div className="event-header">
                <img src={Sun} alt="sun" />
                <img src={Menu} alt="menu" />
              </div>
              <div className="inner-content">
                <h2 className="fs-14 fw-400 m-0">{event.title}</h2>
                <p className="fs-10 fw-600 m-0">8:00 am to 3:00 pm</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const handleEventClick = (e: any) => {
    setIsAttendanceModalOpen(true);
  };
  const resourceAreaColumns = [
    {
      group: true,
      field: "clientName",
      headerContent: "Client Name",
    },
    {
      field: "staffName",
      headerContent: "Staff Name",
    },
  ];
  return (
    <div className="time-and-attendance">
      <Row gutter={[20, 20]} className="d-flex" style={{ justifyContent: "space-between" }}>
        <Col xs={24} md={24} xl={10}>
          <TimeAndAttendanceFilters />
        </Col>
        <Col xs={24} md={24} xl={6}>
          <div className="input-search-wrapper">
            <Input  placeholder="search" prefix={<img src={SearchIcon} alt="search icon" className="icon" />}/>
          </div>
        </Col>
        {/* Calander section starts here  */}
        <Col xs={24} md={20} className="calander-header-attendance" >
          <div className="status-wrapper d-flex">
            {calanderStatuses.map((data) => {
              return (
                <div key={uuidv4()} className='d-flex align-center box-wrapper'>
                  <div className="box" style={{ backgroundColor: `${data.color}` }} ></div>
                  <div className="status-title">
                    <span className="fs-12 label-color">{data.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Col>
        {isAttendanceModalOpen && (
          <TimeAndAttendanceDetailsModal
            isAttendanceModalOpen={isAttendanceModalOpen}
            setIsAttendanceModalOpen={setIsAttendanceModalOpen}
          />
        )}
        <Col xs={24} md={24} className="calander-main"> 
          <FullCalendar
            schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
            plugins={[ resourceTimelinePlugin, interactionPlugin, dayGridPlugin, ResourcePlugin]}
            headerToolbar={{ left: "", right: "", center: "" }}
            timeZone="UTC"
            initialView="resourceTimelineDay"
            resources={timeAndAttendance}
            events={timeAttendanceCalanderEvents}
            editable={false}
            droppable={false}
            slotMinWidth={50}
            resourceAreaWidth={350}
            eventContent={eventContentHandler}
            resourceAreaColumns={resourceAreaColumns}
            resourceLabelContent={handleResourceRender}
            resourceGroupLabelContent={resourceGroupLabelContent}
            slotDuration="01:00:00"
            slotLabelInterval="02:00:00"
            slotLabelContent={handleSlotContent}
            slotLabelFormat={[{ hour: "numeric",minute: "2-digit",omitZeroMinute: false,meridiem: "short"}]}
            eventClick={(e) => handleEventClick(e)}
          />
        </Col>
      </Row>
    </div>
  );
}

export default TimeAndAttendance;
