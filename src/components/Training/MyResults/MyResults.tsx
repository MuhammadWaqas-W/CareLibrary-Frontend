import { Col, Input, Row } from "antd";

import SearchIcon from "../../../assets/icons/Search.png";
import { myResultsFilter } from "../../../mock/TrainingData/ResultDropDownData";
import CommonReportChildFilters from "../../Reports/CommonReportChildFilters/CommonReportChildFilters";
import MyCertificate from "./ResultCertificate/Certificate";
import ResultsTable from "./ResultsTable/ResultsTable";
import "./MyResults.scss";
import { useState } from "react";

const MyResults = () => {
  const [showCertificat, setShowCertificate] = useState(false);

  return (
    <div className="my-results-wrapper">
      {showCertificat ? (
        <div className="certificate" style={{ marginTop: "20px" }}>
          <MyCertificate />
        </div>
      ) : (
        <>
          <div className="top-header">
            <Row gutter={[20, 20]} className="d-flex align-center">
              <Col lg={12} xs={24}>
                <div className="select-wrapper">
                  <CommonReportChildFilters filtersArray={myResultsFilter} />
                </div>
              </Col>
              <Col lg={12} xs={24} style={{ display: "flex", justifyContent: "end" }}>
                <div className="input-search-wrapper">
                  <Input
                    placeholder="search"
                    prefix={<img src={SearchIcon} alt="search icon" className="icon" />}
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className="results-table-wrapper">
            <ResultsTable setShowCertificate={setShowCertificate} />
          </div>
        </>
      )}
    </div>
  );
};

export default MyResults;
