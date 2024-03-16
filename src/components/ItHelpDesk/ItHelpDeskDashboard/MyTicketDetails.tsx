import React from "react";
import { Pie } from '@ant-design/plots';

export const MyTicketDetails = () => {
  const data = [
    {
      type: "All",
      value: 48,
    },
    {
        type: "Pending Tickets",
      value: 18,
    },
    {
      type: "Resolved Tickets",
      value: 21,
    },
  ];
  const config: any = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    innerRadius: 0.64,
    legend: {
        position: 'right',
        
        marker: {
          symbol: 'circle', // Set the symbol to a square
          size: 30,
          style: {
            // fill: ["#EE2E7E", "#65CDF0", "#F7B923",],
             // Set the fill color to match the background color of the legend
            // stroke: ["#EE2E7E", "#65CDF0", "#F7B923",], 
            // Set the border color of the marker
            lineWidth: 5, // Set the border width of the marker
            // fontSize: 20,
            color:["#EE2E7E", "#65CDF0", "#F7B923",],
            display:"flex"
          },
        },
        itemFormatter: (value:any, item:any) => {
          // Use a custom formatter to add a colored rectangle marker to the legend item
          const colorIndex = item?.color?.index || 0;
          const color = ["#EE2E7E", "#65CDF0", "#F7B923",][colorIndex];
          return `${value} <span style="display: inline-block; width: 20px; height: 20px; background-color: ${color}; border: 1px solid ${color}; margin-right: 8px;"></span>`;
        },
      },
    label: {
      type: "inner",
      offset: "-50%",
      content: ({ percent }: any) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fill: "#fff",
        fontSize: 14,
        textAlign: "center",
      },
    },
    color: ["#EE2E7E", "#65CDF0", "#F7B923",],
    statistic: null,
  };
  return <Pie {...config} style={{ height: "220px" }} />;
};
