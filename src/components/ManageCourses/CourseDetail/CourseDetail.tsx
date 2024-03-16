import { Col, Rate, Row } from 'antd'
import React from 'react'

import "./CourseDetail.scss"
import CourseSectionLeft from './CourseSectionLeft/CourseSectionLeft'
import CourseSectionMiddle from './CourseSectionMiddle/CourseSectionMiddle'

import courseRightImsge from '../../../assets/images/ManageCourse/CourseDetails/right-content-image.png'

const CourseDetail = () => {
  return (
    <div className='course-details-main-wrapper'>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={24} lg={10} xl={6}>
          <CourseSectionLeft />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
         <CourseSectionMiddle />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={6}>
          <div className='course-section-right'>
            <div className="lecture-contents-right">
              <div className="lecture-wrapper-image">
                <img src={courseRightImsge} alt="" />
              </div>
              <div className="content-columns height--50 border--low center--box d-flex"><span className='fs-14 fw-400'>Video Duration:</span><span> 15 min</span></div>
              <div className="content-columns height--50 border--low center--box d-flex"><span className='fs-14 fw-400'>Video Medium:</span><span>English</span></div>
              <div className="content-columns height--50 border--low center--box d-flex"><span className='fs-14 fw-400'>Course Validity:</span><span>3 Years</span></div>
              <div className="content-columns height--50 border--low center--box d-flex"><span className='fs-14 fw-400'>Course Duration:</span><span>1 week</span></div>
              <div className="content-columns center--box" style={{paddingTop:"10px"}}><span className='fs-14 fw-400'>Who can Join:</span><span>This Course is more Suitable forhealthcare professionals and other personnel whoneed to know how to perform CPR and other basic cardiovascular life support skills in a wide variety of in-facility and prehospital settings.</span></div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default CourseDetail