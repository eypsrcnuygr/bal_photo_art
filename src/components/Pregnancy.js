import NavBar from "./NavBar";
import Footer from "./Footer";
import Hamile1 from "../assets/images/Hamile1.jpg";
import Hamile2 from "../assets/images/Hamile2.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo3.png";

const Pregnancy = (props) => {
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
            <h1 className="font-weight-bold text-center">Hamilelik</h1>
            <div className="d-flex align-items-center flex-wrap">
              <div className="col-lg-5 col-10 mx-auto my-2 card bg-dark py-3">
                <img src={Hamile1} className="img img-fluid" alt="Hamile1" />
              </div>
              <div className="col-lg-5 col-10 mx-auto my-2 card bg-dark py-3">
                <img src={Hamile2} alt="Hamile2" className="img img-fluid" />
              </div>
            </div>
            <div className="card  my-card col-lg-8 mx-auto p-4 shadow-lg my-3">
              <h2 className="font-weight-bold">Sizi Neler Bekliyor</h2>
              <p>
                Birlikte belirlediğimiz dış mekanda, eşiniz ve varsa
                çocuklarınızla birlikte romantik bir deneyim!{" "}
              </p>
              <p>
                Bu çekimde kıyafet ve aksesuarları size bırakıyor ancak
                gereksinim duymanız durumunda tüm sorularınıza rehberlik
                ediyoruz. Kıyafetlerinizden küpenizin seçimine kadar, kararsız
                kaldığınız her an size destek oluyoruz.
              </p>
              <p>
                Çantamızda her daim karnınızdaki minik ve sizin için su ve
                sağlıklı atıştırmalıklar bulunduruyoruz.
              </p>
              <h2 className="font-weight-bold">Merak Ettikleriniz</h2>
              <h3>-Hamilelik çekimi ne zaman yapılır?</h3>
              <p>
                Karnınızın iyice belirginleşmiş olması için 28-35. haftalar bu
                çekim için en güzel zamandır.
              </p>
              <h3>-Bu çekim kaç saat sürer?</h3>
              <p>Hamile çekimleri yaklaşık 2 saat sürer.</p>
              <h3>-Hamilelik çekimim evimde olsun istiyorum. Bu mümkün mü?</h3>
              <p>
                Tabii ki, evinizde lifestyle tarzında fotoğraflarınız olur ve
                bizce bu mükemmeldir.
              </p>
              <h3>-Çekilen fotoğraflar ne zaman elime ulaşacak?</h3>
              <p>
                Çektiğimiz tüm fotoğrafları iki gün içinde orjinal boyutlarıyla
                ‘wetransfer’ aracılığıyla size yolluyor ve beğendiğiniz
                fotoğraflardan 15 tanesini seçip göndermenizi bekliyoruz.
                Seçtiğiniz fotoğrafları gönderdiğiniz tarihten itibaren
                düzenleyerek 2 hafta içinde tekrar wetransfer aracılığıyla
                teslim ediyoruz.
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
            <h1 className="font-weight-bold text-center">Maternity</h1>
            <div className="d-flex align-items-center flex-wrap">
              <div className="col-lg-5 col-10 mx-auto my-2 card bg-dark py-3">
                <img src={Hamile1} className="img img-fluid" alt="Hamile1" />
              </div>
              <div className="col-lg-5 col-10 mx-auto my-2 card bg-dark py-3">
                <img src={Hamile2} alt="Hamile2" className="img img-fluid" />
              </div>
            </div>
            <div className="card  my-card col-lg-8 mx-auto p-4 shadow-lg my-3">
              <h2 className="font-weight-bold">Experience</h2>
              <p>
              This is a romantic and enjoyable experience with your partner and children(if any) in the outdoor space we determined together.{" "}
              </p>
              <p>
              In this shooting we leave the clothes and accessories to you but we guide your all questions if you need.  From selection of clothes to your earring we support you whenever you are unsure.
              </p>
              <p>Additionally, this session includes a specially designed collage in high resolution.</p>
              <p>
              We always keep water and healthy snacks in our bags during this session for the mom and her little unborn baby.
              </p>
              <h2 className="font-weight-bold">FAQs</h2>
              <h3>-When will I receive the captured photos?</h3>
              <p>
              After completing the session, we will share all the photos on the same day via "wetransfer" and then expect you to select 15 of the photos you like and inform us which they are.
When you inform us, we will start adjusting and editing the photos and  after completing we will share them again within 2 weeks via wetransfer.

              </p>
              <h3>-What should I bring for the photo session?</h3>
              <p>When we make an appointment, we inform you in detail for a more comfortable session. You may always consult us when you can’t decide what to wear or anything :)</p>
              <h3>-Is this possible if I would like to get a maternity session in my home?</h3>
              <p>
              Of course, you'll have lifestyle photos in your home and we think that is perfect.
              </p>
              <h3>-When is the ideal time for a maternity session?</h3>
              <p>
              28-35 weeks of pregnancy is the best time for this session.
              </p>
              <h3>-How much time does it take?</h3>
              <p>About 2 hours.</p>
              <p>
                {" "}
                *For other questions, feel free to contact us anytime.{" "}
              </p>
            </div>
          </div>

          <Footer state={language} />
        </div>
      );
    }
  };

  return <div>{renderer()}</div>;
};

export default Pregnancy;
