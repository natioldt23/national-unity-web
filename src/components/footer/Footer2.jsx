const columns = [
  {
    title: "Links",
    links: [
      { label: "Inicio", url: "/" },
      { label: "Nuestros agentes en línea", url: "/agentes" },
      { label: "Asistencia Vial", url: "/asistencia-vial" },
      { label: "Reportar un Accidente", url: "/reportar-accidente" },
      { label: "Contacto", url: "/contacto" },
      { label: "Pólitica de Privacidad", url: "https://www.nationalunity.com/privacynu.pdf" },
      { label: "Términos y condiciones", url: "/tyc" },
    ],
  },
  {
    title: "Productos",
    links: [
      { label: "Seguros de Auto USA", url: "/seguros/seguro-auto" },
      { label: "Seguros de Camión USA", url: "/seguros/seguro-camion" },
      { label: "Seguros de Moto USA", url: "/seguros/seguro-moto" },
      { label: "Larga Estadía USA", url: "/seguro-larga-estadiao" },
      { label: "Auto Renta USA", url: "/seguro-auto-renta" },
      { label: "Cobertura Premium", url: "/seguros/cobertura-premium" },
    ],
  },
];

const Footer2 = () => {
  return (
    <>
      {columns.map((column, index) => (
        <div className="col-xl-2 col-lg-3 col-sm-4 mb-30" key={index}>
          <h5 className="footer-title tx-dark fw-normal">{column.title}</h5>
          <ul className="footer-nav-link style-none">
            {column.links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="col-xl-3 col-lg-4 col-md-5 mb-30">
        <h5 className="footer-title tx-dark fw-normal">Dirección</h5>
        <p className="style-none footer-nav-link">
          One Huebner Parke, 15303 Huebner Road San Antonio, TX 78248
        </p>
        <p className="style-none footer-nav-link">
          MX 8am – 5pm CST <br /> 
          <a href="tel:+52-800-062-0460">+52-800-062-0460</a>
        </p>
        <p className="style-none footer-nav-link">
          USA 8am – 5pm CST <br />
          <a href="tel:001-210-479-8886">001-210-479-8886</a>  
        </p>
        {/*<ul className="d-flex social-icon style-none">
          {socialIcons.map((icon, index) => (
            <li key={index}>
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <i className={icon.iconClass} />
              </a>
            </li>
          ))}
        </ul>*/}
      </div>
    </>
  );
};

export default Footer2;
