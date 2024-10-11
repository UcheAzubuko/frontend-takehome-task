import styled from "styled-components";
import theme from "../../../theme";

export const SearchCard = styled.div`
  padding: 5.143rem 0;
  border-bottom: 1px solid ${theme.border.colors.subdued};
`;

export const SearchCardHeader = styled.p`
  font-size: ${theme.fontSizes.subheading};
  color: ${theme.colors.black};
  font-weight: 500;
  margin-top: 0.786rem;
  margin-bottom: 1.143rem;
`;

export const SearchCardBody = styled.div`
  margin-bottom: 1.714rem;

  h3 {
    font-size: ${theme.fontSizes.medium};
    color: ${theme.colors.primary};
    margin-bottom: 1.143rem;
    font-weight: 300;
  }

  p {
    font-size: ${theme.fontSizes.base};
    color: ${theme.textColors.subdued};
  }
`;

export const SearchCardFooter = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.143rem;

  ul {
    li:first-child {
      font-size: ${theme.fontSizes.caption};
      color: ${theme.textColors.default};
      margin-bottom: 0.286rem;
    }

    li:nth-child(2) {
      font-size: ${theme.fontSizes.base};
      font-weight: 500;
      color: ${theme.textColors.default};
    }
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
