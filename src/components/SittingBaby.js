import NavBar from "./NavBar";
import Footer from "./Footer";
import Sitter1 from '../assets/images/sitter1.jpg';
import Sitter2 from '../assets/images/sitter2.jpg';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo3.png'

const SittingBaby = () => (
  <div className="d-flex flex-column">
    <div className="Main-Page h-100">
    <div className="text-center"><Link to="/"><img src={Logo} alt="bal-photo-art Bebek Fotoğrafçılığı" className="my-image-2"/></Link></div>
    <NavBar />
      <h1 className="font-weight-bold text-center">Oturabilen Bebek</h1>
      <div className="d-flex align-items-center flex-wrap">
        <div className="col-lg-5 col-10 mx-auto my-2 card bg-dark py-3"><img src={Sitter1} className="img img-fluid" alt="Sitter1"/></div>
        <div className="col-lg-5 col-10 mx-auto my-2 card bg-dark py-3"><img src={Sitter2} alt="Sitter2" className="img img-fluid"/></div>
      </div>
      <div className="card  my-card col-lg-8 mx-auto p-4 shadow-lg my-3">
        <h2>Sizi Neler Bekliyor</h2>
        <p>
          Stüdyomuza geldiğinizde bolca güler yüz ve misafirperverlik sizi
          bekliyor :) Rahat koltuklar, güzel bir manzara, bebeğiniz için en
          uygun sıcaklıkta ve steril bir ortam.. Dinlendirici bir içecek ve
          atıştırmalıklarla çekim deneyiminizi konforlu hale getirecek her küçük
          detayı düşünmeye çalıştık. Ayrıca miniklerin rahatı için alt bakım
          ünitemizde ihtiyaç duyacağınız her şey var. Bebeğinizin mamasını
          ısıtmak/saklamak için gerekli tüm malzemeleri sunan bir mutfağımız da
          mevcut.
        </p>
        <p>
          Stüdyomuzda minik bebeklerimizi asla rahatsız etmeyecek ve onlara
          zarar vermeyecek organik kıyafetleri beğeninize sunuyoruz. Ayrıca çok
          sayıda tasarım aksesuarımız sizleri bekliyor olacak.
        </p>
        <p>
          Eğer bebeğinizin ablası ya da abisi varsa burada memnuniyetle
          karşılanırlar. Çekim esnasında keyifle oynayıp vakit geçirecekleri
          oyuncak kutusu onları bekliyor. Mini aile çekimi haricinde abla/abi
          ile birlikte de bebeğinizin fotoğraflarını çekiyoruz. Eğer
          abla/abi(ler) çekim boyunca sıkılırsa ebeveynlerden biri ile
          gidebileceği park çok yakınımızda.
        </p>
        <h2>Merak Ettikleriniz</h2>
        <h3>-Oturabilen bebek çekimi nedir?</h3>
        <p>
          Desteksiz bir şekilde güvenle oturmayı öğrenmiş 9 aya kadar olan
          bebeğinize özel bir çekimdir. Bu dönemde bebeğinizin kendine has
          hareketleri, bakışları ve karakteri oluşmaya başlamış olacağı için her
          çekim eşsiz güzelliktedir. Stüdyomuzdan sizin seçeceğiniz kıyafetler
          ve tasarım aksesuarlarla gerçekleşen bu çekim mini aile çekimini de
          içerir ve size özel olarak tasarlanmış yüksek çözünürlükte bir kolaj
          da dahildir.
        </p>
        <h3>-Bu çekim kaç saat sürer?</h3>
        <p>Bebeğinizin keyfine bağlı olarak ortalama 1-2 saat sürer.</p>
        <h3>-Ya çekim bebeğimin uyku saatine denk gelirse</h3>
        <p>
          Randevu oluştururken bebeğinizin uyku saatlerine göre en uygun zamanı
          seçmeye çalışıyoruz.
        </p>
        <h3>-Çekilen fotoğraflar ne zaman elime ulaşacak?</h3>
        <p>
          Çektiğimiz tüm fotoğrafları aynı gün orjinal boyutlarıyla ‘wetransfer’
          aracılığıyla size yolluyor ve beğendiğiniz fotoğraflardan 15 tanesini
          seçip göndermenizi bekliyoruz. Seçtiğiniz fotoğrafları gönderdiğiniz
          tarihten itibaren düzenleyerek 2 hafta içinde tekrar wetransfer
          aracılığıyla teslim ediyoruz.
        </p>
        <h3>-Stüdyonuza çekime gelirken ne getirmeliyim?</h3>
        <p>
          Eğer bebeğiniz ek gıda alıyorsa yanınızda getirmenizi tavsiye
          ediyoruz. Randevu oluşturduğumuzda daha rahat bir çekim geçirmeniz
          için ayrıntılı bir çekim rehberi göndererek sizi bilgilendiriyoruz. Ne
          giyeceğinize karar veremediğinizde veya bebeğinizin abisi/ablasının
          kıyafet seçimi hakkında her zaman bize danışabilirsiniz. :)
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

export default SittingBaby;
