import React, { useCallback, useEffect, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { CgClose } from "react-icons/cg";

import { IconContext } from "react-icons";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [menuState, setMenuState] = useState<boolean>(false);
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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';

    }

    return () => {
      document.body.style.overflow = 'auto';

    };
  }, [menuState]);

  return (
    <>
      <div className="navbar">

        {screenWidth >= 768 ? (
          <>
                <img className="pc-logo" src={"./gs-logo.svg"}/>
            <div className="menu-elements">
              <p onClick={() => setMenuState(false)}><a href="#about">About Us</a></p>
              <p onClick={() => setMenuState(false)}><a href="#education">Education</a></p>
              <p onClick={() => setMenuState(false)}><a href="#testimonials">Testimonials</a></p>
              <p onClick={() => setMenuState(false)}><a href="#contact">Contact</a></p>
              </div>
          </>
        ) : (
          <>
            {!menuState ? (
              <>
              <img src={"./gs-logo.svg"}/>
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
                  <p onClick={() => setMenuState(false)}><a href="#about">About Us</a></p>
                  <p  onClick={() => setMenuState(false)}><a href="#education">Education</a></p>
                  <p  onClick={() => setMenuState(false)}><a href="#testimonials">Testimonials</a></p>
                  <p onClick={() => setMenuState(false)}><a href="#contact">Contact</a></p>
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
