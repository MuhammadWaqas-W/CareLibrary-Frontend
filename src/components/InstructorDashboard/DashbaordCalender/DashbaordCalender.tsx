import { Calendar, Popover } from 'antd';
// import dayjs from 'dayjs';

import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import arrowRight from "../../../assets/icons/arrow-right.svg"
import arrowLeft from "../../../assets/icons/arrow-left.svg"
// import dayjs, { Locale } from 'dayjs';
import 'dayjs/locale/en';
import dayjs from 'dayjs';


import './DashbaordCalender.scss'


const events = [
  {
    date: dayjs('2023-03-21'),
    title: 'Event 1',
    description: 'Upcomming Webinar 01',
  },
  {
    date: dayjs('2023-03-23'),
    title: 'Event 2',
    description: 'Upcomming Webinar 02',
  },
  {
    date: dayjs('2023-03-16'),
    title: 'Event 2',
    description: 'Upcomming Webinar 04',
  },
];

const renderEventContent = (event: any) => (
  <div>
    <h3>{event.title}</h3>
    <p>{event.description}</p>
  </div>
);

const renderPopoverContent = (date: any) => (
  <div>
    {events
      .filter((event) => event.date.isSame(date, 'day'))
      .map((event) => (
        <div key={event.description}>
          <p className='m-0 fs-14 fw-400'>{event.description}</p>
        </div>
      ))}
  </div>
);



const DashbaordCalender = () => {
  return (
    <Calendar
      className="dashboard-calendar-wrapper"
      headerRender={({ value, type, onChange }) => {
        const monthName = value.format('MMMM');
        const year = value.format('YYYY');
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
            }}
          >
            {/* <LeftOutlined onClick={() => onChange(value.subtract(1, 'month'))} /> */}
            <img src={arrowRight} alt="" onClick={() => onChange(value.subtract(1, 'month'))}/>
            <div className='fs-16 fw-500'>{`${monthName} ${year}`}</div>
            {/* <RightOutlined onClick={() => onChange(value.add(1, 'month'))} /> */}
            <img src={arrowLeft} alt="" onClick={() => onChange(value.add(1, 'month'))}/>
          </div>
        );
      }}
      dateCellRender={(date: any) => {
        const eventsOnDate = events.filter((event) =>
          event.date.isSame(date, 'day')
        );
        if (eventsOnDate.length === 0) {
          return null;
        }
        return (
          <Popover 
          content={renderPopoverContent(date)} 
          overlayClassName="calender-date-popover"
          // open={true}
          arrow={false}
          overlayStyle={{padding:"0px" }} >
            <div
              style={{
                cursor: 'pointer',
                color: '#fff',
                // fontWeight:"600",
                backgroundColor: '#65CDF0',
                textAlign: 'center',
                borderRadius: '20px',
                width: '24px',
                height: '24px',
                position:"relative",
                top:'3px',
                // left:'28px'
                // left:"1.4vw"
                paddingTop:'2px',
                margin:"0 auto",
                zIndex:"1",
                // position:"relative"
              }}
            >
              {date.format('D')}
            </div>
          </Popover>
        );
      }}

    />
  )
}

export default DashbaordCalender