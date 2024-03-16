// import "../../../../sass/common.scss";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Row, Col, Tooltip, Button } from "antd";
import "./ProfileMetrics.scss";
import { ProfileMetricsData } from "../../../../mock/ProfileMetricsSetting"
import Counter from "./Counter/Counter";

function ProfileMetrics(props: any) {
    const { rowData } = props;
// filter main array with selected item in Registration Configuration
      const newArray = rowData.filter((value:any) => {
        return ProfileMetricsData.some(obj => obj.profilemetricslist === value);
      });
      
      console.log(newArray);


    return (
        <div className='profile-metrics'>
            <div className="heading">

                <h1 className="fs-20 fw-500 m-0">Profile % required for activation
                    <Tooltip placement="bottomLeft"
                        color="#65CDF0"
                        overlayInnerStyle={{
                            width: "499px",
                        }}
                        title="This relates to the minimum percentage of candidate profile (in the registration form) required to activate them. Even if the profile percentage is less, you have the ability to force activate them from their ‘Activation & Settings’ menu.">
                        <InfoCircleOutlined />
                    </Tooltip>

                </h1>
                <input type="text" placeholder="Type here" />
                <h1 className="fs-20 fw-500 m-0">Profile Metrics
                    <Tooltip placement="bottomLeft"
                        color="#65CDF0"
                        overlayInnerStyle={{
                            width: "499px",
                        }}
                        title="This relates to the minimum percentage of candidate profile (in the registration form) required to activate them. Even if the profile percentage is less, you have the ability to force activate them from their ‘Activation & Settings’ menu.">
                        <InfoCircleOutlined />
                    </Tooltip>

                </h1>
            </div>
            <div className="profile-metrics">
                <Row className="counter-plus-mins align-items-center">
                    {ProfileMetricsData.map((value: any, index: any) => {
                        return (
                            <Col lg={12} md={12} xs={24}>
                                <Row style={{ marginBottom: "25px" }} className="align-items-center">
                                    <Col lg={12} md={12} xs={24}>
                                        <div className="profile-metrics-counter d-flex align-items-center">
                                            <p className="m-0 fs-16 fw-500" key={index}>{value.profilemetricslist} </p>

                                        </div>
                                    </Col>
                                    <Col lg={12} md={12} xs={24} className="d-flex align-items-center">
                                        <Counter /> <span className="fs-14" style={{ color: "#6E7191" }}> % </span>
                                    </Col>
                                </Row>
                            </Col>


                        );
                    })}
                </Row>
                {rowData.length > 0 && <Button className="save-btn"> Save</Button>}
            </div>
        </div>

    );
}

export default ProfileMetrics;
