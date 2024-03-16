import { Button, Col, Row, Slider } from 'antd'
import React, { useState } from 'react'
import "./StaffAllocationFilters.scss"
import StaffAllocationInnerFilters from './StaffAllocationInnerFilters/StaffAllocationInnerFilters';

const handleStyling: any = {
    color: "blue",
    border: "7px solid white",
    borderRadius: 5,
    height: 29,
    width: 16,
    position: "absolute",
    top: -4,
    boxShadow: "0px 0px 4px 1px rgba(0, 0, 0, 0.25)",
};

const StaffAllocationFilters = ({selectedRecordId}:any) => {

    const [inputValue, setInputValue] = useState(50);

    const [checkSelectedFilters, setcheckSelectedFilters] = useState<any>(false)
    
    const isValueSelected = selectedRecordId.length

    console.log("isValueSelected new val", isValueSelected)

    const onChange = (newValue: number) => {
        setInputValue(newValue);
    };

    return (
        <div className='inner-wrap-filters'>
            <div className="select-radius-wrapper">
                <Row align="middle" className="sliderbar-wrapper">
                    <div className="slider-text">Select Radius:</div>
                    <div className="slider-text">0</div>
                    <Col style={{ width: "100%", maxWidth: "294px", marginTop: -10 }}>
                        <Slider
                            className="slider-bar"
                            handleStyle={handleStyling}
                            trackStyle={{ background: "linear-gradient(90deg, #6BCAFF 0%, #426BFF 100%)", height: 12, borderRadius: 6 }}
                            railStyle={{ background: "linear-gradient(90deg, #FFFFFF 0%, #EAEAEA 100%)", height: 12, borderRadius: 6 }}
                            min={0}
                            max={100}
                            onChange={onChange}
                            value={typeof inputValue === "number" ? inputValue : 0}
                        />
                    </Col>
                    <Col>
                        <p className="slider-text">{inputValue}</p>
                    </Col>
                </Row>
            </div>
            <div className="bottom-inset-filters d-flex justify-between align-center">
                <StaffAllocationInnerFilters checkSelectedFilters={checkSelectedFilters} setcheckSelectedFilters={setcheckSelectedFilters}/>
                <div className="bottom-filters-buttons">
                    <Button className='bottom-filter-btn apply-filter-btn'>Apply Filter</Button>
                    <Button disabled={!isValueSelected} 
                    className={`bottom-filter-btn allocate-staff-btn ${!isValueSelected ? "bottom-filter-btn allocate-staff-btn disabled-btns" : "bottom-filter-btn allocate-staff-btn"}`} 
                    >Allocate Staff</Button>
                    <Button disabled={!isValueSelected} className={`bottom-filter-btn remove-staff-btn ${!isValueSelected ? "bottom-filter-btn allocate-staff-btn disabled-btns" : "bottom-filter-btn remove-staff-btn"}`}>Remove Staff</Button>
                </div>
            </div>
        </div>
    )
}

export default StaffAllocationFilters