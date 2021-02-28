import NavBar from "./NavBar";
import Footer from "./Footer";
import Yenidogan1 from "../assets/images/Yenidogan1.jpg";
import Yenidogan2 from "../assets/images/Yenidogan2.jpg";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo3.png";

const NewBirth = () => (
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
      <h1 className="font-weight-bold text-center">Yeni Doğan</h1>
      <div className="d-flex align-items-center flex-wrap">
        <div className="col-lg-5 col-10 mx-auto my-2 card bg-dark py-3">
          <img src={Yenidogan1} className="img img-fluid" alt="Yenidogan1" />
        </div>
        <div className="col-lg-5 col-10 mx-auto my-2 card bg-dark py-3">
          <img src={Yenidogan2} alt="Yenidogan2" className="img img-fluid" />
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
          ünitemizde ihtiyaç duyacağınız her şey var.
        </p>
        <p>
          Stüdyomuzda minik bebeklerimizi asla rahatsız etmeyecek ve onlara
          zarar vermeyecek birçoğu organik olan kıyafetlerimizi beğeninize
          sunuyoruz. Ayrıca çok sayıda tasarım aksesuarımız sizleri bekliyor
          olacak.
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
        <h3>-Yeni doğan çekimi nedir?</h3>
        <p>
          Bebeğiniz henüz 5-20 günlükken ve dünyaya yeni merhaba dediği günleri
          size her zaman hatırlatacak unutulmaz bir çekimdir. Bebeğiniz için
          stüdyomuzdan seçeceğiniz kumaşlar, aksesuarlar, kıyafetlerle onun en
          minik halini en özgün ve ona odaklı şekilde çekimini ve mini aile
          çekimini içerir. Size özel olarak tasarlanmış yüksek çözünürlükte bir
          kolaj da dahildir.
        </p>
        <h3>-Neden sadece 5-20 günlük bebekler?</h3>
        <p>
          20 gün sonrasında bebeklerin derin uykuları azalıyor, gaz sancıları
          başlıyor ve esneklikleri azalıyor. Bu yüzden yeni doğanları 5-20
          günlükken çekiyoruz.
        </p>
        <h3>-Bebeğim doğdu. Yenidoğan çekimi yaptırmak için geç mi kaldım?</h3>
        <p>
          Programımızda bir müsaitlik varsa sizi ağırlamaktan mutluluk duyarız
          :)
        </p>
        <h3>
          -Bebeğimin doğacağı tarihi bilmeden nasıl yeni doğan çekimi
          rezervasyonu yaptırabilirim?
        </h3>
        <p>
          Rezervasyon yaparken beklenen doğum ayınızı not alıyoruz. Daha sonra
          bebeğinizle hastaneden çıktığınızda bize ulaşıyorsunuz ve birlikte
          çekim gününüzü kesinleştiriyoruz.
        </p>
        <h3>-İkiz bebekler için ücretlendirme nasıl oluyor?</h3>
        <p>
          İkiz ya da üçüz bebekleriniz için asla fiyat farkı talep etmeyiz
          :)
        </p>
        <h3>-Çekimde bebeğime zarar gelirse diye korkuyorum.</h3>
        <p>
          Çekimlerde asla flash veya yapay ışık kullanmıyoruz. Asla bebeğinizi
          zorlayabilecek veya onu rahatsız edebilecek pozlandırmalar yapmayı
          tercih etmiyoruz. Aldığımız yenidoğan eğitimleri neticesinde
          bebeklerin tüm hassasiyetlerini, anatomilerini biliyor ve üzerlerine
          titriyoruz.
        </p>
        <h3>-Stüdyonuza çekime gelirken ne getirmeliyim?</h3>
        <p>
          Genellikle hiçbir şey. Randevu oluşturduğumuzda daha rahat bir çekim
          geçirmeniz için ayrıntılı bir çekim rehberi göndererek sizi
          bilgilendiriyoruz. Ne giyeceğinize karar veremediğinizde veya
          bebeğinizin abisi/ablasının kıyafet seçimi hakkında her zaman bize
          danışabilirsiniz. :){" "}
        </p>
        <h3>-Yeni doğan çekimi kaç saat sürer?</h3>
        <p>Bebeğinizin uyku durumuna bağlı olarak 2-4 saat sürebilir.</p>
        <h3>-Çekilen fotoğraflar ne zaman elime ulaşacak?</h3>
        <p>
          Çektiğimiz tüm fotoğrafları aynı gün orjinal boyutlarıyla ‘wetransfer’
          aracılığıyla size yolluyor ve beğendiğiniz fotoğraflardan 20 tanesini
          seçip göndermenizi bekliyoruz. Seçtiğiniz fotoğrafları gönderdiğiniz
          tarihten itibaren düzenleyerek 2 hafta içinde tekrar wetransfer
          aracılığıyla teslim ediyoruz.
        </p>
        <h3>
          -Stüdyonuzda bebeğim için uygun ısıda ve hijyenik ortam sağlanıyor mu?
        </h3>
        <p>
          Tabii ki :) Stüdyomuzu dört mevsim yenidoğanlar için en uygun
          sıcaklığa ayarlıyoruz. Her çekimden önce ve sonra stüdyoyu ve
          kullanılan malzemeleri mutlaka organik temizleyicilerle temizliyor,
          dezenfekte ediyoruz. Kıyafetleri her çekimden sonra mutlaka yıkayıp
          ütülüyoruz. Ayakkabılarla stüdyoya girmiyoruz. (Bunun için dilerseniz
          kendi ev terliğinizi getirebilir ya da size sunacağımız tek
          kullanımlık terlikleri kullanabilirsiniz) Maskelerimizi hiç
          çıkarmıyoruz. Stüdyomuzdaki çekimlere sadece anne-baba ve kardeşleri
          kabul edebiliyoruz. Pandemi süreci içinde stüdyomuza günde en fazla 1
          çekim kabul ediyoruz.
        </p>
        <h3>-Albüm fiyatları ne kadar? Ne kadar sürede albümüm hazırlanır?</h3>
        <p>
          Eğer anlarınızı bir albümde saklayıp nesilden nesile aktarmak
          isterseniz stüdyomuza geldiğinizde görerek seçip fiyat değerlendirmesi
          yapabilirsiniz. Albüm teslim süremiz seçtiğiniz fotoğrafların
          düzenlenmesi ve albüm tasarımı bittikten sonra onay verdiğiniz süre
          itibariyle 3-4 haftadır.
        </p>
        <h3>
          -Çektiğiniz fotoğrafları paylaşmanızı istemiyorsak ne yapmalıyız?
        </h3>
        <p>
          Söylemeniz yeterli, eğer siz istemiyorsanız fotoğraflarınızı
          paylaşmayız :)
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

export default NewBirth;
