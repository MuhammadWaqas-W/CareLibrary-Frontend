import { Button, Col, Row, Space, Switch, Tooltip } from 'antd'
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react'
import infoIcon from "../../../../../assets/icons/info-icon.svg";
import UploadImage from '../../../../Setting/SettingKeyInfo/UploadImage/UploadImage';
import './FormMain.scss'

const ImmunisationDetails = [
    {
        title: 'Tetanus',
        switch: false
    },
    {
        title: 'Hepatitis B',
        switch: true
    },
    {
        title: 'Polio',
        switch: true
    },
    {
        title: 'Varicella (Chickenpox)',
        switch: false
    },
    {
        title: 'Measles,mumps and rubella (MMR)',
        switch: false
    },
    {
        title: ' Annual Influenza Vaccine',
        switch: true
    },
    {
        title: 'Covid Vaccination',
        switch: false
    },
    {
        title: 'Bacillus Calmette-Guerin (BCG)',
        switch: true
    },
    {
        title: 'Willing to do personal care tasks',
        switch: false
    },


]
const Immunisation = (props: any) => {
    const { handleSelectedStepValue, auditCheck } = props;
    const [Immunisation, setImmunisation] = useState(ImmunisationDetails);

    const handleSwitchChange = (index: any, checked: any) => {
        const newImmunisation = [...Immunisation]; // create a new copy of the array
        newImmunisation[index].switch = checked; // update the switch value for the corresponding item
        setImmunisation(newImmunisation); // update the state with the new array
    };



    return (
        <div className='personal-form-wrapper'>
            <Row gutter={[20, 20]}>
                <Col xs={24}>
                    <span className='fw-600 fs-20' > Immunisation</span>
                </Col>

                {Immunisation.map((item, index) =>
                    <Col lg={12} xs={24}>
                        <Space key={index}>
                            <Switch checked={item.switch} onChange={(checked) => handleSwitchChange(index, checked)} />
                            <span className='fw-400 fs-14 label-color'>{item.title}</span>
                        </Space>
                    </Col>
                )}

                <Col xs={24}>
                    <span className='fw-600 fs-20' > Upload Certificates</span>
                </Col>

                <Col xs={24}>
                    <UploadImage id="" />
                </Col>
                <Col xs={24} >
                    <div >
                        <Space className='carer-buttons'>
                            {auditCheck && <Tooltip
                                autoAdjustOverflow={true}
                                showArrow={false}
                                placement="bottomLeft" color="#65CDF0"
                                title='Click to mark as audit'
                            >

                                <Button className='edit-module-button  audit-button  align-center d-flex' >Audit</Button>
                            </Tooltip>}

                            <Button className='edit-module-button bg-orange-color  align-center d-flex '>Save</Button>
                            <Button className='edit-module-button   align-center d-flex btn-secondary' onClick={() => handleSelectedStepValue('Medical Questionnaire')}>Continue</Button>
                        </Space>
                    </div>
                </Col>

            </Row>

        </div>
    )
}

export default Immunisation