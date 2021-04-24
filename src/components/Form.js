import NavBar from "./NavBar";
import Footer from "./Footer";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo3.png'


const Form = (props) => {
  const [submitText, setSubmitText] = useState(null);
  const [submitText2, setSubmitText2] = useState(null);

  const [language, setLanguage] = useState(props.state)

  const changeLanguage = (state) => {
    if (state === 'TR') {
      setLanguage('ENG')
    } else {
      setLanguage('TR')
    };
  }

  const onSubmit = async (event, setSubmitText) => {
    event.preventDefault();
    setSubmitText("Gönderiliyor ...");
    const formElements = [...event.currentTarget.elements];
    const isValid =
      formElements.filter((elem) => elem.name === "bot-field")[0].value === "";
  
    const validFormElements = isValid ? formElements : [];
  
    if (validFormElements.length < 1) {
      // or some other cheeky error message
      setSubmitText("Bir yanlışlık var");
    } else {
      const filledOutElements = validFormElements
        .filter((elem) => !!elem.value)
        .map(
          (element) =>
            encodeURIComponent(element.name) +
            "=" +
            encodeURIComponent(element.value)
        )
        .join("&");
  
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: filledOutElements,
      })
        .then(() => {
          setSubmitText("Gönderildi!");
        })
        .catch((_) => {
          setSubmitText(
            "Başarısız oldu, lütfen bana verilen email yada telefon ile ulaşın!"
          );
        });
    }
  };

  const onSubmit2 = async (event, setSubmitText) => {
    event.preventDefault();
    setSubmitText2("Sending ...");
    const formElements = [...event.currentTarget.elements];
    const isValid =
      formElements.filter((elem) => elem.name === "bot-field")[0].value === "";
  
    const validFormElements = isValid ? formElements : [];
  
    if (validFormElements.length < 1) {
      // or some other cheeky error message
      setSubmitText2("There is something wrong!");
    } else {
      const filledOutElements = validFormElements
        .filter((elem) => !!elem.value)
        .map(
          (element) =>
            encodeURIComponent(element.name) +
            "=" +
            encodeURIComponent(element.value)
        )
        .join("&");
  
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: filledOutElements,
      })
        .then(() => {
          setSubmitText2("Sent!");
        })
        .catch((_) => {
          setSubmitText(
            "There was something wrong, please reach out to me via email or phone!"
          );
        });
    }
  };

  const renderer = () => {
    if (props.state === 'TR') {
      return (
        <div className="d-flex flex-column vh-100 Main-Page">
          <div className="text-right">{language === 'TR' ? <button className=" btn btn-danger mr-3 mt-3 font-weight-bold" onClick={() => {
        changeLanguage(language);
        props.callBackFromParent('ENG');
      }}>ENG</button> : <button className="btn btn-danger mr-3 mt-3 font-weight-bold" onClick={() => {
        changeLanguage(language);
        props.callBackFromParent('TR');
      }}>TR</button> }</div>
    <div className="text-center"><Link to="/"><img src={Logo} alt="bal-photo-art Bebek Fotoğrafçılığı" className="my-image-2"/></Link></div>
    <NavBar state={language} />
    <div className="h-100 d-flex flex-column justify-content-center">
      <div className="card col-lg-8 mx-auto p-4 font-weight-bold">
        <form name="contact" method="POST" onSubmit={e => onSubmit(e, setSubmitText)}>
        <p style={{ display: "none" }}>
        <label>
          Don’t fill this out if you expect to hear from me!
          <input name="bot-field" />
        </label>
      </p>
        <input type="hidden" name="form-name" value="contact" />
        <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Adınız</label>
            <input
              type="text"
              name="name"
              className="form-control font-weight-bold"
              id="exampleFormControlInput1"
              placeholder="İsim"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Email Adresi</label>
            <input
              type="email"
              name="email"
              className="form-control font-weight-bold"
              id="exampleFormControlInput1"
              placeholder="isim@email.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Not</label>
            <textarea
              className="form-control font-weight-bold"
              name="message"
              id="exampleFormControlTextarea1"
              rows="7"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary font-weight-bold">Gönder</button>
        </form>
      </div>
      {submitText && <div>{submitText}</div>}
    </div>
    <Footer state={language} />
  </div>
      )
    } else {
      return (
        <div className="d-flex flex-column vh-100 Main-Page">
          <div className="text-right">{language === 'TR' ? <button className=" btn btn-danger mr-3 mt-3 font-weight-bold" onClick={() => {
        changeLanguage(language);
        props.callBackFromParent('ENG');
      }}>ENG</button> : <button className="btn btn-danger mr-3 mt-3 font-weight-bold" onClick={() => {
        changeLanguage(language);
        props.callBackFromParent('TR');
      }}>TR</button> }</div>
    <div className="text-center"><Link to="/"><img src={Logo} alt="bal-photo-art Bebek Fotoğrafçılığı" className="my-image-2"/></Link></div>
    <NavBar state={language} />
    <div className="h-100 d-flex flex-column justify-content-center">
      <div className="card col-lg-8 mx-auto p-4 font-weight-bold">
        <form name="contact" method="POST" onSubmit={e => onSubmit2(e, setSubmitText2)}>
        <p style={{ display: "none" }}>
        <label>
          Don’t fill this out if you expect to hear from me!
          <input name="bot-field" />
        </label>
      </p>
        <input type="hidden" name="form-name" value="contact" />
        <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Name</label>
            <input
              type="text"
              name="name"
              className="form-control font-weight-bold"
              id="exampleFormControlInput1"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control font-weight-bold"
              id="exampleFormControlInput1"
              placeholder="name@email.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Note</label>
            <textarea
              className="form-control font-weight-bold"
              name="message"
              id="exampleFormControlTextarea1"
              rows="7"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary font-weight-bold">Send</button>
        </form>
      </div>
      {submitText2 && <div>{submitText2}</div>}
    </div>
    <Footer state={language} />
  </div>
      )
    }
  }
  
  return (
  <div>{renderer()}</div>
);
  }
export default Form;
