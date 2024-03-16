// import "../../../../sass/common.scss";
import { Button, Input, Pagination, Space, Table, Tooltip } from "antd";
import "./EmailNotificationTab.scss";
import { ColumnsType } from "antd/es/table";
import { useState } from "react";
import SwitchWrapper from "../../../../shared/SwitchWrapper/SwitchWrapper";
import { EmailNotificationData, DataType } from "../../../../mock/EmailNotification";
import searchIcon from "../../../../assets/icons/search.svg";

function EmailNotificationTab() {
    const [showTable, setShowTable] = useState(true);
    const [pagination, setPagination] = useState({ current: 1, pageSize: 5 });

    const checkValue = (checked: boolean) => {
        console.log(checked);
        if (checked === true) {
            setShowTable(false)
        } else {
            setShowTable(true)
        }
    };

    const EmailNotificationColumns: ColumnsType<DataType> = [
        {
            title: 'S. No.',
            dataIndex: 'SNo',
            key: 'SNo',
        },
        {
            title: 'Username',
            dataIndex: 'MenuName',
            key: 'MenuName',
        },
        {
            title: 'Yes / No',
            dataIndex: 'actoin',
            key: 'actoin',
            render: () => (
                <SwitchWrapper
                    name="actoin"
                />),
        },
    ];

    return (
        <div className='registration-configuration'>
            <div className="heading">
                <h1 className="fs-20 fw-500 m-0">Email Notification Settings </h1>

            </div>
            <div className="carer-option">
                <div className="show-table d-flex align-items-center">
                    <p className="m-0 fs-14 fw-600">Enable Email Notifications and Alerts ?</p>
                    {/* <Switch onChange={checkValue} defaultChecked={!showTable}/> */}
                    <SwitchWrapper
                        onChange={checkValue}
                        name="RecruitmentModule"
                    />
                </div>
                {!showTable &&
                    <>
                        <div className="filter-bar input-search-wrapper">
                            <Pagination
                                current={pagination.current}
                                showSizeChanger={true}
                                defaultPageSize={5}
                                pageSize={pagination.pageSize}
                                rootClassName="custom-pagination-wrapper-class"
                                total={EmailNotificationData.length}
                                onChange={(current, pageSize) =>
                                    setPagination({ current, pageSize })
                                }
                            />
                            <Space className='input-export-icons' size={[30, 10]}>
                                <Input
                                    className="search-input"
                                    placeholder="Search"
                                    prefix={<img src={searchIcon} alt="searchIcon" width={24} height={24} style={{ marginRight: '0.623rem' }} />}
                                />

                            </Space>

                        </div>

                        <Table
                            className="common-setting-table"
                            columns={EmailNotificationColumns}
                            dataSource={EmailNotificationData}
                            pagination={pagination} onChange={(pagination: any) => setPagination(pagination)}
                            scroll={{ x: 768 }}
                        />

                        <Button className="btn-secondary email-save-btn"> Save</Button>
                    </>


                }

            </div>




        </div>

    );
}

export default EmailNotificationTab;
