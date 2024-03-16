import React, { useState } from 'react'

// Ant Components
import { Col, Modal, Row } from 'antd'
import type { ColumnsType } from 'antd/es/table';

// Components
import CommonReportTable from '../CommonReportTable/CommonReportTable';
import CommonReportChildFilters from '../CommonReportChildFilters/CommonReportChildFilters';
import AppSnackbar from '../../../utils/AppSnackbar';

// Table and Filters Mock Data and Interface
import { TerminatedStaffMockData, TerminatedStaffReportFilters } from '../../../mock/ReportMockData/TerminatedStaffMockData';
import { terminatedStaffMockDataInterface } from '../../../types/ReportsInterface';

// SCSS
import "./TerminatedStaffList.scss";

// Assets
import modalBgImage from "../../../assets/images/Reports/modal-bg.png";

const TerminatedStaffList = () => {

    const [isOpenReActivateModal, setIsOpenReActivateModal] = useState<boolean>(false);

    // Terminated Staff List Table Columns
    const TerminatedStaffTableColumnData: ColumnsType<terminatedStaffMockDataInterface> = [
        {
            title: 'Sr #',
            dataIndex: 'key',
            key: 'key',
            render: (key: React.Key) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{key}</span>,
        },
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
            align: "center",
            render: (firstName: string) => (
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{firstName}</span>
            )
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
            align: "center",
            render: (lastName: string) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{lastName}</span>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            align: "center",
            render: (email: string) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{email}</span>,
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            align: "center",
            render: (phone: string) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{phone}</span>,
        },
        {
            title: 'User Role',
            dataIndex: 'userRole',
            key: 'userRole',
            align: "center",
            render: (userRole: string) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{userRole}</span>,
        },
        {
            title: 'DOJ',
            dataIndex: 'doj',
            key: 'doj',
            align: "center",
            render: (doj: string) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{doj}</span>,
        },
        {
            title: 'Reason For Leaving',
            dataIndex: 'reasonForLeaving',
            key: 'reasonForLeaving',
            align: "center",
            render: (reasonForLeaving: string) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{reasonForLeaving}</span>,
        },
        {
            title: 'Terminated At',
            dataIndex: 'terminatedAt',
            key: 'terminatedAt',
            align: "center",
            render: (terminatedAt: string) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{terminatedAt}</span>,
        },
        {
            title: 'Terminated By',
            dataIndex: 'terminatedBy',
            key: 'terminatedBy',
            align: "center",
            render: (terminatedBy: string) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{terminatedBy}</span>,
        },
        {
            title: "Action",
            dataIndex: "action",
            key: 'action',
            render: () => (
                <span className='fs-14 fw-400 m-0 line-height-22 secondary-color cursor-pointer' onClick={(e: any) => setIsOpenReActivateModal(true)} >Reactivate</span>
            ),
        },
    ];

    return (
        <div className='reports-child-wrapper-class'>
            <Row>
                <Col xs={24} className="filter-div">
                    <CommonReportChildFilters filtersArray={TerminatedStaffReportFilters} />
                </Col>
                <Col xs={24}>
                    <CommonReportTable tableHeader={TerminatedStaffTableColumnData} tableData={TerminatedStaffMockData} />
                </Col>
            </Row>
            <Modal
                centered
                wrapClassName="terminated-staff-reactivate-modal"
                closeIcon={false}
                closable={false}
                open={isOpenReActivateModal}
                footer={false}
            >
                <div className="position-relative">
                    <p className="fs-24 fw-500 form-heading-color text-center line-height-32 m-0" style={{ paddingBottom: "1.063rem", paddingTop: "2.688rem" }}>
                        Status Confirmation
                    </p>
                    <p className='fs-14 fw-400 title-color line-height-22 m-0'>Are you sure you want to reactivate this user?</p>
                    <img src={modalBgImage} alt="modal bg" style={{ position: "absolute", bottom: "-16%", right: "-5%" }} />
                    <button className="btn-secondary" onClick={() => { setIsOpenReActivateModal(false); AppSnackbar({ type: "success", messageHeading: "Staff Reactivated!", message: "The staff member has been reactivated" }) }} style={{ margin: "3rem auto 2.688rem auto" }}>Submit</button>

                </div>
            </Modal>
        </div>
    )
}

export default TerminatedStaffList