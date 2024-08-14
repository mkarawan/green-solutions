import React from "react";
import "./Practices.css";
import { useTranslation } from "react-i18next";

const Practices: React.FC = () => {
  const {t, i18n} = useTranslation();
  return (
    <>
      <section className="steps">
          <h2 className="white-heading">
            {t("impl")}<img className="header-accent" src={"./cream-accent.svg"} />
          </h2>
          

        <p>
        {t("impl_p")}
        </p>
        <div className="steps-layout">
        <img className="graphic earth" src={'./earth.png'} />
        <div className="step1 step">
            <h3><img className="header-accent" src={"./cream-poin.svg"} />
            {t("step")}<span className="number">1</span>
            </h3>
            <p>{t("step_1")}</p>
          </div>
          <div className="step2 step">
            <h3><img className="header-accent" src={"./cream-poin.svg"} />
            {t("step")} <span className="number">2</span>
            </h3>
            <p>
            {t("step_2")}
            </p>
          </div>
          <div className="step3 step">
            <h3><img className="header-accent" src={"./cream-poin.svg"} />
            {t("step")} <span className="number">3</span>
            </h3>
            <p>{t("step_3")}</p>
          </div>
          <div className="step4 step">
            <h3><img className="header-accent" src={"./cream-poin.svg"} />
            {t("step")} <span className="number">4</span>
            </h3>
            <p>{t("step_4")}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Practices;
