import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import AppUtils from "./utils/AppUtils";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Contact from "./components/Contact";
import AppContent from "./AppContent";

function App() {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    AppUtils.connect();
    setLenis(AppUtils.lenis);
  }, []);

  return (
    <BrowserRouter>
      <AppContent lenis={lenis} />
    </BrowserRouter>
  );
}

export default App;
