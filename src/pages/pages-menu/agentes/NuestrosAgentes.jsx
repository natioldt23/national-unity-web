import Seo from "../../../components/common/Seo";
import DefaulHeader from "../../../components/header/DefaulHeader";
import DefaultFooter from "../../../components/footer/DefaultFooter";
import 'react-tabs/style/react-tabs.css';
import { useTranslation } from "react-i18next";
import { LanguageContext } from "@/App";
import { useContext } from "react";

const NuestrosAgentes = () => {
  const { t } = useTranslation()
  const agentes = t("agentes")
  const { lang } = useContext(LanguageContext)

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
                <h2 className="main-title fw-500 tx-dark pt-30">
                  {agentes.agentesTitle}
                </h2>
                <p className="tx-dark text-lg pt-40">
                  {agentes.agentesDesc1}
                </p>
                <p className="tx-dark text-lg pt-8">
                  {agentes.agentesDesc2}
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
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/4bc83f66d7350f6ffe8f86950f600c7c/" 
                :
                "https://www.nuagentesonline.com/agents/4bc83f66d7350f6ffe8f86950f600c7c/index.php?lang=en"
              } target="_blank">
                <img src="/images/agentes/firmaSeguros.png" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/23ca84adae4018f201597cb0a340a885/index.php" 
                :
                "https://www.nuagentesonline.com/agents/23ca84adae4018f201597cb0a340a885/index.php?lang=en"
              } target="_blank">
                <img src="/images/agentes/alpuente.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/1ce9398f18d7f32ccb2522dc8f07e530/index.php" 
                :
                "https://www.nuagentesonline.com/agents/1ce9398f18d7f32ccb2522dc8f07e530/index.php?lang=en" 
              } target="_blank">
                <img src="/images/agentes/aps.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/47aa24da3b7756b23f58e2ee4f16c44c/index.php" 
                :
                "https://www.nuagentesonline.com/agents/47aa24da3b7756b23f58e2ee4f16c44c/index.php?lang=en" 
              } target="_blank">
                <img src="/images/agentes/AYA.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/9ff2b68936974e41ffc9e61cc18acee5/index.php" 
                :
                "https://www.nuagentesonline.com/agents/9ff2b68936974e41ffc9e61cc18acee5/index.php?lang=en" 
              } target="_blank">
                <img src="/images/agentes/baidon.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/0b614f062b25d7c8ce79d78e3d548768/index.php" 
                :
                "https://www.nuagentesonline.com/agents/0b614f062b25d7c8ce79d78e3d548768/index.php?lang=en" 
              } target="_blank">
                <img src="/images/agentes/binational.jpg" alt="" />
              </a>
            </div>
            {/*Fin fila de 6 */}

            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/5bab4a230812820eb4bcd2192da333d9/index.php" 
                :
                "https://www.nuagentesonline.com/agents/5bab4a230812820eb4bcd2192da333d9/index.php?lang=en" 
              } target="_blank">
                <img src="/images/agentes/bmaseguro.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/8ac1a39a924be3e55f5199be8323a7fd/index.php" 
                :
                "https://www.nuagentesonline.com/agents/8ac1a39a924be3e55f5199be8323a7fd/index.php?lang=en" 
              } target="_blank">
                <img src="/images/agentes/bridgepoint.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/f8fd1d3406770aa96e64c6257b4b5a64/index.php" 
                :
                "https://www.nuagentesonline.com/agents/f8fd1d3406770aa96e64c6257b4b5a64/index.php?lang=en" 
              } target="_blank">
                <img src="/images/agentes/CCR.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/8dbe3a7a2ee2ddb967f24ca1cfdf52e9/index.php" 
                :
                "https://www.nuagentesonline.com/agents/8dbe3a7a2ee2ddb967f24ca1cfdf52e9/index.php?lang=en" 
              } target="_blank">
                <img src="/images/agentes/dvu.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/ca74989524b9a867e83442b306222a12/index.php" 
                :
                "https://www.nuagentesonline.com/agents/ca74989524b9a867e83442b306222a12/index.php?lang=en" 
              } target="_blank">
                <img src="/images/agentes/heb.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/85b4950ca217ea1a92425b54087ac19d/index.php" 
                :
                "https://www.nuagentesonline.com/agents/85b4950ca217ea1a92425b54087ac19d/index.php?lang=en" 
              } target="_blank">
                <img src="/images/agentes/jc.jpg" alt="" />
              </a>
            </div>
            {/*Fin fila de 6 */}

            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/8427cdf1c77ceba808ea579b4f04b311/index.php" 
                :
                "https://www.nuagentesonline.com/agents/8427cdf1c77ceba808ea579b4f04b311/index.php?lang=en" 
              } target="_blank">
                <img src="/images/agentes/kalifa.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/12a13482ad1d7db489b0a11c4203f37c/index.php" 
                :
                "https://www.nuagentesonline.com/agents/12a13482ad1d7db489b0a11c4203f37c/index.php?lang=en" 
              } target="_blank">
                <img src="/images/agentes/lah.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/69c71abe78fd0915e21729a8c1d7e2bd/index.php" 
                :
                "https://www.nuagentesonline.com/agents/69c71abe78fd0915e21729a8c1d7e2bd/index.php?lang=en" 
              } target="_blank">
                <img src="/images/agentes/logoleon.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/676164158d24efd000af9799d82f8b36/" 
                :
                "https://www.nuagentesonline.com/agents/676164158d24efd000af9799d82f8b36/index.php?lang=en" 
              } target="_blank">
                <img src="/images/agentes/LogoSalga.png" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/b6769fb6897300b3dfddc232635dccf9/index.php" 
                :
                "https://www.nuagentesonline.com/agents/b6769fb6897300b3dfddc232635dccf9/index.php?lang=en" 
              } target="_blank">
                <img src="/images/agentes/mexpro.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/990d443f70a5a0a4f0e00946fa60acc6/index.php" 
                :
                "https://www.nuagentesonline.com/agents/990d443f70a5a0a4f0e00946fa60acc6/index.php?lang=en" 
              } target="_blank">
                <img src="/images/agentes/morris.jpg" alt="" />
              </a>
            </div>
            {/*Fin fila de 6 */}

            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/1f47f18890635c4d66c8617826c9eabd/index.php" 
                :
                "https://www.nuagentesonline.com/agents/1f47f18890635c4d66c8617826c9eabd/index.php?lang=en" 
              } target="_blank">
                <img src="/images/agentes/mxici.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/c1c45ec4d5101aedf6b1a11e9d96fffe/index.php" 
                :
                "https://www.nuagentesonline.com/agents/c1c45ec4d5101aedf6b1a11e9d96fffe/index.php?lang=en" 
              } target="_blank">
                <img src="/images/agentes/Palms.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/ad5ff8fc8e36261b777422abf56a65ff/index.php" 
                :
                "https://www.nuagentesonline.com/agents/ad5ff8fc8e36261b777422abf56a65ff/index.php?lang=en" 
              } target="_blank">
                <img src="/images/agentes/palmsmex.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/08fd1c6a2df3353b0bdc4c2c019a4d1a/index.php" 
                :
                "https://www.nuagentesonline.com/agents/08fd1c6a2df3353b0bdc4c2c019a4d1a/index.php?lang=en"
              } target="_blank">
                <img src="/images/agentes/palnorte.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/bb0ed605e96a5dd8b0c0e49c648e4e7c/index.php" 
                :
                "https://www.nuagentesonline.com/agents/bb0ed605e96a5dd8b0c0e49c648e4e7c/index.php?lang=en" 
              } target="_blank">
                <img src="/images/agentes/pronto.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/be013b839f8e2e3eae3866a6801a1245/index.php" 
                :
                "https://www.nuagentesonline.com/agents/be013b839f8e2e3eae3866a6801a1245/index.php?lang=en" 
              } target="_blank">
                <img src="/images/agentes/rcparaautos.jpg" alt="" />
              </a>
            </div>
            {/*Fin fila de 6 */}

            
            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.segurogringo.com/" 
                :
                "https://www.segurogringo.com/" 
              } target="_blank">
                <img src="/images/agentes/seg.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/6750ec0726034f844bd8b76ae50ac21e/index.php" 
                :
                "https://www.nuagentesonline.com/agents/6750ec0726034f844bd8b76ae50ac21e/index.php?lang=en" 
              } target="_blank">
                <img src="/images/agentes/seguro-express-150x103.png" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/b959002017919d0a453bcaeb181d25cc/index.php" 
                :
                "https://www.nuagentesonline.com/agents/b959002017919d0a453bcaeb181d25cc/index.php?lang=en" 
              } target="_blank">
                <img src="/images/agentes/SeguroaUSA.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/edc2588f2ae54d6696b8be683d993d82/" 
                :
                "https://www.nuagentesonline.com/agents/edc2588f2ae54d6696b8be683d993d82/index.php?lang=en" 
              } target="_blank">
                <img src="/images/agentes/segbinacional.png" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/9285abbf74b893635d2461164226a979/index.php" 
                :
                "https://www.nuagentesonline.com/agents/9285abbf74b893635d2461164226a979/index.php?lang=en" 
              } target="_blank">
                <img src="/images/agentes/seguroenlineausa.jpeg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/0b9e27e98f2ce0dc1a5c1d3229c5de28/index.php" 
                :
                "https://www.nuagentesonline.com/agents/0b9e27e98f2ce0dc1a5c1d3229c5de28/index.php?lang=en" 
              } target="_blank">
                <img src="/images/agentes/segurosusaymexico.jpg" alt="" />
              </a>
            </div>
            {/*Fin fila de 6 */}

            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/3c1a20dc53e89e97c5f8eae5aee0f9a0/index.php" 
                :
                "https://www.nuagentesonline.com/agents/3c1a20dc53e89e97c5f8eae5aee0f9a0/index.php?lang=en" 
              } target="_blank">
                <img src="/images/agentes/SeguroVamos.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/88a0d923336c547bcc423b173960c494/index.php" 
                :
                "https://www.nuagentesonline.com/agents/88a0d923336c547bcc423b173960c494/index.php?lang=en"
              } target="_blank">
                <img src="/images/agentes/ata.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/b959002017919d0a453bcaeb181d25cc/" 
                :
                "https://www.nuagentesonline.com/agents/b959002017919d0a453bcaeb181d25cc/index.php?lang=en" 
              } target="_blank">
                <img src="/images/agentes/SuperSeguroUSA.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/f897900873d6671dc03a651dcc24f76c/index.php" 
                :
                "https://www.nuagentesonline.com/agents/f897900873d6671dc03a651dcc24f76c/index.php?lang=en" 
              } target="_blank">
                <img src="/images/agentes/va.jpg" alt="" />
              </a>
            </div>
            <div className="col-6 col-lg-2">
              <a href={
                lang =='es'?
                "https://www.nuagentesonline.com/agents/259e232abd7c4e90dd228bebbe634d9b/index.php" 
                :
                "https://www.nuagentesonline.com/agents/259e232abd7c4e90dd228bebbe634d9b/index.php?lang=en" 
              } target="_blank">
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
