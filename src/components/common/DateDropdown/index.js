import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as S from "./styles";

const DateDropdown = ({ selectedDate, onChange }) => {
  return (
    <S.DateDropdown>
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        dateFormat="yyyy-MM-dd"
        placeholderText="Date"
        isClearable
        showIcon
        icon={
          <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M.96 4.292c0-.921.74-1.667 1.67-1.667h8.75c.92 0 1.66.746 1.66 1.667v7.083c0 .921-.74 1.667-1.66 1.667H2.63c-.93 0-1.67-.746-1.67-1.667V4.292ZM3.67.958v2.917M10.33.958v2.917M3.46 5.958h7.08"
              stroke="#6F7170"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />
    </S.DateDropdown>
  );
};

export default DateDropdown;
