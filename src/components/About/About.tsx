import React from "react";
import "./About.css";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const {t, i18n} = useTranslation();
  return (
    <>
      <section id="about" className="about">
      
          <div className="our-mission">
            <h2>{t("mission")}<img className="header-accent" src={"./green-accent.svg"} /></h2>
           
          </div>
          <div className="layout">
          <div className="div1">
          <p>
            {t("goal")}
          </p>
          </div>
          <div className="div2">
          <p className="goals">{t("main_goals")}</p>
          <ul className="goals-list">
            <li>
              {t("goal_1")}
            </li>
            <li>
            {t("goal_2")}
            </li>
            <li>
            {t("goal_3")}
            </li>
          </ul>
          </div>
          <div className="div3">
          <img className="graphic " src={"./audit.svg"} />
          </div>
          </div>
         

          <img className="cream-shape" src={'./cream-shape.svg'} />

      </section>
      <section className="transforming">
        <h2 className="centered-heading">
        {t("transforming")}
        </h2>
        <div className="layout-3col">
          <div>
          <img className="graphic" src={"./audit2.png"} />
          <h3 className="olive"> {t("trans_1h")}</h3>
          <p>
          {t("trans_1p")}
          </p>
        </div>
        <div>
          <img className="graphic" src={"./waste.png"} />
          <h3 className="olive">{t("trans_2h")} </h3>
          <p>
          {t("trans_2p")}
          </p>
        </div>
        <div>
          <img className="graphic" src={"./turbine.png"} />
          <h3 className="olive">{t("trans_3h")}</h3>
          <p>
          {t("trans_3p")}
          </p>
        </div>
        </div>
      </section>
      <section className="edu">
      <div>
 
          <div className="layout education-layout">
          <h2 id="education" className="sea-color">
            {t("edu")}
          </h2>
            <div>
         
            <p>
            {t("edu_p")}

          </p>
          <a href="#contact"><button className="gradient-btn centered-btn">{t("contact")}</button></a>
              </div>
         
          <img className="graphic education-img" src={'./education.png'} />
          </div>
        

        </div>
      </section>
    </>
  );
};

export default About;
