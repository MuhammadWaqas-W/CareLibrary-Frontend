import { Button, Input, Pagination, Table } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShiftBookingBtn, ShiftBookingTableData } from "../../../mock/ShiftManageData";
import DirectShiftModal from "./ShiftsModals/DirectShiftModal/DirectShiftModal";
import PostShift from "./ShiftsModals/PostShiftModal/PostShiftModal";
import ActionIcon from "../../../assets/icons/ShiftManger/action-icon.svg";
import AllocateStaffIcon from "../../../assets/icons/ShiftManger/allocate-staff-icon.png";
import ModifyStaffIcon from "../../../assets/images/manageShift/modifyIcon.png";
import PostShiftIcon from "../../../assets/images/manageShift/postShift.png";
import CancelShiftIcon from "../../../assets/icons/ShiftManger/cancel-shift-icon.png";
import CancelShiftModal from "./ShiftsModals/CancelShiftModal/CancelShiftModal";
import "./ShiftBooking.scss";
import ModifyStaffRequirement from "./ShiftsModals/ModifyStaffRequirement/ModifyStaffRequirement";
import AllocateShift from "./ShiftsModals/AllocateShift/AllocateShift";
import { ColumnsType } from "antd/es/table";
import ShiftManageFilters from "./ShiftManageFilters/ShiftManageFilters";
import SearchIcon from "../../../assets/images/OnBoarding/Search.svg";
import DropdownNew from "./DropDown/DropDown";

const ShiftBooking = () => {
  const [isPostShiftModalOpen, setIsPostShiftModalOpen] = useState<boolean>(false);
  const [isDirectShiftModalOpen, setIsDirectShiftModalOpen] = useState<boolean>(false);
  const [isCancelShiftModalOpen, setIsCancelShiftModalOpen] = useState<boolean>(false);
  const [isModifyStaffModalOpen, setIsModifyStaffModalOpen] = useState<boolean>(false);
  const [isAllocateShiftModalOpen, setIsAllocateShiftModalOpen] = useState<boolean>(false);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 5 });
  const [cancelShiftData, setCancelShiftData] = useState("");
  const [count, setCount] = useState<any>(0);
  const [allocateShiftData, setAllocateShiftData] = useState({
    careHome: "",
    shiftDate: "",
    userType: "",
    chooseShift: "",
    startTime: "",
    endTime: "",
    department: "",
    requestedBy: "",
    staffName: "",
    acceptence: false,
    information: "",
    provideNumber: false,
    orderNumber: "",
  });

  const handleAddModal = (value: any, type: string) => {
    setAllocateShiftData({ ...allocateShiftData, [type]: value });
  };

  const navigate = useNavigate();

  const columns: ColumnsType<any> = [
    {
      title: "Sr #",
      dataIndex: "id",
      key: "id",
      render: (text: any) => <span className="fs-14 fw-400 m-0 line-height-22 title-color">{text}</span>,
    },
    {
      title: "Shift Date",
      dataIndex: "shiftDate",
      key: "shiftDate",
      render: (text: any) => <span className="fs-14 fw-400 m-0 line-height-22 title-color">{text}</span>,
    },
    {
      title: "Shift Type",
      dataIndex: "shiftType",
      key: "shiftType",
      render: (text: any) => <span className="fs-14 fw-400 m-0 line-height-22 title-color">{text}</span>,
    },
    {
      title: "Staff Type",
      dataIndex: "staffType",
      key: "staffType",
      render: (text: any) => <span className="fs-14 fw-400 m-0 line-height-22 title-color">{text}</span>,
    },
    {
      title: "Requested By",
      dataIndex: "requestedBy",
      key: "requestedBy",
      render: (text: any) => <span className="fs-14 fw-400 m-0 line-height-22 title-color">{text}</span>,
    },
    {
      title: "Staff Required",
      dataIndex: "staffRequired",
      key: "staffRequired",
      render: (text: any) => <span className="fs-14 fw-400 m-0 line-height-22 title-color">{text}</span>,
    },
    {
      title: "Shift Status",
      dataIndex: "shiftStatus",
      key: "shiftStatus",
      render: (text: any) => (
        <span
          className="fs-14 fw-700 m-0 line-height-22 title-color"
          style={{ color: text === "Booking Awaiting" ? "#F7B923" : text === "Partially Booked" ? "#65CDF0" : text === "Booking Completed" ? "#52C41A" : "" }}
        >
          {text}
        </span>
      ),
    },
    {
      title: "Action",
      dataIndex: "",
      key: "action",
      render: (_: any, data: any) => (
        <DropdownNew
          items={[
            {
              label: (
                <div className="d-flex flex-column" style={{ gap: "15px", padding: "8px 8px" }}>
                  {data.shiftStatus === "Booking Awaiting" && (
                    <div className="d-flex align-center" style={{ gap: "18px" }} onClick={() => setIsAllocateShiftModalOpen(true)}>
                      <img src={AllocateStaffIcon} alt="AllocateStaff" />
                      <span className="fs-14 fw-400 line-height-22 title-color">Allocate Staff</span>
                    </div>
                  )}

                  <div className="d-flex align-center" style={{ gap: "18px" }} onClick={() => setIsModifyStaffModalOpen(true)}>
                    <img src={ModifyStaffIcon} alt="ModifyStaff" />
                    <span className="fs-14 fw-400 line-height-22 title-color">Modify staff requirement</span>
                  </div>

                  {data.shiftStatus !== "Booking Completed" && (
                    <div className="d-flex align-center" style={{ gap: "18px" }} onClick={() => setIsPostShiftModalOpen(true)}>
                      <img src={PostShiftIcon} alt="PostShift" />
                      <span className="fs-14 fw-400 line-height-22 title-color">Post Shift</span>
                    </div>
                  )}
                  <div className="d-flex align-center" style={{ gap: "18px" }} onClick={() => setIsCancelShiftModalOpen(true)}>
                    <img src={CancelShiftIcon} alt="CancelShift" />
                    <span className="fs-14 fw-400 line-height-22 title-color">Cancel Shift</span>
                  </div>
                </div>
              ),
              key: "key",
            },
          ]}
        >
          <img src={ActionIcon} alt="icon" className="cursor-pointer" />
        </DropdownNew>
      ),
    },
  ];

  const handleBookingBtn = (item: any) => {
    if (item.id === "1") {
      setIsPostShiftModalOpen(true);
    } else if (item.id === "2") {
      setIsDirectShiftModalOpen(true);
    } else if (item.id === "3") {
      navigate("/shift-manager/confirmed-shift");
    } else if (item.id === "4") {
      navigate("/shift-manager/unfilled-shift");
    } else if (item.id === "5") {
      navigate("/shift-manager/unpublished-shift");
    }
  };

  return (
    <>
      <div className="shift-booking-wrapper">
        <div className="shift-booking-filters bg-white border-radius-10 w-100">
          <div className="shift-manager-filter">
            <ShiftManageFilters />
          </div>
          <div className="booking-btn-wrapper d-flex align-center">
            {ShiftBookingBtn.map((item: any) => (
              <div className="booking-btn-content" key={item.id}>
                <Button type="primary" style={{ backgroundColor: item.color }} onClick={() => handleBookingBtn(item)}>
                  {item.btnText}
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className="shift-booking-table">
          <div className="d-flex justify-between align-center">
            <Pagination
              current={pagination.current}
              // responsive={true}
              showSizeChanger={true}
              defaultPageSize={5}
              pageSize={pagination.pageSize}
              rootClassName="custom-pagination-wrapper-class"
              total={ShiftBookingTableData.length}
              // showTotal={(total) => `Total ${total} items`}
              onChange={(current, pageSize) => setPagination({ current, pageSize })}
            />
            <div className="input-search-wrapper d-flex w-100" style={{maxWidth: "350px"}}>
              <Input className="w-100" placeholder="search" prefix={<img src={SearchIcon} alt="search icon" className="icon" width={20} height={20} />} style={{ maxWidth: "450px", marginBottom: "5px" }} />
            </div>
          </div>
          <Table
            columns={columns}
            dataSource={ShiftBookingTableData}
            pagination={pagination}
            className="booking-table-content"
            scroll={{ x: "max-content" }}
            onChange={(pagination: any) => setPagination(pagination)}
          />
        </div>
      </div>
      <PostShift isPostShiftModalOpen={isPostShiftModalOpen} setIsPostShiftModalOpen={setIsPostShiftModalOpen} />
      <DirectShiftModal isDirectShiftModalOpen={isDirectShiftModalOpen} setIsDirectShiftModalOpen={setIsDirectShiftModalOpen} />
      <ModifyStaffRequirement open={isModifyStaffModalOpen} onCancel={() => setIsModifyStaffModalOpen(false)} counter={count} setCounter={setCount} />
      <AllocateShift open={isAllocateShiftModalOpen} onCancel={() => setIsAllocateShiftModalOpen(false)} allocateShift={allocateShiftData} handleChange={handleAddModal} />
      <CancelShiftModal
        placeholder={"Staff are not Avaliable"}
        label={"Specify reason for Cancelling Shift"}
        open={isCancelShiftModalOpen}
        onCancel={() => setIsCancelShiftModalOpen(false)}
        onChange={(e: any) => setCancelShiftData(e.target.value)}
      />
    </>
  );
};

export default ShiftBooking;
