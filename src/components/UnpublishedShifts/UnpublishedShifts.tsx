import { useState } from "react";
import { Col, Input, Row } from "antd";

import UnpublishedTable from "./Table/UnpublishedTable";
import SearchIcon from "../../assets/icons/Search.png";
import BookStaff from "./BookStaff/BookStaff";
import "./UnpublishedShifts.scss";

const UnpublishedShifts = () => {
  const [showBookingStaff, setShowBookingStaff] = useState(false);

  return (
    <>
      {!showBookingStaff ? (
        <div className="unpublished-wrapper">
          <p className="description">
            This Section captures and lists all the shift requests from your clients (shifts that
            are not yet posted to allocated staff) so you can decide to directly assign them to your
            perferred staff, or post to all allocated staff from this page
          </p>
          <Row className="search-bar">
            <Col xs={24} md={6}>
              <div className="input-search-wrapper">
                <Input
                  placeholder="search"
                  prefix={<img src={SearchIcon} alt="search icon" className="icon" />}
                />
              </div>
            </Col>
          </Row>
          <div className="unpublished-table">
            <UnpublishedTable setShowBookingStaff={setShowBookingStaff} />
          </div>
        </div>
      ) : (
        <div className="booking-staff-wrapper">
          <BookStaff />
        </div>
      )}
    </>
  );
};

export default UnpublishedShifts;
