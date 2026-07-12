import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import AboutUs from "../pages/aboutUs";

const AppRouter = () => {
  return (
    <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </MainLayout>
    </BrowserRouter>
  );
};

export default AppRouter;
