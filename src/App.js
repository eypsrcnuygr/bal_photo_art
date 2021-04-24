import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from 'react';
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import img from "./assets/images/GulsenSemih.jpg";
import Logo from "./assets/images/Logo3.png";
import { Link } from "react-router-dom";

function App(props) {
  const [language, setLanguage] = useState(props.state)

  const changeLanguage = (state) => {
    if (state === 'TR') {
      setLanguage('ENG')
    } else {
      setLanguage('TR')
    };
  }

  const renderer = () => {
    if (props.state === 'TR') {
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
        <NavBar state={props.state} />
        <div className="mt-3">
          <div className="text-center">
            <img src={img} alt="Biz" className="rounded-circle my-image" />
          </div>
          <div className="card  my-card col-lg-8 mx-auto p-4 shadow-lg my-4">
            <p>Antalya’daki ballı dünyamıza hoşgeldiniz :) </p>
            <p className="bold">Beyaz ve Zamansız...</p>
            <p>
              Dünyayı gezerken tanışıp evlenmiş iki gezgin fotoğrafçıyız.
              Seyahatlerimizin yaratıcı yanımızı beslediğine inandık ve
              kendimizi, siz ailelerimizi konu alan benzersiz sanat eserleri
              oluşturmaya adadık.
            </p>
            <p>
              Akademik eğitimlerimizin ardından yenidoğan, doğum, hamilelik,
              bebek, çocuk ve aile fotoğrafçılığı üzerinde eğitimler aldık, hala
              uzmanlaşmaya ve öğrenmeye devam ediyoruz. Fotoğraflarımızda
              sadelik ve beyazlığın gücü ile bebeklerin duru güzelliğini ön
              plana çıkarmayı hedefliyoruz. Bunu yaparken yüksek kalite
              standartlarında malzemelerle hizmet sunuyoruz.
            </p>
            <p>
              Doğallığa, her bireyin kendine has ayrıntılarına, eşsizliğine
              odaklanıyor ve çekimlerimizde sadece doğal ışık kullanıyoruz.{" "}
            </p>
            <p>
              Bebekler o kadar hızlı büyüyor ki! En büyük tutkumuz, onların bir
              zamanlar ne kadar minik olduğunu size sonsuza kadar anımsatacak
              fotoğraflar çekmek.
            </p>
            <p>
              Sizinle tanışma fırsatı bulup birlikte aileniz için mutlu bir anı
              yaratma şansını yakalamayı diliyoruz.
            </p>
            <p>Sevgiler</p>
            <p>Gülşen&Semih</p>
          </div>
        </div>
      </div>

      <Footer state={props.state} />
    </div>
      )
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
        <NavBar state={props.state} />
        <div className="mt-3">
          <div className="text-center">
            <img src={img} alt="Biz" className="rounded-circle my-image" />
          </div>
          <div className="card  my-card col-lg-8 mx-auto p-4 shadow-lg my-4">
            <p>Welcome to our honey world in Antalya :) </p>
            <p className="bold">White and Timeless...</p>
            <p>
            We are two traveling photographers who met and got married on the other side of the world. We believed that our journeys nourished our creative side and we are committed to shape unique art works that present memento of your family.
            </p>
            <p>
            After completing our academic studies, we’ve educated on newborn, delivery, maternity, baby, child and family photography and still continue to specialize and learn. We aim to highlight pure beauty of babies by using natural and white concepts in our photos.  During the photo sessions we are providing high quality materials and standards for the best experience.
            </p>
            <p>
            We focus on the details, naturalness, and uniqueness of each individual by using just natural light in photo shots.{" "}
            </p>
            <p>
            Babies grow so fast! Taking photos that forever remind you of how little they were is our greatest passion in this way.
            </p>
            <p>
            We wish to have the chance to meet you and create a happy memory for your family together.
            </p>
            <p>Love,</p>
            <p>Gülşen&Semih</p>
          </div>
        </div>
      </div>

      <Footer state={props.state} />
    </div>
      )
    }
  }

  return (
    <div>{renderer()}</div>  
  );
}

export default App;
