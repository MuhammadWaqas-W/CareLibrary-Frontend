import { allCourses } from "../../../../mock/TrainingData/CoursesData";
import CourseCard from "./CourseCard";

const CoursesList = () => {
  return (
    <div className="courses-list">
      <div className="cards-list">
        {allCourses.map((course: any) => (
          <div className="single-card">
            <CourseCard courseData={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
