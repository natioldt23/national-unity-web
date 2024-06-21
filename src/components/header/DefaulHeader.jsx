import { useContext, useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import { Link } from "react-router-dom";
import { LanguageContext } from "@/App";
import { useTranslation } from "react-i18next";

const DefaulHeader = () => {
  const [navbar, setNavbar] = useState(false);
  const { t, i18n } = useTranslation()
  const { lang, setLang } = useContext(LanguageContext)
  const navbarLang = t('navbar')

  const changeLanguage = () => {
    if(lang === 'es') {
      setLang('en')
      i18n.changeLanguage('en')
    } else {
      setLang('es')
      i18n.changeLanguage('es')
    }
  }

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-eight border-bottom ${
        navbar ? "fixed" : ""
      }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link to="/" className="d-block">
              <img className="logo-nu" src="/images/logo/logo-nu.webp" alt="logo" w="100" h="100"/>
            </Link>
          </div>
          <div>
            <button onClick={changeLanguage}>
              {
                lang === 'es'? 'EN' : 'ES'
              }
            </button>
          </div>
          <div className="right-widget ms-auto d-flex align-items-center order-lg-3">
            <Link
              to="https://www.nationalunity.com/indexlogin.asp"
              className="btn-twentyOne fw-500 tran3s d-none d-lg-block"
            >
              {navbarLang.accesoAgente}
            </Link>
          </div>{" "}
          {/* /.right-widget */}
          <MainMenu />
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default DefaulHeader;
