import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Steps = () => {
  const { t } = useTranslation()
  const accidente = t("accidente")

  return (
    <>

        <div
          className="col-sm-6"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <div className="step-card card-style-sixteen tran3s text-center position-relative mt-30 d-flex flex-column justify-content-center align-items-center">
            {/*<div className="icon">
              <img src={step.icon} alt="" className="lazy-img m-auto" />
            </div>*/}
            <p className="tx-steps pt-20">
              {accidente.accidentePasosOne}
            </p>
            <Link
              to="#"
              className="step-number rounded-circle text-start tran3s"
            >
              1
            </Link>
          </div>
          {/* /.card-style-sixteen */}
        </div>

        <div
          className="col-sm-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="step-card card-style-sixteen tran3s text-center position-relative mt-30 d-flex flex-column justify-content-center align-items-center">
            {/*<div className="icon">
              <img src={step.icon} alt="" className="lazy-img m-auto" />
            </div>*/}
            <p className="tx-steps pt-20">
              {accidente.accidentePasosTwo}
            </p>
            <ul className="style-none list-item ul-step">
              <li>{accidente.accidentePasosTwo1}</li>
              <li>{accidente.accidentePasosTwo2}</li>
              <li>{accidente.accidentePasosTwo3}</li>
              <li>{accidente.accidentePasosTwo4}</li>
              <li>{accidente.accidentePasosTwo5}</li>
            </ul>
            <Link
              to="#"
              className="step-number rounded-circle text-start tran3s"
            >
              2
            </Link>
          </div>
          {/* /.card-style-sixteen */}
        </div>

        <div
          className="col-sm-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="step-card card-style-sixteen tran3s text-center position-relative mt-30 d-flex flex-column justify-content-center align-items-center">
            {/*<div className="icon">
              <img src={step.icon} alt="" className="lazy-img m-auto" />
            </div>*/}
            <p className="tx-steps pt-20 m-0">
              {accidente.accidentePasosThree}
            </p>
            <p className="tx-steps" style={{fontSize: '12px', fontStyle: 'italic'}}>
              {accidente.accidentePasosThreeUnder}
            </p>
            <ul className="style-none list-item ul-step">
              <li>
                {/*{accidente.accidentePasosThree1} 
                <br />*/}
                {accidente.accidentePasosThree1NoCost}
                <br />
                <a href="tel:18663296734">1-866-329-6734</a>
              </li>
              <li>
                {accidente.accidentePasosThree2}
                <br />
                {accidente.accidentePasosThree2Llama} <a href="tel:5128610992">512-861-0992</a>
              </li>
            </ul>
            <Link
              to="#"
              className="step-number rounded-circle text-start tran3s"
            >
              3
            </Link>
          </div>
          {/* /.card-style-sixteen */}
        </div>

        <div
          className="col-sm-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="step-card card-style-sixteen tran3s text-center position-relative mt-30 d-flex flex-column justify-content-center align-items-center">
            {/*<div className="icon">
              <img src={step.icon} alt="" className="lazy-img m-auto" />
            </div>*/}
            <p className="tx-steps pt-20">
              {accidente.accidentePasosFour}
            </p>
            <ul className="style-none list-item ul-step">
              <li>{accidente.accidentePasosFour1}</li>
              <li>{accidente.accidentePasosFour2}</li>
              <li>{accidente.accidentePasosFour3}</li>
            </ul>
            <Link
              to="#"
              className="step-number rounded-circle text-start tran3s"
            >
              4
            </Link>
          </div>
          {/* /.card-style-sixteen */}
        </div>

          
    </>
  );
};

export default Steps;
