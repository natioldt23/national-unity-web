import { useTranslation } from "react-i18next";
import { LanguageContext } from "@/App";
import { useContext } from "react";

const PasosUnityCard = () => {
  const { t } = useTranslation()
  const card = t("card")
  const { lang } = useContext(LanguageContext)

  const features = [
    "Raspa el código de acceso impreso en tu tarjeta Unity Card.",
    "Ten a la mano los datos del conductor y del vehículo asegurar.",
    "Activa tu tarjeta escaneando el código QR impreso en la tarjeta o en nuestra página web.",
    "Finaliza la activación completando el formulario."
  ];

  const featuresEng = [
    "Scratch off the access code printed on your Unity Card.",
    "Have the driver's and the vehicle's data at hand to insure.",
    "Activate your card by scanning the QR code printed on the card or on our website.",
    "Complete the activation by filling out the form."
  ];


  return (
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="block-style-seven" data-aos="fade-right">
          <div className="title-style-one">
            {/*<div className="sc-title text-uppercase">MOBILE APP</div>*/}
            <h2 className="main-title fw-500 tx-dark m0">
              {card.cardPasos}
            </h2>
          </div>
          
          <ul className="style-none list-item pt-30">
            {
              lang === 'es' ?
              features.map((feature, index) => (
                <li style={{fontSize: '20px'}} key={index}>{feature}</li>
              )) :
              featuresEng.map((feature, index) => (
                <li style={{fontSize: '20px'}} key={index}>{feature}</li>
              ))
            }
          </ul>
          {/* End list */}
        </div>
        {/* /.block-style-seven */}
      </div>
      {/* End col-6 */}

      <div className="col-lg-6 d-flex justify-content-center align-items-center aos-init aos-animate" data-aos="fade-left">
        <img className="asistencia-plus" src="/images/assets/unity-card-trip.webp"/>
      </div>
    </div>
  );
};

export default PasosUnityCard;
