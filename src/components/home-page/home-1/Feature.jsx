import { useTranslation } from "react-i18next";

const Feature = () => {
  const { t } = useTranslation()

  const home = t("home")

  const features = [
    {
      background: '#00AAF320',
      border: '#00AAF3',
      title: (
        <>
          {home.featureOne}
        </>
      ),
      description: "",
      icon: "/images/icon/elige.svg",
      width: "169",
      height: "165",
      delay: "100",
    },
    {
      background: "#00D6E520",
      border: '#00D6E5',
      title: (
        <>
          {home.featureTwo}
        </>
      ),
      width: "202",
      height: "170",
      description: "",
      icon: "/images/icon/informacion.svg",
      delay: "200",
    },
    {
      background: "#71FACB20",
      border: "#71FACB",
      title: (
        <>
          {home.featureThree}
        </>
      ),
      width: "175",
      height: "175",
      description: "",
      icon: "/images/icon/asegurado.svg",
      delay: "300",
    },
  ];

  return (
    <>
      <div data-aos="fade-up">
        <h2 className="tx-dark mb-20 mt-20 text-center">
          {home.featureTitle}
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
