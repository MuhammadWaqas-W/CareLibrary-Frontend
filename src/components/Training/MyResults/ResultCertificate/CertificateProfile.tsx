import profile from "../../../../assets/images/MockImages/certificate-profile.png";

const CertificateProfile = () => {
  return (
    <div className="profile-card">
      <div className="profile-info">
        <img src={profile} alt="" />
        <div className="details">
          <h2 className="user-name fs-20 fw-500 m-0">Ali Raza</h2>
          <p className="user-grade fs-14 fw-600">
            Grade Achieved : <span className="fw-400">99.99%</span>
          </p>
          <p className="date fs-14 m-0">October 22,2022</p>
          <p className="certificate-desc fs-14 fw-400">
            ALi Raza Account is verified. Care Library certifies their successful completion of{" "}
            <span>BLS Adults</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificateProfile;
