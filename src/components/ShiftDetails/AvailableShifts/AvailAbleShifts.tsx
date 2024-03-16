import React from 'react'
import { Tabs, Card, Col, Row } from 'antd';
import type { TabsProps } from 'antd';
import AvailableShiftsTab from './AvailableShiftsTab/AvailableShiftsTab.';
import ConfirmationTab from './ConfirmationTab/ConfirmationTab';
// import { useNavigate } from "react-router-dom";
import './AvailableShift.scss'
const items: TabsProps['items'] = [
  {
    key: 'available-shifts',
    label: `Available Shifts`,
    children: <AvailableShiftsTab />,
  },
  {
    key: 'confirmations',
    label: `Confirmations`,
    children: <ConfirmationTab />,
  },

];
const AvailAbleShifts = () => {
  // const navigate = useNavigate();
  // const onChange = (key: string) => {
  //   // navigate(`/shift-details/${key}`);
  //   console.log(key);
  // }
  return (
    <div className='wrap-shifts-tabs'>
      {/* <Card className="  border-radius-8 card card-bg-color" bordered={false} > */}
      {/* onChange={(item)=>{ navigate(`/shift-details/${item}`);}} */}
      <Tabs defaultActiveKey="available-shifts" items={items} />
      {/* </Card> */}

    </div>
  )
}

export default AvailAbleShifts
