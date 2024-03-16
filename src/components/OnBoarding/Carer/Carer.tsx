
import { Row, Col, Space, Progress, Dropdown, Select, Input } from 'antd';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Dots from '../../../assets/images/OnBoarding/dots.png';
import Edit from '../../../assets/icons/OnBoarding/edit.svg';
import View from '../../../assets/images/OnBoarding/View.svg';
import Arrow from '../../../assets/images/OnBoarding/arrow.svg';
import Search from '../../../assets/images/OnBoarding/Search.svg';
import './Carer.scss';
import { applicationStage, CarerDetails, ICarerDetails } from '../../../mock/OnBoarding';
import { useState } from 'react';
import ViewProfile from './ViewProfile/ViewProfile';
import { useNavigate } from 'react-router-dom';
import "../../Reports/StaffAvailabilitySheet/StaffAvailabilitySheetCommonFilter/StaffAvailabilitySheetCommonFilter.scss";
import OnboardingAddModal from './OnboardingAddModal/OnboardingAddModal';

const Carer = () => {
    const navigate = useNavigate()
    const [isProfileModal, setIsProfileModal] = useState(false);
    const [userId, setUserId] = useState();
    const [isShowCandidate, setIsShowCandidate] = useState(false);

    const items: any = [
        {
            label: (
                <div onClick={() => { }}>
                    <Space onClick={() => setIsProfileModal(true)} >
                        <img src={View} alt="Edit" className="d-flex align-center" width={24} height={24} />
                        <span >View Profile</span>
                    </Space>
                </div>
            ),
            key: "1",
        },
        {
            label: (
                <Space onClick={() => navigate(`edit-profile/${userId}`)} >
                    <img src={Edit} alt="Delete" className="d-flex align-center" width={24} height={24} />
                    <span>Edit Profile</span>
                </Space>
            ),
            key: "2",
        },
    ];



    const columns: ColumnsType<ICarerDetails> = [
        {
            title: <span style={{ paddingLeft: "75px" }}>Display Name</span>,
            dataIndex: ' Display Name',
            key: 'name',
            ellipsis: true,
            width: 270,
            render: (_, text) =>
                <div className="cursor-pointer d-flex align-center "  >
                    <img src={text.avatar} alt="avatar" />
                    <span className='fs-14 fw-400 title-color' style={{ marginLeft: "30px" }}>
                        {text.name}
                    </span>
                </div>
        },
        {
            title: <span>Contact </span>,
            dataIndex: 'Contact',
            key: 'Contact',
            width: 300,
            render: (_, text) =>
                <Space >
                    <span className='fs-14 fw-400 title-color'>
                        {text.contact}
                    </span>
                </Space>,
        },
        {
            title: 'Profile Status',
            dataIndex: 'status',
            key: 'status',
            width: 300,
            render: (_, text) =>
                <div>
                    <div className='fs-14 fw-400 title-color' style={{ minWidth: "70px" }}>
                        <span className='fw-700 fs-14'>{text?.percentage}%</span>   <span style={{ marginLeft: "5px" }} className='fw-400 fs-14'>Done</span>
                    </div>
                    <Progress percent={text?.percentage} strokeColor='#F7B923' strokeWidth={9} showInfo={false} />
                </div>
        },

        {
            title: 'Application Stage',
            dataIndex: 'status',
            key: 'status',
            width: 300,
            render: () =>
                <div>
                    <Select
                        defaultValue="Select Category"
                        className="select-onboarding"
                        style={{ width: "200px" }}
                        suffixIcon={<img src={Arrow} />}

                        options={[
                            { value: 'Design', label: 'Design' },
                            { value: 'Email', label: 'Email' },
                            { value: 'Social Media', label: 'Social Media' },
                            { value: 'Music', label: 'Music' },
                        ]}
                    />
                </div>
        },

        {
            title: <span>Days In </span>,
            dataIndex: 'days',
            key: 'days',

            render: (_, text) =>
                <Space >
                    <span className='fs-14 fw-400 title-color'>
                        {text.days}
                    </span>
                </Space>
        },
        {
            title: "View Details",
            dataIndex: "view",
            key: "view",
            width: 150,
            render: (_, { id }: any) => (
                <Dropdown
                    menu={{ items }}
                    placement="bottomRight"
                    trigger={["click"]}
                    className="actionDropDown"
                >

                    <div className="border-color cursor-pointer d-flex algin-center  justify-center" onClick={() => setUserId(id)} >
                        <img src={Dots} alt="menu" />
                    </div>

                </Dropdown>
            ),
        },
    ];

    return <div className='carer-wrapper'>
        <Row className='carer-main carer-style' >
            <Col xs={24} style={{ marginBottom: "20px" }}>
                <div className='candidate-wrapper'>
                    <button onClick={() => setIsShowCandidate(true)} className="candidate-button fw-600 fs-16 cursor-pointer" >
                        Add New Candidate
                    </button>
                    <OnboardingAddModal isOpenModal={isShowCandidate} setIsOpenModal={setIsShowCandidate} title='Add New Candidate' />
                </div>
            </Col>
            <Col xs={24}>
                <Row
                    gutter={[20, 20]}
                    className="staff-availability-sheet-common-filter-wrapper"
                    justify="space-between"
                >
                    <Col xs={24} md={16} xl={14} xxl={12}>
                        <Row gutter={[0, 20]} className="filter-wrapper">
                            <>
                                <Col xs={24} sm={8}>
                                    <p
                                        className="fs-14 fw-600 title-color line-height-17 m-0"
                                        style={{ marginBottom: "0.563rem" }}
                                    >
                                        Name
                                    </p>
                                    <div className="filter-column">
                                        <Select
                                            size="large"
                                            placeholder="Select Staff Name"
                                            defaultValue="All"
                                            optionFilterProp="children"
                                            className="app-select-wrap-class"
                                            popupClassName="app-select-popup-wrap-class"
                                            options={[
                                                { value: "Arsalan Khan", label: "Arsalan Khan" },
                                                { value: "Ali Rehman", label: "Ali Rehman" },
                                                { value: "Kashif", label: "Kashif" },
                                            ]}
                                        />
                                    </div>
                                </Col>

                                <Col xs={24} sm={8}>
                                    <p
                                        className="fs-14 fw-600 title-color line-height-17 m-0"
                                        style={{ marginBottom: "0.563rem" }}
                                    >
                                        Application Stage
                                    </p>
                                    <div className="filter-column">
                                        <Select
                                            size="large"
                                            placeholder="Select Staff Name"
                                            defaultValue="All"
                                            optionFilterProp="children"
                                            className="app-select-wrap-class"
                                            popupClassName="app-select-popup-wrap-class"
                                            options={applicationStage}
                                        />
                                    </div>
                                </Col>
                            </>
                        </Row>
                    </Col>

                    <Col xs={24} md={8} xl={6} className="gutter-row">
                        <div className="input-search-wrapper">
                            <p
                                className="fs-14 fw-600 title-color line-height-17 m-0"
                                style={{ marginBottom: "0.563rem" }}
                            >
                                &nbsp;
                            </p>
                            <Input
                                placeholder="search"
                                prefix={<img src={Search} className="icon" />}
                            />
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>


        <Row className='carer-main'>
            <Col span={24} className='onboarding-table-wrapper'>
                <Table className="wrapper-table" columns={columns} dataSource={CarerDetails} scroll={{ x: "max-content" }} pagination={{ pageSize: 7 }} />
            </Col>
        </Row>


        <ViewProfile IsProfileModal={isProfileModal} setIsProfileModal={setIsProfileModal} />

    </div>
};

export default Carer