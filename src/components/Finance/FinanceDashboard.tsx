
import { Col, Layout, Row } from "antd";

import React from 'react'
import AmountReceivableTable from './AmountReceivableTable/AmountReceivableTable'
import Cards from "./Cards/Cards"
import AccountReceivableMain from './charts/AccountRecieveable/AccountReceivable'
import ClientAverageProfit from './charts/ClientAverageProfit/ClientAverageProfit'
import RevenueComparison from './charts/RevenueComparison/RevenueComparison'
import StaffCategories from './charts/StaffCategories/StaffCategories'
import WeekWiseSummary from './charts/WeekWiseSummary/WeekWiseSummary'
import ClientProfitTable from './ClientProfitTable/ClientProfitTable'
import TopClientsCards from './TopClients/TopClientsCards'

const FinanceDashboard = () => {
  return (
    <Layout className="bgLight-color wrap-main-finance-dashboard">
    
      <Row gutter={[23, 23]} style={{ paddingBottom:"30px"}}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} >
        <Cards/>
        </Col>
       </Row>
       <Row gutter={[23, 23]} style={{ paddingBottom:"30px"}}>
       
        <Col sm={24} md={24} lg={24} xl={12}>
        <AccountReceivableMain/>
        </Col>
        <Col sm={24} md={24} lg={24} xl={12}>
        <RevenueComparison/>
        </Col>
        </Row>
        <Row gutter={[23, 23]} style={{ paddingBottom:"30px"}}>
        <Col sm={24} md={24} lg={24} xl={14}>
        <ClientAverageProfit/>
        </Col>
        <Col sm={24} md={24} lg={24} xl={10}>
        <StaffCategories/>
        </Col>
        </Row>
        <Row gutter={[23, 23]} style={{ paddingBottom:"30px"}}>
        <Col xs={24}   sm={24} md={24} lg={24} xl={24}>
        <WeekWiseSummary/>
        </Col>
        </Row>
        <Row gutter={[23, 23]} style={{ paddingBottom:"30px"}}>
        <Col sm={24} md={24} lg={24} xl={14} style={{ paddingBottom:"30px"}}>
        <AmountReceivableTable/>
        <ClientProfitTable/>
        </Col>
        <Col sm={24} md={24} lg={24} xl={10}>
        <TopClientsCards/>
        </Col>
        </Row>
    </Layout>
  )
}

export default FinanceDashboard