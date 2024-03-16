import React from 'react'
import { DualAxes } from '@ant-design/plots';
const TaskSummaryGraph = () => {
  const uvBillData = [
    {
      time: 'Oct 2021',
      uv: 12,
      bill: 8,
    },
    {
      time: 'Nov 2021',
      uv: 10,
      bill: 12,
    },
    {
      time: 'Dec 2021',
      uv: 8,
      bill: 10,
    },
    {
      time: 'Jan 2022',
      uv: 6,
      bill: 2,
    },
    {
      time: 'Feb 2022',
      uv: 2,
      bill: 6,
    },
    {
      time: 'Mar 2022',
      uv: 0,
      bill: 12,
    },
  ];
  const config = {
    data: [uvBillData,uvBillData,uvBillData],
    xField: 'time',
    yField: ['uv'],
    padding:[10,10,80,18],
    autoFit:true,
    geometryOptions: [
      {
        geometry: 'line',
        seriesField: 'type',
        lineStyle: {
          lineWidth: 4,
          stroke:'#EE2E7E',
          // lineDash: [5, 5],
        },
        smooth: true,
      },
      {
        geometry: 'line',
        seriesField: 'type',
        lineStyle: {
          lineWidth: 4,
          stroke:'#65CDF0',
        },
        smooth: true,
      },
      {
        geometry: 'line',
        seriesField: 'type',
        lineStyle: {
          lineWidth: 4,
          stroke:'blue',
        },
        smooth: true,
      },
      {
        geometry: 'line',
        seriesField: 'type',
        lineStyle: {
          lineWidth: 4,
          stroke:'green',
        },
        smooth: true,
      },
    ],
  };
  return (
<DualAxes {...config} style={{minHeight:"340px"}} />  )
}
export default TaskSummaryGraph