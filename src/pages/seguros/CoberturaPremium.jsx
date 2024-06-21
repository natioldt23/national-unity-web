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
import beneficiosCamion from "../../data/beneficios-camion";
import beneficiosPremium from "@/data/beneficios-cobertura-premium";
import FaqPremium from "./FaqPremium";

const CoberturaPremium = () => {

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
                  Cobertura Premium
                </h2>
                <p className="tx-dark text-lg pt-20">
                  Incrementa el monto de tus coberturas
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
            <div className="col-xxl-6 col-lg-6 d-flex align-items-center" data-aos="fade-left">
            <img
              src="/images/icon/logo-cobertura-premium.svg"
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

      <div className="feedback-section-eleven position-relative mt-0 pt-70 lg-pt-50 pb-70 bg-gray lg-pb-50 beneficios-slider" data-aos="fade-up">
        <div className="container d-flex flex-column align-items-center">
          <img src="/images/icon/logo-cobertura-premium.svg" alt="" width={300}/>
          <p className=" text-lg tx-dark mt-100 mb-50 lg-mt-50 text-center">
            El complemento perfecto, para quien ya cuenta con una póliza turista de cobertura primaria.
          </p>
        </div>
        <div>
          <div className="slider-wrapper">
            <div className="feedback_slider_seven beneficios-slide d-flex flex-column flex-lg-row align-items-center">
            {beneficiosPremium.slice(0, 4).map((item) => (
              <div className="item col-12 col-lg-4" key={item.id}>
                <div className="feedback-block-eleven beneficios-item-premium">
                  <div className="top-header d-flex align-items-center justify-content-between">
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <h3 className="tx-dark m0">{item.title}</h3>
                        <img
                        src={item.image}
                        alt="tesimonial avatar"
                        width={90}
                      />
                    </div>
                  </div>
                  <p className="tx-dark m-0 p-0">{item.text1}</p>
                  <p className="tx-dark m-0 p-0">{item.text2}</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="cost fw-500 tx-dark fs-20">
                      {item.author}
                      <span className="opacity-50 fw-normal">{item.location}</span>
                    </div>
                    
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>

      <div className="fancy-feature-thirtyEight pt-60 pb-50">
        <div className="container">
          <h2 className="tx-dark mt-100 mb-50 lg-mt-50 text-center" data-aos="fade-up">
            Preguntas Frecuentes
          </h2>
          <FaqPremium />
        </div>
        {/* /.container */}
      </div>
      
      <DefaultFooter />
    </>
  );
};

export default CoberturaPremium;
