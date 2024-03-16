import { useState } from "react";
import { Col, Row } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { ClientRateTable } from "../../../../mock/InvoiceData";
import InvoiceFolderViewCommon from "./InvoiceFolderViewCommon";
import InvoiceTableView from "../InvoiceTableView";
import ToggleListGridViewBtn from "./ToggleListGridViewBtn";
import "../Invoice.scss";

const InvoiceCareHome = () => {
  const { id } = useParams();
  const [isListView, setIsListView] = useState(false);
  const find = ClientRateTable?.find((data: any) => data.key === id);
  const navigate = useNavigate();

  const handleFileDownload = (item: any) => {
    navigate(`/finance/invoice/invoice-coordinator/week/${item.key}`, { state: item });
  };

  return (
    <div className="invoice-main-wrapper">
      <div className="invoice-wrapper-header d-flex align-center justify-between" style={{ paddingBottom: "2rem" }}>
        <p className="invoice-care-heading fs-20 fw-500 m-0">{isListView?"Folders":"Care Home"}</p>
        <ToggleListGridViewBtn toggle={isListView} setToggle={setIsListView} />
      </div>
      {!isListView ? (
        <>
          {find?.childItems?.length > 0 ? (
            <Row gutter={[25, 25]} className="folder-view">
              {find?.childItems?.map((item: any) => (
                <Col xxl={4} xl={8} lg={9} sm={8} xs={24} key={item.key}>
                  <InvoiceFolderViewCommon
                    onClick={() => handleFileDownload(item)}
                    type={item.type}
                    size={item.size}
                    dateModified={item.dateModified}
                    name={item.name}
                    dateCreated={item.dateCreated}
                  />
                </Col>
              ))}
            </Row>
          ) : (
            <p className="fs-24 text-center" style={{color:'#737194'}}>No Data Found</p>
          )}
        </>
      ) : (
        <InvoiceTableView invoiceData={find?.childItems} handleFileDownload={handleFileDownload} />
      )}
    </div>
  );
};

export default InvoiceCareHome;
