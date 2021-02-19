import NavBar from "./NavBar";
import Footer from "./Footer";

const Pregnancy = () => (
  <div className="d-flex flex-column vh-100">
    <NavBar />
    <div className="Main-Page h-100">
      <h1 className="font-weight-bold text-center">Hamilelik</h1>
      <div className="card  my-card col-lg-8 mx-auto p-4 shadow-lg">
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
        <p> *Diğer sorularınız ve merak ettikleriniz için dilediğiniz iletişim kanalımızdan her zaman bize ulaşabilirsiniz. </p>
      </div>
    </div>

    <Footer />
  </div>
);

export default Pregnancy;
