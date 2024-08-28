import { Link } from "react-router-dom";
import {
  segurosItems,
  segurosItemsEng,
  accidenteItems,
  accidenteItemsEng
} from "../../data/menu";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "@/App";
import { useContext } from "react";

const MainMenu = () => {
  const { t, i18n } = useTranslation()
  const { lang } = useContext(LanguageContext)
  const { pathname } = useLocation();

  const navbarLang = t('navbar')


  const isActive = (link) => {
    return pathname.replace(/\/\d+$/, "") === link.replace(/\/\d+$/, "");
  };

  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav align-items-center navbar-gap">
          <li className="d-block d-lg-none">
              <Link to="/" className="d-block">
                <div className="logo justify-content-center">
                  <img src="/images/logo/logo-nu.webp" alt="logo" className="w-50"/>
                </div>
              </Link>
          </li>
          {/*}
          <li className="nav-item dropdown mega-dropdown-md">
            <a
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
              className={
                menuItems.some((menu) =>
                  menu.items.some((elm) => isActive(elm.link))
                )
                  ? "nav-link dropdown-toggle active-menu"
                  : "nav-link dropdown-toggle"
              }

            >
              Home
            </a>
            <ul className="dropdown-menu">
              <li>
                <div className="row">
                  {menuItems.map((menu, index) => (
                    <div className="col-lg-4" key={index}>
                      <div className="menu-column">
                        <h6
                          className={
                            menu.items.some((elm) => isActive(elm.link))
                              ? "mega-menu-title active-menu"
                              : "mega-menu-title"
                          }
                        >
                          {menu.title}
                        </h6>
                        <ul className="style-none mega-dropdown-list">
                          {menu.items.map((item, index) => (
                            <li key={index}>
                              <Link
                                to={item.link}
                                className={`dropdown-item ${
                                  isActive(item.link) ? "active" : ""
                                }`}
                              >
                                <span>{item.title}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </li>

          <li className="nav-item  dropdown">
            <a
              className={
                pagesItems.some((menu) =>
                  menu.subItems.some((elm) => isActive(elm.link))
                ) ||
                isActive("/pages-menu/pricing") ||
                isActive("/pages-menu/testimonials")
                  ? "nav-link dropdown-toggle active-menu"
                  : "nav-link dropdown-toggle"
              }
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Pages
            </a>
            <ul className="dropdown-menu dropdown-menu-shadow">
              {pagesItems.map((item, index) => (
                <li className="dropdown-submenu dropdown" key={index}>
                  <a
                    // className="dropdown-item dropdown-toggle"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                    className={
                      item.subItems.some((elm) => isActive(elm.link))
                        ? "dropdown-item dropdown-toggle active-menu"
                        : "dropdown-item dropdown-toggle"
                    }
                    href="#"
                  >
                    <span>{item.title}</span>
                  </a>
                  <ul className="dropdown-menu">
                    {item.subItems.map((subMenu, i) => (
                      <li key={i}>
                        <Link
                          to={subMenu.link}
                          className={`dropdown-item ${
                            isActive(subMenu.link) ? "active" : ""
                          }`}
                        >
                          <span>{subMenu.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a
              // className="nav-link dropdown-toggle"
              className={
                portfolioItems.some((elm) => isActive(elm.link))
                  ? "nav-link dropdown-toggle active-menu"
                  : "nav-link dropdown-toggle"
              }
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Portfolio
            </a>
            <ul className="dropdown-menu">
              {portfolioItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className={`dropdown-item ${
                      isActive(item.link) ? "active" : ""
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a
              className={
                blogItems.some((elm) => isActive(elm.link))
                  ? "nav-link dropdown-toggle active-menu"
                  : "nav-link dropdown-toggle"
              }
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Blog
            </a>
            <ul className="dropdown-menu">
              {blogItems.map((blog, index) => (
                <li key={index}>
                  <Link
                    to={blog.link}
                    className={`dropdown-item ${
                      isActive(blog.link) ? "active" : ""
                    }`}
                  >
                    <span>{blog.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a
              className={
                contactItems.some((elm) => isActive(elm.link))
                  ? "nav-link dropdown-toggle active-menu"
                  : "nav-link dropdown-toggle"
              }
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Contact
            </a>
            <ul className="dropdown-menu">
              {contactItems.map((contact, index) => (
                <li key={index}>
                  <Link
                    to={contact.link}
                    className={`dropdown-item ${
                      isActive(contact.link) ? "active" : ""
                    }`}
                  >
                    <span>{contact.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
            */}

          <li className="nav-item">
            <Link
              className="nav-link"
              to='/'
            >
              {navbarLang.navbarHome}
            </Link>
            
          </li>

          <li className="nav-item dropdown d-flex flex-column align-items-center d-lg-block">
            <a
              className={
                segurosItems.some((elm) => isActive(elm.link))
                  ? "nav-link dropdown-toggle active-menu"
                  : "nav-link dropdown-toggle"
              }
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              
            >
              {navbarLang.seguros}
            </a>
            <ul className="dropdown-menu dropdown-menu-shadow">
              
              {
                lang === 'es'?
                segurosItems.map((seguro, index) => (
                <li key={index}>
                  <Link
                    to={seguro.link}
                    className={`dropdown-item ${
                      isActive(seguro.link) ? "active" : ""
                    }`}
                  >
                    <span>{seguro.text}</span>
                  </Link>
                </li>
                )) :
                segurosItemsEng.map((seguro, index) => (
                  <li key={index}>
                    <Link
                      to={seguro.link}
                      className={`dropdown-item ${
                        isActive(seguro.link) ? "active" : ""
                      }`}
                    >
                      <span>{seguro.text}</span>
                    </Link>
                  </li>
                  ))
              }
            </ul>
          </li>
          {/* End li (seguros) */}

          
          {/* End li (contacto) */}

          <li className="nav-item">
            <Link
              className="nav-link text-center"
              to='/reportar-accidente'
            >
              {navbarLang.reportarAccidente}
            </Link>
            
          </li>
          {/* End li (reportar-accidente) */}

          {/*
          <li className="nav-item dropdown d-flex flex-column align-items-center d-lg-block">
            <a
              className={
                segurosItems.some((elm) => isActive(elm.link))
                  ? "nav-link dropdown-toggle active-menu"
                  : "nav-link dropdown-toggle"
              }
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              
            >
              {navbarLang.reportarAccidente}
            </a>
            <ul className="dropdown-menu dropdown-menu-shadow">
              
              {
                lang === 'es'?
                accidenteItems.map((accidente, index) => (
                  <li key={index}>
                    <Link
                      to={accidente.link}
                      className={`dropdown-item ${
                        isActive(accidente.link) ? "active" : ""
                      }`}
                      target={accidente.blank? `_blank`: `_self`}
                    >
                      <span>{accidente.text}</span>
                    </Link>
                  </li>
                )) :
                accidenteItemsEng.map((accidente, index) => (
                  <li key={index}>
                    <Link
                      to={accidente.link}
                      className={`dropdown-item ${
                        isActive(accidente.link) ? "active" : ""
                      }`}
                      target={accidente.blank? `_blank`: `_self`}
                    >
                      <span>{accidente.text}</span>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </li>

          {/* End li (reportar-accidente-dropdown) */}

          <li className="nav-item">
            <Link
              className="nav-link text-center"
              to='/asistencia-vial'
            >
              {navbarLang.asisVial}
            </Link>
            
            </li>
          {/* End li (asistencia-vial) */}

          <li className="nav-item">
            <Link
              className="nav-link"
              to='/contacto'
            >
              {navbarLang.contacto}
            </Link>
          </li>
          {/* End li (contacto) */}

        </ul>
        {/* End ul */}

        {/* Mobile Content */}
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-20">
            <a
              href="/indexlogin.asp"
              className="btn-twentyOne fw-500 tran3s d-block d-lg-none"
            >
              {navbarLang.accesoAgente}
            </a>
          </div>
        </div>
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MainMenu;
