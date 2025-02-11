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
    {
      icon: "/images/icon/SeguroRenta.svg",
      title: (
        <>
          {home.productoRental}
        </>
      ),
      delayAnim: 400,
      url: "/seguros/seguro-auto-renta"
    },
    {
      icon: "/images/icon/unity_Card.svg",
      title: (
        <>
          {home.productoCard}
        </>
      ),
      delayAnim: 400,
      url: "/seguros/unity-card"
    },
  ];
  
  return (
    <>
      {services.map((service, index) => (
        <div
          className="col-12 col-md-6 justify-content-center"
          key={index}
          data-aos="fade-up"
          data-aos-delay={service.delayAnim}
        >
          <Link
            to={service.url}
            class="w-100"
          >
            <div className="card-style-sixteen card-feature products-home tran3s text-center position-relative mt-30">
              <div className="icon">
                <img src={service.icon} alt="" className="lazy-img m-auto" width={65} height={65}/>
              </div>
              <h4 className="tx-dark pt-20">{service.title}</h4>
              <div className="read-more rounded-circle text-start tran3s">
                <i className="bi bi-arrow-right" />
              </div>
            </div>{" "}
          </Link>
          {/* /.card-style-sixteen */}
        </div>
      ))}
    </>
  );
};

export default Service;
