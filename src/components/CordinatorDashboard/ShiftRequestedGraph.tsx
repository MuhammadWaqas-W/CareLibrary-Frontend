import { Column } from "@ant-design/plots";
import { Card, Select } from "antd";
import Selection from "../../assets/images/CordinatorDashboard/selection.png";

const ShiftRequestedGraph = () => {
  const DemoColumn = () => {
    const data = [
      {
        type: "Tall Tree",
        value: 8,
      },
      {
        type: "Fox",
        value: 22,
      },
      {
        type: "Careuk",
        value: 30,
      },
      {
        type: "CareC",
        value: 9,
      },
      {
        type: "Bury",
        value: 9,
      },
      {
        type: "Lonsdale",
        value: 22,
      },
      {
        type: "Mews",
        value: 34,
      },
      {
        type: "Grove",
        value: 9,
      },
      {
        type: "Bishops",
        value: 9,
      },
      {
        type: "Milner",
        value: 22,
      },
      {
        type: "Mews",
        value: 32,
      },
      {
        type: "Grove",
        value: 9,
      },
      {
        type: "Bishops",
        value: 9,
      },
      {
        type: "Milner",
        value: 22,
      },
      {
        type: "Bishops",
        value: 9,
      },
    ];
    const paletteSemanticRed = "#3CCC4A";
    const warningColor = "#FF9900";
    const redColor = "#FF5252";
    const brandColor = "#6B849B";
    const config: any = {
      data,
      xField: "type",
      yField: "value",
      seriesField: "",
      minColumnWidth: 26,
      maxColumnWidth: 26,
      color: ({ type }: any) => {
        if (type === "Tall Tree" || type === "Bury" || type === "Bishops") {
          return paletteSemanticRed;
        }
        if (type === "Mews" || type === "Careuk") {
          return warningColor;
        }
        if (type === "CareC" || type === "Grove") {
          return redColor;
        }

        return brandColor;
      },
      label: {
        content: (originData: any) => {
          const val = parseFloat(originData.value);

          if (val < 0.05) {
            return (val * 100).toFixed(1) + "%";
          }
        },
        offset: 15,
      },
      legend: false,
      xAxis: {
        label: {
          autoHide: false,
          autoRotate: false,
        },
      },
    };
    return <Column height={220} {...config} />;
  };
  return (
    <Card className="shiftRequested">
      <div className="d-flex shifts-hold">
        <h3 className="fs-20 m-0 line-height-28 fw-500 title-color">
          Shifts Requested by Care Home
        </h3>
        <Select
          defaultValue="This Month"
          style={{ alignItems: "center" }}
          bordered={false}
          suffixIcon={<img src={Selection} alt="selectImg" width={15} />}
          options={[
            { value: "This Week", label: "This Week" },
            { value: "This Month", label: "This Month" },
            { value: "This Year", label: "This Year" },
          ]}
        />
      </div>
      <DemoColumn />
    </Card>
  );
};

export default ShiftRequestedGraph;
