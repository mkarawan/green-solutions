import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./Testimonials.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Testimonials: React.FC = () => {
  const {t, i18n} = useTranslation();
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [cardID, setCardID] = useState<number>(1);
  const dot1 = cardID === 1 ? "var(--turquoise)" : "var(--light-green)";
  const dot2 = cardID === 2 ? "var(--turquoise)" : "var(--light-green)";
  const dot3 = cardID === 3 ? "var(--turquoise)" : "var(--light-green)";

  const increaseCardID = () => {
    setCardID(cardID + 1);
    if (cardID >= 3) {
      setCardID(1);
    }
    console.log(cardID);
  };
  const decreaseCardID = () => {
    setCardID(cardID - 1);
    console.log(cardID);
    if (cardID <= 1) {
      setCardID(3);
    }
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

  return (
    <>
      <section id="testimonials" className="testimonial-section">
        <h2 className="sea-color testimonials">{t("tes_h")}</h2>

        {screenWidth >= 880 ? (
          <div className="testimonials-pc">
            <div className="card card1">
              <div className="stars">
                <IconContext.Provider
                  value={{ color: "var(--turquoise)", size: "15px" }}
                >
                  <div>
                    <FaStar />
                  </div>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ color: "var(--turquoise)", size: "15px" }}
                >
                  <div>
                    <FaStar />
                  </div>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ color: "var(--turquoise)", size: "15px" }}
                >
                  <div>
                    <FaStar />
                  </div>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ color: "var(--turquoise)", size: "15px" }}
                >
                  <div>
                    <FaStar />
                  </div>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ color: "var(--turquoise)", size: "15px" }}
                >
                  <div>
                    <FaStar />
                  </div>
                </IconContext.Provider>
              </div>
              <p>
              {t("tes_1")}
              </p>
              <img className="customer-img" src={"./michael.jpg"} />
              <p className="customer-name">Michael Smith</p>
            </div>
            <div className="card card2">
              <div className="stars">
                <IconContext.Provider
                  value={{ color: "var(--light-green)", size: "15px" }}
                >
                  <div>
                    <FaStar />
                  </div>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ color: "var(--light-green)", size: "15px" }}
                >
                  <div>
                    <FaStar />
                  </div>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ color: "var(--light-green)", size: "15px" }}
                >
                  <div>
                    <FaStar />
                  </div>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ color: "var(--light-green)", size: "15px" }}
                >
                  <div>
                    <FaStar />
                  </div>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ color: "var(--light-green)", size: "15px" }}
                >
                  <div>
                    <FaStar />
                  </div>
                </IconContext.Provider>
              </div>
              <p>
              {t("tes_2")}
              </p>
              <img className="customer-img" src={"./emily.jpg"} />
              <p className="customer-name">Emily Johnson</p>
            </div>
            <div className="card card3">
              <div className="stars">
                <IconContext.Provider
                  value={{ color: "var(--mint-green)", size: "15px" }}
                >
                  <div>
                    <FaStar />
                  </div>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ color: "var(--mint-green)", size: "15px" }}
                >
                  <div>
                    <FaStar />
                  </div>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ color: "var(--mint-green)", size: "15px" }}
                >
                  <div>
                    <FaStar />
                  </div>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ color: "var(--mint-green)", size: "15px" }}
                >
                  <div>
                    <FaStar />
                  </div>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ color: "var(--mint-green)", size: "15px" }}
                >
                  <div>
                    <FaStar />
                  </div>
                </IconContext.Provider>
              </div>
              <p>
              {t("tes_3")}
              </p>
              <img className="customer-img" src={"./jessica.jpg"} />
              <p className="customer-name">Jessica Brown</p>
            </div>
          </div>
        ) : (
          <>
            <div className="carousel">
              <IconContext.Provider
                value={{ color: "var(--turquoise", size: "35px" }}
              >
                <div className="arrow" onClick={decreaseCardID}>
                  <IoIosArrowBack />
                </div>
              </IconContext.Provider>

              {cardID == 1 && (
                <div className="card card1 carousel-card">
                  <div className="stars">
                    <IconContext.Provider
                      value={{ color: "var(--turquoise)", size: "15px" }}
                    >
                      <div>
                        <FaStar />
                      </div>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{ color: "var(--turquoise)", size: "15px" }}
                    >
                      <div>
                        <FaStar />
                      </div>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{ color: "var(--turquoise)", size: "15px" }}
                    >
                      <div>
                        <FaStar />
                      </div>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{ color: "var(--turquoise)", size: "15px" }}
                    >
                      <div>
                        <FaStar />
                      </div>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{ color: "var(--turquoise)", size: "15px" }}
                    >
                      <div>
                        <FaStar />
                      </div>
                    </IconContext.Provider>
                  </div>
                  <p>
                  {t("tes_1")}
                  </p>
                  <img className="customer-img" src={"./michael.jpg"} />
                  <p className="customer-name">Michael Smith</p>
                </div>
              )}
              {cardID == 2 && (
                <div className="card card2">
                  <div className="stars">
                    <IconContext.Provider
                      value={{ color: "var(--light-green)", size: "15px" }}
                    >
                      <div>
                        <FaStar />
                      </div>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{ color: "var(--light-green)", size: "15px" }}
                    >
                      <div>
                        <FaStar />
                      </div>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{ color: "var(--light-green)", size: "15px" }}
                    >
                      <div>
                        <FaStar />
                      </div>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{ color: "var(--light-green)", size: "15px" }}
                    >
                      <div>
                        <FaStar />
                      </div>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{ color: "var(--light-green)", size: "15px" }}
                    >
                      <div>
                        <FaStar />
                      </div>
                    </IconContext.Provider>
                  </div>
                  <p>
                  {t("tes_2")}
                  </p>
                  <img className="customer-img" src={"./emily.jpg"} />
                  <p className="customer-name">Emily Johnson</p>
                </div>
              )}
              {cardID == 3 && (
                <div className="card card3">
                  <div className="stars">
                    <IconContext.Provider
                      value={{ color: "var(--mint-green)", size: "15px" }}
                    >
                      <div>
                        <FaStar />
                      </div>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{ color: "var(--mint-green)", size: "15px" }}
                    >
                      <div>
                        <FaStar />
                      </div>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{ color: "var(--mint-green)", size: "15px" }}
                    >
                      <div>
                        <FaStar />
                      </div>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{ color: "var(--mint-green)", size: "15px" }}
                    >
                      <div>
                        <FaStar />
                      </div>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{ color: "var(--mint-green)", size: "15px" }}
                    >
                      <div>
                        <FaStar />
                      </div>
                    </IconContext.Provider>
                  </div>
                  <p>
                  {t("tes_3")}
                  </p>
                  <img className="customer-img" src={"./jessica.jpg"} />
                  <p className="customer-name">Jessica Brown</p>
                </div>
              )}

              <IconContext.Provider
                value={{ color: "var(--turquoise", size: "35px" }}
              >
                <div className="arrow" onClick={increaseCardID}>
                  <IoIosArrowForward />
                </div>
              </IconContext.Provider>
            </div>
            <div className="dots">
              <IconContext.Provider
                value={{ color: dot1, size: "35px" }}
              >
                <div className="dot">
                <BsDot />
                </div>
              </IconContext.Provider>
              <IconContext.Provider
                value={{ color: dot2, size: "35px" }}
              >
                <div className="dot">
                <BsDot />
                </div>
              </IconContext.Provider>
              <IconContext.Provider
                value={{ color: dot3, size: "35px" }}
              >
                <div className="dot">
                <BsDot />
                </div>
              </IconContext.Provider>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Testimonials;
