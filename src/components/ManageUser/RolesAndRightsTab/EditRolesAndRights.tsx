import { Button, Card, Col, Form, Input, Row, Select, Space } from "antd";
import { useState } from "react";
import { Checkbox } from "antd";
import { v4 as uuidv4 } from "uuid";
import RolesandRightsArrow from "../../../assets/icons/ManageUser/roles-and-rights-arrow.svg";
import SearchIcon from "../../../assets/images/OnBoarding/Search.svg";
import "./RolesAndRightsTabs.scss";
import "../../../sass/common.scss";
import dayjs from "dayjs";
import { checkboxes } from "../../../mock/ManageUserData";
import SelectWrapper from "../../../shared/SelectWrapper/SelectWrapper";

const EditRolesAndRights = ({
  handleEditRolesAndRights,
  setIsEditRole,
  rolesAndRightsTableData,
}: any) => {
  const [checkedValues, setCheckedValues] = useState<string[]>([]);
  const roleAssignedDate = dayjs(Date.now()).format("YYYY/MM/DD");
  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const rolesAndRightsData = {
          ...values,
          id: rolesAndRightsTableData.length + 1,
          roleAssignedBy: "Zahir Abbas",
          assignedDate: roleAssignedDate,
        };
        handleEditRolesAndRights(rolesAndRightsData);
        form.resetFields();
        setIsEditRole(false);
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
      });
  };
  const onChange = (value: string) => {
    console.log(value);
    if (checkedValues.includes(value)) {
      setCheckedValues(checkedValues.filter((val) => val !== value));
    } else {
      setCheckedValues([...checkedValues, value]);
    }
  };
  const [form] = Form.useForm();

  return (
    <Form form={form} onFinish={handleOk} style={{ padding: "24px" }}>
      <Row gutter={[30, 30]}>
        <Col
          xxl={6}
          xl={24}
          md={24}
          xs={24}
          sm={24}
          lg={24}
          className="onBoarding-input"
        >
          <label className=" fw-600 fs-14" style={{ color :"#6E7191"}}>Role Title</label>
          <Form.Item
            name="roleTitle"
            rules={[{ required: true, message: "Required field" }]}
          >
            <Input
              placeholder="Type here"
            />
          </Form.Item>
        </Col>
        <Col xxl={6} xl={24} md={24} xs={24} sm={24} lg={24}>
          <label className=" fw-600 fs-14" style={{ color :"#6E7191"}}>User Name</label>
          <Form.Item
            name="userName"
            rules={[{ required: true, message: "Required field" }]}
          >
            <SelectWrapper placeHolder="Selected User Name"  name="userType"  options={[
                { value: "Zahir", label: "Zahir" },
                { value: "Ahmed", label: "Ahmed" },
              ]} size="large" defaultValue="Selected User Name"/>
            
          </Form.Item>
        </Col>
        <Col xxl={6} xl={24} md={24} xs={24} sm={24} lg={24}>
          <label className=" fw-600 fs-14" style={{ color :"#6E7191"}} >User Type</label>
          <SelectWrapper disabled={true} placeHolder="Selected User Name"  name="userType"  
               size="large"  defaultValue="Admin"/>
         
        </Col>
        <Col
          xxl={{ span: 5, offset: 1 }}
          xl={24}
          md={24}
          xs={24}
          sm={24}
          lg={24}
          style={{paddingBottom:"30px"}}
        >
          <label style={{color:"white"}}>User Type</label>

          <div className="input-search-wrapper">
            <Input
              placeholder="search"
              prefix={
                <img src={SearchIcon} alt="search icon" className="icon" />
              }
            />
          </div>
        </Col>
      </Row>

      <Card className="roles-and-rights" style={{padding:"24px"}}>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <p
              className="fw-500 fs-20 "
              style={{ color: "#4E4B66", marginTop: "0px" }}
            >
              Edit Roles Access Rights
            </p>
          </Col>
        </Row>

        {checkboxes.map(({ label, value }) => (
          <Row style={{ marginTop: "13px" }} key={uuidv4()}>
            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
              <Checkbox
                className="edit-roles-rights-checkboxes"
                key={value}
                value={value}
                checked={checkedValues.includes(value)}
                onChange={() => onChange(value)}
              >
                <span className="fw-400 fs-14" style={{ color: "#4E4B66" }}>
                  {label}
                </span>
              </Checkbox>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
              <img
                src={RolesandRightsArrow}
                alt="RolesandRightsArrow"
                width={10}
                height={16}
              />
            </Col>
          </Row>
        ))}
        <Col span={24} style={{ paddingTop: "76px", paddingBottom: "45px" }}>
          <Space size={12}>
            <Button type="primary" style={{ backgroundColor: "#FF4D4F" }}
            >
              Reset To Default Setting
            </Button>
            <Button type="primary" htmlType="submit"
            >
              Save
            </Button>
          </Space>
        </Col>
      </Card>
    </Form>
  );
};
export default EditRolesAndRights;
