import React, { useState } from 'react'
import './ManageCourses.scss'

import searchIcon from "../../assets/icons/search.svg";
import { Button, Input } from 'antd';
import ManageCoursesFilters from './ManageCoursesFilters/ManageCoursesFilters';
import { useNavigate } from 'react-router-dom';
import CoursesList from './CoursesCards/CoursesList';
import DeleteModal from '../../shared/DeleteModal/DeleteModal';

const ManageCourses = () => {
  const navigate = useNavigate()



  
    
  return (
    <div className='manage-courses-info-main-wrapper'>
      <div className="inner-main-head">
        <Button className='add-new-course-btn' onClick={() => navigate(`/manage-courses/add-courses`)}>
          <span className='fs-16 fw-600 border-radius-2'>Add New Course</span>
        </Button>
        <div className="inset-main-head">
          {/* <div className="search-and-filters"> */}
          {/* </div> */}
            <ManageCoursesFilters />
          <Input
            className="search-input"
            placeholder="Search"
            prefix={<img src={searchIcon} alt="searchIcon" width={24} height={24} style={{ marginRight: '0.623rem' }} />}
          />
        </div>
      </div>

      <div className="cards-wrapper">
      <CoursesList />
      </div>

      

    </div>
  )
}

export default ManageCourses