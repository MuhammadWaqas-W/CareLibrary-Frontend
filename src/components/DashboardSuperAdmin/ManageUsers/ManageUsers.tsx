import { Card, Col, Row } from "antd";
import { v4 as uuidv4 } from "uuid";
import { ManageUsersCards } from "../../../mock/ManageUserData";
import "./ManageUsers.scss";

const ManageUsers = () => {

//Mian
  return (
    <Row gutter={[30, 30]}>
      {ManageUsersCards.map((card) => {
        return (
          <Col
            xs={24}
            sm={24}
            xl={12}
            lg={24}
            md={24}
            key={uuidv4()}
            // style={{ paddingBottom: "30px" }}
          >
            <Card
              className="border-radius-8 manage-users-card"
              style={{
                boxShadow:
                  "-7.07129px 7.07129px 10.6069px rgba(131, 164, 249, 0.15)",
              }}
            >
              <div style={{ display: "flex" }}>
                <div
                  className="d-flex align-center"
                  style={{
                    background:
                      card?.cardTitle === "Manage Users"
                        ? "#f7b9231a"
                        : "rgb(9 175 66 / 10%)",
                    padding: "10px",
                    borderRadius: "50px",
                    width: "53",
                    height: "53px",
                  }}
                >
                  <img
                    src={card?.cardIcon}
                    alt="cardicon"
                    height={35}
                    width={35}
                  />
                </div>
                <div style={{ marginLeft: "3px" }}>
                  <p
                    className="fs-16 fw-500 card-heading"
                    style={{
                      marginTop: "0px",
                      marginLeft: "8px",
                      marginBottom: "0px",
                    }}
                  >
                    {card?.cardTitle}
                  </p>
                  <p
                    className="fs-20 fw-500  label-color "
                    style={{
                      color: "#152536",
                      marginLeft: "8px",
                      marginTop: "0px",
                    }}
                  >
                    50
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", marginLeft: "35px" }}>
                {card.usersStatus.map((status) => {
                  return (
                    <Col xl={12} sm={12} md={12} lg={12} key={uuidv4()}>
                      <div className="d-flex ">
                        <img src={status.userStatusIcon} alt="" height={13} width={13} />
                        <div style={{ marginLeft: "9px" }}>
                          <p
                            className="card-text  fw-400 fs-12"
                            style={{ marginTop: "0px", marginBottom: "2px" }}
                          >
                            {status.userStaus}
                          </p>
                          <p
                            className="fs-14 fw-500 text selected-field-color m-0 "
                            style={{ color: "#6C757D" }}
                          >
                            {status?.totalUsers}
                          </p>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </div>
              <p
                style={{
                  textAlign: "end",
                  paddingBottom: "0px",
                  color: "#1890FF",
                }}
                className="fw-400 fs-12"
              >
                {card.linkText}
              </p>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default ManageUsers;
