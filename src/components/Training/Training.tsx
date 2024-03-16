import CoursesInfo from "./MainWidgets/CoursesInfo/CoursesInfo";

import TraineeServices from "./MainWidgets/TraineeServices/TraineeServices";
import { coursesInfoData } from "../../mock/TrainingData/CoursesInfo";
import "./Training.scss";
import CourseProgress from "./MainWidgets/CourseProgress/CourseProgress";
import NewsAndActivity from "./MainWidgets/NewsAndActivity/NewsAndActivity";
import { Col, Row } from "antd";
import MandatoryGraph from "./MainWidgets/MandatoryGraph/MandatoryGraph";
import { mandatoryGraphData } from "../../mock/TrainingData/GraphData";
import TrainingProgress from "./MainWidgets/TrainingProgress/TrainingProgress";

const Training = () => {
  return (
    <div className="training-wrapper">
      <Row gutter={[20, 20]}>
        {coursesInfoData.map((courseInfo: any, index: number) => (
          <Col key={index} xxl={6} lg={12} md={12} xs={24}>
            <CoursesInfo courseInfo={courseInfo} />
          </Col>
        ))}
      </Row>

      <Row style={{ marginTop: "22px" }} gutter={[20, 20]}>
        <Col xxl={9} lg={12} md={12} xs={24}>
          <CourseProgress />
        </Col>
        <Col xxl={6} lg={12} md={12} xs={24}>
          <TraineeServices />
        </Col>
        <Col xxl={9} lg={12} md={12} xs={24}>
          <NewsAndActivity />
        </Col>
        <Col xxl={15} lg={12} md={12} xs={24}>
          <TrainingProgress />
        </Col>
        <Col xxl={9} lg={12} md={12} xs={24}>
          <MandatoryGraph graphLegendData={mandatoryGraphData} />
        </Col>
      </Row>
    </div>
  );
};

export default Training;
