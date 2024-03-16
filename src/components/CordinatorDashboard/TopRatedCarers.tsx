import { useState } from "react";
import { Rate } from "antd";
import { v4 as uuidv4 } from "uuid";
import User1 from "../../assets/images/MockImages/user-sm-1.png";
import User2 from "../../assets/images/MockImages/user-sm-2.png";
import User3 from "../../assets/images/MockImages/user-sm-3.png";
import User4 from "../../assets/images/MockImages/user-sm-4.png";
import User5 from "../../assets/images/MockImages/user-sm-5.png";
import Message from "../../assets/images/CordinatorDashboard/msg.png";
import Call from "../../assets/images/CordinatorDashboard/call.png";
import CallModal from "./Modals/CallModal";
import MessageMailModal from "./Modals/MessageMailModal";
import "./CordinatorDashboard.scss";
import { useNavigate } from "react-router-dom";
import ViewProfile from "../OnBoarding/Carer/ViewProfile/ViewProfile";

const TopRatedCarers = () => {
  const navigate = useNavigate();
  const [isShowCallModalOpen, setIsShowCallModalOpen] = useState(false);
  const [isShowMailModalOpen, setIsShowMailModalOpen] = useState(false);
  const [IsProfileModal, setIsProfileModal] = useState(false);

  const topCarers = [
    {
      img: User1,
      name: "Emily",
      designation: "Health Care Assisstant",
      ratings: 4,
    },
    {
      img: User2,
      name: "Dany",
      designation: "Health Care Assisstant",
      ratings: 4,
    },
    {
      img: User3,
      name: "Thomas",
      designation: "Health Care Assisstant",
      ratings: 3,
    },
    {
      img: User4,
      name: "James",
      designation: "Health Care Assisstant",
      ratings: 3,
    },
  ];
  return (
    <div className="w-100">
      {topCarers.map((item: any) => (
        <div className="rating d-flex" key={uuidv4()}>
          <div className="d-flex" style={{ gap: "14px" }}>
            <img src={item.img} alt={item.name} height={40} width={40} />
            <div>
              <p className="fs-14 m-0 fw-600 title-color">{item.name}</p>
              <p className="m-0 fs-12 label-color">{item.designation}</p>
              <Rate disabled allowHalf defaultValue={item.ratings} />
            </div>
          </div>
          <div className="icons d-flex">
            <img
              src={User5}
              alt="userimg"
              width={28}
              height={28}
              className="cursor-pointer"
              onClick={() => setIsProfileModal(true)}
            />
            <img
              src={Message}
              alt="msgimg"
              width={28}
              height={28}
              className="cursor-pointer"
              onClick={() => setIsShowMailModalOpen(true)}
            />
            <img
              src={Call}
              alt="callimg"
              width={28}
              height={28}
              className="cursor-pointer"
              onClick={() => setIsShowCallModalOpen(true)}
            />
          </div>
        </div>
      ))}
      <CallModal
        isShowCallModalOpen={isShowCallModalOpen}
        setIsShowCallModalOpen={setIsShowCallModalOpen}
      />
      <MessageMailModal
        isShowMailModalOpen={isShowMailModalOpen}
        setIsShowMailModalOpen={setIsShowMailModalOpen}
      />
      <ViewProfile
        IsProfileModal={IsProfileModal}
        setIsProfileModal={setIsProfileModal}
      />
    </div>
  );
};

export default TopRatedCarers;
