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
import BeneficiosAuto from "./BeneficiosAuto";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CoberturasAuto from "./CoberturasAuto";

const AutosUSA = () => {

  const cardsData = [
    {
      id: 1,
      cardNo: "card-one",
      title: "40%",
      subtitle: "Del Mercado",
      src: "https://www.nationalunity.com/wp-content/uploads/2023/10/LIQUIDOS_NU-01.svg",
    },
    {
      id: 2,
      title: "+50 años",
      cardNo: "card-two",
      subtitle: "De experiencia",
      src: "https://www.nationalunity.com/wp-content/uploads/2023/10/LLANTA_NU-01.svg"
    },
    {
      id: 3,
      title: "Líder",
      cardNo: "card-three",
      subtitle: "En Responsabilidad civil",
      src: "https://www.nationalunity.com/wp-content/uploads/2023/10/PILA_NU-01.svg"
    },
    /*{
      id: 4,
      title: "Líder",
      cardNo: "card-one",
      subtitle: "En Responsabilidad civil",
      src: "https://www.nationalunity.com/wp-content/uploads/2023/10/ATASCAMIENTO_NU-01.svg"
    },*/
  ];

  const starRating = Array(5)
    .fill()
    .map((_, index) => (
      <li key={index}>
        <i className="fa-solid fa-star" />
      </li>
    ));

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
      <div className="fancy-feature-fiftyOne d-flex align-items-center vh-100 position-relative mt-150 mt-lg-0">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-lg-6" data-aos="fade-right">
              <div className="title-style-five mb-45 md-mb-10">
                <div className="sc-title-two fst-italic position-relative">
                  Seguros
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  Seguro de Auto
                </h2>
                <p className="tx-dark text-lg pt-20">
                  Cobertura para autos particulares no residentes, diseñada para cubrir la responsabilidad 
                  por daños ocasionados a terceros en bienes y personas mientras se encuentre circulando en 
                  los Estados Unidos de América y Canadá.
                </p>
                <div>
                  <a href="https://www.nuagentesonline.com/agents/676164158d24efd000af9799d82f8b36/" target="blank">
                    <button className="fw-500 text-white tran3s button-primary" type="submit">
                      Cotiza en línea
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

      <div className="fancy-feature-thirtyEight pt-50 pb-50">
        <div className="container">
        <Tabs>
          <TabList className="react-tabs__tab-list">
            <Tab>
              <h4>
                Cobertura SPLIT
              </h4> 
            </Tab>
            <Tab>
              <h4>
                Cobertura LUC
              </h4>
            </Tab>
          </TabList>

          <TabPanel>
            <h2 className="pb-30">Cobertura SPLIT (Dividida)</h2>
            <p className="tx-dark fs-5">
              Es una cobertura SPLIT de Responsabilidad Civil o daños a terceros, viene dividida para lesiones corporales, accidentes y daños materiales.
            </p>
            <div className="row">
              <CoberturasAuto />
            </div>
          </TabPanel>
          <TabPanel>
            <h2 className="pb-30">Cobertura LUC 100,000 (Combinada)</h2>
            <div className="row">
              <div className="col-lg-6">
                <div className="block-style-seven" data-aos="fade-right">
                  <ul className="style-none list-item">
                    <li className="fs-5">
                      Es una cobertura de Responsabilidad Civil o daños a terceros con Límite Único Combinado (LUC), por evento en daños a bienes y personas.
                    </li>
                    <li className="fs-5">
                      Esta cobertura puede utilizar hasta $100,000 USD de manera libre de limitantes en lesiones corporales o daños a bienes materiales.
                    </li>
                    <li className="fs-5">
                      Aplica para cualquier estado de ingreso a USA que selecciones.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
        </div>
        {/* /.container */}
      </div>

      <div class="feedback-section-eleven position-relative mt-50 pt-50 pb-70 lg-pb-50 beneficios-slider" data-aos="fade-up">
        <div className="container">
          <h2 className="tx-dark mt-100 mb-50 lg-mt-50 text-center">
            Beneficios
          </h2>
        </div>
        <div className="inner-content">
          <div className="slider-wrapper">
            <div className="feedback_slider_seven">
              <BeneficiosAuto />
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>

      <div className="fancy-feature-thirtyEight pt-100 pb-50 bg-gray">
        <div className="container">
          <AsistenciaPlus />
        </div>
        {/* /.container */}
      </div>

      <div className="fancy-feature-thirtyEight pt-60 pb-50">
        <div className="container">
          <h2 className="tx-dark mt-100 mb-50 lg-mt-50 text-center" data-aos="fade-up">
            Preguntas Frecuentes
          </h2>
          <FaqAuto />
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

export default AutosUSA;
