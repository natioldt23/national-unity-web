import React, { useState, useContext } from "react";
import Modal from "react-modal";
import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import 'react-tabs/style/react-tabs.css';
import TruckerPlus from "./TruckerPlus";
import FaqCamion from "./FaqCamion";
import { beneficiosCamion, beneficiosCamionEng } from "../../data/beneficios-camion";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "@/App";

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

const CamionUSA = () => {
  const { t } = useTranslation();
  const camion = t('camion');
  const { lang } = useContext(LanguageContext);

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
      const response = await fetch('./phpWeb/send-mail.php', {
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
      <div className="fancy-feature-fiftyOne d-flex align-items-center seguros-hero position-relative mt-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-6" data-aos="fade-right">
              <div className="title-style-five mb-45 md-mb-10">
                <div className="sc-title-two fst-italic position-relative">
                  {camion.camionEtiqueta}
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  {camion.camionTitle}
                </h2>
                <p className="tx-dark text-hero-banner pt-20">
                  {camion.camionDesc}
                </p>
                <div>
                  <button
                    className="fw-500 text-white tran3s button-primary"
                    type="button"
                    onClick={openModal}
                  >
                    {camion.camionCotiza}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-6 d-flex align-items-center" data-aos="fade-left">
              <img
                src="/images/assets/seguro-camion-hero.webp"
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
        <h3 className="form-title">{camion.camionModalTitle}</h3>
        <p className="form-desc">{camion.camionModalDesc}</p>
        <form className="form-modal" onSubmit={handleSubmit}>
          <div className="form-modal-name">
            <label>{camion.camionModalName}</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-modal-tel">
            <label>{camion.camionModalTel}</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-modal-email">
            <label>{camion.camionModalEmail}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-modal-empresa">
            <label>{camion.camionModalEmpresa}</label>
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
              {camion.camionModalCerrar}
            </button>
            <button className="form-modal-enviar" type="submit">
              {camion.camionModalEnviar}
            </button>
          </div>
        </form>
      </Modal>

      <div className="feedback-section-eleven position-relative mt-0 pb-70 lg-pb-50 beneficios-slider" data-aos="fade-up">
        <div className="container">
          <h2 className="tx-dark mt-100 mb-50 lg-mt-50 text-center">
            {camion.camionBeneficios}
          </h2>
        </div>
        <div>
          <div className="slider-wrapper">
            <div className="feedback_slider_seven beneficios-slide d-flex flex-column flex-lg-row align-items-center">
              {lang === 'es' ? 
                beneficiosCamion.slice(0, 4).map((item) => (
                  <div className="item col-12 col-lg-4" key={item.id}>
                    <div className="feedback-block-eleven beneficios-item-camion">
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
                      <p className="tx-dark m-0 p-0" style={{fontSize: '20px'}}>{item.text1}</p>
                      <p className="tx-dark m-0 p-0" style={{fontSize: '20px'}}>{item.text2}</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="cost fw-500 tx-dark fs-20">
                          {item.author}
                          <span className="opacity-50 fw-normal">{item.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )) : 
                beneficiosCamionEng.slice(0, 4).map((item) => (
                  <div className="item col-12 col-lg-4" key={item.id}>
                    <div className="feedback-block-eleven beneficios-item-camion">
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
                      <p className="tx-dark m-0 p-0" style={{fontSize: '20px'}}>{item.text1}</p>
                      <p className="tx-dark m-0 p-0" style={{fontSize: '20px'}}>{item.text2}</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="cost fw-500 tx-dark fs-20">
                          {item.author}
                          <span className="opacity-50 fw-normal">{item.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      <div className="fancy-feature-thirtyEight pt-100 pb-50 bg-gray">
        <div className="container">
          <TruckerPlus />
        </div>
      </div>

      <div className="fancy-feature-thirtyEight pt-60 pb-50">
        <div className="container">
          <h2 className="tx-dark mt-100 mb-50 lg-mt-50 text-center" data-aos="fade-up">
            {camion.camionFaq}
          </h2>
          <FaqCamion />
        </div>
      </div>
      
      <DefaultFooter />
    </>
  );
};

export default CamionUSA;
