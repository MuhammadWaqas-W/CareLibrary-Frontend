import { Fragment, useState } from "react";
import { Button, Col, Modal, Row } from "antd";
import { v4 as uuidv4 } from "uuid";
import ChangeShiftModal from "../ChangeShiftModal/ChangeShiftModal";
import CancellationModal from "../CancellationModal/CancellationModal";
import MockUser from "../../../../assets/BookingCalander/images/mock-user.png";
import DateIcon from "../../../../assets/BookingCalander/images/date.png";
import Ribbon from "../../../../assets/BookingCalander/images/ribbon.png";
import Close from '../../../../assets/images/OnBoarding/Close.svg';
import ReallocateModal from "../ReallocateModal/ReallocateModal";
import ModifyStaffRequirement from "../../../ShiftManager/ShiftBooking/ShiftsModals/ModifyStaffRequirement/ModifyStaffRequirement";
import "./ShiftInfo.scss";
import { useNavigate } from "react-router-dom";

function ShiftInfo(props: any) {
  const { isInfoModalOpen, setIsInfoModalOpen } = props;
  const eventStatus = isInfoModalOpen?.data?.event?._def?.extendedProps?.status;
  const navigate = useNavigate();

  const [isReallocateModalOpen, setIsReallocateModalOpen] = useState(false);
  const [isChangeShiftTimeOpen, setIsChangeShiftTimeOpen] = useState(false);
  const [isCancellationModalOpen, setIsCancellationModalOpen] = useState(false);
  const [isModifyStaffModalOpen, setIsModifyStaffModalOpen] = useState<boolean>(false);
  const [count, setCount] = useState<any>(0);

  const shiftInfoMock = [
    { heading: "Posted At", detail: "16/06/2022" },
    { heading: "Requested by", detail: "Ana Mihai" },
    { heading: "Entered by", detail: "Praveen" },
    { heading: "Start Time", detail: "08:50 Am" },
    { heading: "EndTime", detail: "08:50 pm" },
  ];
  return (
    <>
      <Modal
        closeIcon={< img src={Close} alt="close" />}
        centered
        width={791}
        title={<span className="fs-20 fw-600">Shift Information</span>}
        footer={false}
        className="shift-info"
        open={isInfoModalOpen.isToggle}
        onCancel={() => {
          setIsInfoModalOpen({ isToggle: false, data: {} });
        }}
      >
        <Row>
          <Col xs={24} sm={24} md={12} className="main-content">
            <img src={MockUser} alt="mock_user" />
            <h3 className="fs-20 fw-500 m-0">Davers Cour</h3>
            <div className="detail-wrapper">
              <img src={Ribbon} alt="ribbon" />
              <span className="fs-12 fw-500">Long Day</span>
            </div>
            <div className="detail-wrapper d-flex align-items-center">
              <img src={DateIcon} alt="date" />
              <span className="fs-12 fw-500">16/06/2022</span>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} >
            <Row className="details-content">
              {shiftInfoMock.map((data) => {
                return (
                  <Fragment key={uuidv4()}>
                    <Col xs={12} md={10} className="fs-14 fw-600 text-left">
                      {data.heading}:
                    </Col>
                    <Col xs={12} md={10} className='text-end'>{data.detail}</Col>
                  </Fragment>
                );
              })}
            </Row>
          </Col>
         
        </Row>
        <Row>
        {eventStatus !== "Completed by Staff" && (
            <Col xs={24} className="btn-wrapper d-flex">
              {eventStatus !== "Unpublished Shifts" && (
                <Button
                  type="primary"
                  className="relocate-shift-btn fs-14 fw-600"
                  onClick={() => {
                    setIsReallocateModalOpen(true);
                  }}
                >
                  Relocate Shift
                </Button>
              )}
              {eventStatus === "Unpublished Shifts" &&<Button type="primary" onClick={()=>navigate(`/booking-calendar/staff-availability`)} className="alocate-shift-btn fs-14 fw-600">Allocate Shift</Button>}
              {
                <Button
                  type="primary"
                  className="modify-num-btn  fs-14 fw-600"
                  onClick={() => {
                    setIsModifyStaffModalOpen(true);
                  }}
                >
                  Modify Number
                </Button>
              }
              {
                <Button
                  type="primary"
                  className="change-shift-btn  fs-14 fw-600"
                  onClick={() => {
                    setIsChangeShiftTimeOpen(true);
                  }}
                >
                  Change Shift Time
                </Button>
              }
              {eventStatus !== "Unpublished Shifts" &&
                <Button
                  type="primary"
                  className="cancel-shift-btn  fs-14 fw-600"
                  onClick={() => {
                    setIsCancellationModalOpen(true);
                  }}
                >
                  Cancel Shift
                </Button>
              }
            </Col>
          )}
        </Row>
      </Modal>
      {isReallocateModalOpen && (
        <ReallocateModal
          isReallocateModalOpen={isReallocateModalOpen}
          setIsReallocateModalOpen={setIsReallocateModalOpen}
        />
      )}
      {isChangeShiftTimeOpen && (
        <ChangeShiftModal
          isChangeShiftTimeOpen={isChangeShiftTimeOpen}
          setIsChangeShiftTimeOpen={setIsChangeShiftTimeOpen}
        />
      )}
      {isCancellationModalOpen && (
        <CancellationModal
          isCancellationModalOpen={isCancellationModalOpen}
          setIsCancellationModalOpen={setIsCancellationModalOpen}
        />
      )}
      {isModifyStaffModalOpen && (
        <ModifyStaffRequirement
          open={isModifyStaffModalOpen}
          onCancel={() => setIsModifyStaffModalOpen(false)}
          counter={count}
          setCounter={setCount}
        />
      )}
      {/* {isCancelShiftModalOpen && 
      <DeleteModal deleteModal={isCancelShiftModalOpen} title="Are you sure you want to Cancel this Shift" 
      submitTitle="Yes" cancelTitle="No" setDeleteModal={setIsCancelShiftModalOpen} 
      onSubmit={()=>setIsCancelShiftModalOpen(false)} onCancel={()=>setIsCancelShiftModalOpen(false)}/>} */}
    </>
  );
}

export default ShiftInfo;
