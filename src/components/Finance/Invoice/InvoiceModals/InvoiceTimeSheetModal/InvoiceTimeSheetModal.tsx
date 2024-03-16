import { Col, Modal, Row } from 'antd';
import MainLogo from "../../../../../assets/brand/Logo.png";
import Print from "../../../../../assets/icons/finance-setup/print.png";
import Download from "../../../../../assets/icons/finance-setup/download.png";
import Close from '../../../../../assets/images/OnBoarding/Close.svg';
import TableComponent from './InvoiceTimeSheetTable';
import "./InvoiceTimeSheetModal.scss"

function InvoiceTimeSheetModal(props:any) {
  const {isOpenTimeSheetModal, setIsOpenTimeSheetModal} = props;
  const tableHeaderDetails =[
    {heading:"Time Period",details:"28-03-2022 to 04-04-2022"},
    {heading:"Week No",details:"Week-25"},
    {heading:"Care Home",details:"Risby Park"}
  ]
  const tableFooterDetails=[
    {heading:"Total Hours",details:"132.00"},
    {heading:"Total Receivable",details:"£ 2,156.00 "},
  ]
  return (
      <Modal className='invoice-modal' title={<img src={MainLogo} alt="main-logo"/>} closeIcon={< img src={Close} alt="close-icon" />}
       footer={false} open={isOpenTimeSheetModal} onOk={()=>{setIsOpenTimeSheetModal(false)}} onCancel={()=>{setIsOpenTimeSheetModal(false)}}
        width={1653}
      >
        <Row gutter={[25,10]}  style={{marginTop:"2rem"}}>
          <Col xs={24} md={12}>
            {tableHeaderDetails.map((data)=>{
              return <Row className='details-wrapper'>
                <Col xs={12} md={3}><p className='fs-14 fw-600 m-0'>{data.heading}</p></Col>
                <Col xs={12} md={6}><p className='fs-14 fw-400 m-0'>{data.details}</p></Col>
              </Row>
            })}
          </Col>
          <Col xs={24} md={12} className="icon-wrapper d-flex justify-end">
            <img className="cursor-pointer" src={Print} height={24} width={24} alt="print" />
            <img className="cursor-pointer" src={Download} height={24} width={25} alt="cloud" />
          </Col>
          <Col xs={24} md={24} style={{margin:"1rem 0"}}>
            <div className="table-wrapper">
              <TableComponent/>
            </div>
          </Col>
          <Col xs={24} md={24}>
            {tableFooterDetails.map((data)=>{
              return <Row className='details-wrapper'>
              <Col xs={12} md={2}><p className='fs-14 fw-600 m-0'>{data.heading}</p></Col>
              <Col xs={12} md={2}><p className='fs-14 fw-400 m-0'>{data.details}</p></Col>
            </Row>
            })}
          </Col>
          
        </Row>
      </Modal>
  )
}

export default InvoiceTimeSheetModal
