import { ReactComponent as HomeIcon } from "../assets/home.svg";
import { ReactComponent as FileIcon } from "../assets/file.svg";
import { ReactComponent as BriefCaseIcon } from "../assets/brief-case.svg";
import { ReactComponent as InfoIcon } from "../assets/info.svg";
import { ReactComponent as SettingsIcon } from "../assets/settings.svg";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { ReactComponent as ContactIcon } from "../assets/contact.svg";

const sidebarLinks = [
  {
    href: "/",
    key: "home",
    icon: <HomeIcon />,
  },
  {
    href: "/",
    key: "data",
    icon: <BriefCaseIcon />,
  },
  {
    href: "/",
    key: "cases",
    icon: <ContactIcon />,
  },
  {
    href: "/",
    key: "customers",
    icon: <FileIcon />,
  },
  {
    href: "/",
    key: "search-engine",
    icon: <SearchIcon />,
  },
  {
    href: "/",
    key: "custom-fields",
    icon: <SettingsIcon />,
  },
  {
    href: "/",
    key: "support",
    icon: <InfoIcon />,
  },
];

export default sidebarLinks;
