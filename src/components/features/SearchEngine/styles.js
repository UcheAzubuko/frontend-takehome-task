import styled from "styled-components";
import theme from "../../../theme";

export const SearchEngine = styled.div`
  max-width: 1032px;
  margin: 6.929rem auto 17.857rem auto;
`;

export const SearchEngineTitle = styled.h1`
  font-size: ${theme.fontSizes.xLarge};
  font-weight: 500;
  color: ${theme.textColors.default};
  text-align: center;
  margin-bottom: 2.286rem;
`;

export const SearchEngineDescription = styled.p`
  font-size: ${theme.fontSizes.small};
  color: ${theme.textColors.subdued};
  line-height: 28px;
  text-align: center;
`;

export const SearchControlsContainer = styled.div`
  margin-top: 4.571rem;
  margin-bottom: 2.286rem;

  &:nth-child(3) {
    text-align: center;
  }
`;

export const SearchControlsTop = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.143rem;
  margin-bottom: 2.286rem;

  &:first-child {
    flex: 1 0 auto;
    min-width: 0;
  }

  &:nth-child(2) {
    width: 100%;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
    column-gap: 1.143rem;
    align-items: center;

    &:first-child {
      flex: none;
      width: 100%;
    }
  }
`;

export const SearchControlsBottom = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.143rem;
  margin-bottom: 2.286rem;

  @media (min-width: ${theme.breakpoints.desktop}) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1.143rem;
    align-items: center;

    & * {
      flex: 1 0 auto;
      min-width: 0;
    }
  }
`;

export const SearchEmptyContainer = styled.div`
  border: 1px dashed ${theme.border.colors.subdued};
  padding: 2.286rem;
  text-align: center;
  margin-top: 2.286rem;

  p {
    font-size: ${theme.fontSizes.base};
    color: ${theme.textColors.default};
  }
`;
