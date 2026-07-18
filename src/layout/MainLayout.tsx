import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Header from "../components/layout/Header";
import Footer from "../components/layout/footer";
import BackToTop from "../components/ui/BackToTop";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const location = useLocation();

  const hiddenRoutes = ["/login", "/SignUp"];

  const hideLayout =
    hiddenRoutes.includes(location.pathname) ||
    location.pathname.startsWith("/dashboard");

  return (
    <div className="min-h-screen bg-white">
      {!hideLayout && <Header />}
<Toaster
  position="top-center"
  toastOptions={{
    duration: 3000,

    success: {
      style: {
        background: "#1A0873",
        color: "#fff",
        border: "2px solid #3D2AB5",
      },
      iconTheme: {
        primary: "#fff",
        secondary: "#1A0873",
      },
    },

    error: {
      style: {
        background: "#B91C1C",
        color: "#fff",
      },
    },

    loading: {
      style: {
        background: "#1A0873",
        color: "#fff",
      },
    },
  }}
/>

<BackToTop />

      <main>{children}</main>

      {!hideLayout && <Footer />}
    </div>
  );
};

export default MainLayout;
