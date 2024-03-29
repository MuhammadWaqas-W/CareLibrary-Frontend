import { Form, Switch } from 'antd'
import React from 'react';
import './SwitchWrapper.scss';

interface ISwitchWrapper {
    name: string;
    label?: string;
    required?: boolean;
    onChange?: any;
    checked?:boolean;
}

const SwitchWrapper = (props: ISwitchWrapper) => {
    const { label, name,checked, required, onChange } = props;
    return (
        <>
            <div className='switch-wrapper'>
                <Form.Item label={''} name={[name]} rules={[{ message: "Input required", required: required }]} style={{marginBottom:"0px"}}>
                    <div className='switch-btn d-flex align-center' style={{gap: "10px"}}>
                        <Switch onChange={onChange} checked={checked} />
                        <label>{label}</label>
                    </div>
                </Form.Item>
            </div>
        </>
    )
}

export default SwitchWrapper