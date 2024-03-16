// import "../../../../sass/common.scss";
import { Button,Table,Space } from "antd";
import { PlusCircleOutlined } from '@ant-design/icons';
import { useState } from "react";
import "./VisaManagement.scss";
import AddModal from "./AddModal";
import { ColumnsType } from "antd/es/table";
import editIcon from "../../../../assets/icons/edit-blue.svg";
import SwitchWrapper from "../../../../shared/SwitchWrapper/SwitchWrapper";
import { DataType,VisaManagementData } from "../../../../mock/VisaManagement";

function VisaManagement() {
    const [addEditVisa, setAddEditVisa] = useState<boolean>(false);

    const CareHomeColumns: ColumnsType<DataType> = [
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
                name="Disable"
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
        <div className='visa-management'>
            <div className="heading">
                <h1 className="fs-20 fw-500 m-0 ">Student Visa </h1>
                <div className="d-flex align-items-center">
                   <p className="fs-16 fw-500 m-0">Is student visa applicable </p>
                   <SwitchWrapper
          name="studentvisaapplicable"
        />
               </div>
               <h1 className="fs-20 fw-500 m-0">Vista Type Manager</h1>
            </div>
            <Button className="add-visa-type-btn fs-14 fw-600 border-radius-10  d-flex justify-center align-items-center"  onClick={() => setAddEditVisa(true)}>
            Add Visa Type
                        <PlusCircleOutlined />
                    </Button>
                    <div>
                    <Table
                    className="common-setting-table"
                        scroll={{ x: 768 }}
                        columns={CareHomeColumns}
                        dataSource={VisaManagementData}
                        pagination={false}
                    />
                        </div>

                     <AddModal addEditVisa={addEditVisa} setAddEditVisa={setAddEditVisa} />
        </div>

    );
}

export default VisaManagement;
