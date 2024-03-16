import { useState } from 'react';
import { Col, RadioChangeEvent, Row, Tooltip } from 'antd';
import { Radio } from 'antd';
import { Button, DatePicker, Space, Switch, Form, Input } from 'antd'
import "./FormMain.scss";
import DateIcon from '../../../../../assets/images/OnBoarding/datePicker.svg';
import '../../../../../shared/DatePickerWrapper/DatePickerWrapper.scss'
import infoIcon from "../../../../../assets/icons/info-icon.svg";
import { useForm } from 'antd/es/form/Form';
import UploadImage from '../../../../Setting/SettingKeyInfo/UploadImage/UploadImage';



interface IStatementApplies {
    title: string,
    type: string,
    switch: boolean,
    Rules?: string[]
}
const statementApplies: IStatementApplies[] = [
    {
        title: 'Do not choose this statement if you’re in receipt of a State, works or private pension. Choose this statement if the following applies. This is my first job since 6 April and since the 6 April I’ve not received payments from any of the following:',
        type: 'A',
        switch: false,
        Rules: ['Jobseeker’s Allowance', "Employement and Support Allowance ", " Incapacity Benefit"]
    },
    {
        title: "Do not choose this statement if you’re in receipt of a State, works or private pension. Choose this statement if the following applies. Since 6 April i have had another P45. And/or since the 6 April I’ve not received payments from any ofthe following :",
        switch: true,
        type: 'B',
        Rules: ['Jobseeker’s Allowance', "Employement and Support Allowance ", " Incapacity Benefit"]

    },
    {
        title: "Choose this statement if you have have another job and/or you’re in receipt of a State, works or private pension.",
        switch: true,
        type: 'C',


    },

]

const EmployementStatus = (props: any) => {
    const { handleSelectedStepValue, conditionalPath, auditCheck } = props;
    const [value, setValue] = useState('PAYE');
    const [previousEmployer, setPreviousEmployer] = useState('No');
    const [studentLoan, setStudentLoan] = useState('No');
    const [repaidLoan, setRepaidLoad] = useState('No')



    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const handlePreviousEmployer = (e: RadioChangeEvent) => {
        setPreviousEmployer(e.target.value)
    }

    const [specialities, setSpecialities] = useState(statementApplies);

    const handleSwitchChange = (index: any, checked: any) => {
        const newSpecialities = [...specialities]; // create a new copy of the array
        newSpecialities[index].switch = checked; // update the switch value for the corresponding item
        setSpecialities(newSpecialities); // update the state with the new array
    };


    const onFinish = (values: any) => {
        console.log('Success:', values);
        // props.onChildStateChange(props.selectedStepValue + 1)
        values && (conditionalPath ? handleSelectedStepValue('Additional Docs') : handleSelectedStepValue('Equal Opportunity Declaration'))

    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const emailValidator = (rule: any, value: any, callback: any) => {
        if (!value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            callback();
        } else {
            callback('Please enter a valid email address');
        }
    };

    const config = {
        rules: [{ type: 'object' as const, required: true, message: 'Please select time!' }],
    };

    const employementStatus = [
        { label: 'PAYE', value: 'PAYE' },
        { label: 'Limited Company', value: 'Limited Company' },
        { label: 'Self Employed (Sole Trader)', value: 'Self-Employed' },
        { label: 'Umbrella Company', value: 'Umbrella' },
    ]


    const studentLoanDetails = [
        {
            title: `You'll have a plan 1 student Loan if`,
            Rules: [

                ' You lived in Scotland or Northern Ireland when you started your course ( undergraduate or post graduate ) You lived in England or Wales and started your undergraduate course before 1 September 2012.',
                ` You lived in England or Wales and started your undergraduate course on or after 1 September 2012. Your loan is a part time maintenance loan.`,
                ` Your loan is an advanced learner loan. Your loan is a postgraduate healthcare loan.`

            ]
        }
    ]

    const [form] = Form.useForm();










    // const statement
    return (
        <div className='personal-form-wrapper '>
            <Row gutter={[20, 20]} style={{ paddingBottom: "20px" }}>
                <Col xs={24}>
                    <Space direction='vertical'>
                        <span className='fw-500 fs-20 form-heading-color'> Employment Status</span>
                        <span className='fw-600 fs-14'>Select Candidate’s employment status</span>
                        <Radio.Group onChange={onChange} value={value} >
                            {employementStatus.map((option) => (
                                <Radio key={option.value} name="group" value={option.value}>
                                    {option.label}
                                </Radio>
                            ))}
                        </Radio.Group>
                    </Space>

                </Col>
            </Row>



            {
                value === 'PAYE' && <Form
                    name="basic"
                    initialValues={{ 'current-year': 'No', remember: true, 'studentLoans': 'No', 'fullyRepaid': "No" }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}

                    layout="vertical"
                >
                    <Row gutter={[30, 5]} align="bottom">
                        <Col xs={24} sm={24} md={12} lg={10} className='carer-form-input '>
                            <Form.Item
                                label="Pay Tax Code"
                                name="payTaxCode"

                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={10} className='carer-form-input '>
                            <Form.Item
                                label="National Insurance No."
                                name="addressSecondLine"
                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} >
                            <Form.Item
                                label="Do you have a P45 from a previous employer within the current tax year? "
                                name="current-year"
                            >
                                <Radio.Group onChange={handlePreviousEmployer} value={previousEmployer}>
                                    <Radio value='Yes'> Yes</Radio>
                                    <Radio value='No'>No</Radio>

                                </Radio.Group>
                            </Form.Item>
                        </Col>
                        {previousEmployer === 'Yes' && <Col xs={24} >
                            <span className='fw-500 fs-20 form-heading-color'>P45 Upload File</span>
                        </Col>}
                        {previousEmployer === 'Yes' && <Col xs={24} lg={21}  >
                            <UploadImage id="" />
                        </Col>}

                        {previousEmployer === 'No' && <Col xs={24}>
                            <Space direction='vertical' >
                                <span className='fw-600 fs-14 title-color' >Tax year runs from April  6 to Apr 5 following year.</span>
                                <span className='fw-400 fs-14 title-color'>Choose the statement that applies that applies to you, either A,B or C, and turn on the appropriate toggle</span>
                                <span className='fw-600 fs-14 title-color' >Please choose which statemnet applies to you </span>
                                {
                                    studentLoanDetails.map((item) =>
                                        <Space direction='vertical'>
                                            <span className='fw-600 fs-14 title-color'>{item.title}</span>
                                            <ul>{item.Rules.map((ele) => <li>{ele} </li>)}</ul>
                                        </Space>)
                                }
                            </Space>
                        </Col>}


                        {previousEmployer === 'Yes' &&
                            <Col xs={24}>
                                <Space direction='vertical' >
                                    <span className='fw-600 fs-14 title-color'>Tax year runs from April  6 to Apr 5 following year.</span>
                                    {
                                        studentLoanDetails.map((item) =>
                                            <Space direction='vertical'>
                                                <span className='fw-600 fs-14 title-color'>{item.title}</span>
                                                <ul>{item.Rules.map((ele) => <li>{ele} </li>)}</ul>
                                            </Space>)
                                    }
                                </Space>
                            </Col>}

                        <Col xs={24}>
                            {previousEmployer === 'Yes' && (
                                <>
                                    {statementApplies.map((item: IStatementApplies, index: number) => (
                                        <Row key={index} >
                                            <Col xs={2}>
                                                <div>
                                                    <Switch checked={item.switch} onChange={(checked) => handleSwitchChange(index, checked)} />
                                                </div>
                                            </Col>

                                            <Col xs={19}>
                                                <div>
                                                    <Space direction="vertical">
                                                        <span>
                                                            {item.type}. {item.title}
                                                        </span>
                                                        {item?.Rules && (
                                                            <ul>
                                                                {item.Rules.map((ele: string, index: number) => (
                                                                    <li key={index}>{ele}</li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </Space>
                                                </div>
                                            </Col>
                                        </Row>
                                    ))}
                                </>
                            )}
                        </Col>

                        <Col xs={24}>
                            {studentLoanDetails.map((item) =>
                                <Space direction='vertical'>
                                    <span className='fw-600 fs-14 title-color'>{item.title}</span>
                                    <ul>{item.Rules.map((ele) => <li>{ele} </li>)}</ul>
                                </Space>)}
                        </Col>

                        <Col xs={24} >
                            <Form.Item
                                label="Do you have one of the Student Loans?"
                                name="studentLoans"

                            >
                                <Radio.Group onChange={(ele: RadioChangeEvent) => setStudentLoan(ele.target.value)} value={studentLoan}>
                                    <Radio value='Yes'>  Yes</Radio>
                                    <Radio value='No'>No</Radio>

                                </Radio.Group>
                            </Form.Item>
                        </Col>


                        {studentLoan === 'Yes' && <Col xs={24} >
                            <Form.Item
                                label=" Did you complete or leave your studies before 6th April?"
                                name="studiesStatus"

                            >
                                <Radio.Group >
                                    <Radio value={1}>  Yes</Radio>
                                    <Radio value={2}>No</Radio>

                                </Radio.Group>
                            </Form.Item>
                        </Col>}
                        {studentLoan === 'Yes' && <Col xs={24} >
                            <Form.Item
                                label=" Are you repaying your student loan directly to the student loans company by direct debit?"
                                name="direct-debit"
                            >
                                <Radio.Group >
                                    <Radio value={1}>  Yes</Radio>
                                    <Radio value={2}>No</Radio>

                                </Radio.Group>
                            </Form.Item>
                        </Col>}

                        {studentLoan === 'Yes' && <Col xs={24} >
                            <Form.Item
                                label="What type of student Loan do you have?"
                                name="studentLoan"
                            >
                                <Radio.Group >
                                    <Radio value={1}> Plan 1</Radio>
                                    <Radio value={2}>Plan 2</Radio>

                                </Radio.Group>
                            </Form.Item>
                        </Col>}

                        <Col xs={24}>
                            <Space direction='vertical' >
                                <span className='fw-600 fs-14 title-color' >Post Graduate Loan</span>
                                {
                                    studentLoanDetails.map((item) =>
                                        <Space direction='vertical'>
                                            <span className='fw-600 fs-14'>{item.title}</span>
                                            <ul>{item.Rules.map((ele) => <li>{ele} </li>)}</ul>
                                        </Space>)
                                }
                            </Space>
                        </Col>



                        <Col xs={24} >
                            <Form.Item
                                label="Do you have a postgraduate Loan  which is not fully repaid?"
                                name="fullyRepaid"
                            >
                                <Radio.Group onChange={(e) => setRepaidLoad(e.target.value)} value={repaidLoan} >
                                    <Radio value='Yes'>  Yes</Radio>
                                    <Radio value='No'>No</Radio>

                                </Radio.Group>
                            </Form.Item>
                        </Col>
                        {repaidLoan === 'Yes' && <Col xs={24} >
                            <Form.Item
                                label=" Did you complete or leave your studies before 6th April?"
                                name="studiesStatuss"

                            >
                                <Radio.Group >
                                    <Radio value={1}>  Yes</Radio>
                                    <Radio value={2}>No</Radio>

                                </Radio.Group>
                            </Form.Item>
                        </Col>}
                        {repaidLoan === 'Yes' && <Col xs={24} >
                            <Form.Item
                                label=" Are you repaying your student loan directly to the student loans company by direct debit?"
                                name="directs-debit"
                            >
                                <Radio.Group >
                                    <Radio value={1}>  Yes</Radio>
                                    <Radio value={2}>No</Radio>

                                </Radio.Group>
                            </Form.Item>
                        </Col>}

                        <Col xs={24} >
                            <Space>
                                <span className='fw-600 fs-20' >Required Document </span>
                                <Tooltip placement="bottomLeft" color="#65CDF0" overlayInnerStyle={{
                                    width: "499px",
                                }} title="These are extra documents (that may not be included in any of the above sections). You can customise this from Settings> Staff Settings> Define Required Documents.">
                                    <img src={infoIcon} alt="infoIcon" className='d-flex align-center' />
                                </Tooltip>
                            </Space>
                            <div className='fw-500 fs-16'>NI Reference</div>
                        </Col>
                        <Col xs={24} lg={21}  >

                            <UploadImage id="" />

                        </Col>


                        <Col xs={24} sm={24} md={12} lg={10} className='date-picker-wrapper'>
                            <Form.Item name="FromDate" label="From Date" {...config} style={{ maxWidth: '100%' }}>
                                <DatePicker popupClassName="date-picker-content" suffixIcon={<img src={DateIcon} />} clearIcon={false} />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={24} md={12} lg={10} className='date-picker-wrapper'>
                            <Form.Item name="ToDate" label="To Date" {...config} style={{ maxWidth: '100%' }}>
                                <DatePicker popupClassName="date-picker-content" suffixIcon={<img src={DateIcon} />} clearIcon={false} />
                            </Form.Item>

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
                                    <Button className='edit-module-button   align-center d-flex btn-secondary' htmlType='submit'>Continue</Button>
                                </Space>
                            </div>
                        </Col>
                    </Row>
                </Form>
            }

            {
                value === 'Limited Company' && <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    // autoComplete="off"
                    layout="vertical"
                >
                    <Row gutter={[30, 5]} align="bottom">
                        <Col xs={24} sm={24} md={12} lg={10} className='carer-form-input '>
                            <Form.Item
                                label="Company Name"
                                name="company-name"

                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={10} className='carer-form-input '>
                            <Form.Item
                                label="Company NO"
                                name="company-no"

                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={10} className='carer-form-input '>
                            <Form.Item
                                label="National Insurance No"
                                name="national-insurance-no"

                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={10} className='carer-form-input '>
                            <Form.Item
                                label="UTR"
                                name="UTR"
                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" />
                            </Form.Item>
                        </Col>

                        <Col xs={24} >
                            <Space>
                                <span className='fw-600 fs-20' >Required Document </span>
                                <Tooltip placement="bottomLeft" color="#65CDF0" overlayInnerStyle={{
                                    width: "499px",
                                }} title="These are extra documents (that may not be included in any of the above sections). You can customise this from Settings> Staff Settings> Define Required Documents.">
                                    <img src={infoIcon} alt="infoIcon" className='d-flex align-center' />
                                </Tooltip>
                            </Space>
                            <div className='fw-500 fs-16'>NI Reference</div>
                        </Col>
                        <Col xs={24} lg={21}  >

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
                                    <Button className='edit-module-button bg-orange-color  align-center d-flex ' htmlType='submit'>Save</Button>
                                    <Button className='edit-module-button   align-center d-flex btn-secondary' htmlType='submit'>Continue</Button>
                                </Space>
                            </div>
                        </Col>
                    </Row>
                </Form>
            }

            {
                value === 'Umbrella' && <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    // autoComplete="off"
                    layout="vertical"
                >
                    <Row gutter={[30, 5]} align="bottom">
                        <Col xs={24} sm={24} md={12} lg={10} className='carer-form-input '>
                            <Form.Item
                                label="Umbrella Company Name"
                                name="umbrella-company-name"

                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={10} className='carer-form-input '>
                            <Form.Item
                                label="Umbrella Company Name"
                                name="umbrella-company-no"

                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={10} className='carer-form-input '>
                            <Form.Item
                                label="Umbrella Company Email"
                                name="umbrella-company-email"
                                rules={[
                                    { validator: emailValidator, required: true, message: 'Required field' },]}
                            >
                                <Input placeholder="Type here" />
                            </Form.Item>
                        </Col>

                        <Col xs={24} >
                            <Space>
                                <span className='fw-600 fs-20' >Required Document </span>
                                <Tooltip placement="bottomLeft" color="#65CDF0" overlayInnerStyle={{
                                    width: "499px",
                                }} title="These are extra documents (that may not be included in any of the above sections). You can customise this from Settings> Staff Settings> Define Required Documents.">
                                    <img src={infoIcon} alt="infoIcon" className='d-flex align-center' />
                                </Tooltip>
                            </Space>
                            <div className='fw-500 fs-16'>NI Reference</div>
                        </Col>
                        <Col xs={24} lg={21}  >

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
                                    <Button className='edit-module-button bg-orange-color  align-center d-flex ' htmlType='submit'>Save</Button>
                                    <Button className='edit-module-button   align-center d-flex btn-secondary' htmlType='submit'>Continue</Button>
                                </Space>
                            </div>
                        </Col>
                    </Row>
                </Form>
            }

            {
                value === 'Self-Employed' && <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    // autoComplete="off"
                    layout="vertical"
                >
                    <Row gutter={[30, 5]} align="bottom">
                        <Col xs={24} sm={24} md={12} lg={10} className='carer-form-input '>
                            <Form.Item
                                label="National Insurance No"
                                name="national-insurance-no"

                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={10} className='carer-form-input '>
                            <Form.Item
                                label="UTR"
                                name="UTR"
                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" />
                            </Form.Item>
                        </Col>

                        <Col xs={24} >
                            <Space>
                                <span className='fw-600 fs-20' >Required Document </span>
                                <Tooltip placement="bottomLeft" color="#65CDF0" overlayInnerStyle={{
                                    width: "499px",
                                }} title="These are extra documents (that may not be included in any of the above sections). You can customise this from Settings> Staff Settings> Define Required Documents.">
                                    <img src={infoIcon} alt="infoIcon" className='d-flex align-center' />
                                </Tooltip>
                            </Space>
                            <div className='fw-500 fs-16'>NI Reference</div>
                        </Col>
                        <Col xs={24} lg={21}  >

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
                                    <Button className='edit-module-button bg-orange-color  align-center d-flex ' htmlType='submit'>Save</Button>
                                    <Button className='edit-module-button   align-center d-flex btn-secondary' htmlType='submit'>Continue</Button>
                                </Space>
                            </div>
                        </Col>
                    </Row>
                </Form>
            }



            `   `
            {/* <span>rggrft</span> */}



        </div >
    )
}

export default EmployementStatus