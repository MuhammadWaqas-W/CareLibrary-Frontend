
import { Button, Col, DatePicker, Form, Input, Modal, Row, Space, Tooltip } from 'antd';
import { useState } from 'react';
import './FormMain.scss'
import Close from '../../../../../assets/images/OnBoarding/Close.svg';
import AddIcon from '../../../../../assets/images/OnBoarding/addIcon.svg'
import infoIcon from "../../../../../assets/icons/info-icon.svg";
import DateIcon from '../../../../../assets/images/OnBoarding/datePicker.svg';
import Edit from '../../../../../assets/icons/OnBoarding/edit.svg';
import '../../../../../shared/DatePickerWrapper/DatePickerWrapper.scss';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { additionalTraining } from '../../../../../mock/OnBoarding';
import UploadImage from '../../../../Setting/SettingKeyInfo/UploadImage/UploadImage';


interface IAdditionalTraining {
    name: string,
    certificateIssued: string,
    certificateExpiry: string,
    image: string

}


const AdditionalTrainingDetails = (props: any) => {

    const { handleSelectedStepValue, auditCheck } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onFinish = (values: any) => {
        console.log('Success:', values);

        // props.onChildStateChange(props.selectedStepValue + 1)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const config = {
        rules: [{ type: 'object' as const, required: true, message: 'Required Field', }],
    };






    const columns: ColumnsType<IAdditionalTraining> = [
        {
            title: <span className='fw-600 fs-14'>Training Name</span>,
            dataIndex: 'name',
            key: 'name',
            width: 160,
            render: (_, text) =>

                <span className='fs-14 fw-400 title-color'>
                    {text.name}
                </span>

        },
        {
            title: <span className='fw-600 fs-14'>Certificate Issued</span>,
            dataIndex: 'certificateIssued',
            key: 'certificateIssued',

            render: (_, text) =>

                <span className='fs-14 fw-400 title-color'>
                    {text.certificateIssued}
                </span>

        },
        {
            title: <span className='fw-600 fs-14'>Certificate Expiry Date</span>,
            dataIndex: 'certificateExpiry',
            key: 'certificateExpiry',


            render: (_, text) =>
                <span className='fs-14 fw-400 title-color'>
                    {text.certificateExpiry}
                </span>

        },

        {
            title: <span className='fw-600 fs-14' >Attachment</span>,
            dataIndex: 'status',
            key: 'status',


            render: (_, text) =>
                <span className='fs-14 fw-400 title-color'>
                    <img src={text.image} alt="image" />
                </span>

        },
        {
            title: <span className='fw-600 fs-14'>Action</span>,
            dataIndex: 'action',
            key: 'action',


            render: (_, text) =>
                <span onClick={showModal}>
                    <img src={Edit} alt="edit" />
                </span>

        },


    ];


    return (
        <div>
            <Row gutter={[20, 20]}>
                <Col xs={24}>
                    <span className='fw-600 fs-20' >Additional Training Details</span>
                </Col>
                <Col xs={24}>
                    <button className='add-reference-modal-btn cursor-pointer' onClick={showModal}>
                        <Space>
                            <span className='fw-600 fs-14 title-color'>Add Training Details </span>
                            <img src={AddIcon} alt="AddIcon" className='d-flex align-center' />
                        </Space>
                    </button>
                </Col>
                {additionalTraining.length > 0 && <Col xs={24}>
                    <span className='fw-600 fs-20' >Additional Training Details</span>
                </Col>}

                {additionalTraining.length > 0 && <Col xs={24} className='onboading-table-wrapper'>
                    <Table className="wrapper-table" columns={columns} dataSource={additionalTraining} scroll={{ x: "max-content" }} pagination={false} />
                </Col>}


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
                            <Button className='edit-module-button   align-center d-flex btn-secondary' onClick={() => handleSelectedStepValue('Work Experience')}>Continue</Button>
                        </Space>
                    </div>
                </Col>

            </Row>
            <Modal className='personal-form-wrapper' title={<span style={{ fontWeight: "500px", fontSize: "20px" }}>Additional Training Details </span>} centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={800} footer={false} closeIcon={<img src={Close} alt="" />}>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    // autoComplete="off"
                    layout="vertical"
                >
                    <Row gutter={[30, 5]} align="bottom">
                        <Col xs={24} sm={24} md={12} lg={12} className='carer-form-input '>
                            <Form.Item
                                label="Training Name"
                                name="trainingName"

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
                        </Col>

                        <Col xs={24} className='carer-form-input '>
                            <UploadImage id="" />
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} className='date-picker-wrapper'>

                            <Form.Item name="certificateIssued" label="When was the Certificate Issued?" {...config} style={{ maxWidth: '100%' }}>
                                <DatePicker popupClassName="date-picker-content" suffixIcon={<img src={DateIcon} />} clearIcon={false} placeholder='dd/mm/yyyy' />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} className='date-picker-wrapper'>

                            <Form.Item name="certificateExpiry" label="Certificate Expiry Date" style={{ maxWidth: '100%' }}>
                                <DatePicker popupClassName="date-picker-content" suffixIcon={<img src={DateIcon} />} clearIcon={false} placeholder='dd/mm/yyyy' />
                            </Form.Item>
                        </Col>

                        <Col xs={24} >

                            <Space className='modal-buttons'>
                                <button className='modal-button btn-cancel  ' >Cancel</button>
                                <button className='modal-button btn-secondary' >Save</button>
                            </Space>

                        </Col>
                    </Row>
                </Form>
            </Modal>
        </div>
    )
}

export default AdditionalTrainingDetails