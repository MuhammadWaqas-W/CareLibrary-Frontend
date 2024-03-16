import { Modal } from "antd";
import HomeImg from "../../../assets/images/staffManager/home.png";
import './ShiftInfoModal.scss';


const ShiftInfoModal = (props: any) => {
  const { isMoreInfo, setIsMoreInfo } = props;
  return (
    <>
      <Modal
        title="More Information "
        centered
        width={784}
        open={isMoreInfo}
        onOk={() => setIsMoreInfo(false)}
        onCancel={() => setIsMoreInfo(false)}
        footer={false}
        className="staff-more-information-modal"
      >
        <div className="more-info-modal-wrapper">
          <div className="more-info-heading d-flex align-center">
            <img src={HomeImg} alt="homeIcon" />
            <span className="fs-24 fw-600 line-height-32">
              Tall Tree Care Home
            </span>
          </div>

          <div className="more-information-data d-flex flex-column">
            <div className="d-flex align-center more-information-content" >
              <span className="fs-16 fw-600 line-height-22">Address:</span>
              <span className="fs-16 fw-400 line-height-22">
                Tho Grip, Linton, Cambridge, England, Cambridgeshire, CB21 4XN
              </span>
            </div>
            <div className="d-flex align-center more-information-content" >
              <span className="fs-16 fw-600 line-height-22">
                Total Shift Hours:
              </span>
              <span className="fs-16 fw-400 line-height-22">9.00 Hrs.</span>
            </div>
            <div className="d-flex align-center more-information-content" >
              <span className="fs-16 fw-600 line-height-22">Date:</span>
              <span className="fs-16 fw-400 line-height-22">
                May 22,Sun - 2022
              </span>
            </div>
            <div className="d-flex align-center more-information-content" >
              <span className="fs-16 fw-600 line-height-22">Shift Timing:</span>
              <span className="fs-16 fw-400 line-height-22">07:30 - 17:00</span>
            </div>
            <div  className="d-flex align-center more-information-content" >
              <span className="fs-16 fw-600 line-height-22">
                Total Shift Pay:
              </span>
              <span className="fs-16 fw-400 line-height-22">£275.00</span>
            </div>
            <div  className="d-flex align-center more-information-content" >
              <span className="fs-16 fw-600 line-height-22">Department:</span>
              <span className="fs-16 fw-400 line-height-22">DEP-1</span>
            </div>
            <div className="d-flex align-center more-information-content" >
              <span className="fs-16 fw-600 line-height-22">
                Distance from you:
              </span>
            </div>
            <span className="fs-16 fw-400 line-height-22">
              About: Care homes provide accommodation and personal care for
              people who need extra support in their daily lives. Personal care
              might include help with eating, washing, dressing, going to the
              toilet or taking medication
            </span>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ShiftInfoModal;