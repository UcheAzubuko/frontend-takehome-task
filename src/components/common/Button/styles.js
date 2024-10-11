import styled from "styled-components";
import theme from "../../../theme";

export const ButtonContainer = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.base};
  font-weight: 500;
  padding: 1rem 5.214rem;
  line-height: 20px;
  border-radius: ${theme.border.radius.base};
  border: none;
  cursor: pointer;

  &.plain {
    background: transparent;
    padding: 0.286rem 0.857rem;
    color: ${theme.colors.success};
    display: inline-block;
  }
`;
