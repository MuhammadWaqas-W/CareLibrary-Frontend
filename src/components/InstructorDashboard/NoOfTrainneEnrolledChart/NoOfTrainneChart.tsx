import React from 'react'
import "./NoOfTrainneEnrolledChart.scss"

import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

interface EnrollmentData {
  month: string;
  noOfEnrollment: number;
}

const NoOfTrainneEnrolledChart: React.FC = () => {
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
    minColumnWidth: 20,
    maxColumnWidth: 20,
    color: ({ month }: any) => {
      switch (month) {
        case "Jan":
          return "#F4B935"
        case "Feb":
          return "#6ECDEE"
        case "Mar":
          return "#F4B935"
        case "Apr":
          return "#3290FC"
        case "May":
          return "#20A38A"
        case "Jun":
          return "#EA277F"
        case "Jul":
          return "#3290FC"
        case "Aug":
          return "#6ECDEE"
        case "Sep":
          return "#EA277F"
        case "Oct":
          return "#3290FC"
        case "Nov":
          return "#F4B935"
        case "Dec":
          return "#20A38A"
        default:
          return "#e7e7e9"
      }
    },
  };

  return (
    <div className='wrapper-main-trainne-enrolled-chart'>
      <div className="header-chart fs-20 fw-500 form-heading-color">No of Trainee Enrolled in Per month</div>
      <div className="chat-wrapper">
        <Column {...config} />
      </div>
    </div>
  );
};

export default NoOfTrainneEnrolledChart