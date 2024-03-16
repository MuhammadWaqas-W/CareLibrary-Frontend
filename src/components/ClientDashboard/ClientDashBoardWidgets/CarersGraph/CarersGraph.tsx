import React from 'react'

import { Column } from '@ant-design/plots';

interface EnrollmentData {
  month: string;
  noOfEnrollment: number;
}

const CarersGraph = () => {
  const data: EnrollmentData[] = [
    {
      month: 'Jan',
      noOfEnrollment: 100,
    },
    {
      month: 'Feb',
      noOfEnrollment: 52,
    },
    {
      month: 'Mar',
      noOfEnrollment: 99,
    },
    {
      month: 'Apr',
      noOfEnrollment: 40,
    },
    {
      month: 'May',
      noOfEnrollment: 40,
    },
    {
      month: 'Jun',
      noOfEnrollment: 65,
    },
    {
      month: 'Jul',
      noOfEnrollment: 30,
    },
    {
      month: 'Aug',
      noOfEnrollment: 130,
    },
    {
      month: 'Sep',
      noOfEnrollment: 20,
    },
    {
      month: 'Oct',
      noOfEnrollment: 38,
    },
    {
      month: 'Nov',
      noOfEnrollment: 48,
    },
    {
      month: 'Dec',
      noOfEnrollment: 50,
    },
  ];

  const config: any = {
    data,
    xField: 'month',
    yField: 'noOfEnrollment',
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      month: {
        alias: 'Month',
      },
      noOfEnrollment: {
        alias: 'No of Trainee',
      },
    },
    minColumnWidth: 26,
    maxColumnWidth: 26,
    color: ({ month }: any) => {
      switch (month) {
        case "Jan":
          return "#3CCC4A"
        case "Feb":
          return "#6B849B"
        case "Mar":
          return "#FF9900"
        case "Apr":
          return "#FF5252"
        case "May":
          return "#3CCC4A"
        case "Jun":
          return "#6B849B"
        case "Jul":
          return "#FF9900"
        case "Aug":
          return "#FF5252"
        case "Sep":
          return "#3CCC4A"
        case "Oct":
          return "#6B849B"
        case "Nov":
          return "#FF9900"
        case "Dec":
          return "#FF5252"
        default:
          return "#e7e7e9"
      }
    },
  };

  return (
    <div className='carers-main-trainne-enrolled-chart bg-white'>
      <h2 className="header-chart fs-20 fw-500 title-color m-0">Carers per Month</h2>
      <div className="chat-wrapper">
        <Column {...config} />
      </div>
    </div>
  );
};

export default CarersGraph