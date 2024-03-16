import { Button, Col, Form, Row, Select, Space, Switch, Tooltip } from "antd";
import React, { useState } from "react";
import { Option } from "../../../CareCordinator/ClientDetails/AllocateNewCareHomeModal";
import './FormMain.scss';
import Arrow from '../../../../../assets/images/OnBoarding/SelectArrow.svg'





interface ImmunisationItem {
    switch: boolean;
    title: string;
}

interface ImmunisationData {
    immunisationGender: ImmunisationItem[];
    whiteEthnicity: ImmunisationItem[];
    BritishEthnicity: ImmunisationItem[];
    OtherEthnicity: ImmunisationItem[];
    ReligionBelief: ImmunisationItem[];
    SexialOrientation: ImmunisationItem[];
    AsianEthnicity: ImmunisationItem[];
    disabilityEquality: ImmunisationItem[]
}

const whiteEthnicity = [
    {
        title: 'English / Welsh / Scottish / Northern Irish / British',
        switch: false
    },
    {
        title: 'Irish',
        switch: true
    },
    {
        title: 'Gypsy or Irish Traveller',
        switch: false
    },
    {
        title: 'Any other White Background',
        switch: true
    },
]


const MixedEthnicity = [
    {
        title: 'White and Black Caribbean',
        switch: false
    },
    {
        title: 'White and Black African',

        switch: true
    },
    {
        title: 'White and Asian',

        switch: false
    },
    {
        title: 'Any Other Mixed / Multiple ethnic background',
        switch: true
    },
];


const BritishEthnicity = [
    {
        title: 'African',
        switch: false
    },
    {
        title: 'Caribbean',

        switch: true
    },
    {
        title: 'Any other Black / African / Caribben Background',
        switch: false
    },
    {
        title: 'Any Other Mixed / Multiple ethnic background',
        switch: true
    },
]


const OtherEthnicity = [
    {
        title: 'Arab',
        switch: false
    },
    {
        title: 'Any other Ehnic Group',
        switch: false
    },
]


const ReligionBelief = [
    {
        title: 'Islam',
        switch: false
    },
    {
        title: 'Bahai',
        switch: false
    },
    {
        title: 'Buddist',
        switch: false
    },
    {
        title: 'Cathonic',
        switch: false
    },
]


const SexialOrientation = [
    {
        title: 'Bisexual',
        switch: false
    },
    {
        title: 'Homosexual woman',
        switch: false
    },
    {
        title: 'Homosexual man',
        switch: false
    },
    {
        title: 'Heterosexual',
        switch: false
    },
]


const AsianEthnicity = [
    {
        title: 'Indian',
        switch: false
    },
    {
        title: 'Pakistani',

        switch: true
    },
    {
        title: 'Bangladeshi',

        switch: false
    },
    {
        title: 'Chinese',
        switch: true
    },
    {
        title: 'Any other Asian Background',
        switch: true
    },
]

const disabilityEquality = [
    {
        title: 'Yes',
        switch: false
    },
    {
        title: 'No',
        switch: false
    },
    {
        title: 'Prefer Not to say',
        switch: false
    },
]




const EqualOpportunityDeclaration = (props: any) => {
    const { handleSelectedStepValue, auditCheck } = props;
    const [isShowDate, setIsShowDate] = useState(false)
    const onChange = (checked: boolean) => {
        setIsShowDate(checked)
    };
    const onFinish = (values: any) => {
        console.log('Success:', values);
        // props.onChildStateChange(props.selectedStepValue + 1)
        values && handleSelectedStepValue('Additional Docs')


    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const [immunisationData, setImmunisationData] = useState<ImmunisationData>({

        immunisationGender: MixedEthnicity,
        whiteEthnicity: whiteEthnicity,
        BritishEthnicity: BritishEthnicity,
        OtherEthnicity: OtherEthnicity,
        ReligionBelief: ReligionBelief,
        SexialOrientation: SexialOrientation,
        AsianEthnicity: AsianEthnicity,
        disabilityEquality: disabilityEquality
    });
    const handleSwitchChange = (index: number, checked: boolean, arrayName: keyof ImmunisationData) => {
        setImmunisationData(prevState => {
            const updatedArray = [...prevState[arrayName]];
            updatedArray[index].switch = checked;
            return {
                ...prevState, [arrayName]: updatedArray
            }
        });
    };





    return (
        <div className="personal-form-wrapper">


            <Form
                name="basic"
                initialValues={{ remember: true, 'disclose-status': false }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                // autoComplete="off"
                layout="vertical"
            >
                <Row gutter={[20, 20]}>
                    <Col xs={24}>
                        <Space direction="vertical" size={20}>
                            <div>
                                <span className="fw-500 fs-20">
                                    Equal Opportunity Declaration
                                </span>   &nbsp;
                                <span className="fw-600 fs-14">
                                    (Equal Opportunity Policy Displayed for the candidate while
                                    registering)
                                </span>
                            </div>
                            <span>
                                All information given will be treated in the strictest confidenceand
                                not used for any other purpose. We are an equal opportunity employer.
                                The aim of our policy is to ensure no job applicant or employee
                                receives less favourable treatment on the grounds of gender, age,
                                disability/ handicap, marital status, sexual orientation, careed,
                                colour, race, or ethnic origin, or is disadvantaged by conditions or
                                requirements which cannot be shown as justifiable.
                            </span>
                            <span>
                                Selection criteria and procedures are frequently reviewed to ensure
                                that individuals are selected, promoted and treated on the basis of
                                their relevant merits and abilities.
                            </span>
                            <span>
                                All employees are given equal opportunity and encouraged to progress
                                within the organisation.
                            </span>
                            <span>
                                We are commited to an ongoing programme of action to make this policy
                                fully effective. To ensure that this policy is fully and fairly
                                implemented and monitored, and for no other reason, would you please
                                the relevant options below?
                            </span>
                            <Form.Item
                                label=""
                                name="disclose-status"
                                className='allocate-select'
                            >
                                <Space>
                                    <Switch onChange={onChange} />
                                    <span className='fw-400 fs-14 title-color'> I do not wish to disclose this.</span>
                                </Space>
                            </Form.Item>

                        </Space>
                    </Col>
                    {!isShowDate && <Col xs={24}>

                        <Row gutter={[10, 15]}>

                            <Col xs={10} >
                                <Form.Item
                                    label="Marital Status "
                                    name="status"
                                    className='allocate-select'
                                >
                                    <Select placeholder="Selected option" suffixIcon={<img src={Arrow} />}>
                                        <Option value="Single">Single</Option>
                                        <Option value="Married">Married</Option>
                                        <Option value="option3">Option 3</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col xs={24} >
                                <Space direction="vertical">

                                    <span className="form-heading-color fw-500 fs-16 ">Your Ethnicity</span>
                                    <span className="title-color fs-14  fw-600">White</span>
                                </Space>
                            </Col>
                            {immunisationData.whiteEthnicity.map((item: any, index: any) =>
                                <Col xs={24}>
                                    <Space key={index}>
                                        <Switch checked={item.switch} onChange={(checked) => handleSwitchChange(index, checked, 'whiteEthnicity')} />
                                        <span className='fw-400 fs-14 label-color'>{item.title}</span>
                                    </Space>
                                </Col>
                            )}
                            <Col xs={24} >
                                <span className="title-color fs-14  fw-600">Mixed/Multiple ethnic group</span>
                            </Col>

                            {immunisationData.immunisationGender.map((item: any, index: any) =>
                                <Col xs={24}>
                                    <Space key={index}>
                                        <Switch checked={item.switch} onChange={(checked) => handleSwitchChange(index, checked, 'immunisationGender')} />
                                        <span className='fw-400 fs-14 label-color'>{item.title}</span>
                                    </Space>
                                </Col>
                            )}
                            <Col xs={24} >
                                <span className="title-color fs-14  fw-600">Asia/ Asian British</span>
                            </Col>

                            {immunisationData.AsianEthnicity.map((item: any, index: any) =>
                                <Col xs={24}>
                                    <Space key={index}>
                                        <Switch checked={item.switch} onChange={(checked) => handleSwitchChange(index, checked, 'AsianEthnicity')} />
                                        <span className='fw-400 fs-14 label-color'>{item.title}</span>
                                    </Space>
                                </Col>
                            )}
                            <Col xs={24} >
                                <span className="title-color fs-14  fw-600">Black / African / Caribbean / Black British</span>
                            </Col>
                            {immunisationData.BritishEthnicity.map((item: any, index: any) =>
                                <Col xs={24}>
                                    <Space key={index}>
                                        <Switch checked={item.switch} onChange={(checked) => handleSwitchChange(index, checked, 'BritishEthnicity')} />
                                        <span className='fw-400 fs-14 label-color'>{item.title}</span>
                                    </Space>
                                </Col>
                            )}
                            <Col xs={24} >
                                <span className="title-color fs-14  fw-600"> Do you consider yourself to have a disability within the meaning of the Equality Act 2021 </span>
                            </Col>

                            {immunisationData.disabilityEquality.map((item: any, index: any) =>
                                <Col xs={24}>
                                    <Space key={index}>
                                        <Switch checked={item.switch} onChange={(checked) => handleSwitchChange(index, checked, 'disabilityEquality')} />
                                        <span className='fw-400 fs-14 label-color'>{item.title}</span>
                                    </Space>
                                </Col>
                            )}

                            <Col xs={24} >
                                <span className="title-color fs-14  fw-600"> Other Ethnic Group</span>
                            </Col>

                            {immunisationData.OtherEthnicity.map((item: any, index: any) =>
                                <Col xs={24}>
                                    <Space key={index}>
                                        <Switch checked={item.switch} onChange={(checked) => handleSwitchChange(index, checked, 'OtherEthnicity')} />
                                        <span className='fw-400 fs-14 label-color'>{item.title}</span>
                                    </Space>
                                </Col>
                            )}
                            <Col xs={24} >
                                <span className="title-color fs-14  fw-600"> Your Religion and Belief </span>
                            </Col>
                            {immunisationData.ReligionBelief.map((item: any, index: any) =>
                                <Col xs={24}>
                                    <Space key={index}>
                                        <Switch checked={item.switch} onChange={(checked) => handleSwitchChange(index, checked, 'ReligionBelief')} />
                                        <span className='fw-400 fs-14 label-color'>{item.title}</span>
                                    </Space>
                                </Col>
                            )}
                            <Col xs={24} >
                                <span className="title-color fs-14  fw-600"> Your Sexual Orientation</span>
                            </Col>
                            {immunisationData.SexialOrientation.map((item: any, index: any) =>
                                <Col xs={24}>
                                    <Space key={index}>
                                        <Switch checked={item.switch} onChange={(checked) => handleSwitchChange(index, checked, 'SexialOrientation')} />
                                        <span className='fw-400 fs-14 label-color'>{item.title}</span>
                                    </Space>
                                </Col>
                            )}
                        </Row>

                    </Col>}

                    <Col xs={24}>
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
                                <Button className='edit-module-button   align-center d-flex btn-secondary' htmlType='submit'>Continue</Button>
                            </Space>
                        </div>
                    </Col>

                </Row>
















            </Form>

















        </div>
    );
};

export default EqualOpportunityDeclaration;
