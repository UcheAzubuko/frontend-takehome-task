import styled from "styled-components";
import theme from "../../../theme";

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  background-color: ${theme.colors.white};
  border-right: 1px solid ${theme.colors.disabled};
`;

export const Logo = styled.div`
  text-align: center;
  margin-top: 2.286rem;
  margin-bottom: 9.143rem;
`;

export const SidebarLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.143rem;
`;

export const LinkItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  height: 3.429rem;
  width: 3.429rem;
  cursor: pointer;
  border-radius: 0.571rem;

  &:hover {
    background-color: ${theme.colors.disabled};
  }

  .active & {
    background-color: ${theme.colors.disabled};
  }

  &.active-link {
    background-color: ${theme.colors.disabled};
  }
`;
