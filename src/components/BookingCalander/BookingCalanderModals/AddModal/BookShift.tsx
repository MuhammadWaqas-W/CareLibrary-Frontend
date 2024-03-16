import { Button, Col, Form, Input, Row, Select, Switch } from "antd";
import DownArrow from "../../../../assets/BookingCalander/images/drop-down.png";
import FilterIcon from "../../../../assets/BookingCalander/images/filters.png";
import Upload from "../../../../assets/BookingCalander/images/upload-icon.png";
import SelectWrapper from "../../../../shared/SelectWrapper/SelectWrapper";
import InputWrapper from "../../../../shared/InputWrapper/InputWrapper";
import DatePickerWrapper from "../../../../shared/DatePickerWrapper/DatePickerWrapper";
import "./AddModal.scss";

const BookShift = (props: any) => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed} layout="vertical" className="bookShift">
      <Row gutter={[10, 20]}>
        <Col xs={24} md={12}>
          <InputWrapper label="Client Name" required name="clientName" placeHolder="Arington Manor" />
        </Col>
        <Col xs={24} md={12}>
          <DatePickerWrapper label="When do you need? Shift Date" placeholder="Choose one or more dates" name="date" required/>
        </Col>
        <Col xs={24} md={12}>
          <SelectWrapper
            label="Chose user type"
            onChange={(value: any) => {
              console.log(`selected ${value}`);
            }}
            required={true}
            placeHolder="Choose user type"
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
            ]}
            name="userType"
          />
        </Col>
        <Col xs={24} md={12}>
          <SelectWrapper
            label="Choose a shift"
            onChange={(value: any) => {
              console.log(`selected ${value}`);
            }}
            required={true}
            placeHolder="Chose a shift"
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
            ]}
            name="shift"
          />
        </Col>
        <Col xs={24} md={12}>
          <SelectWrapper
            label="Start Time"
            onChange={(value: any) => {
              console.log(`selected ${value}`);
            }}
            required={true}
            placeHolder="Start Time"
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
            ]}
            name="startTime"
          />
        </Col>
        <Col xs={24} md={12}>
          <SelectWrapper
            label="End Time"
            onChange={(value: any) => {
              console.log(`selected ${value}`);
            }}
            required={true}
            placeHolder="End Time"
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
            ]}
            name="endTime"
          />
        </Col>
        <Col xs={24} md={12}>
          <SelectWrapper
            label="Department"
            onChange={(value: any) => {
              console.log(`selected ${value}`);
            }}
            required={true}
            placeHolder="Select Shift Department"
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
            ]}
            name="department"
          />
        </Col>
        {props.name === "bookShift" && (
          <Col xs={24} md={12}>
            <SelectWrapper
              label="No of Staff Required"
              onChange={(value: any) => {
                console.log(`selected ${value}`);
              }}
              required={true}
              placeHolder="1"
              options={[
                { value: "1", label: "1" },
                { value: "2", label: "2" },
                { value: "3", label: "3" },
              ]}
              name="staffNo"
            />
          </Col>
        )}
        {props.name === "directBook" && (
          <Col xs={24} md={12}>
            <Form.Item label={<span className="label">Select a staff name</span>} name="staffNo">
              <div className="staff-wrapper">
                <Select
                  bordered={false}
                  suffixIcon={<img src={DownArrow} alt="down-arrow" />}
                  placeholder="Select a staff name"
                  size="large"
                  onChange={(value) => {
                    console.log(`selected ${value}`);
                  }}
                  options={[
                    { value: "1", label: "1" },
                    { value: "2", label: "2" },
                    { value: "3", label: "3" },
                  ]}
                />
                <span className="icon">
                  <img src={FilterIcon} alt="filter"  />
                </span>
              </div>
            </Form.Item>
          </Col>
        )}
        <Col xs={24} md={12}>
          <SelectWrapper
            label="Shift requested by"
            onChange={(value: any) => {
              console.log(`selected ${value}`);
            }}
            required={true}
            placeHolder="Select Shift Requested"
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
            ]}
            name="shiftRequested"
          />
        </Col>
        {props.name === "directBook" && (
          <Col xs={24} md={12}>
            <Form.Item>
              <div className="switch-wrapper d-flex align-items-center">
                <Switch />
                <span style={{ fontWeight: 600 }}>Satff acceptence required [Optional]</span>
              </div>
            </Form.Item>
          </Col>
        )}
        <Col xs={24} md={24}>
          <Form.Item label={<span className="label">Optional Information, if any.</span>}>
            <Input.TextArea placeholder="Type here" style={{ border: "1.5px solid #A0A3BD", borderRadius: "3px" }} />
          </Form.Item>
        </Col>
        {props.name === "directBook" && (
          <Col xs={24} md={24}>
            <Form.Item >
              <Input className="custom-file-input cursor-pointer"
               style={{ border: "1.5px solid #A0A3BD", borderRadius: "3px" }} size="large" type="file" 
               suffix={<img src={Upload} alt="upload-icon" width={16} height={18} className="cursor-pointer"/>} />
            </Form.Item>
          </Col>
        )}
        <Col xs={24} md={24} className="btn-wrapper d-flex">
          <Button type="primary" className="cancel-btn" onClick={() => props.setIsAddModalOpen(false)}>
            Cancel
          </Button>
          <Button type="primary" className="save-btn" htmlType="submit">
            {props.name === "directBook" ? "Direct Book Staff" : "Save and Post Shifts"}
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default BookShift;
