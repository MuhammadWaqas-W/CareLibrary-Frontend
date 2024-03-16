import React, { useState } from 'react'

// Ant Components
import { Input, Pagination, Space, Table } from 'antd'

// SCSS
import "./ViewDetailsTable.scss";

// Assets
import searchIcon from "../../../../../assets/icons/search.svg";

const ViewDetailsTable = (props: any) => {
    const { tableHeader, tableData } = props;
    const [pagination, setPagination] = useState({ current: 1, pageSize: 5 });

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
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
            </div>
            <Table rowSelection={rowSelection} columns={tableHeader} dataSource={tableData} pagination={pagination} onChange={(pagination: any) => setPagination(pagination)} className="common-staff-allocation-table" scroll={{ x: "max-content", scrollToFirstRowOnChange: true }} />
        </div>
    )
}

export default ViewDetailsTable