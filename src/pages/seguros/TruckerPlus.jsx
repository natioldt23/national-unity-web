import { useTranslation } from "react-i18next";
import { LanguageContext } from "@/App";
import { useContext } from "react";

const TruckerPlus = () => {
  const { t } = useTranslation()
  const camion = t("camion")
  const { lang } = useContext(LanguageContext)

  const features = [
    "Asistencia médica por accidente o enfermedad por un monto máximo de $25,000 USD.",
    "Asistencia médica COVID hasta 65 años.",
    "Repatriación de restos por un monto máximo de $10,000 USD.",
    "Medicamentos por hospitalización."
  ];

  const featuresEng = [
    "Medical assistance for accident or illness for a maximum amount of $25,000 USD.",
    "COVID medical assistance up to age 65.",
    "Repatriation of remains up to $10,000 USD.",
    "Medications for hospitalization."
  ];

  return (
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="block-style-seven" data-aos="fade-right">
          <div className="title-style-one">
            {/*<div className="sc-title text-uppercase">MOBILE APP</div>*/}
            <h2 className="main-title fw-500 tx-dark m0">
              {camion.camionTrucker}
            </h2>
          </div>
          <p className="fs-20 pt-30 pb-30 lg-pb-20">
          {camion.camionTruckerDesc}
          </p>
          <ul className="style-none list-item">
            {
              lang === 'es'?
              features.map((feature, index) => (
                <li key={index}>{feature}</li>
              )) : 
              featuresEng.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))
            }
          </ul>
          {/* End list */}
          <p className="fs-20 pt-30 pb-30 lg-pb-20">
            {camion.camionTruckerEtiqueta}
          </p>
         
        </div>
        {/* /.block-style-seven */}
      </div>
      {/* End col-6 */}

      <div className="col-lg-6 d-flex justify-content-center align-items-center aos-init aos-animate" data-aos="fade-left">
        <img src="/images/assets/trucker-plus.webp" />
        </div>
    </div>
  );
};

export default TruckerPlus;
