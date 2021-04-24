import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState } from "react";
import Yas1 from "../assets/images/Yas1.jpg";
import Yas2 from "../assets/images/Yas2.jpg";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo3.png";

const Birthday = (props) => {
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
            <h1 className="font-weight-bold text-center">Yaş Günü</h1>
            <div className="d-flex align-items-center flex-wrap">
              <div className="col-lg-5 col-10 mx-auto my-2 card bg-dark py-3">
                <img src={Yas1} className="img img-fluid" alt="Yas1" />
              </div>
              <div className="col-lg-5 col-10 mx-auto my-2 card bg-dark py-3">
                <img src={Yas2} alt="Yas2" className="img img-fluid" />
              </div>
            </div>
            <div className="card  my-card col-lg-8 mx-auto p-4 shadow-lg my-3">
              <h2>Sizi Neler Bekliyor</h2>
              <p>
                Stüdyomuza geldiğinizde bolca güler yüz ve misafirperverlik sizi
                bekliyor :) Rahat koltuklar, güzel bir manzara, bebeğiniz için
                en uygun sıcaklıkta ve steril bir ortam.. Dinlendirici bir
                içecek ve atıştırmalıklarla çekim deneyiminizi konforlu hale
                getirecek her küçük detayı düşünmeye çalıştık. Ayrıca miniklerin
                rahatı için alt bakım ünitemizde ihtiyaç duyacağınız her şey
                var. Bebeğinizin mamasını ısıtmak için gerekli tüm malzemeleri
                sunan bir mutfağımız da mevcut.
              </p>
              <p>
                Stüdyomuzda minik bebeklerimizi asla rahatsız etmeyecek ve
                onlara zarar vermeyecek birçoğu organik kıyafetlerimizi
                beğeninize sunuyoruz. Ayrıca çok sayıda tasarım aksesuarımız
                sizleri bekliyor olacak.
              </p>
              <p>
                Bebeğiniz için özel olarak sipariş ettiğimiz küçük bir pasta
                miniklerin beğenisine sunuluyor ve artanı akşam çayınızı
                yudumlarken afiyetle yemek isterseniz paketliyoruz.
              </p>
              <p>
                Bu çekimde pasta parçalama sonrası için bebeğinize sıcacık
                steril bir duş ve temiz havlu da sunuyoruz.
              </p>
              <p>
                Eğer bebeğinizin ablası ya da abisi varsa burada memnuniyetle
                karşılanırlar. Çekim esnasında keyifle oynayıp vakit
                geçirecekleri oyuncak kutusu onları bekliyor olacak. Mini aile
                çekimi haricinde abla/abi ile birlikte de bebeğinizin
                fotoğraflarını çekiyoruz. Eğer abla/abi(ler) çekim boyunca
                sıkılırsa ebeveynlerden biri ile gidebileceği park çok
                yakınımızda.
              </p>
              <h2>Merak Ettikleriniz</h2>
              <h3>-1 yaş çekimi nedir ve ne zaman yapılır?</h3>
              <p>
                Bebekleriniz gözlerinizin önünde hızlıca büyürken ilk yaşında
                nasıl göründüğünü ve neler yaptığını ömür boyu hatırlamanız için
                yaş çekimi mükemmeldir. Bebeğiniz için ise hiç kuşkusuz çok
                eğlenceli bir deneyim :) Bu çekim 1 yaş için bebeğiniz yürümeye
                başlamadan, yani tercihen 10-11 aylıkken yapılır. Stüdyomuzdan
                sizin seçeceğiniz kıyafetler ve tasarım aksesuarlarla
                gerçekleşen bu çekim pasta parçalama ve mini aile çekimini de
                içerir. Size özel olarak tasarlanmış ve yüksek çözünürlükte
                30x30 cm boyutunda bir kolaj da dahildir.
              </p>
              <h3>
                -2,3 ve diğer yaşlardaki çocuklar için doğum günü çekimi mümkün
                mü?
              </h3>
              <p>
                Tabiki, isteğinize göre stüdyoda ya da dış mekanda her yaştan
                çocuk için eğlenceli çekimler yapmamız mümkün. Detayları
                konuşmak için her zaman bizi arayabilir ya da kahvemizi içmeye
                gelebilirsiniz :)
              </p>
              <h3>-Pasta parçalama için gereken pastayı biz mi getiriyoruz?</h3>
              <p>
                Hayır. Sadece bebeğinizin tatlı gülücüklerini getirmeye ne
                dersiniz? :)
              </p>
              <h3>-Çekilen fotoğraflar ne zaman elime ulaşacak?</h3>
              <p>
                Çektiğimiz tüm fotoğrafları iki gün içinde orjinal boyutlarıyla
                ‘wetransfer’ aracılığıyla size yolluyor ve beğendiğiniz
                fotoğraflardan 20 tanesini seçip göndermenizi bekliyoruz.
                Seçtiğiniz fotoğrafları gönderdiğiniz tarihten itibaren
                düzenleyerek 2 hafta içinde tekrar wetransfer aracılığıyla
                teslim ediyoruz.
              </p>
              <h3>-Yaş çekimleri kaç saat sürüyor?</h3>
              <p>Yaş çekimleri ortalama 1-2 saat sürüyor.</p>
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
            <h1 className="font-weight-bold text-center">Birthday</h1>
            <div className="d-flex align-items-center flex-wrap">
              <div className="col-lg-5 col-10 mx-auto my-2 card bg-dark py-3">
                <img src={Yas1} className="img img-fluid" alt="Yas1" />
              </div>
              <div className="col-lg-5 col-10 mx-auto my-2 card bg-dark py-3">
                <img src={Yas2} alt="Yas2" className="img img-fluid" />
              </div>
            </div>
            <div className="card  my-card col-lg-8 mx-auto p-4 shadow-lg my-3">
              <h2>Experience</h2>
              <p>
                When you are going to be our guest, lots of smiles and
                hospitality are waiting for you in our studio. Comfy seats, a
                beautiful view and a sterile ambiance suitable for your baby .
                We tried to think of every little detail that would make your
                experience enjoyable with relaxing drinks and snacks. For the
                comfort of the little ones, our bathinette has everything you
                will need.
              </p>
              <p>
                In our studio, we offer many organic clothes that will never
                disturb and harm your little ones. In addition, many of the
                designed accessories will be waiting for you.
              </p>
              <p>
              A bespoke cake is served to the little ones and the leftover is packed while sipping your evening tea if you want to enjoy it. After the cake crushing, we offer a warm shower and a sterile towel for cleaning your babies. 
              </p>
              <p>
              If your baby has a sister or brother, they will be very welcomed here.  As a part from the mini family shoot, we take pictures of your baby with the sister/brother. If the sister/brother starts to get bored during the photoshoot, a toy box will be waiting for them to play and spend time. Even if this is not enough for making them relaxed, we are very close to park for an outdoor game time, of course accompanied by one of the parents.
              </p>
              <h2>FAQs</h2>
              <h3>-What is a 1st birthday session and when is the ideal time?</h3>
              <p>
              This is a very funny experience for your baby and the best way to remember how your little one looks on her/his first birthday.  The perfect time for this shoot is 10-11 months old. This photoshoot takes place with organic clothes and designed accessories of your choice. Additionally, 1st Birthday package includes family shoot and a specially designed collage in high resolution.
              </p>
              <h3>
                -When will I receive the captured photos?
              </h3>
              <p>
              After completing the session, we will share all the photos on the same day via "wetransfer" and then expect you to select 20 of the photos you like and inform us which they are.
When you inform us, we will start adjusting and editing the photos and  after completing we will share them again within 2 weeks via wetransfer.

              </p>
              <h3>-How much is the album price? How soon will my album be prepared?</h3>
              <p>
              If you want to keep your moments in an album and pass on to the next generations, when you come to the studio you can see the options and choose the best for you and then we will  set a new price including this service. The album delivery time is 2-4 weeks from the time you approve the edited and album designed photos you have chosen.
              </p>
              <h3>-Is it possible for us to have a birthday photoshoot for children of 2,3 and other ages?</h3>
              <p>
              Of course, it is possible to take funny photos for children of all ages. Especially outdoors is the best for this when they start to walk and run. You can always contact us to talk about the details or visit us to have a coffee :)
              </p>
              <h3>-What should we do if we don't want you to share the photos?</h3>
              <p>Just mention it, we won't share your photos if you don't want to :)</p>
              <h3>-How much time does birthday photoshoots take?</h3>
              <p>It takes 1-2  hours on average.</p>
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

  return (
    <div>{renderer()}</div>
  )
};

export default Birthday;
