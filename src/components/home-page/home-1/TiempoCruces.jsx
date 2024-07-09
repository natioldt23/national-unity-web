import { useTranslation } from "react-i18next";
import { LanguageContext } from "@/App";
import { useContext } from "react";

const TiempoCruces = () => {
  const { t } = useTranslation()
  const home = t("home")

  const { lang } = useContext(LanguageContext)

  const features = [
    "Actualización de información cada 15 minutos",
    "4 estados de entrada",
    "Pronóstico de horarios de cruces",
  ];

  const featuresEng = [
    "Information updated every 15 minutes",
    "4 entry states",
    "Crossing schedule forecast",
  ];

  return (
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="block-style-seven" data-aos="fade-right">
          <div className="title-style-one">
            {/*<div className="sc-title text-uppercase">MOBILE APP</div>*/}
            <h2 className="main-title fw-500 tx-dark m0">
              {home.crucesTitle}
            </h2>
          </div>
          <p className="fs-20 pt-30 pb-30 lg-pb-20">
            {home.crucesSubtitle}
          </p>
          <ul className="style-none list-item">
            {
              lang === 'es' ?
              features.map((feature, index) => (
                <li key={index}>{feature}</li>
              )) : 
              featuresEng.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))
            }
          </ul>
          {/* End list */}

          <div className="d-sm-flex align-items-center mt-55 lg-mt-30">
            <a href="./national/Tiempo_Cruce/code/" target="blank">
              <button className="fw-500 text-white tran3s button-primary" type="submit">
                {home.crucesTitle}
              </button>
            </a>
          </div>
          {/* /.platform-button-group-three */}
        </div>
        {/* /.block-style-seven */}
      </div>
      {/* End col-6 */}

      <div className="col-lg-6" data-aos="fade-left">
        <div className="illustration-holder position-relative pt-50 pb-50 pe-md-5 lg-mt-80">
          {/*<img
            src="images/media/img_57.png"
            alt=""
            className="lazy-img main-img ms-auto"
          />*/}
          <img
            src="images/media/puentes.webp"
            alt=""
            className="lazy-img screen-two puentes"
          />
          <img
            src="images/shape/shape_139.svg"
            alt=""
            className="lazy-img shapes shape-one-puentes"
          />
          {/*<img
            src="images/shape/shape_140.svg"
            alt=""
            className="lazy-img shapes shape-two"
        />*/}
        </div>{" "}
        {/* /.illustration-holder */}
      </div>
    </div>
  );
};

export default TiempoCruces;
