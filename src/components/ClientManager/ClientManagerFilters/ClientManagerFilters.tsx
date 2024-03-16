import React from 'react'
import "./ClientManagerFilters.scss"
import arrowDownSmall from '../../../assets/icons/arrow-small-down.svg'

import { Select } from 'antd'

const ClientManagerFilters = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  }

  return (
    <div className="wrapper-fliters">
      <div className="flex-filters">

        <div className='inner-flex-filters'>
          <div className="col-box">
            <div className="area-fliters">
              <div className='filters-label fw-600 fs-14'>Name</div>
              <Select
                placeholder="Select Name"
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
              <div className='filters-label fw-600 fs-14'>Group Name</div>
              <Select
                placeholder="Select Name"
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
              <div className='filters-label fw-600 fs-14'>Type</div>
              <Select
                placeholder="Select Type"
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

export default ClientManagerFilters