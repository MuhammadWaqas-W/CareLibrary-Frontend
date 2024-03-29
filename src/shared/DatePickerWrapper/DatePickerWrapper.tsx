import { DatePicker, Form } from 'antd'
import React from 'react';
import DatePickerIcon from "../../assets/icons/ShiftManger/date-picker-icon.png";
import './DatePickerWrapper.scss';

interface IDatePickerWrapper {
    label?: string;
    name: string;
    required?: boolean;
    onChange?: any;
    disabled?: boolean;
    placeholder?: string;
}

const DatePickerWrapper = (props: IDatePickerWrapper) => {
    const { label, name, required, onChange, disabled, placeholder } = props;
    return (
        <>
            <div className='date-picker-wrapper'>
                <Form.Item label={label} name={[name]} rules={[{ message: "Required Field", required: required }]} >
                    <DatePicker
                        onChange={onChange}
                        popupClassName="date-picker-content"
                        placeholder={`${placeholder ?? "dd/mm/yyyy"}`}
                        suffixIcon={<img src={DatePickerIcon} alt="datePicker" />}
                        className="cursor-pointer"
                        disabled={disabled}
                    />
                </Form.Item>
            </div>
        </>
    )
}

export default DatePickerWrapper