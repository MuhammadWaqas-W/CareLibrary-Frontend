import { Col, Input, Row } from "antd";
import { cardData, CardDataType, TagsType } from "../../../../../mock/UnpublishedShifts/CardData";
import SearchIcon from "../../../../../assets/icons/Search.png";
import './Modal.scss';

const BookStaff = () => {
    return (
        <>
            <div className="book-staff-wrapper">
                <div className="header">
                    <p className="date">
                        <span>Date :</span> Sunday January 9 2022
                    </p>
                    <div>
                        <Input
                            placeholder="search"
                            size="large"
                            prefix={<img src={SearchIcon} alt="search-icon" />}
                        />
                    </div>
                </div>
                <div className="staff-details">
                    <p className="title">Staff Details</p>
                    <Row gutter={[24, 16]}>
                        {cardData.map((card) => (
                            <Col xs={24} md={12} lg={12} xl={8}>
                                <div className="staff-card">
                                    <div className="card-header">
                                        <div className="user-info">
                                            <img src={card?.userImg} alt="profile" />
                                            <div style={{ marginLeft: "10px" }}>
                                                <h2 className="user-name">{card?.name}</h2>
                                                <p className="user-role">{card?.role}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="total-shift">
                                                Total Shifts: <span>{card?.totalShifts}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="tags">
                                        {card?.tags.map((tag: TagsType) => (
                                            <div className="tag" key={tag.title}>
                                                <img src={tag.icon} alt="" />
                                                <p>{tag.title}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="card-btn">
                                        <button className="btn confirm">Request Confirmation</button>
                                        <button className="btn allocate">Allocate</button>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </>

    );
};

export default BookStaff;
