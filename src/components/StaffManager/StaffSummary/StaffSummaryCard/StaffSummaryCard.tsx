import { Avatar } from "antd";
import Manager1 from "../../../../assets/images/MockImages/user-lg-2.png";
import React from "react";
import { staffSummaryBtn } from "../../../../mock/StaffManagerMock";
import { useNavigate } from 'react-router-dom'
import './StaffSummaryCard.scss';


const StaffSummaryCard = () => {
  const navigate = useNavigate();
  const handleStaffWidgits = (id: string, type: string) => {
    switch (type) {
      case 'Availability Calendar':
        navigate(`/staff-manager/staff-summary/availability-calendar`)
        break;
      default:
        break;
    }
  }
  return (
    <>
      <div className="staff-summary-card-wrapper">
        <div className="d-flex align-center justify-center staff-avatar">
          <Avatar
            src={Manager1}
            className="user-img"
            style={{
              height: 150,
              width: 150,
            }}
          />
        </div>
        <div
          className="d-flex"
          style={{
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <span className="fs-20 fw-600 line-height-28">
            Nassira Boateng
          </span>
          <span className="fs-14 fw-400 line-height-22">
            Registered General Nurse
          </span>
        </div>
        <div className="staff-summary-btn d-flex flex-column align-items-center">
          {staffSummaryBtn.map((item: any) => (
            <div className="booking-btn-content" key={item.id}>
              <button onClick={() => handleStaffWidgits(item.id, item.btnText)}
                type="button"
                className="white-color fs-14 fw-600 line-height-22"
                style={{
                  backgroundColor: item.id === '1' ? '#65CDF0' : item.id === '2' ? '#F7B923' : item.id === '3' || item.id === '4' ? '#fff' :'', border: item.id === '3' || item.id === '4' ? '1px solid #6E7191' : 'none',
                  color: item.id === '3' || item.id === '4' ? '#6E7191' : '#fff'
                }}
              >
                {item.btnText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default StaffSummaryCard;