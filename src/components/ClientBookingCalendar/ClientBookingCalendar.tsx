import FullCalendar from '@fullcalendar/react';
import React, { useState } from 'react';
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from '@fullcalendar/daygrid';
import ResourcePlugin from "@fullcalendar/resource"
import dayjs from 'dayjs';
import RequestShift from './RequestShift/RequestShift';
import SunIcon from "../../assets/icons/ClientBookingCalendar/sun-icon.png";
import ActionIcon from "../../assets/icons/ClientBookingCalendar/action-icon.png";
import CareBookingCalendarFilters from './ClientBookingCalendarFilters/ClientBookingCalendarFilters';
import SearchIcon from "../../assets/images/OnBoarding/Search.svg";
import { clientBookingCalendarData, clientBookingEventsData } from '../../mock/ClientBookingCalendarData';
import { useNavigate } from 'react-router-dom';
import './ClientBookingCalendar.scss';
import { Input } from 'antd';

const CareBookingCalendar = () => {
  const [isRequestShiftModalOpen, setIsRequestShiftModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleEventContent = (eventInfo: any) => {
    const events = eventInfo?.event?._def?.extendedProps
    console.log('events', eventInfo?.event);
    return (
      <div className="care-booking-event-wrap">
        <div className='event-icon d-flex align-center justify-between'>
          <img src={SunIcon} alt="" />
          <img src={ActionIcon} alt="" />
        </div>
        <div className='event-content d-flex align-center w-100 snow-white-color'>
          <div className='d-flex flex-column' style={{ gap: "5px" }}>
            <h2 className='fs-14 fw-600 m-0 line-height-18'>Total Shifts: <span className='fs-12 fw-400 m-0 line-height-18'>{events?.totalShift}</span></h2>
            <h2 className='fs-14 fw-600 m-0 line-height-18'>Shifts Interval</h2>
          </div>
          <div className='d-flex flex-column' style={{ gap: "5px" }}>
            <h2 className='fs-14 fw-600 m-0 line-height-18'>Total Shifts: <span className='fs-12 fw-400 m-0 line-height-18'>{events?.totalCarers}</span></h2>
            <p className='fs-12 fw-400 m-0 line-height-18'>(1:00 am to 9:00 am)</p>
          </div>
        </div>
      </div>
    )
  };

  const handleSlotContent = (slotEvent: any) => {
    return (
      <>
        <div className="slot-event-wrapper">
          <div className="d-flex align-center" style={{ gap: "5px" }}>
            <h2 className="title-color m-0 fs-14 fw-600 line-height-18">{dayjs(slotEvent.date).format('h a')}</h2>
          </div>
        </div>
      </>
    )
  }
  const handleResourceRender = (info: any) => {
    const resource = info?.resource?._resource;
    return (
      <>
        <div className="resource-render-wrapper d-flex align-center">
          <p className="title-color fs-14 fw-400 line-height-20 cursor-pointer m-0">{resource.title}</p>
        </div>
      </>
    )
  }

  const handleEventClick = (eventInfo: any) => {
    const events = eventInfo?.event?._def?.publicId
    navigate(`/client-booking-calendar/${events}`)
  }
  return (
    <>
      <div className='care-booking-calendar'>
        <div className='care-booking-wrap bg-white'>
          <div className='care-booking-btn' onClick={() => setIsRequestShiftModalOpen(true)}>
            <button type='button' className='cursor-pointer fs-16 line-height-22 white-color fw-600'>Request a Shift</button>
          </div>
          <div className='care-booking-filters d-flex align-center justify-between' >
            <CareBookingCalendarFilters />
            <div className='input-search-wrapper d-flex w-100' style={{ justifyContent: "flex-end", maxWidth: "250px" }}>
              <Input
                className='w-100'
                placeholder="search"
                prefix={<img src={SearchIcon} alt="search icon" className="icon" width={20} height={20} />}
              />
            </div>
          </div>
        </div>
        <div className='booking-calendar-wrap'>
          <FullCalendar
            schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
            plugins={[resourceTimelinePlugin, interactionPlugin, dayGridPlugin, ResourcePlugin]}
            initialView="resourceTimelineWeek"
            titleFormat={{
              month: 'short',
              day: 'numeric',
              weekday: 'short'
            }}
            headerToolbar={false}
            resources={clientBookingCalendarData}
            events={clientBookingEventsData}
            eventContent={handleEventContent}
            slotLabelContent={handleSlotContent}
            resourceLabelContent={handleResourceRender}
            editable={true}
            droppable={true}
            slotMinWidth={100}
            resourceAreaWidth={140}
            eventMinWidth={100}
            eventBorderColor="1px solid #DBE4EF !important"
            resourceAreaHeaderContent="Days"
            slotDuration="01:00:00"
            slotLabelInterval="02:00:00"
            dateClick={() => setIsRequestShiftModalOpen(true)}
            slotLabelFormat={[{ day: "2-digit", month: "long", year: "numeric", weekday: "long" }]}
            eventClick={handleEventClick}
          />
        </div>
      </div>
      <RequestShift isRequestShiftModalOpen={isRequestShiftModalOpen} setIsRequestShiftModalOpen={setIsRequestShiftModalOpen} />
    </>
  )
}

export default CareBookingCalendar