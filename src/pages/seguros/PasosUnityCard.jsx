import { useTranslation } from "react-i18next";
import { LanguageContext } from "@/App";
import { useContext } from "react";

const PasosUnityCard = () => {
  const { t } = useTranslation()
  const card = t("card")
  const { lang } = useContext(LanguageContext)

  const features = [
    "Llena los datos requeridos dentro de la Unity Card",
    "Raspa el código de acceso",
    "Activa tu tarjeta escaneando el código QR o en nuestra página web",
    "Finaliza la activación completando el formulario"
  ];

  const featuresEng = [
    "Fill in the required data inside the Unity Card",
    "Scratch off the access code",
    "Activate your card by scanning the QR code or on our website",
    "Complete the activation by filling out the form"
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
        <img className="asistencia-plus" src="/images/assets/unity-card-man.webp"/>
      </div>
    </div>
  );
};

export default PasosUnityCard;
