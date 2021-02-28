import NavBar from "./NavBar";
import Footer from "./Footer";
import Mini1 from "../assets/images/Mini1.jpg";
import Mini2 from "../assets/images/Mini2.jpg";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo3.png";

const MiniFamily = () => (
  <div className="d-flex flex-column">
    <div className="Main-Page">
      <div className="text-center">
        <Link to="/">
          <img
            src={Logo}
            alt="bal-photo-art Bebek Fotoğrafçılığı"
            className="my-image-2"
          />
        </Link>
      </div>
      <NavBar />
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
          Çok az vakti olup dış mekanda aile çekimi isteyenler için bulunmaz
          fırsat. İster çekirdek ailesiyle ister tüylü ve dört ayaklı
          evlatlarıyla çekim yaptırmak isteyen herkese açıktır. Belirlenen dış
          mekanda 30 dakikalık minik ve tatlı bir çekim.
        </p>
        <p>
          Bu çekimde de kıyafet ve aksesuarları size bırakıyor fakat gereksinim
          duymanız durumunda tüm sorularınıza rehberlik ediyoruz.
          Kıyafetlerinizden küpenizin seçimine kadar, kararsız kaldığınız her an
          size destek oluyoruz.
        </p>
        <h2>Merak Ettikleriniz</h2>
        <h3>-Çekilen fotoğraflar ne zaman elime ulaşacak?</h3>
        <p>
          Çektiğimiz tüm fotoğrafları iki gün içinde orjinal boyutlarıyla
          ‘wetransfer’ aracılığıyla size yolluyor ve beğendiğiniz fotoğraflardan
          10 tanesini seçip göndermenizi bekliyoruz.Seçtiğiniz fotoğrafları
          gönderdiğiniz tarihten itibaren düzenleyerek 2 hafta içinde tekrar
          wetransfer aracılığıyla teslim ediyoruz.
        </p>
        <h3>-Bu çekimin evimizde olması mümkün mü?</h3>
        <p>
          Tabii ki. Detayları konuşmak için her zaman bizi arayabilir ya da
          kahvemizi içmeye gelebilirsiniz :)
        </p>
        <p>
          {" "}
          *Diğer sorularınız ve merak ettikleriniz için dilediğiniz iletişim
          kanalımızdan her zaman bize ulaşabilirsiniz.{" "}
        </p>
      </div>
    </div>

    <Footer />
  </div>
);

export default MiniFamily;
