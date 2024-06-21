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
import pasosAutoRenta from "../../data/pasos-auto-renta";
import FaqAutoRenta from "./FaqAutoRenta";
import CoberturaAutoRentado from "./CoberturaAutoRentado";

const AutoRenta = () => {

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
      <div className="fancy-feature-fiftyOne d-flex align-items-center lg-vh-100 position-relative mt-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-6" data-aos="fade-right">
              <div className="title-style-five mb-45 md-mb-10">
                <div className="sc-title-two fst-italic position-relative">
                  Seguros
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  Seguro para Autos de Renta en USA
                </h2>
                <p className="tx-dark text-lg pt-20">
                  Ahorra hasta un 40% comprando con nosotros tu seguro para daños a terceros en un auto 
                  rentado en USA.
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
          <h2 className="tx-dark mt-100 mb-50 lg-mt-50 text-center">
            Cómo usar nuestro seguro auto de renta en USA
          </h2>
          <p className="tx-dark text-lg text-center">
            A continuación te indicamos los pasos a seguir para comprar con éxito tu seguro para el auto que rentarás.
          </p>
        </div>
        <div>
          <div className="slider-wrapper">
            <div className="feedback_slider_seven beneficios-slide d-flex flex-column flex-lg-row align-items-center">
            {pasosAutoRenta.slice(0, 4).map((item) => (
              <div className="item col-12 col-lg-4" key={item.id}>
                <div className="feedback-block-eleven beneficios-item-renta">
                  <div className="top-header d-flex align-items-center justify-content-between">
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <h3 className="tx-dark m0 pb-20">{item.title}</h3>
                    </div>
                  </div>
                  <p className="tx-dark m-0 p-0">{item.text1}</p>
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
        <div className="container">
          <h4 className="tx-dark mt-100 mb-50 lg-mt-50 text-center">
            ¡Listo!
          </h4>
          <p className="tx-dark text-lg text-center">
            Ya ahorraste hasta un 40% en la prima pagada.
          </p>
          <div  className="d-flex justify-content-center pt-20">
            <a href="https://www.nuagentesonline.com/agents/676164158d24efd000af9799d82f8b36/" target="blank">
              <button className="fw-500 text-white tran3s button-primary" type="submit">
                Cotiza en línea
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
                        Cobertura
                      </h4>
                      <div className="sc-title fs-18 pb-10 text-white">
                        <p>
                          Esta cobertura excede el límite requerido por todos los estados de USA, cubrimos $100,000 USD LUC por evento en daños a terceros en sus bienes y/o personas.
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
            Preguntas Frecuentes
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
