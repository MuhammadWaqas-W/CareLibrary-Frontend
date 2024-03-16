import { Progress, Rate } from "antd";
import { useState } from "react";

const Rating = () => {
  const ratingValue = 4;
  const punctualityValue = 4;
  const attitudeValue = 3.5;

  const ratingStatus: string[] = ["1/5", "2/5", "3/5", "4/5", "5/5"];

  return (
    <div className="rating-card">
      <h1 className="title">Overall Rating</h1>
      <div className="card-content d-flex align-center">
        <Rate disabled defaultValue={ratingValue} />
        <p className="rating-status">{ratingStatus[ratingValue - 1]} (9 reviews)</p>
      </div>
      <div className="progress-bars">
        <div className="punctuality-progress">
          <div className="d-flex justify-between align-center">
            <p style={{ color: "#4E4B66" }} className="m-0 fs-12">
              Punctuality
            </p>
            <p className="fs-12 fw-500 m-0" style={{ color: "#6E7191" }}>
              {punctualityValue}/5
            </p>
          </div>
          <Progress
            strokeWidth={6}
            strokeColor={"#65CDF0"}
            percent={punctualityValue * 20}
            showInfo={false}
          />
        </div>
        <div className="attitude-progress">
          <div className="d-flex justify-between align-center">
            <p style={{ color: "#4E4B66" }} className="m-0 fs-12">
              Attitude
            </p>
            <p className="fs-12 fw-500 m-0" style={{ color: "#6E7191" }}>
              {attitudeValue}/5
            </p>
          </div>
          <Progress
            strokeWidth={6}
            strokeColor={"#F7B923"}
            percent={attitudeValue * 20}
            showInfo={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Rating;
