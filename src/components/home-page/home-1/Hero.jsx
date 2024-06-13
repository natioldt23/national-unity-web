import React from "react";

const Hero1 = () => {
  const options = [
    { value: 0, display: "Select insurance type.." },
    { value: 1, display: "Life Insurance" },
    { value: 2, display: "Health insurance" },
    { value: 3, display: "Property insurance" },
    { value: 4, display: "Motor insurance" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <div className="hero-banner-ten position-relative">
      <img
        src="/images/assets/hero-camion.webp"
        alt="ilustration"
        className="hero-camion lazy-img illustration-one"
        data-aos="fade-left"
      />
      <img
        src="/images/assets/hero-auto.webp"
        alt="ilustration"
        className="lazy-img illustration-two"
        data-aos="fade-right"
      />
      <div className="container">
        <div className="row">
          <div
            className="col-lg-9 col-md-10 m-auto text-center"
            data-aos="fade-up"
          >
            <h1 className="hero-heading fw-500 tx-dark">
              Bienvenido a <span>National Unity</span>
            </h1>
            <p className="text-lg tx-dark mt-45 mb-50 lg-mt-30 lg-mb-40">
              Del otro lado estamos de tu lado.
            </p>
            {/* End form */}
            <div className="d-flex main-buttons">
              <a href="https://www.nuagentesonline.com/agents/676164158d24efd000af9799d82f8b36/" target="blank">
                <button className="fw-500 text-white tran3s button-primary" type="submit">
                  Cotiza en línea
                </button>
              </a>

              <a href="https://www.nationalunity.com/national/uc/code/activa.asp" target="blank">
                <button className="fw-500 text-white tran3s button-primary" type="submit">
                  Activar Unity Card
                </button>
              </a>
            </div>

            <div>
              <div className="approval-info d-inline-flex align-items-center mt-130 lg-mt-80">
                {/*<img src="/images/icon/icon_99.svg" alt="" className="me-1" />
                <span>An UK insurer approved by the UICO.</span>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .container */}

      
    </div>
  );
};

export default Hero1;
