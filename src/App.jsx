import Aos from "aos";
import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "aos/dist/aos.css";
import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/404";
import Contacto from "./pages/contact/Contacto";
import AsistenciaVial from "./pages/asistencia-vial/AsistenciaVial";
import ScrollTopBehaviour from "./components/common/ScrollTopBehavier";
import TyC from "./pages/tyc/Tyc";
import ReportarAccidente from "./pages/reportar-accidente/ReportarAccidente";
import AutosUSA from "./pages/seguros/AutoUSA";
import CamionUSA from "./pages/seguros/CamionUSA";
import MotoUSA from "./pages/seguros/MotoUSA";
import LargaEstadia from "./pages/seguros/LargaEstadia";
import AutoRenta from "./pages/seguros/AutoRenta";
import CoberturaPremium from "./pages/seguros/CoberturaPremium";
import UnityCard from "./pages/seguros/UnityCard";
import NuestrosAgentes from "./pages/pages-menu/agentes/NuestrosAgentes";
import { Zendesk } from "./components/chat/Zendesk";
import { Whatsapp } from "./components/chat/Whatsapp";

export const LanguageContext = createContext();

function App() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'es');

  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('lang', lang);
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className="main-page-wrapper">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            {/* Páginas de Main Menu */}
            <Route path="asistencia-vial" element={<AsistenciaVial />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="tyc" element={<TyC />} />
            <Route path="reportar-accidente" element={<ReportarAccidente />} />
            <Route path="seguros/seguro-auto" element={<AutosUSA />} />
            <Route path="seguros/seguro-camion" element={<CamionUSA />} />
            <Route path="seguros/seguro-moto" element={<MotoUSA />} />
            <Route path="seguros/seguro-larga-estadia" element={<LargaEstadia />} />
            <Route path="seguros/seguro-auto-renta" element={<AutoRenta />} />
            <Route path="seguros/cobertura-premium" element={<CoberturaPremium />} />
            <Route path="seguros/unity-card" element={<UnityCard />} />
            <Route path="agentes" element={<NuestrosAgentes />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <ScrollTopBehaviour />
        <Zendesk />
        <Whatsapp />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
