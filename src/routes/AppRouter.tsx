import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import AboutUs from "../pages/aboutUs";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import MobileList from "../pages/mobileList";
import RepairAndSalesConsultation from "../pages/chat";
import MobileDetail from "../pages/mobileDetail";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardInfoPage from "../pages/dashboard";
import UserPayList from "../pages/dashboard/UserPayList";
import Favorites from "../pages/dashboard/Favorites";
import Bookmarks from "../pages/dashboard/Bookmarks";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/products" element={<MobileList />} />
          <Route path="/chat" element={<RepairAndSalesConsultation />} />
          <Route path="/mobile/:id" element={<MobileDetail />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardInfoPage />} />
            <Route path="payments" element={<UserPayList />} />
            <Route path="Favorites" element={<Favorites />} />
            <Route path="Bookmarks" element={<Bookmarks />} />
          </Route>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRouter;
