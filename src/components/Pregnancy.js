import NavBar from "./NavBar";
import Footer from "./Footer";
import Hamile1 from "../assets/images/Hamile1.jpg";
import Hamile2 from "../assets/images/Hamile2.jpg";

const Pregnancy = () => (
  <div className="d-flex flex-column vh-100">
    <div className="Main-Page">
      <NavBar />
      <h1 className="font-weight-bold text-center">Hamilelik</h1>
      <div className="card  my-card col-lg-8 mx-auto p-4 shadow-lg my-3">
        <h2>Sizi Neler Bekliyor</h2>
        <p>
          Birlikte belirlediğimiz dış mekanda, eşiniz ve varsa çocuklarınızla
          birlikte romantik bir deneyim!{" "}
        </p>
        <p>
          Bu çekimde kıyafet ve aksesuarları size bırakıyor ancak gereksinim
          duymanız durumunda tüm sorularınıza rehberlik ediyoruz.
          Kıyafetlerinizden küpenizin seçimine kadar, kararsız kaldığınız her an
          size destek oluyoruz.
        </p>
        <p>
          Çantamızda her daim karnınızdaki minik ve sizin için su ve sağlıklı
          atıştırmalıklar bulunduruyoruz.
        </p>
        <h2>Merak Ettikleriniz</h2>
        <h3>Hamilelik çekimi ne zaman yapılır?</h3>
        <p>
          Karnınızın iyice belirginleşmiş olması için 28-35. haftalar bu çekim
          için en güzel zamandır.
        </p>
        <h3>Bu çekim kaç saat sürer?</h3>
        <p>Hamile çekimleri yaklaşık 2 saat sürer.</p>
        <h3>Hamilelik çekimim evimde olsun istiyorum. Bu mümkün mü?</h3>
        <p>
          Tabii ki, evinizde lifestyle tarzında fotoğraflarınız olur ve bizce bu
          mükemmeldir.
        </p>
        <h3>Çekilen fotoğraflar ne zaman elime ulaşacak?</h3>
        <p>
          Çektiğimiz tüm fotoğrafları iki gün içinde orjinal boyutlarıyla
          ‘wetransfer’ aracılığıyla size yolluyor ve beğendiğiniz fotoğraflardan
          15 tanesini seçip göndermenizi bekliyoruz. Seçtiğiniz fotoğrafları
          gönderdiğiniz tarihten itibaren düzenleyerek 2 hafta içinde tekrar
          wetransfer aracılığıyla teslim ediyoruz.
        </p>
        <p>
          {" "}
          *Diğer sorularınız ve merak ettikleriniz için dilediğiniz iletişim
          kanalımızdan her zaman bize ulaşabilirsiniz.{" "}
        </p>
      </div>
      <div className="d-flex align-items-center flex-wrap">
        <div className="col-lg-5 col-10 mx-auto my-2 card bg-dark py-3"><img src={Hamile1} className="img img-fluid" alt="Hamile1"/></div>
        <div className="col-lg-5 col-10 mx-auto my-2 card bg-dark py-3"><img src={Hamile2} alt="Hamile2" className="img img-fluid"/></div>
      </div>
    </div>

    <Footer />
  </div>
);

export default Pregnancy;
