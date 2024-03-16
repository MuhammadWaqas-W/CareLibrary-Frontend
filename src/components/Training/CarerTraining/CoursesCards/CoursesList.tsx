import { coursesData } from "../../../../mock/TrainingData/CarerTraining";
import CourseCard from "./CourseCard";

const CoursesList = ({ activeTab }: any) => {
  const filteredData = coursesData.filter((course: any) => course.courseStatus === activeTab);

  return (
    <div className="cards-list">
      {filteredData.map((course: any, index: number) => (
        <div key={index} className="single-card">
          <CourseCard course={course} />
        </div>
      ))}
    </div>
  );
};

export default CoursesList;
