import { Col, Input, Row } from "antd";

import SearchIcon from "../../../assets/icons/Search.png";
import BookingCard from "./BookingCard";
import { cardData } from "../../../mock/UnpublishedShifts/CardData";

const BookStaff = () => {
  return (
    <>
      <div className="header">
        <p className="date">
          <span>Date :</span> Sunday January 9 2022
        </p>
        <div className="input-search-wrapper">
          <Input
            placeholder="search"
            prefix={<img src={SearchIcon} alt="search icon" className="icon" />}
          />
        </div>
      </div>
      <div className="staff-details">
        <p className="title">Staff Details</p>
        <Row gutter={[24, 16]}>
          {cardData.map((card) => (
            <Col xs={24} md={12} lg={12} xl={8}>
              <BookingCard card={card} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default BookStaff;
