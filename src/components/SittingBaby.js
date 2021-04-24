import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState } from "react";
import Sitter1 from "../assets/images/sitter1.jpg";
import Sitter2 from "../assets/images/sitter2.jpg";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo3.png";

const SittingBaby = (props) => {
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
            <h1 className="font-weight-bold text-center">Oturabilen Bebek</h1>
            <div className="d-flex align-items-center flex-wrap">
              <div className="col-lg-5 col-10 mx-auto my-2 card bg-dark py-3">
                <img src={Sitter1} className="img img-fluid" alt="Sitter1" />
              </div>
              <div className="col-lg-5 col-10 mx-auto my-2 card bg-dark py-3">
                <img src={Sitter2} alt="Sitter2" className="img img-fluid" />
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
                var. Bebeğinizin mamasını ısıtmak/saklamak için gerekli tüm
                malzemeleri sunan bir mutfağımız da mevcut.
              </p>
              <p>
                Stüdyomuzda minik bebeklerimizi asla rahatsız etmeyecek ve
                onlara zarar vermeyecek organik kıyafetleri beğeninize
                sunuyoruz. Ayrıca çok sayıda tasarım aksesuarımız sizleri
                bekliyor olacak.
              </p>
              <p>
                Eğer bebeğinizin ablası ya da abisi varsa burada memnuniyetle
                karşılanırlar. Çekim esnasında keyifle oynayıp vakit
                geçirecekleri oyuncak kutusu onları bekliyor. Mini aile çekimi
                haricinde abla/abi ile birlikte de bebeğinizin fotoğraflarını
                çekiyoruz. Eğer abla/abi(ler) çekim boyunca sıkılırsa
                ebeveynlerden biri ile gidebileceği park çok yakınımızda.
              </p>
              <h2>Merak Ettikleriniz</h2>
              <h3>-Oturabilen bebek çekimi nedir?</h3>
              <p>
                Desteksiz bir şekilde güvenle oturmayı öğrenmiş 9 aya kadar olan
                bebeğinize özel bir çekimdir. Bu dönemde bebeğinizin kendine has
                hareketleri, bakışları ve karakteri oluşmaya başlamış olacağı
                için her çekim eşsiz güzelliktedir. Stüdyomuzdan sizin
                seçeceğiniz kıyafetler ve tasarım aksesuarlarla gerçekleşen bu
                çekim mini aile çekimini de içerir ve size özel olarak
                tasarlanmış yüksek çözünürlükte bir kolaj da dahildir.
              </p>
              <h3>-Bu çekim kaç saat sürer?</h3>
              <p>Bebeğinizin keyfine bağlı olarak ortalama 1-2 saat sürer.</p>
              <h3>-Ya çekim bebeğimin uyku saatine denk gelirse</h3>
              <p>
                Randevu oluştururken bebeğinizin uyku saatlerine göre en uygun
                zamanı seçmeye çalışıyoruz.
              </p>
              <h3>-Çekilen fotoğraflar ne zaman elime ulaşacak?</h3>
              <p>
                Çektiğimiz tüm fotoğrafları aynı gün orjinal boyutlarıyla
                ‘wetransfer’ aracılığıyla size yolluyor ve beğendiğiniz
                fotoğraflardan 15 tanesini seçip göndermenizi bekliyoruz.
                Seçtiğiniz fotoğrafları gönderdiğiniz tarihten itibaren
                düzenleyerek 2 hafta içinde tekrar wetransfer aracılığıyla
                teslim ediyoruz.
              </p>
              <h3>-Stüdyonuza çekime gelirken ne getirmeliyim?</h3>
              <p>
                Eğer bebeğiniz ek gıda alıyorsa yanınızda getirmenizi tavsiye
                ediyoruz. Randevu oluşturduğumuzda daha rahat bir çekim
                geçirmeniz için ayrıntılı bir çekim rehberi göndererek sizi
                bilgilendiriyoruz. Ne giyeceğinize karar veremediğinizde veya
                bebeğinizin abisi/ablasının kıyafet seçimi hakkında her zaman
                bize danışabilirsiniz. :)
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
            <NavBar state={language}/>
            <h1 className="font-weight-bold text-center">Sitter / Baby</h1>
            <div className="d-flex align-items-center flex-wrap">
              <div className="col-lg-5 col-10 mx-auto my-2 card bg-dark py-3">
                <img src={Sitter1} className="img img-fluid" alt="Sitter1" />
              </div>
              <div className="col-lg-5 col-10 mx-auto my-2 card bg-dark py-3">
                <img src={Sitter2} alt="Sitter2" className="img img-fluid" />
              </div>
            </div>
            <div className="card  my-card col-lg-8 mx-auto p-4 shadow-lg my-3">
              <h2>Experience</h2>
              <p>
                When you are going to be our guest, lots of smile and
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
                If your baby has a sister or brother, they will be very welcomed
                here. As a part from the mini family shoot, we take pictures of
                your baby with the sister/brother. If the sister/brother starts
                to get bored during the photoshoot, a toy box will be waiting
                for them to play and spend time. Even if this is not enough for
                making them relaxed, we are very close to park for an outdoor
                game time, of course accompanied by one of the parents.
              </p>
              <h2>FAQs</h2>
              <h3>-What 's a sitter / baby session?</h3>
              <p>
                It's a special session for your baby up to 9 months who is
                skilled to sit safely without support. During this period, your
                baby's unique movements, glances and character will begin to
                form, so it's very unique for every baby. In this session, we
                are providing organic clothes and designed accessories for your
                choice. Additionally, Sitter/Baby package includes family shoot
                and a specially designed collage in high resolution.
              </p>
              <h3>
                -What should we do if we don't want you to share the photos?
              </h3>
              <p>
                Just mention it, we won't share your photos if you don't want to
                :)
              </p>
              <h3>
                -What if the photoshoot coincides with my baby's sleep time?
              </h3>
              <p>
                While creating an appointment, we try to choose the most
                appropriate time according to your baby's sleep times.
              </p>
              <h3>-When will I receive the captured photos?</h3>
              <p>
                After completing the session, we will share all the photos on
                the same day via "wetransfer" and then expect you to select 15
                of the photos you like and inform us which they are. When you
                inform us, we will start adjusting and editing the photos and
                after completing we will share them again within 2 weeks via
                wetransfer.
              </p>
              <h3>
                -What should I bring to your studio when I come for this
                session?
              </h3>
              <p>
                If your baby is getting supplementary food, we recommend that
                you bring it with you. When we make an appointment, we inform
                you in detail for a more comfortable shooting. You can always
                consult us when you cannot decide what to wear or about your
                baby's brother / sister's choice of clothes. :)
              </p>
              <h3>
                -How much is the album price? How soon will my album be
                prepared?
              </h3>
              <p>
                If you want to keep your moments in an album and pass on to the
                next generations, when you come to the studio you can see the
                options and choose the best for you and then we will set a new
                price including this service. The album delivery time is 2-4
                weeks from the time you approve the edited and album designed
                photos you have chosen.
              </p>
              <h3>-What languages do you speak?</h3>
              <p>We speak Turkish, English and Spanish.</p>
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

export default SittingBaby;
