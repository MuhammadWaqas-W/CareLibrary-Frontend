import { useState } from "react";
import { Col, Row } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import InvoiceFolderViewCommon from "./InvoiceFolderViewCommon";
import InvoicePdfModal from "../InvoiceModals/InvoicePdfModal/InvoicePdfModal";
import AccordianLBlueImg from "../../../../assets/icons/finance-setup/accordianArrowLBlue.png";
import InvoiceTimeSheetModal from "../InvoiceModals/InvoiceTimeSheetModal/InvoiceTimeSheetModal";
import "../Invoice.scss";

const InvoiceWeekDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [isOpenTimeSheetModal, setIsOpenTimeSheetModal] = useState(false);
  const [isOpenInvoicePdfModal, setIsOpenInvoicePdfModal] = useState(false);

  const fileArray = state?.childItems.filter((items: any) => items?.type === "File");
  const fileFolderArray = state?.childItems.filter((items: any) => items?.type === "File Folder");

  const handleFileClick = (item: any) => {
    switch (true) {
      case item.name.includes("Invoice"):
        setIsOpenInvoicePdfModal(true);
        break;
      default:
        setIsOpenTimeSheetModal(true);
        break;
    }
  };

  return (
    <div className="invoice-main-wrapper" style={{ paddingTop: "6rem" }}>
      {fileArray?.length === 0 && fileFolderArray?.length === 0 && <p className="fs-24 text-center" style={{color:'#737194'}}>No Data Found</p>}
      {fileArray?.length > 0 && (
        <div style={{ paddingBottom: "7rem" }}>
          <div className="d-flex align-center" style={{ gap: "10px", padding: "0 1rem" }}>
            <img src={AccordianLBlueImg} alt="" />
            <p className="m-0 fs-16 fw-500" style={{ color: "#4E4B66" }}>
              Tall Tree Invoice Details
            </p>
            <div style={{ border: "1px solid", width: "80%" }}></div>
          </div>
          <Row gutter={[25, 25]} className="folder-view" style={{ paddingTop: "1rem" }}>
            {fileArray?.map((item: any) => (
              <Col xxl={4} xl={8} lg={9} sm={8} xs={24} key={item.key}>
                <InvoiceFolderViewCommon
                  onClick={() => handleFileClick(item)}
                  type={item.type}
                  size={item.size}
                  dateModified={item.dateModified}
                  name={item.name}
                  dateCreated={item.dateCreated}
                />
              </Col>
            ))}
          </Row>
        </div>
      )}
      {fileFolderArray?.length > 0 && (
        <div style={{ paddingBottom: "3rem" }}>
          <div className="d-flex align-center" style={{ gap: "10px", padding: "0 1rem" }}>
            <img src={AccordianLBlueImg} alt="" />
            <p className="m-0 fs-16 fw-500" style={{ color: "#4E4B66" }}>
              Tall Tree Staff Details
            </p>
            <div style={{ border: "1px solid", width: "80%" }}></div>
          </div>

          <Row gutter={[25, 25]} className="folder-view" style={{ paddingTop: "1rem" }}>
            {fileFolderArray?.map((item: any) => (
              <Col xxl={4} xl={8} lg={9} sm={8} xs={24} key={item.key}>
                <InvoiceFolderViewCommon
                  onClick={() => navigate(`/finance/invoice/invoice-coordinator/week/detail/staff-detail/${item.key}`, { state: item })}
                  type={item.type}
                  size={item.size}
                  dateModified={item.dateModified}
                  name={item.name}
                  dateCreated={item.dateCreated}
                />
              </Col>
            ))}
          </Row>
        </div>
      )}
      {isOpenTimeSheetModal && (
        <InvoiceTimeSheetModal isOpenTimeSheetModal={isOpenTimeSheetModal} setIsOpenTimeSheetModal={setIsOpenTimeSheetModal} />
      )}
      {isOpenInvoicePdfModal && <InvoicePdfModal isOpenInvoicePdfModal={isOpenInvoicePdfModal} setIsOpenInvoicePdfModal={setIsOpenInvoicePdfModal} />}
    </div>
  );
};

export default InvoiceWeekDetail;
