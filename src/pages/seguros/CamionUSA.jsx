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
import BeneficiosCamion from "./BeneficiosCamion";

const CamionUSA = () => {

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
            <div className="col-xxl-6 col-lg-6" data-aos="fade-right">
              <div className="title-style-five mb-45 md-mb-10">
                <div className="sc-title-two fst-italic position-relative">
                  Seguros
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  Seguro de Camión
                </h2>
                <p className="tx-dark text-lg pt-20">
                  Cobertura para camiones, diseñada para cubrir la responsabilidad por daños ocasionados a 
                  terceros en bienes y personas mientras se encuentre circulando en los Estados Unidos de 
                  América.
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
            <div className="col-xxl-6 col-lg-6 d-flex align-items-center" data-aos="fade-right">
            <img
              src="/images/assets/seguro-camion-hero.png"
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

      <div class="feedback-section-eleven position-relative mt-50 pt-50 pb-70 lg-pb-50 beneficios-slider" data-aos="fade-up">
        <div className="container">
          <h2 className="tx-dark mt-100 mb-50 lg-mt-50 text-center">
            Beneficios
          </h2>
        </div>
        <div className="inner-content">
          <div className="slider-wrapper">
            <div className="feedback_slider_seven">
              <BeneficiosCamion />
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
            Preguntas Frecuentes
          </h2>
          <FaqAuto />
        </div>
        {/* /.container */}
      </div>
      {/* 
			=============================================
				Feature Section Thirty Seven
			============================================== 
			*/}
      {/*<div className="fancy-feature-thirtySeven mt-225 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="block-style-four pe-xxl-5 me-xxl-4 md-mb-70"
                data-aos="fade-right"
              >
                <div className="title-style-six">
                  <div className="sc-title-two text-uppercase">WHY US</div>
                  <h2 className="main-title fw-500 tx-dark">
                    Everything with Marketing.
                  </h2>
                </div>
                <p className="fs-20 pt-20 pb-30 lg-pt-10 lg-pb-20">
                  Turn your business into a sales machine today with lorem
                  Things go wrong have questions.
                </p>
                <ul className="style-none list-item">
                  {features.map((feature, index) => (
                    <li key={index}>{feature.text}</li>
                  ))}
                </ul>
                <div className="d-inline-flex align-items-center mt-35 lg-mt-20">
                  <ul className="d-flex style-none rating">{starRating}</ul>
                  <div className="fs-20 ms-2">
                    <strong className="fw-500 tx-dark">4.8</strong>
                    <span className="tx-dark fs-16 opacity-50">
                      (30k Reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-5 col-lg-6 ms-auto">
              <Block />
            </div>
          </div>
        </div>
      </div>*/}
      {/* /.fancy-feature-thirtySeven */}

      <div className="service-details position-relative mt-50 mb-170 md-mt-50 lg-mb-120 asistencia-feature">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8" data-aos="fade-right">
              <div className="service-details-meta">
                <p className="text-lg tx-dark">
                  Se recomienda tener a la mano la siguiente información antes de solicitar un servicio de 
                  asistencia vial:
                </p>
                <ul className="style-none list-item md-mb-40 tx-dark">
                  <li>Número de póliza completo</li>
                  <li>Teléfono donde contactarlo</li>
                  <li>Correo electrónico</li>
                  <li>Correo electrónico</li>
                </ul>

                <p className="text-lg tx-dark">
                  En caso de que usted requiera Asistencia Vial dentro de los Estados Unidos de América deberás
                   llamar al:
                </p>

                <ul className="style-none list-item md-mb-40 tx-dark">
                  <li>
                    Sin costo desde USA:
                    <a href="tel:18003085513">1-800-308-5513</a>
                  </li>
                  <li>
                    Larga distancia dentro de USA:
                    <a href="tel:2104799585">210-479-9585</a>
                  </li>
                  <li>
                    Con Costo desde México:
                    <a href="tel:0012104799585">001-210-479-9585</a>
                  </li>
                </ul>
              </div>
              {/* /.service-details-meta */}
            </div>
            {/* End .col-xl-9 */}

            <div className="col-xl-3 col-lg-4" data-aos="fade-up">
              <div className="img-holder d-lg-inline-flex position-relative zn2 flex-column gap-4 w-100">

                {cardsData.map((item) => (
                  <div
                    className={`card-style ${item.cardNo} d-flex justify-content-center`}
                    key={item.id}
                  >
                    <div className="">
                      <img src={item.src} alt="" width={60} />
                    </div>
                  </div>
                ))}
                {/* /.card */}
              </div>
            </div>

          </div>
        </div>
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

export default CamionUSA;
