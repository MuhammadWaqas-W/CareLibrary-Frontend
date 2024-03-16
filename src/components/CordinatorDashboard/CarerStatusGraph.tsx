import { Card } from "antd";
import { Pie } from "@ant-design/plots";
const CarerStatusGraph = () => {
  const DemoPie = () => {
    const data = [
      {
        type: "Active",
        value: 75,
      },
      {
        type: "In-Active",
        value: 25,
      },
    ];
    const ActitveColor = "#5DD3A9";
    const InActiveColor = "#65CDF0";
    const config: any = {
      appendPadding: 0,
      data,
      angleField: "value",
      colorField: "type",
      radius: 1,
      innerRadius: 0.6,
      minColumnWidth: 20,
      maxColumnWidth: 20,
      color: ({ type }: any) => {
        if (type === "Active") {
          return ActitveColor;
        }
        return InActiveColor;
      },
      legend: {
        marker: () => {
          return {
            style: {
              r: 8,
            },
          };
        },
      },
      label: {
        content: "",
      },
      interactions: [
        {
          type: "element-selected",
        },
        {
          type: "element-active",
        },
      ],
      statistic: {
        title: false,
        content: {
          style: {
            whiteSpace: "pre-wrap",
            overflow: "hidden",
            display: "none",
            textOverflow: "ellipsis",
          },
        },
      },
    };
    return <Pie height={190} {...config} />;
  };
  return (
    <Card>
      <h3 className="fs-20 m-0 line-height-28 fw-500 title-color">
        Carers Status
      </h3>
      <div className="carer">
        <h3 className="fs-16 m-0 fw-500 title-color">Total Carers</h3>
        <button>04</button>
      </div>
      <DemoPie />
    </Card>
  );
};

export default CarerStatusGraph;
