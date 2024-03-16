import { Bar } from "@ant-design/plots";

const TrainingProgress = () => {
  const data = [
    {
      year: "Enrolled",
      value: 90,
    },
    {
      year: "Inprogress",
      value: 30,
    },
    {
      year: "Completed",
      value: 55,
    },
    {
      year: "Pending",
      value: 12,
    },
  ];
  const config: any = {
    data,
    xField: "value",
    yField: "year",
    seriesField: "year",
    legend: {
      position: "top-left",
    },
    barBackground: {
      style: {
        fill: "rgba(0,0,0,0.1)",
      },
    },
    color: ["#65CDF0", "#F7B923", "#52C41A", "#FF4D4F"],
    interactions: [
      {
        type: "active-region",
        enable: false,
      },
    ],
  };
  return (
    <div className="training-progress">
      <h2 className="title fs-20 fw-500 m-0">Carer Training Progress</h2>
      <div className="graph">
        <Bar height={250} {...config} />
      </div>
    </div>
  );
};

export default TrainingProgress;
