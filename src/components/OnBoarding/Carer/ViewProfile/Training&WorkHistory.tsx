import { Col, Divider, Row, Space } from 'antd';
import React from 'react';
import Pdf from '../../../../assets/images/OnBoarding/pdf.svg';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { TraingHistory, TraingingSpecialities, TrainingDetails, WorkDetails } from '../../../../mock/OnBoarding';



interface ITrainingDetails {
    name: string,
    issued: string,
    expiry: string,
    image: string
}

const columns: ColumnsType<ITrainingDetails> = [
    {
        title: <span className='fw-600 fs-14'>Training Name </span>,
        dataIndex: 'name',
        key: 'name',
        width: 160,
        render: (_, text) =>

            <span className='fs-14 fw-400 title-color'>
                {text.name}
            </span>

    },
    {
        title: <span className='fw-600 fs-14'>Certificate Issued</span>,
        dataIndex: 'issued',
        key: 'issued',
        width: 150,
        render: (_, text) =>

            <span className='fs-14 fw-400 title-color'>
                {text.issued}
            </span>

    },
    {
        title: <span className='fw-600 fs-14'>Certificate Expiry Date</span>,
        dataIndex: 'expiry',
        key: 'expiry',
        width: 160,

        render: (_, text) =>
            <span className='fs-14 fw-400 title-color'>
                {text.expiry}
            </span>

    },

    {
        title: <span className='fw-600 fs-14' >Attachments</span>,
        dataIndex: 'status',
        key: 'status',
        width: 100,

        render: (_, text) =>
            <span className='fs-14 fw-400 title-color'>
                <img src={text.image} alt="image" />
            </span>

    },


];


interface IWorkDetails {
    name: string,
    position: string,
    experience: string,
    reason: string,
    startDate: string,
    endDate: string
}




const Workcolumns: ColumnsType<IWorkDetails> = [
    {
        title: <span className='fw-600 fs-14'> Name of Employer</span>,
        dataIndex: 'name',
        key: 'name',
        width: 180,
        render: (_, text) =>

            <span className='fs-14 fw-400 title-color'>
                {text.name}
            </span>

    },
    {
        title: <span className='fw-600 fs-14'>Position</span>,
        dataIndex: 'position',
        key: 'position',
        width: 70,
        render: (_, text) =>

            <span className='fs-14 fw-400 title-color'>
                {text.position}
            </span>

    },
    {
        title: <span className='fw-600 fs-14'>Experience</span>,
        dataIndex: 'experience',
        key: 'experience',
        width: 200,

        render: (_, text) =>
            <span className='fs-14 fw-400 title-color'>
                {text.experience}
            </span>

    },
    {
        title: <span className='fw-600 fs-14'>Reason for Leaving</span>,
        dataIndex: 'reason',
        key: 'reason',
        width: 200,

        render: (_, text) =>
            <span className='fs-14 fw-400 title-color'>
                {text.reason}
            </span>

    },
    {
        title: <span className='fw-600 fs-14'>Start Date</span>,
        dataIndex: 'startDate',
        key: 'startDate',
        width: 160,

        render: (_, text) =>
            <span className='fs-14 fw-400 title-color'>
                {text.startDate}
            </span>

    },
    {
        title: <span className='fw-600 fs-14'>End Date</span>,
        dataIndex: 'endDate',
        key: 'endDate',
        width: 160,

        render: (_, text) =>
            <span className='fs-14 fw-400 title-color'>
                {text.endDate}
            </span>

    }


];









const TrainingWorkHistory = () => {
    return (
        <div>
            <p className='fw-500 fs-20'> Training Certificates</p>

            <Row gutter={[20, 12]}>
                {
                    TraingHistory.map((item) =>
                        <Col xs={12}>
                            <Space direction='vertical' size={0}>
                                <span className='fw-600 fs-12'>
                                    {item.title}
                                </span>

                                <Space>

                                    {item.image && <span className='d-flex align-center'> <img src={item.image} alt='pdf' /></span>}
                                    <span className='fw-400 fs-12'> {item.detail}</span>
                                </Space>

                            </Space>
                        </Col>
                    )
                }

            </Row>
            <Divider dashed />
            <p className='fw-500 fs-20'> Additional Training Details </p>

            <div className='onboading-table-wrapper'>

                <Table columns={columns} dataSource={TrainingDetails} scroll={{ x: "max-content" }} pagination={false} />
            </div>

            <Divider dashed />
            <p className='fw-500 fs-20'> Work Experience </p>
            <div className='onboading-table-wrapper'>

                <Table columns={Workcolumns} dataSource={WorkDetails} scroll={{ x: "max-content" }} pagination={false} />
            </div>

            <p className='fw-500 fs-20'> Specialities </p>
            <Row gutter={[20, 12]}>

                {
                    TraingingSpecialities.map((ele) => <Col xs={12} key={ele.id}  >
                        <span className='fw-400 fs-14'>
                            {ele.title}
                        </span>
                    </Col>)
                }
            </Row>





        </div>
    )
}

export default TrainingWorkHistory