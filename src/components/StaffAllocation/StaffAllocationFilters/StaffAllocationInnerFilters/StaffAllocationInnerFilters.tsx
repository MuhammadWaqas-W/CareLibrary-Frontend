import React from 'react'
import "./StaffAllocationInnerFilters.scss"
import arrowDownSmall from '../../../../assets/icons/arrow-small-down.svg'

import { Select } from 'antd'

const StaffAllocationInnerFilters = ({checkSelectedFilters, setcheckSelectedFilters}:any) => {

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setcheckSelectedFilters(value)
  }

  return (
    <div className="wrapper-fliters">
      <div className="flex-filters">

        <div className='inner-flex-filters'>
          <div className="col-box">
            <div className="area-fliters">
              <div className='filters-label fw-600 fs-14'>Care Home</div>
              <Select
                placeholder="Select Care Home"
                style={{ width: '100%' }}
                onChange={handleChange}
                suffixIcon={<img src={arrowDownSmall} alt="" />}
                options={[
                  { value: 'Novela Care Home', label: 'Novela Care Home' },
                  { value: 'Care Home', label: 'Care Home' },
                  { value: 'UK Care Home', label: 'UK Care Home' },
                  { value: 'Arlington Care Home', label: 'Arlington Care Home' },
                ]}
              />
              
            </div>
          </div>
          <div className="col-box">
            <div className="area-fliters">
              <div className='filters-label fw-600 fs-14'>Allocation Status</div>
              <Select
                placeholder="All"
                style={{ width: '100%' }}
                onChange={handleChange}
                suffixIcon={<img src={arrowDownSmall} alt="" />}
                options={[
                  { value: 'All', label: 'All' },
                  { value: 'Allocate', label: 'Allocate' },
                  { value: 'Not-Allocate', label: 'Not-Allocate' },
                  { value: 'New', label: 'New' },
                ]}
              />
            </div>
          </div>
          <div className="col-box">
            <div className="area-fliters">
              <div className='filters-label fw-600 fs-14'>User Type</div>
              <Select
                placeholder="Select"
                style={{ width: '100%' }}
                onChange={handleChange}
                suffixIcon={<img src={arrowDownSmall} alt="" />}
                options={[
                  { value: 'Health Care Assistant - [HCA]', label: 'Health Care Assistant - [HCA]' },
                  { value: 'Registered General Nurse', label: 'Registered General Nurse' },
                  { value: 'Senior Health Care Assistant....', label: 'Senior Health Care Assistant....' },
                  { value: 'Support Worker - [SW]', label: 'Support Worker - [SW]' },
                ]}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default StaffAllocationInnerFilters