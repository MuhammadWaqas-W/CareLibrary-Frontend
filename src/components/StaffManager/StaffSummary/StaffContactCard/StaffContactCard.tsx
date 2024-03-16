import React from "react";
import { staffContacts } from "../../../../mock/StaffManagerMock";
import './StaffContactCard.scss'

const StaffContactCard = () => {
  return (
    <>
      <div className="staff-contact-card-wrapper">
        <h4 className="fs-20 fw-500 line-height-28 title-color m-0" style={{paddingTop:'10px'}}>Contact</h4>
        {staffContacts.map((item: any) => (
          <div className="staff-contact-data d-flex align-center">
            <img src={item.icon} alt="contacts-img" />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </>
  );
};
export default StaffContactCard;