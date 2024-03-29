import React from 'react';
import { Bar } from '@ant-design/plots';
import '../AccountRecieveable/AccountReceivable.scss'
import './CurrentTab.scss';
const CurrentTab = () => {
  const data = [
    {
      type: 'Tall Tree',
      sales: 52,
    },
    {
      type: 'Care Uk',
      sales: 52,
    },
    {
      type: 'BUPA',
      sales: 61,
    },
   
    {
      type: 'Carebase',
      sales: 145,
    },
    {
      type: 'Stanway',
      sales: 145,
    },
    {
      type: 'Care Uk',
      sales: 52,
    },
    {
      type: 'BUPA',
      sales: 61,
    },
   
    {
      type: 'Carebase',
      sales: 145,
    },
    {
      type: 'Stanway',
      sales: 145,
    },
   
  ];




  
  const config = { 
    data,
    xField: 'sales',
    yField: 'type',
    // padding:[10,10,60,58], // set marginRatio to 0.2 to reduce the spacing between bars
    legend: {
      // position: 'top-left',
    },
    autoFit:true,
    barStyle: {
      fill: '#FE6669',
    },
    minBarWidth: 25,
    maxBarWidth: 25,
    interactions: [
      {
        type: 'active-region',
        enable: false,
      },
    ],
  };
  return <>
  <div style={{maxHeight:"200px",overflow:"hidden",overflowY: "scroll",}} className="wrap-tabs-finance-graphs">
  <Bar {...config} style={{height:"250px",overflow:"auto"}}/>
</div>
  </>
};

export default CurrentTab;
