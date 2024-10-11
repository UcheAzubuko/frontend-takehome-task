import styled from "styled-components";
import theme from "../../../theme";

export const SearchResults = styled.div`
  margin: 2.286rem 0;
  display: flex;
  flex-direction: column;
  row-gap: 1.143rem;

  @media (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const SearchResultsData = styled.div`
  h2 {
    font-size: ${theme.fontSizes.large};
    color: ${theme.textColors.default};
    margin-bottom: 0.571rem;
    font-weight: 500;
  }

  p {
    font-size: ${theme.fontSizes.base};
    color: ${theme.textColors.subdued};
    margin-top: 0.571rem;
  }
`;

export const SearchResultsFilter = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.143rem;

  @media (min-width: ${theme.breakpoints.desktop}) {
    display: grid;
    grid-template-columns: 34.277% 1fr;
    align-items: center;
    justify-content: space-between;
    width: 22.714rem;
    column-gap: 1.143rem;
  }
`;
