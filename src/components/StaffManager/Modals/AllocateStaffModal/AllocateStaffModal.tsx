import {
  Modal,
  Table,
  Select,
  Input,
  Dropdown,
  Space,
  Checkbox,
  MenuProps,
  Button,
  Row,
  Col,
} from "antd";
import { allocateStaffData } from "../../../../mock/StaffManagerMock";

import searchIcon from "../../../../assets/icons/search.svg";
import CloseIcon from "../../../../assets/icons/close-icon.svg";
import "./AllocateStaffModal.scss";
import { DownOutlined } from "@ant-design/icons";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { useState } from "react";

const columns = [
  {
    title: "Sr #",
    dataIndex: "sr",
    key: "sr",
  },
  {
    title: "Care Home",
    dataIndex: "careHome",
    key: "careHome",
  },
  {
    title: "Allocated ON",
    dataIndex: "allocatedOn",
    key: "allocatedOn",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    render: (text: any) => <img src={text} alt="" />,
  },
];
const AllocateStaffModal = (props: any) => {
  const { allocateStaff, setAllocateStaff } = props;
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>();
  const [isOpenDropdown, setisOpenDropdown] = useState(false);
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const onChange = (checkedValues: CheckboxValueType[]) => {
    setCheckedList(checkedValues);
  };
  const items: MenuProps["items"] = [
    {
      label: (
        <Checkbox.Group
          options={[
            {
              value: "Bondcare care Home",
              label: "Bondcare care Home",
            },
            { value: "Life Care Home", label: "Life Care Home" },
            { value: "Health Care", label: "Health Care" },
            { value: "New Life Care", label: "New Life Care" },
            {
              value: "All",
              label: "All",
            },
          ]}
          value={checkedList}
          onChange={onChange}
          className="group-checkbox-flex"
        />
      ),
      key: "1",
    },
  ];

  return (
    <Modal
      title="Allocate Carer to Care Home"
      centered
      open={allocateStaff}
      footer={false}
      width={1180}
      wrapClassName="allocate-carer-modal"
      onCancel={() => setAllocateStaff(false)}
      className="allocate-staff-modal-wrapper"
      closeIcon={<img src={CloseIcon} alt="" />}
    >
       <div className="overlay-wrapper-modal-content">
       <div className="allocate-staff-modal-wrapper">
        <div>
          <label className="fs-14 fw-600">Select Care Home</label>
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            open={isOpenDropdown}
            onOpenChange={setisOpenDropdown}
            className="allocate-select"
          >
            <div
              onClick={(e) => {
                e.preventDefault();
              }}
              style={{ height: "39px" }}
              className="select-dropdown-btn fs-14 fw-400 border-radius-4"
            >
              <Space>
                {checkedList?.length ? (
                  <p className="text-ellipsis">{checkedList?.join(", ")}</p>
                ) : (
                  "Multiple Selected"
                )}
                <DownOutlined />
              </Space>
            </div>
          </Dropdown>
        </div>
        <div className="bottom-buttons">
          <Button type="primary" className="inner-bottom-btn bg-orange-color">
            Cancel
          </Button>
          <Button type="primary" className="inner-bottom-btn btn-secondary">
            Allocate
          </Button>
        </div>
      </div>
       </div>
      

      <Row
        className="total-staff-count-main d-flex align-center justify-end"
        style={{ paddingTop: "20px",marginInline:'1.5rem' }}
      >
        <Col lg={10} md={10} xs={24} sm={24}> 
          <Input
            className="search-input"
            placeholder="Search"
            prefix={
              <img
                src={searchIcon}
                alt="searchIcon"
                width={24}
                height={24}
              />
            }
          />
        </Col>
      </Row>
      <div className="allocate-staff-table">
        <Table
          dataSource={allocateStaffData}
          columns={columns}
          pagination={false}
          scroll={{ x: "max-content" }}
        />
      </div>
    </Modal>
  );
};
export default AllocateStaffModal;
