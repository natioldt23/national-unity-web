import Seo from "../../components/common/Seo";
import DefaultFooter from "../../components/footer/DefaultFooter";
import DefaulHeader from "../../components/header/DefaulHeader";
import TiempoCruces from "../../components/home-page/home-1/TiempoCruces";
import Map from "../../components/home-page/home-1/Map";
import Banner from "../../components/home-page/home-1/Banner";
import Feature from "../../components/home-page/home-1/Feature";
import Hero from "../../components/home-page/home-1/Hero";
import IntroAbout from "../../components/home-page/home-1/IntroAbout";
import Service from "../../components/home-page/home-1/Service";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import HeroSlider from "@/components/home-page/home-1/HeroSlider";

const Insurance = () => {
  const { t } = useTranslation()

  const home = t("home") 

  return (
    <>
      <Seo pageTitle="Insurance" />
      {/* <!-- 
      =============================================
			Theme Default Menu
			============================================== 	
      --> */}
      <DefaulHeader />
      {/* <!-- 
			=============================================
			Theme Hero Banner
			============================================== 
			--> */}
      {/*<Hero />*/}
      <HeroSlider />
      {/* 
			=============================================
				Productos Section Thirty Six
			============================================== 
			*/}
      <div className="fancy-feature-thirtySix mt-190 lg-mt-140 pb-40">
        <div className="container">
          <div className="wrapper position-relative">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="title-style-one text-center text-lg-start mb-40 md-mb-20"
                  data-aos="fade-right"
                >
                  <h2 className="main-title fw-500 tx-dark m0">
                    {home.productsTitle}
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <Service />
            </div>
            {/* /.row */}

            {/*<div className="text-center md-mt-50">
              <Link
                to="/pages-menu/service-v1"
                className="btn-twentyTwo fw-500 tran3s"
                data-aos="fade-left"
              >
                Ver nuestros Servicios
              </Link>
            </div>*/}
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-thirtySix */}

      {/* <!-- 
			=============================================
				Feature Section Thirty Four
			============================================== 
			--> */}
      <div className="fancy-feature-thirtySix mt-190 lg-mt-140 pb-40">
        <div className="container">
          <div className="wrapper position-relative">
            <div className="row justify-content-start">
              <div className="col-lg-6">
                <div
                  className="title-style-one text-center text-lg-start mb-40 md-mb-20"
                  data-aos="fade-right"
                >
                  <h2 className="main-title fw-500 tx-dark m0">
                    {home.accidentTitle}
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 gap-3 d-flex flex-column">
                  <div
                    className="justify-content-center h-50"
                    
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <a
                      href='/national/reporte_accidente/package/html/main/'
                      class="w-100 h-100"
                    >
                      <div className="card-style-sixteen flex-column card-feature tran3s text-center position-relative h-100">
                        <h4 className="tx-dark pt-20">{home.accidentOption1}</h4>
                        <div>
                          <h6 className="mb-4 tx-dark">
                            {home.accidentOption1Desc}
                          </h6>
                        </div>
                        <div className="read-more rounded-circle text-start tran3s">
                          <i className="bi bi-arrow-right" />
                        </div>
                      </div>{" "}
                    </a>
                    {/* /.card-style-sixteen */}
                  </div>

                  <div
                    className="justify-content-center h-50"
                    
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <Link
                      to='/claims'
                      class="w-100 h-100"
                    >
                      <div className="card-style-sixteen flex-column card-feature tran3s text-center position-relative h-100">
                        <h4 className="tx-dark pt-20">{home.accidentOption2}</h4>
                        <div>
                          <h6 className="mb-4 tx-dark">
                            {home.accidentOption2Desc}
                          </h6>
                        </div>
                        <div className="read-more rounded-circle text-start tran3s">
                          <i className="bi bi-arrow-right" />
                        </div>
                      </div>{" "}
                    </Link>
                    {/* /.card-style-sixteen */}
                  </div>
              </div>
              <div className="col-12 col-md-6"  data-aos="fade-left">
                <img src="/images/assets/home-accident.jpg" alt="" className="rounded-4"/>
              </div>
            </div>
            {/* /.row */}

            {/*<div className="text-center md-mt-50">
              <Link
                to="/pages-menu/service-v1"
                className="btn-twentyTwo fw-500 tran3s"
                data-aos="fade-left"
              >
                Ver nuestros Servicios
              </Link>
            </div>*/}
          </div>
        </div>
        {/* /.container */}
      </div>
      {/*  <!-- /.fancy-feature-thirtyFour --> */}


      {/* <!-- 
			=============================================
				Feature Section Thirty Four
			============================================== 
			--> */}
      <div className="fancy-feature-thirtyFour mt-190 lg-mt-100">
        <div className="container">
          <div className="row gx-xxl-5">
            <Feature />
          </div>
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.fancy-feature-thirtyFour --> */}

      {/*
			=====================================================
				Facts Section Thirty Five
			=====================================================
			*/}
      <div className="fancy-feature-thirtyFive mt-190 lg-mt-100 pb-40">
        <div className="container" data-aos="fade-up">
          <Banner />
          {/* /.top-banner */}
        </div>
        {/* End .container */}

        <div className="bg-wrapper mt-150 pt-100 lg-mt-80 lg-pt-70">
          <div className="container">
            <IntroAbout />
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-feature-thirtyFive */}
      
      

      {/* 
			=============================================
				Feature Section Thirty Seven
			============================================== 
			*/}
      {/*<div className="fancy-feature-thirtySeven mt-225 lg-mt-120">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 ms-auto order-lg-last"
              data-aos="fade-left"
            >
              <div className="ps-lg-5 ms-xxl-3">
                <div className="title-style-one mb-40">
                  <div className="sc-title text-uppercase">Why Choose Us</div>
                  <h2 className="main-title fw-500 tx-dark m0">
                    What makes us the best.
                  </h2>
                </div>
                <WhyChoose />
              </div>
            </div>

            <div className="col-xxl-5 col-lg-6 order-lg-first">
              <Block />
            </div>
          </div>
        </div>
      </div>*/}
      {/* /.fancy-feature-thirtySeven */}

      {/*=====================================================
				Feedback Section Eleven
			=====================================================
			*/}
      {/*<div
        className="feedback-section-eleven position-relative mt-200 pt-100 pb-70 lg-mt-120 lg-pt-70 lg-pb-50"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="title-style-one text-center mb-50 lg-mb-20">
            <h2 className="main-title fw-500 tx-dark m0">Client Feedback</h2>
          </div>
        </div>
        <div className="inner-content">
          <div className="feedback_slider_seven">
            <Testimonial />
          </div>

        </div>
      </div>*/}
      {/* /.feedback-section-eleven */}
      {/* =============================================
				Feature Section Thirty Eight
			============================================== 
			*/}
      <div className="fancy-feature-thirtyEight mt-140 lg-mt-100">
        <div className="container">
          <TiempoCruces />
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-thirtyEight */}
      {/*=====================================================
				Fancy Short Banner Thirteen
			=====================================================
			*/}
      {/*<div
        className="fancy-short-banner-thirteen pt-170 pb-170 mt-130 lg-mt-100 lg-pt-80 lg-pb-80 "
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper zn2 bg-white position-relative">
            <div className="row">
              <div className="col-xl-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6 ms-auto order-lg-last">
                    <div className="text-wrapper">
                      <img
                        src="/images/icon/icon_114.svg"
                        alt="icon"
                        className="lazy-img mb-30"
                      />
                      <div className="title-style-one">
                        <h2 className="main-title fw-500 tx-dark m0">
                          Let’s talk with expereince advisors.
                        </h2>
                      </div>
                      <p className="fs-20 tx-dark pt-20 m0">
                        eiusmod tempor incididunt. Ut enim mim veniam, quis
                        nostrud elit lorem dolor.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 order-lg-first">
                    <div className="form-style-two md-mb-40">
                      <ContactForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="shapes shape-text fw-500 fs-20 tx-dark text-center">
              Fill the <br />
              form
            </div>
            <img
              src="/images/shape/shape_90.svg"
              alt="shape"
              className="lazy-img shapes shape-one"
            />
            <img
              src="/images/shape/shape_91.svg"
              alt="shape"
              className="lazy-img shapes shape-two"
            />
          </div>
        </div>
      </div>*/}
      {/* /.fancy-short-banner-thirteen */}

      {/* =============================================
		   Map Section
		   ============================================== */}
      <div className="blog-section-three mt-140 mb-50 lg-mt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <div data-aos="fade-up">
                <div
                  className="title-style-one text-center pb-40 lg-pb-20"
                >
                  <h2 className="main-title fw-500 tx-dark m0">
                    {home.mapaCoberturas}
                  </h2>
                </div>
                {/* /.title-style-one */}

                <Map />
              </div>
            </div>
          </div>
          {/* /.row */}

          {/* /.row */}
          {/*<div className="text-center xs-mt-40">
            <Link
              to="/blog/blog-v2"
              className="btn-twentyTwo fw-500 tran3s"
              data-aos="fade-left"
            >
              Go to Blog
            </Link>
          </div>*/}
        </div>
      </div>
      {/* /.map-section */}

      {/* =============================================
		   Blog Section Three
		   ============================================== */}
      {/*<div className="blog-section-three mt-140 mb-170 lg-mt-100 lg-mb-100">
        <div className="container">
          <div className="position-relative">
            <div className="row align-items-end">
              <div className="col-sm-8">
                <div
                  className="title-style-one text-center text-sm-start pb-40 lg-pb-20"
                  data-aos="fade-right"
                >
                  <h2 className="main-title fw-500 tx-dark m0">Our Blog</h2>
                </div>
              </div>
            </div>
            <div className="row gx-xxl-5">
              <Blog />
            </div>
            <div className="text-center xs-mt-40">
              <Link
                to="/blog/blog-v2"
                className="btn-twentyTwo fw-500 tran3s"
                data-aos="fade-left"
              >
                Go to Blog
              </Link>
            </div>
          </div>
        </div>
      </div>*/}
      {/* /.blog-section-three */}
      {/*
			=====================================================
				Footer
			=====================================================
      footer-style-ten theme-basic-footer zn2 position-relative
			*/}
      <div className="">
        <div className="container">
          <div className="inner-wrapper">
            <div className="row justify-content-between">
              {/*<div className="col-lg-3 footer-intro mb-40">
                <div className="logo">
                  <Link to="/">
                    <img src="/images/logo/logo-nu.webp" alt="logo" width={95} />
                  </Link>
                </div>
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
                  Best Insurance Company.
                </p>
                <p className="text-white opacity-50 fs-15 m0 d-none d-lg-block">
                  © 1969 - {new Date().getFullYear()}{" "}
                  jano inc.
                </p>
              </div>*/}
              <DefaultFooter />
            </div>
          </div>
          {/* /.inner-wrapper */}
        </div>
        {/* End .container */}
        {/*<img
          src="/images/assets/ils_13.png"
          alt="illustration"
          className="lazy-img illustration-one"
          data-aos="fade-left"
        />
        <img
          src="/images/assets/ils_14.png"
          alt="illustration"
          className="lazy-img illustration-two"
          data-aos="fade-right"
        />*/}
      </div>
      {/* /.footer-style-ten */}
    </>
  );
};

export default Insurance;
