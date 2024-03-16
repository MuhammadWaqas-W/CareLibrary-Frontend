import { useState } from 'react';
import { Avatar, Col, Dropdown, MenuProps, Row, Select, Table } from 'antd';
import SelectWrapper from '../../shared/SelectWrapper/SelectWrapper';
import SwitchWrapper from '../../shared/SwitchWrapper/SwitchWrapper';
import ActionIcon from "../../assets/icons/ShiftManger/action-icon.svg";
import EditIcon from "../../assets/icons/edit-blue.svg";
import DeleteIcon from "../../assets/icons/delete-icon-outlined.svg";
import { ColumnsType } from 'antd/es/table';
import RangerWrapper from '../../shared/RangeWrapper/RangerWrapper';
import AddClientSelect from '../Finance/Setup/ClientRateSetup/AddClientRateModal/ClientNameSelect';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import DeleteModal from '../../shared/DeleteModal/DeleteModal';
import './ClientPreferences.scss'

const ClientPreferences = () => {
    const staffCategoryOptions = ["English", "Polish", "Urdu", "French", "Spanish", "Italian", "Portuguese"];
    const [showPreference, setShowPreference] = useState({ locationRadius: false, experience: false, language: false })
    const [languageCheckedList, setLanguageCheckedList] = useState<CheckboxValueType[]>();
    const [inputValue, setInputValue] = useState(0)
    const [isDeleteModal, setIsDeleteModal] = useState(false);
    const [experienceValue, setExperienceValue] = useState('');


    const items: MenuProps['items'] | undefined = [
        {
            label: (
                <div className="d-flex align-center" style={{ gap: "18px", padding: "12px" }}
                    onClick={() => { setShowPreference({ locationRadius: true, experience: true, language: true }); setInputValue(32); setLanguageCheckedList(['Polish', 'Italian']); setExperienceValue('2-year') }}
                >
                    <img width={23} src={EditIcon} alt="AllocateStaff" />
                    <span className="fs-14 fw-400 line-height-22 title-color">Edit</span>
                </div>
            ),
            key: "1",
        },
        {
            label: (
                <div className="d-flex align-center" style={{ gap: "18px", padding: "0 12px 12px 12px" }} onClick={() => setIsDeleteModal(true)}>
                    <img width={20} src={DeleteIcon} alt="ModifyStaff" />
                    <span className="fs-14 fw-400 line-height-22 title-color">Delete</span>
                </div>
            ),
            key: "2",
        }
    ];

    const columns: ColumnsType<any> = [
        {
            title: '',
            dataIndex: 'jobRole',
            key: 'jobRole',
            render: (text: any) => <Avatar style={{ backgroundColor: '#65CDF0', verticalAlign: 'middle' }} size="large">
                HC
            </Avatar>
        },
        {
            title: 'Job Role',
            dataIndex: 'jobRole',
            key: 'jobRole',
            render: (text: any) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>
                    {/* <Avatar style={{ backgroundColor: '#65CDF0', verticalAlign: 'middle' }} size="large">
                        HC
                    </Avatar> */}
                    {text}
                </span>,
        },
        {
            title: 'Location Radius',
            dataIndex: 'locationRadius',
            key: 'locationRadius',
            render: (text: any) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{text}</span>,
        },
        {
            title: 'Experience',
            dataIndex: 'experience',
            key: 'experience',
            render: (text: any) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{text}</span>,
        },
        {
            title: 'Language Preference',
            dataIndex: 'languagePreference',
            key: 'languagePreference',
            render: (text: any) =>
                <span className='fs-14 fw-400 m-0 line-height-22 title-color'>{text}</span>,
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_: any, { shiftName }: { shiftName: string } = { shiftName: 'abc' }) => (
                <div>
                    <Dropdown
                        menu={{ items }}
                        placement="bottomRight"
                        trigger={["click"]}
                        overlayClassName="distraction-alerts-dropdown"
                        className="actionDropDown "
                    >
                        <div className="border-color cursor-pointer">
                            <img src={ActionIcon} alt="" />
                        </div>
                    </Dropdown>
                </div >
            ),
        }


    ];

    const ClientPreferencesData = [
        {
            jobRole: "HCA",
            locationRadius: "100 KM",
            experience: "1 - 2 Years",
            languagePreference: "English, French",
        },

        {
            jobRole: "HCA",
            locationRadius: "100 KM",
            experience: "1 - 2 Years",
            languagePreference: "English, French",
        },

        {
            jobRole: "HCA",
            locationRadius: "100 KM",
            experience: "1 - 2 Years",
            languagePreference: "English, French",
        },

        {
            jobRole: "HCA",
            locationRadius: "100 KM",
            experience: "1 - 2 Years",
            languagePreference: "English, French",
        },

        {
            jobRole: "HCA",
            locationRadius: "100 KM",
            experience: "1 - 2 Years",
            languagePreference: "English, French",
        },

    ];
    const handleChange = (values: any) => {
        console.log(values);
    }
    const handleProgressBar = (newValue: number) => {
        setInputValue(newValue);
    };
    const handleChangeSwitch = (value: any, type: string) => {
        switch (type) {
            case 'location':
                setShowPreference({ locationRadius: !showPreference.locationRadius, experience: false, language: false })
                break;
            case 'experience':
                setShowPreference({ experience: !showPreference.experience, locationRadius: false, language: false });
                break;
            case 'language':
                setShowPreference({ experience: false, locationRadius: false, language: !showPreference.language });
                break;
            default:
                break;
        }
    }
    const handleDeleteSubmit = () => {
        setIsDeleteModal(false);
    };
    const handleCancelSubmit = () => {
        setIsDeleteModal(false);
    };

    return (
        <div className='client-preferences-wrapper'>
            <div className='client-preferences-wrap bg-white'><div className='client-preferences-select'>
                <SelectWrapper
                    name='jobRole'
                    options={[
                        { value: "dementia_department", label: "Registered General Nurse" },
                        { value: "elder_department", label: "Helth Care Assistant" },
                        { value: "childern_department", label: "Support Worker" },
                        { value: "all", label: "Support Worker" },
                        { value: "all", label: "Senior Health Care Assistant" },
                        { value: "all", label: "Domestics Health Care Worker" },
                    ]}
                    label="Job Role"
                    required={false}
                    onChange={handleChange}
                    placeHolder="Select Option"
                />
            </div>
                <Row gutter={20}>
                    <Col lg={8} md={12} sm={24} xs={24}>
                        <SwitchWrapper checked={showPreference.locationRadius} label="Location Radius" name="locationRadius" onChange={(e: any) => handleChangeSwitch(e, 'location')} />
                        {showPreference.locationRadius && <div style={{ margin: "15px 0 0 5px" }}>
                            <RangerWrapper value={inputValue} onChange={handleProgressBar} text="100" />
                        </div>}
                    </Col>
                    <Col lg={8} md={12} sm={24} xs={24}>
                        <div>
                            <SwitchWrapper checked={showPreference.experience} label="Experience Preference" name="experiencePreference" onChange={(e: any) => handleChangeSwitch(e, 'experience')} />

                            {showPreference.experience && <div className='client-preferences-select' style={{ marginTop: "15px" }}>
                                <SelectWrapper
                                    name='experience'
                                    options={[
                                        { value: "1-year", label: "0-1 Year" },
                                        { value: "2-year", label: "1-2 Years" },
                                        { value: "5-year", label: "2-5 Years" },
                                        { value: "10-year", label: "5-10 Years" },
                                        { value: "10+year", label: "10 Year +" },
                                    ]}
                                    label=""
                                    required={false}
                                    onChange={handleChange}
                                    placeHolder="Select Option"
                                    value={experienceValue && experienceValue}
                                />
                            </div>}
                        </div>
                    </Col>
                    <Col lg={8} md={12} sm={24} xs={24}>
                        <SwitchWrapper checked={showPreference.language} label="Language Preference" name="languagePreference" onChange={(e: any) => handleChangeSwitch(e, 'language')} />
                        {showPreference.language && <div style={{ marginTop: "15px" }}><AddClientSelect options={staffCategoryOptions} checkedList={languageCheckedList} setCheckedList={setLanguageCheckedList} /></div>}
                    </Col>
                </Row>
                {Object.values(showPreference).includes(true) && <Row>
                    <div className='care-booking-btn' style={{ marginTop: '30px' }}>
                        <button type='button' className='cursor-pointer fs-16 line-height-22 white-color fw-600'
                            onClick={() => setShowPreference({ locationRadius: false, experience: false, language: false })}
                        >Save</button>
                    </div>
                </Row>}
            </div>
            <div className='client-preferences-table'>
                <Table columns={columns} dataSource={ClientPreferencesData} pagination={false} className="client-preferences-table-content" scroll={{ x: "max-content" }} />
            </div>
            <DeleteModal
                setDeleteModal={setIsDeleteModal}
                deleteModal={isDeleteModal}
                submitTitle="Cancel"
                cancelTitle="Delete"
                title="Do you want to delete this preference"
                onSubmit={handleDeleteSubmit}
                onCancel={handleCancelSubmit}
            />
        </div>
    )
}

export default ClientPreferences