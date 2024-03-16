import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Area } from "@ant-design/plots";

const jobData = [
  {
    timePeriod: "01",
    value: 1,
  },
  {
    timePeriod: "2006 Q4",
    value: 1.08,
  },
  {
    timePeriod: "2007 Q1",
    value: 1.17,
  },
  {
    timePeriod: "2007 Q2",
    value: 1.26,
  },
  {
    timePeriod: "02",
    value: 1.34,
  },
  {
    timePeriod: "03",
    value: 1.84,
  },
  {
    timePeriod: "2008 Q4",
    value: 2.07,
  },
  {
    timePeriod: "2009 Q1",
    value: 2.39,
  },
  {
    timePeriod: "04",
    value: 3.03,
  },
  {
    timePeriod: "2010 Q1",
    value: 3.5,
  },
  {
    timePeriod: "2010 Q2",
    value: 3.37,
  },
  {
    timePeriod: "05",
    value: 3.15,
  },
  {
    timePeriod: "06",
    value: 2.84,
  },
  {
    timePeriod: "2012 Q1",
    value: 2.64,
  },
  {
    timePeriod: "2012 Q2",
    value: 2.55,
  },
  {
    timePeriod: "07",
    value: 2.46,
  },
  {
    timePeriod: "08",
    value: 2.8,
  },
  {
    timePeriod: "2013 Q4",
    value: 2.89,
  },
  {
    timePeriod: "2014 Q1",
    value: 2.85,
  },
  {
    timePeriod: "2014 Q2",
    value: 2.73,
  },
  {
    timePeriod: "09",
    value: 2.54,
  },
  {
    timePeriod: "10",
    value: 2.53,
  },
  {
    timePeriod: "2015 Q4",
    value: 2.74,
  },
  {
    timePeriod: "2016 Q1",
    value: 2.76,
  },
  {
    timePeriod: "11",
    value: 2.35,
  },
  {
    timePeriod: "2017 Q2",
    value: 2.2,
  },
  {
    timePeriod: "12",
    value: 2.38,
  },
  {
    timePeriod: "2018 Q1",
    value: 2.63,
  },
  {
    timePeriod: "13",
    value: 2.64,
  },
  {
    timePeriod: "2018 Q4",
    value: 2.5,
  },
  {
    timePeriod: "2019 Q1",
    value: 2.31,
  },
  {
    timePeriod: "2019 Q2",
    value: 2.04,
  },
  {
    timePeriod: "14",
    value: 1.83,
  },
  {
    timePeriod: "2020 Q1",
    value: 1.65,
  },
  {
    timePeriod: "2020 Q2",
    value: 1.59,
  },
  {
    timePeriod: "15",
    value: 1.58,
  },
];

const MonthlyJobGraph = () => {
  const [data, setData] = useState(jobData);
  const config = {
    data,
    xField: "timePeriod",
    yField: "value",
    color: ["#65CDF0"],
    xAxis: {
      range: [0, 1],
    },
  };

  return <Area {...config} height={320} />;
};

export default MonthlyJobGraph;
