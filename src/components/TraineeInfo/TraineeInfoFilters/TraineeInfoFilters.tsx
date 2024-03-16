import { Select } from 'antd';
import React from 'react'
import "./TraineeInfoFilters.scss"
import arrowDownSmall from '../../../assets/icons/arrow-small-down.svg'

const TraineeInfoFilters = () => {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      }

  return (
    <div className="wrapper-fliters">
      <div className="flex-filters">

        <div className='inner-flex-filters'>
          <div className="col-box">
            <div className="area-fliters">
              <div className='filters-label fw-600 fs-14'>Trainee Name</div>
              <Select
                placeholder="Select"
                style={{ width: '100%' }}
                onChange={handleChange}
                suffixIcon={<img src={arrowDownSmall} alt="" />}
                options={[
                  { value: 'Option One', label: 'Option One' },
                  { value: 'Option Two', label: 'Option Two' },
                ]}
              />
              
            </div>
          </div>
          <div className="col-box">
            <div className="area-fliters">
              <div className='filters-label fw-600 fs-14'>Designation</div>
              <Select
                placeholder="Select"
                style={{ width: '100%' }}
                onChange={handleChange}
                suffixIcon={<img src={arrowDownSmall} alt="" />}
                options={[
                  { value: 'Option One', label: 'Option One' },
                  { value: 'Option Two', label: 'Option Two' },
                ]}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TraineeInfoFilters