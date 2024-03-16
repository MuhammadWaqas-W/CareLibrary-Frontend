import { useState } from "react";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import InvoiceTableView from "./InvoiceTableView";
import { ClientRateTable } from "../../../mock/InvoiceData";
import ToggleListGridViewBtn from "./InvoiceDetails/ToggleListGridViewBtn";
import InvoiceFolderViewCommon from "./InvoiceDetails/InvoiceFolderViewCommon";
import "./Invoice.scss";

function Invoice() {
  const navigate = useNavigate();
  const [isListView, setIsListView] = useState(false);

  const handleFileDownload = (item: any) => {
    navigate(`/finance/invoice/invoice-coordinator/${item.key}`);
  };

  return (
    <div className="invoice-main-wrapper">
      <div className="invoice-wrapper-header d-flex align-center justify-between" style={{ paddingBottom: "2rem" }}>
        <p className="invoice-care-heading fs-20 fw-500 m-0">{isListView?"Folders":"Care Coordinators"}</p>
        <ToggleListGridViewBtn toggle={isListView} setToggle={setIsListView} />
      </div>
      {isListView ? (
        <InvoiceTableView invoiceData={ClientRateTable} handleFileDownload={handleFileDownload} />
      ) : (
        <>
          {ClientRateTable?.length > 0 ? (
            <Row gutter={[25, 25]} className="folder-view">
              {ClientRateTable?.map((item: any) => (
                <Col xxl={4} sm={8} xs={24} key={item.key}>
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
      )}
    </div>
  );
}

export default Invoice;
