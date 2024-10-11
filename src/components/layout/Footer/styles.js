import styled from "styled-components";
import theme from "../../../theme";

export const Footer = styled.div`
  background-color: ${theme.colors.footerBackground};
  padding: 2.857rem 0;
`;

export const FooterContainer = styled.div`
  max-width: 1207px;
  margin: 0 auto;
`;

export const FooterTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2.286rem;
  padding-bottom: 1.714rem;
  border-bottom: 1px solid ${theme.border.colors.subduedLight};

  @media (min-width: ${theme.breakpoints.laptop}) {
    display: grid;
    grid-template-columns: 713px 1fr 1fr;
    column-gap: 6.857rem;
  }
`;

export const FooterBoxOne = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.143rem;

  p,
  li {
    color: ${theme.textColors.subdued};
    font-size: ${theme.fontSizes.base};
  }
`;

const BaseFooterLinkBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.571rem;

  h4 {
    color: ${theme.textColors.default};
    font-size: ${theme.fontSizes.headingSubdued};
    font-weight: 500;
  }

  ul {
    display: flex;
    flex-direction: column;
    row-gap: 0.571rem;

    li a {
      color: ${theme.textColors.subdued};
      font-size: ${theme.fontSizes.base};
    }
  }
`;

export const FooterBoxTwo = styled(BaseFooterLinkBox)``;

export const FooterBoxThree = styled(BaseFooterLinkBox)``;

export const FooterBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.714rem;
  row-gap: 0.571rem;

  p {
    color: ${theme.textColors.subdued};
    font-size: ${theme.fontSizes.base};
  }

  ul {
    display: flex;
    align-items: center;
    column-gap: 0.929rem;
  }

  @media (min-width: ${theme.breakpoints.laptop}) {
    flex-direction: row;
    justify-content: space-between;
    column-gap: 6.857rem;
  }
`;
