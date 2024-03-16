import React from 'react';
import { Modal, Table } from 'antd';
import { assignedClientsData } from '../../../../../mock/StaffManagerMock';
import CancelImg from '../../../../../assets/images/staffManager/cancelImg.png';
import './AssignedClients.scss';

const AssignedClients = (props: any) => {
    const { isAssignedClients, setIsAssignedClients } = props;

    const columns = [
        {
            title: 'CLIENT NAME',
            dataIndex: 'clientName',
            key: 'clientName',
            render: (text: any) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{text}</span>,
        },
        {
            title: 'APPROVED ON ',
            dataIndex: 'approvedOn',
            key: 'approvedOn',
            render: (text: any) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{text}</span>,
        },
    ];

    return (
        <Modal title='Approved NH Details' footer={false} centered open={isAssignedClients} onCancel={() => setIsAssignedClients(false)} className="assigned-clients-modal" width={700} closeIcon={<img src={CancelImg} alt="cancel img" />}>
            <div className='assigned-clients-modal-content'>
                <Table columns={columns} dataSource={assignedClientsData} pagination={false} className="booking-table-content" scroll={{ x: "max-content" }} />
                <div className='assigned-btn'>
                    <button type='button' className=' cursor-pointer fs-16 line-height-22 white-color fw-600' onClick={() => setIsAssignedClients(false)}>Close</button>
                </div>
            </div>
        </Modal>
    )
}

export default AssignedClients