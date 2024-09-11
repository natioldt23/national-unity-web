import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Modal from "react-modal";
import Swal from 'sweetalert2';
import { LanguageContext } from "@/App";
import { useContext } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";

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
    fontFamily: 'Gordita',
    transition: 'opacity 300ms ease-in-out, transform 600ms cubic-bezier(0.68, -0.55, 0.27, 1.55)',
    zIndex: '992',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 991,
  }
};

const Claims = () => {
  const { t } = useTranslation()
  const { lang } = useContext(LanguageContext)
  const claims = t("claims")

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [claimData, setClaimData] = useState(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [formData, setFormData] = useState({
    claimNum: 'NUIT',
    fecha_Siniestro: '',
    name: '',
    tel_cel: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'claimNum') {
      if (!value.startsWith('NUIT')) {
        setFormData({
          ...formData,
          [name]: 'NUIT'
        });
      } else {
        setFormData({
          ...formData,
          [name]: value
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const guardarDatos = async (data, tipo, evento) => {
    try {

      let bodyParams = {};

      if (evento === 1) {
        bodyParams = {
          No_Claim: data.No_Claim,
          No_Poliza: data.No_Poliza,
          Estatus: data.Estatus,
          Nombre_Ajustador: data.Nombre_Ajustador,
          Correo_Ajustador: data.Correo_Ajustador,
          Telefono_Ajustador: data.Telefono_Ajustador,
          Tipo_Consulta: tipo, 
          Fecha_Siniestro: '',
          Nombre: null,
          Telefono_Celular: null,
          Correo: null
        };
      } else if (evento === 0) {
        bodyParams = {
          No_Claim: data.claimNum,
          No_Poliza: null,
          Estatus: null,
          Nombre_Ajustador: null,
          Correo_Ajustador: null,
          Telefono_Ajustador: null,
          Tipo_Consulta: tipo, 
          Fecha_Siniestro: data.fecha_Siniestro,
          Nombre: data.name,
          Telefono_Celular: data.tel_cel,
          Correo: data.email
        };
      }

      const response = await fetch('/phpWeb/guardar_encuesta_daily_claims.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(bodyParams).toString(),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.text(); 
      console.log('Datos guardados:', result);

    } catch (error) {
      console.error('Error al guardar los datos:', error.message);
      //alert('Error al guardar los datos: ' + error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/phpWeb/buscar_encuesta_daily_claims.php', { // Ruta al script PHP
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const result = await response.json();
      if (result.length === 0) {
        guardarDatos(formData, 'Error', 0)
        //console.log(formData)
        if(lang == 'es'){
          Swal.fire({
            title: 'Datos no encontrados',
            text: 'No se han encontrado datos que coincidan con la información ingresada. Póngase en contacto con nuestro servicio al cliente.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }else {
          Swal.fire({
            title: 'Data not found',
            text: 'No data was found that matches the information entered. Please contact our customer service.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }        
      } else {
        setClaimData(result[0]);
        guardarDatos(result[0], 'consulta', 1);
        openModal();
      }
  
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const handleModalSubmit = async () => {
    try {

      if (claimData) {
        await guardarDatos(claimData, 'email', 1);
      }

        const response = await fetch('/phpWeb/send-mail-ajustador.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                claimNum: formData.claimNum,
                correoAjustador: 'ecarrizales@nationalunity.com.mx',
                contactName: formData.name,
                tel_cel: formData.tel_cel,
                email: formData.email,
            }).toString(),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();

        if (result.success) {
          if(lang == 'es'){
            Swal.fire({
                title: 'Éxito',
                text: 'Se ha enviado un correo al ajustador con los datos proporcionados, se contactará contigo para brindarte información',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                closeModal(); // Cierra el modal
            });
          } else {
            Swal.fire({
                title: 'Success',
                text: 'An email has been sent to the adjuster with the details. They will contact you to provide information.',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                closeModal(); // Cierra el modal
            });
          }        
        } else {
            throw new Error(result.message || 'Failed to send the email');
        }

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        if(lang == 'es'){
          Swal.fire({
              title: 'Error',
              text: 'Hubo un problema al enviar el correo.',
              icon: 'error',
              confirmButtonText: 'OK'
          });
        } else {
            Swal.fire({
                title: 'Error',
                text: 'There was a problem sending the email.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
      
    }
  };

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
                {/*<div className="sc-title-two fst-italic position-relative">
                  {accidente.accidenteEtiqueta}
                </div>*/}
                <h2 className="main-title fw-500 tx-dark">
                  {claims.claimsTitle}
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

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Información de Reclamo"
        closeTimeoutMS={300}
      >
        {claimData && (
          <div>
            {/*<h2 className="pt-20 pb-20 text-center">{claims.modalTitle}</h2>*/}
            <div className="d-flex justify-content-center mb-3">
              <img src="/images/logo/logo-nu.webp" width={150}/>
            </div>
            <p className="mb-4"><strong>{claims.modalInfo1}:</strong> {claimData.No_Claim}</p>
            <div className="d-flex flex-column">
              <p className="mb-1"><strong>{claims.modalInfo2}:</strong></p>
              <p className="mb-4"> {claimData.No_Poliza}</p>
            </div>
            <div className="d-flex flex-column">
              <p className="mb-1"><strong>{claims.modalInfo3}:</strong></p>
              {
                lang == 'es' ? 
                  claimData.Estatus =='ABIERTO' ? 
                  <div className="mb-4 rounded-1 d-flex justify-content-center p-2">
                    <div className="rounded-pill d-flex align-items-center gap-2 border border-success" style={{padding: '10px 20px'}}>
                      <AiFillClockCircle size='2em' />
                      <p className="text-success m-0 fw-bold" style={{fontSize: 'large'}}>
                        {claimData.Estatus}
                      </p>
                    </div>
                  </div> : 
                  <div className="mb-4 rounded-1 d-flex justify-content-center p-2">
                    <div className="rounded-pill d-flex align-items-center gap-2 border border-primary" style={{padding: '10px 20px'}}>
                      <AiFillCheckCircle size='2em' />
                      <p className="text-primary m-0 fw-bold" style={{fontSize: 'large'}}>
                        {claimData.Estatus}
                      </p>
                    </div>
                  </div>
                 : claimData.Estatus =='ABIERTO' ? 
                 <div className="mb-4 rounded-1 d-flex justify-content-center p-2">
                    <div className="rounded-pill d-flex align-items-center gap-2 border border-success" style={{padding: '10px 20px'}}>
                      <AiFillClockCircle size='2em' />
                      <p className="text-success m-0 fw-bold" style={{fontSize: 'large'}}>
                        OPEN
                      </p>
                    </div>
                  </div> : 
                  <div className="mb-4 rounded-1 d-flex justify-content-center p-2">
                    <div className="rounded-pill d-flex align-items-center gap-2 border border-primary" style={{padding: '10px 20px'}}>
                      <AiFillCheckCircle size='2em'/>
                      <p className="text-primary m-0 fw-bold" style={{fontSize: 'large'}}>
                        CLOSED
                      </p>
                    </div>
                  </div>
              }
            </div>
            <p className="mb-4"><strong>{claims.modalInfo4}:</strong> {claimData.Nombre_Ajustador}</p>
            <p className="mb-4"><strong>{claims.modalInfo5}:</strong> {claimData.Correo_Ajustador}</p>
            <p className="mb-4"><strong>{claims.modalInfo6}:</strong> {claimData.Telefono_Ajustador}</p>
            <div className="d-flex justify-content-center">
              <button className="fw-500 text-white tran3s button-primary w-100" onClick={handleModalSubmit}>
                {claims.modalBtn}
              </button>
            </div>
          </div>
        )}
      </Modal>

      <div className="service-details position-relative mt-25 mb-15 asistencia-feature">
        <div className="container">
          <div className="row align-items-start justify-content-start">
            <div className="col-12 col-lg-6" data-aos="fade-right">
              <div className="service-details-meta">
              <form onSubmit={handleSubmit}>
                <div className="d-flex flex-column gap-2 mb-3">
                  <label htmlFor="claimNum">{claims.input1}</label>
                  <input className="p-2" type="text" id="claimNum" name="claimNum" value={formData.claimNum} onChange={handleChange} style={{borderRadius: '8px', border: 'solid 1px'}} placeholder="NUIT000000" required/>
                </div>
                <div className="d-flex flex-column gap-2 mb-3">
                  <label htmlFor="fecha_Siniestro">{claims.input2}</label>
                  <input className="p-2" type="date" id="fecha_Siniestro" name="fecha_Siniestro" value={formData.fecha_Siniestro} onChange={handleChange} style={{borderRadius: '8px', border: 'solid 1px'}} required/>
                </div>
                <div className="d-flex flex-column gap-2 mb-3">
                  <label htmlFor="name">{claims.inputName}</label>
                  <input className="p-2" type="text" id="name" name="name" value={formData.name} onChange={handleChange} style={{borderRadius: '8px', border: 'solid 1px'}} required/>
                </div>
                <div className="d-flex flex-column gap-2 mb-3">
                  <label htmlFor="tel_cel">{claims.input3}</label>
                  <input className="p-2" type="tel" id="tel_cel" name="tel_cel" value={formData.tel_cel} onChange={handleChange} style={{borderRadius: '8px', border: 'solid 1px'}} required/>
                </div>
                <div className="d-flex flex-column gap-2 mb-3">
                  <label htmlFor="email">{claims.input4}</label>
                  <input className="p-2" type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={{borderRadius: '8px', border: 'solid 1px'}} required/>
                </div>
                <button className="mt-15 w-100 fw-500 text-white tran3s button-primary" type="submit" style={{width: 'inherit !important'}}>
                  {claims.buscar}
                </button>
              </form>
              </div>
              {/* /.service-details-meta */}
            </div>
            {/* End .col-xl-9 */}
            {/*<div className="col-xl-3 col-lg-4 d-flex justify-content-center align-items-center" data-aos="fade-left">
              <img src="/images/assets/reportar-accidente.webp" className="reportar-accidente-img"/>
            </div>*/}

          </div>
          <div className="row align-items-start justify-content-start mt-3">
            <div className="col-12 col-lg-6 mt-3 border-top">
              <p className="mt-3">
                {claims.contactInfo1}
              </p>
              
                {
                  lang == 'es' ?
                    <a href= "mailto: servicioalcliente@nationalunity.com.mx">
                      servicioalcliente@nationalunity.com.mx
                    </a>
                  :
                    <a href= "mailto: customerservice@nationalunity.com">
                      customerservice@nationalunity.com
                    </a>
                }

              <p className="mt-3">
                {claims.contactInfo2} <a href="https://wa.me/8134039138"> Whatsapp</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <DefaultFooter />
    </>
  );
};

export default Claims;
