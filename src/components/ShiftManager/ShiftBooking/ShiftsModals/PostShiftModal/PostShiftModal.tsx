import React, { useState } from 'react';
import { Col, Form, Modal, Row } from 'antd';
import SelectWrapper from '../../../../../shared/SelectWrapper/SelectWrapper';
import SwitchWrapper from '../../../../../shared/SwitchWrapper/SwitchWrapper';
import DatePickerWrapper from '../../../../../shared/DatePickerWrapper/DatePickerWrapper';
import dayjs from 'dayjs';
import TextArea from 'antd/es/input/TextArea';
import CloseIcon from "../../../../../assets/icons/ShiftManger/close-icon.svg"
import './PostShiftModal.scss';

const PostShiftModal = (props: any) => {
  const { isPostShiftModalOpen, setIsPostShiftModalOpen } = props;
  const [postShiftFields, setPostShiftFields] = useState({
    careHome: '',
    shiftDate: '',
    userType: '',
    chooseShift: '',
    startTime: '',
    endTime: '',
    department: '',
    noStaff: '',
    requestedBy: '',
    provideNumber: false,
    information: '',
    unPublishedShift: false
  });
  const [form] = Form.useForm();

  const careHomeSelect = [
    { value: 'option', label: 'option' }
  ]
  const onFinish = () => {
    setIsPostShiftModalOpen(false);
    form.resetFields();
  };


  const handleAddModal = (value: any, type: string) => {
    setPostShiftFields({ ...postShiftFields, [type]: value })
  }

  return (
    <>
      <Modal title="Post Shift" open={isPostShiftModalOpen} onOk={() => setIsPostShiftModalOpen(false)} onCancel={() => setIsPostShiftModalOpen(false)} width={890}  footer={false} centered wrapClassName='post-shift-modal-wrapper' closeIcon={< img src={CloseIcon} alt="close" />}>
        <Form layout="vertical" onFinish={onFinish} form={form} className="post-shift-wrapper">
          <Row gutter={[30, 20]} align="middle">
            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="post-shift-fields">
              <SelectWrapper
                label="Care Home"
                name="careHome"
                required={false}
                placeHolder="Select"
                disabled={true}
                defaultValue={'Arlington Manor'}
                options={careHomeSelect}
                onChange={(e: any) => handleAddModal(e, 'careHome')}
              />
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="post-shift-fields date-picker-wrap">
              <DatePickerWrapper
              name="shiftDate"
              label="When do you need? Shift Date"
              required={true}
              onChange={(e: any) => handleAddModal(dayjs(e).format('YYYY-MM-DD'), 'shiftDate')}
              />
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="post-shift-fields">
              <SelectWrapper
                label="Choose user type"
                name="userType"
                required={true}
                placeHolder="Select"
                options={careHomeSelect}
                onChange={(e: any) => handleAddModal(e, 'userType')}
              />
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="post-shift-fields">
              <SelectWrapper
                label="Choose a shift"
                name="chooseShift"
                required={true}
                placeHolder="Select"
                options={careHomeSelect}
                onChange={(e: any) => handleAddModal(e, 'chooseShift')}
              />
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="post-shift-fields">
              <SelectWrapper
                label="Start Time"
                name="startTime"
                required={true}
                placeHolder="Select"
                options={careHomeSelect}
                onChange={(e: any) => handleAddModal(e, 'startTime')}
              />
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="post-shift-fields">
              <SelectWrapper
                label="End Time"
                name="endTime"
                required={true}
                placeHolder="Select"
                options={careHomeSelect}
                onChange={(e: any) => handleAddModal(e, 'endTime')}
              />
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="post-shift-fields">
              <SelectWrapper
                label="Department"
                name="department"
                required={true}
                placeHolder="Select"
                options={careHomeSelect}
                onChange={(e: any) => handleAddModal(e, 'department')}
              />
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="post-shift-fields">
              <SelectWrapper
                label="No of Staff Required"
                name="noStaff"
                required={true}
                placeHolder="Select"
                options={careHomeSelect}
                onChange={(e: any) => handleAddModal(e, 'noStaff')}
              />
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="post-shift-fields">
              <SelectWrapper
                label="Shift requested by"
                name="requestedBy"
                required={false}
                placeHolder="Select"
                options={careHomeSelect}
                onChange={(e: any) => handleAddModal(e, 'requestedBy')}
              />
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="post-shift-fields" >
              <SwitchWrapper
                name="provideNumber"
                label="Provide PO Number?"
                onChange={(e: any) => handleAddModal(e, 'provideNumber')}
                required={false}
              />
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="post-shift-fields ">
              <Form.Item label={'Optional Information, if any.'} name={['information']} rules={[{ message: "Required Field", required: false }]}>
                <TextArea rows={4} placeholder="Type here" maxLength={6} onChange={(e: any) => handleAddModal(e, 'information')} />
              </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="post-shift-fields" >
              <SwitchWrapper
                name="unPublishedShift"
                label="Keep in Unpublished Shifts"
                onChange={(e: any) => handleAddModal(e, 'unPublishedShift')}
                required={false}
              />
            </Col>
          </Row>
          <div className='post-shift-modal d-flex align-center'>
            <button type='button' className='cancel-btn cursor-pointer fs-16 line-height-22 white-color fw-600' onClick={() => { setIsPostShiftModalOpen(false); form.resetFields() }}>Cancel</button>
            <button type='submit' className='save-btn cursor-pointer fs-16 line-height-22 white-color fw-600'>Save and Post Shifts</button>
          </div>
        </Form>
      </Modal>
    </>
  )
}

export default PostShiftModal