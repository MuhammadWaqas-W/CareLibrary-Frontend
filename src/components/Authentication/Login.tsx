import { Col, Row } from "antd";
import CareLibraryIcon from "./../../assets/Login/care-library-icon.png";
import LazyIcon from "./../../assets/Login/lazy-icon-care.png";
import { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.scss";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState(false);
  let navigate = useNavigate();

  const onFinish = (values: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      if (user) {
        const userData = {
          username: values.username,
          token,
          id: "",
          role: user.role,
        };
        const stringifyData = JSON.stringify(userData);
        localStorage.setItem("user", stringifyData);
      }

      else {
        setLoading(false);
        setFormError(true);
      }
    }, 1000);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Row className="care-signin">
      {/* Left Div */}
      <Col xs={0} sm={0} lg={12} xl={14}>
        <div className="left-outer-div">
          <div className="inner-left-div">
            <div>
              <h1 className="heading-1">
                <span className="pink-color">Sign In</span>
                <span> to</span>
              </h1>
              <h3 className="heading-3">Care Library</h3>
            </div>
            <div>
              <p className="p-tag-description-1">
                If you don't have an account register
              </p>
              <p className="p-tag-description-2">
                You can
                <span className="pink-color fw-600"> Register</span>
                <span> here!</span>
              </p>
            </div>
            <div className="demo-wrap">
              <div className="demo-content">
                <img src={LazyIcon} alt="care-library-icon" />
              </div>
            </div>
          </div>
        </div>
      </Col>
      {/* Right Div for form */}
      <Col xs={24} sm={24} lg={12} xl={10}>
        <div className="right-outer-div">
          <div className="img-div">
            <img
              src={CareLibraryIcon}
              alt="care-library-icon"
              width={199}
              height={91}
            />
          </div>
          <div>
            <h2 className="Sign-in-heading">Sign in</h2>
            <Form
              name="email"
              className=""
              onFinishFailed={onFinishFailed}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Required field",
                  },
                ]}
              >
                <Input placeholder="Username" className="input-style" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Required field",
                  },
                ]}
              >
                <Input placeholder="Password" className="input-style" />
              </Form.Item>
              <p style={{ color: "red" }}>
                {formError ? "Email or password is incorrect" : null}
              </p>
              <div style={{ textAlign: "end", margin: "10px 0px 20px 0px" }}>
                <Link to="" className="forgot-password-style">
                  Forgot Password?
                </Link>
              </div>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  className=" btn-signin fw-600 "
                  block
                >
                  Sign In
                </Button>
              </Form.Item>
            </Form>
            <p className="fs-15-n-gray">
              Resend <span className="pink-color">Log In</span> Details
            </p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
