import { ReactNode } from "react";
import Header from "../components/layout/Header.tsx";
import shadowNumber1 from "../assets/Ellipse 2.png"

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-white">
       <img src={shadowNumber1} alt="Shadow Number 1" className="w-[695px] absolute top-0 right-0 h-[695px]" />
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
