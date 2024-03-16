import { Button } from "antd";

import viewIcon from '../../../assets/icons/view-icon.svg'
import editIcon from '../../../assets/icons/edit-icon-bold-blue.svg'
import deleteIcon from '../../../assets/icons/delete-icon-bold-blue.svg'
import { useNavigate } from "react-router-dom";
import DeleteModal from "../../../shared/DeleteModal/DeleteModal";
import { useState } from "react";

const CourseCard = ({ courseData }: any) => {
  const navigate = useNavigate()


  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const handleDeleteSubmit = () => {
    setIsDeleteModal(false);
  };
  const handleCancelSubmit = () => {
    setIsDeleteModal(false);
  };

  return (
    <>
      <div className="card">
        <div className="img-wrapper">
          <img src={courseData?.image} alt="Course 1" />
          <div className="overlay-wrapper">
            <Button onClick={() => navigate(`/manage-courses/courses-detail/${courseData.id}`)} className="read-more-btn fs-16 fw-600">Read more</Button>
          </div>
        </div>
        <div className="card-content">
          <h2 className="title fs-14 fw-400">{courseData?.title}</h2>
          <p className="category fs-12 fw-700">
            Category : <span>{courseData?.category}</span>
          </p>
          <div className="flex-bottom-icons" style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: "10px" }}>
            <img className="cursor-pointer" onClick={() => navigate(`/manage-courses/courses-detail/${courseData.id}`)} src={viewIcon} alt="" />
            <img className="cursor-pointer" onClick={() => navigate(`/manage-courses/edit-course/${courseData.id}`)} src={editIcon} alt="" />
            <img className="cursor-pointer" onClick={()=> setIsDeleteModal(true)} src={deleteIcon} alt="" />
          </div>
        </div>
        <img
          className={courseData.courseType === "optional" ? "icon" : "new"}
          src={courseData?.icon}
          alt="icon"
        />

      </div>

      <DeleteModal
        setDeleteModal={setIsDeleteModal}
        deleteModal={isDeleteModal}
        submitTitle='Cancel'
        cancelTitle='Yes, Discard'
        title='Do you want to discard this Course?'
        onSubmit={handleDeleteSubmit}
        onCancel={handleCancelSubmit}
      />
    </>

  );
};

export default CourseCard;
