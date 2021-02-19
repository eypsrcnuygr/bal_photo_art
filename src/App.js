import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from "./components/Footer";
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <NavBar />
      <div className="Main-Page h-100">
        <h1 className="font-weight-bold text-center">Biz Kimiz</h1>
        <div className="card  my-card col-lg-8 mx-auto p-4 shadow-lg">
          <p>Antalya’daki ballı dünyamıza hoşgeldiniz &#128512; </p>
          <p>Beyaz, Zamansız, Doğal...</p>
          <p>
            Dünyayı gezerken tanışıp evlenmiş iki gezgin fotoğrafçıyız.
            Seyahatlerimizin yaratıcı yanımızı beslediğine inandık ve kendimizi,
            siz ailelerimizi konu alan benzersiz sanat eserleri oluşturmaya
            adadık.
          </p>
          <p>
            Akademik eğitimlerimizin ardından yenidoğan, doğum, hamilelik,
            bebek, çocuk ve aile fotoğrafçılığı üzerinde eğitimler aldık, hala
            uzmanlaşmaya ve öğrenmeye devam ediyoruz. Fotoğraflarımızda sadelik
            ve beyazlığın gücü ile bebeklerin duru güzelliğini ön plana
            çıkarmayı hedefliyoruz. Bunu yaparken yüksek kalite standartlarında
            malzemelerle hizmet sunuyoruz.
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
          <p>Gülşen&Semih Akdağ</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
