import * as S from "./styles";
import { ReactComponent as SearchIcon } from "../../../assets/search-data.svg";

const InputField = ({ value, onChange, onEnterPress }) => {
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      onEnterPress();
    }
  };

  return (
    <S.SearchContainer>
      <S.SearchIconContainer>
        <SearchIcon />
      </S.SearchIconContainer>
      <S.SearchInput
        type="text"
        placeholder="Search"
        value={value}
        onChange={e => onChange(e.target.value)}
        onKeyUp={handleKeyPress}
      />
    </S.SearchContainer>
  );
};

export default InputField;
