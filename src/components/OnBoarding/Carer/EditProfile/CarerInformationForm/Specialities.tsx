import { Button, Col, Row, Space, Switch, Tooltip } from 'antd'
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react'
import infoIcon from "../../../../../assets/icons/info-icon.svg";
import './FormMain.scss'

const SpecialitiesDetails = [
    {
        title: 'Able to follow instructions & procedures',
        switch: false
    },
    {
        title: 'Able to work in a team but use own initiative ',
        switch: true
    },
    {
        title: 'Caring and kind ',
        switch: true
    },
    {
        title: 'Communication skills, including listening',
        switch: false
    },
    {
        title: 'Moving and handling',
        switch: false
    },
    {
        title: ' Observational skills',
        switch: true
    },
    {
        title: 'Organising skills',
        switch: false
    },
    {
        title: 'Willing to be hands-on with patients',
        switch: true
    },
    {
        title: 'Willing to do personal care tasks',
        switch: false
    },


]
const Specialities = (props: any) => {
    const { handleSelectedStepValue, setActivePanelKey, auditCheck } = props;
    const [specialities, setSpecialities] = useState(SpecialitiesDetails);

    const handleSwitchChange = (index: any, checked: any) => {
        const newSpecialities = [...specialities]; // create a new copy of the array
        newSpecialities[index].switch = checked; // update the switch value for the corresponding item
        setSpecialities(newSpecialities); // update the state with the new array
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
        // onClick={() => handleSelectedStepValue('Address Details')} 
        if (specialities) {
            setActivePanelKey('Background Checks')
            handleSelectedStepValue('DBS')
        }
        // props.onChildStateChange(props.selectedStepValue + 1)
    };


    return (
        <div className='personal-form-wrapper'>
            <Row gutter={[20, 20]}>
                <Col xs={24}>
                    <Space>
                        <span className='fw-600 fs-20' > Specialities</span>
                        <Tooltip placement="bottomLeft" color="#65CDF0" overlayInnerStyle={{
                            width: "499px",
                        }} title="This will be helpful to filter candidates based on their special skills. You can change these from Settings> Staff Settings> Define Staff Specialities.">
                            <img src={infoIcon} alt="infoIcon" className='d-flex align-center' />
                        </Tooltip>
                    </Space>
                </Col>

                {specialities.map((item, index) =>
                    <Col lg={12} xs={24}>
                        <Space key={index}>
                            <Switch checked={item.switch} onChange={(checked) => handleSwitchChange(index, checked)} />
                            <span className='fw-400 fs-14 label-color'>{item.title}</span>
                        </Space>
                    </Col>
                )}

                <Col xs={13}>
                    <span className='fw-600 fs-14 label-color'>Other</span>
                    <TextArea rows={4} />
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
                            <Button className='edit-module-button   align-center d-flex btn-secondary' onClick={onFinish} >Continue</Button>
                        </Space>
                    </div>
                </Col>

            </Row>

        </div>
    )
}

export default Specialities