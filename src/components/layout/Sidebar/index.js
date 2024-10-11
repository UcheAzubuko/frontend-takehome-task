import { NavLink } from "react-router-dom";
import * as S from "./styles";
import { ReactComponent as IconLogo } from "../../../assets/icon-logo.svg";
import sidebarLinks from "../../../utils/sidebarLinks";

const Sidebar = () => {
  return (
    <S.Sidebar>
      <S.Logo>
        <IconLogo aria-label="CourtCorrect icon logo" />
      </S.Logo>

      <S.SidebarLinks>
        {sidebarLinks.map(link => (
          <S.LinkItem key={link.key} className={link.key === "search-engine" ? "active-link" : ""}>
            <NavLink to={link.href} exact activeClassName="active">
              {link.icon}
            </NavLink>
          </S.LinkItem>
        ))}
      </S.SidebarLinks>
    </S.Sidebar>
  );
};

export default Sidebar;
