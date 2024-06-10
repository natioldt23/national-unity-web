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

const TyC = () => {
  const features = [
    { text: "Amazing communication." },
    { text: "Best trending designing experience." },
    { text: "Email & Live chat." },
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
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-lg-6" data-aos="fade-right">
              <div className="title-style-five mb-45 md-mb-10">
                <div className="sc-title-two fst-italic position-relative">
                  Servicios
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  Términos y condiciones
                </h2>
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_172.svg"
          alt="icon"
          className="lazy-img shapes shape-two"
        />
      </div>
      {/* /.fancy-feature-fiftyOne */}

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
                  * Para las pólizas del producto larga estadía la Exclusión I.
                </p>

                <p className="text-lg tx-dark">
                  f) queda eliminada por medio del Endoso NU-PALT.
                </p>

                <div className="d-flex asistencia-buttons mt-50">
                  <a href="https://www.nuagentesonline.com/agents/676164158d24efd000af9799d82f8b36/" target="blank">
                    <button className="fw-500 text-white tran3s button-primary" type="submit">
                      Terms and Conditions
                    </button>
                  </a>

                  <a href="https://www.nationalunity.com/national/uc/code/activa.asp" target="blank">
                    <button className="fw-500 text-white tran3s button-primary" type="submit">
                      Términos y Condiciones
                    </button>
                  </a>
                </div>

              </div>
              {/* /.service-details-meta */}
            </div>

            <div className="col-xl-3 col-lg-4">
              <div className="d-flex asistencia-buttons flex-column">
                <a href="https://www.nuagentesonline.com/agents/676164158d24efd000af9799d82f8b36/" target="blank">
                  <button className="fw-500 text-white tran3s button-primary" type="submit">
                    Terms and Conditions
                  </button>
                </a>

                <a href="https://www.nationalunity.com/national/uc/code/activa.asp" target="blank">
                  <button className="fw-500 text-white tran3s button-primary" type="submit">
                    Términos y Condiciones
                  </button>
                </a>
              </div>
            </div>
            {/* End .col-xl-9 */}

          </div>
        </div>
      </div>

      {/*
			=====================================================
				Fancy Short Banner Sixteen
			=====================================================
			
      <div
        className="fancy-short-banner-sixteen mt-130 lg-mt-80"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
            <div className="row">
              <div className="col-xl-10 col-md-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <h2 className="main-title fw-500 text-white mb-2">
                        Importante
                      </h2>
                      <div className="sc-title fs-18 pb-10 text-white">
                        Toda cobertura hasta un máximo de $100.00 dólares, otorgando 1 servicio en pólizas 
                        de 1 a 179 días y 2 servicios en pólizas semestrales y anuales.
                      </div>
                      <div className="text-white fw-500">
                        <span>Servicio exclusivo dentro de los Estados Unidos.</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 d-flex ms-auto justify-content-center align-items-center text-lg-end">
                    <img src="/images/assets/warning.png"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       /.fancy-short-banner-sixteen */}

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default TyC;
