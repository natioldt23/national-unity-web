import { Link } from "react-router-dom";

const steps = [
  {
    title: "1. Notificar a la policía sobre el accidente llamando al 911.",
    delayAnim: 0,
  },
  {
    title: "2. Obtener los datos esenciales del conductor afectado:",
    delayAnim: 100,
  },
  {
    title: "3. Reportar el accidente a través de nuestro formulario online o llamando a los siguientes teléfonos:",
    delayAnim: 200,
  },
  {
    title: "4. Toma fotografías del accidente. Todo lo relevante para tener una documentación adecuada.",
    delayAnim: 300,
  },
];

const Steps = () => {
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
            <p className="tx-steps pt-20">Notificar a la policía sobre el accidente llamando al 911.</p>
            <Link
              to="/pages-menu/service-details"
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
            <p className="tx-steps pt-20">Obtener los datos esenciales del conductor afectado:</p>
            <ul className="style-none list-item ul-step">
              <li>Nombre</li>
              <li>Dirección</li>
              <li>Compañía aseguradora</li>
              <li>Número de póliza</li>
              <li>Nombre de testigo/s (si los hubiera)</li>
            </ul>
            <Link
              to="/pages-menu/service-details"
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
            <p className="tx-steps pt-20">Reportar el accidente a través de nuestro formulario online o llamando a los siguientes teléfonos:</p>
            <ul className="style-none list-item ul-step">
              <li>
                Desde USA 
                <br />
                Llama sin costo al <a href="tel:18663296734">1-866-329-6734</a>
                <br />
                Directo: <a href="tel:5128610992">512-861-0992</a>
              </li>
              <li>
                Desde México
                <br />
                Llama al <a href="tel:0015128610992">001-512-861-0992</a>
              </li>
            </ul>
            <Link
              to="/pages-menu/service-details"
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
            <p className="tx-steps pt-20">Toma fotografías del accidente. Todo lo relevante para tener una documentación adecuada.</p>
            <ul className="style-none list-item ul-step">
              <li>Vehículos</li>
              <li>Daños causados</li>
              <li>Lugar de impacto</li>
            </ul>
            <Link
              to="/pages-menu/service-details"
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
