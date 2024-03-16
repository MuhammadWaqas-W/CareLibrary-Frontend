import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { ManageUsersData } from "../../../mock/ManageUserData";
import { Card, Col, Layout, Row } from "antd";
import "./ManageUsers.scss"
import "../../../sass/common.scss"
import AddUserTypeModal from "../AddUserTypeModal/AddUserTypeModal";
import { useState } from "react";
const ManageUserTypes = () => {
  const [isOpenUserTypeModal,setIsOpenuserTypeModal]=useState<any>(false)
  
  const handleSaveSelectUser = (userData:any) => {
    if (Object.keys(userData).length !== 0) {
    ManageUsersData.splice(ManageUsersData.length - 1, 0, userData);
      
    }
    setIsOpenuserTypeModal(false);
  };
  return (
    <Layout className="border-radius-8 select-user-types" style={{ backgroundColor: "#FFFFFF",  padding: "40px 84px 94px 84px" }}>
      <div style={{ textAlign: "center" }}>
        <p className="fs-28 fw-500 grey-color" style={{ marginTop:"0px",paddingBottom:"58px" }}>
        SELECT USER TYPE
        </p>
      </div>
      <Row gutter={[80, 30]}>
        {ManageUsersData?.map((card: any, index: number) => (
          <Col xs={24} md={24} sm={24} lg={24}  xl={24} xxl={8} key={uuidv4()}>
            <Link
              to={card?.path}
              style={{ textDecoration: "none", width: "100%" }}
            >
              <Card
                className="card-hover-color cursor-pointer"
                onClick={()=>{ card.title==="Add User Type"? setIsOpenuserTypeModal(true):setIsOpenuserTypeModal(false)}}
                style={{
                  boxShadow: "none",
                  borderRadius: "22px",
                  border:card?.cardBorder,
                  minHeight:"260px"
                }}
              >
                <div className={ card.title==="Add User Type"? "add-user-image":""}
                  style={{
                    display: "flex",
                    color: "#212121",
                    paddingTop: "4px",
                    justifyContent: "center",
                    flexDirection: "column",
                    borderRadius: "6px",
                  }}
                >
                  <img src={card?.icon} alt="icon" className={ card.title!=="Add User Type"? "border-radius-8  select-user-image":"add-user-image"} height={51} width={51}  style={{display:"block",margin:"auto",backgroundColor:card?.iconBackground,}}/>
                  <div style={{ display: "block", textAlign: "center" }}>
                    <p
                      className="fs-16 fw-500"
                      style={{ color:"#14142B",marginTop:"18px 18px" }}
                    >
                      {card?.title==="Add User Type"?<p>Add User <span className="fw-500 fs-16" style={{color:"#EE2E7E"}}>Type</span></p>:card?.title}
                    </p>
                    <p
                      className="fs-16 fw-400"
                      style={{ color:"#4E4B66" }}
                    >
                      {card?.description}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
            {(isOpenUserTypeModal &&card.title==="Add User Type") && <AddUserTypeModal handleSave={handleSaveSelectUser} setIsOpenuserTypeModal={setIsOpenuserTypeModal} isOpenUserTypeModal={isOpenUserTypeModal} />}
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default ManageUserTypes;
