import { Progress } from "antd";

const coursesProgress = [
  {
    color: "#65CDF0",
    course: "BLS: Adults & Children , AED and Recovery Position",
    completionStatus: 80,
  },
  {
    color: "#FF4D4F",
    course: "Medical Emergencies in General Practice ",
    completionStatus: 20,
  },
  {
    color: "#F7B923",
    course: "Mental Capacity Act, Human Rights and DoLS ",
    completionStatus: 40,
  },
  {
    color: "#65CDF0",
    course: "Medical Emergencies in General Practice ",
    completionStatus: 75,
  },
];

const CourseProgress = () => {
  return (
    <div className="courses-progress-card">
      <h1 className="title">Course Completion Progress</h1>
      <div className="courses-details">
        {coursesProgress.map((item: any, index: number) => (
          <>
            <div key={index} className="course">
              <p className="course-title">{item.course}</p>
              <p
                className="course-progress"
                style={{ color: item.color }}
              >{`${item.completionStatus}%`}</p>
            </div>
            <Progress
              className="progress"
              strokeColor={item.color}
              showInfo={false}
              percent={item.completionStatus}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default CourseProgress;
