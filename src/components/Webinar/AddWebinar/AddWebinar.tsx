import { Tabs, TabsProps } from 'antd';
import React from 'react'
import './AddWebinar.scss'
import Attendees from './Attendees/Attendees';
import Details from './Details/Details';

const AddWebinar = () => {

    const onChange = (key: string) => {
        console.log(key);
      };
      
      const items: TabsProps['items'] = [
        {
          key: '1',
          label: `Details`,
          children: <Details/>,
        },
        {
          key: '2',
          label: `Attendees`,
          children: <Attendees/>,
        },
      ];
      
  return (
    <div className='wrapper-add-webinar'>
        <Tabs defaultActiveKey="1" className='tabs-wrapper-styles' items={items} onChange={onChange} />
    </div>
  )
}

export default AddWebinar