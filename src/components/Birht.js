import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/images/Logo3.png";

const Birth = (props) => {
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
            props.callBackFromParent('ENG')
          }}>ENG</button> : <button className="btn btn-danger mr-3 mt-3 font-weight-bold" onClick={() => {
            changeLanguage(language);
            props.callBackFromParent('TR')
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
            <div className="h-100">
              <h1 className="font-weight-bold text-center">Doğum</h1>
              <div className="card  my-card col-lg-8 mx-auto p-4 shadow-lg my-3">
                <h2>Sizi Neler Bekliyor</h2>
                <p>
                  Doğum bu hayattaki en kutsal ve en değerli an. Bu anı
                  yaşamakta olan bir annenin hassasiyetlerini biliyor ve onun
                  hep sakin ve şımartılmış hissetmesi için elimizden geleni
                  yapıyoruz.
                </p>
                <p>
                  Sezaryen doğumlarda doğum saatinden en az 2 saat önce
                  hastanede oluyoruz. Normal doğumlarda ise sancınız
                  başladığında hastaneye giderken bize haber verdiğiniz takdirde
                  sürekli irtibat halinde oluyoruz ve açıklık 7 cm’e ulaştığında
                  hastanede, yanınızda oluyoruz.
                </p>
                <p>
                  Bu en özel günde; doğum öncesi hastanede anne ve baba özel
                  çekimi, bekleyen heyecanlı aile büyükleri, doğum için yapılmış
                  hazırlıklar, doğum esnasında bebeğini bekleyen baba, bebeğin
                  dünyaya gelişi, ilk nefesi, anneyle ilk kucaklaşması, ilk
                  muayenesi, aile bireylerinin onu gördüğü ilk an, odaya gelince
                  anne baba ve bebek özel çekimi ve daha fazlasını sizlere
                  sunuyoruz.
                </p>
                <p>
                  Bu çekim, size özel olarak tasarlanmış ve yüksek kalitede
                  basılmış özel çerçeveli bir kolaj da içeriyor. Ayrıca doğumdan
                  sonraki 15 gün içinde stüdyomuzda bir de mini aile çekimi
                  hediye ediyoruz.
                </p>
                <h2>Merak Ettikleriniz</h2>
                <h3>-Çekilen fotoğraflar ne zaman elime ulaşacak?</h3>
                <p>
                  Çektiğimiz tüm fotoğrafları iki gün içinde orjinal
                  boyutlarıyla ‘wetransfer’ aracılığıyla size yolluyor ve
                  beğendiğiniz fotoğraflardan 30 tanesini seçip göndermenizi
                  bekliyoruz. Seçtiğiniz fotoğrafları gönderdiğiniz tarihten
                  itibaren düzenleyerek 2 hafta içinde tekrar wetransfer
                  aracılığıyla teslim ediyoruz.
                </p>
                <h3>
                  -Sadece doğum sonrası odada fotoğraf çektirmek istiyoruz. Bu
                  mümkün mü?
                </h3>
                <p>
                  Elbette. Detayları konuşmak için her zaman bize ulaşabilir, ya
                  da kahvemizi içmeye gelebilirsiniz :)
                </p>
                <h3>-Anlaşmalı olduğunuz bir hastane var mı?</h3>
                <p>
                  Hastanelerle bu konuda anlaşma yapmayı doğru bulmuyoruz. Bu
                  özel günde dileyen herkes kendi fotoğrafçısı ile çalışabilmeli
                  :)
                </p>
                <h3>
                  -Albüm fiyatları ne kadar? Ne kadar sürede albümüm hazırlanır?
                </h3>
                <p>
                  Eğer anlarınızı bir albümde saklayıp nesilden nesile aktarmak
                  isterseniz stüdyomuza geldiğinizde görerek seçip fiyat
                  değerlendirmesi yapabilirsiniz. Albüm teslim süremiz
                  seçtiğiniz fotoğrafların düzenlenmesi ve albüm tasarımı
                  bittikten sonra onay verdiğiniz süre itibariyle 3-4 haftadır.
                </p>
                <h3>-Bu çekim kaç saat sürer?</h3>
                <p>Bazen 3 saat, bazen 30 saat sürebilir :)</p>
                <h3>-Normal doğumda bir aksilik çıkar da gelemezseniz?</h3>
                <p>
                  Çok aksi bir durum olmadıkça söz verdiğimiz doğuma geliriz.
                  Fakat dünya hali. Normal doğumlarda her zaman yedek
                  fotoğrafçı(lar) bulundurmanızı şiddetle tavsiye ederiz
                </p>
                <h3>
                  -Çektiğiniz fotoğrafları paylaşmanızı istemiyorsak ne
                  yapmalıyız?
                </h3>
                <p>
                  Söylemeniz yeterli, eğer siz istemiyorsanız fotoğraflarınızı
                  paylaşmayız :)
                </p>
                <p>
                  {" "}
                  *Diğer sorularınız ve merak ettikleriniz için dilediğiniz
                  iletişim kanalımızdan her zaman bize ulaşabilirsiniz.{" "}
                </p>
              </div>
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
          props.callBackFromParent('ENG')
        }}>ENG</button> : <button className="btn btn-danger mr-3 mt-3 font-weight-bold" onClick={() => {
          changeLanguage(language);
          props.callBackFromParent('TR')
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
          <div className="h-100">
            <h1 className="font-weight-bold text-center">Delivery</h1>
            <div className="card  my-card col-lg-8 mx-auto p-4 shadow-lg my-3">
              <h2>Experience</h2>
              <p>
              Birth is the most sacred and precious moment in this life. We know the sensibilities of a mother who is living this moment, and we do our best to keep her feeling calm and pampered.

              </p>
              <p>
              n cesarean deliveries, we are at the hospital at least 2 hours before the delivery time. In normal deliveries, if you inform us when your pain starts, we are in constant contact and when the gap reaches 7 cm, we are at the hospital with you.
              </p>
              <p>
              On this most special day; we are focusing to capture and not to miss all the feelings and unique moments like Mom and dad special shooting at the prenatal hospital room, excited family elders, preparations for the birth, the father waiting for the baby during the delivery, moment the baby comes into the world, the first breath, the first hug with the mother, the first examination, the first moment the family members see her/him, when the parents and baby come to the room a special shooting and more.
              </p>
              <p>
              Additionally, Delivery package includes a high quality printed collage with a special frame. We also present a mini family shoot in our studio within 15 days of birth.
              </p>
              <h2>FAQs</h2>
              <h3>-When will I receive the captured photos?</h3>
              <p>
              After completing the session, we will share all the photos on the same day via "wetransfer" and then expect you to select 30 of the photos you like and inform us which they are.
When you inform us, we will start adjusting and editing the photos and  after completing we will share them again within 2 weeks via wetransfer.

              </p>
              <h3>
                -How much is the album price? How soon will my album be prepared?
              </h3>
              <p>
              If you want to keep your moments in an album and pass on to the next generations, we will share different kind of album models with you to choose which you prefer. If you would like to see some samples, you can be our guest in our studio and check the options with a cup of drinks.Then we will set a new price including this service and album delivery time is 3-4 weeks from the time you approve the edited and album designed photos you have chosen. 
              </p>
              <h3>-What should we do if we don't want you to share the photos?</h3>
              <p>
              Just mention it, we won't share your photos if you don't want to :)
              </p>
              <h3>
                -If there is a normal birth and you can not come for some reason?
              </h3>
              <p>
              Unless there is a very contrary situation, we come to the delivery as we promised. But just in case we strongly recommend that you always have backup photographer(s) for normal births.
              </p>
              <h3>-How much time does delivery shooting take?</h3>
              <p>Sometimes it may take 3 hours, sometimes 30 hours :)</p>
              <h3>-Is there any hospital you have an agreement with?</h3>
              <p>
              We do not think it is fair to deal with hospitals on this issue. Everyone has a right to choose their own photographer on this special day :) 
              </p>
              <p>
                {" "}
                *For other questions, feel free to contact us anytime.{" "}
              </p>
            </div>
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

export default Birth;
