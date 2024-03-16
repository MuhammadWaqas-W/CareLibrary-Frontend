import { DatePicker, Select } from "antd";
import type { DatePickerProps } from "antd";
import arrowDownSmall from '../../../assets/icons/arrow-small-down.svg';
import datePicker from "../../../assets/BookingCalander/images/date-picker.png";
import "./BookingCalanderFilters.scss"


function BookingCalanderFilters({bookingCalendar}:any) {

  const onChangeFrom: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  const onChangeTo: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className="wrapper-fliters">
      <div className="flex-filters">
        <div className="inner-flex-filters">
          <div className="col-box">
            <div className="area-fliters">
              <div className="filters-label fw-600 fs-14">Client Name</div>
              <Select
                suffixIcon={<img src={arrowDownSmall} alt="down-arrow" />}
                bordered={false}
                className="staff-filters-select"
                style={{ width: "100%" }}
                defaultValue="All"
                onChange={(value) => {
                  console.log(`selected ${value}`);
                }}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
            </div>
          </div>
          {!bookingCalendar && <div className="col-box">
            <div className="area-fliters">
              <div className="filters-label fw-600 fs-14">Satff Name</div>
              <Select
                suffixIcon={<img src={arrowDownSmall} alt="down-arrow" />}
                bordered={false}
                className="staff-filters-select"
                style={{ width: "100%" }}
                defaultValue="All"
                onChange={(value) => {
                  console.log(`selected ${value}`);
                }}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
            </div>
          </div>}
          <div className="col-box">
            <div className="area-fliters">
              <div className="filters-label fw-600 fs-14">Date Range</div>
              <DatePicker
                suffixIcon={<img src={datePicker} alt="calander" />}
                className="staff-filters-select"
                style={{ width: "100%", border: "none", borderRadius: "0px" }}
                onChange={onChangeFrom}
                placeholder="Form"
              />
            </div>
          </div>
          <div className="col-box">
            <div className="area-fliters">
              {/* <div className='filters-label fw-600 fs-14'>Type</div> */}
              <DatePicker
                suffixIcon={<img src={datePicker} alt="calander" />}
                style={{ width: "100%", border: "none", borderRadius: "0px", marginTop: ".5rem" }}
                onChange={onChangeTo}
                placeholder="To"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingCalanderFilters;
