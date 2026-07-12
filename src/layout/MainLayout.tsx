import { ReactNode } from "react";
import Header from "../components/layout/Header.tsx";
import Footer from "../components/layout/footer.tsx";


interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
