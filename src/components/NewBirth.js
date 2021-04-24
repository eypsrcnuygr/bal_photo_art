import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState } from "react";
import Yenidogan1 from "../assets/images/Yenidogan1.jpg";
import Yenidogan2 from "../assets/images/Yenidogan2.jpg";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo3.png";

const NewBirth = (props) => {
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
            <h1 className="font-weight-bold text-center">Yeni Doğan</h1>
            <div className="d-flex align-items-center flex-wrap">
              <div className="col-lg-5 col-10 mx-auto my-2 card bg-dark py-3">
                <img
                  src={Yenidogan1}
                  className="img img-fluid"
                  alt="Yenidogan1"
                />
              </div>
              <div className="col-lg-5 col-10 mx-auto my-2 card bg-dark py-3">
                <img
                  src={Yenidogan2}
                  alt="Yenidogan2"
                  className="img img-fluid"
                />
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
                var.
              </p>
              <p>
                Stüdyomuzda minik bebeklerimizi asla rahatsız etmeyecek ve
                onlara zarar vermeyecek birçoğu organik olan kıyafetlerimizi
                beğeninize sunuyoruz. Ayrıca çok sayıda tasarım aksesuarımız
                sizleri bekliyor olacak.
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
              <h3>-Yeni doğan çekimi nedir?</h3>
              <p>
                Bebeğiniz henüz 5-20 günlükken ve dünyaya yeni merhaba dediği
                günleri size her zaman hatırlatacak unutulmaz bir çekimdir.
                Bebeğiniz için stüdyomuzdan seçeceğiniz kumaşlar, aksesuarlar,
                kıyafetlerle onun en minik halini en özgün ve ona odaklı şekilde
                çekimini ve mini aile çekimini içerir. Size özel olarak
                tasarlanmış yüksek çözünürlükte bir kolaj da dahildir.
              </p>
              <h3>-Neden sadece 5-20 günlük bebekler?</h3>
              <p>
                20 gün sonrasında bebeklerin derin uykuları azalıyor, gaz
                sancıları başlıyor ve esneklikleri azalıyor. Bu yüzden yeni
                doğanları 5-20 günlükken çekiyoruz.
              </p>
              <h3>
                -Bebeğim doğdu. Yenidoğan çekimi yaptırmak için geç mi kaldım?
              </h3>
              <p>
                Programımızda bir müsaitlik varsa sizi ağırlamaktan mutluluk
                duyarız :)
              </p>
              <h3>
                -Bebeğimin doğacağı tarihi bilmeden nasıl yeni doğan çekimi
                rezervasyonu yaptırabilirim?
              </h3>
              <p>
                Rezervasyon yaparken beklenen doğum ayınızı not alıyoruz. Daha
                sonra bebeğinizle hastaneden çıktığınızda bize ulaşıyorsunuz ve
                birlikte çekim gününüzü kesinleştiriyoruz.
              </p>
              <h3>-İkiz bebekler için ücretlendirme nasıl oluyor?</h3>
              <p>
                İkiz ya da üçüz bebekleriniz için asla fiyat farkı talep etmeyiz
                :)
              </p>
              <h3>-Çekimde bebeğime zarar gelirse diye korkuyorum.</h3>
              <p>
                Çekimlerde asla flash veya yapay ışık kullanmıyoruz. Asla
                bebeğinizi zorlayabilecek veya onu rahatsız edebilecek
                pozlandırmalar yapmayı tercih etmiyoruz. Aldığımız yenidoğan
                eğitimleri neticesinde bebeklerin tüm hassasiyetlerini,
                anatomilerini biliyor ve üzerlerine titriyoruz.
              </p>
              <h3>-Stüdyonuza çekime gelirken ne getirmeliyim?</h3>
              <p>
                Genellikle hiçbir şey. Randevu oluşturduğumuzda daha rahat bir
                çekim geçirmeniz için ayrıntılı bir çekim rehberi göndererek
                sizi bilgilendiriyoruz. Ne giyeceğinize karar veremediğinizde
                veya bebeğinizin abisi/ablasının kıyafet seçimi hakkında her
                zaman bize danışabilirsiniz. :){" "}
              </p>
              <h3>-Yeni doğan çekimi kaç saat sürer?</h3>
              <p>Bebeğinizin uyku durumuna bağlı olarak 2-4 saat sürebilir.</p>
              <h3>-Çekilen fotoğraflar ne zaman elime ulaşacak?</h3>
              <p>
                Çektiğimiz tüm fotoğrafları aynı gün orjinal boyutlarıyla
                ‘wetransfer’ aracılığıyla size yolluyor ve beğendiğiniz
                fotoğraflardan 20 tanesini seçip göndermenizi bekliyoruz.
                Seçtiğiniz fotoğrafları gönderdiğiniz tarihten itibaren
                düzenleyerek 2 hafta içinde tekrar wetransfer aracılığıyla
                teslim ediyoruz.
              </p>
              <h3>
                -Stüdyonuzda bebeğim için uygun ısıda ve hijyenik ortam
                sağlanıyor mu?
              </h3>
              <p>
                Tabii ki :) Stüdyomuzu dört mevsim yenidoğanlar için en uygun
                sıcaklığa ayarlıyoruz. Her çekimden önce ve sonra stüdyoyu ve
                kullanılan malzemeleri mutlaka organik temizleyicilerle
                temizliyor, dezenfekte ediyoruz. Kıyafetleri her çekimden sonra
                mutlaka yıkayıp ütülüyoruz. Ayakkabılarla stüdyoya girmiyoruz.
                (Bunun için dilerseniz kendi ev terliğinizi getirebilir ya da
                size sunacağımız tek kullanımlık terlikleri kullanabilirsiniz)
                Maskelerimizi hiç çıkarmıyoruz. Stüdyomuzdaki çekimlere sadece
                anne-baba ve kardeşleri kabul edebiliyoruz. Pandemi süreci
                içinde stüdyomuza günde en fazla 1 çekim kabul ediyoruz.
              </p>
              <h3>
                -Albüm fiyatları ne kadar? Ne kadar sürede albümüm hazırlanır?
              </h3>
              <p>
                Eğer anlarınızı bir albümde saklayıp nesilden nesile aktarmak
                isterseniz stüdyomuza geldiğinizde görerek seçip fiyat
                değerlendirmesi yapabilirsiniz. Albüm teslim süremiz seçtiğiniz
                fotoğrafların düzenlenmesi ve albüm tasarımı bittikten sonra
                onay verdiğiniz süre itibariyle 3-4 haftadır.
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

          <Footer state={language}/>
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
      <h1 className="font-weight-bold text-center">Newborn</h1>
      <div className="d-flex align-items-center flex-wrap">
        <div className="col-lg-5 col-10 mx-auto my-2 card bg-dark py-3">
          <img src={Yenidogan1} className="img img-fluid" alt="Yenidogan1" />
        </div>
        <div className="col-lg-5 col-10 mx-auto my-2 card bg-dark py-3">
          <img src={Yenidogan2} alt="Yenidogan2" className="img img-fluid" />
        </div>
      </div>
      <div className="card  my-card col-lg-8 mx-auto p-4 shadow-lg my-3">
        <h2>Experience</h2>
        <p>
        When you are going to be our guest, lots of smile and hospitality are waiting for you in our studio. Comfy seats, a beautiful view and a sterile ambiance suitable for your baby .
We tried to think of every little detail that would make your experience enjoyable with relaxing drinks and snacks.
For the comfort of the little ones, our bathinette has everything you will need.

        </p>
        <p>
        In our studio, we offer organic clothes that will never disturb and harm your little ones. Additionally, many of the designed accessories will be waiting for you.
        </p>
        <p>
        If your baby has a sister or brother, they will be very welcomed here.  As a part from the mini family shoot, we take pictures of your baby with the sister/brother. If the sister/brother starts to get bored during the photoshoot, a toy box will be waiting for them to play and spend time. Even if this is not enough for making them relaxed, we are very close to park for an outdoor game time, of course accompanied by one of the parents.

        </p>
        <h2>FAQs</h2>
        <h3>-What is a newborn session?</h3>
        <p>
        It's an unforgettable and very special shot that will always remind you how little he/she was once when your baby is just 5-20 days old and just said hello to the world. In this session, we are providing organic clothes and designed accessories for your choice and taking photos of your baby in the most unique way. 
Additionally, Newborn package includes family shoot and a specially designed collage in high resolution.

        </p>
        <h3>-Why only 5-20 days old babies?</h3>
        <p>
        Because after 20 days, babies' deep sleep decreases, gas pains begin and their flexibility decreases. That's why we shoot newborns at 5-20 days old.
        </p>
        <h3>-My baby was born. Am I late for a newborn photoshoot?</h3>
        <p>
        We are happy to welcome you if there is an availability in our program :)
        </p>
        <h3>
          -How can I book a newborn session without having a clear idea about his/her birth date?
        </h3>
        <p>
        When you apply for booking, we take note of your expected birth month. We will get in contact when you are getting closer to the birth date. Then the time is up, your little ones see the light of day. When you leave the hospital and get relaxed in your home, just reach us to clarify the date of the shooting session and to complete booking.
        </p>
        <h3>-How much is the extra charges for twin babies?</h3>
        <p>
        We will never charge a price difference for your twin or triplet babies :)
        </p>
        <h3>-I'm afraid that my baby will be harmed during the shoot.</h3>
        <p>
        We never use flash and artificial light in shooting. Unless you specifically want it, we do not make any poses that may disturb or force your baby. We know all the sensitivities and anatomy of babies and we care about them so much.
        </p>
        <h3>-What should I bring to your studio?</h3>
        <p>
        Mostly nothing. When we make an appointment, we inform you in detail for a more comfortable session. You may always consult us when you can’t decide what to wear or about your baby's brother / sister's choice of clothes. :){" "}
        </p>
        <h3>-How much time does a newborn session take?</h3>
        <p>It may take 2-4 hours depending on your baby's state of sleep.</p>
        <h3>-When will I receive the captured photos?</h3>
        <p>
        After completing the session, we will share all the photos on the same day via "wetransfer" and then expect you to select 20 of the photos you like and inform us which they are.
When you inform us, we will start adjusting and editing the photos and  after completing we will share them again within 2 weeks via wetransfer.

        </p>
        <h3>
          -Is a suitable temperature and hygienic environment provided in your studio for my baby?
        </h3>
        <p>
        Of course :) We adjust our studio to the most suitable temperature for newborns in four seasons. Before and after each shoot, we clean and disinfect the studio and the materials used with organic cleaners. We wash and iron the clothes after each shoot. We never enter the studio with shoes. We can only accept parents and siblings for the shootings in our studio. During the pandemic period, we accept only one baby and parents per a day in our studio.
        </p>
        <h3>-How much is the album price? How soon will my album be prepared?</h3>
        <p>
        If you want to keep your moments in an album and pass on to the next generations, when you come to the studio you can see the options and choose the best for you and then we will  set a new price including this service. The album delivery time is 3-4 weeks from the time you approve the edited and album designed photos you have chosen.
        </p>
        <h3>
          -What should we do if we don't want you to share the photos?
        </h3>
        <p>
        Just mention it, we won't share your photos if you don't want to :)
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
      )
    }
  };

  return (
    <div>{renderer()}</div>
  )
};

export default NewBirth;
