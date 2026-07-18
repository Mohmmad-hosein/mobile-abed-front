import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import AboutUs from "../pages/aboutUs";
import Login from "../pages/auth/login";
import SignUp from "../pages/auth/SignUp";

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
          </Routes>
        </MainLayout>
    </BrowserRouter>
  );
};

export default AppRouter;
