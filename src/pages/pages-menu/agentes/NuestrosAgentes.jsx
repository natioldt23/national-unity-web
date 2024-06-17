import Seo from "../../../components/common/Seo";
import DefaulHeader from "../../../components/header/DefaulHeader";
import DefaultFooter from "../../../components/footer/DefaultFooter";
import Service1 from "../../../components/services/Service1";
import Block from "../../../components/services/Block";
import Testimonial from "../../../components/home-page/home-3/Testimonial";
import Faq from "../../../components/services/Faq";
import FaqAsistencia from "../../../components/services/FaqAsistencia";
import Partners from "../../../components/services/Partners";
import { Link } from "react-router-dom";
import AsistenciaPlus from "../../seguros/AsistenciaPlus";
import FaqAuto from "../../seguros/./FaqAuto";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CoberturasAuto from "../../seguros/./CoberturasAuto";
import beneficiosAuto from "../../../data/beneficios-auto";


const NuestrosAgentes = () => {

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
                <h2 className="main-title fw-500 tx-dark">
                  Selecciona un agente
                </h2>
                <p className="tx-dark text-lg pt-20">
                  A través de nuestros agentes te brindamos un servicio cercano y personalizado.
                </p>
                <p className="tx-dark text-lg pt-20">
                  Selecciona el agente que más prefieras, todos te ofrecerán los beneficios completos de la cobertura y servicio que elijas en tu cotización.
                </p>
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
        <div className="container" data-aos="fade-up">
        <Tabs>
          <TabList className="react-tabs__tab-list">
            <Tab>
              <p className="tx-light">
                Cobertura SPLIT
              </p> 
            </Tab>
            <Tab>
              <p>
                Cobertura LUC
              </p>
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
        <div>
          <div className="slider-wrapper">
            <div className="feedback_slider_seven beneficios-slider d-flex align-items-center flex-column flex-lg-row">
            {beneficiosAuto.slice(0, 4).map((item) => (
              <div className="item col-lg-4" key={item.id}>
                <div className="feedback-block-eleven beneficios-item">
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
                  <p className="tx-dark m-0 p-0" style={{fontSize: "23px",}}>{item.text1}</p>
                  <p className="tx-dark m-0 p-0" style={{fontSize: "23px",}}>{item.text2}</p>
                  <p className="tx-dark m-0 p-0" style={{fontSize: "23px",}}>{item.text3}</p>
                  <p className="tx-dark m-0 p-0" style={{fontSize: "23px",}}>{item.text4}</p>
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

export default NuestrosAgentes;
