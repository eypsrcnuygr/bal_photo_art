import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState } from "react";
import Mini1 from "../assets/images/Mini1.jpg";
import Mini2 from "../assets/images/Mini2.jpg";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo3.png";

const MiniFamily = (props) => {
  const [language, setLanguage] = useState(props.state);

  const changeLanguage = (state) => {
    if (state === "TR") {
      setLanguage("ENG");
    } else {
      setLanguage("TR");
    }
  };

  const renderer = () => {
    if (props.state === "TR") {
      return (
        <div className="d-flex flex-column">
          <div className="Main-Page">
          <div className="text-right">{language === 'TR' ? <button className=" btn btn-danger mr-3 mt-3 font-weight-bold" onClick={() => {
        changeLanguage(language);
        props.callBackFromParent('ENG');
      }}>ENG</button> : <button className="btn btn-danger mr-3 mt-3 font-weight-bold" onClick={() => {
        changeLanguage(language);
        props.callBackFromParent('TR');
      }}>TR</button> }</div>
            <div className="text-center">
              <Link to="/">
                <img
                  src={Logo}
                  alt="bal-photo-art Bebek Fotoğrafçılığı"
                  className="my-image-2"
                />
              </Link>
            </div>
            <NavBar state={language} />
            <h1 className="font-weight-bold text-center">Mini Aile</h1>
            <div className="d-flex align-items-center flex-wrap">
              <div className="col-lg-5 col-10 mx-auto my-2 card bg-dark py-3">
                <img src={Mini1} className="img img-fluid" alt="Mini1" />
              </div>
              <div className="col-lg-5 col-10 mx-auto my-2 card bg-dark py-3">
                <img src={Mini2} alt="Mini2" className="img img-fluid" />
              </div>
            </div>
            <div className="card  my-card col-lg-8 mx-auto p-4 shadow-lg my-3">
              <h2>Sizi Neler Bekliyor</h2>
              <p>
                Çok az vakti olup dış mekanda aile çekimi isteyenler için
                bulunmaz fırsat. İster çekirdek ailesiyle ister tüylü ve dört
                ayaklı evlatlarıyla çekim yaptırmak isteyen herkese açıktır.
                Belirlenen dış mekanda 30 dakikalık minik ve tatlı bir çekim.
              </p>
              <p>
                Bu çekimde de kıyafet ve aksesuarları size bırakıyor fakat
                gereksinim duymanız durumunda tüm sorularınıza rehberlik
                ediyoruz. Kıyafetlerinizden küpenizin seçimine kadar, kararsız
                kaldığınız her an size destek oluyoruz.
              </p>
              <h2>Merak Ettikleriniz</h2>
              <h3>-Çekilen fotoğraflar ne zaman elime ulaşacak?</h3>
              <p>
                Çektiğimiz tüm fotoğrafları iki gün içinde orjinal boyutlarıyla
                ‘wetransfer’ aracılığıyla size yolluyor ve beğendiğiniz
                fotoğraflardan 10 tanesini seçip göndermenizi
                bekliyoruz.Seçtiğiniz fotoğrafları gönderdiğiniz tarihten
                itibaren düzenleyerek 2 hafta içinde tekrar wetransfer
                aracılığıyla teslim ediyoruz.
              </p>
              <h3>-Bu çekimin evimizde olması mümkün mü?</h3>
              <p>
                Tabii ki. Detayları konuşmak için her zaman bizi arayabilir ya
                da kahvemizi içmeye gelebilirsiniz :)
              </p>
              <p>
                {" "}
                *Diğer sorularınız ve merak ettikleriniz için dilediğiniz
                iletişim kanalımızdan her zaman bize ulaşabilirsiniz.{" "}
              </p>
            </div>
          </div>

          <Footer state={language} />
        </div>
      );
    } else {
      return (
        <div className="d-flex flex-column">
    <div className="Main-Page">
    <div className="text-right">{language === 'TR' ? <button className=" btn btn-danger mr-3 mt-3 font-weight-bold" onClick={() => {
        changeLanguage(language);
        props.callBackFromParent('ENG');
      }}>ENG</button> : <button className="btn btn-danger mr-3 mt-3 font-weight-bold" onClick={() => {
        changeLanguage(language);
        props.callBackFromParent('TR');
      }}>TR</button> }</div>
      <div className="text-center">
        <Link to="/">
          <img
            src={Logo}
            alt="bal-photo-art Bebek Fotoğrafçılığı"
            className="my-image-2"
          />
        </Link>
      </div>
      <NavBar state={language} />
      <h1 className="font-weight-bold text-center">Mini Family</h1>
      <div className="d-flex align-items-center flex-wrap">
        <div className="col-lg-5 col-10 mx-auto my-2 card bg-dark py-3">
          <img src={Mini1} className="img img-fluid" alt="Mini1" />
        </div>
        <div className="col-lg-5 col-10 mx-auto my-2 card bg-dark py-3">
          <img src={Mini2} alt="Mini2" className="img img-fluid" />
        </div>
      </div>
      <div className="card  my-card col-lg-8 mx-auto p-4 shadow-lg my-3">
        <h2>Experince</h2>
        <p>
        A golden opportunity for those who have very little time and want an outdoor family photoshoot. It's open to anyone who wants to get great pictures with the elementary family or with furry friends. A small and sweet 30 min shooting in designated outdoor space.
        </p>
        <p>
        In this shooting we leave the clothes and accessories to you but we guide your all questions if you need from selection of clothes to your earring we support you whenever you are unsure.
        </p>
        <p>Additionally, Mini Family package includes a specially designed collage in high resolution.</p>
        <h2>FAQs</h2>
        <h3>-Is this possible if I would like to get a maternity session in my home?</h3>
        <p>
        Of course, you'll have lifestyle photos in your home and we think that is perfect.
        </p>
        <h3>-When will I receive the captured photos?</h3>
        <p>
        After completing the session, we will share all the photos on the same day via "wetransfer" and then expect you to select 10 of the photos you like and inform us which they are.
When you inform us, we will start adjusting and editing the photos and  after completing we will share them again within 2 weeks via wetransfer.

        </p>
        <p>
          {" "}
          *For other questions, feel free to contact us anytime.{" "}
        </p>
      </div>
    </div>

    <Footer state={language} />
  </div>
      )
    }
  };

  return (
    <div>{renderer()}</div>
  )
};

export default MiniFamily;
