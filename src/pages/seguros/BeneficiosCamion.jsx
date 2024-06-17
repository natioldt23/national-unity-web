import Slider from "react-slick";


const BeneficiosCamion = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {beneficiosCamion.slice(0, 4).map((item) => (
          <div className="item" key={item.id}>
            <div className="feedback-block-eleven beneficios-item">
              <div className="top-header d-flex align-items-center justify-content-between">
                <div className="d-flex justify-content-between align-items-center w-100">
                  <h3 className="tx-dark m0">{item.title}</h3>
                    <img
                    src={item.image}
                    alt="tesimonial avatar"
                    className="rounded-circle"
                    width={90}
                  />
                </div>
              </div>
              <p className="tx-dark m-0 p-0">{item.text1}</p>
              <p className="tx-dark m-0 p-0">{item.text2}</p>
              <div className="d-flex align-items-center justify-content-between">
                <div className="cost fw-500 tx-dark fs-20">
                  {item.author}
                  <span className="opacity-50 fw-normal">{item.location}</span>
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default BeneficiosCamion;
