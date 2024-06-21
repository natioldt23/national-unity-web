import Seo from "../../components/common/Seo";
import BlockContact from "../../components/contact/BlockContact";
import ContactForm from "../../components/contact/ContactForm";
import Map from "../../components/contact/Map";
import DefaultFooter from "../../components/footer/DefaultFooter";
import DefaulHeader from "../../components/header/DefaulHeader";
import { useTranslation } from "react-i18next";

const ContactV1 = () => {
  const { t } = useTranslation()

  const contacto = t("contacto")

  return (
    <>
      <Seo pageTitle="Contact" />
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
      <div className="fancy-feature-fiftyOne position-relative mt-250 lg-mt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text-center m-auto" data-aos="fade-up">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative d-inline-block">
                  {contacto.contactoEtiqueta}
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  {contacto.contactoTitle}
                </h2>
                <div 
                  className="col justify-content-center text-center"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <p className="mb-0">
                    {contacto.contactoDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <div className="contact-section-one mt-60 lg-mt-30">
        <div className="container">
          <div className="row">
            <BlockContact />
          </div>
        </div>
        {/* End .container */}

        {/*<div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-9 m-auto">
              <h2
                className="tx-dark text-center mt-100 mb-80 lg-mt-40 lg-mb-40"
                data-aos="fade-up"
              >
                Any question? Send us message.
              </h2>
            </div>
            <div className="col-xl-11 m-auto">
              <ContactForm />
            </div>
          </div>
        </div>
        <Map />*/}
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

export default ContactV1;
