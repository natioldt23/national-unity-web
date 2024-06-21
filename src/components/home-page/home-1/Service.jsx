import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const Service = () => {
  const { t } = useTranslation()
  
  const home = t("home")
  
  const services = [
    {
      icon: "/images/icon/IconAuto.svg",
      title: (
        <>
          {home.productoAuto}
        </>
      ),
      delayAnim: 0,
      url: "/seguros/seguro-auto"
    },
    {
      icon: "/images/icon/IconLlanta.svg",
      title: (
        <>
          {home.productoPremium}
        </>
      ),
      delayAnim: 100,
      url: "/seguros/cobertura-premium"
    },
    {
      icon: "/images/icon/Iconmoto.svg",
      title: (
        <>
          {home.productoMoto}
        </>
      ),
      delayAnim: 200,
      url: "/seguros/seguro-moto"
    },
    {
      icon: "/images/icon/Iconcamion.svg",
      title: (
        <>
          {home.productoCamion}
        </>
      ),
      delayAnim: 300,
      url: "/seguros/seguro-camion"
    },
  ];
  
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
