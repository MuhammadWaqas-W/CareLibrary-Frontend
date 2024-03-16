// import "../../../../sass/common.scss";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Select, Switch, Table, Tooltip } from "antd";
import "./RegistrationConfiguration.scss";
import arrowDown from "../../../../assets/icons/arrow-down-icon.svg"
import { ColumnsType } from "antd/es/table";
import { CareCoordinatorData, CareHomeData, DataType, RegistrationConfigurationData, TrainingInstructorData } from "../../../../mock/SettingRegistrationConfiguration";

import { useState } from "react";
import SwitchWrapper from "../../../../shared/SwitchWrapper/SwitchWrapper";

function RegistrationConfiguration(props:any) {
    const [showTable, setShowTable] = useState(true);
    const [selectValue, setSelectValue] = useState("");

    const checkValue = (checked: boolean) => {
      
        if (checked === true) {
            setShowTable(false)
        } else {
            setShowTable(true)
        }
    };
    const handleSelectChange = (value: any) => {
           setShowTable(true)
        setSelectValue(value)
    }

    const { switchState, onSwitchToggle } = props;
   
    const handleSwitchToggle = (tableId: string,index:any, value:any) => {
 console.log('switchState++++++++',switchState);
      onSwitchToggle(index, value);
    };

     const RegistrationConfigurationColumns: ColumnsType<DataType> = [
        {
            title: '',
            dataIndex: 'icon',
            key: 'icon',
        },
        {
            title: 'S.No.',
            dataIndex: 'SNo',
            key: 'SNo',
        },
        {
            title: 'Menu Name',
            dataIndex: 'MenuName',
            key: 'MenuName',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (value:any, record:any, index:any) => (
                <Switch checked={switchState[`${"RegistrationConfiguration"}_${index}`]} onChange={(value) => handleSwitchToggle("RegistrationConfiguration",index,record.MenuName)} />
              ),
        },
    ];
   
    const CareHomeColumns: ColumnsType<DataType> = [
        {
            title: 'S.No.',
            dataIndex: 'SNo',
            key: 'SNo',
        },
        {
            title: 'Menu Name',
            dataIndex: 'MenuName',
            key: 'MenuName',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (value:any, record:any, index:any) => (
                <Switch checked={switchState[`${"CareHome"}_${index}`]} onChange={(value) => handleSwitchToggle("CareHome",index,record.MenuName)} />
              ),
        },
    ];

    const TrainingInstructorColumns: ColumnsType<DataType> = [
        {
            title: '',
            dataIndex: 'icon',
            key: 'icon',
        },
        {
            title: 'S.No.',
            dataIndex: 'SNo',
            key: 'SNo',
        },
        {
            title: 'Menu Name',
            dataIndex: 'MenuName',
            key: 'MenuName',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (value:any, record:any, index:any) => (
                <Switch  checked={switchState[`${"TrainingInstructor"}_${index}`]} onChange={(value) => handleSwitchToggle("TrainingInstructor",index,  record.MenuName)} />
              ),
        },
    ];

    const CareCoordinatorColumns: ColumnsType<DataType> = [
        {
            title: '',
            dataIndex: 'icon',
            key: 'icon',
        },
        {
            title: 'S.No.',
            dataIndex: 'SNo',
            key: 'SNo',
        },
        {
            title: 'Menu Name',
            dataIndex: 'MenuName',
            key: 'MenuName',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (value:any, record:any, index:any) => (
                <Switch  checked={switchState[`${"CareCoordinator"}_${index}`]} onChange={(value) => handleSwitchToggle("CareCoordinator",index,  record.MenuName)} />
              ),
        },
    ];

    const data = Array(10).fill("empty").map((_, index) => ({
      key: index,
      row: `Row ${index + 1}`,
    }));

    return (
        <div className='registration-configuration'>
            <div className="heading">
                <h1 className="fs-20 fw-500 m-0">Registration Configuration
                    <Tooltip placement="bottomLeft"
                        color="#65CDF0"
                        overlayInnerStyle={{
                            width: "499px",
                        }}
                        title="You can shorten your candidate registration form by turning off some of these sections if they are not needed.">
                        <InfoCircleOutlined />
                    </Tooltip>

                </h1>

            </div>
            <div className="select-filter">
                <label className="fs-14 fw-600">Select User Type</label><br />
                <Select
                    // onChange={selectedValue(value)}
                    onChange={(value) => handleSelectChange(value)}
                    suffixIcon={<img src={arrowDown} />}
                    placeholder="Selected Option"
                    options={[
                        { value: 'Carer', label: 'Carer' },
                        { value: 'Care Home', label: 'Care Home' },
                        { value: 'Training Instructor', label: 'Training Instructor' },
                        { value: 'Care Coordinator', label: 'Care Coordinator' },
                    ]}
                />
            </div>
            {(selectValue === "Carer" || selectValue === "Care Home" || selectValue === "Training Instructor" || selectValue === "Care Coordinator") &&
                <div className="carer-option">
                    <div className="show-table d-flex align-items-center">
                        <p className="m-0 fs-14 fw-600">Show Full Recruitment Module </p>
                        <SwitchWrapper
                        onChange={checkValue}            
                        name="RecruitmentModule"
                        />
                    </div>                   
                    {showTable &&
                        <Table
                        className="common-setting-table"
                            columns={selectValue === "Carer" ? RegistrationConfigurationColumns:selectValue === "Care Home" ? CareHomeColumns:selectValue === "Training Instructor" ? TrainingInstructorColumns :CareCoordinatorColumns}
                            dataSource={selectValue === "Carer" ? RegistrationConfigurationData:selectValue === "Care Home" ? CareHomeData:selectValue === "Training Instructor" ? TrainingInstructorData :CareCoordinatorData}
                            pagination={false}
                            scroll={{ x: 768 }}
                        />
                    }

                </div>
            }



        </div>

    );
}

export default RegistrationConfiguration;
