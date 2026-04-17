import Header from "@/components/Header";
import Footer from "@/components/Footer";

import hakkimizdaBg from "@/assets/hakkimizda-bg.jpg";
import aboutFamily from "@/assets/about-family.jpg";
import teamZafer from "@/assets/team-zafer.jpg";
import teamKenan from "@/assets/team-kenan.jpg";
import projectsCarousel from "@/assets/projects-carousel.jpg";
import taahhutBg from "@/assets/taahhut-bg.jpg";
import projectUniversity from "@/assets/project-university.jpg";
import projectMarmaray from "@/assets/project-marmaray.jpg";
import projectCrystal from "@/assets/project-crystal.jpg";
import ProjectsCarousel from "@/components/ProjectsCarousel";

const Hakkimizda = () => {
  const features = [
    { icon: "🏗️", title: "18+ yıllık deneyim", desc: "Sektörde köklü tecrübe" },
    { icon: "🏢", title: "50+ tamamlanan proje", desc: "Başarıyla teslim edilen projeler" },
    { icon: "🌿", title: "Sürdürülebilir yapılar", desc: "Çevre dostu inşaat yaklaşımı" },
    { icon: "🤝", title: "Müşteri memnuniyeti", desc: "Güvene dayalı iş ortaklığı" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Header activePage="Hakkımızda" />

      {/* HERO */}
      <section className="relative h-[300px] md:h-[400px]" style={{ marginTop: "60px" }}>
        <img src={hakkimizdaBg} alt="Hakkımızda" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-primary/50" />
        <div className="relative z-10 max-w-[1920px] mx-auto px-4 md:px-12 lg:px-20 h-full flex items-end pb-6 md:pb-10">
          <h2 className="text-[36px] md:text-[60px] font-bold text-primary-foreground italic" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Hakkımızda
          </h2>
        </div>
      </section>

      {/* NEDEN SERVET */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-[1920px] mx-auto px-4 md:px-12 lg:px-20">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="text-[28px] md:text-[42px] font-bold text-primary leading-tight md:leading-[52px] mb-6 md:mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Neden Servet Kentsel<br />Dönüşüm İnşaat?
            </h2>
            <p className="text-[14px] md:text-[16px] leading-[24px] md:leading-[28px] text-foreground mb-4 md:mb-6">
              Servet Kentsel Dönüşüm İnşaat, yalnızca yapı üretmekle kalmaz; şehirleri dönüştüren, yaşam kalitesini yükselten ve gelecek nesillere güvenli, estetik ve sürdürülebilir alanlar bırakan bir vizyonla hareket eder.
            </p>
            <p className="text-[14px] md:text-[16px] leading-[24px] md:leading-[28px] text-foreground">
              18 yılı aşkın sektör tecrübesiyle kentsel dönüşüm alanında öncü konumda yer alan firmamız, İstanbul'un en prestijli bölgelerinde hayata geçirdiği projelerle güçlü bir referans portföyüne sahiptir.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES + FAMILY */}
      <section className="relative">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 md:p-16">
              <h3 className="text-[24px] md:text-[36px] font-bold text-primary leading-tight md:leading-[44px] mb-6 md:mb-10" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Servet İnşaat Kentsel Dönüşüm'ü<br />Seçmeniz İçin Sebepler!
              </h3>
              <div className="grid grid-cols-2 gap-3 md:gap-6">
                {features.map((feat, i) => (
                  <div key={i} className="bg-background rounded-xl p-4 md:p-6 shadow-md flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center text-xl md:text-2xl flex-shrink-0">
                      {feat.icon}
                    </div>
                    <div>
                      <h4 className="text-[13px] md:text-[16px] font-bold text-primary mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {feat.title}
                      </h4>
                      <p className="text-[11px] md:text-[13px] text-muted-foreground">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden h-[300px] md:h-auto">
              <img src={aboutFamily} alt="Aile" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
            </div>
          </div>
        </div>
      </section>

      {/* YÖNETİM KURULU */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-[1920px] mx-auto px-4 md:px-12 lg:px-20">
          <h2 className="text-[36px] md:text-[60px] font-bold text-center text-primary leading-tight md:leading-[74px] tracking-[0.04em] mb-12 md:mb-20" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Yönetim Kurulu
          </h2>

          {[
            { img: teamZafer, name: "ZAFER KELLECİ", title: "Genel Müdür & Kurucu Ortak", bio: "İç Mimar Zafer Kelleci, 1987 yılında Giresun'da doğmuştur. Mimarlık ve tasarım alanındaki eğitimine Lefke Avrupa Üniversitesi İç Mimarlık Bölümü'nde başlamış, akademik süreci boyunca mesleğin teorik ve pratik yönlerini eş zamanlı olarak geliştirme fırsatı yakalamıştır. Üniversite yıllarında Türkiye İç Mimarlar Odası Lefke Avrupa Üniversitesi temsilciliğinde aktif görev almış, aynı zamanda İç Mimarlık Bölüm Başkanlığı bünyesinde öğrenci asistanı olarak akademik çalışmaların içerisinde yer almıştır. Eğitim hayatı boyunca mimarlık ofisleri ve şantiyelerde edindiği saha deneyimi, mesleki perspektifinin erken yaşta şekillenmesine önemli katkı sağlamıştır.\n\nProfesyonel kariyerine 2014 yılında, Eczacıbaşı Türkiye münhasır bayisi olan Evdema Yapı Malzemeleri A.Ş.'de başlayan Kelleci; kısa sürede perakende kanalından büyük ölçekli projelere uzanan geniş bir sorumluluk alanında görev almıştır. Kentsel dönüşüm projeleri, toplu konut uygulamaları ve sektörün en önemli organizasyonlarından biri olan Unicera Fuarı'ndaki görevleriyle \"Yönetici Mimar\" pozisyonunda önemli projelere liderlik etmiştir.\n\n2016 yılında Eczacıbaşı markası olan İntema bünyesinde görev alarak, uluslararası mutfak ve mobilya sektörünün önde gelen markaları olan Alman BauFormat ve İtalyan ColombiniCasa'nın yurtdışı eğitim programlarını tamamlamıştır. Bu süreçte söz konusu markaların Türkiye'deki proje yönetimi ve temsil faaliyetlerinde aktif rol alarak uluslararası marka yönetimi ve proje geliştirme konularında önemli deneyimler kazanmıştır.\n\n2019 yılında Evdema bünyesinde faaliyet gösteren Soprano Mobilia markasının kuruluş sürecinde kurucu mimar olarak görev almış; markanın stratejik yapılandırılması, fabrika kurulumu, üretim altyapısının planlanması ve operasyonel süreçlerin oluşturulmasında aktif sorumluluk üstlenmiştir. Bu süreçteki liderliği ve organizasyonel katkıları doğrultusunda Soprano Mobilia Fabrikası'nda Üretim Planlama Müdürü olarak atanmış ve üretim süreçlerinin kurumsal bir sistem içerisinde yapılandırılmasına öncülük etmiştir.\n\nYaklaşık 15 yılı aşan meslek hayatı boyunca Türkiye genelinde faaliyet gösteren birçok kentsel dönüşüm şirketi, üretim tesisi ve yapı sektörü markasına; proje geliştirme, üretim sistemi kurulumu, operasyonel yönetim, iş geliştirme ve stratejik planlama alanlarında danışmanlık hizmetleri vermiştir. Sahip olduğu çok yönlü sektör deneyimi sayesinde mimarlık, üretim ve proje yönetimini bütüncül bir bakış açısıyla ele alan bir yönetim anlayışı geliştirmiştir.\n\n2022 yılında yakın çalışma arkadaşı Servet Uluç ile birlikte Servet İnşaat Kentsel Dönüşüm Ltd. Şirketi'nde Proje Koordinatörü olarak görev almış, kısa sürede yürüttüğü projeler ve geliştirdiği stratejik yaklaşım ile şirketin büyüme sürecinde önemli rol üstlenmiştir. 2024 yılı itibarıyla şirketin Kurucu Ortağı ve Genel Müdürü olarak görevine devam eden Kelleci; Servet Kentsel Dönüşüm İnşaat'ın vizyoner yönetim anlayışıyla büyümesini ve sektörde güçlü bir marka haline gelmesini hedeflemektedir.\n\nMesleki gelişimi sürekli kılmayı ilke edinen Kelleci; mimarlık, tasarım ve yapı sektöründeki ulusal ve uluslararası gelişmeleri yakından takip etmekte, sektör fuarları, seminerler ve eğitim programlarına düzenli olarak katılarak bilgi birikimini güncel tutmaktadır.\n\nUmay Kelleci adında bir kız çocuğu babası olan Zafer Kelleci, sanatın farklı disiplinlerine ilgi duymakta; özellikle resim ve seramik alanında üretimler gerçekleştirmektedir. Aktif olarak suluboya ve yağlıboya çalışmaları yapan Kelleci, sanatsal bakış açısını mimari tasarım anlayışıyla birleştirerek estetik ve fonksiyonelliği bir araya getiren bir vizyonla çalışmalarını sürdürmektedir.", grayscale: false },
            { img: teamKenan, name: "KENAN YURTGÜN", title: "Kurucu Ortak", bio: "1986 yılında Trabzon'da doğan Kenan Yurtgün, inşaat ve gayrimenkul sektöründe 15 yılı aşkın deneyime sahiptir. Müşteri odaklı yaklaşımı ile tanınır.", grayscale: true },
            { img: null, name: "SERVET ULUÇ", title: "Yönetim Kurulu Başkanı", bio: "Servet Uluç, 1985 yılında Bitlis'te doğmuş, 1997 yılında İstanbul'a yerleşerek eğitim ve iş hayatına burada devam etmiştir. İnşaat sektörüne olan ilgisi genç yaşlarda başlamış ve bu doğrultuda sektörün farklı alanlarında deneyim kazanarak profesyonel kariyerinin temellerini atmıştır.\n\n2002 yılında aile şirketi olan Uluç İnşaat bünyesinde aktif olarak çalışmaya başlamış ve sektördeki ilk deneyimlerini burada edinmiştir. Sahada kazandığı tecrübe ve girişimci yaklaşımı sayesinde kısa sürede proje süreçleri, taahhüt işleri ve saha yönetimi konularında önemli bir bilgi birikimi oluşturmuştur.\n\n2005 yılı itibarıyla Türkiye genelinde devlet kurumlarına yönelik ihale ve taahhüt projelerinde aktif olarak yer almaya başlamış, kamu projelerinde yürütülen birçok önemli çalışmanın içinde bulunmuştur. Bu süreçte kamu yapıları ve altyapı projeleri alanında önemli bir deneyim kazanmıştır.\n\n2006 yılında ÖSYM'ye ait projelerde görev alarak kamu yatırımlarına yönelik projelerdeki tecrübesini daha da geliştirmiştir.\n\n2007 yılında ise Uluç İnşaat bünyesinde İstanbul Güneşli bölgesinde gerçekleştirilen projelerle ilk müteahhitlik faaliyetlerini başlatmış ve kendi yönetiminde yürütülen projelerle sektörde daha güçlü bir konuma ulaşmıştır. Bu dönemden itibaren konut projeleri, ticari yapılar ve çeşitli taahhüt işleriyle faaliyetlerini büyütmeye devam etmiştir.\n\n2015 yılında Servet İnşaat Kentsel Dönüşüm Ltd. Şti.'ni kurarak özellikle kentsel dönüşüm, kat karşılığı inşaat ve büyük ölçekli taahhüt projeleri alanında yeni bir vizyon ortaya koymuştur. İstanbul başta olmak üzere birçok bölgede yürüttüğü projelerde modern şehircilik anlayışı doğrultusunda depreme dayanıklı, çevreye duyarlı ve sürdürülebilir yaşam alanları geliştirmeyi temel hedef olarak benimsemiştir.\n\nServet Uluç'un proje yaklaşımında yalnızca yeni yapılar üretmek değil; doğayı koruyan, şehirlerin mimari dokusuna değer katan ve çocukların güvenle büyüyebileceği yaşam alanları oluşturmak önemli bir yer tutmaktadır. Bu vizyon doğrultusunda kamu yapıları, konut projeleri, iş merkezleri ve çeşitli kentsel dönüşüm projeleri başarıyla hayata geçirilmiştir.\n\nİnşaat sektörünün aynı zamanda güçlü bir ekonomik dinamizm yarattığına inanan Uluç, yürüttüğü projelerde istihdam oluşturmayı ve ülke ekonomisine katkı sağlamayı önemli bir sorumluluk olarak görmektedir. Proje süreçlerinde oluşturduğu geniş iş gücü ağı sayesinde hem sektörün gelişimine hem de Türkiye ekonomisine değer katmayı amaçlamaktadır.\n\nBugün Servet Kentsel Dönüşüm İnşaat bünyesinde Yönetim Kurulu Başkanı olarak görev yapan Servet Uluç; güven temelli iş modeli, güçlü saha tecrübesi ve vizyoner yaklaşımıyla şirketin büyüme stratejisini yönlendirmekte ve modern şehirlerin geleceğini şekillendiren projeler üretmeyi hedeflemektedir.\n\nEvli ve iki çocuk babası olan Servet Uluç, iş yaşamındaki disiplinli yaklaşımını sosyal sorumluluk bilinciyle birleştirerek doğaya saygılı, güvenli ve gelecek nesillere değer katacak şehirler inşa etme vizyonuyla çalışmalarını sürdürmektedir.", grayscale: false },
          ].map((member, i) => (
            <div key={i} className="max-w-[900px] mx-auto mb-12 md:mb-20">
              <div className="w-[200px] h-[250px] md:w-[300px] md:h-[360px] mx-auto overflow-hidden rounded-lg mb-4 md:mb-6" style={{ background: member.img ? undefined : "#D9D9D9" }}>
                {member.img ? (
                  <img src={member.img} alt={member.name} className={`w-full h-full object-cover ${member.grayscale ? "grayscale" : ""}`} loading="lazy" width={512} height={640} />
                ) : (
                  <div className="w-full h-full flex items-center justify-center"><div className="w-20 h-20 md:w-28 md:h-28 bg-muted-foreground/20 rounded-full" /></div>
                )}
              </div>
              <div className="text-center mb-4 md:mb-6">
                <h3 className="text-[20px] md:text-[24px] font-bold text-primary" style={{ fontFamily: "'Montserrat', sans-serif" }}>{member.name}</h3>
                <p className="text-[14px] md:text-[16px] text-secondary font-medium">{member.title}</p>
              </div>
              <div className="text-[13px] md:text-[15px] leading-[22px] md:leading-[26px] text-foreground text-left md:text-justify px-4 space-y-3 md:space-y-4">
                {member.bio.split("\n\n").map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
              <p className="text-secondary text-[14px] md:text-[16px] font-medium italic text-center mt-3 md:mt-4 cursor-pointer">devamını oku...</p>
            </div>
          ))}
        </div>
      </section>

      {/* ÇALIŞMA SÜRECİMİZ */}
      <section className="relative">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="py-12 md:py-20 px-4 md:px-16 bg-background">
              <h2 className="text-[32px] md:text-[48px] font-bold text-primary leading-tight md:leading-[58px] mb-8 md:mb-12" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Çalışma Sürecimiz
              </h2>
              <div className="space-y-6 md:space-y-8">
                {[
                  { step: "🏠", title: "Danışmanlık ve Planlama", desc: "Projeleriniz için ihtiyaç analizi yaparak en uygun çözümleri sunarız." },
                  { step: "📐", title: "Proje Uygulaması", desc: "Tasarım aşamasından inşaat sürecine kadar tüm aşamalarda profesyonel ekibimizle yanınızdayız." },
                  { step: "🔧", title: "Bakım ve Destek", desc: "Proje tesliminden sonra da yanınızdayız. Düzenli bakım ve teknik destek hizmeti sunuyoruz." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 md:gap-5">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center text-xl md:text-2xl flex-shrink-0">{item.step}</div>
                    <div>
                      <h4 className="text-[16px] md:text-[20px] font-bold text-primary mb-1 md:mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>{item.title}</h4>
                      <p className="text-[13px] md:text-[14px] text-muted-foreground leading-[20px] md:leading-[22px]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden h-[300px] md:h-auto">
              <img src={taahhutBg} alt="İnşaat" className="w-full h-full object-cover" loading="lazy" width={1200} height={800} />
            </div>
          </div>
        </div>
      </section>

      <ProjectsCarousel
        images={[
          { img1: projectsCarousel, img2: taahhutBg },
          { img1: projectUniversity, img2: projectMarmaray },
          { img1: projectCrystal, img2: taahhutBg },
        ]}
        title="PROJELER"
      />

      <Footer />
    </div>
  );
};

export default Hakkimizda;
