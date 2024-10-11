import styled from "styled-components";
import theme from "../../../theme";

export const Paginator = styled.div`
  margin: 2.286rem auto 0 auto;
  width: 12.857rem;
`;

export const PaginatorContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);

  button {
    padding: 0.976rem 1.166rem;
    background-color: ${theme.colors.white};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:disabled {
      cursor: not-allowed;
    }

    &.page-button {
      border: none;
      color: ${theme.textColors.subdued};
      font-size: ${theme.fontSizes.base};
      font-weight: 400;

      &.active {
        color: ${theme.colors.primary};
      }
    }
  }

  .prev-button,
  .next-button {
    border: 1px solid ${theme.border.colors.default};
  }

  .prev-button {
    border-radius: 0.286rem 0 0 0.286rem;
  }

  .next-button {
    border-radius: 0 0.286rem 0.286rem 0;
  }
`;
