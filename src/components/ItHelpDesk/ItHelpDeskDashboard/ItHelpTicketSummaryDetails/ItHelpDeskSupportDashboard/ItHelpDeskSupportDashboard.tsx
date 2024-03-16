import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Input, Row } from "antd";
import dateIcon from '../../../../../assets/icons/ItHelpDesk/dateIcon.svg'
import "./ItHelpDeskSupportDashboard.scss";
import chatImages from '../../../../../assets/icons/ItHelpDesk/chatImages.svg'
import documentImages from '../../../../../assets/icons/ItHelpDesk/documentImages.svg'
import profile from '../../../../../assets/images/itHelpDesk/profile.svg'
import chatAmount from '../../../../../assets/images/itHelpDesk/chatAmount.svg'
import UploadChat from '../../../../../assets/images/itHelpDesk/uploadChat.svg'
import chatEmoji from '../../../../../assets/images/itHelpDesk/emojiImage.svg'

const ItHelpDeskSupportDashboard = () => {
  return (
    <div className="wrap-support-dashboard">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" sm={24} md={24} lg={10} xl={7} >
          <div className="wrap-chat" style={{ backgroundColor: "" }}>
            <div className="wrap-profile-image">
              <Avatar size={235}  style={{ marginTop: "16px",border:"5px solid #34BC85" }}  src={profile}/>
            </div>
            <div className="chat-name">
              <h6 className="m-0 fs-14 fw-600">Name</h6>
              <p className="m-0 fs-14 fw-400">David Williams</p>
            </div>
            <div className="chat-user-type">
              <h6 className="m-0 fs-14 fw-600">User Type</h6>
              <p className="m-0 fs-14 fw-400">Health Carer Assistant</p>
            </div>
            <div className="chat-email">
              <h6 className="m-0 fs-14 fw-600">Email</h6>
              <p className="m-0 fs-14 fw-400">davidwilliams@gmail.com</p>
              <hr />
            </div>
            <div>
              <div className="d-flex justify-between chat-margin">
                <h6 className="m-0 fw-700 fs-14">Images</h6>
                <p className="m-0 fw-400 fs-14 cursor">Show all</p>
                {/* <hr /> */}
              </div>
              <div className="d-flex">
                <img src={chatImages} alt="" />
                <img src={chatImages} alt="" />
                <img src={chatImages} alt="" />

              </div>
            </div>
            <div className="wrap-chat-document">
              <div className="d-flex justify-between chat-margin">
                <h6 className="m-0 fw-700 fs-14">Documents</h6>
                <p className="m-0 fw-400 fs-14 cursor">Show all</p>
              </div>
              <div className="d-flex align-center chat-margin">
                <div className="documents-img d-flex justify-center align-center cursor">
                  <img src={documentImages} alt="" />
                </div>
                <div className="document-content cursor">
                  <h6 className="m-0">Error doc</h6>
                  <span>197 kb</span>
                </div>
              </div>
              <div className="d-flex align-center chat-margin">
                <div className="documents-img d-flex justify-center align-center cursor">
                  <img src={documentImages} alt="" />
                </div>
                <div className="document-content cursor">
                  <h6 className="m-0">Error doc</h6>
                  <span>197 kb</span>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" sm={24}  md={24} lg={14} xl={17}>
          <div style={{ backgroundColor: "white", boxShadow: " 10px 54px 74px rgba(0, 0, 0, 0.03)" }}>
            <div className="d-flex justify-between" style={{ padding: "20px" }}>
              <div className="d-flex">
                <div>
                  <Avatar size={43} src={profile} style={{ marginRight: "18px" }} />
                </div>

                <div>
                  <h6 className="fw-500 fs-16 m-0">David Williams</h6>
                  <p className="m-0">Active</p>
                </div>

              </div>
              <div className="d-flex align-center justify-between" style={{ gap: "30px" }}>
                <p className="m-0 fs-14 fw-400 d-flex">
                  <img src={chatAmount} alt="amount"  style={{marginRight:"7px"}}/>
                  7654321</p>
                <p className="m-0 fs-400 d-flex"
                >
                  <img src={dateIcon} alt="dateicon" className="cursor" style={{marginRight:"7px"}}/>
                  20/05/2022</p>
              </div>
            </div>
          </div>

          <div className=" chat-padding">
            <div>
              <h6 className="text-center fw-500 fs-14 m-0"><span className="fw-500 fs-16">Subject:</span>Connection Error</h6>
            </div>
            <div>
              <h6 className="fw-500 fs-16 m-0"><span className="fw-500 fs-14">Description:</span> How can I fix an error from the homepage of my website?I can get to google fine, so it is not the internet connection.... But this message gives me nothing to work on. How can I get more info as to why my page is not working?</h6>
              <hr />
            </div>
          </div>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" xl={13} lg={20} md={24} sm={24}>
              <div className="d-flex chat-margin">
                <div className="img">
                  <Avatar size={43} src={profile} style={{ marginRight: "18px" }} />
                </div>
                <div className="message-content btn-secondary border-radius-10" style={{ width: "478px" }}>
                  <div className="d-flex justify-between" style={{ marginBottom: "11px" }}>
                    <h6 className="m-0 fs-14 fw-600">Elizabeth Swan <span> IT Coordinator</span></h6>
                    <p className="m-0 fw-400 fs-12">02:32 pm</p>
                  </div>
                  <div className="messages">
                    <p className="m-0 fs-14 fw-600"> Do you have a link to the site? </p>
                  </div>
                </div>
              </div>
              <div className="d-flex chat-margin">
                <div className="img">
                  <Avatar size={43} src={profile} style={{ marginRight: "18px" }} />
                </div>
                <div className="message-content btn-secondary border-radius-10" style={{ width: "478px" }}>
                  <div className="d-flex justify-between" style={{ marginBottom: "11px" }}>
                    <h6 className="m-0 fs-14 fw-600">Elizabeth Swan <span> IT Coordinator</span></h6>
                    <p className="m-0 fw-400 fs-12">02:32 pm</p>
                  </div>
                  <div className="messages">
                    <p className="m-0 fs-14 fw-600"> Do you have a link to the site? </p>
                  </div>
                </div>
              </div>
              <div className="d-flex chat-margin">
                <div className="img">
                  <Avatar size={43} src={profile} style={{ marginRight: "18px" }} />
                </div>
                <div className="message-content btn-secondary border-radius-10" style={{ width: "478px" }}>
                  <div className="d-flex justify-between" style={{ marginBottom: "11px" }}>
                    <h6 className="m-0 fs-14 fw-600">Elizabeth Swan <span> IT Coordinator</span></h6>
                    <p className="m-0 fw-400 fs-12">02:32 pm</p>
                  </div>
                  <div className="messages">
                    <p className="m-0 fs-14 fw-600"> Do you have a link to the site? </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="gutter-row " xl={13} lg={20} md={24} sm={24} style={{ marginTop: "30px" }}>
              <div>
                <div className="d-flex chat-margin">
                  <div className="img">
                    <Avatar size={43} src={profile} style={{ marginRight: "18px" }} />
                  </div>
                  <div className="message-content border-radius-10" style={{ width: "478px", backgroundColor: "#EFF0F7", padding: "12px 35px" }}>
                    <div className="d-flex justify-between" style={{ marginBottom: "11px" }}>
                      <h6 className="m-0 fs-14 fw-600">Elizabeth Swan <span> IT Coordinator</span></h6>
                      <p className="m-0 fw-400 fs-12">02:32 pm</p>
                    </div>
                    <div className="messages">
                      <p className="m-0 fs-14 fw-600"> Do you have a link to the site? </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-margin">
                  <div className="img">
                    <Avatar size={43} src={profile} style={{ marginRight: "18px" }} />
                  </div>
                  <div className="message-content border-radius-10" style={{ width: "478px", backgroundColor: "#EFF0F7", padding: "12px 35px" }}>
                    <div className="d-flex justify-between" style={{ marginBottom: "11px" }}>
                      <h6 className="m-0 fs-14 fw-600">Elizabeth Swan <span> IT Coordinator</span></h6>
                      <p className="m-0 fw-400 fs-12">02:32 pm</p>
                    </div>
                    <div className="messages">
                      <p className="m-0 fs-14 fw-600"> Do you have a link to the site? </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col className="gutter-row" span={24}>
              <div className="d-flex align-center justify-center gap">
               <div style={{position:"relative",width:"100%"}}> 
                <Input placeholder=""  style={{boxShadow:"inset 0px 0px 4.32223px rgba(0, 0, 0, 0.2)",borderRadius:"5.18667px"}} 
                // suffix={<img src={UploadChat  && chatEmoji} alt="search icon" className="icon" />}
                // suffix={<img src={chatEmoji} alt="search icon" className="icon" />}
                />
                <div className="d-flex" style={{position:"absolute",right:"25px",top:"12px"}}>
                 <img src={UploadChat} alt="Image 1" style={{marginRight:"10px",cursor:"pointer"}}/>
                 <img src={chatEmoji} alt="Image 2" className="cursor"/>
                </div>
                </div>
                <Button className="btn-secondary cursor">Send</Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ItHelpDeskSupportDashboard;
