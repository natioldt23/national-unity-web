import { Link } from "react-router-dom";

const services = [
  {
    icon: "https://web.archive.org/web/20240404223656im_/https://www.nationalunity.com/wp-content/uploads/2021/11/IconAuto.svg",
    title: "Seguro de Auto USA",
    delayAnim: 0,
    url: "/seguros/seguro-auto"
  },
  {
    icon: "https://web.archive.org/web/20240404223656im_/https://www.nationalunity.com/wp-content/uploads/2021/11/IconLlanta.svg",
    title: "Cobertura Premium",
    delayAnim: 100,
    url: "/seguros/cobertura-premium"
  },
  {
    icon: "https://web.archive.org/web/20240404223656im_/https://www.nationalunity.com/wp-content/uploads/2021/11/Iconmoto.svg",
    title: "Seguro de Moto USA",
    delayAnim: 200,
    url: "/seguros/seguro-moto"
  },
  {
    icon: "https://web.archive.org/web/20240404223656im_/https://www.nationalunity.com/wp-content/uploads/2021/11/Iconcamion.svg",
    title: "Seguro Camión USA",
    delayAnim: 300,
    url: "/seguros/seguro-camion"
  },
];

const Service = () => {
  return (
    <>
      {services.map((service, index) => (
        <div
          className="col-xl-3 col-sm-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={service.delayAnim}
        >
          <div className="card-style-sixteen tran3s text-center position-relative mt-30">
            <div className="icon">
              <img src={service.icon} alt="" className="lazy-img m-auto" />
            </div>
            <h4 className="tx-dark pt-20">{service.title}</h4>
            <Link
              to={service.url}
              className="read-more rounded-circle text-start tran3s"
            >
              <i className="bi bi-arrow-right" />
            </Link>
          </div>{" "}
          {/* /.card-style-sixteen */}
        </div>
      ))}
    </>
  );
};

export default Service;
