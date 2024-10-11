import styled from "styled-components";
import theme from "../../../theme";

export const DashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 7.286rem 1fr;
  height: 100vh;
  overflow: hidden;
`;

export const DashboardMainView = styled.div`
  flex: 1;
  overflow-y: auto;
  background-color: ${theme.colors.white};
`;
