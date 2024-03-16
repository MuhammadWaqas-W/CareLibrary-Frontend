import { Button, Dropdown, Input, Space, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import React, { useState } from 'react'
import './UpcomingWebinars.scss'
import UpcomingWebinarsFilters from './UpcomingWebinarsFilters/UpcomingWebinarsFilters';

import viewIcon from "../../../assets/icons/view-icon.svg"
import editIcon from "../../../assets/icons/edit-icon-outlined.svg"
import deleteIcon from "../../../assets/icons/delete-icon.svg"
import searchIcon from "../../../assets/icons/search.svg";
import requestedAttendees from "../../../assets/icons/Webinar/requested-attendees.svg";


import threeDots from "../../../assets/icons/three-dots.svg"
import { useNavigate } from 'react-router-dom'
import { UpcomingWebinarsTableData } from '../../../mock/UpcomingWebinarsData'
import DeleteModal from '../../../shared/DeleteModal/DeleteModal';

const UpcomingWebinars = () => {
    const navigate = useNavigate()

    
    const [tableID, settableID] = useState(false)

    const [isDeleteModal, setIsDeleteModal] = useState(false);

    const handleDeleteSubmit = () => {
        setIsDeleteModal(false);
    };
    const handleCancelSubmit = () => {
        setIsDeleteModal(false);
    };



    // onClick={() => navigate(`/client-manager/client-registration/${tableID}`)}
    const items: any = [
        {
            label: (
                <div>
                    <Space onClick={() => navigate(`/webinar/view-webinar`)}>
                        <img src={viewIcon} alt="Edit" className="d-flex align-center" width={24} height={24} />
                        <span >View</span>
                    </Space>
                </div>
            ),
            key: "1",
        },
        {
            label: (
                <Space onClick={() => navigate(`/webinar/edit-webinar/${tableID}`)}>
                    <img src={editIcon} alt="Delete" className="d-flex align-center" width={24} height={24} />
                    <span>Edit</span>
                </Space>
            ),
            key: "2",
        },
        {
            label: (
                <Space onClick={() => navigate(`/webinar/upcoming-webninar/requested-attendees/${tableID}`)}>
                    <img src={requestedAttendees} alt="Delete" className="d-flex align-center" width={24} height={24} />
                    <span>Requested Attendees</span>
                </Space>
            ),
            key: "3",
        },
        {
            label: (
                <Space onClick={()=> setIsDeleteModal(true)}>
                    <img src={deleteIcon} alt="Delete" className="d-flex align-center" width={24} height={24} />
                    <span>Delete</span>
                </Space>
            ),
            key: "4",
        },

    ];



    const columns: ColumnsType<any> = [
        {
            title: <span>S.No#</span>,
            dataIndex: 'sNo',
            key: 'sNo',
            render: (_, text) =>
                <Space >
                    <span className='fs-14 fw-400 title-color'>
                        {text.sNo}
                    </span>
                </Space>,
        },
        {
            title: <span>Webinar Title</span>,
            dataIndex: 'webinarTitle',
            key: 'webinarTitle',
            render: (_, text) =>
                <Space >
                    <span className='fs-14 fw-400 title-color'>
                        {text.webinarTitle}
                    </span>
                </Space>,
        },
        {
            title: <span>Date</span>,
            dataIndex: 'date',
            key: 'date',
            render: (_, text) =>
                <Space >
                    <span className='fs-14 fw-400 title-color'>
                        {text.date}
                    </span>
                </Space>,
        },
        {
            title: <span>Duration</span>,
            dataIndex: 'duration',
            key: 'duration',
            render: (_, text) =>
                <Space >
                    <span className='fs-14 fw-400 title-color'>
                        {text.duration}
                    </span>
                </Space>,
        },
        {
            title: <span>Venue </span>,
            dataIndex: 'venue',
            key: 'venue',
            render: (_, text) =>
                <Space >
                    <span className='fs-14 fw-400 title-color'>
                        {text.venue}
                    </span>
                </Space>,
        },
        {
            title: <span>Attendees</span>,
            dataIndex: 'attendees',
            key: 'attendees',
            render: (_, text) =>
                <Space >
                    <span className='fs-14 fw-400 title-color'>
                        {text.attendees}
                    </span>
                </Space>,
        },


        {
            title: <div className='equal--width-tb'>Actions</div>,
            dataIndex: "actions",
            key: "actions",
            width: 150,
            render: (_, text) => (
                <Dropdown
                    menu={{ items }}
                    placement="bottomRight"
                    trigger={["click"]}
                    className="actionDropDown"
                >
                    <div className="equal--width-tb">
                        <img src={threeDots} alt="menu" onClick={() => settableID(text.id)}/>
                    </div>
                </Dropdown>
            ),
        },
    ];

    return (
        <div className='trainee-info-main-wrapper'>

            <div className="wrapper-head">
                <Button className='schedule-webinar-btn' onClick={() => navigate(`/webinar/add-webinar`)}><span className='fs-16 fw-600'>Schedule Webinar</span></Button>
                <div className="inner-main-head">
                    <div className="search-and-filters">
                        <UpcomingWebinarsFilters />
                    </div>
                    <Input
                        className="search-input"
                        placeholder="Search"
                        prefix={<img src={searchIcon} alt="searchIcon" width={24} height={24} style={{ marginRight: '0.623rem' }} />}
                    />
                </div>
            </div>

            <div className="trainee-info-table-wrapper">
                <Table className="wrapper-table" columns={columns} dataSource={UpcomingWebinarsTableData} scroll={{ x: "max-content" }} pagination={{ pageSize: 7 }} />
            </div>
            <DeleteModal
                setDeleteModal={setIsDeleteModal}
                deleteModal={isDeleteModal}
                submitTitle='Cancel'
                cancelTitle='Yes, Discard'
                title='Do you want to discard this Course?'
                onSubmit={handleDeleteSubmit}
                onCancel={handleCancelSubmit}
            />
        </div>
    )
}

export default UpcomingWebinars