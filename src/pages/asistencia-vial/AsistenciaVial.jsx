import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import FaqAsistencia from "../../components/services/FaqAsistencia";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "@/App";
import { useContext } from "react";


const AsistenciaVial = () => {
  const { t } = useTranslation()
  const { lang } = useContext(LanguageContext)
  const asistencia = t("asistencia")

  const cardsData = [
    {
      id: 1,
      cardNo: "card-one",
      src: "/images/icon/LIQUIDOS_NU-01.svg",
    },
    {
      id: 2,
      cardNo: "card-two",
      src: "/images/icon/LLANTA_NU-01.svg"
    },
    {
      id: 3,
      cardNo: "card-three",
      src: "/images/icon/PILA_NU-01.svg"
    },
    /*{
      id: 4,
      title: "Líder",
      cardNo: "card-one",
      subtitle: "En Responsabilidad civil",
      src: "https://www.nationalunity.com/wp-content/uploads/2023/10/ATASCAMIENTO_NU-01.svg"
    },*/
  ];

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
                  {asistencia.asistenciaEtiqueta}
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  {asistencia.asistenciaTitle}
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
                  {asistencia.asistenciaInfo}
                </p>
                <ul className="style-none list-item md-mb-40 tx-dark">
                  <li>{asistencia.asistenciaInfoOne}</li>
                  <li>{asistencia.asistenciaInfoTwo}</li>
                  <li>{asistencia.asistenciaInfoThree}</li>
                  <li>{asistencia.asistenciaInfoFour}</li>
                </ul>

                <p className="text-lg tx-dark">
                  {asistencia.asistenciaTel}
                </p>

                <ul className="style-none list-item md-mb-40 tx-dark">
                  <li>
                    {asistencia.asistenciaTelOne}
                    <a className="asistenciaVial-link" href="tel:18003085513">1-800-308-5513</a>
                  </li>
                  <li>
                    {asistencia.asistenciaTelTwo}
                    <a className="asistenciaVial-link" href="tel:2104799585">210-479-9585</a>
                  </li>
                  <li>
                    {asistencia.asistenciaTelThree}
                    <a className="asistenciaVial-link" href="tel:0012104799585" target="_blank">001-210-479-9585</a>
                  </li>
                  <li>
                    {asistencia.asistenciaWhatsapp} 
                    <a href="https://api.whatsapp.com/send/?phone=5215587196412&text=Quiero+solicitar+una+ASISTENCIA+para+NATIONAL+UNITY+ROADSIDE+ASSISTANCE&type=&&type=" target="_blank" className="asistenciaVial-link">
                       Whatsapp
                    </a>
                  </li>
                </ul>
              </div>
              {/* /.service-details-meta */}
            </div>
            {/* End .col-xl-9 */}

            <div className="col-xl-3 col-lg-4 asistencia-icons" data-aos="fade-up">
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
				Feature Section Thirty Eight
			============================================== 
			*/}
      <div className="fancy-feature-thirtyEight mt-180 lg-mt-120">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-lg-5">
              <div className="block-style-seven" data-aos="fade-right">
                <div className="title-style-six">
                  <div className="sc-title-two text-uppercase">
                    {asistencia.asistenciaEtiqueta}
                  </div>
                  <h2 className="main-title fw-500 tx-dark">
                    {asistencia.asistenciaServicios}
                  </h2>
                </div>
                {/* /.title-style-ten */}
                <p className="fs-20 pt-10 pb-30 lg-pb-20">
                  {asistencia.asistenciaServiciosDesc}
                </p>
                <img
                  src="images/media/road-assistance.webp"
                  alt=""
                  className="lazy-img screen-two road-assistance"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                />
              </div>
              {/* /.block-style-seven */}
            </div>
            {/* End .col-lg-5 */}
            <div className="col-lg-6 ms-auto" data-aos="fade-left">
              <FaqAsistencia />
            </div>
          </div>
        </div>
        {/* /.container */}

        {/*<div className="partner-section-six position-relative mt-130 lg-mt-80">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <h3 className="title tx-dark text-center text-lg-start md-pb-10 m0">
                  <span>100+</span> Trusted Partners
                </h3>
              </div>
              <div className="col-xl-6 col-lg-7 ms-auto">
                <div className="logo-wrapper text-center d-flex justify-content-center justify-content-lg-between flex-wrap">
                  <Partners />
                </div>
              </div>
            </div>
          </div>
        </div>*/}
      </div>
      {/* /.partner-section-six */}

      {/* 
			=============================================
				Feature Section Thirty Seven
			============================================== 
			
      <div className="fancy-feature-thirtySeven mt-225 lg-mt-120">
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
      </div>
      /.fancy-feature-thirtySeven */}

      {/*
			=====================================================
				Feedback Section Eleven
			=====================================================
			
      <div
        className="feedback-section-eleven position-relative mt-50 pt-100 pb-70 lg-pt-70 lg-pb-50"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="title-style-one text-center mb-50 lg-mb-20">
            <h2 className="main-title fw-500 tx-dark m0">Client Feedback</h2>
          </div>
        </div>
        <div className="inner-content">
          <div className="slider-wrapper">
            <div className="feedback_slider_seven">
              <Testimonial />
            </div>
          </div>
        </div>
      </div>
      /.feedback-section-eleven */}

      {/* 
			=============================================
				Feature Section Thirty Eight
			============================================== 
			*/}
      {/*<div className="fancy-feature-thirtyEight mt-180 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="block-style-seven" data-aos="fade-right">
                <div className="title-style-six">
                  <div className="sc-title-two text-uppercase">SOLUTION</div>
                  <h2 className="main-title fw-500 tx-dark">
                    Digital solutions for businss.
                  </h2>
                </div>
                <p className="fs-20 pt-10 pb-30 lg-pb-20">
                  Do you have more question about our solution? Just send us a
                  message for help
                </p>
                <div className="btn-eighteen position-relative d-inline-block tx-dark">
                  <Link to="/page-menu/about-us-v1" className="fw-500 tran3s">
                    More About solution
                    <i className="fa-solid fa-angle-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ms-auto" data-aos="fade-left">
              <Faq />
            </div>
          </div>
        </div>

        <div className="partner-section-six position-relative mt-130 lg-mt-80">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <h3 className="title tx-dark text-center text-lg-start md-pb-10 m0">
                  <span>100+</span> Trusted Partners
                </h3>
              </div>
              <div className="col-xl-6 col-lg-7 ms-auto">
                <div className="logo-wrapper text-center d-flex justify-content-center justify-content-lg-between flex-wrap">
                  <Partners />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.partner-section-six */}

      {/*
			=====================================================
				Fancy Short Banner Sixteen
			=====================================================
			*/}
      <div
        className="fancy-short-banner-sixteen mt-130 lg-mt-80"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40 warning">
            <div className="row">
              <div className="col-xl-10 col-md-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <h4 className="fw-500 text-white mb-2">
                        {asistencia.asistenciaImportante}
                      </h4>
                      <div className="sc-title fs-18 pb-10 text-white">
                        {asistencia.asistenciaImportanteDesc}
                      </div>
                      <div className="text-white fw-500">
                        <span>
                          {asistencia.asistenciaImportanteSpan}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* End .col-6 */}

                  <div className="col-lg-4 d-flex ms-auto justify-content-center align-items-center text-lg-end">
                    <img src="/images/assets/warning.webp"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>
      {/* /.fancy-short-banner-sixteen */}

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default AsistenciaVial;
