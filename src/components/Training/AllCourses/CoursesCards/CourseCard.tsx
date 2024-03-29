import { Button } from "antd";
import { Link } from "react-router-dom";

const CourseCard = ({ courseData }: any) => {
  return (
    <div className="card">
      <div className="img-wrapper">
        <img src={courseData?.image} alt="Course 1" />
        <Link to={`/training/all-courses/${courseData?.id}`}>
          <Button className="read-more-btn fs-16 fw-600">Read more</Button>
        </Link>
      </div>
      <div className="card-content">
        <h2 className="title fs-14 fw-400">{courseData?.title}</h2>
        <p className="category fs-12 fw-700">
          Category: <span>{courseData?.category}</span>
        </p>
        <p className="status fs-12 fw-700">
          Status: <span>{courseData?.status}</span>
        </p>
      </div>
      <img
        className={courseData.courseType === "optional" ? "icon" : "new"}
        src={courseData?.icon}
        alt="icon"
      />
    </div>
  );
};

export default CourseCard;
