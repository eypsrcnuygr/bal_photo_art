import NavBar from "./NavBar";
import Footer from "./Footer";

const Birth = () => (
  <div className="d-flex flex-column Main-Page">
    <NavBar />
    <div className="h-100">
      <h1 className="font-weight-bold text-center">Doğum</h1>
      <div className="card  my-card col-lg-8 mx-auto p-4 shadow-lg my-3">
        <h2>Sizi Neler Bekliyor</h2>
        <p>
          Doğum bu hayattaki en kutsal ve en değerli an. Bu anı yaşamakta olan
          bir annenin hassasiyetlerini biliyor ve onun hep sakin ve şımartılmış
          hissetmesi için elimizden geleni yapıyoruz.
        </p>
        <p>
          Sezaryen doğumlarda doğum saatinden en az 2 saat önce hastanede
          oluyoruz. Normal doğumlarda ise sancınız başladığında hastaneye
          giderken bize haber verdiğiniz takdirde sürekli irtibat halinde
          oluyoruz ve açıklık 7 cm’e ulaştığında hastanede, yanınızda oluyoruz.
        </p>
        <p>
          Bu en özel günde; doğum öncesi hastanede anne ve baba özel çekimi,
          bekleyen heyecanlı aile büyükleri, doğum için yapılmış hazırlıklar,
          doğum esnasında bebeğini bekleyen baba, bebeğin dünyaya gelişi, ilk
          nefesi, anneyle ilk kucaklaşması, ilk muayenesi, aile bireylerinin onu
          gördüğü ilk an, odaya gelince anne baba ve bebek özel çekimi ve daha
          fazlasını sizlere sunuyoruz.
        </p>
        <p>
          Bu çekim, size özel olarak tasarlanmış ve yüksek kalitede basılmış
          özel çerçeveli bir kolaj da içeriyor. Ayrıca doğumdan sonraki 15 gün
          içinde stüdyomuzda bir de mini aile çekimi hediye ediyoruz.
        </p>
        <h2>Merak Ettikleriniz</h2>
        <h3>Çekilen fotoğraflar ne zaman elime ulaşacak?</h3>
        <p>
          Çektiğimiz tüm fotoğrafları iki gün içinde orjinal boyutlarıyla
          ‘wetransfer’ aracılığıyla size yolluyor ve beğendiğiniz fotoğraflardan
          30 tanesini seçip göndermenizi bekliyoruz. Seçtiğiniz fotoğrafları
          gönderdiğiniz tarihten itibaren düzenleyerek 2 hafta içinde tekrar
          wetransfer aracılığıyla teslim ediyoruz.
        </p>
        <h3>
          Sadece doğum sonrası odada fotoğraf çektirmek istiyoruz. Bu mümkün mü?
        </h3>
        <p>
          Elbette. Detayları konuşmak için her zaman bize ulaşabilir, ya da
          kahvemizi içmeye gelebilirsiniz &#128512;
        </p>
        <h3>Anlaşmalı olduğunuz bir hastane var mı?</h3>
        <p>
          Hastanelerle bu konuda anlaşma yapmayı doğru bulmuyoruz. Bu özel günde
          dileyen herkes kendi fotoğrafçısı ile çalışabilmeli &#128512;
        </p>
        <h3>Albüm fiyatları ne kadar? Ne kadar sürede albümüm hazırlanır?</h3>
        <p>
          Eğer anlarınızı bir albümde saklayıp nesilden nesile aktarmak
          isterseniz stüdyomuza geldiğinizde görerek seçip fiyat değerlendirmesi
          yapabilirsiniz. Albüm teslim süremiz seçtiğiniz fotoğrafların
          düzenlenmesi ve albüm tasarımı bittikten sonra onay verdiğiniz süre
          itibariyle 3-4 haftadır.
        </p>
        <h3>Bu çekim kaç saat sürer?</h3>
        <p>Bazen 3 saat, bazen 30 saat sürebilir &#128512;</p>
        <h3>Normal doğumda bir aksilik çıkar da gelemezseniz?</h3>
        <p>
          Çok aksi bir durum olmadıkça söz verdiğimiz doğuma geliriz. Fakat
          dünya hali. Normal doğumlarda her zaman yedek fotoğrafçı(lar)
          bulundurmanızı şiddetle tavsiye ederiz
        </p>
        <h3>
          Çektiğiniz fotoğrafları paylaşmanızı istemiyorsak ne yapmalıyız?
        </h3>
        <p>
          Söylemeniz yeterli, eğer siz istemiyorsanız fotoğraflarınızı
          paylaşmayız &#128512;
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

export default Birth;
