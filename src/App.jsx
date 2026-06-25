import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SiteLayout from "./components/SiteLayout";
import HomePage from "./pages/HomePage";
import SeriesPage from "./pages/SeriesPage";
import CataloguePage from "./pages/CataloguePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DigitalLibraryPage from "./pages/DigitalLibraryPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/series" element={<SeriesPage />} />
          <Route path="/catalogue" element={<CataloguePage />} />
          <Route path="/library" element={<DigitalLibraryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}
