import { useState } from "react";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { Row, Col, Input, Button } from "antd";
import SearchIcon from "../../../assets/BookingCalander/images/search.png";
import AddModal from "../BookingCalanderModals/AddModal/AddModal";
import BookingCalanderFilters from "../BookingCalanderFilters/BookingCalanderFilters";
import { PlusOutlined } from "@ant-design/icons";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import interactionPlugin from "@fullcalendar/interaction";
import ResourcePlugin from "@fullcalendar/resource";
import { clientsData, calanderEvents} from "../../../mock/BookingCalander/BookingCalanderData";
import ShiftInfo from "../BookingCalanderModals/ShiftInfoModal/ShiftInfo";
import Sun from "../../../assets/BookingCalander/images/sun.png";
import Menu from "../../../assets/BookingCalander/images/menu.png";
import "./BookingCalanderTab.scss";

function BookingCalanderTab() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState({
    isToggle: false,
    data: {},
  });

  const calanderStatuses = [
    { title: "Unpublished Shifts", color: "#FA9359" },
    { title: "Confirmed by Staff", color: "#2BC155" },
    { title: "Completed by Staff", color: "#969BA0" },
    { title: "Directly Booked and Confirmed", color: "#65CDF0" },
    { title: "Directly Booked and Awaiting", color: "#8D6AB1" },
    { title: "Directly Booked", color: "#4E132C" },
    { title: "Open and Unconfirmed", color: "#5A8BA8" },
  ];
  const eventContentHandler = (eventInfo: any) => {
    const event = eventInfo.event._def;
    const eventId = event?.extendedProps?.status;

    const backgroundColor: any = {
      "Unpublished Shifts": "#FA9359",
      "Confirmed by Staff": "#2BC155",
      "Completed by Staff": "#969BA0",
      "Directly Booked and Confirmed": "#65CDF0",
      "Directly Booked and Awaiting": "#8D6AB1",
      "Directly Booked": "#4E132C",
      "Open and Unconfirmed": "#5A8BA8",
    };
    return (
      <>
        <div className="event-grid">
          <div
            className="event-grid-item "
            style={{ backgroundColor: backgroundColor[eventId] }}
          >
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
  const handleSlotContent = (slotEvent: any) => {
    return (
      <>
        <div className="slot-event-wrapper">
          <div>
            <p className="fs-14 fw-600 label-color">
              {dayjs(slotEvent.date).format("dddd")}
            </p>
            <p className="fs-14 fw-400" style={{ color: "#969BA0" }}>
              {dayjs(slotEvent.date).format("DD/MM/YYYY")}
            </p>
          </div>
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
            style={{ marginLeft: "25px" }}
          >
            <img src={resource.extendedProps.userImg} alt="user_mock" />
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
  const handleResourceHeaderContent = (info: any) => {
    return (
      <>
        <div className="resource-user">
          <div>
            <p className="fs-14 fw-600">Client Name</p>
          </div>
        </div>
      </>
    );
  };
  const handleEventClick = (e: any) => {
    setIsInfoModalOpen({ isToggle: true, data: e });
  };

  return (
    <div className="booking-calander-main">
      <Row gutter={[20, 20]}>
        {/* Calander Filters section starts here  */}
        <Col xs={24} lg={24} xl={14}>
          <BookingCalanderFilters bookingCalendar />
        </Col>
        <Col xs={24}  lg={10} xl={10} className="search-wrapper">
          <div className="input-search-wrapper">
            <Input  placeholder="search" prefix={<img src={SearchIcon} alt="search icon" className="icon" />}/>
          </div>
        </Col>
        {/* Calander Header starts here  */}
        <Col  md={24}>
          <Row className="header-main-row">
            <Col xs={24} lg={4}>
              <div className="btn-wrapper">
                <Button
                  type="primary"
                  onClick={() => {
                    setIsAddModalOpen(true);
                  }}
                  icon={<PlusOutlined />}
                >
                  Post New Shift
                </Button>
              </div>
            </Col>
            <Col xs={24} lg={20} className="calander-header">
              <div className="status-wrapper d-flex ">
                {calanderStatuses.map((data) => {
                  return (
                    <div key={uuidv4()} className="d-flex align-items-center">
                      <div className="box-wrapper">
                        <div
                          className="box"
                          style={{ backgroundColor: `${data.color}` }}
                        ></div>
                      </div>
                      <div className="status-title">
                        <span className="fs-12 label-color">{data.title}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Col>
        {/* Calander section starts here  */}
        <Col xs={24} md={24} className="calander-main">
          <FullCalendar
            schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
            plugins={[  resourceTimelinePlugin, interactionPlugin, dayGridPlugin, ResourcePlugin ]}
            headerToolbar={{ left: "", right: "", center: "" }}
            initialView="resourceTimelineWeek"
            resources={clientsData}
            events={calanderEvents}
            editable={false}
            droppable={false}
            slotMinWidth={200}
            resourceAreaWidth={200}
            eventMinWidth={200}
            eventContent={eventContentHandler}
            resourceAreaHeaderContent={handleResourceHeaderContent}
            resourceLabelContent={handleResourceRender}
            slotDuration="24:00:00"
            slotLabelContent={handleSlotContent}
            slotLabelFormat={[ { day: "2-digit",  month: "long",  year: "numeric",   weekday: "long"}]}
            eventClick={(e) => handleEventClick(e)}
            dateClick={(e: any) =>setIsAddModalOpen(true)}
          />
        </Col>
      </Row>
      {/* OnClick Modals starts here  */}
      {isInfoModalOpen.isToggle && ( <ShiftInfo isInfoModalOpen={isInfoModalOpen} setIsInfoModalOpen={setIsInfoModalOpen} /> )}
      {isAddModalOpen && ( <AddModal isAddModalOpen={isAddModalOpen} setIsAddModalOpen={setIsAddModalOpen}  />  )}
    </div>
  );
}

export default BookingCalanderTab;
