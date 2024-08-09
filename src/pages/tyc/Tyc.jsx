import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import { useTranslation } from "react-i18next";

const TyC = () => {
  const { t } = useTranslation()
  const tyc = t("tyc")

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
                  {tyc.tycEtiqueta}
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  {tyc.tycTitle}
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

      <div className="service-details position-relative mt-20 md-mt-20 asistencia-feature">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 d-flex align-items-center" data-aos="fade-right">
              <div className="service-details-meta">
                <p className="text-lg tx-dark">
                  {tyc.tycDesc1}
                </p>

                <p className="text-lg tx-dark">
                  {tyc.tycDesc2}
                </p>

                <div className="d-flex asistencia-buttons mt-50">
                  <a href="../F47C-202310.pdf" target="blank">
                    <button className="fw-500 text-white tran3s button-primary" type="submit">
                      Terms and Conditions
                    </button>
                  </a>

                  <a href="../F47C-es-202310.pdf" target="blank">
                    <button className="fw-500 text-white tran3s button-primary" type="submit">
                      Términos y Condiciones
                    </button>
                  </a>
                </div>

              </div>
              {/* /.service-details-meta */}
            </div>

            <div className="col-xl-3 col-lg-4 d-flex justify-content-center align-items-center md-pt-70 " data-aos="fade-left">
              <img src="/images/assets/tyc.webp" className="tyc-icon"/>
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
