import { Button, Col, Row, Space, Tooltip } from 'antd'
import UploadImage from '../../../../Setting/SettingKeyInfo/UploadImage/UploadImage';

const IDUploadPassport = (props: any) => {

    const { handleSelectedStepValue, setActivePanelKey, auditCheck } = props;
    return (
        <div>

            <Row gutter={[20, 20]} >
                <Col xs={24}>
                    <span className='fw-500 fs-20 '>ID Proof Upload</span> <span>(Passport or Driving License)</span>
                </Col>
                <Col lg={21} xs={24}>
                    <UploadImage id="" />
                </Col>
                <Col xs={24}>
                    <Space className='carer-buttons'>
                        {auditCheck && <Tooltip
                                        autoAdjustOverflow={true}
                                        showArrow={false}
                                        placement="bottomLeft" color="#65CDF0"
                                        title='Click to mark as audit'
                                    >

                                        <Button className='edit-module-button  audit-button  align-center d-flex' >Audit</Button>
                                    </Tooltip>}
                        <Button className='edit-module-button bg-orange-color  align-center d-flex ' >Save</Button>
                        <Button className='edit-module-button   align-center d-flex btn-secondary' onClick={() => { handleSelectedStepValue('Add References'); setActivePanelKey('References') }}  >Continue</Button>
                    </Space>
                </Col>
            </Row>


        </div>
    )
}

export default IDUploadPassport