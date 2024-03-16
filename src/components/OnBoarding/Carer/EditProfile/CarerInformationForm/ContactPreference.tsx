
import { Button, Checkbox, Col, Row, Space, Tooltip } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import RangeIcon from '../../../../../assets/icons/OnBoarding/time-range.svg'
import React, { useState } from 'react';
import './FormMain.scss';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';


const format = 'HH:mm';
const ContactPreference = (props: any) => {
    const { handleSelectedStepValue, auditCheck } = props;
    const [selectedOption, setSelectedOption] = useState<string | null>('Email');
    const handleOptionChange = (optionValue: string) => {
        setSelectedOption(optionValue);
    };

    const options = [
        {
            value: "Email",
            label: "Email",
        },
        {
            value: "Mobile Notification",
            label: "Mobile Notification",
        },
        {
            value: "Both",
            label: "Both",
        },
        {
            value: "None of Above",
            label: "None of Above",
        },
    ];

    const contactPrefrences = [
        {
            value: "Phone",
            label: "Phone",
        },
        {
            value: "Whatsapp",
            label: "Whatsapp",
        },
        {
            value: "SMS",
            label: "SMS",
        },

    ];

    const onChange = (checkedValues: CheckboxValueType[]) => {
        console.log('checked = ', checkedValues);
    };
    return (
        <div className='personal-form-wrapper '>
            <Row gutter={[20, 20]}>
                <Col xs={24}>
                    <Space direction='vertical' size={15}
                    >
                        <label className='fw-500 fs-20 form-heading-color'>Contact Preference</label>
                        <Checkbox.Group options={contactPrefrences} defaultValue={['Phone']} onChange={onChange} className='d-flex flex-column' />
                    </Space>

                </Col>
                <Col md={16} sm={20} lg={12} xs={24}>
                    <label className='label-color fw-600 fs-14'>Time To Call</label>
                    <Row>
                        <Col xs={12}>
                            <TimePicker defaultOpenValue={dayjs('00:00:00', 'HH:mm')} format={format} placeholder='Start Time' suffixIcon={<img src={RangeIcon} alt='dd' />} />
                        </Col>
                        <Col xs={12}>
                            <TimePicker defaultOpenValue={dayjs('00:00:00', 'HH:mm')} format={format} placeholder='End Time' suffixIcon={<img src={RangeIcon} alt='dd' />} />
                        </Col>
                    </Row>
                </Col>

                <Col xs={24}>
                    <Space direction='vertical' size={15}
                    >
                        <label className='fw-500 fs-20 form-heading-color' >Notification Preference</label>
                        <div>
                            {options.map((option) => (
                                <div className='d-flex flex-column'>
                                    <Checkbox
                                        value={option.value}
                                        checked={selectedOption === option.value}
                                        onChange={() => handleOptionChange(option.value)}
                                    >
                                        {option.label}
                                    </Checkbox>

                                </div>

                            ))}
                        </div>
                    </Space>
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
                            <Button className='edit-module-button bg-orange-color  align-center d-flex ' htmlType='submit'>Save</Button>
                            <Button className='edit-module-button   align-center d-flex btn-secondary'
                                onClick={() => handleSelectedStepValue('Employment Status')} >Continue</Button>
                        </Space>
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default ContactPreference