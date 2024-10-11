import styled from "styled-components";
import theme from "../../../theme";

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1.643rem 2.286rem;
  background-color: ${theme.colors.white};

  @media (min-width: ${theme.breakpoints.laptop}) {
    padding: 1.643rem 4.643rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.802rem;
`;

export const NavItem = styled.p`
  font-size: ${theme.fontSizes.small};
  color: ${theme.textColors.default};
`;

export const HeaderAvatarContainer = styled.div`
  border: 1px solid ${theme.colors.black};
  box-shadow: 0px 4px 4px 0px #00000040;
`;

export const HeaderAvatar = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.429rem;
  width: 3.429rem;
  font-size: ${theme.fontSizes.small};
  color: ${theme.textColors.decorative};
  border-radius: 50%;
  background-color: ${theme.colors.decorativeLight};
`;
