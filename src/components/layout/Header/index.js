import * as S from "./styles";

const Header = () => {
  return (
    <S.Header>
      <S.Nav>
        <S.NavItem>Name Surname</S.NavItem>
        <S.HeaderAvatarContainer>
          <S.HeaderAvatar>CC</S.HeaderAvatar>
        </S.HeaderAvatarContainer>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
