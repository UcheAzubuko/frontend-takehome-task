import styled from "styled-components";
import theme from "../../../theme";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.border.colors.default};
  border-radius: ${theme.border.radius.base};
  padding: 1rem 1.714rem;
  width: 100%;

  &:focus {
    border-color: ${theme.colors.primary};
  }

  &:hover {
    border-color: ${theme.colors.primary};
  }
`;

export const SearchIconContainer = styled.div`
  margin-right: 0.619rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: ${theme.fontSizes.base};
  color: ${theme.textColors.default};
  background-color: transparent;

  &::-webkit-input-placeholder {
    font-size: ${theme.fontSizes.base};
    color: ${theme.textColors.subdued};
    font-weight: 400;
  }

  &:-moz-placeholder {
    /* Firefox 18- */
    font-size: ${theme.fontSizes.base};
    color: ${theme.textColors.subdued};
    font-weight: 400;
  }

  &::-moz-placeholder {
    /* Firefox 19+ */
    font-size: ${theme.fontSizes.base};
    color: ${theme.textColors.subdued};
    font-weight: 400;
  }

  &:-ms-input-placeholder {
    font-size: ${theme.fontSizes.base};
    color: ${theme.textColors.subdued};
    font-weight: 400;
  }
`;
