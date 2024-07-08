import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import 'react-tabs/style/react-tabs.css';
import FaqPremium from "./FaqPremium";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "@/App";
import React, { useState, useContext } from "react";
import Modal from "react-modal";

// Estilos del modal
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    transition: '0.3s ease-in-out',
    borderRadius: '7px',
    fontFamily: 'gordita',
    transition: 'opacity 300ms ease-in-out, transform 300ms ease-in-out'
  }
};

const CoberturaPremium = () => {
  const { lang } = useContext(LanguageContext)
  const { t } = useTranslation()
  const premium = t("premium")

  const beneficiosPremium = [
    {
      id: 1,
      title: "$300,000 usd",
      rating: 5,
      text1: "Incrementa desde 100 mil, 200 mil y hasta 300 mil USD para cobertura de responsabilidad civil.",
      author: " ",
      location: "",
      image: "/images/icon/escudo_auto_NU.svg",
    },
    {
      id: 2,
      title: "$15,000 usd",
      rating: 5,
      text1: "Obtén esta cobertura para gastos médicos.",
      author: "",
      location: "",
      image: "/images/icon/gastos_medicos.svg",
    },
    {
      id: 3,
      title: "Asistencia Plus",
      rating: 5,
      text1: "Gastos médicos, renta de auto por robo, avería o accidente, y más.",
      author: "",
      location: "",
      image: "/images/icon/asistencia_plus.svg",
    },
    /*{
      id: 4,
      title: "Very Solid!!",
      rating: 5,
      text: "They not only understand what I say but read between the lines and also give me ideas of my own.",
      author: "Rashed Kabir",
      location: "Claifornia",
      image: "/images/media/img_55.jpg",
    },*/
  ];

  const beneficiosPremiumEng = [
    {
      id: 1,
      title: "$300,000 USD",
      rating: 5,
      text1: "Increases from 100,000, 200,000 to 300,000 USD for liability coverage.",
      author: " ",
      location: "",
      image: "/images/icon/escudo_auto_NU.svg",
    },
    {
      id: 2,
      title: "$15,000 USD",
      rating: 5,
      text1: "Get this coverage for medical expenses.",
      author: "",
      location: "",
      image: "/images/icon/gastos_medicos.svg",
    },
    {
      id: 3,
      title: "Plus Assistance",
      rating: 5,
      text1: "Medical expenses, car rental due to theft, breakdown or accident, and more.",
      author: "",
      location: "",
      image: "/images/icon/asistencia_plus.svg",
    },
    /*{
      id: 4,
      title: "Very Solid!!",
      rating: 5,
      text: "They not only understand what I say but read between the lines and also give me ideas of my own.",
      author: "Rashed Kabir",
      location: "Claifornia",
      image: "/images/media/img_55.jpg",
    },*/
  ];
  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    empresa: '',
  });

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => {
    setModalIsOpen(false);
    // Resetear el formulario después de cerrar el modal
    setFormData({
      nombre: '',
      telefono: '',
      email: '',
      empresa: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://www.nuicservices.com/phpWeb/send-mail-premium.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const result = await response.text();
      console.log(result);
      // Cerrar el modal después de enviar el formulario
      closeModal();
    } catch (error) {
      console.error('Error:', error);
      closeModal();
    }
  };


  return (
    <>
      <Seo pageTitle="Service V1" />
      <DefaulHeader />
      <div className="fancy-feature-fiftyOne d-flex align-items-center seguros-hero position-relative mt-150 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-6" data-aos="fade-right">
              <div className="title-style-five mb-45 md-mb-10">
                <div className="sc-title-two fst-italic position-relative">
                  {premium.premiumEtiqueta}
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  {premium.premiumTitle}
                </h2>
                <p className="tx-dark text-hero-banner pt-20">
                  {premium.premiumDesc}
                </p>
                <div>
                  <button 
                    className="fw-500 text-white tran3s button-primary" 
                    type="submit"
                    onClick={openModal}
                  >
                    {premium.premiumCotiza}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-6 d-flex align-items-center pt-30 pt-lg-0" data-aos="fade-left">
              <img
                src="/images/icon/logo-cobertura-premium.svg"
                alt="icon"
                className="lazy-img seguro-camion-hero"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Cotiza tu seguro"
        closeTimeoutMS={300}
      >
        <h3 className="form-title">{premium.premiumModalTitle}</h3>
        <p className="form-desc">{premium.premiumModalDesc}</p>
        <form className="form-modal" onSubmit={handleSubmit}>
          <div className="form-modal-name">
            <label>{premium.premiumModalName}</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-modal-tel">
            <label>{premium.premiumModalTel}</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-modal-email">
            <label>{premium.premiumModalEmail}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-modal-empresa">
            <label>{premium.premiumModalEmpresa}</label>
            <input
              type="text"
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-modal-buttons">
            <button className="form-modal-close" onClick={closeModal}>
              {premium.premiumModalCerrar}
            </button>
            <button className="form-modal-enviar" type="submit">
              {premium.premiumModalEnviar}
            </button>
          </div>
        </form>
      </Modal>

      <div className="feedback-section-eleven position-relative mt-0 pt-70 lg-pt-50 pb-70 bg-gray lg-pb-50 beneficios-slider" data-aos="fade-up">
        <div className="container d-flex flex-column align-items-center">
          <img src="/images/icon/logo-cobertura-premium.svg" alt="" width={300}/>
          <p className=" text-lg tx-dark mt-100 mb-50 lg-mt-50 text-center">
            {premium.premiumItems}
          </p>
        </div>
        <div>
          <div className="slider-wrapper">
            <div className="feedback_slider_seven beneficios-slide d-flex flex-column flex-lg-row align-items-center">
            {
              lang == 'es' ?
              beneficiosPremium.slice(0, 4).map((item) => (
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
                </div>
              </div>
              )) : 
              beneficiosPremiumEng.slice(0, 4).map((item) => (
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
                  </div>
                </div>
              ))
            }
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>

      <div className="fancy-feature-thirtyEight pt-60 pb-50">
        <div className="container">
          <h2 className="tx-dark mt-100 mb-50 lg-mt-50 text-center" data-aos="fade-up">
            {premium.premiumFaq}
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
