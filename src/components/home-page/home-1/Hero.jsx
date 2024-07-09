import AOS from "aos";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "@/App";
import { useContext } from "react";

const Hero1 = () => {
  const { lang } = useContext(LanguageContext)
  const { t } = useTranslation()
  const homeLang = t("home")

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <div className="hero-banner-ten position-relative">
      <img
        src="/images/assets/hero-camion.webp"
        alt="ilustration"
        className="hero-camion lazy-img illustration-one"
        data-aos="fade-left"
      />
      <img
        src="/images/assets/hero-auto.webp"
        alt="ilustration"
        className="lazy-img illustration-two"
        data-aos="fade-right"
      />
      <div className="container">
        <div className="row">
          <div
            className="col-lg-9 col-md-10 m-auto text-center"
            
          >
            <h1 className="hero-heading fw-500 tx-dark">
              {homeLang.mainTitleHome} <span>National Unity</span>
            </h1>
            <p className="text-lg tx-dark mt-45 mb-50 lg-mt-30 lg-mb-40">
              {homeLang.subTitleHome}
            </p>
            {/* End form */}
            <div className="d-flex main-buttons">
              <a href={
                lang === 'es' ?
                  "https://www.nuagentesonline.com/agents/676164158d24efd000af9799d82f8b36/"
                  : 
                  "https://www.nuagentesonline.com/agents/676164158d24efd000af9799d82f8b36/index.php?lang=en"
              } target="blank">
                <button className="fw-500 text-white tran3s button-primary" type="submit">
                  {homeLang.cotizaEnLinea}
                </button>
              </a>

              <a href="./national/uc/code/activa.asp" target="blank">
                <button className="fw-500 text-white tran3s button-primary" type="submit">
                  {homeLang.activarUnityCard}
                </button>
              </a>
            </div>

            <div>
              <div className="approval-info d-inline-flex align-items-center mt-130 lg-mt-80">
                {/*<img src="/images/icon/icon_99.svg" alt="" className="me-1" />
                <span>An UK insurer approved by the UICO.</span>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .container */}

      
    </div>
  );
};

export default Hero1;
