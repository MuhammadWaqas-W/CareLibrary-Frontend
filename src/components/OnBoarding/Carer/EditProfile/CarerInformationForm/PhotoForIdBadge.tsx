import { useState } from "react";
import { Button, Col, Dropdown, Row, Space, Tooltip } from "antd";
import "./FormMain.scss";
import type { MenuProps } from "antd";
import Profile from "../../../../../assets/images/MockImages/hidden-face.png";
import Dots from "../../../../../assets/images/OnBoarding/dots.png";
import Delete from "../../../../../assets/images/OnBoarding/Delete.svg";
import infoIcon from "../../../../../assets/icons/info-icon.svg";

import Edit from "../../../../../assets/images/OnBoarding/edit.svg";

const PhotoForIdBadge = (props: any) => {
    const { handleSelectedStepValue,auditCheck } = props;
    const [uploadImage, setUploadedImage] = useState<any>(undefined);

    const handleImage = (e: any) => {
        let formData = new FormData();
        if (e.target.files.length) {
            const file: File = e.target.files[0];
            setUploadedImage({
                preview: URL.createObjectURL(file),
                raw: file,
            });
            var pattern = /image-*/;
            if (!file.type.match(pattern)) {
                return;
            }
            formData.append("file", file);
        }
    };

    const items: MenuProps["items"] = [
        {
            key: "1",
            label: (
                <Space onClick={() => setUploadedImage(undefined)} size={20}>
                    <img src={Delete} alt="delete" width="24px" height="24px" />
                    <span> Delete</span>{" "}
                </Space>
            ),
        },
        {
            key: "2",
            label: (
                <div className="carer-img-profile-box">
                    <label htmlFor="upload-button" className="cursor-pointer ">
                        <Space size={20}>
                            <img
                                src={Edit}
                                alt="Edit"
                                className="d-flex align-center"
                                width={24}
                                height={24}
                            />
                            <span>Edit</span>
                        </Space>
                    </label>
                    <input
                        type="file"
                        className="img-upload-type"
                        id="upload-button"
                        accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/webp"
                        onChange={handleImage}
                    />
                </div>
            ),
        },
    ];
    return (
        <div className="photo-Id-Badge">

            <Space size={15} style={{ marginBottom: "10px " }} >
                <span className='fw-500 fs-20 '>
                    Photo For Id Badge
                </span>
                <Tooltip
                    placement="bottomLeft"
                    autoAdjustOverflow={true}
                    //   arrow={false}
                    color="#65CDF0"
                    showArrow={false}
                    overlayInnerStyle={{
                        width: "499px",
                    }}
                    className="d-flex align-center"

                    title="Candidate’s ID badge photo. Face should be fully visible and the photo ideally taken against a white or light background.
                    Image should be jpg/jpeg format and size should not exceed 2mb."
                >
                    <img src={infoIcon} alt="infoIcon" />
                </Tooltip>
            </Space>

            {!uploadImage ? (
                <Row gutter={[20, 20]} >
                    <Col xs={24}>
                        <div className="carer-img-profile-box ">
                            <label htmlFor="upload-button" className="cursor-pointer">
                                <Space
                                    direction="vertical"
                                    className="d-flex align-center justify-center box"
                                >
                                    <img src={Profile} alt="profile" />
                                    <div className="fw-600 fs-14 title-color upload-text">
                                        <span className="secondary-color">Upload </span> your profile
                                        photo
                                    </div>
                                </Space>
                            </label>
                            <input
                                type="file"
                                className="img-upload-type"
                                id="upload-button"
                                accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/webp"
                                onChange={handleImage}
                            />
                        </div>
                    </Col>
                    <Col xs={24}>
                        <Space>
                            <Button className='edit-module-button   align-center d-flex btn-secondary' onClick={() => handleSelectedStepValue('ID Upload (Passport/DL)')}  >Continue</Button>
                        </Space>
                    </Col>

                </Row>

            ) : (
                <Row gutter={[20, 20]}>
                    <Col xs={24}>
                        <div className="photo-wrapper">
                            <Dropdown
                                menu={{ items }}
                                placement="bottomRight"
                                trigger={["click"]}
                                className="cursor-pointer dropdown-main"
                            >
                                <img src={Dots} alt="Dots" />
                            </Dropdown>
                            <img
                                src={uploadImage.preview}
                                alt="profile"
                                className="profile-image"
                            />
                        </div>
                    </Col>
                    <Col xs={24}>
                        <Space className='carer-buttons'>
                         { auditCheck &&  <Tooltip
                                        autoAdjustOverflow={true}
                                        showArrow={false}
                                        placement="bottomLeft" color="#65CDF0"
                                        title='Click to mark as audit'
                                    >

                                        <Button className='edit-module-button  audit-button  align-center d-flex' >Audit</Button>
                                    </Tooltip>}
                            <Button className='edit-module-button bg-orange-color  align-center d-flex ' >Save</Button>
                            <Button className='edit-module-button   align-center d-flex btn-secondary' onClick={() => handleSelectedStepValue('ID Upload (Passport/DL)')}  >Continue</Button>
                        </Space>
                    </Col>
                </Row>

            )}
        </div>
    );
};

export default PhotoForIdBadge;
