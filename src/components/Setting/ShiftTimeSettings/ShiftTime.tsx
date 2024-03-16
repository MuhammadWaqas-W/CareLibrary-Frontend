

import "./ShiftTime.scss";
import "../../../sass/common.scss";
import { Col, Row, Select ,Button} from 'antd';
import { ShiftTimeData } from "../../../mock/ShiftTime";


const ShiftTime = () => {
  
 
  return (

    <div className='Shift-Time-Settings'>
      <div className="header bg-white border-radius-8">
        <label className="fs-14 fw-600">Care Home</label><br />
        <Select
         style={{marginTop:"5px"}}
          className="d-flex"
          placeholder="Select"
          options={[
            { value: 'Medical Staff ', label: 'Medical Staff ' },
            { value: 'Medical Staff', label: 'Medical Staff' },
          ]}
        />
      </div>
      <div className="shift-slots bg-white border-radius-8">
         {ShiftTimeData.map((item) => {
                        return (
                          <Row className="shift-row border-radius-10 align-items-center">
                          <Col xxl={6} xl={6} lg={6} md={6} xs={24}>
                            <div className="start-time d-flex align-items-center">
                              <img src={item.img} alt="shiftImg" width="50px" height="50px" />
                              <h6 className="m-0 fs-16 fw-500">{item.shiftname} </h6>
                            </div>
                          </Col>
                          <Col xxl={14} xl={16} lg={18} md={16} xs={24}>
                           <Row>
                           <Col xxl={12} xl={12} lg={12} md={12} xs={24}>
                            <div className="start-time d-flex align-items-center">
                              <p className="m-0 fs-16 fw-500">Start Time :</p>
                              <input type="time" defaultValue="00:00:00" min="09:00:00" max="18:00:00" />
                              <Select
                                className="d-flex"
                                defaultValue="PM"
                                style={{ width: 60 }}
                                options={[
                                  { value: 'PM', label: 'PM' },
                                  { value: 'AM', label: 'AM' },
                                ]}
                              />
                            </div>
                          </Col>
                          <Col xxl={12} xl={12} lg={12} md={12} xs={24}>
                            <div className="start-time d-flex align-items-center">
                              <p className="m-0 fs-16 fw-500">End Time :</p>
                              <input type="time" defaultValue="00:00:00" min="09:00:00" max="18:00:00" />
                              <Select
                                className="d-flex"
                                defaultValue="PM"
                                style={{ width: 60 }}
                                options={[
                                  { value: 'PM', label: 'PM' },
                                  { value: 'AM', label: 'AM' },
                                ]}
                              />
                            </div>
                          </Col>
                          </Row>
                          </Col>
                         
                        </Row>
                         
                        );
                    })}
      
     
     
      <Button type="primary"> Save</Button>
      </div>

    </div>

  )
}

export default ShiftTime