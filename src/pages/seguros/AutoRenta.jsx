import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import 'react-tabs/style/react-tabs.css';
import {pasosAutoRenta, pasosAutoRentaEng} from "../../data/pasos-auto-renta";
import FaqAutoRenta from "./FaqAutoRenta";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "@/App";
import { useContext } from "react";

const AutoRenta = () => {
  const { t } = useTranslation()
  const rental = t("rental")
  const { lang } = useContext(LanguageContext)

  return (
    <>
      <Seo pageTitle="Service V1" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />
      {/* 
			=============================================
				Feature Section Fifty One
			============================================== 
			*/}
      <div className="fancy-feature-fiftyOne d-flex align-items-center seguros-hero position-relative mt-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-6" data-aos="fade-right">
              <div className="title-style-five mb-45 md-mb-10">
                <div className="sc-title-two fst-italic position-relative">
                  {rental.rentalEtiqueta}
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  {rental.rentalTitle}
                </h2>
                <p className="tx-dark text-hero-banner pt-20">
                  {rental.rentalDesc}
                </p>
                <div>
                  <a href={
                    lang === 'es' ?
                      "https://www.nuagentesonline.com/agents/676164158d24efd000af9799d82f8b36/"
                      : 
                      "https://www.nuagentesonline.com/agents/676164158d24efd000af9799d82f8b36/index.php?lang=en"
                  } target="blank">
                    <button className="fw-500 text-white tran3s button-primary" type="submit">
                      {rental.rentalCotiza}
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-6 d-flex align-items-center" data-aos="fade-left">
            <img
              src="/images/assets/seguro-renta-hero.webp"
              alt="icon"
              className="lazy-img seguro-camion-hero"
            />
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* /.container */}
        
      </div>
      {/* /.fancy-feature-fiftyOne */}

      <div className="feedback-section-eleven bg-gray position-relative mt-0 pt-30 lg-pt-20 pb-70 lg-pb-50 beneficios-slider" data-aos="fade-up">
        <div className="container">
          <h2 className="tx-dark mt-40 mb-50 text-center">
            {rental.rentalPasos}
          </h2>
          <p className="tx-dark text-lg text-center">
            {rental.rentalPasosDesc}
          </p>
        </div>
        <div>
          <div className="slider-wrapper">
            <div className="feedback_slider_seven beneficios-slide d-flex flex-column flex-lg-row align-items-center">
            {
              lang === 'es' ?
              pasosAutoRenta.slice(0, 4).map((item) => (
              <div className="item col-12 col-lg-4" key={item.id}>
                <div className="feedback-block-eleven beneficios-item-renta">
                  <div className="top-header d-flex align-items-center justify-content-between">
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <h3 className="tx-dark m0 pb-20">{item.title}</h3>
                    </div>
                  </div>
                  <p className="tx-dark m-0 p-0 renta-p">{item.text1}</p>
                </div>
              </div>
              )) : 
              pasosAutoRentaEng.slice(0, 4).map((item) => (
                <div className="item col-12 col-lg-4" key={item.id}>
                  <div className="feedback-block-eleven beneficios-item-renta">
                    <div className="top-header d-flex align-items-center justify-content-between">
                      <div className="d-flex justify-content-between align-items-center w-100">
                        <h3 className="tx-dark m0 pb-20">{item.title}</h3>
                      </div>
                    </div>
                    <p className="tx-dark m-0 p-0 renta-p">{item.text1}</p>
                  </div>
                </div>
              ))
            }
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="tx-dark mt-40 mb-50 lg-mt-50 text-center">
            {rental.rentalPasosListo}
          </h2>
          <p className="tx-dark text-lg text-center">
            {rental.rentalPasosListoDesc}
          </p>
          <div  className="d-flex justify-content-center pt-20">
            <a href={
                lang === 'es' ?
                  "https://www.nuagentesonline.com/agents/676164158d24efd000af9799d82f8b36/"
                  : 
                  "https://www.nuagentesonline.com/agents/676164158d24efd000af9799d82f8b36/index.php?lang=en"
            } target="blank">
              <button className="fw-500 text-white tran3s button-primary" type="submit">
                {rental.rentalCotiza}
              </button>
            </a>
          </div>
        </div>
        {/* /.container */}
      </div>

      {/*<div className="fancy-feature-thirtyEight pt-100 pb-50 bg-gray">
        <div className="container">
          <CoberturaAutoRentado />
        </div>
      </div>*/}

      <div
        className="fancy-short-banner-sixteen mt-130 lg-mt-80"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
            <div className="row">
              <div className="col-xl-10 col-md-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-10">
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <h4 className="fw-500 text-white mb-2">
                        {rental.rentalCobertura}
                      </h4>
                      <div className="sc-title fs-18 pb-10 text-white">
                        <p>
                          {rental.rentalCoberturaDesc}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End .col-6 */}

                  <div className="col-lg-2 d-flex ms-auto justify-content-center align-items-center text-lg-end">
                    <img src="/images/assets/warning.webp"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>

      <div className="fancy-feature-thirtyEight pt-60 pb-50">
        <div className="container">
          <h2 className="tx-dark mt-100 mb-50 lg-mt-50 text-center" data-aos="fade-up">
            {rental.rentalFaq}
          </h2>
          <FaqAutoRenta />
        </div>
        {/* /.container */}
      </div>
      
      <DefaultFooter />
    </>
  );
};

export default AutoRenta;
