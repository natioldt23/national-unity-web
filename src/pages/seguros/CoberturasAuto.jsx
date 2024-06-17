import { Link } from "react-router-dom";

const coberturas = [
  {
    title: "Cobertura RC 30/60/25",
    content1: "$30,000 USD de cobertura máxima por lesiones corporales por cada tercero afectado.",
    content2: "$60,000 USD es la suma máxima a cubrir por lesiones corporales al total de los terceros afectados.",
    content3: "$25,000 USD de cobertura máxima en daños a bienes materiales de terceros.",
    delayAnim: 0,
  },
  {
    title: "Cobertura RC 25/50/10",
    content1: "$25,000 USD de cobertura máxima por lesiones corporales por cada tercero afectado.",
    content2: "$50,000 USD es la suma máxima a cubrir por lesiones corporales al total de los terceros afectados.",
    content3: "$10,000 USD de cobertura máxima en daños a bienes materiales de terceros.",
    delayAnim: 100,
  },
  {
    title: "Cobertura RC 25/50/15",
    content1: "$25,000 USD máximo por lesiones personales a cada tercero afectado.",
    content2: "$50,000 USD es la suma máxima a cubrir por lesiones corporales al total de los terceros afectados.",
    content3: "$15,000 USD de cobertura máxima en daños a bienes materiales de terceros.",
    delayAnim: 200,
  },
  {
    title: "Cobertura RC 15/30/5",
    content1: "$15,000 USD de cobertura máxima por lesiones corporales por cada tercero afectado.",
    content2: "$30,000 USD es la suma máxima a cubrir por lesiones corporales al total de los terceros afectados.",
    content3: "$5,000 USD de cobertura máxima en daños a bienes materiales de terceros.",
    delayAnim: 300,
  },
];

const CoberturasAuto = () => {
  return (
    <>
      {coberturas.map((cobertura, index) => (
        <div
          className="col-lg-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={cobertura.delayAnim}
        >
          <div className="card-style-sixteen tran3s text-center position-relative mt-30 bg-body">
            <h4 className="tx-dark pt-20">{cobertura.title}</h4>
            <p className="cobertura-content fw-500">
              {cobertura.content1}
            </p>
            <p className="cobertura-content fw-500">
              {cobertura.content2}
            </p>
            <p className="cobertura-content fw-500">
              {cobertura.content3}
            </p>

          </div>{" "}
          {/* /.card-style-sixteen */}
        </div>
      ))}
    </>
  );
};

export default CoberturasAuto;
