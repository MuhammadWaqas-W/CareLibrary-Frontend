import React, { useState } from 'react'
import './CreateYourContent.scss'

import { Col, Row, UploadProps, message, Collapse, Button } from 'antd'
import deleteIcon from "../../../../assets/icons/AddCourse/delete-icon.svg"
import uploadFileIcon from "../../../../assets/icons/AddCourse/upload-file-icon.svg"
import uploadCloudIcon from "../../../../assets/icons/AddCourse/upload-cloud.svg"
import arrowUpIcon from "../../../../assets/icons/AddCourse/arrow-up.svg"
import arrowDownIcon from "../../../../assets/icons/AddCourse/arrow-down.svg"
import editIcon from "../../../../assets/icons/AddCourse/edit-icon.svg"
import saveIcon from "../../../../assets/icons/AddCourse/save-icon.svg"
import TextArea from 'antd/es/input/TextArea'
import Dragger from 'antd/es/upload/Dragger'
import { AddContentMockData } from '../../../../mock/AddContentData/AddContentData'
import { v4 as uuidv4 } from 'uuid';
import UploadImage from '../../../Setting/SettingKeyInfo/UploadImage/UploadImage'

const { Panel } = Collapse;




const CreateYourContent = ({handleTabsValueChange}: any) => {

  const [createCourseData, setcreateCourseData] = useState(AddContentMockData)
  const [isDescriptionEditMode, setIsDescriptionEditMode] = useState(false)
  const [isUploadModal, setIsUploadModal] = useState()

  const [sectionId, setSectionId] = useState()

  const [activePanel, setActivePanel] = useState()
  const [activePanelValue, setActivePanelValue] = useState('')

  const [activePanelKey, setActivePanelKey] = useState()


  console.log('createCourseData =>', createCourseData)
  console.log('activePanel =>', activePanel)


  console.log('activePanel', activePanel)
  const addFieldSectionOne = () => {

    // const randomId = Math.random().toString(36).substr(2, 9);
    const randomId = uuidv4();

    const newFields = [...createCourseData, {
      id: randomId,
      sectionName: 'New Section',
      lectureTiles: [
        {
          id: randomId,
          lectureName: 'New Lecture',
          lectureDescription: 'New Description',
          files: [
            { id: '', name: '' }
          ]
        }
      ]
    }];
    setcreateCourseData(newFields);
  };
  const removeFieldSectionOne = (index: any) => {
    const newFields = [...createCourseData];
    newFields.splice(index, 1);
    setcreateCourseData(newFields);
  };
  const handleFieldChangeSectionOne = (indexOne: any, eventOne: any) => {
    const newFields = [...createCourseData];
    newFields[indexOne].value = eventOne.target.value;
    setcreateCourseData(newFields);
  };


  const addLectureTile = (sectionIndex: any) => {
    const randomId = uuidv4();
    const newLectureTile = {
      id: randomId,
      lectureName: "New Lecture",
      lectureDescription: "Enter description here",
      files: [],
    };
    const updatedCourseData = [...createCourseData];
    updatedCourseData[sectionIndex].lectureTiles.push(newLectureTile);

    setcreateCourseData(updatedCourseData);
  };

  const handleDeleteLectureTile = (sectionIndex: number, lectureIndex: number) => {
    const updatedCourseData = [...createCourseData];
    updatedCourseData[sectionIndex].lectureTiles.splice(lectureIndex, 1);
    setcreateCourseData(updatedCourseData);
  };

  const onChange = (key: any) => {
console.log("key => ", key)
setActivePanelKey(key)
  };

  // const handelPanelChange = (index: any) => {
  //   setActivePanel(index)
  // };
  // const handelDescriptionEditMode = (index: any) => {
  //   setIsDescriptionEditMode(index)
  // };
  const handelUploadFiles = (index: any) => {
    setIsUploadModal(index)
  };

  // const [activePanel, setActivePanel] = useState(null);

  const handlePanelChange = (panelId:any) => {
    if (activePanel === panelId) {
      setActivePanelValue(''); // If panel is already active, collapse it
    } else {
      setActivePanelValue(panelId); // Otherwise, activate the clicked panel
    }
  };

  return (
    <div className='wrapper-create-your-content'>
      <div className='form--head fs-14 fw-600 form-heading-color'>What will students learn in your course?</div>
      {createCourseData?.map((item: any, index: any) => (
        <div className="wrapper-course-section" key={item?.id} onClick={() => setSectionId(item?.id)}>
          <div className="course-section-head d-flex">
            <div className="section-Title d-flex justify-center align-center fs-14 fw-700 white-color">Section {index + 1}:</div>
            <div className="section-info d-flex align-center  fs-14 fw-600 form-heading-color">{item?.sectionName}</div>
            <img className='icon-section-delete' src={deleteIcon} onClick={() => removeFieldSectionOne(index)} alt="" />
          </div>
          <div className="lecture-tiles">
            <Collapse accordion onChange={handlePanelChange} activeKey={activePanelValue}>
              {item?.lectureTiles?.map((ele: any, indexEle: any) => (
                <Panel showArrow={false} header={
                  <div
                  className={`${activePanel === ele.id ? 'lecture-tile-head d-flex justify-between align-center bg--dark' : "lecture-tile-head d-flex justify-between align-center" }`} 
                    onClick={() => {setActivePanel(ele.id); setIsDescriptionEditMode(false)}}
                  >
                    <div className='d-flex flex--res-column'>
                      <div className='tile-title fs-14 fw-600 label-color'>Lecture {indexEle + 1}:</div>
                      <div className='tile-name fs-14 fw-400 title-color' style={{borderLeft:'1px solid #000', paddingLeft:"20px"}}>{ele?.lectureName}</div>
                      <img className='f--hover-to-show'  src={editIcon} alt=""
                                style={{ width: "13px", height: "13px", marginTop:'4px' }} />
                    </div>
                    <div className='tile-features d-flex' >
                      
                      <img className={`${activePanel === ele.id ? '' : "f--hover-to-show" }`} src={deleteIcon} onClick={() => handleDeleteLectureTile(index, indexEle)} alt="" />
                      <img className={`${activePanel === ele.id ? '' : "f--hover-to-show" }`} src={uploadFileIcon} alt="" />
                      <div className='delete-icon'>
                        <img src={activePanel === indexEle ? arrowUpIcon : arrowDownIcon} alt="" />
                      </div>
                    </div>
                  </div>
                } key={ele.id} className='editable-panel-header'>
                  <div className="lecture-tile-content">
                    <div className="wrapper-description--upload-doc">
                      <div className="inner-upper-level">
                        <Row>
                          <Col xs={24} sm={24} md={20} lg={20}>
                            <div className="area-description d-flex flex-column">
                              {isDescriptionEditMode && activePanel === ele.id && <img className='edit-icon' onClick={() => {
                                setIsDescriptionEditMode(activePanel === ele.id && !isDescriptionEditMode);
                              }}
                                src={saveIcon} alt=""
                                style={{ width: "13px", height: "13px" }} />}

                              {!isDescriptionEditMode && activePanel === ele.id && <img className='edit-icon' onClick={() => {
                                setIsDescriptionEditMode(activePanel === ele.id && !isDescriptionEditMode);
                              }}
                                src={editIcon} alt=""
                                style={{ width: "13px", height: "13px" }} />}


                              <div className='fs-14 fw-600 label-color'>Description:</div>
                              {!isDescriptionEditMode && activePanel === ele.id && <div className='fs-14 fw-400'>{ele?.lectureDescription}</div>}
                              {isDescriptionEditMode && activePanel === ele.id && <TextArea rows={2} placeholder="Description" className='text-area-styles' />}

                            </div>
                          </Col>
                          <Col xs={24} sm={24} md={4} lg={4}>
                            <div className="upload-file d-flex flex-column align-center justify-center" onClick={() => handelUploadFiles(indexEle)}>
                              <img src={uploadFileIcon} alt="" />
                              <span className='fs-14px fw-600 text-center'>Upload <br /> Resource</span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <div className="wrapper-uploaded-files-details">
                      <div className='fs-14 fw-600 label-color' style={{ marginBottom: "14px" }}>Files:</div>
                      {ele?.files?.map((uploadedFiles: any, indexFiles: any) => (
                        <div className="files-to-render d-flex flex-column" style={{ gap: '5px' }} key={indexFiles}>
                          <span className='fs-14 fw-400'>{indexFiles + 1}. {uploadedFiles?.name}</span>
                        </div>
                      ))}
                    </div>
                    {isUploadModal === indexEle &&
                      <div className="inner-absolute-wrapper-upload-resourse d-flex align-center justify-center">
                        {/* <Dragger {...props} className="upload-box">
                          <p className="ant-upload-drag-icon">
                            <img src={uploadCloudIcon} alt="" />
                          </p>
                          <p className="fs-14 fw-600">Drag and drop, or <span style={{ color: '#65CDF0' }}>Browse</span> your file</p>
                        </Dragger> */}
                        <div className="upload-box"><UploadImage id={'1'} /></div>
                        
                        <div className="close-overlay" onClick={() => handelUploadFiles('')}></div>
                      </div>
                      
                    }
                  </div>
                </Panel>
              ))}
            </Collapse>

            <div className='d-flex justify-end' style={{ marginTop: "20px", height: "20px" }}>
              <button className='add-more-fields fs-14 fw-600 cursor-pointer' onClick={() => addLectureTile(index)} style={{ height: "20px" }}>+ Add</button>
            </div>
          </div>
        </div>
      ))}
      <div className='d-flex justify-end' style={{ marginTop: "20px" }}>
        <button className='add-more-fields fs-14 fw-600 cursor-pointer' onClick={addFieldSectionOne}>+ Add</button>
      </div>

      <Button className='save-and-next-btn fs-16 fw-600' htmlType='submit' onClick={()=> handleTabsValueChange('3')}>Save & Next</Button>
    </div>
  )
}

const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: '',
  onChange(info) {
    const { status }: any = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
      console.log("Get File Info", info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
      console.log("name=>", info.file.name)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

export default CreateYourContent