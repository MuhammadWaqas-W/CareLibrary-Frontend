import React, { useState } from 'react'
import { Checkbox, Col, Modal, Row, } from 'antd';
import { Collapse } from 'antd';
import DownArrowIcon from "../../../../../assets/icons/ShiftManger/downArrowIcon.svg";
import UpArrowIcon from "../../../../../assets/icons/ShiftManger/upArrowIcon.svg";
import './AdvanceStaffSearch.scss';
import InputWrapper from '../../../../../shared/InputWrapper/InputWrapper';
import { advanceSearchUserType } from '../../../../../mock/ShiftManageData';
import SelectWrapper from '../../../../../shared/SelectWrapper/SelectWrapper';
import AdvanceStaffCard from './AdvanceStaffCard';
import CollapseIcon from "../../../../../assets/icons/ShiftManger/collapse-icon.png";
import AdvanceStaffCollapseCard from './AdvanceStaffViewCard';
import ToggleIcon from "../../../../../assets/icons/ShiftManger/toggle-icon.png";
import RangerWrapper from '../../../../../shared/RangeWrapper/RangerWrapper';
import CloseIcon from "../../../../../assets/icons/ShiftManger/close-icon.svg"

const { Panel } = Collapse;

const AdvanceStaffSearch = (props: any) => {
    const { isAdvanceSearchModalOpen, setIsAdvanceSearchModalOpen } = props;
    const [isToggleBtn, setIsToggleBtn] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState(100);

    const handleProgressBar = (newValue: number) => {
        setInputValue(newValue);
    };

    const [advanceStaffSearchData, setAdvanceStaffSearchData] = useState({
        searchClients: '',
        location: '',
        userType: [],
        vaccination: "",
        experienceFrom: '',
        experienceTo: '',
        drivingLicence: '',
        gender: ''
    })

    const handleAdvanceSearch = (value: any, type: string) => {
        setAdvanceStaffSearchData({ ...advanceStaffSearchData, [type]: value })
    }

    return (
        <>
            <Modal
                title="Advance Staff Search"
                open={isAdvanceSearchModalOpen}
                onOk={() => setIsAdvanceSearchModalOpen(false)}
                onCancel={() => setIsAdvanceSearchModalOpen(false)}
                width="1500px"
                className="advance-staff-modal-wrapper"
                centered
                footer={false}
                closeIcon={< img src={CloseIcon} alt="close" />}
            >
                <Row gutter={[40, 40]} >
                    <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                        <div className='search-collapse-wrapper'>
                            <Collapse defaultActiveKey={['0']} bordered={false} expandIconPosition="end" expandIcon={({ isActive }) => {
                                return (
                                    <>
                                        {isActive && (
                                            <img src={UpArrowIcon} alt="" />
                                        )}
                                        {!isActive && (
                                            <img src={DownArrowIcon} alt="" />
                                        )}
                                    </>
                                );
                            }}>
                                <Panel header="search by clients" key="1">
                                    <div className='search-clients-field'>
                                        <InputWrapper
                                            name="searchClients"
                                            disabled={true}
                                            defaultValue={'Chilton Meadows'}
                                            required={false}
                                            onChange={(val: any) => handleAdvanceSearch(val, 'searchClients')}
                                        />
                                    </div>
                                </Panel>
                                <Panel header="search by location" key="2">
                                    <div className='search-client-progress'>
                                        <label className='fs-12 fw-400 title-color'>Select Staff Location range</label>
                                        <RangerWrapper value={inputValue} onChange={handleProgressBar} text={`${inputValue} miles`} />
                                    </div>
                                </Panel>
                                <Panel header="search by usertype" key="3">
                                    <div className='search-client-usertype'>
                                        <Checkbox.Group options={advanceSearchUserType} defaultValue={['Domestic - (DOM)']} onChange={(val: any) => handleAdvanceSearch(val, 'userType')} />
                                    </div>
                                </Panel>
                                <Panel header="search by vaccination" key="4">
                                    <div className="search-client-vaccination">
                                        <SelectWrapper
                                            name="vaccination"
                                            placeHolder="Search by vaccination"
                                            required={false}
                                            size="large"
                                            options={[{ id: '1', label: 'option', value: 'option' }]}
                                            onChange={(val: any) => handleAdvanceSearch(val, 'vaccination')}
                                        />
                                    </div>
                                </Panel>
                                <Panel header="search by experience" key="5">
                                    <div className='search-by-experience'>
                                        <InputWrapper
                                            name="experienceFrom"
                                            onChange={(val: any) => handleAdvanceSearch(val, 'experienceFrom')}
                                            size="large"
                                            type="number"
                                            placeHolder='Select Experience From'
                                        />
                                        <InputWrapper
                                            name="experience"
                                            onChange={(val: any) => handleAdvanceSearch(val, 'experienceTo')}
                                            size="large"
                                            type="number"
                                            placeHolder='Select Experience To'
                                        />
                                    </div>
                                </Panel>
                                <Panel header="search by driving licence" key="6">
                                    <div className="search-client-driving">
                                        <SelectWrapper
                                            name="drivingLicence"
                                            placeHolder="Select"
                                            required={false}
                                            size="large"
                                            options={[{ id: '1', label: 'option', value: 'option' }]}
                                            onChange={(val: any) => handleAdvanceSearch(val, 'drivingLicence')}
                                        />
                                    </div>
                                </Panel>
                                <Panel header="search by gender" key="7">
                                    <div className="search-client-gender">
                                        <SelectWrapper
                                            name="gender"
                                            placeHolder="Select"
                                            required={false}
                                            size="large"
                                            options={[{ id: '1', label: 'option', value: 'option' }]}
                                            onChange={(val: any) => handleAdvanceSearch(val, 'gender')}
                                        />
                                    </div>
                                </Panel>
                            </Collapse>
                        </div>
                        <div className='advance-staff-btn'>
                            <button type='button' className='fs-16 fw-600 line-height-22 white-color'>Apply Search</button>
                        </div>
                    </Col>
                    <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                        {/* <div className='advance-staff-data d-flex align-center justify-center'>
                            <span className='fs-12 fw-600'>No Data Avaliable</span>
                        </div> */}
                        <div className='advance-collapse-icon d-flex align-center cursor-pointer' onClick={() => setIsToggleBtn((prev) => !prev)}>
                            <img src={`${!isToggleBtn ? CollapseIcon : ToggleIcon}`} alt="" />
                        </div>
                        {!isToggleBtn ? <AdvanceStaffCard /> : <AdvanceStaffCollapseCard />}
                    </Col>
                </Row>
            </Modal>
        </>
    )
}

export default AdvanceStaffSearch