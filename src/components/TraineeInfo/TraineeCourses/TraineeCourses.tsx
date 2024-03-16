import React from 'react'

// import "../../../sass/common.scss"
import "./TraineeCourses.scss"
import userIcon from '../../../assets/images/TraineeInfo/avatar-one.svg'

import course1 from "../../../assets/images/Training/course-1.png";
import course2 from "../../../assets/images/Training/course-2.png";
import CourseCard from './CourseCard/CourseCard';

const courseData = [
  {
    id:"01",
    img: course1,
    courseName: "BLS: Adults & Children , AED and Recovery Position",
    completed: 5,
  },
  {
    id:"02",
    img: course2,
    courseName: "BLS: Adults & Children , AED and Recovery Position",
    completed: 15,
  },
  {
    id:"03",
    img: course1,
    courseName: "BLS: Adults & Children , AED and Recovery Position",
    completed: 0,
  },
  {
    id:"04",
    img: course1,
    courseName: "BLS: Adults & Children , AED and Recovery Position",
    completed: 82,
  },
  {
    id:"05",
    img: course2,
    courseName: "BLS: Adults & Children , AED and Recovery Position",
    completed: 45,
  },
  {
    id:"06",
    img: course1,
    courseName: "BLS: Adults & Children , AED and Recovery Position",
    completed: 0,
  },
];

const TraineeCourses = () => {
  return (
    <div className='trainee-courses-main-wrapper'>
      <div className="course-details-head d-flex align-center justify-between">
        <div className="user-details">
          <div className="user-profile-image"><img src={userIcon} alt="" /></div>
          <div className='d-flex flex-column'>
            <span className='fs-14 fs-600'>David Williams</span>
            <span className='fs-12 fs-400'>Health Care Assistant</span>
          </div>
        </div>
        <div className='fs-14 fw-600 dark-brown-color'>Registered Courses : <span className='fw-400'>4</span></div>
      </div>


      <div className="courses-flex-mian-wrapper">
        <span className='fs-24 fs-500'>Trainee Courses</span>
        <div className=" cards-list">
          {courseData.map((course: any, index: any) => (
            <CourseCard course={course} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default TraineeCourses