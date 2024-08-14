import React, {useRef, useState} from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { IconContext } from "react-icons";
import { useTranslation } from "react-i18next";
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  message: string;
}


const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [text, setText] = useState<string>("");
  const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setName(e.target?.value);
  }  
  const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setEmail(e.target?.value);
  }  
  const handleTextChange = (e:React.ChangeEvent<HTMLTextAreaElement>) =>{
    setText(e.target?.value);
  }


  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_zodenhc', 'template_frbql9i', form.current, 'P-96Pw0kXZFRvCdwO')
        .then(
          (result) => {
            console.log('SUCCESS!', result.text);
            setSent(true);
            setError(null);
            setName("");
            setEmail("");
            setText("");
          },
          (error) => {
            console.log('FAILED...', error.text);
            setError('Wystąpił błąd podczas wysyłania wiadomości.');
            setSent(false);
          },
        );
    }
  };


  const {t, i18n} = useTranslation();
  const gridStyle={
    gridColumn: '2/3'
  };
  return (
    <>

      <section id="contact" className="contact">
      <div className="contact-bg "></div>

        <h2>{t("cont_h")}</h2>
        <p>{t("cont_p")}</p>
        <div className=" layout contact-layout">
        <div className="form">
          <form ref={form} onSubmit={sendEmail}>
          <p>{t("name")}</p>
          <input type="text" name="user_name" required value={name} onChange={handleNameChange}></input>
          <p>Email</p>
          <input type="email" name="user_email" required value={email}  onChange={handleEmailChange}></input>
          <p>{t("mess")}</p>
          <textarea placeholder={t("placeholder")} name="message" required value={text} onChange={handleTextChange}></textarea>
          <button className="gradient-btn olive-gradient" type="submit">
          {t("send")}
          </button>
          </form>
          {sent && <p>{t("message-sent")}</p>}
              {error && <p>{error}</p>}
        
        </div>
        <div className="contact-box-layout" style={gridStyle}>
          <div className="contact-box">
          <div className="contacts">
            <IconContext.Provider
              value={{ color: "var(--dark-green", size: "35px" }}
            >
              <div>
                <MdOutlineEmail />
              </div>
            </IconContext.Provider>
            <h3>Email</h3>
          </div>
          <p>{t("email_p")}</p>
          <a href="mailto:contact@greensolutions.com"><p>contact@greensolutions.com</p></a>
          </div>
          <div className="contact-box">

          <div className="contacts">
            <IconContext.Provider
              value={{ color: "var(--dark-green", size: "35px" }}
            >
              <div>
                <FiPhone />
              </div>
            </IconContext.Provider>
            <h3>{t("phone")}</h3>
          </div>
          <p>{t("phone_p")}</p>
          <p>+1 (555) 000-0000</p>
          </div>
          <div className="contact-box">

          <div className="contacts">
            <IconContext.Provider
              value={{ color: "var(--dark-green", size: "35px" }}
            >
              <div>
                <FiMapPin />
              </div>
            </IconContext.Provider>{" "}
            <h3>{t("office")}</h3>
          </div>
          <p>456 Great Ave, Melbourne VIC 3000 AU</p>
        </div>
        </div>
      
       
        </div>
        <div className="line"></div>
      </section>
    </>
  );
};

export default Contact;
