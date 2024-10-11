import Select from "react-select";
import * as S from "./styles";

const Dropdown = ({ options, onChange, placeholder, value }) => {
  return (
    <S.Dropdown>
      <Select
        value={value ? value : ""}
        classNamePrefix="custom-select"
        options={options}
        onChange={onChange}
        placeholder={placeholder}
        isClearable
      />
    </S.Dropdown>
  );
};

export default Dropdown;
