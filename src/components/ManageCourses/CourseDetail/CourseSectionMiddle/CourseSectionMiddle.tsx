import { Button, Col, Collapse, Progress, Rate, Row } from 'antd'
import React, { useState } from 'react'
import "./CourseSectionMiddle.scss"

import arrowUp from '../../../../assets/icons/ManageCourse/CourseDetails/arrow-up.svg'
import videoIcon from '../../../../assets/icons/ManageCourse/CourseDetails/video-icon.svg'
import documentIcon from '../../../../assets/icons/ManageCourse/CourseDetails/document-Icon.svg'
import featureRewiewIcon from '../../../../assets/icons/ManageCourse/CourseDetails/feature-review.svg'
import userImage from '../../../../assets/images/ManageCourse/CourseDetails/user-image.svg'
import userOne from '../../../../assets/images/ManageCourse/CourseDetails/user-one.svg'

import arrowDownIcon from '../../../../assets/icons/arrow-down-icon.svg'

import ratingsStarIcon from '../../../../assets/icons/ManageCourse/CourseDetails/rating-stars.svg'
import ratingsBadgeIcon from '../../../../assets/icons/ManageCourse/CourseDetails/ratings-badge.svg'
import ratingsUsersIcon from '../../../../assets/icons/ManageCourse/CourseDetails/ratings-users.svg'
import ratingsPlayIcon from '../../../../assets/icons/ManageCourse/CourseDetails/ratings-play.svg'
import { useNavigate } from 'react-router-dom'

const { Panel } = Collapse;

const WhatYouWillLearnData = [
    {
        label: 'Review the literature on the correct way to use an AED (Automatic External Defibrillator)'
    },
    {
        label: 'Consists of a number of medical procedures provided to patients with life threatening conditions of the body, that cause pain or dysfunction to the person.'
    },
    {
        label: 'Have an understanding of how to manage a choking patient.Recognise the correct way to put a patient in recovery position.'
    },
    {
        label: 'To provide oxygen to the heart and the brain and to sustain tissue viability until definitive electrical or medical treatment'
    },
    {
        label: 'Understand the correct sequence in Basic Life Support.'
    },
]

const RequirementsData = [
    {
        label: 'The BLS Course is designed for healthcare professionals and other personnel who need to know how to perform CPR.'
    },
    {
        label: 'To gain an understanding of multi-professional principles of working together, in order to enhance the skills and confidence of carers'
    },
]
const CourseContentData = [
    {
        id: "1",
        label: "General Concepts of Basic Life Support",
        lecturesAndTime: "2 lectures - 24 min",
        content: [
            {
                title: "Introduction",
                icon: videoIcon,
                timeDuration: '23:46'
            },
            {
                title: "BLS Skills Training",
                icon: documentIcon,
                docDetails: '2 Pages'
            }
        ]
    },
    {
        id: "2",
        label: "BLS for Adults",
        lecturesAndTime: "2 lectures - 24 min",
        content: [
            {
                title: "Introduction",
                icon: videoIcon,
                timeDuration: '23:46'
            },
            {
                title: "BLS Skills Training",
                icon: documentIcon,
                docDetails: '2 Pages'
            }
        ]
    },
    {
        id: "3",
        label: "Use of Automated External Defibrillator ",
        lecturesAndTime: "2 lectures - 24 min",
        content: [
            {
                title: "Introduction",
                icon: videoIcon,
                timeDuration: '23:46'
            },
            {
                title: "BLS Skills Training",
                icon: documentIcon,
                docDetails: '2 Pages'
            }
        ]
    },
    {
        id: "4",
        label: "Relief of Choking",
        lecturesAndTime: "2 lectures - 24 min",
        content: [
            {
                title: "Introduction",
                icon: videoIcon,
                timeDuration: '23:46'
            },
            {
                title: "BLS Skills Training",
                icon: documentIcon,
                docDetails: '2 Pages'
            }
        ]
    },
    {
        id: "5",
        label: "AED for Children and Infants ",
        lecturesAndTime: "2 lectures - 24 min",
        content: [
            {
                title: "Introduction",
                icon: videoIcon,
                timeDuration: '23:46'
            },
            {
                title: "BLS Skills Training",
                icon: documentIcon,
                docDetails: '2 Pages'
            }
        ]
    },
]

const FeedbackAndRatings = [
    {
        progress: "75",
        ratingValue: "5"
    },
    {
        progress: "25",
        ratingValue: "4"
    },
    {
        progress: "0",
        ratingValue: "0"
    },
    {
        progress: "0",
        ratingValue: "0"
    },
    {
        progress: "0",
        ratingValue: "0"
    },
]

const ReviewsData = [
    {
        id: '1',
        userIcon: userOne,
        userName: 'Darshan C.',
        ratingsValue: 5,
        time: "4 weeks ago",
        remarks: 'Excellent course material and materials are shared in depth for each topic. Highly recommended if you are a beginner!!!'
    },
    {
        id: '2',
        userIcon: userOne,
        userName: 'Darshan C.',
        ratingsValue: 4,
        time: "4 weeks ago",
        remarks: 'Excellent course material and materials are shared in depth for each topic. Highly recommended if you are a beginner!!!'
    },
]

const CourseSectionMiddle = () => {

    const [activePanelKey, setactivePanelKey] = useState<any>('')
    const onChange = (key: any) => {
        setactivePanelKey(key)
    };

    const navigate = useNavigate()

    return (
        <div className='course-section-middle'>
            <div className='fs-20 fw-500'>What you’ll learn</div>
            <Row gutter={[20, 20]} style={{ marginTop: "30px" }}>
                {WhatYouWillLearnData.map((item, index) => (
                    <Col xs={24} sm={24} md={24} lg={24} xl={12} key={index}>
                        <div className='custom--list'>
                            <span className='fs-14 fw-400 title-color'>{item.label}</span>
                        </div>
                    </Col>
                ))}
            </Row>

            <div className='fs-20 fw-500 form-heading-color' style={{ marginTop: "20px" }}>Requirements</div>
            <Row gutter={[20, 20]} style={{ marginTop: "30px" }}>
                {RequirementsData.map((item, index) => (
                    <Col xs={24} sm={24} md={24} lg={24} key={index}>
                        <div className='custom--list'>
                            <span className='fs-14 fw-400 title-color'>{item.label}</span>
                        </div>
                    </Col>
                ))}
            </Row>
            <div className='fs-20 fw-500 form-heading-color' style={{ marginTop: "20px", marginBottom: "20px" }}>Description</div>
            <span className='fs-14 fw-400 title-color'>The American Heart Association’s Basic Life Support (BLS) training reinforces healthcare professionals’ understanding of the importance of early CPR and defibrillation, performing basic steps of early CPR and defibrillation, performing basic steps of CPR, relieving choking, using an AED, and the role of each link in the Chain of Survival. <br /><br /> Healthcare professionals learn to recognize several life-threatening emergencies, provide CPR to victims of all ages, use an AED, and relieve choking in a safe, timely and effective manner. <br /><br /> The BLS course trains participants to promptly recognize several life-threatening emergencies, give high-quality chest compressions, deliver appropriate ventilations and provide early use of an AED. Reflects science and education from the American Heart Association Guidelines Update for CPR and Emergency Cardiovascular Care (ECC)..</span>

            <div className='fs-20 fw-500' style={{ marginTop: "20px", marginBottom: "20px" }}>Course Content</div>
            <div className="wrapper-collapse">
                <Collapse accordion defaultActiveKey={['1']} onChange={onChange}>
                    {CourseContentData.map((content: any, index: any) => (
                        <Panel showArrow={false} header={
                            <div className='course-content-head d-flex align-items-center'>
                                <div className="d-flex align-items-center justify-between" style={{ width: "100%" }}>
                                    <div className="d-flex align-items-center" style={{ gap: '10px' }}>
                                        <img src={arrowUp} alt="" className={`${activePanelKey == content.id ? "" : 'rotate-90'}`} />
                                        <div className='fs-16 fw-500'>Section {index + 1} : {content.label}</div>
                                    </div>
                                    <span className='fs-12 fw-400'>{content.lecturesAndTime}</span>
                                </div>
                            </div>
                        } key={content.id}>
                            <>
                                {content.content.map((ele: any, indexEle: any) => (
                                    <div className="pannel-content-expandable" key={indexEle}>
                                        <div className='d-flex align-center justify-between align-center' style={{ height: "50px", padding: "0px 20px" }}>
                                            <div className="d-flex align-center" style={{ gap: '15px' }}>
                                                <img src={ele.icon} alt="" />
                                                <span className='fs-14 fw-600'>{ele.title}</span>
                                            </div>
                                            <div className="d-flex align-center" style={{ gap: '25px' }}>
                                                <span className='fs-12 fw-600' >Preview</span>
                                                <span className='fs-12 fw-600 text-end' style={{ color: "#898989", width: "68px" }}>{ele.timeDuration || ele.docDetails}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>

                        </Panel>
                    ))}

                </Collapse>
            </div>

            <div className='fs-20 fw-500 form-heading-color' style={{ marginTop: "20px", marginBottom: "20px" }}>Featured Review</div>
            <div className="wrapper-feature-review">
                <div className='d-flex' style={{ gap: '20px' }}>
                    <div className="flex-wrapper">
                        <img src={featureRewiewIcon} alt="" />
                    </div>
                    <div className='d-flex flex-column'>
                        <span className='fs-16 fw-500'>Johny Bairstow</span>
                        <span className='fs-12 fw-400'>13 courses</span>
                        <span className='fs-12 fw-400'>9 reviews</span>
                    </div>
                </div>
                <div className="feature-review-rating d-flex" style={{ gap: '10px', marginTop: "5px" }}>
                    <span className='orange-color fs-24 fw-600'>5.0</span>
                    <Rate className='custom-rate' disabled defaultValue={5} />
                </div>
            </div>
            <div className='fs-20 fw-500 form-heading-color' style={{ marginTop: "20px", marginBottom: "20px" }}>Instructor</div>
            <div className="wrapper-instructor">
                <div className="profile-instructor d-flex" style={{ gap: '20px', flexWrap:"wrap" }}>
                    <img src={userImage} alt="" />
                    <div className='d-flex flex-column'>
                        <span className='fs-16 fw-500'>Dr. Neil Thompson</span>
                        <span className='fs-12 fw-400'><img src={ratingsStarIcon} alt="" />&nbsp; 4.5 Instructor Rating</span>
                        <span className='fs-12 fw-400'><img src={ratingsBadgeIcon} alt="" />&nbsp; 648 reviews</span>
                        <span className='fs-12 fw-400'><img src={ratingsUsersIcon} alt="" />&nbsp; 756+ Carers</span>
                        <span className='fs-12 fw-400'><img src={ratingsPlayIcon} alt="" />&nbsp; 18 Courses</span>
                    </div>
                </div>
                <div className='fs-12 fw-400' style={{ marginTop: '20px' }}>Dr Neil Thompson is a highly experienced tutor and trainer. He is highly respected for his ability to explain complex ideas clearly and effectively. His gentle voice and unhurried approach are widely appreciated by online learners as will as attendees at his conferences and workshops. <br /><br /> He is an independent writer, educator and adviser based in Wales. He is also a visiting professor at the Open University in the UK.. He is a well-published author with over 200 publications to his name, including over 40 books, several of which are bestsellers. He has been a speaker at conferences in the UK, Ireland, Italy, Spain, Norway, the Netherlands, Greece, the Czech Republic, Turkey, Hong Kong, India, the United States, Canada and Australia. <br /><br /> He is a Fellow of the Chartered Institute of Personnel and Development, the Higher Education Academy and the Royal Society of Arts, and a member of the International Work Group on Death, Dying and Bereavement. He was formerly the editor of the US-based international journal, Illness, Crisis & Loss and now edits the free e-zine, THE humansolutions BULLETIN. His main interests are in the field of well-being: equality and diversity; conflict management; stress; loss, grief and trauma and reflective practice. He is a sought-after conference speaker, consultant and facilitator.</div>
            </div>

            <div className='feedback-and-ratings-wrapper d-flex' style={{ marginTop: "20px", marginBottom: "20px", gap: '40px' }}>
                <div className="left-area d-flex flex-column">
                    <div className='fs-20 fs-500'>Feedback & Rating</div>
                    <span className='orange-color fs-24 fw-600'>4.9</span>
                    <Rate className='custom-rate' disabled defaultValue={5} />
                    <span className='fs-12 fs-400'>Course Rating (20 Reviews)</span>
                </div>
                <div className='progress-and-ratings'>
                    {FeedbackAndRatings.map((item: any, index: any) => (
                        <div className="bar-progress-and-ratings d-flex align-center" key={index}>
                            <Progress className='wrapper-styles' strokeColor='#3290FC' strokeWidth={12} percent={item.progress} showInfo={false} />
                            <Rate className='custom-rate' disabled defaultValue={item.ratingValue} style={{ marginLeft: "10px" }} />
                            <span className='fs-14 fs-400' style={{ marginLeft: "10px", marginTop: "2px" }}>{item.progress}%</span>
                        </div>
                    ))}

                </div>
            </div>

            <div className='fs-20 fw-500' style={{ marginTop: "20px", marginBottom: "20px" }}>Reviews</div>
            <div className="reviews-wrapper">
                {ReviewsData.map((item: any, index: any) => (
                    <div className="inner-review-bx" key={index} style={{ marginTop: "20px" }}>
                        <div className="d-flex" style={{ gap: '20px', flexWrap: 'wrap' }}>
                            <img src={item.userIcon} alt="" />
                            <div className="d-flex flex-column" >
                                <span className='fs-15 fw-700'>{item.userName}</span>
                                <div className="d-flex align-center" style={{ gap: '10px', flexWrap: 'wrap' }}>
                                    <Rate className='custom-rate' disabled defaultValue={item.ratingsValue} />
                                    <span className='fs-14 fw-400 title-color'>{item.time}</span>
                                </div>
                            </div>
                        </div>
                        <div className='fs-14 fs-400 title-color' style={{ marginTop: "10px" }}>{item.remarks}</div>
                    </div>
                ))}
                <span className='orange-color fs-16 fw-500 d-flex align-center' style={{ gap: "5px", marginTop: "15px" }}>Show more <img src={arrowDownIcon} alt="" style={{ width: "6px", height: "6px" }} /></span>
            </div>

            <Button type='primary' className='btn-cancel' style={{ marginTop: "20px" }}
            // onClick={() => navigate(`/manage-courses`)}
            >
                Back
            </Button>

        </div>
    )
}
export default CourseSectionMiddle