import React from 'react'
import { Pie } from '@ant-design/plots';
import "./NumberOfStudents.scss"

const NumberOfStudents = () => {
    const data = [
        {
          type: 'Inprogress',
          value: 40,
        },
        {
          type: 'Complete',
          value: 50,
        },
        {
          type: 'Start Course',
          value: 10,
        }
      ];
      const config:any = {
        appendPadding: 40,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        innerRadius: 0.64,
        label: {
          type: 'inner',
          offset: '-50%',
          content: ({ percent }:any) => `${(percent * 100).toFixed(0)}%`,
          style: {
            fill: '#fff',
            fontSize: 14,
            textAlign: 'center',
          },
        },
         autoFit:true,
        color: ["#F7B923","#65CDF0", "#EE2E7E",  ],
        statistic: null,
      };
  return (
    <div className='wrapper-main-number-students-chart'>
      <div className="header-chart fs-20 fw-500 form-heading-color">Total Number Of Students</div>
      <div className="chat-wrapper">
      <Pie {...config} style={{height:"300px"}}  />
      </div>
    </div>
  )
}

export default NumberOfStudents