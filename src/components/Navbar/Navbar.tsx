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
        <img></img>
        {screenWidth >= 768 ? (
          <>
            <div className="navigation">
              <p>About Us</p>
              <p>Features</p>
              <p>Education</p>
              <p>Contact</p>
            </div>
          </>
        ) : (
          <>
            {!menuState ? (
              <>
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
                  <p>About Us</p>
                  <p>Features</p>
                  <p>Education</p>
                  <p>Contact</p>
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
