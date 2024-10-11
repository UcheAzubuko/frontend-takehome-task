import { NavLink } from "react-router-dom";
import * as S from "./styles";
import { ReactComponent as FullLogo } from "../../../assets/full-logo.svg";
import socialLinks from "../../../utils/socialLinks";
import PageWrapper from "../../common/PageWrapper";

const Footer = () => {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/", label: "Data" },
    { href: "/", label: "Cases" },
    { href: "/", label: "Customers" },
    { href: "/", label: "Search Engine" },
    { href: "/", label: "Custom Fields" },
    { href: "/", label: "Support" },
  ];

  const legalLinks = [
    { href: "/", label: "Terms & Conditions" },
    { href: "/", label: "Privacy Policy" },
    { href: "/", label: "AI Safety Policy" },
    { href: "/", label: "Cookie Policy" },
    { href: "/", label: "Compliance Statement" },
  ];

  const currentYear = new Date().getFullYear() - 1;

  return (
    <S.Footer>
      <PageWrapper>
        <S.FooterContainer>
          <S.FooterTopContainer>
            <S.FooterBoxOne>
              <FullLogo aria-label="CourtCorrect full logo" />
              <p>Justice for all.</p>
              <ul>
                <li>hello@courtcorrect.com 33</li>
                <li>Percy St, London W1T 2DF</li>
                <li>020 7867 3925</li>
              </ul>
            </S.FooterBoxOne>
            <S.FooterBoxTwo>
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map(link => (
                  <li key={link.label}>
                    <NavLink to={link.href}>{link.label}</NavLink>
                  </li>
                ))}
              </ul>
            </S.FooterBoxTwo>
            <S.FooterBoxThree>
              <h4>Legals</h4>
              <ul>
                {legalLinks.map(link => (
                  <li key={link.label}>
                    <NavLink to={link.href}>{link.label}</NavLink>
                  </li>
                ))}
              </ul>
            </S.FooterBoxThree>
          </S.FooterTopContainer>

          <S.FooterBottomContainer>
            <p>&copy; {currentYear} CourtCorrect LTD</p>
            <ul>
              {socialLinks.map(link => (
                <li key={link.key}>
                  <a href={link.href}>{link.icon}</a>
                </li>
              ))}
            </ul>
          </S.FooterBottomContainer>
        </S.FooterContainer>
      </PageWrapper>
    </S.Footer>
  );
};

export default Footer;
