import { Progress } from "antd";
import { useNavigate } from "react-router-dom";
import playButton from "../../../../assets/icons/play-button.svg"
import './CourseCard.scss'

const CourseCard = ({ course }: any) => {

  const navigate = useNavigate()

  return (
    <div className="course-card">
      <div className="course-content w-100">
        <div className="img-container">
          <img src={course?.img} alt="course-1" className="w-100" />
          <div onClick={() => navigate(`/trainee-info/trainee-courses/course-content/${course.id}`)} className="overlay">
            <div className="d-flex align-center justify-center" style={{ height: "100%" }}>
              <img src={playButton} alt="" />
            </div>
          </div>
        </div>
        <p className="course-name fs-16-fw-500 m-0">{course?.courseName}</p>
        <div>
          <Progress
            className="progress"
            strokeColor="#65CDF0"
            showInfo={false}
            percent={course?.completed}
          />
        </div>
        {course?.completed === 0 ? (
          <p className="completion-status fs-14 fw-400 m-0">Start Course</p>
        ) : (
          <p className="completion-status fs-14 fw-400 m-0">{course?.completed}% completed</p>
        )}
      </div> 
    </div>
  );
};

export default CourseCard;
