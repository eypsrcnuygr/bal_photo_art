import NavBar from "./NavBar";
import Footer from "./Footer";

const MiniFamily = () => (
  <div className="d-flex flex-column vh-100 Main-Page">
    <NavBar />
    <div>
      <h1 className="font-weight-bold text-center">Mini Aile</h1>
      <div className="card  my-card col-lg-8 mx-auto p-4 shadow-lg">
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
        <h3>Çekilen fotoğraflar ne zaman elime ulaşacak?</h3>
        <p>
          Çektiğimiz tüm fotoğrafları iki gün içinde orjinal boyutlarıyla
          ‘wetransfer’ aracılığıyla size yolluyor ve beğendiğiniz fotoğraflardan
          10 tanesini seçip göndermenizi bekliyoruz.Seçtiğiniz fotoğrafları
          gönderdiğiniz tarihten itibaren düzenleyerek 2 hafta içinde tekrar
          wetransfer aracılığıyla teslim ediyoruz.
        </p>
        <h3>Bu çekimin evimizde olması mümkün mü?</h3>
        <p>
          Tabii ki. Detayları konuşmak için her zaman bizi arayabilir ya da
          kahvemizi içmeye gelebilirsiniz &#128512;
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
