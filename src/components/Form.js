import NavBar from "./NavBar";
import Footer from "./Footer";
import React, { useState } from "react";


const Form = () => {
  const [submitText, setSubmitText] = useState(null);
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
  
  return (
  <div className="d-flex flex-column vh-100 Main-Page">
    <NavBar />
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
    <Footer />
  </div>
);
  }
export default Form;
