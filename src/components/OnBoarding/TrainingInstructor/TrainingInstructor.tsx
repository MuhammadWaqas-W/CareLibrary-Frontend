import { Row, Col, Space, Progress, Dropdown, Select, Input } from "antd";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import Dots from "../../../assets/images/OnBoarding/dots.png";
import Edit from "../../../assets/icons/OnBoarding/edit.svg";
import View from "../../../assets/images/OnBoarding/View.svg";
import Arrow from "../../../assets/images/OnBoarding/arrow.svg";
import Search from "../../../assets/images/OnBoarding/Search.svg";
import "../../Reports/StaffAvailabilitySheet/StaffAvailabilitySheetCommonFilter/StaffAvailabilitySheetCommonFilter.scss";
// import AddNewCandidate from "./AddNewCandidate/AddNewCandidate"
import "../Carer/Carer.scss";
import {
    CarerCordinatorDetails,
    ICarerCordinatorDetails,
} from "../../../mock/OnBoarding";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingAddModal from "../Carer/OnboardingAddModal/OnboardingAddModal";
import ViewProfile from "../Carer/ViewProfile/ViewProfile";



const TrainingInstructor = () => {
    const navigate = useNavigate()
    const [userId, setUserId] = useState();
    const [isProfileModal, setIsProfileModal] = useState(false);
    const [isShowInstructor, setIsShowInstructor] = useState(false);


    const items: any = [
        {
            label: (
                <div onClick={() => { }}>
                    <Space onClick={() => setIsProfileModal(true)}>
                        <img
                            src={View}
                            alt="Edit"
                            className="d-flex align-center"
                            width={24}
                            height={24}
                        />
                        <span>View Profile</span>
                    </Space>
                </div>
            ),
            key: "1",
        },
        {
            label: (
                <Space onClick={() => navigate(`edit-profile/${userId}`)}>
                    <img
                        src={Edit}
                        alt="Delete"
                        className="d-flex align-center"
                        width={24}
                        height={24}
                    />
                    <p>Edit Profile</p>
                </Space>
            ),
            key: "2",
        },
    ];
    const columns: ColumnsType<ICarerCordinatorDetails> = [
        {
            title: <span style={{ paddingLeft: "75px" }}>Instructor Name</span>,
            dataIndex: " Display Name",
            key: "name",
            ellipsis: true,
            width: 150,
            render: (_, text) => (
                <div className="cursor-pointer d-flex align-center ">
                    <img src={text.avatar} alt="avatar" />
                    <span
                        className="fs-14 fw-400 title-color"
                        style={{ marginLeft: "30px" }}
                    >
                        {text.name}
                    </span>
                </div>
            ),
        },

        {
            title: <span>Email </span>,
            dataIndex: "Contact",
            key: "Contact",
            width: 200,
            render: (_, text) => (
                <Space>
                    <span className="fs-14 fw-400 title-color">{text.contact}</span>
                </Space>
            ),
        },

        {
            title: "User Status",
            dataIndex: "status",
            key: "status",
            width: 200,
            render: () => (
                <div>
                    <Select
                        defaultValue="Select Category"
                        className="select-onboarding"
                        style={{ width: "180px" }}
                        suffixIcon={<img src={Arrow} />}
                        options={[
                            { value: "Design", label: "Design" },
                            { value: "Email", label: "Email" },
                            { value: "Social Media", label: "Social Media" },
                            { value: "Music", label: "Music" },
                        ]}
                    />
                </div>
            ),
        },

        {
            title: <span>No of Courses </span>,
            dataIndex: "days",
            key: "days",
            width: "140px",

            render: (_, text) => (
                <div className="fs-14 fw-400 title-color ">
                    {text.courses}
                </div>
            ),
        },
        {
            title: <span>Availability </span>,
            dataIndex: "days",
            key: "days",
            width: "120px",
            render: (_, text) => (
                <span className="fs-14 fw-400 title-color">{text.availability}</span>
            ),
        },
        {
            title: "Profile %",
            dataIndex: "status",
            key: "status",
            width: 200,
            render: (_, text) => (
                <div>
                    <div className="fs-14 fw-400 title-color" style={{ minWidth: "70px" }}>
                        <span className="fw-700 fs-14">{text?.percentage}%</span>{" "}
                        <span style={{ marginLeft: "5px" }} className="fw-600 fs-14">
                            Done
                        </span>
                    </div>
                    <Progress
                        percent={text?.percentage}
                        strokeColor="#F7B923"
                        strokeWidth={9}
                        width={50}
                        showInfo={false}
                    />
                </div>
            ),
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
                    <div className="border-color cursor-pointer d-flex algin-center  justify-center" onClick={() => setUserId(id)}>
                        <img src={Dots} alt="menu" />
                    </div>
                </Dropdown>
            ),
        },
    ];




    return (
        <div className="carer-wrapper">
            <Row className="carer-main d-flex justify-end carer-style" >
                <Col span={24} className="gutter-row" style={{ marginBottom: "20px" }}>
                    <div className='candidate-wrapper' >
                        <button onClick={() => setIsShowInstructor(true)} className="candidate-button fw-600 fs-16 cursor-pointer" >
                            Add New Instructor
                        </button>
                        <OnboardingAddModal isOpenModal={isShowInstructor} setIsOpenModal={setIsShowInstructor} title='Add New Instructor' />
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
                                            Carer Home
                                        </p>
                                        <div className="filter-column">
                                            <Select
                                                size="large"
                                                placeholder="Select Staff Name"
                                                defaultValue="All"
                                                optionFilterProp="children"
                                                className="app-select-wrap-class"
                                                popupClassName="app-select-popup-wrap-class"
                                                // onChange={handleCommonFilterChange}
                                                // filterOption={(input: any, option: any) => { (option?.label ?? "").toLowerCase().includes(input.toLowerCase()) }}
                                                options={[
                                                    { value: "Tall Tree Care Home", label: "Tall Tree Care Home" },
                                                    { value: " Tree Care Home", label: " Tree Care Home" },
                                                    { value: "Ivy Grove Care Home", label: "Ivy Grove Care Home" },
                                                ]}
                                            />
                                        </div>
                                    </Col>

                                    <Col xs={24} sm={8}>
                                        <p
                                            className="fs-14 fw-600 title-color line-height-17 m-0"
                                            style={{ marginBottom: "0.563rem" }}
                                        >
                                            Application Date
                                        </p>
                                        <div className="filter-column">
                                            <Select
                                                size="large"
                                                placeholder="Select Staff Name"
                                                defaultValue="All"
                                                optionFilterProp="children"
                                                className="app-select-wrap-class"
                                                popupClassName="app-select-popup-wrap-class"
                                                // onChange={handleCommonFilterChange}
                                                // filterOption={(input: any, option: any) => { (option?.label ?? "").toLowerCase().includes(input.toLowerCase()) }}
                                                options={[
                                                    { value: "Arsalan Khan", label: "Arsalan Khan" },
                                                    { value: "Ali Rehman", label: "Ali Rehman" },
                                                    { value: "Kashif", label: "Kashif" },
                                                ]}
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

            <Row className="carer-main">
                <Col span={24} className='onboarding-table-wrapper'>
                    <Table
                        className="wrapper-table"
                        columns={columns}
                        dataSource={CarerCordinatorDetails}
                        scroll={{ x: "max-content" }}
                        pagination={{ pageSize: 7 }}
                    />
                </Col>
            </Row>
            <ViewProfile IsProfileModal={isProfileModal} setIsProfileModal={setIsProfileModal} />

        </div>
    );
};

export default TrainingInstructor;
