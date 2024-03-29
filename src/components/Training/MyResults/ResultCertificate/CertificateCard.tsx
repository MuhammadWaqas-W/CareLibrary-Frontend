import certificateLogo from "../../../../assets/images/Training/certificate.png";
import logo from "../../../../assets/brand/Logo.png";
import downloadIcon from '../../../../assets/icons/training/download-icon.png'
import signature from "../../../../assets/icons/training/signature.png";
import { Divider } from "antd";

const CertificateCard = () => {
  return (
    <div className="certificate-card">
      <div className="certificate-details d-flex justify-between">
        <div className="content">
          <img src={logo} alt="Logo" />
          <p className="date fs-18 fw-300">June 26,2022 </p>
          <div>
            <h4 className="name fw-500">Ali Raza</h4>
            <p className="info fs-18 fw-300 m-0">Sucessfully completed course of</p>
          </div>
          <div>
            <h2 className="certificate-name fw-500">BLS Adults</h2>
            <p className="course-from fs-18 fw-300">Online Course from Care Library </p>
          </div>
          <div className="signature">
            <div className="text-center">
              <img src={signature} alt="Signature" />
              <Divider />
            </div>
            <h2 className="owner fs-20 fw-500">Kumar sangakara</h2>
            <p className="fs-14 fw-300 m-0">IT Instructor At Care Library</p>
          </div>
          <img className="download-icon" src={downloadIcon} alt="" />
        </div>
          <img className="certificate-logo" src={certificateLogo} alt="Certificate" />
      </div>
    </div>
  );
};

export default CertificateCard;
