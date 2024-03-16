import { Button, Col, Divider, Row, Space, Switch, Tooltip } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import infoIcon from "../../../../../assets/icons/info-icon.svg";
import "./FormMain.scss";

const MedicalQuestionnaireDetails = [
    {
        title:
            "Bronchitis, Asthma, Persistent Cough, TB, Pleurisy, Infection of the lungs or Throat",
        switch: false,
    },
    {
        title: "Rheumatism, Arthritis, Gout, Rheumatic Fever ",
        switch: true,
    },
    {
        title:
            "Blood Pressure, Palpitations, Shortness of Breath, Chest Pains, Infection of the Heart ",
        switch: true,
    },
    {
        title: "Fits, Fainting, Blackouts, Any disease of the nervous system?",
        switch: false,
    },
    {
        title:
            "Chronic or persistent indigestion, Gastric or duodenal ulcer, Any other infection of the abdominal organs?",
        switch: false,
    },
    {
        title:
            "Any infection of the liver, Prostate, Kidneys, Urinary system, Reproductive system?",
        switch: true,
    },
    {
        title: "Enlarged glands, Tumours?",
        switch: false,
    },
    {
        title: "Mental breakdown, Anxiety, Depression?",
        switch: true,
    },
    {
        title: "Diabetes, Thyroid disease, Any other glandular disturbance?",
        switch: false,
    },
    {
        title: "Any accident, Physical defect, Disc or back trouble, Hernia?",
        switch: false,
    },
    {
        title: "Have you ever suffered from AIDS, An AIDS related virus?",
        switch: false,
    },
    {
        title: "Any illness or condition not already mentioned?",
        switch: true,
    },
    {
        title:
            "Do you or have you suffered from dermatitis, Skin allergies, Other skin diseases (eczema, psoriasis, etc.)?",
        switch: false,
    },
    {
        title:
            "Are you currently receiving any medical treatment or taking any medication?",
        switch: true,
    },
];

const MedicalSurvey = [
    {
        title: "Have you been refused to employment because of your Health Care",
        switch: false,
        textArea: "",
    },
    {
        title: "Have you ever had a surgical operation?",
        switch: false,
        textArea: "",
    },
    {
        title: "Are you the allergic to any drugs?",
        switch: false,
        textArea: "",
    },
    {
        title: "Have you ever had a sustined an industrial injury ?",
        switch: false,
        textArea: "",
    },
    {
        title: "Have you ever claimed against your employer?",
        switch: false,
        textArea: "",
    },
];
const MedicalQuestionnaire = (props: any) => {
    const { handleSelectedStepValue, setActivePanelKey, auditCheck } = props;
    const [MedicalQuestionnaire, setMedicalQuestionnaire] = useState(
        MedicalQuestionnaireDetails
    );

    const [medicalSurvey, setMedicalSurvey] = useState(MedicalSurvey);
    console.log(medicalSurvey, 'medicalSurvey');


    const handleCheckboxChange = (index: any, checked: any) => {
        setMedicalSurvey((prevSurvey) => {
            const updatedSurvey = [...prevSurvey];
            updatedSurvey[index].switch = checked;
            return updatedSurvey;
        });
    };

    const handleTextAreaChange = (index: any, value: any) => {
        setMedicalSurvey(prevSurvey => {
            const updatedSurvey = [...prevSurvey];
            if (updatedSurvey[index].switch) {
                updatedSurvey[index].textArea = value;
            }
            return updatedSurvey;
        });
    };

    const handleSwitchChange = (index: any, checked: any) => {
        const newMedicalQuestionnaire = [...MedicalQuestionnaire];
        newMedicalQuestionnaire[index].switch = checked;
        setMedicalQuestionnaire(newMedicalQuestionnaire);
    };

    return (
        <div className="personal-form-wrapper">
            <Row gutter={[20, 20]}>
                <Col xs={24}>
                    <Space direction="vertical">
                        <span className="fw-600 fs-20"> Medical Questionnaire</span>
                        <span className="fw-400 fs-14">All information given will be treated in the strictest confidence and not used for any other purpose.</span>
                        <span className="fw-600 fs-14">Please state whether you have ever suffered from or had any symptoms of the following complaints</span>

                    </Space>
                </Col>

                {MedicalQuestionnaire.map((item, index) => (
                    <Col xs={24}>
                        <Space key={index}>
                            <Switch
                                checked={item.switch}
                                onChange={(checked) => handleSwitchChange(index, checked)}
                            />
                            <span className="fw-400 fs-14 label-color">{item.title}</span>
                        </Space>
                    </Col>
                ))}
                <Divider style={{ borderColor: "#D9DBE9" }} />

                {medicalSurvey.map((item, index) => (
                    <Col lg={13} xs={24} key={index}>
                        <Space >
                            <Switch
                                checked={item.switch}
                                onChange={(checked) => handleCheckboxChange(index, checked)}
                            />
                            <span className="fw-400 fs-14 label-color">{item.title}</span>
                        </Space>
                        {item.switch && (
                            <TextArea
                                rows={4}
                                value={item.textArea}
                                onChange={(e) => handleTextAreaChange(index, e.target.value)}
                                placeholder='Provide Details'
                                style={{ marginTop: '10px' }}
                            />
                        )}
                    </Col>
                ))}


                <Col lg={19} md={24}>
                    <span className="fs-14 fw-400">Approximately how many days absences have you had from work,school or university for health reasons during last
                        5 years? No of days and please give details of periods of absence due to sickness of five days or  more</span>
                </Col>
                <Col lg={13} xs={24}>
                    <TextArea
                        rows={4}
                        placeholder='Provide Details'

                    />
                </Col>
                <Col xs={24}>
                    <div>
                        <Space className='carer-buttons'>
                            {auditCheck && <Tooltip
                                        autoAdjustOverflow={true}
                                        showArrow={false}
                                        placement="bottomLeft" color="#65CDF0"
                                        title='Click to mark as audit'
                                    >

                                        <Button className='edit-module-button  audit-button  align-center d-flex' >Audit</Button>
                                    </Tooltip>}
                            <Button
                                className="edit-module-button bg-orange-color  align-center d-flex "
                                htmlType="submit"
                            >
                                Save
                            </Button>
                            <Button
                                className="edit-module-button   align-center d-flex btn-secondary"
                                onClick={() => { handleSelectedStepValue('Declaration'); setActivePanelKey('Declaration') }}

                            >
                                Continue
                            </Button>
                        </Space>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default MedicalQuestionnaire;
