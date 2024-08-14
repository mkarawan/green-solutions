import React from "react";
import "./Hero.css";
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
    <div className="background"></div>
    <section className="hero">
      
    {/* <img className="shape" src={'./olive-shape.svg'} /> */}

      <h1 className="hero-main">{t('welcome_message')}</h1>
      <p>
        {t('hero_p')}
      </p>
      <div className="buttons">
      <a href="#about"><button className="gradient-btn">{t("btn_check")}</button></a>
      <a href="#contact"><button className="border-btn">{t("contact")}</button></a>
      </div>


      </section>
    </>
  );
};

export default Hero;
