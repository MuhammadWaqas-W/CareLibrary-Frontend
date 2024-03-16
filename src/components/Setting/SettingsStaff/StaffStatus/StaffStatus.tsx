// import "../../../../sass/common.scss";
import { Button,Table,Space } from "antd";
import { PlusCircleOutlined } from '@ant-design/icons';
import { useState } from "react";
import "./StaffStatus.scss";
import AddModal from "./AddModal";
import { ColumnsType } from "antd/es/table";
import editIcon from "../../../../assets/icons/edit-blue.svg";
import SwitchWrapper from "../../../../shared/SwitchWrapper/SwitchWrapper";
import {DataType, StaffStatusData } from "../../../../mock/StaffStatus";

function StaffStatus() {
    const [addEditVisa, setAddEditVisa] = useState<boolean>(false);

    const StaffStatusColumns: ColumnsType<DataType> = [
        {
            title: 'S. No.',
            dataIndex: 'SNo',
            key: 'SNo',
        },
        {
            title: 'Title',
            dataIndex: 'Title',
            key: 'Title',
        },
        {
            title: 'Enable/Disable',
            dataIndex: 'action',
            key: 'action',
            render: () => (
                <SwitchWrapper
                name="Enable/Disable"
              />),
        }, 
        {
            title: 'Action',
            dataIndex: 'edit',
            key: 'edit',
            render: () => (
                <Space
                onClick={() => setAddEditVisa(true)}
            >
                <img src={editIcon} alt="edit" className="d-flex align-center cursor-pointer" height={24} width={24} />
            </Space>),
        }
    ];

    return (
        <div className='staff-status'>
            <div className="heading">
                <h1 className="fs-20 fw-500 m-0">Staff Status  </h1>
            </div>
            <Button className="add-visa-type-btn fs-14 fw-600 border-radius-10  d-flex justify-center align-items-center"  onClick={() => setAddEditVisa(true)}>
                    Add Status
                        <PlusCircleOutlined />
                    </Button>
                    <div>
                    <Table
                         className="common-setting-table"
                        columns={StaffStatusColumns}
                        dataSource={StaffStatusData}
                        pagination={false}
                        scroll={{ x: 768 }}
                    />
                        </div>
                        <Button
          className="savebtn" type="primary">
            Save
          </Button>
                     <AddModal addEditVisa={addEditVisa} setAddEditVisa={setAddEditVisa} />
        </div>

    );
}

export default StaffStatus;
