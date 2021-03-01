import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import img from "./assets/images/GulsenSemih.jpg";
import Logo from "./assets/images/Logo3.png";
import { Link } from "react-router-dom";

function App() {
  return (
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

      <Footer />
    </div>
  );
}

export default App;
