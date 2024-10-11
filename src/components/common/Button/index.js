import * as S from "./styles";

const Button = ({ onClick, label, type }) => {
  return (
    <S.ButtonContainer type="submit" onClick={onClick} className={`${type}`}>
      {label}
    </S.ButtonContainer>
  );
};

export default Button;
