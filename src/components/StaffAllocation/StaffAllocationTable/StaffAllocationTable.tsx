import React, { useState } from 'react'

// Ant Components
import { Input, Pagination, Space, Table } from 'antd'

// SCSS
import "./StaffAllocationTable.scss";

// Assets
import searchIcon from "../../../assets/icons/search.svg";
import fileDefault from "../../../assets/icons/StaffAllocation/file-default.svg";
import fileCSV from "../../../assets/icons/StaffAllocation/file-csv.png";
import fileXLS from "../../../assets/icons/StaffAllocation/file-xls.svg";

const StaffAllocationTable = (props: any) => {
    const { tableHeader, tableData } = props;
    const [pagination, setPagination] = useState({ current: 1, pageSize: 5 });

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
        props.onChangeSelectedRowsKeys(newSelectedRowKeys)
      };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
      };
      

    return (
        <div className='common-staff-allocation-table-wrapper'>
            <div className='custom-pagination-search'>
                <Pagination
                    current={pagination.current}
                    // responsive={true}
                    showSizeChanger={true}
                    defaultPageSize={5}
                    pageSize={pagination.pageSize}
                    rootClassName="custom-pagination-wrapper-class"
                    total={tableData.length}
                    // showTotal={(total) => `Total ${total} items`}
                    onChange={(current, pageSize) =>
                        setPagination({ current, pageSize })
                    }
                />
                <Space className='input-export-icons' size={[30, 0]}>
                    <Input
                        className="search-input"
                        placeholder="Search Schedule"
                        prefix={<img src={searchIcon} alt="searchIcon" width={24} height={24} style={{ marginRight: '0.623rem' }} />}
                    />
                    <Space size={[25, 0]} className="files-icons">
                        <img src={fileDefault} alt="" className='files-export-icons'/>
                        <img src={fileCSV} alt="" className='files-export-icons'/>
                        <img src={fileXLS} alt="" className='files-export-icons'/>
                    </Space>
                </Space>

            </div>
            <Table rowSelection={rowSelection} columns={tableHeader} dataSource={tableData} pagination={pagination} onChange={(pagination: any) => setPagination(pagination)} className="common-staff-allocation-table" scroll={{ x: "max-content", scrollToFirstRowOnChange: true }} />
        </div>
    )
}

export default StaffAllocationTable