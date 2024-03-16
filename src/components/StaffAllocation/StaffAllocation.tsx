import React, { useState } from 'react'
import personIcon from '../../assets/icons/StaffAllocation/person.svg';
import markIcon from '../../assets/icons/StaffAllocation/mark.svg';
import underPerformIcon from '../../assets/icons/StaffAllocation/underperform.svg';
import bookIcon from '../../assets/icons/StaffAllocation/book.svg';
import { Dropdown, Row, Space } from 'antd';
import SingleCard from './SingleCard';
import "./StaffAllocation.scss"
import StaffAllocationFilters from './StaffAllocationFilters/StaffAllocationFilters';
import StaffAllocationTable from './StaffAllocationTable/StaffAllocationTable';
import { ColumnsType } from 'antd/es/table';

import viewCareHome from "../../assets/icons/StaffAllocation/view-care.svg"
import allocateCarePerson from "../../assets/icons/StaffAllocation/allocate-care-p.svg"
import allocateCareAdd from "../../assets/icons/StaffAllocation/allocate-care-add.svg"
import deleteCare from "../../assets/icons/StaffAllocation/delete-care.svg"


import threeDots from "../../assets/icons/three-dots.svg"
import { StaffAllocationTableMockData } from '../../mock/StaffAllocationData/StaffAllocationData';
import AllocateCarerModal from './staffAllocationModals/AllocateCarerModal';
import ViewCarerHomeModal from './staffAllocationModals/ViewCarerHomeModal';
import DeleteModal from '../../shared/DeleteModal/DeleteModal';
import ViewProfile from '../OnBoarding/Carer/ViewProfile/ViewProfile';


const cardData = [
    {
        icon: personIcon,
        count: "05",
        text: "Assigned Care Homes",
        background: "rgba(113, 59, 219, 0.05)"
    },
    {
        icon: markIcon,
        count: "22",
        text: "Number of Carers",
        background: "rgba(51, 214, 159, 0.07)"
    },
    {
        icon: underPerformIcon,
        count: "7",
        text: "Allocated Carer",
        background: "rgba(255, 76, 97, 0.05)"
    },
    {
        icon: bookIcon,
        count: "5",
        text: "Allocated Carer",
        background: "rgba(76, 184, 255, 0.07"
    },
]

const StaffAllocation = () => {

    const [selectedRecordId, setSelectedRecordId] = useState('')
    const [selectedRecordAllocationStatus, setSelectedRecordAllocationStatus] = useState('')

    const [recordSelelected, setrecordSelelected] = useState<any[]>([])

    const [isAllocateCarerModal, setIsAllocateCarerModal] = useState(false)
    const [isViewCarerHomeModal, setIsViewCarerHomeModal] = useState(false)

    const [isDeleteModal, setIsDeleteModal] = useState(false);
    const [isProfileModal, setIsProfileModal] = useState(false);

    const handleDeleteSubmit = () => {
        setIsDeleteModal(false);
    };
    const handleCancelSubmit = () => {
        setIsDeleteModal(false);
    };

    const onChangeSelectedRowsKeys = (item:any) => {
        setrecordSelelected(item)
    };


    console.log("selected id =>", selectedRecordId)
    console.log("selectedRecordAllocationStatus =>", selectedRecordAllocationStatus)

    const items: any = [
        {
            label: (
                <div onClick={() => setIsViewCarerHomeModal(true)} style={{ display: 'flex', gap: "10px", height: "fit-content" }} className={` set-restricted-styles 
                ${selectedRecordAllocationStatus === "New"
                        ? "class-restricted"
                        : ""}`}
                >
                    <Space>
                        <img src={viewCareHome} alt="Edit" className="d-flex align-center" width={24} height={24} />
                        <span >View Care Home</span>
                    </Space>
                </div>
            ),
            key: "1",
        },
        {
            label: (
                <div onClick={() => setIsAllocateCarerModal(true)} style={{ display: 'flex', gap: "10px", height: "fit-content" }}>
                    <Space>
                        <img src={allocateCarePerson} alt="Delete" className="d-flex align-center" width={24} height={24} />
                        <span>Allocate Carer</span>
                    </Space>
                </div>
            ),
            key: "2",
        },
        {
            label: (
                <div style={{ display: 'flex', gap: "10px", height: "fit-content" }} className={` set-restricted-styles 
                ${selectedRecordAllocationStatus === "Not Allocated" || selectedRecordAllocationStatus === "New"
                        ? "class-restricted"
                        : ""}`}
                    onClick={() => setIsDeleteModal(true)}>
                    <Space>
                        <img src={deleteCare} alt="Delete" className="d-flex align-center" width={24} height={24} />
                        <span>Remove Carer</span>
                    </Space>
                </div>
            ),
            key: "3",
        },

    ];

    const StaffAllocationTableHeader: ColumnsType<any> = [
        {
            title: 'Sr #',
            dataIndex: 'id',
            key: 'id',
            render: (id: any) =>
                <span className='fs-14 fw-400 m-0 text-left line-height-22 title-color'>{id}</span>,
        },
        {
            title: 'Carer Name',
            dataIndex: 'carerName',
            key: 'carerName',
            render: (carerName: any) =>
<span className='fs-14 fw-400 m-0 text-left line-height-22 title-color' onClick={()=> setIsProfileModal(true)} style={{color:'#1890FF'}}>{carerName}</span>,        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
            render: (gender: any) =>
                <span className='fs-14 fw-400 m-0 text-left line-height-22 title-color'>{gender}</span>,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: any) =>
                <span className='fs-14 fw-400 m-0 text-left line-height-22 title-color'>{status}</span>,
        },
        {
            title: 'User Type',
            dataIndex: 'userType',
            key: 'userType',
            render: (userType: any) =>
                <span className='fs-14 fw-400 m-0 text-left line-height-22 title-color'>{userType}</span>,
        },
        {
            title: 'Date of joining',
            dataIndex: 'dateOfJoining',
            key: 'dateOfJoining',
            render: (dateOfJoining: any) => (
                <span className='fs-14 fw-400 m-0 text-left line-height-22 title-color'>{dateOfJoining}</span>
            ),
        },
        {
            title: 'Allocation Status',
            dataIndex: 'allocationStatus',
            key: 'allocationStatus',
            render: (allocationStatus: any) => (
                <span className='fs-14 m-0 line-height-22 title-color'>{allocationStatus}</span>
            ),
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
                        <img src={threeDots} alt="menu" onClick={() => { setSelectedRecordId(text.id); setSelectedRecordAllocationStatus(text.allocationStatus) }} />
                    </div>
                </Dropdown>
            ),
        },
    ];
    return (
        <>
            <div className='staff-allocation-main-wrapper'>
                <div className="wrapper-top-cards">
                    <Row className='top-cards'>
                        {cardData?.map(({ icon, count, text, background }) => <SingleCard icon={icon} count={count} text={text} background={background} />)}
                    </Row>
                </div>
                <div className="wrapper-filters">
                    <StaffAllocationFilters selectedRecordId={recordSelelected}/>
                </div>
                <div className="table-fnc-head-wrapper">
                    <StaffAllocationTable tableHeader={StaffAllocationTableHeader} tableData={StaffAllocationTableMockData} onChangeSelectedRowsKeys={onChangeSelectedRowsKeys} />
                </div>
                <AllocateCarerModal isAllocateCarerModal={isAllocateCarerModal} setIsAllocateCarerModal={setIsAllocateCarerModal} />
                <ViewCarerHomeModal isViewCarerHomeModal={isViewCarerHomeModal} setIsViewCarerHomeModal={setIsViewCarerHomeModal} />
            </div>
            <DeleteModal
                setDeleteModal={setIsDeleteModal}
                deleteModal={isDeleteModal}
                submitTitle='Cancel'
                cancelTitle='Yes, Remove'
                title='Are you sure you want to cancel this record?'
                onSubmit={handleDeleteSubmit}
                onCancel={handleCancelSubmit}
            />
            <ViewProfile IsProfileModal={isProfileModal} setIsProfileModal={setIsProfileModal} />
        </>
    )
}

export default StaffAllocation