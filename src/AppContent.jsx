import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Blog from "./components/Blog";
import ChiSiamo from "./components/ChiSiamo";
import Material from "./components/Material";
import Service from "./components/Service";
import Admin from "./components/Admin";
import Menu from "./components/layout/menu/Menu";
import BlogDetail from "./components/BlogDetail";
import Popup from "./components/popup/Popup";

function AppContent({ lenis }) {
  const location = useLocation();

  const isDarkHeader = [
    "/contact",
    "/blog",
    "/service",
    "/admin",
    "/blog/blogDetail",
  ].includes(location.pathname);
  const isNoHero = [
    "/contact",
    "/blog",
    "/service",
    "/admin",
    "/blog/blogDetail",
  ].includes(location.pathname);

  return (
    <>
      <Header lenis={lenis} isDark={isDarkHeader} />
      <main className={isNoHero ? "page--no-hero" : ""}>
        <Menu lenis={lenis} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chisiamo" element={<ChiSiamo />} />
          <Route path="/service" element={<Service />} />
          <Route path="/material" element={<Material />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Popup lenis={lenis} />
      <Footer />
    </>
  );
}

export default AppContent;
