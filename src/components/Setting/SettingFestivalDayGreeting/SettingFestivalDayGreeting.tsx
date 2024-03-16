import { useState } from "react";
import { Button, Space, Table } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import "./SettingFestivalDayGreeting.scss";
import SwitchWrapper from "../../../shared/SwitchWrapper/SwitchWrapper";
import "../../../sass/common.scss";
import editIcon from "../../../assets/icons/edit-blue.svg";
import AddModal from "./AddModal";
import { FestivalDayData,DataType } from "../../../mock/FestivalDayGreeting";


const SettingFestivalDayGreeting = () => {
  const [addEditFestivalDay, setAddEditFestivalDay] = useState<boolean>(false);

    const FestivalDayColumns: ColumnsType<DataType> = [
        {
            title: 'S. No.',
            dataIndex: 'SNo',
            key: 'SNo',
        },
        {
            title: 'Festival Name',
            dataIndex: 'Title',
            key: 'Title',
        },
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'dte',
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
                onClick={() => setAddEditFestivalDay(true)}
            >
                <img src={editIcon} alt="edit" className="d-flex align-center cursor-pointer" height={24} width={24} />
            </Space>),
        }
    ];

    return (
      <div className='festival-day-reeting border-radius-8'>
      <div className="heading">
          <h1 className="fs-20 fw-500 m-0">Festival Day Greetings </h1>
      </div>
      <Button className="add-visa-type-btn fs-14 fw-600 border-radius-10 d-flex justify-center align-items-center"  onClick={() => setAddEditFestivalDay(true)}>
      Add Festival
                  <PlusCircleOutlined />
              </Button>
              <div>
              <Table
              className="common-setting-table"
                  scroll={{ x: 768 }}
                  columns={FestivalDayColumns}
                  dataSource={FestivalDayData}
                  pagination={false}
              />
                  </div>

               <AddModal addEditFestivalDay={addEditFestivalDay} setAddEditFestivalDay={setAddEditFestivalDay} />
  </div>


    )
}

export default SettingFestivalDayGreeting