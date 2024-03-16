import React from 'react'

// Ant Components
import { Col, Row, Select } from 'antd';

// SCSS
import "../../CommonReportChildFilters/CommonReportChildFilters.scss";
import "./GrossProfitLossTopFilters.scss";

const GrossProfitLossTopFilters = () => {
    return (
        <Row gutter={[0, 20]} className='gross-profit-loss-top-filters-wrapper common-report-child-filter-wrapper'>
            <Col xs={24} md={8} xl={6} xxl={4}>
                <p className='fs-14 fw-600 title-color line-height-17 m-0' style={{ marginBottom: "0.563rem" }}>Client Name</p>
                <div className="filter-column">
                    <Select
                        size="large"
                        placeholder="Select Client Name"
                        defaultValue="Arsalan Khan"
                        optionFilterProp="children"
                        className="app-select-wrap-class"
                        popupClassName="app-select-popup-wrap-class"
                        style={{ width: "100%" }}
                        // onChange={handleCommonFilterChange}
                        // filterOption={(input: any, option: any) => { (option?.label ?? "").toLowerCase().includes(input.toLowerCase()) }}
                        options={[
                            { value: "Arsalan Khan", label: "Arsalan Khan" },
                            { value: "Ali Rehman", label: "Ali Rehman" },
                            { value: "Kashif", label: "Kashif" },
                        ]}
                    />
                </div>
            </Col>
            <Col xs={24} md={8} xl={6} xxl={4}>
                <p className='fs-14 fw-600 title-color line-height-17 m-0' style={{ marginBottom: "0.563rem" }}>Time Frame</p>
                <div className="filter-column">
                    <Select
                        size="large"
                        placeholder="Select Time Frame"
                        defaultValue="Last Day"
                        optionFilterProp="children"
                        className="app-select-wrap-class"
                        popupClassName="app-select-popup-wrap-class"
                        style={{ width: "100%" }}
                        // onChange={handleCommonFilterChange}
                        // filterOption={(input: any, option: any) => { (option?.label ?? "").toLowerCase().includes(input.toLowerCase()) }}
                        options={[
                            { value: "last Day", label: "last Day" },
                            { value: "Today", label: "Today" },
                        ]}
                    />
                </div>
            </Col>

            <Col xs={24}>
                <Row gutter={[{ xs: 5, sm: 8, md: 10 }, { xs: 5, sm: 8, md: 10 }]}>
                    <Col xs={24} sm={12} md={6} xl={6} xxl={4}>
                        <div className='top-filter-single-card' style={{ borderLeft: "4px solid #F7B923" }}>
                            <p className='fs-14 fw-600 line-height-17 title-color'>GROSS PROFIT</p>
                            <p className='fs-20 fw-500 line-height-28 orange-color'>8755.13</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={6} xl={6} xxl={4}>
                        <div className='top-filter-single-card' style={{ borderLeft: "4px solid #EE2E7E" }}>
                            <p className='fs-14 fw-600 line-height-17 title-color'>INCOME TAX</p>
                            <p className='fs-20 fw-500 line-height-28 pink-color'>437.76</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={6} xl={6} xxl={4}>
                        <div className='top-filter-single-card' style={{ borderLeft: "4px solid #50C4EB" }}>
                            <p className='fs-14 fw-600 line-height-17 title-color'>NATIONAL INSURANCE</p>
                            <p className='fs-20 fw-500 line-height-28' style={{ color: "#50C4EB" }}>367.61</p>
                        </div>
                    </Col >
                    <Col xs={24} sm={12} md={6} xl={6} xxl={4}>
                        <div className='top-filter-single-card' style={{ borderLeft: "4px solid #5ED371" }}>
                            <p className='fs-14 fw-600 line-height-17 title-color'>OTHER</p>
                            <p className='fs-20 fw-500 line-height-28' style={{ color: "#5ED371" }}>8755.13</p>
                        </div>
                    </ Col>
                    <Col xs={24} sm={12} md={6} xl={6} xxl={4}>
                        <div className='top-filter-single-card' style={{ borderLeft: "4px solid #7B61FF" }}>
                            <p className='fs-14 fw-600 line-height-17 title-color'>GROSS PROFIT</p>
                            <p className='fs-20 fw-500 line-height-28' style={{ color: "#7B61FF" }}>7879.63</p>
                        </div>
                    </Col>
                </Row >
            </Col >
        </Row >
    )
}

export default GrossProfitLossTopFilters