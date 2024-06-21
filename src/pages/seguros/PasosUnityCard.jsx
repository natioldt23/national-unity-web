const PasosUnityCard = () => {
  const features = [
    "Llena los datos requeridos dento de la Unity Card",
    "Raspa el código de acceso",
    "Activa tu tarjeta escaneando el código QR, en nuestra página web o por teléfono al: 800 062 0400 (México) o al 1800 401 0929 (USA)",
    "Finaliza la activación completando el formulario"
  ];

  {/*const buttons = [
    {
      platform: "Google play",
      icon: "images/icon/playstore.svg",
      className: "windows-button",
    },
    {
      platform: "App store",
      icon: "images/icon/apple-black.svg",
      className: "ios-button",
    },
  ];*/}

  return (
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="block-style-seven" data-aos="fade-right">
          <div className="title-style-one">
            {/*<div className="sc-title text-uppercase">MOBILE APP</div>*/}
            <h2 className="main-title fw-500 tx-dark m0">
              Pasos para activar tu tarjeta
            </h2>
          </div>
          
          <ul className="style-none list-item pt-30">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
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
