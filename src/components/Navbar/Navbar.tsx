import React, { useEffect, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import { IconContext } from "react-icons";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [menuState, setMenuState] = useState<boolean>(false);
  const [plcolor, setPlColor] = useState<string>("#969696");
  const [encolor, setEnColor] = useState<string>("var(--te");

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const handleChangePl = () => {
    changeLanguage("pl");
    setPlColor("var(--text-color)");
    setEnColor("#969696");
  };
  const handleChangeEn = () => {
    changeLanguage("en");
    setEnColor("var(--text-color)");
    setPlColor("#969696");
  };

  const clickMenu = () => {
    setMenuState(!menuState);
  };
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (menuState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuState]);
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    const scrollPosition = window.scrollY;

    if (scrollPosition >= 80) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
  });
  return (
    <>
      <div className="navbar">
        {screenWidth >= 768 ? (
          <>
            <img className="pc-logo" alt="gs-logo"  src={"./gs-logo.svg"} />
            <div className="menu-elements">
              <p onClick={() => setMenuState(false)}>
                <a href="#about">{t("nav_about")}</a>
              </p>
              <p onClick={() => setMenuState(false)}>
                <a href="#education">{t("nav_edu")}</a>
              </p>
              <p onClick={() => setMenuState(false)}>
                <a href="#testimonials">{t("nav_tes")}</a>
              </p>
              <p onClick={() => setMenuState(false)}>
                <a href="#contact">{t("contact")}</a>
              </p>
            </div>
            <div className="lang-btns">
              <button style={{ color: plcolor }} onClick={handleChangePl}>
                PL
              </button>
              <button style={{ color: encolor }} onClick={handleChangeEn}>
                EN
              </button>
            </div>
          </>
        ) : (
          <>
            {!menuState ? (
              <>
                <img alt="gs-logo"  src={"./gs-logo.svg"} />
                <IconContext.Provider
                  value={{ color: "var(--dark-grey", size: "35px" }}
                >
                  <div className="open" onClick={clickMenu}>
                    <CgMenuRight />
                  </div>
                </IconContext.Provider>
              </>
            ) : (
              <>
                <div className="navigation-mobile">
                  <IconContext.Provider
                    value={{ color: "var(--dark-grey", size: "35px" }}
                  >
                    <div className="close" onClick={clickMenu}>
                      <CgClose />
                    </div>
                  </IconContext.Provider>
                  <p onClick={() => setMenuState(false)}>
                    <a href="#about">{t("nav_about")}</a>
                  </p>
                  <p onClick={() => setMenuState(false)}>
                    <a href="#education">{t("nav_edu")}</a>
                  </p>
                  <p onClick={() => setMenuState(false)}>
                    <a href="#testimonials">{t("nav_tes")}</a>
                  </p>
                  <p onClick={() => setMenuState(false)}>
                    <a href="#contact">{t("contact")}</a>
                  </p>
                  <div className="lang-btns-mobile">
                  <button style={{ color: plcolor }} onClick={handleChangePl}>
                    PL
                  </button>
                  <button style={{ color: encolor }} onClick={handleChangeEn}>
                    EN
                  </button>
                </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
