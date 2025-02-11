import AOS from "aos";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "@/App";
import { useContext, useEffect, useState } from "react";

const slides = [
  {
    image: "/images/assets/hero-auto-background.webp",
    title: "SEGUROS AUTO",
    vehicle: "/images/assets/hero-auto-vehicle.webp",
    width: 800
  },
  {
    image: "/images/assets/hero-camion-background.jpg",
    title: "SEGUROS CAMIÓN",
    vehicle: "/images/assets/hero-camion-vehicle.webp",
    width: 800
  },
  {
    image: "/images/assets/hero-moto-background.webp",
    title: "SEGUROS MOTO ",
    vehicle: "/images/assets/hero-moto-vehicle.webp",
    width: 800
  },
];

const HeroSlider = () => {
  const { lang } = useContext(LanguageContext);
  const { t } = useTranslation();
  const homeLang = t("home");

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 9000); // Cambia cada 9 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slider__image ${
            index === currentSlideIndex ? "active" : "inactive"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        />
      ))}
      <div className="hero-slider__overlay">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slider__title ${
              index === currentSlideIndex ? "active" : "inactive"
            }`}
          >
            {/*<div className="hero-slider__title-caption">
            </div>*/}
            <h1>
              {slide.title}
            </h1>
          </div>
        ))}
      </div>
      <div className="hero-slider__content">
        <div className="hero-slider__vehicle">
          {
            slides.map((slide, index) => (
              <img key={index} width={slide.width} src={slide.vehicle} alt={slide.title} 
              className={`hero-slider__vehicle-image ${
                index === currentSlideIndex ? "active" : "inactive"
              }`}
              />
            ))
          }
        </div>
        <div className="hero-slider__content-button">
          <button className="hero-slider__button">
            COTIZA AQUÍ
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
