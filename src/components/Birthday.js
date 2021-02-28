import NavBar from "./NavBar";
import Footer from "./Footer";
import Yas1 from "../assets/images/Yas1.jpg";
import Yas2 from "../assets/images/Yas2.jpg";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo3.png";

const Birthday = () => (
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
          bekliyor :) Rahat koltuklar, güzel bir manzara, bebeğiniz için en
          uygun sıcaklıkta ve steril bir ortam.. Dinlendirici bir içecek ve
          atıştırmalıklarla çekim deneyiminizi konforlu hale getirecek her küçük
          detayı düşünmeye çalıştık. Ayrıca miniklerin rahatı için alt bakım
          ünitemizde ihtiyaç duyacağınız her şey var. Bebeğinizin mamasını
          ısıtmak için gerekli tüm malzemeleri sunan bir mutfağımız da mevcut.
        </p>
        <p>
          Stüdyomuzda minik bebeklerimizi asla rahatsız etmeyecek ve onlara
          zarar vermeyecek birçoğu organik kıyafetlerimizi beğeninize sunuyoruz.
          Ayrıca çok sayıda tasarım aksesuarımız sizleri bekliyor olacak.
        </p>
        <p>
          Bebeğiniz için özel olarak sipariş ettiğimiz küçük bir pasta
          miniklerin beğenisine sunuluyor ve artanı akşam çayınızı yudumlarken
          afiyetle yemek isterseniz paketliyoruz.
        </p>
        <p>
          Bu çekimde pasta parçalama sonrası için bebeğinize sıcacık steril bir
          duş ve temiz havlu da sunuyoruz.
        </p>
        <p>
          Eğer bebeğinizin ablası ya da abisi varsa burada memnuniyetle
          karşılanırlar. Çekim esnasında keyifle oynayıp vakit geçirecekleri
          oyuncak kutusu onları bekliyor olacak. Mini aile çekimi haricinde
          abla/abi ile birlikte de bebeğinizin fotoğraflarını çekiyoruz. Eğer
          abla/abi(ler) çekim boyunca sıkılırsa ebeveynlerden biri ile
          gidebileceği park çok yakınımızda.
        </p>
        <h2>Merak Ettikleriniz</h2>
        <h3>-1 yaş çekimi nedir ve ne zaman yapılır?</h3>
        <p>
          Bebekleriniz gözlerinizin önünde hızlıca büyürken ilk yaşında nasıl
          göründüğünü ve neler yaptığını ömür boyu hatırlamanız için yaş çekimi
          mükemmeldir. Bebeğiniz için ise hiç kuşkusuz çok eğlenceli bir deneyim
          :) Bu çekim 1 yaş için bebeğiniz yürümeye başlamadan, yani tercihen
          10-11 aylıkken yapılır. Stüdyomuzdan sizin seçeceğiniz kıyafetler ve
          tasarım aksesuarlarla gerçekleşen bu çekim pasta parçalama ve mini
          aile çekimini de içerir. Size özel olarak tasarlanmış ve yüksek
          çözünürlükte 30x30 cm boyutunda bir kolaj da dahildir.
        </p>
        <h3>
          -2,3 ve diğer yaşlardaki çocuklar için doğum günü çekimi mümkün mü?
        </h3>
        <p>
          Tabiki, isteğinize göre stüdyoda ya da dış mekanda her yaştan çocuk
          için eğlenceli çekimler yapmamız mümkün. Detayları konuşmak için her
          zaman bizi arayabilir ya da kahvemizi içmeye gelebilirsiniz :)
        </p>
        <h3>-Pasta parçalama için gereken pastayı biz mi getiriyoruz?</h3>
        <p>
          Hayır. Sadece bebeğinizin tatlı gülücüklerini getirmeye ne dersiniz?
          :)
        </p>
        <h3>-Çekilen fotoğraflar ne zaman elime ulaşacak?</h3>
        <p>
          Çektiğimiz tüm fotoğrafları iki gün içinde orjinal boyutlarıyla
          ‘wetransfer’ aracılığıyla size yolluyor ve beğendiğiniz fotoğraflardan
          20 tanesini seçip göndermenizi bekliyoruz. Seçtiğiniz fotoğrafları
          gönderdiğiniz tarihten itibaren düzenleyerek 2 hafta içinde tekrar
          wetransfer aracılığıyla teslim ediyoruz.
        </p>
        <h3>-Yaş çekimleri kaç saat sürüyor?</h3>
        <p>Yaş çekimleri ortalama 1-2 saat sürüyor.</p>
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

export default Birthday;
