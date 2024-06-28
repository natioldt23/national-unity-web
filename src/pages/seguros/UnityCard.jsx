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
import FaqUnityCard from "./FaqUnityCard";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CoberturasAuto from "./CoberturasAuto";
import {beneficiosAuto, beneficiosAutoEng} from "../../data/beneficios-auto";
import PasosUnityCard from "./PasosUnityCard";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "@/App";
import { useContext } from "react";

const UnityCard = () => {
  const { t } = useTranslation()
  const card = t("card")
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
            <div className="col-xxl-7 col-lg-6" data-aos="fade-right">
              <div className="title-style-five mb-45 md-mb-10">
                <div className="sc-title-two fst-italic position-relative">
                  {card.cardEtiqueta}
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  {card.cardTitle}
                </h2>
                <p className="tx-dark text-hero-banner pt-20">
                  {card.cardDesc1}
                </p>
                <p className="tx-dark text-hero-banner">
                  {card.cardDesc2}
                </p>
                <div>
                  <a href="https://www.nationalunity.com/national/uc/code/activa.asp" target="blank">
                    <button className="fw-500 text-white tran3s button-primary" type="submit">
                      {card.cardActiva}
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-5 col-lg-6 d-flex align-items-center" data-aos="fade-left">
            <img
              src="/images/assets/seguro-auto-hero.webp"
              alt="icon"
              className="lazy-img seguro-auto-hero"
            />
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* /.container */}
        
      </div>
      {/* /.fancy-feature-fiftyOne */}

      <div className="fancy-feature-thirtyEight pt-50 pb-50 bg-gray" data-aos="fade-up">
        <div className="container">
        <Tabs>
          <TabList className="react-tabs__tab-list">
            <Tab className="d-none">
              <p className="tx-light d-none">
                {card.coberturaSplitEtiqueta}
              </p> 
            </Tab>
          </TabList>

          <TabPanel>
            <h2 className="pb-30 text-center">{card.coberturaSplit}</h2>
            <p className="tx-dark fs-5">
              {card.coberturaSplitDesc}
            </p>
            <div className="row">
              <CoberturasAuto />
            </div>
          </TabPanel>
        </Tabs>
        </div>
        {/* /.container */}
      </div>

      <div className="feedback-section-eleven position-relative pb-70 lg-pb-50 beneficios-slider" data-aos="fade-up">
        <div className="container">
          <h2 className="tx-dark mt-100 mb-30 lg-mt-50 text-center">
            {card.beneficios}
          </h2>
        </div>
        <div>
          <div className="slider-wrapper">
            <div className="feedback_slider_seven beneficios-slider d-flex align-items-center flex-column flex-lg-row">
            {
              lang === 'es' ?
              beneficiosAuto.slice(0, 4).map((item) => (
                <div className="item col-lg-4" key={item.id}>
                  <div className="feedback-block-eleven beneficios-item-unity">
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
                    <p className="tx-dark m-0 p-0" style={{fontSize: "20px",}}>{item.text1}</p>
                    <p className="tx-dark m-0 p-0" style={{fontSize: "20px",}}>{item.text2}</p>
                    <p className="tx-dark m-0 p-0" style={{fontSize: "20px",}}>{item.text3}</p>
                    <p className="tx-dark m-0 p-0" style={{fontSize: "20px",}}>{item.text4}</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="cost fw-500 tx-dark fs-20">
                        {item.author}
                        <span className="opacity-50 fw-normal">{item.location}</span>
                      </div>
                      
                    </div>
                  </div>
                </div>
              )) :
              beneficiosAutoEng.slice(0, 4).map((item) => (
                <div className="item col-lg-4" key={item.id}>
                  <div className="feedback-block-eleven beneficios-item-unity">
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
                    <p className="tx-dark m-0 p-0" style={{fontSize: "20px",}}>{item.text1}</p>
                    <p className="tx-dark m-0 p-0" style={{fontSize: "20px",}}>{item.text2}</p>
                    <p className="tx-dark m-0 p-0" style={{fontSize: "20px",}}>{item.text3}</p>
                    <p className="tx-dark m-0 p-0" style={{fontSize: "20px",}}>{item.text4}</p>
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
          <PasosUnityCard />
        </div>
        {/* /.container */}
      </div>

      <div className="fancy-feature-thirtyEight pt-60 pb-50">
        <div className="container">
          <h2 className="tx-dark mt-100 mb-50 lg-mt-50 text-center" data-aos="fade-up">
            {card.cardFaq}
          </h2>
          <FaqUnityCard />
        </div>
        {/* /.container */}
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default UnityCard;
