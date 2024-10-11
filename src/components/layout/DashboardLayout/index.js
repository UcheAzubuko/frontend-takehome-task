import PageWrapper from "../../common/PageWrapper";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import * as S from "./styles";

const DashboardLayout = ({ children }) => {
  return (
    <S.DashboardLayout>
      <Sidebar />
      <S.DashboardMainView>
        <Header />
        <PageWrapper>{children}</PageWrapper>
        <Footer />
      </S.DashboardMainView>
    </S.DashboardLayout>
  );
};

export default DashboardLayout;
