import { Layout,Row,Col,Card,Rate ,Space} from 'antd';
import React,{useState}  from 'react'
import {availableShiftCardData} from '../../../../mock/ShiftDetailsMockData/ShiftDetailsMock';
import '../AvailableShiftsTab/AvailableShiftsTab.scss'
import {  notification } from 'antd';
import SuccessIcon from "../../../../assets/icons/ShiftDetails/SuccessIcon.svg"
import AppSnackbar from '../../../../utils/AppSnackbar';

const ConfirmationTab = () => {
  const [AcceptSnackBar, AcceptInfo] = notification.useNotification();
  const [CancelConfirmationdata,setCancelConfirmationdata] = useState(availableShiftCardData);
  const [AcceptConfirmationdata,setAcceptConfirmationdata] = useState(availableShiftCardData);
  const openNotification = () => {
    AcceptSnackBar.open({
      message: <span className='fw-600 fs-16 title-color d-flex align-items-center justify-center' style={{marginLeft:"-4px",marginTop:"12px"}}>Shift Accepted</span>,
      description:"",
      style: {
        width: 229,
        height:56,
        background: '#DDECD5',
        border: '1px solid #52C41A',
        borderRadius: '4px',
        color:'white',
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      },
      icon: <img src={SuccessIcon} width="36px" height="36px" alt="Success Icon" style={{marginTop:"-4px",marginLeft:"-16px"}}/>,
    });
  };
  
  //  Remove function
  const onCancelShiftHandler = (id:any) => {
    const newCancelConfirmationdata = CancelConfirmationdata.filter((item) => item.id !== id);
    setCancelConfirmationdata( newCancelConfirmationdata);
  };
  const onAcceptShiftHandler = (id:any) => {
    console.log("delety",id);
    const newAcceptConfirmationdata = AcceptConfirmationdata.filter((item) => item.id !== id);
   
    setAcceptConfirmationdata( newAcceptConfirmationdata);
    openNotification();
   
    
  };
  return (
    <Layout className='wrap-shift-details-card'>
    <Row  gutter={[23, 23]} style={{ paddingTop: "15px" }}>
  
    {AcceptInfo}
  
            {AcceptConfirmationdata.map((shiftData: any, id) => {
                return (
                  <Col className="gutter-row" xs={24} sm={24} md={12} lg={6} xl={6} key={id} >
                   <div className=''>
                    <Card
                    className='border-radius-10 shift-details-card-style'>
                    <Row gutter={[6,6]} className='d-flex justify-between shift-details-available-shift-top-img-text'>
                      <Col xl={24} sm={24} xs={24} lg={24}>
                      <img src={shiftData.homeIcon} alt="HomeIcon" width={28} height={28} className="shift-img"/>
                      <span className='fw-500 fs-20 shift-title'>{shiftData.title} </span>
                      </Col>
                      <Col xl={24} sm={24} xs={24} lg={24}>
                      <span className='rating-star'><Rate disabled defaultValue={shiftData.rateStar} style={{fontSize:"15px",marginLeft:"35px"}}/></span>
                      </Col>
                      
                    </Row>
                    <div className='wrap-shift-card-info '>
                    <div className=' d-flex shift-card-content align-center' >
                    <img src={shiftData.locationIcon} alt="HomeIcon" width={18} height={24}/>
                    <span className='fw-400 fs-14 line-height-22 '>{shiftData.address}</span>
                    </div>
                    <div  className=' d-flex  shift-card-content'>
                    <img src={shiftData.dateIcon} alt="HomeIcon" width={21} height={21}/>
                    <span  className='fw-400 fs-14 line-height-22 '>{shiftData.date}</span>
                    </div>
                    <div  className=' d-flex  shift-card-content'>
                    <img src={shiftData.timeIcon} alt="HomeIcon" width={16} height={16}/>
                    <span  className='fw-400 fs-14 line-height-22 '>{shiftData.time}</span>
                    </div>
                    <div  className=' d-flex  shift-card-content'>
                    <img src={shiftData.weatherIcon} alt="HomeIcon" width={24} height={24} />
                    <span  className='fw-400 fs-14 line-height-22 shift-weather'> {shiftData.weather}</span>
                    </div>
                    <div  className=' d-flex   shift-card-content'>
                    <img src={shiftData.euroIcon} alt="HomeIcon" width={15.32} height={21}/>
                    <span dangerouslySetInnerHTML={{ __html: shiftData?.shiftRate }}>
                      </span>
                    </div>
                    <Space className='wrap-shift-card-btn'>    
                      <button className='fw-600 fs-16 white-color cursor-pointer shift-details-card-cancel-btn'   onClick={() => onCancelShiftHandler(id)}>Cancel</button>
                      <button className='fw-600 fs-16 white-color cursor-pointer shift-details-card-accept-btn' onClick={() => {  onAcceptShiftHandler(id) }}  >Accept</button>
                    </Space>
                    </div>
                  </Card>
                  </div>
                  {/* <AppSnackbar type="success" message="Shift Accepted" messageHeading=""/> */}
             </Col>
                    )
            })}
              
            </Row>
    </Layout>
  )
}

export default ConfirmationTab
