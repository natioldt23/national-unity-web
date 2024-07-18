import { LanguageContext } from "@/App";
import { useContext } from "react";
import { useTranslation } from "react-i18next";


const AsistenciaPlus = () => {
  const { lang } = useContext(LanguageContext)
  const { t } = useTranslation()
  const carro = t("carro")

  const features = [
    "Gastos médicos por accidente o enfermedad",
    "Renta de auto por robo, avería o accidente",
    "Hotel por convalecencia por un máximo de $90 USD hasta 3 días consecutivos",
    "Repatriación por fallecimiento"
  ];

  const featuresEng = [
    "Medical expenses due to accident or illness",
    "Car rental due to theft, breakdown or accident",
    "Hotel for convalescence for up to $90 USD for up to 3 consecutive days",
    "Repatriation due to death"
  ];

  return (
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="block-style-seven" data-aos="fade-right">
          <div className="title-style-one">
            {/*<div className="sc-title text-uppercase">MOBILE APP</div>*/}
            <h2 className="main-title fw-500 tx-dark m0">
              {carro.carroAsistencia}
            </h2>
          </div>
          <p className="asistencia-desc pt-30 pb-30 lg-pb-20">
            {carro.carroAsistenciaDesc}
          </p>
          <ul className="style-none list-item">
            {
              lang === 'es' ?
              features.map((feature, index) => (
                <li key={index}>{feature}</li>
              )) : 
              featuresEng.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))
            }
          </ul>
          {/* End list */}
          <p className="asistencia-desc pt-30 pb-30 lg-pb-20">
            {carro.carroAsistenciaEtiqueta}
          </p>
         
        </div>
        {/* /.block-style-seven */}
      </div>
      {/* End col-6 */}

      <div className="col-lg-6 d-flex justify-content-center align-items-center aos-init aos-animate" data-aos="fade-left">
        <img className="asistencia-plus" src="/images/icon/asistencia_plus.svg"/>
      </div>
    </div>
  );
};

export default AsistenciaPlus;
