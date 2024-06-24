import Seo from "../../../components/common/Seo";
import DefaulHeader from "../../../components/header/DefaulHeader";
import DefaultFooter from "../../../components/footer/DefaultFooter";
import Service1 from "../../../components/services/Service1";
import Block from "../../../components/services/Block";
import Testimonial from "../../../components/home-page/home-3/Testimonial";
import Faq from "../../../components/services/Faq";
import FaqAsistencia from "../../../components/services/FaqAsistencia";
import Partners from "../../../components/services/Partners";
import { Link } from "react-router-dom";
import AsistenciaPlus from "../../seguros/AsistenciaPlus";
import FaqAuto from "../../seguros/./FaqAuto";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CoberturasAuto from "../../seguros/./CoberturasAuto";
import {beneficiosAuto} from "../../../data/beneficios-auto";


const NuestrosAgentes = () => {

  const cardsData = [
    {
      id: 1,
      cardNo: "card-one",
      title: "40%",
      subtitle: "Del Mercado",
      src: "https://www.nationalunity.com/wp-content/uploads/2023/10/LIQUIDOS_NU-01.svg",
    },
    {
      id: 2,
      title: "+50 años",
      cardNo: "card-two",
      subtitle: "De experiencia",
      src: "https://www.nationalunity.com/wp-content/uploads/2023/10/LLANTA_NU-01.svg"
    },
    {
      id: 3,
      title: "Líder",
      cardNo: "card-three",
      subtitle: "En Responsabilidad civil",
      src: "https://www.nationalunity.com/wp-content/uploads/2023/10/PILA_NU-01.svg"
    },
    /*{
      id: 4,
      title: "Líder",
      cardNo: "card-one",
      subtitle: "En Responsabilidad civil",
      src: "https://www.nationalunity.com/wp-content/uploads/2023/10/ATASCAMIENTO_NU-01.svg"
    },*/
  ];

  const starRating = Array(5)
    .fill()
    .map((_, index) => (
      <li key={index}>
        <i className="fa-solid fa-star" />
      </li>
    ));

  return (
    <>
      <Seo pageTitle="Service V1" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />
      {/* 
			=============================================
				Feature Section Fifty One
			============================================== 
			*/}
      <div className="fancy-feature-fiftyOne d-flex align-items-center position-relative mt-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-lg-6" data-aos="fade-right">
              <div className="title-style-five mb-45 md-mb-10">
                <h2 className="main-title fw-500 tx-dark">
                  Selecciona un agente
                </h2>
                <p className="tx-dark text-lg pt-20">
                  A través de nuestros agentes te brindamos un servicio cercano y personalizado.
                </p>
                <p className="tx-dark text-lg pt-20">
                  Selecciona el agente que más prefieras, todos te ofrecerán los beneficios completos de la cobertura y servicio que elijas en tu cotización.
                </p>
              </div>
            </div>
            <div className="col-xxl-5 col-lg-6 d-flex align-items-center" data-aos="fade-left">
            <img
              src="/images/assets/seguro-auto-hero.webp"
              alt="icon"
              className="lazy-img seguro-auto-hero"
            />
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* /.container */}
        
      </div>
      {/* /.fancy-feature-fiftyOne */}

      <div className="fancy-feature-thirtyEight pt-60 pb-50" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/23ca84adae4018f201597cb0a340a885/index.php">
                <img src="/images/agentes/alpuente.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/1ce9398f18d7f32ccb2522dc8f07e530/index.php">
                <img src="/images/agentes/aps.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/88a0d923336c547bcc423b173960c494/index.php">
                <img src="/images/agentes/ata.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/47aa24da3b7756b23f58e2ee4f16c44c/index.php">
                <img src="/images/agentes/AYA.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/9ff2b68936974e41ffc9e61cc18acee5/index.php">
                <img src="/images/agentes/baidon.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/0b614f062b25d7c8ce79d78e3d548768/index.php">
                <img src="/images/agentes/binational.jpg" alt="" />
              </a>
            </div>
            {/*Fin fila de 6 */}

            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/5bab4a230812820eb4bcd2192da333d9/index.php">
                <img src="/images/agentes/bmaseguro.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/8ac1a39a924be3e55f5199be8323a7fd/index.php">
                <img src="/images/agentes/bridgepoint.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/f8fd1d3406770aa96e64c6257b4b5a64/index.php">
                <img src="/images/agentes/CCR.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/8dbe3a7a2ee2ddb967f24ca1cfdf52e9/index.php">
                <img src="/images/agentes/dvu.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/ca74989524b9a867e83442b306222a12/index.php">
                <img src="/images/agentes/heb.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/85b4950ca217ea1a92425b54087ac19d/index.php">
                <img src="/images/agentes/jc.jpg" alt="" />
              </a>
            </div>
            {/*Fin fila de 6 */}

            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/8427cdf1c77ceba808ea579b4f04b311/index.php">
                <img src="/images/agentes/kalifa.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/12a13482ad1d7db489b0a11c4203f37c/index.php">
                <img src="/images/agentes/lah.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/69c71abe78fd0915e21729a8c1d7e2bd/index.php">
                <img src="/images/agentes/logoleon.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/676164158d24efd000af9799d82f8b36/">
                <img src="/images/agentes/LogoSalga.png" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/b6769fb6897300b3dfddc232635dccf9/index.php">
                <img src="/images/agentes/mexpro.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/990d443f70a5a0a4f0e00946fa60acc6/index.php">
                <img src="/images/agentes/morris.jpg" alt="" />
              </a>
            </div>
            {/*Fin fila de 6 */}

            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/1f47f18890635c4d66c8617826c9eabd/index.php">
                <img src="/images/agentes/mxici.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/c1c45ec4d5101aedf6b1a11e9d96fffe/index.php">
                <img src="/images/agentes/Palms.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/ad5ff8fc8e36261b777422abf56a65ff/index.php">
                <img src="/images/agentes/palmsmex.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/08fd1c6a2df3353b0bdc4c2c019a4d1a/index.php">
                <img src="/images/agentes/palnorte.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/bb0ed605e96a5dd8b0c0e49c648e4e7c/index.php">
                <img src="/images/agentes/pronto.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/be013b839f8e2e3eae3866a6801a1245/index.php">
                <img src="/images/agentes/rcparaautos.jpg" alt="" />
              </a>
            </div>
            {/*Fin fila de 6 */}

            
            <div className="col-6 col-lg-2">
              <a href="https://www.segurogringo.com/">
                <img src="/images/agentes/seg.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/6750ec0726034f844bd8b76ae50ac21e/index.php">
                <img src="/images/agentes/seguro-express-150x103.png" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/b959002017919d0a453bcaeb181d25cc/index.php">
                <img src="/images/agentes/SeguroaUSA.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/edc2588f2ae54d6696b8be683d993d82/">
                <img src="/images/agentes/segbinacional.png" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/9285abbf74b893635d2461164226a979/index.php">
                <img src="/images/agentes/seguroenlineausa.jpeg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/0b9e27e98f2ce0dc1a5c1d3229c5de28/index.php">
                <img src="/images/agentes/segurosusaymexico.jpg" alt="" />
              </a>
            </div>
            {/*Fin fila de 6 */}

            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/3c1a20dc53e89e97c5f8eae5aee0f9a0/index.php">
                <img src="/images/agentes/SeguroVamos.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/b959002017919d0a453bcaeb181d25cc/">
                <img src="/images/agentes/SuperSeguroUSA.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/f897900873d6671dc03a651dcc24f76c/index.php">
                <img src="/images/agentes/va.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href="https://www.nuagentesonline.com/agents/259e232abd7c4e90dd228bebbe634d9b/index.php">
                <img src="/images/agentes/vus.jpg" alt="" />
              </a>
            </div>
            {/*Fin fila de 6 */}
          </div>
        </div>
        {/* /.container */}
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default NuestrosAgentes;
