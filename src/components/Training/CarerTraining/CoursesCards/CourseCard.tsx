import { Progress } from "antd";

import mailIcon from "../../../../assets/icons/training/mail-icon.png";
import viewIcon from "../../../../assets/icons/training/view-icon.png";

const CourseCard = ({ course }: any) => {
  return (
    <div className={course.courseStatus === "in progress" ? "course-card overly" : "course-card"}>
      <div className="course-content w-100">
        <div className="img-container">
          <img src={course?.img} alt="course-1" className="w-100" />
        </div>
        {course?.courseStatus === "in progress" || course?.courseStatus === "enrolled" ? (
          <>
            <p className="course-name fs-16-fw-500 m-0">{course?.courseName}</p>
            <div>
              <Progress
                className="progress"
                strokeColor="#65CDF0"
                showInfo={false}
                percent={course?.completed}
              />
              {course?.completed === 0 ? (
                <p className="completion-status fs-14 fw-400 m-0">Start Course</p>
              ) : (
                <p className="completion-status fs-14 fw-400 m-0">{course?.completed}% completed</p>
              )}
            </div>
          </>
        ) : (
          <p className="course-title fs-16-fw-500 m-0">{course?.courseName}</p>
        )}

        <div style={{ marginTop: "15px" }} className="text-center">
          {course?.courseStatus === "completed" ? (
            <img className="cursor-pointer" src={viewIcon} alt="status" />
          ) : (
            <img className="cursor-pointer" src={mailIcon} alt="status" />
          )}
        </div>
      </div>
      <img
        className={
          course?.courseType === "optional" || course?.courseType === "mandatory" ? "icon" : "new"
        }
        src={course?.icon}
        alt="icon"
      />
    </div>
  );
};

export default CourseCard;
