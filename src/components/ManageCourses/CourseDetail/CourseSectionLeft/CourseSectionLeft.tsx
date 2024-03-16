import React from 'react'
import courseCardImage from '../../../../assets/images/ManageCourse/CourseDetails/image 18.png'
import infoIcon from "../../../../assets/icons/ManageCourse/CourseDetails/info-icon.svg"
import usersIcon from "../../../../assets/icons/ManageCourse/CourseDetails/users-icon.svg"

import './CourseSectionLeft.scss'
import { Rate } from 'antd'
const CourseSectionLeft = () => {
  return (
    <div className='course-section-left'>
      <div className="course-card">
        <img src={courseCardImage} alt="" style={{ width: "100%", height:"238px" }} />
        <div className='fs-16 fw-500 text-center center--box' style={{ marginTop: "43px", width: '80%' }}>BLS: Adults & Children , AED and Recovery Position</div>
        <div className="course-ratings d-flex justify-center" style={{ gap: '10px', marginTop: "15px" }}>
          <span className='orange-color fs-24 fw-600'>4.0</span>
          <Rate className='custom-rate' disabled defaultValue={4} />
        </div>
      </div>
      <div style={{ marginTop: '26px' }}>
        <label className='fs-16 fw-600 form-heading-color' style={{ marginRight: "10px" }}>Author</label>
        <span className='fs-14 fs-600' style={{ color: '#898989' }}>Neil Armstrong</span>
      </div>
      <div className='d-flex align-items-center justify-between' style={{ marginTop: '10px' }}>
        <div className='d-flex align-items-center' style={{ gap: '10px' }}><img src={infoIcon} alt="" /><span className='blue-color fs-14 fw-600'>Last updated 2/2021</span></div>
        <div className='d-flex align-items-center' style={{ gap: '10px' }}><img src={usersIcon} alt="" /><span className='fs-14 fw-600' style={{color:"#0E918C"}}>21</span></div>
      </div>
    </div>
  )
}

export default CourseSectionLeft