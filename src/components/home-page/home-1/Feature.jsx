const Feature = () => {
  const features = [
    {
      background: '#00AAF320',
      border: '#00AAF3',
      title: (
        <>
          Elige la cobertura de acuerdo a tus necesidades y presupuesto.
        </>
      ),
      description: "",
      icon: "https://web.archive.org/web/20230130001614im_/https://www.nationalunity.com/wp-content/uploads/2021/11/elige.svg",
      width: "169",
      height: "165",
      delay: "100",
    },
    {
      background: "#00D6E520",
      border: '#00D6E5',
      title: (
        <>
          Ingresa tu información personal, método de pago y datos de tu vehículo.
        </>
      ),
      width: "202",
      height: "170",
      description: "",
      icon: "https://web.archive.org/web/20240404223656im_/https://www.nationalunity.com/wp-content/uploads/2021/11/informacion.svg",
      delay: "200",
    },
    {
      background: "#71FACB20",
      border: "#71FACB",
      title: (
        <>
          Viaja seguro con cobertura en TODO Estados Unidos y Canadá
        </>
      ),
      width: "175",
      height: "175",
      description: "",
      icon: "https://web.archive.org/web/20240404223656im_/https://www.nationalunity.com/wp-content/uploads/2021/11/asegurado.svg",
      delay: "300",
    },
  ];

  return (
    <>
      <div data-aos="fade-up">
        <h2 class="tx-dark mb-20 mt-20 text-center">
          Contrata tu Seguro de Auto para USA de manera fácil y segura
        </h2>
      </div>
      {features.map((feature, index) => (
        <div
          className="col-lg-4 col-sm-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={feature.delay}
        >
          <div
            className={`card-style-fifteen tran3s position-relative mt-35`}
            style={{ background: feature.background, border: `1px solid ${feature.border}` }}
          >
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
            <img src={feature.icon} alt="icon" className="position-absolute" />
          </div>{" "}
          {/* /.card-style-fifteen */}
        </div>
      ))}
    </>
  );
};

export default Feature;
