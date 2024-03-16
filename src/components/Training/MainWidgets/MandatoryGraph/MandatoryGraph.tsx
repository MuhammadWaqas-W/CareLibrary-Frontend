import { getCanvasPattern, Pie } from "@ant-design/plots";

import infoIcon from "../../../../assets/icons/training/info.png";

const MandatoryGraph = (props: any) => {
  const data = props.graphLegendData;

  const pattern = (datum: any, color: any) =>
    getCanvasPattern({
      type: datum.type === "分类一" ? "dot" : "line",
      cfg: {
        backgroundColor: datum.type === "分类一" ? "#d78ab7" : color,
      },
    });
  const config: any = {
    appendPadding: 10,
    data,
    legend: {
      marker: (text: any, index: any, item: any) => {
        const color = item.style.fill;
        return {
          style: {
            fill: pattern(
              {
                type: text,
              },
              color
            ),
            r: 8,
          },
        };
      },
    },
    angleField: "value",
    colorField: "type",
    radius: 0.7,
    innerRadius: 0.7,
    label: {
      type: "inner",
      offset: "-50%",
      content: ({ percent }: any) => `${(percent * 100).toFixed(0)}`,
      style: {
        fill: "#fff",
        fontSize: 14,
        textAlign: "center",
      },
    },
    autoFit: true,
    color: ["#EE2E7E", "#F7B923"],
    statistic: null,
  };
  return (
    <div className="mandatory-graph">
      <div className="d-flex justify-between align-center">
        <h2 className="title fs-20 fw-500 m-0">Self Mandatory Courses</h2>
        <img width={24} height={24} src={infoIcon} alt="info icon" />
      </div>
      <div className="graph">
        <Pie {...config} style={{ height: "300px" }} />
      </div>
    </div>
  );
};

export default MandatoryGraph;
