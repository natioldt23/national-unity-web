import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import Steps from "@/components/reportarAccidente/Steps";
import { useTranslation } from "react-i18next";

const ReportarAccidente = () => {
  const { t } = useTranslation()
  const accidente = t("accidente")

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
      <div className="fancy-feature-fiftyOne position-relative accidente-hero">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-lg-6" data-aos="fade-right">
              <div className="title-style-five mb-30 md-mb-10">
                <div className="sc-title-two fst-italic position-relative">
                  {accidente.accidenteEtiqueta}
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  {accidente.accidenteTitle}
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

      <div className="service-details position-relative mt-25 lg-mb-120 asistencia-feature">
        <div className="container">
          <div className="row align-items-start justify-content-center">
            <div className="col-xl-9 col-lg-8" data-aos="fade-right">
              <div className="service-details-meta">
                <p className="text-hero-banner tx-dark pt-0">
                  {accidente.accidenteCTA}
                </p>
                <a href="/national/reporte_accidente/package/html/main/" target="blank">
                  <button className="fw-500 text-white tran3s button-primary" type="submit">
                    {accidente.accidenteTitle}
                  </button>
                </a>
                <p className="text-hero-banner tx-dark pt-30">
                  {accidente.accidenteDescOne}
                </p>

                <p className="text-hero-banner tx-dark">
                  {accidente.accidenteDescTwo}
                </p>

              </div>
              {/* /.service-details-meta */}
            </div>
            {/* End .col-xl-9 */}
            <div className="col-xl-3 col-lg-4 d-flex justify-content-center align-items-center" data-aos="fade-left">
              <img src="/images/assets/reportar-accidente.webp" className="reportar-accidente-img"/>
            </div>

          </div>
        </div>
      </div>

      <div
        className="fancy-short-banner-sixteen mt-40 lg-mt-40"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="pt-65 pb-50 lg-pt-40 lg-pb-40">
            <div className="row">
              <div className="col-md-11 m-auto">

                <article className="blog-meta-three mb-80 lg-mb-40 text-style aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                  <div className="post-data mt-40 lg-mt-30">
                      <h4 className="xl tx-dark mt-10">
                        {accidente.accidenteImportante}
                      </h4>
                      <div className="tx-dark mb-25 lg-mb-20">
                        {accidente.accidenteImportanteDesc}
                      </div>
                  </div>
                </article>
              </div>

            </div>
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>

      <div className="fancy-feature-thirtySix mt-60 lg-mt-140">
        <div className="container">
          <div className="wrapper position-relative">
            <div className="row">
              <div className="col-lg-8">
                <div
                  className="title-style-one text-center text-lg-start mb-40 md-mb-20"
                  data-aos="fade-right"
                >
                  <h2 className="main-title fw-500 tx-dark m0">
                    {accidente.accidentePasos}
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <Steps />
            </div>
            {/* /.row */}

            {/*<div className="text-center md-mt-50">
              <Link
                to="/pages-menu/service-v1"
                className="btn-twentyTwo fw-500 tran3s"
                data-aos="fade-left"
              >
                Ver nuestros Servicios
              </Link>
            </div>*/}
            {/*<div className="row mt-50">
              <article className="blog-meta-three mb-80 lg-mb-40 text-style aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                <div className="post-data mt-40 lg-mt-30">
                  <a className="mt-10 mb-25 lg-mb-20" href="/blog/9">
                    <h4 className="tran3s blog-title xl tx-dark">
                    Recuerda mantener los siguientes datos a la mano para reportar correctamente cualquier siniestro:
                    </h4>
                    <ul className="list-item text-lg">
                      <li>Nombre del asegurado y del conductor afectado</li>
                      <li>Número de póliza completo (letras y números)</li>
                      <li>Número de contacto en México y Estados Unidos</li>
                      <li>Lugar y hora del accidente</li>
                      <li>Descripción de los hechos</li>
                    </ul>
                  </a>
                </div>
              </article>
            </div>*/}
          </div>
        </div>
        {/* /.container */}
      </div>

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
                  <div className="col-lg-10">
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <h4 className="fw-500 text-white mb-2">
                        {accidente.accidenteImportanteFooter}
                      </h4>
                      <div className="sc-title fs-18 pb-10 text-white">
                        <ul className="list-item text-start mt-3">
                          <li className="mb-2">
                            {accidente.accidenteImportanteFooter1}  
                          </li>                        
                          <li className="mb-2">
                            {accidente.accidenteImportanteFooter2}
                          </li>
                          <li className="mb-2">
                            {accidente.accidenteImportanteFooter3}
                          </li>
                          <li className="mb-2">
                            {accidente.accidenteImportanteFooter4}
                          </li>
                          <li className="mb-2">
                            {accidente.accidenteImportanteFooter5}
                          </li>
                        </ul>
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

export default ReportarAccidente;
