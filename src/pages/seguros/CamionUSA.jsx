import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import Service1 from "../../components/services/Service1";
import Block from "../../components/services/Block";
import Testimonial from "../../components/home-page/home-3/Testimonial";
import Faq from "../../components/services/Faq";
import FaqAsistencia from "../../components/services/FaqAsistencia";
import Partners from "../../components/services/Partners";
import { Link } from "react-router-dom";
import AsistenciaPlus from "./AsistenciaPlus";
import FaqAuto from "./FaqAuto";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TruckerPlus from "./TruckerPlus";
import FaqCamion from "./FaqCamion";
import {beneficiosCamion, beneficiosCamionEng} from "../../data/beneficios-camion";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "@/App";
import { useContext } from "react";

const CamionUSA = () => {
  const { t } = useTranslation()
  const camion = t("camion")
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
                  {camion.camionEtiqueta}
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  {camion.camionTitle}
                </h2>
                <p className="tx-dark text-hero-banner pt-20">
                  {camion.camionDesc}
                </p>
                <div>
                  <a href="https://www.nuagentesonline.com/agents/676164158d24efd000af9799d82f8b36/" target="blank">
                    <button className="fw-500 text-white tran3s button-primary" type="submit">
                      {camion.camionCotiza}
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-6 d-flex align-items-center" data-aos="fade-left">
            <img
              src="/images/assets/seguro-camion-hero.webp"
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

      <div className="feedback-section-eleven position-relative mt-0 pb-70 lg-pb-50 beneficios-slider" data-aos="fade-up">
        <div className="container">
          <h2 className="tx-dark mt-100 mb-50 lg-mt-50 text-center">
            {camion.camionBeneficios}
          </h2>
        </div>
        <div>
          <div className="slider-wrapper">
            <div className="feedback_slider_seven beneficios-slide d-flex flex-column flex-lg-row align-items-center">
            {
              lang === 'es' ? 
              beneficiosCamion.slice(0, 4).map((item) => (
                <div className="item col-12 col-lg-4" key={item.id}>
                  <div className="feedback-block-eleven beneficios-item-camion">
                    <div className="top-header d-flex align-items-center justify-content-between">
                      <div className="d-flex justify-content-between align-items-center w-100">
                        <h3 className="tx-dark m0">{item.title}</h3>
                          <img
                          src={item.image}
                          alt="tesimonial avatar"
                          className="rounded-circle"
                          width={90}
                        />
                      </div>
                    </div>
                    <p className="tx-dark m-0 p-0" style={{fontSize: '20px'}}>{item.text1}</p>
                    <p className="tx-dark m-0 p-0" style={{fontSize: '20px'}}>{item.text2}</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="cost fw-500 tx-dark fs-20">
                        {item.author}
                        <span className="opacity-50 fw-normal">{item.location}</span>
                      </div>
                      
                    </div>
                  </div>
                </div>
              )) : 
              beneficiosCamionEng.slice(0, 4).map((item) => (
                <div className="item col-12 col-lg-4" key={item.id}>
                  <div className="feedback-block-eleven beneficios-item-camion">
                    <div className="top-header d-flex align-items-center justify-content-between">
                      <div className="d-flex justify-content-between align-items-center w-100">
                        <h3 className="tx-dark m0">{item.title}</h3>
                          <img
                          src={item.image}
                          alt="tesimonial avatar"
                          className="rounded-circle"
                          width={90}
                        />
                      </div>
                    </div>
                    <p className="tx-dark m-0 p-0" style={{fontSize: '20px'}}>{item.text1}</p>
                    <p className="tx-dark m-0 p-0" style={{fontSize: '20px'}}>{item.text2}</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="cost fw-500 tx-dark fs-20">
                        {item.author}
                        <span className="opacity-50 fw-normal">{item.location}</span>
                      </div>
                      
                    </div>
                  </div>
                </div>
              ))
            }
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>

      <div className="fancy-feature-thirtyEight pt-100 pb-50 bg-gray">
        <div className="container">
          <TruckerPlus />
        </div>
        {/* /.container */}
      </div>

      <div className="fancy-feature-thirtyEight pt-60 pb-50">
        <div className="container">
          <h2 className="tx-dark mt-100 mb-50 lg-mt-50 text-center" data-aos="fade-up">
            {camion.camionFaq}
          </h2>
          <FaqCamion />
        </div>
        {/* /.container */}
      </div>
      
      <DefaultFooter />
    </>
  );
};

export default CamionUSA;
