import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import { ClientBookingShiftDetails } from '../../../mock/ClientBookingCalendarData';
import ShiftDetailsFilter from '../ShiftDetailsFilter/ShiftDetailsFilter';
import ViewIcon from "../../../assets/icons/ClientBookingCalendar/view-icon.png";
import './BookingShiftDetails.scss';
import ShiftDetailsViewModal from '../ShiftDetailsViewModal/ShiftDetailsViewModal';

const BookingShiftDetails = () => {
  const [isShiftInformationModal, setIsShiftInformationModal] = useState(false);
  const columns: ColumnsType<any> = [
    {
        title: 'Sr #',
        dataIndex: 'id',
        key: 'id',
        render: (text: any) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{text}</span>,
    },
    {
        title: 'Carer',
        dataIndex: 'carer',
        key: 'carer',
        render: (text: any) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{text}</span>,
    },
    {
        title: 'Job Role',
        dataIndex: 'jobRole',
        key: 'jobRole',
        render: (text: any) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{text}</span>,
    },
    {
        title: 'Shift Time',
        dataIndex: 'shiftTime',
        key: 'shiftTime',
        render: (text: any) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{text}</span>,
    },
    {
        title: 'Shift  Duration',
        dataIndex: 'shiftDuration',
        key: 'shiftDuration',
        render: (text: any) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{text}</span>,
    },
    {
        title: 'Department',
        dataIndex: 'department',
        key: 'department',
        render: (text: any) =>
            <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{text}</span>,
    },
    {
        title: 'Action',
        key: 'action',
        render: (_: any, ) => (
            <div className='cursor-pointer'>
                <img src={ViewIcon} alt="" onClick={() => setIsShiftInformationModal(true)} />
            </div >
        ),
    }


];
  return (
    <>
      <div className='clients-booking-shift-details'>
        <div className='clients-booking-wrap bg-white'>
          <h2 className='fs-20 fw-500 line-height-28 form-heading-color m-0'>Shifts Details </h2>
          <div className='clients-booking-filters'>
            <ShiftDetailsFilter />
          </div>
        </div>
        <div className='shift-booking-table'>
        <Table columns={columns} dataSource={ClientBookingShiftDetails} pagination={false} className="booking-shift-table-content" scroll={{ x: "max-content" }} />
        </div>
      </div>
      <ShiftDetailsViewModal isShiftInformationModal={isShiftInformationModal} setIsShiftInformationModal={setIsShiftInformationModal} />
    </>
  )
}

export default BookingShiftDetails