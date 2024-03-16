import React from 'react'
import {Card ,Row,Col, Layout} from 'antd';
import { financeCardsData } from '../../../mock/FinanceDashboard'
import "./Cards.scss"

const Cards = () => {
 
  
    return (
      
        <Layout className='wrap-finance-cards'>
         
             <Row gutter={[16, 16]} style={{ paddingTop: "15px" }} className='finance-top-cards-style'>
            
            {financeCardsData.map((cardData: any, id) => {
                return (
                  <Col span={4.8}   key={id} >
                    <Card
                    className='border-radius-10 finance-card-style'
                  
                    style={{ borderLeft: `9px solid ${cardData.borderLeftbgColor}`, borderTop: "none", boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.13)" }}
                  >
                    <div className='d-flex align-center justify-between finance-card-text-img'>
                      <span className='fw-600 fs-14'>{cardData.cardLabel}</span>
                      <img src={cardData.cardImg} className="finance-card-img"  style={{ background: cardData.borderLeftbgColor, borderRadius: '50%', }} alt="CardIcon" />
                    </div>
                    <span className='fw-600 fs-32 finance-card-text-price'>{cardData.cardPrice}</span>
                  </Card>
               
                 
             </Col>
                    )
            })}
              
            </Row>
         
        </Layout>
       
    )
}

export default Cards